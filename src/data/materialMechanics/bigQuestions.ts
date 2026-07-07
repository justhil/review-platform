import type { BigQuestion, BigQuestionImageGroup } from '../../types'

export const materialMechanicsBigQuestions: BigQuestion[] = [
  {
    id: 'mat-bq-01',
    groupId: 'mat-bqg-01',
    chapter: '01',
    topic: '桁架节点法求许用载荷',
    prompt: 'AC 钢杆 $A_1=20\\mathrm{cm}^2$，$[\\sigma_1]=120\\mathrm{MPa}$；BC 铜杆 $A_2=12\\mathrm{cm}^2$，$[\\sigma_2]=60\\mathrm{MPa}$。求结构许用载荷 $[F]$。',
    summary: [
      '节点 C 受力分析，列平衡方程求 $F_1,F_2$ 与 $F$ 关系',
      '分别用两杆强度条件求 $F$ 上限',
      '取较小者为 $[F]$'
    ],
    tags: ['calc', 'procedure']
  },
  {
    id: 'mat-bq-02',
    groupId: 'mat-bqg-01',
    chapter: '02',
    topic: '传动轴扭转强度校核',
    prompt: '已知各轴转速、功率分配与抗扭截面系数，许用切应力 $[\\tau]=20\\mathrm{MPa}$，校核 C、E、H 轴。',
    summary: [
      '由 $T=9549P/n$ 求各轴扭矩',
      '$\\tau_{\\max}=T/W_t$ 与许用值比较'
    ],
    tags: ['calc']
  },
  {
    id: 'mat-bq-03',
    groupId: 'mat-bqg-02',
    chapter: '04',
    topic: '外伸梁内力与强度',
    prompt: '均布载荷 $q$、集中力 $F$，矩形截面 $h,b$，$[\\sigma]=40\\mathrm{MPa}$。求剪力弯矩方程、作图并校核正应力。',
    summary: [
      '列 $F_S(x),M(x)$',
      '作剪力图、弯矩图',
      '找危险截面用 $\\sigma=M/W_z$ 校核'
    ],
    tags: ['calc', 'procedure']
  }
]

export const materialMechanicsBigQuestionImageGroups: BigQuestionImageGroup[] = [
  { id: 'mat-bqg-01', label: '试卷一·计算题', sourceHint: '材料力学题库' },
  { id: 'mat-bqg-02', label: '试卷一·综合题', sourceHint: '材料力学题库' }
]