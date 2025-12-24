import { useMemo } from 'react'
import type { ID, KnowledgePoint, Question, UserProgress } from '../types'

function daysSince(lastAt?: number, now = Date.now()): number {
  if (!lastAt) return Infinity
  return Math.max(0, (now - lastAt) / 86400000)
}

function forgettingCoefficient(days: number): number {
  if (!Number.isFinite(days)) return 1.4
  if (days <= 1) return 0.3
  if (days <= 3) return 0.6
  if (days <= 7) return 0.85
  if (days <= 14) return 1.0
  if (days <= 30) return 1.15
  return 1.3
}

function weightForKP(kp: KnowledgePoint): number {
  const diffFactor = 0.8 + 0.1 * kp.difficulty
  return kp.freqScore * diffFactor
}

function computeKPAccuracy(kpId: ID, questions: Question[], progress: UserProgress): number {
  let attempts = 0, correct = 0
  for (const q of questions) {
    if (!q.kp.includes(kpId)) continue
    const p = progress.question[q.id]
    if (!p) continue
    attempts += p.attempts
    correct += p.correct
  }
  return attempts === 0 ? 0 : correct / attempts
}

function lastReviewAtForKP(kpId: ID, questions: Question[], progress: UserProgress): number | undefined {
  const kpProg = progress.kp[kpId]
  if (kpProg?.lastReviewedAt) return kpProg.lastReviewedAt

  let latest: number | undefined
  for (const q of questions) {
    if (!q.kp.includes(kpId)) continue
    const p = progress.question[q.id]
    if (p?.lastAnsweredAt && (!latest || p.lastAnsweredAt > latest)) {
      latest = p.lastAnsweredAt
    }
  }
  return latest
}

export interface WeakPointItem {
  kp: KnowledgePoint
  weakness: number
  accuracy: number
  daysSinceReview: number
}

export function useWeakPoints(kps: KnowledgePoint[], questions: Question[], progress: UserProgress, topN?: number) {
  return useMemo(() => {
    const now = Date.now()
    const list = kps.map(kp => {
      const accuracy = computeKPAccuracy(kp.id, questions, progress)
      const lastAt = lastReviewAtForKP(kp.id, questions, progress)
      const ds = daysSince(lastAt, now)
      const W = weightForKP(kp)
      const R = forgettingCoefficient(ds)
      const weakness = W * (1 - accuracy) * R
      return { kp, weakness, accuracy, daysSinceReview: ds }
    }).sort((a, b) => b.weakness - a.weakness)

    return topN ? list.slice(0, topN) : list
  }, [kps, questions, progress, topN])
}
