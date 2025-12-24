import { useState, useMemo } from 'react'
import { useSubject } from '../context/SubjectContext'
import { Latex } from '../components/Latex'

export function Formulas() {
  const { config, data } = useSubject()
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null)
  const [hiddenFormulas, setHiddenFormulas] = useState<Set<string>>(() => new Set(data.formulas.map(f => f.id)))

  const chapterMap = useMemo(() => {
    const map: Record<string, string> = {}
    config.chapters.forEach(ch => { map[ch.id] = ch.name })
    return map
  }, [config.chapters])

  const filteredFormulas = selectedChapter
    ? data.formulas.filter(f => f.chapter === selectedChapter)
    : data.formulas

  const kpMap = new Map(data.knowledgePoints.map(kp => [kp.id, kp.title]))

  const toggleFormula = (id: string) => {
    setHiddenFormulas(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const showAll = () => setHiddenFormulas(new Set())
  const hideAll = () => setHiddenFormulas(new Set(data.formulas.map(f => f.id)))

  return (
    <div className="formulas">
      <h1>{config.name} - 公式背诵</h1>

      <div className="filter-bar">
        <button className={!selectedChapter ? 'btn active' : 'btn'} onClick={() => setSelectedChapter(null)}>全部</button>
        {config.chapters.map(ch => (
          <button key={ch.id} className={selectedChapter === ch.id ? 'btn active' : 'btn'} onClick={() => setSelectedChapter(ch.id)}>
            {ch.name}
          </button>
        ))}
      </div>

      <div className="mode-buttons">
        <button className="btn" onClick={hideAll}>遮挡模式</button>
        <button className="btn" onClick={showAll}>显示全部</button>
      </div>

      <div className="formula-list">
        {filteredFormulas.map(f => (
          <div key={f.id} className="formula-card" onClick={() => toggleFormula(f.id)}>
            <div className="formula-header">
              <span className="formula-chapter">{chapterMap[f.chapter]}</span>
              <span className="formula-usage">{f.usage}</span>
            </div>

            <div className={`formula-latex ${hiddenFormulas.has(f.id) ? 'hidden' : ''}`}>
              {hiddenFormulas.has(f.id) ? '点击显示公式' : <Latex>{f.latex}</Latex>}
            </div>

            {f.mnemonic && !hiddenFormulas.has(f.id) && (
              <div className="formula-mnemonic">口诀：{f.mnemonic}</div>
            )}

            {!hiddenFormulas.has(f.id) && f.kp.length > 0 && (
              <div className="formula-kps">
                知识点：{f.kp.map(id => kpMap.get(id) || id).join('、')}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
