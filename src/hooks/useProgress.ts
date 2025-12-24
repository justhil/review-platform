import { useCallback } from 'react'
import type { ID, MasteryState, QuestionProgress, KnowledgePointProgress, UserProgress } from '../types'
import { useSubject } from '../context/SubjectContext'

function nextMasteryState(prev: MasteryState, isCorrect: boolean): MasteryState {
  if (isCorrect) {
    return prev === 'unknown' ? 'unsure' : 'known'
  }
  return prev === 'known' ? 'unsure' : 'unknown'
}

export function useProgress() {
  const { progress, setProgress } = useSubject()

  const recordAttempt = useCallback((questionId: ID, kpIds: ID[], isCorrect: boolean, manualState?: MasteryState) => {
    const baseQ: QuestionProgress = progress.question[questionId] ?? { state: 'unknown', attempts: 0, correct: 0 }
    const now = Date.now()

    const nextQ: QuestionProgress = {
      state: manualState ?? nextMasteryState(baseQ.state, isCorrect),
      attempts: baseQ.attempts + 1,
      correct: baseQ.correct + (isCorrect ? 1 : 0),
      lastAnsweredAt: now,
    }

    const kpUpdates: Record<ID, KnowledgePointProgress> = {}
    for (const kpId of kpIds) {
      const baseKP = progress.kp[kpId] ?? { reviews: 0 }
      kpUpdates[kpId] = { reviews: baseKP.reviews + 1, lastReviewedAt: now }
    }

    setProgress({
      ...progress,
      updatedAt: now,
      question: { ...progress.question, [questionId]: nextQ },
      kp: { ...progress.kp, ...kpUpdates },
    })
  }, [progress, setProgress])

  const setQuestionState = useCallback((questionId: ID, state: MasteryState) => {
    const baseQ: QuestionProgress = progress.question[questionId] ?? { state: 'unknown', attempts: 0, correct: 0 }
    setProgress({
      ...progress,
      updatedAt: Date.now(),
      question: { ...progress.question, [questionId]: { ...baseQ, state } },
    })
  }, [progress, setProgress])

  const resetProgress = useCallback(() => {
    setProgress({ version: 1, updatedAt: Date.now(), question: {}, kp: {}, favorites: [] })
  }, [setProgress])

  const toggleFavorite = useCallback((questionId: ID) => {
    const favorites = progress.favorites || []
    const isFav = favorites.includes(questionId)
    setProgress({
      ...progress,
      updatedAt: Date.now(),
      favorites: isFav ? favorites.filter(id => id !== questionId) : [...favorites, questionId],
    })
  }, [progress, setProgress])

  const isFavorite = useCallback((questionId: ID) => {
    return (progress.favorites || []).includes(questionId)
  }, [progress.favorites])

  return { progress, recordAttempt, setQuestionState, resetProgress, toggleFavorite, isFavorite }
}
