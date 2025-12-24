import ReactECharts from 'echarts-for-react'
import { Link } from 'react-router-dom'
import { useSubject } from '../context/SubjectContext'
import { useProgress } from '../hooks/useProgress'
import { useWeakPoints } from '../hooks/useWeakPoints'

const SCORE_DIST = { fill: 20, single: 15, truefalse: 10, short: 20, calc: 35 }
const TYPE_LABELS: Record<string, string> = {
  fill: '填空题',
  single: '单选题',
  truefalse: '判断题',
  short: '简答题',
  calc: '计算识图题',
}

export function Dashboard() {
  const { config, data } = useSubject()
  const { progress } = useProgress()
  const weakPoints = useWeakPoints(data.knowledgePoints, data.questions, progress, 5)

  const pieOption = {
    title: { text: '分值分布', left: 'center' },
    tooltip: { trigger: 'item', formatter: '{b}: {c}分 ({d}%)' },
    series: [{
      type: 'pie',
      radius: ['40%', '70%'],
      data: Object.entries(SCORE_DIST).map(([k, v]) => ({ name: TYPE_LABELS[k], value: v })),
      label: { formatter: '{b}\n{c}分' },
    }],
  }

  const totalQuestions = data.questions.length
  const answeredCount = Object.keys(progress.question).length
  const knownCount = Object.values(progress.question).filter(p => p.state === 'known').length

  return (
    <div className="dashboard">
      <h1>{config.name} - 复习总览</h1>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-value">{totalQuestions}</div>
          <div className="stat-label">题库总数</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{answeredCount}</div>
          <div className="stat-label">已练习</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{knownCount}</div>
          <div className="stat-label">已掌握</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{data.knowledgePoints.length}</div>
          <div className="stat-label">知识点</div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <ReactECharts option={pieOption} style={{ height: 300 }} />
        </div>

        <div className="card">
          <h3>薄弱点 Top5</h3>
          {weakPoints.length === 0 ? (
            <p className="empty-hint">开始练习后显示薄弱点</p>
          ) : (
            <ul className="weak-list">
              {weakPoints.map(({ kp, weakness, accuracy }) => (
                <li key={kp.id}>
                  <span className="weak-title">{kp.title}</span>
                  <span className="weak-meta">
                    正确率 {(accuracy * 100).toFixed(0)}% | 薄弱指数 {weakness.toFixed(1)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="card">
        <h3>快速开始</h3>
        <div className="quick-links">
          {Object.entries(TYPE_LABELS).map(([type, label]) => (
            <Link key={type} to={`practice?type=${type}`} className="btn">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
