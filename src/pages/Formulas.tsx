import { useState, useMemo } from 'react'
import { useSubject } from '../context/SubjectContext'
import { Latex } from '../components/Latex'

export function Formulas() {
  const { config, data } = useSubject()
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null)

  const chapterMap = useMemo(() => {
    const map: Record<string, string> = {}
    config.chapters.forEach(ch => { map[ch.id] = ch.name })
    return map
  }, [config.chapters])

  const filteredFormulas = selectedChapter
    ? data.formulas.filter(f => f.chapter === selectedChapter)
    : data.formulas

  const kpMap = new Map(data.knowledgePoints.map(kp => [kp.id, kp.title]))

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

      <div className="formula-list">
        {filteredFormulas.map(f => (
          <div key={f.id} className="formula-card">
            <div className="formula-header">
              <span className="formula-name">{f.mnemonic}</span>
              <span className="formula-chapter">{chapterMap[f.chapter]}</span>
            </div>

            <div className="formula-latex">
              <Latex>{f.latex}</Latex>
            </div>

            {f.usage && (
              <div className="formula-usage">{f.usage}</div>
            )}

            {f.kp.length > 0 && (
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
