import { useState, useCallback } from 'react'
import type { GeneratedExam, Question, QuestionType, ID, UserProgress } from '../types'
import { useSubject } from '../context/SubjectContext'

const STORAGE_PREFIX = 'review-'

interface ExamConfig {
  fill: number
  single: number
  truefalse: number
  short: number
  calc: number
  timeLimit: number
}

interface ExamGenerateOptions {
  progress?: UserProgress
  includeKnown?: boolean
}

function getExamsKey(subjectId: string): string {
  return `${STORAGE_PREFIX}${subjectId}-exams`
}

function getUsedQuestionsKey(subjectId: string): string {
  return `${STORAGE_PREFIX}${subjectId}-used-questions`
}

function loadExams(subjectId: string): GeneratedExam[] {
  const saved = localStorage.getItem(getExamsKey(subjectId))
  return saved ? JSON.parse(saved) : []
}

function loadUsedQuestions(subjectId: string): Set<string> {
  const saved = localStorage.getItem(getUsedQuestionsKey(subjectId))
  return saved ? new Set(JSON.parse(saved)) : new Set()
}

export function useExams(allQuestions: Question[]) {
  const { subjectId } = useSubject()
  const [exams, setExams] = useState<GeneratedExam[]>(() => loadExams(subjectId))
  const [usedQuestionIds, setUsedQuestionIds] = useState<Set<string>>(() => loadUsedQuestions(subjectId))

  const saveExams = useCallback((newExams: GeneratedExam[]) => {
    setExams(newExams)
    localStorage.setItem(getExamsKey(subjectId), JSON.stringify(newExams))
  }, [subjectId])

  const saveUsedQuestions = useCallback((ids: Set<string>) => {
    setUsedQuestionIds(ids)
    localStorage.setItem(getUsedQuestionsKey(subjectId), JSON.stringify([...ids]))
  }, [subjectId])

  const generateExam = useCallback((config: ExamConfig, options?: ExamGenerateOptions): GeneratedExam | null => {
    const includeKnown = options?.includeKnown ?? true
    const qProgress = options?.progress?.question

    const questionsByType: Record<QuestionType, Question[]> = {
      fill: [], single: [], truefalse: [], short: [], calc: [],
    }

    allQuestions.forEach(q => {
      if (usedQuestionIds.has(q.id)) return
      if (!includeKnown && qProgress?.[q.id]?.state === 'known') return
      questionsByType[q.qtype].push(q)
    })

    const selectedIds: ID[] = []
    const types: QuestionType[] = ['fill', 'single', 'truefalse', 'short', 'calc']

    for (const type of types) {
      const needed = config[type]
      const available = questionsByType[type]
      if (available.length < needed) return null
      const shuffled = [...available].sort(() => Math.random() - 0.5)
      selectedIds.push(...shuffled.slice(0, needed).map(q => q.id))
    }

    const newExam: GeneratedExam = {
      id: `exam-${Date.now()}`,
      createdAt: Date.now(),
      title: `模拟试卷 ${exams.length + 1}`,
      timeLimit: config.timeLimit,
      questions: selectedIds,
      drawings: {},
    }

    const newUsed = new Set(usedQuestionIds)
    selectedIds.forEach(id => newUsed.add(id))
    saveUsedQuestions(newUsed)
    saveExams([...exams, newExam])

    return newExam
  }, [allQuestions, exams, usedQuestionIds, saveExams, saveUsedQuestions])

  const getAvailableCounts = useCallback((options?: ExamGenerateOptions): Record<QuestionType, number> => {
    const includeKnown = options?.includeKnown ?? true
    const qProgress = options?.progress?.question

    const counts: Record<QuestionType, number> = { fill: 0, single: 0, truefalse: 0, short: 0, calc: 0 }
    allQuestions.forEach(q => {
      if (usedQuestionIds.has(q.id)) return
      if (!includeKnown && qProgress?.[q.id]?.state === 'known') return
      counts[q.qtype]++
    })
    return counts
  }, [allQuestions, usedQuestionIds])

  const updateExam = useCallback((examId: string, updates: Partial<GeneratedExam>) => {
    const newExams = exams.map(e => e.id === examId ? { ...e, ...updates } : e)
    saveExams(newExams)
  }, [exams, saveExams])

  const saveDrawing = useCallback((examId: string, questionId: string, dataUrl: string) => {
    const exam = exams.find(e => e.id === examId)
    if (!exam) return
    updateExam(examId, { drawings: { ...exam.drawings, [questionId]: dataUrl } })
  }, [exams, updateExam])

  const deleteExam = useCallback((examId: string) => {
    const exam = exams.find(e => e.id === examId)
    if (!exam) return
    const newUsed = new Set(usedQuestionIds)
    exam.questions.forEach(id => newUsed.delete(id))
    saveUsedQuestions(newUsed)
    saveExams(exams.filter(e => e.id !== examId))
  }, [exams, usedQuestionIds, saveExams, saveUsedQuestions])

  const resetUsedQuestions = useCallback(() => {
    saveUsedQuestions(new Set())
  }, [saveUsedQuestions])

  return { exams, generateExam, getAvailableCounts, updateExam, saveDrawing, deleteExam, resetUsedQuestions }
}
