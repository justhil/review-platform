import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSubject } from '../context/SubjectContext'
import { useExams } from '../hooks/useExams'
import { useProgress } from '../hooks/useProgress'
import type { QuestionType } from '../types'

const TYPE_LABELS: Record<QuestionType, string> = {
  fill: '填空题',
  single: '单选题',
  truefalse: '判断题',
  short: '简答题',
  calc: '计算识图题',
}

const DEFAULT_CONFIG = {
  fill: 5,
  single: 10,
  truefalse: 5,
  short: 3,
  calc: 2,
  timeLimit: 90,
}

export function Exams() {
  const navigate = useNavigate()
  const { config, data } = useSubject()
  const { exams, generateExam, getAvailableCounts, deleteExam, resetUsedQuestions } = useExams(data.questions)
  const { progress } = useProgress()
  const [examConfig, setExamConfig] = useState(DEFAULT_CONFIG)
  const [showConfig, setShowConfig] = useState(false)
  const [error, setError] = useState('')
  const [includeKnown, setIncludeKnown] = useState(false)

  const generateOptions = useMemo(() => ({ progress, includeKnown }), [progress, includeKnown])
  const availableCounts = getAvailableCounts(generateOptions)

  const knownCount = useMemo(() => {
    return data.questions.filter(q => progress.question[q.id]?.state === 'known').length
  }, [data.questions, progress])

  const handleGenerate = () => {
    setError('')
    const types: QuestionType[] = ['fill', 'single', 'truefalse', 'short', 'calc']
    for (const type of types) {
      if (examConfig[type] > availableCounts[type]) {
        setError(`${TYPE_LABELS[type]}可用题目不足，需要${examConfig[type]}题，仅剩${availableCounts[type]}题`)
        return
      }
    }
    const exam = generateExam(examConfig, generateOptions)
    if (exam) {
      setShowConfig(false)
      navigate(`exam/${exam.id}`)
    }
  }

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    return `${minutes}分${seconds}秒`
  }

  const formatDate = (ts: number) => {
    const d = new Date(ts)
    return `${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`
  }

  return (
    <div className="exams">
      <h1>{config.name} - 模拟考试</h1>

      <div className="exam-actions">
        <button className="btn primary" onClick={() => setShowConfig(true)}>生成新试卷</button>
        <button className="btn" onClick={resetUsedQuestions}>重置题库</button>
      </div>

      {showConfig && (
        <div className="modal-overlay" onClick={() => setShowConfig(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>试卷配置</h2>
            <div className="config-form">
              {(['fill', 'single', 'truefalse', 'short', 'calc'] as QuestionType[]).map(type => (
                <div key={type} className="config-row">
                  <label>{TYPE_LABELS[type]}</label>
                  <input type="number" min={0} max={availableCounts[type]} value={examConfig[type]} onChange={e => setExamConfig({ ...examConfig, [type]: parseInt(e.target.value) || 0 })} />
                  <span className="available">可用: {availableCounts[type]}</span>
                </div>
              ))}
              <div className="config-row">
                <label>考试时间(分钟)</label>
                <input type="number" min={10} max={180} value={examConfig.timeLimit} onChange={e => setExamConfig({ ...examConfig, timeLimit: parseInt(e.target.value) || 90 })} />
              </div>
              <div className="config-row checkbox-row">
                <label>
                  <input type="checkbox" checked={includeKnown} onChange={e => setIncludeKnown(e.target.checked)} />
                  包含已掌握题目
                </label>
                <span className="hint">已掌握 {knownCount} 题</span>
              </div>
            </div>
            {error && <div className="error-msg">{error}</div>}
            <div className="modal-actions">
              <button className="btn" onClick={() => setShowConfig(false)}>取消</button>
              <button className="btn primary" onClick={handleGenerate}>生成并开始</button>
            </div>
          </div>
        </div>
      )}

      <div className="exam-list">
        {exams.length === 0 ? (
          <p className="empty-hint">暂无试卷，点击"生成新试卷"开始</p>
        ) : (
          exams.map(exam => (
            <div key={exam.id} className="exam-card">
              <div className="exam-info">
                <h3>{exam.title}</h3>
                <div className="exam-meta">
                  <span>创建: {formatDate(exam.createdAt)}</span>
                  <span>题数: {exam.questions.length}</span>
                  <span>时限: {exam.timeLimit}分钟</span>
                  {exam.finishedAt && <span>用时: {formatTime(exam.elapsedTime || 0)}</span>}
                </div>
              </div>
              <div className="exam-actions-row">
                <button className="btn primary" onClick={() => navigate(`exam/${exam.id}`)}>
                  {exam.finishedAt ? '查看' : exam.startedAt ? '继续' : '开始'}
                </button>
                <button className="btn danger" onClick={() => deleteExam(exam.id)}>删除</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
