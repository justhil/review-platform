import { NavLink, Outlet, useParams } from 'react-router-dom'
import { subjects } from '../data/subjects'

const navItems = [
  { to: '', label: '总览' },
  { to: 'practice', label: '题库训练' },
  { to: 'big', label: '大题背诵' },
  { to: 'exams', label: '模拟考试' },
  { to: 'knowledge', label: '知识点' },
  { to: 'formulas', label: '公式背诵' },
  { to: 'mistakes', label: '错题本' },
]

export function Layout() {
  const { subjectId } = useParams<{ subjectId: string }>()
  const currentSubject = subjects.find(s => s.id === subjectId)

  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-brand">{currentSubject?.name || '复习平台'}</div>
        <div className="nav-subjects">
          {subjects.map(s => (
            <NavLink key={s.id} to={`/${s.id}`} className={({ isActive }) => isActive ? 'subject-link active' : 'subject-link'}>
              {s.name}
            </NavLink>
          ))}
        </div>
      </nav>
      {subjectId && (
        <div className="nav-links">
          {navItems.map(item => (
            <NavLink key={item.to} to={`/${subjectId}/${item.to}`} end={item.to === ''} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}
