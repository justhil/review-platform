import type { Formula } from '../../types'

export const mechanicsFormulas: Formula[] = [
  {
    id: 'mech-f-01',
    latex: '|F_1 - F_2| \\leq |F_R| \\leq |F_1 + F_2|',
    chapter: '01',
    mnemonic: '合力范围：两力之差到两力之和',
    usage: '判断合力大小的取值范围',
    kp: ['mech-kp-01']
  },
  {
    id: 'mech-f-02',
    latex: 'M_O(\\vec{F}) = \\vec{r} \\times \\vec{F}',
    chapter: '01',
    mnemonic: '力矩等于位矢叉乘力',
    usage: '计算力对点的矩',
    kp: ['mech-kp-02']
  },
  {
    id: 'mech-f-03',
    latex: 'M = F \\cdot d',
    chapter: '01',
    mnemonic: '力偶矩等于力乘力偶臂',
    usage: '计算力偶矩的大小',
    kp: ['mech-kp-02']
  },
  {
    id: 'mech-f-04',
    latex: '\\sum F_x = 0, \\quad \\sum F_y = 0',
    chapter: '01',
    mnemonic: '汇交力系平衡：各方向投影和为零',
    usage: '平面汇交力系的平衡条件',
    kp: ['mech-kp-03']
  },
  {
    id: 'mech-f-05',
    latex: '\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0',
    chapter: '01',
    mnemonic: '一般力系平衡：两力一矩',
    usage: '平面一般力系的平衡条件',
    kp: ['mech-kp-03']
  },
  {
    id: 'mech-f-06',
    latex: '\\vec{v} = \\frac{d\\vec{r}}{dt}, \\quad \\vec{a} = \\frac{d\\vec{v}}{dt}',
    chapter: '02',
    mnemonic: '速度是位矢对时间的导数，加速度是速度对时间的导数',
    usage: '点的速度和加速度的定义',
    kp: ['mech-kp-04']
  },
  {
    id: 'mech-f-07',
    latex: 'a_\\tau = \\frac{dv}{dt}, \\quad a_n = \\frac{v^2}{\\rho}',
    chapter: '02',
    mnemonic: '切向改大小，法向改方向',
    usage: '自然坐标系下加速度的分解',
    kp: ['mech-kp-04']
  },
  {
    id: 'mech-f-08',
    latex: '\\vec{v}_A = \\vec{v}_B + \\vec{\\omega} \\times \\vec{r}_{BA}',
    chapter: '02',
    mnemonic: '基点法：A点速度等于基点速度加相对转动速度',
    usage: '刚体平面运动的速度分析',
    kp: ['mech-kp-05']
  },
  {
    id: 'mech-f-09',
    latex: 'v_A = \\omega \\cdot r_{AC}',
    chapter: '02',
    mnemonic: '瞬心法：速度等于角速度乘到瞬心距离',
    usage: '用速度瞬心求刚体上各点速度',
    kp: ['mech-kp-05']
  },
  {
    id: 'mech-f-10',
    latex: 'L_z = J_z \\omega',
    chapter: '03',
    mnemonic: '动量矩等于转动惯量乘角速度',
    usage: '刚体定轴转动的动量矩',
    kp: ['mech-kp-06']
  },
  {
    id: 'mech-f-11',
    latex: 'T = \\frac{1}{2}J_z\\omega^2',
    chapter: '03',
    mnemonic: '转动动能：半J omega方',
    usage: '刚体定轴转动的动能',
    kp: ['mech-kp-06']
  },
  {
    id: 'mech-f-12',
    latex: 'J_z = J_{zc} + md^2',
    chapter: '03',
    mnemonic: '平行轴定理：质心轴加质量乘距离平方',
    usage: '计算平行轴的转动惯量',
    kp: ['mech-kp-06', 'mech-kp-09']
  },
  {
    id: 'mech-f-13',
    latex: '\\vec{v}_a = \\vec{v}_e + \\vec{v}_r',
    chapter: '02',
    mnemonic: '绝对速度等于牵连速度加相对速度',
    usage: '点的速度合成定理',
    kp: ['mech-kp-07']
  },
  {
    id: 'mech-f-14',
    latex: '\\vec{a}_C = 2\\vec{\\omega}_e \\times \\vec{v}_r',
    chapter: '02',
    mnemonic: '科氏加速度：2倍牵连角速度叉乘相对速度',
    usage: '计算科氏加速度',
    kp: ['mech-kp-07']
  },
  {
    id: 'mech-f-15',
    latex: '\\vec{p} = m\\vec{v}_C',
    chapter: '03',
    mnemonic: '质点系动量等于总质量乘质心速度',
    usage: '计算质点系的动量',
    kp: ['mech-kp-08']
  },
  {
    id: 'mech-f-16',
    latex: 'm\\vec{a}_C = \\sum\\vec{F}^{(e)}',
    chapter: '03',
    mnemonic: '质心运动定理：质心加速度由外力决定',
    usage: '分析质心的运动',
    kp: ['mech-kp-08']
  },
  {
    id: 'mech-f-17',
    latex: '\\frac{d\\vec{L}_O}{dt} = \\sum\\vec{M}_O^{(e)}',
    chapter: '03',
    mnemonic: '动量矩定理：动量矩变化率等于外力矩之和',
    usage: '分析质点系的转动',
    kp: ['mech-kp-09']
  },
  {
    id: 'mech-f-18',
    latex: 'J_z\\varepsilon = \\sum M_z^{(e)}',
    chapter: '03',
    mnemonic: '定轴转动方程：J乘epsilon等于外力矩',
    usage: '刚体定轴转动的动力学方程',
    kp: ['mech-kp-09']
  },
  {
    id: 'mech-f-19',
    latex: 'T = \\frac{1}{2}mv^2',
    chapter: '03',
    mnemonic: '动能：半mv方',
    usage: '质点的动能',
    kp: ['mech-kp-10']
  },
  {
    id: 'mech-f-20',
    latex: 'T = \\frac{1}{2}mv_C^2 + \\frac{1}{2}J_C\\omega^2',
    chapter: '03',
    mnemonic: '平面运动动能：平动动能加转动动能',
    usage: '刚体平面运动的动能',
    kp: ['mech-kp-10']
  },
  {
    id: 'mech-f-21',
    latex: 'T_2 - T_1 = \\sum W',
    chapter: '03',
    mnemonic: '动能定理：动能增量等于功之和',
    usage: '动能定理的应用',
    kp: ['mech-kp-10']
  },
  {
    id: 'mech-f-22',
    latex: 'J = \\frac{1}{3}ml^2',
    chapter: '03',
    mnemonic: '细杆绕端点：三分之一ml方',
    usage: '均质细杆绕端点的转动惯量',
    kp: ['mech-kp-06', 'mech-kp-09']
  },
  {
    id: 'mech-f-23',
    latex: 'J = \\frac{1}{12}ml^2',
    chapter: '03',
    mnemonic: '细杆绕中点：十二分之一ml方',
    usage: '均质细杆绕中点的转动惯量',
    kp: ['mech-kp-06', 'mech-kp-09']
  },
  {
    id: 'mech-f-24',
    latex: 'J = \\frac{1}{2}mR^2',
    chapter: '03',
    mnemonic: '圆盘绕中心：二分之一mR方',
    usage: '均质圆盘绕中心轴的转动惯量',
    kp: ['mech-kp-06', 'mech-kp-09']
  }
]
