import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useSubject } from '../context/SubjectContext'
import { useProgress } from '../hooks/useProgress'
import { useWeakPoints } from '../hooks/useWeakPoints'
import { MixedLatex } from '../components/Latex'

const TYPE_LABELS: Record<string, string> = {
  fill: '填空题',
  single: '单选题',
  truefalse: '判断题',
  short: '简答题',
  calc: '计算识图题',
}

export function Mistakes() {
  const { config, data } = useSubject()
  const { progress, resetProgress } = useProgress()
  const weakPoints = useWeakPoints(data.knowledgePoints, data.questions, progress)

  const mistakeQuestions = useMemo(() => {
    return data.questions.filter(q => {
      const p = progress.question[q.id]
      return p && (p.state === 'unknown' || p.state === 'unsure')
    })
  }, [data.questions, progress])

  const kpMap = useMemo(() => {
    const map: Record<string, string> = {}
    data.knowledgePoints.forEach(kp => { map[kp.id] = kp.title })
    return map
  }, [data.knowledgePoints])

  return (
    <div className="mistakes">
      <h1>{config.name} - 错题与薄弱点</h1>

      <div className="section">
        <h2>薄弱知识点</h2>
        {weakPoints.length === 0 ? (
          <p className="empty-hint">开始练习后显示薄弱点分析</p>
        ) : (
          <div className="weak-table">
            <div className="weak-header">
              <span>知识点</span>
              <span>正确率</span>
              <span>薄弱指数</span>
              <span>距上次复习</span>
            </div>
            {weakPoints.slice(0, 10).map(({ kp, accuracy, weakness, daysSinceReview }) => (
              <div key={kp.id} className="weak-row">
                <span>{kp.title}</span>
                <span>{(accuracy * 100).toFixed(0)}%</span>
                <span className={weakness > 3 ? 'high' : weakness > 1.5 ? 'medium' : 'low'}>{weakness.toFixed(1)}</span>
                <span>{Number.isFinite(daysSinceReview) ? `${Math.floor(daysSinceReview)}天` : '未复习'}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="section">
        <h2>错题列表 ({mistakeQuestions.length})</h2>
        {mistakeQuestions.length === 0 ? (
          <p className="empty-hint">暂无错题，继续保持！</p>
        ) : (
          <div className="mistake-list">
            {mistakeQuestions.map(q => {
              const p = progress.question[q.id]
              return (
                <div key={q.id} className="mistake-card">
                  <div className="mistake-header">
                    <span className="mistake-type">{TYPE_LABELS[q.qtype]}</span>
                    <span className={`state-badge ${p?.state}`}>{p?.state === 'unsure' ? '不熟' : '不会'}</span>
                  </div>
                  <div className="mistake-stem"><MixedLatex>{q.stem}</MixedLatex></div>
                  <div className="mistake-kps">
                    {q.kp.map(id => <span key={id} className="tag">{kpMap[id] || id}</span>)}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      <div className="section">
        <h2>操作</h2>
        <div className="action-buttons">
          {mistakeQuestions.length > 0 && (
            <Link to="practice" className="btn primary">再练一遍错题</Link>
          )}
          <button className="btn danger" onClick={() => {
            if (confirm('确定要清空所有学习记录吗？')) resetProgress()
          }}>
            重置学习记录
          </button>
        </div>
      </div>
    </div>
  )
}
