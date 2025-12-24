import type { BigQuestion, BigQuestionImageGroup } from '../../types'

export const mechanicsBigQuestions: BigQuestion[] = [
  {
    id: 'mech-bq-001',
    groupId: 'mech-bqg-01',
    chapter: '01',
    topic: '静力学平衡问题',
    prompt: '已知均布载荷$q=5kN/m$，力偶矩$M=80kN\\cdot m$，集中力$F=40kN$，$a=2m$，求支座$A$、$B$的约束反力',
    summary: [
      '画受力图，标出所有外力和约束反力',
      '建立平衡方程：$\\sum F_x=0$，$\\sum F_y=0$，$\\sum M_A=0$',
      '由力矩方程求$F_B$，再由力平衡方程求$F_{Ax}$、$F_{Ay}$'
    ],
    details: [
      '受力分析：A为固定铰支座（两个反力分量），B为可动铰支座（一个反力）',
      '均布载荷等效为集中力$Q=q\\cdot 2a=20kN$，作用于跨中',
      '对A取矩：$F_B \\cdot 4a - Q \\cdot a - F \\cdot 2a - M = 0$',
      '解得各约束反力'
    ],
    tags: ['calc', 'procedure']
  },
  {
    id: 'mech-bq-002',
    groupId: 'mech-bqg-01',
    chapter: '01',
    topic: '桁架内力分析',
    prompt: '分析桁架结构中各杆的内力，判断拉压',
    summary: [
      '整体平衡求支座反力',
      '节点法或截面法求各杆内力',
      '正值为拉力，负值为压力'
    ],
    details: [
      '节点法：从只有两个未知力的节点开始',
      '截面法：用截面切开桁架，对一侧取平衡',
      '零杆判断：两杆节点无外力且不共线，则两杆均为零杆'
    ],
    tags: ['calc', 'procedure']
  },
  {
    id: 'mech-bq-003',
    groupId: 'mech-bqg-02',
    chapter: '02',
    topic: '刚体平面运动分析',
    prompt: '曲柄连杆机构中，已知曲柄$OA$的角速度$\\omega$，求连杆$AB$的角速度和滑块$B$的速度',
    summary: [
      '确定各构件的运动形式',
      '用基点法或瞬心法分析速度',
      '建立速度关系方程求解'
    ],
    details: [
      'OA定轴转动：$v_A = \\omega \\cdot OA$',
      'AB平面运动：以A为基点，$\\vec{v}_B = \\vec{v}_A + \\vec{v}_{BA}$',
      '或用瞬心法：找AB的速度瞬心C，$\\omega_{AB} = v_A / AC$'
    ],
    tags: ['calc', 'procedure']
  },
  {
    id: 'mech-bq-004',
    groupId: 'mech-bqg-02',
    chapter: '02',
    topic: '点的合成运动',
    prompt: '分析点的合成运动，求绝对速度和绝对加速度',
    summary: [
      '选取动点、动系、定系',
      '分析三种运动：绝对、相对、牵连',
      '应用速度合成定理和加速度合成定理'
    ],
    details: [
      '速度合成：$\\vec{v}_a = \\vec{v}_e + \\vec{v}_r$',
      '加速度合成：$\\vec{a}_a = \\vec{a}_e + \\vec{a}_r + \\vec{a}_C$',
      '科氏加速度：$\\vec{a}_C = 2\\vec{\\omega}_e \\times \\vec{v}_r$',
      '牵连运动为平动时，$\\vec{a}_C = 0$'
    ],
    tags: ['calc', 'procedure']
  },
  {
    id: 'mech-bq-005',
    groupId: 'mech-bqg-03',
    chapter: '03',
    topic: '动量矩定理应用',
    prompt: '均质圆盘绕定轴转动，求角加速度和轴承反力',
    summary: [
      '画受力图，建立坐标系',
      '应用定轴转动微分方程：$J_z\\varepsilon = \\sum M_z$',
      '应用质心运动定理求轴承反力'
    ],
    details: [
      '计算转动惯量：圆盘$J = \\frac{1}{2}mR^2$',
      '列转动方程求角加速度',
      '质心运动定理：$m\\vec{a}_C = \\sum\\vec{F}$',
      '注意质心的法向加速度和切向加速度'
    ],
    tags: ['calc', 'procedure']
  },
  {
    id: 'mech-bq-006',
    groupId: 'mech-bqg-03',
    chapter: '03',
    topic: '动能定理应用',
    prompt: '系统由静止释放，求运动到某位置时的角速度或速度',
    summary: [
      '确定系统的初态和末态',
      '计算各力做的功',
      '应用动能定理：$T_2 - T_1 = \\sum W$'
    ],
    details: [
      '重力功：$W_G = mgh$（下降为正）',
      '弹力功：$W_s = \\frac{1}{2}k(x_1^2 - x_2^2)$',
      '摩擦力功：$W_f = -f N s$（总为负）',
      '系统动能：平动$\\frac{1}{2}mv^2$ + 转动$\\frac{1}{2}J\\omega^2$'
    ],
    tags: ['calc', 'procedure']
  },
  {
    id: 'mech-bq-007',
    groupId: 'mech-bqg-03',
    chapter: '03',
    topic: '碰撞与动量矩守恒',
    prompt: '两物体碰撞或系统内部作用，求碰撞后的角速度',
    summary: [
      '判断动量矩守恒条件',
      '列动量矩守恒方程',
      '求解未知量'
    ],
    details: [
      '守恒条件：外力对轴的力矩之和为零',
      '碰撞前后：$J_1\\omega_1 + J_2\\omega_2 = (J_1 + J_2)\\omega$',
      '注意角速度的正负号（转向）'
    ],
    tags: ['calc', 'theory']
  },
  {
    id: 'mech-bq-008',
    groupId: 'mech-bqg-01',
    chapter: '01',
    topic: '摩擦问题',
    prompt: '物体在斜面上，已知摩擦系数$f$，求平衡条件或临界状态',
    summary: [
      '画受力图，包括摩擦力',
      '判断摩擦力方向（与相对运动趋势相反）',
      '临界状态：$F_f = fN$'
    ],
    details: [
      '静摩擦力：$0 \\leq F_f \\leq f_s N$',
      '临界平衡：摩擦力达到最大值',
      '自锁条件：$\\tan\\theta \\leq f$（$\\theta$为斜面角）'
    ],
    tags: ['calc', 'procedure']
  }
]

export const mechanicsBigQuestionImageGroups: BigQuestionImageGroup[] = [
  {
    id: 'mech-bqg-01',
    label: '静力学',
    sourceHint: '理论力学题库'
  },
  {
    id: 'mech-bqg-02',
    label: '运动学',
    sourceHint: '理论力学题库'
  },
  {
    id: 'mech-bqg-03',
    label: '动力学',
    sourceHint: '理论力学题库'
  }
]
