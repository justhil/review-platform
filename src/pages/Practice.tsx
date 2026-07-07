import { useState, useMemo, useCallback, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useSwipeQuestionNav } from '../hooks/useSwipeQuestionNav'
import { useSubject } from '../context/SubjectContext'
import { useProgress } from '../hooks/useProgress'
import { useQuestions } from '../hooks/useQuestions'
import { Latex, MixedLatex } from '../components/Latex'
import { OverlayCanvas } from '../components/OverlayCanvas'
import type { QuestionType, MasteryState } from '../types'

const TYPE_LABELS: Record<string, string> = {
  fill: '填空题',
  single: '单选题',
  truefalse: '判断题',
  short: '简答题',
  calc: '计算识图题',
}

export function Practice() {
  const { config, data } = useSubject()
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get('type') as QuestionType | null
  const favOnly = searchParams.get('fav') === '1'
  const { progress, recordAttempt, setQuestionState, toggleFavorite, isFavorite } = useProgress()

  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showFormulas, setShowFormulas] = useState(false)
  const [showKpDetail, setShowKpDetail] = useState<string | null>(null)
  const [drawingEnabled, setDrawingEnabled] = useState(false)
  const [drawings, setDrawings] = useState<Record<string, string>>({})
  const [showComplete, setShowComplete] = useState(false)
  const [revealAllAnswers, setRevealAllAnswers] = useState(false)

  const handleSaveDrawing = (dataUrl: string) => {
    if (!currentQ) return
    setDrawings(prev => ({ ...prev, [currentQ.id]: dataUrl }))
  }

  const filteredQuestions = useQuestions(data.questions, {
    qtypes: typeFilter ? [typeFilter] : undefined,
  })

  const displayQuestions = useMemo(() => {
    if (!favOnly) return filteredQuestions
    return filteredQuestions.filter(q => (progress.favorites || []).includes(q.id))
  }, [filteredQuestions, favOnly, progress.favorites])

  useEffect(() => {
    if (displayQuestions.length === 0) {
      setCurrentIndex(0)
      return
    }
    setCurrentIndex(i => (i >= displayQuestions.length ? displayQuestions.length - 1 : i))
  }, [displayQuestions.length, favOnly, typeFilter])

  const safeIndex =
    displayQuestions.length === 0 ? 0 : Math.min(currentIndex, displayQuestions.length - 1)
  const currentQ = displayQuestions[safeIndex]
  const currentProgress = currentQ ? progress.question[currentQ.id] : undefined

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

  const handleTypeChange = (type: string) => {
    const params: Record<string, string> = {}
    if (type !== 'all') params.type = type
    if (favOnly) params.fav = '1'
    setSearchParams(params)
    setCurrentIndex(0)
    setShowAnswer(false)
    setSelectedOption(null)
  }

  const handleFavFilter = () => {
    const params: Record<string, string> = {}
    if (typeFilter) params.type = typeFilter
    if (!favOnly) params.fav = '1'
    setSearchParams(params)
    setCurrentIndex(0)
    setShowAnswer(false)
    setSelectedOption(null)
  }

  const handleShowAnswer = () => setShowAnswer(true)

  const handleNext = useCallback(() => {
    if (currentIndex < displayQuestions.length - 1) {
      setCurrentIndex(i => i + 1)
      if (!revealAllAnswers) {
        setShowAnswer(false)
        setSelectedOption(null)
      }
      setShowFormulas(false)
      setShowKpDetail(null)
    } else {
      setShowComplete(true)
    }
  }, [currentIndex, displayQuestions.length, revealAllAnswers])

  const handleRestart = () => {
    setCurrentIndex(0)
    setShowAnswer(false)
    setSelectedOption(null)
    setShowComplete(false)
  }

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(i => i - 1)
      if (!revealAllAnswers) {
        setShowAnswer(false)
        setSelectedOption(null)
      }
      setShowFormulas(false)
      setShowKpDetail(null)
    }
  }, [currentIndex, revealAllAnswers])

  const handleMastery = (state: MasteryState) => {
    if (!currentQ) return
    const isCorrect = state === 'known'
    recordAttempt(currentQ.id, currentQ.kp, isCorrect, state)
    setShowAnswer(true)
  }

  const handleMarkMastered = () => {
    if (!currentQ) return
    setQuestionState(currentQ.id, 'known')
  }

  const handleOptionSelect = (opt: string) => {
    setSelectedOption(opt)
    setShowAnswer(true)
  }

  if (displayQuestions.length === 0) {
    return (
      <div className="practice">
        <h1>{config.name} - 题库训练</h1>
        <div className="filter-bar">
          <button className={!typeFilter ? 'btn active' : 'btn'} onClick={() => handleTypeChange('all')}>全部</button>
          {Object.entries(TYPE_LABELS).map(([k, v]) => (
            <button key={k} className={typeFilter === k ? 'btn active' : 'btn'} onClick={() => handleTypeChange(k)}>{v}</button>
          ))}
          <button className={favOnly ? 'btn active fav-btn' : 'btn fav-btn'} onClick={handleFavFilter}>★ 收藏</button>
        </div>
        <p className="empty-hint">{favOnly ? '暂无收藏题目' : '暂无题目'}</p>
      </div>
    )
  }

  const isCurrentFav = currentQ && isFavorite(currentQ.id)
  const answerVisible = revealAllAnswers || showAnswer

  const swipeNav = useSwipeQuestionNav({
    onPrev: handlePrev,
    onNext: handleNext,
    drawingEnabled,
  })

  if (!currentQ) {
    return (
      <div className="practice">
        <h1>{config.name} - 题库训练</h1>
        <p className="empty-hint">题目加载异常，请切换筛选或刷新页面</p>
      </div>
    )
  }

  return (
    <div className={`practice ${drawingEnabled ? 'drawing-active' : ''}`}>
      <h1>{config.name} - 题库训练</h1>

      <div className="filter-bar">
        <button className={!typeFilter ? 'btn active' : 'btn'} onClick={() => handleTypeChange('all')}>全部</button>
        {Object.entries(TYPE_LABELS).map(([k, v]) => (
          <button key={k} className={typeFilter === k ? 'btn active' : 'btn'} onClick={() => handleTypeChange(k)}>{v}</button>
        ))}
        <button className={favOnly ? 'btn active fav-btn' : 'btn fav-btn'} onClick={handleFavFilter}>★ 收藏</button>
        <button
          type="button"
          className={`btn reveal-answers-btn ${revealAllAnswers ? 'active' : ''}`}
          onClick={() => setRevealAllAnswers(v => !v)}
        >
          {revealAllAnswers ? '隐藏答案' : '显示答案'}
        </button>
      </div>

      <div className="progress-bar">
        <span>{safeIndex + 1} / {displayQuestions.length}</span>
        {currentProgress && <span className={`state-badge ${currentProgress.state}`}>{currentProgress.state === 'known' ? '会' : currentProgress.state === 'unsure' ? '不熟' : '不会'}</span>}
      </div>

      {showComplete && (
        <div className="modal-overlay" onClick={() => setShowComplete(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2>🎉 练习完成</h2>
            <p>已完成本组 {displayQuestions.length} 道题目的练习</p>
            <div className="modal-actions">
              <button className="btn" onClick={handleRestart}>重新开始</button>
              <button className="btn primary" onClick={() => setShowComplete(false)}>继续复习</button>
            </div>
          </div>
        </div>
      )}

      <div
        className="practice-content-wrapper swipe-question-area"
        onTouchStart={swipeNav.onTouchStart}
        onTouchEnd={swipeNav.onTouchEnd}
        onTouchCancel={swipeNav.onTouchCancel}
      >
        <div className="question-card">
          <div className="question-header-row">
            <div className="question-type">{TYPE_LABELS[currentQ.qtype]}</div>
            <div className="question-actions">
              <button className={`icon-btn ${isCurrentFav ? 'active' : ''}`} onClick={() => toggleFavorite(currentQ.id)} title={isCurrentFav ? '取消收藏' : '收藏'}>
                {isCurrentFav ? '★' : '☆'}
              </button>
              {currentProgress?.state !== 'known' && (
                <button className="btn small" onClick={handleMarkMastered} title="标记为已掌握">✓ 已掌握</button>
              )}
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
                  <Latex>{f.latex}</Latex>
                  {f.mnemonic && <span className="mnemonic">记忆：{f.mnemonic}</span>}
                  {f.usage && <span className="usage">用途：{f.usage}</span>}
                </div>
              ))}
            </div>
          )}

          <div className="question-stem"><MixedLatex>{currentQ.stem}</MixedLatex></div>

          {currentQ.options && (
            <div className="options">
              {currentQ.options.map((opt, i) => {
                const letter = String.fromCharCode(65 + i)
                const isCorrect = currentQ.answer === letter
                const isSelected = selectedOption === letter
                let className = 'option'
                if (answerVisible) {
                  if (isCorrect) className += ' correct'
                  else if (isSelected) className += ' wrong'
                }
                return (
                  <div key={i} className={className} onClick={() => !answerVisible && handleOptionSelect(letter)}>
                    <span className="option-letter">{letter}.</span> <MixedLatex>{opt}</MixedLatex>
                  </div>
                )
              })}
            </div>
          )}

          {currentQ.qtype === 'truefalse' && !currentQ.options && (
            <div className="options tf-options">
              {['对', '错'].map(opt => {
                const isCorrect = currentQ.answer === opt
                const isSelected = selectedOption === opt
                let className = 'option'
                if (answerVisible) {
                  if (isCorrect) className += ' correct'
                  else if (isSelected) className += ' wrong'
                }
                return (
                  <div key={opt} className={className} onClick={() => !answerVisible && handleOptionSelect(opt)}>
                    {opt}
                  </div>
                )
              })}
            </div>
          )}

          {!answerVisible && !currentQ.options && currentQ.qtype !== 'truefalse' && (
            <button className="btn primary" onClick={handleShowAnswer}>显示本题答案</button>
          )}

          {answerVisible && (
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
              <Link to="knowledge" className="btn small">查看全部知识点</Link>
            </div>
          )}

          <div className="mastery-buttons">
            <span>自评：</span>
            <button className="btn known" onClick={() => handleMastery('known')}>会</button>
            <button className="btn unsure" onClick={() => handleMastery('unsure')}>不熟</button>
            <button className="btn unknown" onClick={() => handleMastery('unknown')}>不会</button>
          </div>
        </div>
      </div>

      <nav className="question-nav-dock" aria-label="题目切换">
        <button type="button" className="btn question-nav-btn" onClick={handlePrev} disabled={safeIndex === 0}>← 上一题</button>
        <span className="question-nav-progress">{safeIndex + 1} / {displayQuestions.length}</span>
        <button type="button" className="btn primary question-nav-btn" onClick={handleNext} disabled={safeIndex === displayQuestions.length - 1}>下一题 →</button>
      </nav>

      <OverlayCanvas
        key={currentQ.id}
        initialData={drawings[currentQ.id]}
        onSave={handleSaveDrawing}
        drawingEnabled={drawingEnabled}
        onToggleDrawing={() => setDrawingEnabled(!drawingEnabled)}
      />
    </div>
  )
}
