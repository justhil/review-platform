export type ID = string
export type Chapter = string
export type Difficulty = 1 | 2 | 3 | 4 | 5
export type QuestionType = 'fill' | 'single' | 'truefalse' | 'short' | 'calc'
export type MasteryState = 'known' | 'unsure' | 'unknown'

export interface KnowledgePoint {
  id: ID
  title: string
  chapter: Chapter
  types: QuestionType[]
  body: string
  formulas: ID[]
  examples: ID[]
  difficulty: Difficulty
  freqScore: number
}

export interface Formula {
  id: ID
  latex: string
  chapter: Chapter
  mnemonic?: string
  usage?: string
  kp: ID[]
}

export interface Question {
  id: ID
  qtype: QuestionType
  stem: string
  options?: string[]
  answer: string | string[]
  analysis?: string
  kp: ID[]
  source?: string
  difficulty?: Difficulty
}

export interface BigQuestion {
  id: ID
  groupId: string
  chapter: Chapter
  topic: string
  prompt: string
  summary: string[]
  details?: string[]
  tags?: ('theory' | 'calc' | 'procedure')[]
}

export interface BigQuestionImageGroup {
  id: string
  label: string
  sourceHint?: string
}

export interface GeneratedExam {
  id: string
  createdAt: number
  title: string
  timeLimit: number
  questions: ID[]
  drawings: Record<ID, string>
  startedAt?: number
  finishedAt?: number
  elapsedTime?: number
}

export interface QuestionProgress {
  state: MasteryState
  attempts: number
  correct: number
  lastAnsweredAt?: number
}

export interface KnowledgePointProgress {
  reviews: number
  lastReviewedAt?: number
}

export interface UserProgress {
  version: 1
  updatedAt: number
  question: Record<ID, QuestionProgress>
  kp: Record<ID, KnowledgePointProgress>
  favorites: ID[]
}

export interface SubjectConfig {
  id: string
  name: string
  chapters: { id: string; name: string }[]
}

export interface SubjectData {
  questions: Question[]
  knowledgePoints: KnowledgePoint[]
  formulas: Formula[]
  bigQuestions: BigQuestion[]
  bigQuestionImageGroups: BigQuestionImageGroup[]
}
