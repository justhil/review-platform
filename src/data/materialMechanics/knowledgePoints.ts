import type { KnowledgePoint } from '../../types'

export const materialMechanicsKnowledgePoints: KnowledgePoint[] = [
  {
    id: 'mat-kp-01',
    title: '强度、刚度与稳定性',
    chapter: '01',
    types: ['truefalse', 'fill', 'single'],
    body: '构件在外力作用下应满足：足够的强度（抵抗破坏）、刚度（抵抗过大变形）、稳定性（保持平衡形态）。',
    formulas: ['mat-f-01'],
    examples: ['mat-p1-tf-01', 'mat-p1-fill-01'],
    difficulty: 1,
    freqScore: 9
  },
  {
    id: 'mat-kp-02',
    title: '轴向拉压与扭转',
    chapter: '02',
    types: ['truefalse', 'single', 'fill'],
    body: '轴力与材料、截面无关；圆轴扭转切应力与扭矩、截面几何有关；单位长度扭转角与杆长无关。',
    formulas: ['mat-f-02', 'mat-f-03'],
    examples: ['mat-p1-tf-02', 'mat-p1-single-09'],
    difficulty: 2,
    freqScore: 8
  },
  {
    id: 'mat-kp-03',
    title: '截面几何性质',
    chapter: '03',
    types: ['single'],
    body: '矩形截面对形心轴的惯性矩：$I_z=\\frac{bh^3}{12}$，$I_y=\\frac{hb^3}{12}$（注意高宽对应关系）。',
    formulas: [],
    examples: ['mat-p1-single-04'],
    difficulty: 2,
    freqScore: 7
  },
  {
    id: 'mat-kp-04',
    title: '弯曲内力与强度',
    chapter: '04',
    types: ['single', 'truefalse'],
    body: '集中力处剪力图突变、弯矩图转折；纯弯曲时截面绕中性轴转动；提高弯曲强度可布置载荷、选截面、变截面梁。',
    formulas: ['mat-f-04'],
    examples: ['mat-p1-single-05', 'mat-p1-single-07'],
    difficulty: 2,
    freqScore: 9
  },
  {
    id: 'mat-kp-06',
    title: '应力状态与强度理论',
    chapter: '06',
    types: ['single', 'fill'],
    body: '主平面上切应力为零；应力圆可求主应力与最大切应力；第三强度理论相当应力常用 $\\sigma_{r3}=\\sigma_1-\\sigma_3$。',
    formulas: ['mat-f-05'],
    examples: ['mat-p1-single-06', 'mat-p1-fill-02'],
    difficulty: 3,
    freqScore: 8
  },
  {
    id: 'mat-kp-08',
    title: '压杆稳定',
    chapter: '08',
    types: ['truefalse', 'single', 'fill'],
    body: '临界压力由欧拉公式与柔度决定；提高稳定性可减长度、加强约束、增大 $I$、选高 $E$ 材料。',
    formulas: ['mat-f-06'],
    examples: ['mat-p1-single-10', 'mat-p1-fill-08'],
    difficulty: 3,
    freqScore: 8
  }
]