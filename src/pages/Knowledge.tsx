import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSubject } from '../context/SubjectContext'
import { Latex, MixedLatex } from '../components/Latex'

export function Knowledge() {
  const navigate = useNavigate()
  const { config, data, subjectId } = useSubject()
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null)
  const [expandedKp, setExpandedKp] = useState<string | null>(null)

  const chapterMap = useMemo(() => {
    const map: Record<string, string> = {}
    config.chapters.forEach(ch => { map[ch.id] = ch.name })
    return map
  }, [config.chapters])

  const kpQuestionCount = useMemo(() => {
    const count: Record<string, number> = {}
    data.questions.forEach(q => q.kp.forEach(kpId => { count[kpId] = (count[kpId] || 0) + 1 }))
    return count
  }, [data.questions])

  const filteredKps = selectedChapter
    ? data.knowledgePoints.filter(kp => kp.chapter === selectedChapter)
    : data.knowledgePoints

  const formulaMap = new Map(data.formulas.map(f => [f.id, f]))

  return (
    <div className="knowledge">
      <h1>{config.name} - 知识点卡片库</h1>

      <div className="filter-bar">
        <button className={!selectedChapter ? 'btn active' : 'btn'} onClick={() => setSelectedChapter(null)}>全部</button>
        {config.chapters.map(ch => (
          <button key={ch.id} className={selectedChapter === ch.id ? 'btn active' : 'btn'} onClick={() => setSelectedChapter(ch.id)}>
            {ch.name}
          </button>
        ))}
      </div>

      <div className="kp-list">
        {filteredKps.map(kp => (
          <div key={kp.id} className={`kp-card ${expandedKp === kp.id ? 'expanded' : ''}`} onClick={() => setExpandedKp(expandedKp === kp.id ? null : kp.id)}>
            <div className="kp-header">
              <span className="kp-chapter">{chapterMap[kp.chapter]}</span>
              <span className="kp-title">{kp.title}</span>
              <span className="kp-question-count">{kpQuestionCount[kp.id] || 0}题</span>
              <span className={`kp-difficulty d${kp.difficulty}`}>难度{kp.difficulty}</span>
            </div>

            {expandedKp === kp.id && (
              <div className="kp-body">
                <p><MixedLatex>{kp.body}</MixedLatex></p>

                {kp.formulas.length > 0 && (
                  <div className="kp-formulas">
                    <strong>相关公式：</strong>
                    <ul>
                      {kp.formulas.map(fid => {
                        const f = formulaMap.get(fid)
                        return f ? (
                          <li key={fid}>
                            <Latex>{f.latex}</Latex>
                            {f.mnemonic && <span className="mnemonic">（{f.mnemonic}）</span>}
                          </li>
                        ) : null
                      })}
                    </ul>
                  </div>
                )}

                <div className="kp-meta">
                  <span>题型：{kp.types.map(t => ({ fill: '填空', single: '单选', truefalse: '判断', short: '简答', calc: '计算' }[t])).join('、')}</span>
                  <span>高频指数：{kp.freqScore}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
