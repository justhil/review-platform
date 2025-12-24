import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { SubjectConfig, SubjectData, UserProgress } from '../types'
import { getSubjectConfig, getSubjectData } from '../data/subjects'

const STORAGE_PREFIX = 'review-'

function getProgressKey(subjectId: string): string {
  return `${STORAGE_PREFIX}${subjectId}-progress`
}

function loadProgress(subjectId: string): UserProgress {
  const key = getProgressKey(subjectId)
  const stored = localStorage.getItem(key)
  if (stored) {
    return JSON.parse(stored)
  }
  return { version: 1, updatedAt: 0, question: {}, kp: {}, favorites: [] }
}

function saveProgress(subjectId: string, progress: UserProgress): void {
  const key = getProgressKey(subjectId)
  progress.updatedAt = Date.now()
  localStorage.setItem(key, JSON.stringify(progress))
}

interface SubjectContextValue {
  subjectId: string
  config: SubjectConfig
  data: SubjectData
  progress: UserProgress
  setProgress: (p: UserProgress) => void
}

const SubjectContext = createContext<SubjectContextValue | null>(null)

export function SubjectProvider({ subjectId, children }: { subjectId: string; children: ReactNode }) {
  const config = getSubjectConfig(subjectId)
  const data = getSubjectData(subjectId)
  const [progress, setProgressState] = useState<UserProgress>(() => loadProgress(subjectId))

  useEffect(() => {
    setProgressState(loadProgress(subjectId))
  }, [subjectId])

  const setProgress = (p: UserProgress) => {
    setProgressState(p)
    saveProgress(subjectId, p)
  }

  if (!config) {
    return <div>科目不存在</div>
  }

  return (
    <SubjectContext.Provider value={{ subjectId, config, data, progress, setProgress }}>
      {children}
    </SubjectContext.Provider>
  )
}

export function useSubject(): SubjectContextValue {
  const ctx = useContext(SubjectContext)
  if (!ctx) throw new Error('useSubject must be used within SubjectProvider')
  return ctx
}
