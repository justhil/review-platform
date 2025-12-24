import { useMemo } from 'react'
import type { ID, Question, QuestionType, Difficulty } from '../types'

export interface QuestionFilter {
  kpIds?: ID[]
  qtypes?: QuestionType[]
  difficulty?: Difficulty | [Difficulty, Difficulty]
  shuffle?: boolean
  limit?: number
}

function shuffleArray<T>(arr: T[]): T[] {
  const res = arr.slice()
  for (let i = res.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[res[i], res[j]] = [res[j], res[i]]
  }
  return res
}

export function useQuestions(allQuestions: Question[], filter: QuestionFilter = {}) {
  const { kpIds, qtypes, difficulty, shuffle, limit } = filter

  return useMemo(() => {
    let list = allQuestions.filter(q => {
      if (kpIds?.length && !q.kp.some(k => kpIds.includes(k))) return false
      if (qtypes?.length && !qtypes.includes(q.qtype)) return false
      if (difficulty) {
        const d = q.difficulty ?? 3
        if (Array.isArray(difficulty)) {
          if (d < difficulty[0] || d > difficulty[1]) return false
        } else if (d !== difficulty) return false
      }
      return true
    })

    if (shuffle) list = shuffleArray(list)
    if (limit != null) list = list.slice(0, limit)
    return list
  }, [allQuestions, kpIds, qtypes, difficulty, shuffle, limit])
}
