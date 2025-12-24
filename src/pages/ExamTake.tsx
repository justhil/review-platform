import { useState, useEffect, useMemo, useRef, useCallback } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useSubject } from '../context/SubjectContext'
import { useExams } from '../hooks/useExams'
import { useProgress } from '../hooks/useProgress'
import { OverlayCanvas } from '../components/OverlayCanvas'
import { Latex, MixedLatex } from '../components/Latex'
import type { Question, QuestionType, MasteryState, ID } from '../types'

type AnswerRecord = Record<ID, { answer: string; submitted: boolean; correct?: boolean }>
const ANSWERS_KEY_PREFIX = 'exam-answers-'

const TYPE_LABELS: Record<QuestionType, string> = {
  fill: '填空题',
  single: '单选题',
  truefalse: '判断题',
  short: '简答题',
  calc: '计算识图题',
}

export function ExamTake() {
  const { examId } = useParams<{ examId: string }>()
  const navigate = useNavigate()
  const { subjectId, data } = useSubject()
  const { exams, updateExam, saveDrawing } = useExams(data.questions)
  const { progress, toggleFavorite, isFavorite, setQuestionState, recordAttempt } = useProgress()

  const exam = exams.find(e => e.id === examId)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [showFormulas, setShowFormulas] = useState(false)
  const [showKpDetail, setShowKpDetail] = useState<string | null>(null)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [drawingEnabled, setDrawingEnabled] = useState(false)
  const [answers, setAnswers] = useState<AnswerRecord>({})
  const [showConfirmFinish, setShowConfirmFinish] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    if (!examId) return
    const saved = localStorage.getItem(ANSWERS_KEY_PREFIX + examId)
    if (saved) setAnswers(JSON.parse(saved))
  }, [examId])

  const saveAnswers = useCallback((newAnswers: AnswerRecord) => {
    setAnswers(newAnswers)
    if (examId) localStorage.setItem(ANSWERS_KEY_PREFIX + examId, JSON.stringify(newAnswers))
  }, [examId])

  const examQuestions = useMemo(() => {
    if (!exam) return []
    const qMap = new Map(data.questions.map(q => [q.id, q]))
    return exam.questions.map(id => qMap.get(id)).filter(Boolean) as Question[]
  }, [exam, data.questions])

  const currentQ = examQuestions[currentIndex]

  const kpMap = useMemo(() => {
    const map: Record<string, typeof data.knowledgePoints[0]> = {}
    data.knowledgePoints.forEach(kp => { map[kp.id] = kp })
    return map
  }, [data.knowledgePoints])

  const relatedFormulas = useMemo(() => {
    if (!currentQ) return []
    return data.formulas.filter(f => f.kp.some(kpId => currentQ.kp.includes(kpId)))
  }, [currentQ, data.formulas])

  const relatedKps = useMemo(() => {
    if (!currentQ) return []
    return currentQ.kp.map(id => kpMap[id]).filter(Boolean)
  }, [currentQ, kpMap])

  useEffect(() => {
    if (!exam) return
    if (!exam.startedAt && !exam.finishedAt) {
      updateExam(exam.id, { startedAt: Date.now() })
    }
    if (exam.elapsedTime) {
      setElapsedTime(exam.elapsedTime)
    }
  }, [exam?.id])

  useEffect(() => {
    if (!exam || exam.finishedAt) return
    timerRef.current = window.setInterval(() => {
      setElapsedTime(t => t + 1000)
    }, 1000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [exam?.finishedAt])

  useEffect(() => {
    if (!exam || exam.finishedAt) return
    const saveInterval = setInterval(() => {
      updateExam(exam.id, { elapsedTime })
    }, 10000)
    return () => clearInterval(saveInterval)
  }, [exam?.id, elapsedTime, exam?.finishedAt])

  const handleConfirmFinish = useCallback(() => {
    if (!exam) return
    updateExam(exam.id, { finishedAt: Date.now(), elapsedTime })
    if (timerRef.current) clearInterval(timerRef.current)
    setShowConfirmFinish(false)
    setShowResult(true)
  }, [exam, elapsedTime, updateExam])

  const weakKps = useMemo(() => {
    const kpErrors: Record<string, number> = {}
    examQuestions.forEach(q => {
      const rec = answers[q.id]
      if (rec?.submitted && !rec.correct) {
        q.kp.forEach(kpId => { kpErrors[kpId] = (kpErrors[kpId] || 0) + 1 })
      }
    })
    return Object.entries(kpErrors)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([id, count]) => ({ kp: kpMap[id], count }))
      .filter(item => item.kp)
  }, [examQuestions, answers, kpMap])

  const handleSaveDrawing = useCallback((dataUrl: string) => {
    if (!exam || !currentQ) return
    saveDrawing(exam.id, currentQ.id, dataUrl)
  }, [exam, currentQ, saveDrawing])

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1)
      setShowAnswer(false)
      setShowFormulas(false)
      setShowKpDetail(null)
    }
  }

  const handleNext = () => {
    if (currentIndex < examQuestions.length - 1) {
      setCurrentIndex(i => i + 1)
      setShowAnswer(false)
      setShowFormulas(false)
      setShowKpDetail(null)
    }
  }

  const handleAnswerChange = (value: string) => {
    if (!currentQ) return
    saveAnswers({ ...answers, [currentQ.id]: { answer: value, submitted: false } })
  }

  const checkAnswer = (q: Question, userAnswer: string): boolean => {
    const correctAnswer = Array.isArray(q.answer) ? q.answer[0] : q.answer
    return userAnswer.trim().toUpperCase() === correctAnswer.trim().toUpperCase()
  }

  const handleSubmitAnswer = () => {
    if (!currentQ) return
    const record = answers[currentQ.id]
    if (!record?.answer) return
    const isCorrect = checkAnswer(currentQ, record.answer)
    saveAnswers({ ...answers, [currentQ.id]: { ...record, submitted: true, correct: isCorrect } })
    setShowAnswer(true)
  }

  const handleJudge = (isCorrect: boolean) => {
    if (!currentQ) return
    const record = answers[currentQ.id] || { answer: '', submitted: true }
    saveAnswers({ ...answers, [currentQ.id]: { ...record, submitted: true, correct: isCorrect } })
    recordAttempt(currentQ.id, currentQ.kp, isCorrect)
    setShowAnswer(true)
  }

  const handleSetMastery = (state: MasteryState) => {
    if (!currentQ) return
    setQuestionState(currentQ.id, state)
  }

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60
    if (hours > 0) return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    return `${minutes}:${String(seconds).padStart(2, '0')}`
  }

  if (!exam) {
    return (
      <div className="exam-take">
        <h1>试卷不存在</h1>
        <button className="btn" onClick={() => navigate(`/${subjectId}/exams`)}>返回试卷列表</button>
      </div>
    )
  }

  const timeLimit = exam.timeLimit * 60 * 1000
  const isOvertime = elapsedTime > timeLimit
  const isFinished = !!exam.finishedAt
  const isCurrentFav = currentQ && isFavorite(currentQ.id)
  const currentMastery = currentQ ? progress.question[currentQ.id]?.state : undefined
  const currentAnswer = currentQ ? answers[currentQ.id] : undefined
  const isSubmitted = currentAnswer?.submitted ?? false

  const examStats = useMemo(() => {
    let answered = 0, correct = 0, wrong = 0
    examQuestions.forEach(q => {
      const rec = answers[q.id]
      if (rec?.submitted) {
        answered++
        if (rec.correct) correct++
        else wrong++
      }
    })
    return { answered, correct, wrong, total: examQuestions.length }
  }, [examQuestions, answers])

  return (
    <div className="exam-take-fullscreen">
      <div className="exam-header">
        <h1>{exam.title}</h1>
        <div className="exam-timer-bar">
          <span className={`timer ${isOvertime ? 'overtime' : ''}`}>{formatTime(elapsedTime)} / {exam.timeLimit}分钟</span>
          {!isFinished && <button className="btn danger" onClick={() => setShowConfirmFinish(true)}>交卷</button>}
          {isFinished && <button className="btn primary" onClick={() => setShowResult(true)}>查看成绩</button>}
        </div>
      </div>

      <div className="exam-stats">
        <span>已答: {examStats.answered}/{examStats.total}</span>
        <span className="correct">正确: {examStats.correct}</span>
        <span className="wrong">错误: {examStats.wrong}</span>
      </div>

      <div className="exam-progress">
        {examQuestions.map((q, i) => {
          const rec = answers[q.id]
          const statusClass = rec?.submitted ? (rec.correct ? 'correct' : 'wrong') : (rec?.answer ? 'answered' : '')
          return (
            <button key={i} className={`progress-dot ${i === currentIndex ? 'active' : ''} ${statusClass} ${isFavorite(q.id) ? 'is-fav' : ''}`} onClick={() => { setCurrentIndex(i); setShowAnswer(false); setShowFormulas(false); setShowKpDetail(null) }}>
              {i + 1}
            </button>
          )
        })}
      </div>

      {currentQ && (
        <div className="exam-content-wrapper">
          <div className="exam-content">
            <div className="question-card">
              <div className="question-header-row">
                <div className="question-header">
                  <span className="question-number">第 {currentIndex + 1} 题</span>
                  <span className="question-type">{TYPE_LABELS[currentQ.qtype]}</span>
                </div>
                <div className="question-actions">
                  <button className={`icon-btn ${isCurrentFav ? 'active' : ''}`} onClick={() => toggleFavorite(currentQ.id)} title={isCurrentFav ? '取消收藏' : '收藏'}>
                    {isCurrentFav ? '★' : '☆'}
                  </button>
                  {relatedFormulas.length > 0 && (
                    <button className="btn small" onClick={() => setShowFormulas(!showFormulas)}>
                      {showFormulas ? '隐藏公式' : '查看公式'}
                    </button>
                  )}
                </div>
              </div>

              {showFormulas && relatedFormulas.length > 0 && (
                <div className="formula-panel">
                  <h4>相关公式</h4>
                  {relatedFormulas.map(f => (
                    <div key={f.id} className="formula-item">
                      <div className="formula-latex"><Latex>{f.latex}</Latex></div>
                      {f.mnemonic && <span className="mnemonic">记忆：{f.mnemonic}</span>}
                      {f.usage && <span className="usage">用途：{f.usage}</span>}
                    </div>
                  ))}
                </div>
              )}

              <div className="question-stem"><MixedLatex>{currentQ.stem}</MixedLatex></div>

              {currentQ.qtype === 'single' && currentQ.options && (
                <div className="options selectable">
                  {currentQ.options.map((opt, i) => {
                    const letter = String.fromCharCode(65 + i)
                    const isSelected = currentAnswer?.answer === letter
                    const correctLetter = Array.isArray(currentQ.answer) ? currentQ.answer[0] : currentQ.answer
                    const showResult = isSubmitted || isFinished || showAnswer
                    const isCorrectOption = letter === correctLetter.toUpperCase()
                    return (
                      <div key={i} className={`option ${isSelected ? 'selected' : ''} ${showResult && isCorrectOption ? 'correct' : ''} ${showResult && isSelected && !isCorrectOption ? 'wrong' : ''}`} onClick={() => !isSubmitted && !isFinished && handleAnswerChange(letter)}>
                        <span className="option-letter">{letter}.</span> <MixedLatex>{opt}</MixedLatex>
                      </div>
                    )
                  })}
                </div>
              )}

              {currentQ.qtype === 'truefalse' && (
                <div className="options tf-options selectable">
                  {['对', '错'].map(opt => {
                    const isSelected = currentAnswer?.answer === opt
                    const correctAnswer = Array.isArray(currentQ.answer) ? currentQ.answer[0] : currentQ.answer
                    const showResult = isSubmitted || isFinished || showAnswer
                    const isCorrectOption = opt === correctAnswer
                    return (
                      <div key={opt} className={`option ${isSelected ? 'selected' : ''} ${showResult && isCorrectOption ? 'correct' : ''} ${showResult && isSelected && !isCorrectOption ? 'wrong' : ''}`} onClick={() => !isSubmitted && !isFinished && handleAnswerChange(opt)}>
                        {opt}
                      </div>
                    )
                  })}
                </div>
              )}

              {(currentQ.qtype === 'fill' || currentQ.qtype === 'short' || currentQ.qtype === 'calc') && !isFinished && (
                <div className="answer-input-area">
                  <textarea placeholder="在此输入答案..." value={currentAnswer?.answer || ''} onChange={e => handleAnswerChange(e.target.value)} disabled={isSubmitted} rows={currentQ.qtype === 'fill' ? 2 : 4} />
                </div>
              )}

              {(isFinished || showAnswer) && (
                <div className="answer-section">
                  <div className="answer">
                    <strong>答案：</strong>
                    <MixedLatex>{Array.isArray(currentQ.answer) ? currentQ.answer.join('、') : currentQ.answer}</MixedLatex>
                  </div>
                  {currentQ.analysis && <div className="analysis"><strong>解析：</strong><MixedLatex>{currentQ.analysis}</MixedLatex></div>}
                  <div className="kp-tags">
                    <strong>知识点：</strong>
                    {relatedKps.map(kp => (
                      <span key={kp.id} className="tag clickable" onClick={() => setShowKpDetail(showKpDetail === kp.id ? null : kp.id)}>
                        {kp.title}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {showKpDetail && kpMap[showKpDetail] && (
                <div className="kp-detail-panel">
                  <div className="kp-detail-header">
                    <h4>{kpMap[showKpDetail].title}</h4>
                    <button className="close-btn" onClick={() => setShowKpDetail(null)}>×</button>
                  </div>
                  <p><MixedLatex>{kpMap[showKpDetail].body}</MixedLatex></p>
                  <Link to={`/${subjectId}/knowledge`} className="btn small">查看全部知识点</Link>
                </div>
              )}

              {(isFinished || showAnswer) && (
                <div className="judge-buttons">
                  <span>本题判定：</span>
                  <button className={`btn small ${currentAnswer?.correct === true ? 'active correct' : ''}`} onClick={() => handleJudge(true)}>答对了</button>
                  <button className={`btn small ${currentAnswer?.correct === false ? 'active wrong' : ''}`} onClick={() => handleJudge(false)}>答错了</button>
                </div>
              )}

              {(isFinished || showAnswer) && (
                <div className="mastery-buttons">
                  <span>掌握程度：</span>
                  <button className={`btn small ${currentMastery === 'known' ? 'known' : ''}`} onClick={() => handleSetMastery('known')}>已掌握</button>
                  <button className={`btn small ${currentMastery === 'unsure' ? 'unsure' : ''}`} onClick={() => handleSetMastery('unsure')}>不确定</button>
                  <button className={`btn small ${currentMastery === 'unknown' ? 'unknown' : ''}`} onClick={() => handleSetMastery('unknown')}>未掌握</button>
                </div>
              )}

              {!isFinished && !showAnswer && !isSubmitted && (
                <div className="submit-area">
                  {(currentQ.qtype === 'single' || currentQ.qtype === 'truefalse') && currentAnswer?.answer && (
                    <button className="btn primary" onClick={handleSubmitAnswer}>提交答案</button>
                  )}
                  {(currentQ.qtype === 'fill' || currentQ.qtype === 'short' || currentQ.qtype === 'calc') && (
                    <button className="btn" onClick={() => setShowAnswer(true)}>查看答案</button>
                  )}
                  <button className="btn" onClick={() => setShowAnswer(true)}>跳过</button>
                </div>
              )}

              <div className="inline-nav">
                <button className="btn" onClick={handlePrev} disabled={currentIndex === 0}>← 上一题</button>
                <button className="btn" onClick={handleNext} disabled={currentIndex === examQuestions.length - 1}>下一题 →</button>
              </div>
            </div>
          </div>

          <OverlayCanvas key={currentQ.id} initialData={exam.drawings[currentQ.id]} onSave={handleSaveDrawing} disabled={isFinished} drawingEnabled={drawingEnabled} onToggleDrawing={() => setDrawingEnabled(!drawingEnabled)} />
        </div>
      )}

      <div className="exam-nav">
        <button className="btn" onClick={handlePrev} disabled={currentIndex === 0}>上一题</button>
        <button className="btn" onClick={handleNext} disabled={currentIndex === examQuestions.length - 1}>下一题</button>
        <button className="btn" onClick={() => navigate(`/${subjectId}/exams`)}>返回列表</button>
      </div>

      {showConfirmFinish && (
        <div className="modal-overlay" onClick={() => setShowConfirmFinish(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>确认交卷？</h2>
            <p>已答 {examStats.answered}/{examStats.total} 题，还有 {examStats.total - examStats.answered} 题未作答</p>
            <p>用时：{formatTime(elapsedTime)}</p>
            <div className="modal-actions">
              <button className="btn" onClick={() => setShowConfirmFinish(false)}>继续答题</button>
              <button className="btn danger" onClick={handleConfirmFinish}>确认交卷</button>
            </div>
          </div>
        </div>
      )}

      {showResult && (
        <div className="modal-overlay" onClick={() => setShowResult(false)}>
          <div className="modal result-modal" onClick={e => e.stopPropagation()}>
            <h2>考试成绩</h2>
            <div className="result-score">
              <div className="score-circle">
                <span className="score-value">{examStats.total > 0 ? Math.round(examStats.correct / examStats.total * 100) : 0}</span>
                <span className="score-label">分</span>
              </div>
            </div>
            <div className="result-stats">
              <div className="result-stat"><span className="label">总题数</span><span>{examStats.total}</span></div>
              <div className="result-stat correct"><span className="label">正确</span><span>{examStats.correct}</span></div>
              <div className="result-stat wrong"><span className="label">错误</span><span>{examStats.wrong}</span></div>
              <div className="result-stat"><span className="label">用时</span><span>{formatTime(elapsedTime)}</span></div>
            </div>
            {weakKps.length > 0 && (
              <div className="result-weak">
                <h4>薄弱知识点</h4>
                <ul>
                  {weakKps.map(({ kp, count }) => (
                    <li key={kp.id}>{kp.title} <span className="error-count">错{count}题</span></li>
                  ))}
                </ul>
              </div>
            )}
            <div className="modal-actions">
              <button className="btn" onClick={() => setShowResult(false)}>继续复习</button>
              <button className="btn primary" onClick={() => navigate(`/${subjectId}/exams`)}>返回列表</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
