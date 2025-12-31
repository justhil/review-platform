import type { SubjectConfig, SubjectData } from '../types'
import {
  mechanicsQuestions,
  mechanicsKnowledgePoints,
  mechanicsFormulas,
  mechanicsBigQuestions,
  mechanicsBigQuestionImageGroups
} from './mechanics'
import {
  physicsQuestions,
  physicsKnowledgePoints,
  physicsFormulas,
  physicsBigQuestions,
  physicsBigQuestionImageGroups
} from './physics'
import {
  probabilityQuestions,
  probabilityKnowledgePoints,
  probabilityFormulas,
  probabilityBigQuestions,
  probabilityBigQuestionImageGroups
} from './probability'

export const subjects: SubjectConfig[] = [
  {
    id: 'physics',
    name: '大学物理',
    chapters: [
      { id: '01', name: '质点运动学' },
      { id: '02', name: '牛顿定律' },
      { id: '03', name: '动量与能量守恒' },
      { id: '04', name: '刚体运动' },
      { id: '05', name: '机械振动' },
      { id: '06', name: '机械波' },
      { id: '07', name: '气体动理论' },
      { id: '08', name: '热力学基础' },
      { id: '09', name: '静电场' },
      { id: '11', name: '恒定磁场' },
      { id: '14', name: '波动光学' },
    ]
  },
  {
    id: 'mechanics',
    name: '理论力学',
    chapters: [
      { id: '01', name: '静力学' },
      { id: '02', name: '运动学' },
      { id: '03', name: '动力学' },
      { id: '04', name: '分析力学' },
    ]
  },
  {
    id: 'probability',
    name: '概率论',
    chapters: [
      { id: '01', name: '概率论基础' },
      { id: '02', name: '随机变量' },
      { id: '03', name: '数字特征' },
      { id: '04', name: '大数定律' },
      { id: '05', name: '数理统计' },
    ]
  }
]

const emptyData: SubjectData = {
  questions: [],
  knowledgePoints: [],
  formulas: [],
  bigQuestions: [],
  bigQuestionImageGroups: []
}

const subjectDataMap: Record<string, SubjectData> = {
  physics: {
    questions: physicsQuestions,
    knowledgePoints: physicsKnowledgePoints,
    formulas: physicsFormulas,
    bigQuestions: physicsBigQuestions,
    bigQuestionImageGroups: physicsBigQuestionImageGroups
  },
  mechanics: {
    questions: mechanicsQuestions,
    knowledgePoints: mechanicsKnowledgePoints,
    formulas: mechanicsFormulas,
    bigQuestions: mechanicsBigQuestions,
    bigQuestionImageGroups: mechanicsBigQuestionImageGroups
  },
  probability: {
    questions: probabilityQuestions,
    knowledgePoints: probabilityKnowledgePoints,
    formulas: probabilityFormulas,
    bigQuestions: probabilityBigQuestions,
    bigQuestionImageGroups: probabilityBigQuestionImageGroups
  },
}

export function getSubjectConfig(id: string): SubjectConfig | undefined {
  return subjects.find(s => s.id === id)
}

export function getSubjectData(id: string): SubjectData {
  return subjectDataMap[id] || emptyData
}
