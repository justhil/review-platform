import type { KnowledgePoint } from '../../types'

export const physicsKnowledgePoints: KnowledgePoint[] = [
  {
    id: 'phy-kp-01',
    title: '质点运动学',
    chapter: '01',
    types: ['fill', 'single', 'calc'],
    body: '描述质点运动的物理量：位移、速度、加速度。直线运动和曲线运动的运动学方程。',
    formulas: ['phy-f-01', 'phy-f-02'],
    examples: [],
    difficulty: 2,
    freqScore: 9
  },
  {
    id: 'phy-kp-02',
    title: '牛顿运动定律',
    chapter: '02',
    types: ['fill', 'single', 'calc'],
    body: '牛顿三定律及其应用。惯性系与非惯性系。',
    formulas: ['phy-f-03'],
    examples: [],
    difficulty: 2,
    freqScore: 8
  },
  {
    id: 'phy-kp-03',
    title: '动量与能量守恒',
    chapter: '03',
    types: ['fill', 'single', 'calc'],
    body: '动量定理、动量守恒定律。动能定理、机械能守恒定律。',
    formulas: ['phy-f-04', 'phy-f-05'],
    examples: [],
    difficulty: 3,
    freqScore: 9
  },
  {
    id: 'phy-kp-04',
    title: '刚体转动',
    chapter: '04',
    types: ['fill', 'single', 'calc'],
    body: '刚体定轴转动的运动学和动力学。转动惯量、角动量、转动动能。',
    formulas: ['phy-f-06', 'phy-f-07'],
    examples: [],
    difficulty: 3,
    freqScore: 9
  },
  {
    id: 'phy-kp-05',
    title: '简谐振动',
    chapter: '05',
    types: ['fill', 'single', 'calc'],
    body: '简谐振动的特征量：振幅、周期、频率、相位。简谐振动的能量。',
    formulas: ['phy-f-08', 'phy-f-09'],
    examples: [],
    difficulty: 3,
    freqScore: 9
  },
  {
    id: 'phy-kp-06',
    title: '机械波',
    chapter: '06',
    types: ['fill', 'single', 'calc'],
    body: '机械波的产生和传播。波动方程。波的能量和强度。',
    formulas: ['phy-f-10'],
    examples: [],
    difficulty: 3,
    freqScore: 8
  },
  {
    id: 'phy-kp-07',
    title: '气体动理论',
    chapter: '07',
    types: ['fill', 'single'],
    body: '理想气体状态方程。气体分子的速率分布和能量分布。',
    formulas: ['phy-f-11', 'phy-f-12'],
    examples: [],
    difficulty: 2,
    freqScore: 7
  },
  {
    id: 'phy-kp-08',
    title: '热力学基础',
    chapter: '08',
    types: ['fill', 'single', 'calc'],
    body: '热力学第一定律。等值过程。循环过程和热机效率。',
    formulas: ['phy-f-13', 'phy-f-14'],
    examples: [],
    difficulty: 3,
    freqScore: 9
  },
  {
    id: 'phy-kp-09',
    title: '静电场',
    chapter: '09',
    types: ['fill', 'single', 'calc'],
    body: '库仑定律。电场强度。高斯定理。电势。',
    formulas: ['phy-f-15', 'phy-f-16'],
    examples: [],
    difficulty: 3,
    freqScore: 9
  },
  {
    id: 'phy-kp-11',
    title: '恒定磁场',
    chapter: '11',
    types: ['fill', 'single', 'calc'],
    body: '毕奥-萨伐尔定律。安培环路定理。磁场对电流的作用。',
    formulas: ['phy-f-17', 'phy-f-18'],
    examples: [],
    difficulty: 3,
    freqScore: 9
  },
  {
    id: 'phy-kp-14',
    title: '波动光学',
    chapter: '14',
    types: ['fill', 'single', 'calc'],
    body: '光的干涉：杨氏双缝干涉、薄膜干涉。光的衍射。',
    formulas: ['phy-f-19', 'phy-f-20'],
    examples: [],
    difficulty: 3,
    freqScore: 9
  }
]
