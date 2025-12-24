import { BrowserRouter, Routes, Route, Navigate, Outlet, useParams } from 'react-router-dom'
import { Layout } from './components/Layout'
import { SubjectProvider } from './context/SubjectContext'
import { Dashboard } from './pages/Dashboard'
import { Practice } from './pages/Practice'
import { Knowledge } from './pages/Knowledge'
import { Formulas } from './pages/Formulas'
import { BigQuestions } from './pages/BigQuestions'
import { Mistakes } from './pages/Mistakes'
import { Exams } from './pages/Exams'
import { ExamTake } from './pages/ExamTake'
import './App.css'

function SubjectWrapper() {
  const { subjectId } = useParams<{ subjectId: string }>()
  return (
    <SubjectProvider subjectId={subjectId || 'physics'}>
      <Outlet />
    </SubjectProvider>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/physics" replace />} />
          <Route path=":subjectId" element={<SubjectWrapper />}>
            <Route index element={<Dashboard />} />
            <Route path="practice" element={<Practice />} />
            <Route path="big" element={<BigQuestions />} />
            <Route path="knowledge" element={<Knowledge />} />
            <Route path="formulas" element={<Formulas />} />
            <Route path="mistakes" element={<Mistakes />} />
            <Route path="exams" element={<Exams />} />
            <Route path="exam/:examId" element={<ExamTake />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
