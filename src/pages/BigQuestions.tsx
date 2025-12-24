import { useState, useMemo } from 'react'
import { useSubject } from '../context/SubjectContext'
import { MixedLatex } from '../components/Latex'

const TAG_LABELS: Record<string, string> = {
  theory: '理论',
  calc: '计算',
  procedure: '步骤',
}

const BQ_PROGRESS_KEY_PREFIX = 'review-bq-revealed-'

function loadRevealedIds(subjectId: string): Set<string> {
  const raw = localStorage.getItem(BQ_PROGRESS_KEY_PREFIX + subjectId)
  if (raw) return new Set(JSON.parse(raw))
  return new Set()
}

function saveRevealedIds(subjectId: string, ids: Set<string>) {
  localStorage.setItem(BQ_PROGRESS_KEY_PREFIX + subjectId, JSON.stringify([...ids]))
}

export function BigQuestions() {
  const { subjectId, config, data } = useSubject()
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null)
  const [hiddenAnswers, setHiddenAnswers] = useState<Set<string>>(() => {
    const revealed = loadRevealedIds(subjectId)
    return new Set(data.bigQuestions.filter(q => !revealed.has(q.id)).map(q => q.id))
  })
  const [expandedImages, setExpandedImages] = useState<Set<string>>(new Set())
  const [showDetails, setShowDetails] = useState<Set<string>>(new Set())

  const chapterMap = useMemo(() => {
    const map: Record<string, string> = {}
    config.chapters.forEach(ch => { map[ch.id] = ch.name })
    return map
  }, [config.chapters])

  const filteredQuestions = useMemo(() => {
    if (!selectedChapter) return data.bigQuestions
    return data.bigQuestions.filter(q => q.chapter === selectedChapter)
  }, [selectedChapter, data.bigQuestions])

  const groupedQuestions = useMemo(() => {
    const groups = new Map<string, typeof data.bigQuestions>()
    for (const q of filteredQuestions) {
      const list = groups.get(q.groupId) || []
      list.push(q)
      groups.set(q.groupId, list)
    }
    return groups
  }, [filteredQuestions])

  const toggleAnswer = (id: string) => {
    setHiddenAnswers(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      const revealed = new Set(data.bigQuestions.filter(q => !next.has(q.id)).map(q => q.id))
      saveRevealedIds(subjectId, revealed)
      return next
    })
  }

  const toggleDetails = (id: string) => {
    setShowDetails(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const toggleImage = (groupId: string) => {
    setExpandedImages(prev => {
      const next = new Set(prev)
      if (next.has(groupId)) next.delete(groupId)
      else next.add(groupId)
      return next
    })
  }

  const showAllAnswers = () => {
    setHiddenAnswers(new Set())
    saveRevealedIds(subjectId, new Set(data.bigQuestions.map(q => q.id)))
  }
  const hideAllAnswers = () => {
    setHiddenAnswers(new Set(data.bigQuestions.map(q => q.id)))
    saveRevealedIds(subjectId, new Set())
  }

  const stats = useMemo(() => {
    const total = filteredQuestions.length
    const revealed = filteredQuestions.filter(q => !hiddenAnswers.has(q.id)).length
    return { total, revealed }
  }, [filteredQuestions, hiddenAnswers])

  return (
    <div className="big-questions">
      <h1>{config.name} - 大题背诵</h1>

      <div className="filter-bar">
        <button className={!selectedChapter ? 'btn active' : 'btn'} onClick={() => setSelectedChapter(null)}>全部</button>
        {config.chapters.map(ch => (
          <button key={ch.id} className={selectedChapter === ch.id ? 'btn active' : 'btn'} onClick={() => setSelectedChapter(ch.id)}>
            {ch.name}
          </button>
        ))}
      </div>

      <div className="bq-toolbar">
        <div className="bq-stats">已背诵 {stats.revealed} / {stats.total} 题</div>
        <div className="mode-buttons">
          <button className="btn" onClick={hideAllAnswers}>遮挡全部</button>
          <button className="btn" onClick={showAllAnswers}>显示全部</button>
        </div>
      </div>

      <div className="bq-groups">
        {Array.from(groupedQuestions.entries()).map(([groupId, questions]) => {
          const group = data.bigQuestionImageGroups.find(g => g.id === groupId)
          const isImageExpanded = expandedImages.has(groupId)

          return (
            <div key={groupId} className="bq-group card">
              <div className="bq-group-header">
                <h2>{group?.label || groupId}</h2>
                <span className="bq-group-hint">{group?.sourceHint}</span>
                <button className="btn bq-img-toggle" onClick={() => toggleImage(groupId)}>
                  {isImageExpanded ? '收起题图' : '查看题图'}
                </button>
              </div>

              {isImageExpanded && (
                <div className="bq-image-container">
                  <p className="empty-hint">题图待添加</p>
                </div>
              )}

              <div className="bq-list">
                {questions.map(q => {
                  const isHidden = hiddenAnswers.has(q.id)
                  const hasDetails = q.details && q.details.length > 0
                  const isDetailsShown = showDetails.has(q.id)

                  return (
                    <div key={q.id} className="bq-item">
                      <div className="bq-item-header">
                        <span className="bq-topic">{q.topic}</span>
                        {q.tags && q.tags.map(tag => (
                          <span key={tag} className={`bq-tag bq-tag-${tag}`}>{TAG_LABELS[tag]}</span>
                        ))}
                      </div>

                      <div className="bq-prompt">
                        <MixedLatex>{q.prompt}</MixedLatex>
                      </div>

                      <div className={`bq-answer ${isHidden ? 'bq-answer-hidden' : ''}`} onClick={() => toggleAnswer(q.id)}>
                        {isHidden ? (
                          <div className="bq-answer-mask">点击显示答案</div>
                        ) : (
                          <ul className="bq-summary">
                            {q.summary.map((line, i) => (
                              <li key={i}><MixedLatex>{line}</MixedLatex></li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {!isHidden && hasDetails && (
                        <div className="bq-details-toggle">
                          <button className="btn" onClick={() => toggleDetails(q.id)}>
                            {isDetailsShown ? '收起详解' : '展开详解'}
                          </button>
                        </div>
                      )}

                      {!isHidden && isDetailsShown && q.details && (
                        <div className="bq-details">
                          {q.details.map((line, i) => (
                            <p key={i}><MixedLatex>{line}</MixedLatex></p>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
