import type { KnowledgePoint } from '../../types'

export const mechanicsKnowledgePoints: KnowledgePoint[] = [
  {
    id: 'mech-kp-01',
    title: '力的基本概念与性质',
    chapter: '01',
    types: ['single', 'fill'],
    body: `力是物体间相互的机械作用，使物体的运动状态或形状发生改变。

力的三要素：大小、方向、作用点

力的基本性质：
1. 力的可传性：作用于刚体上的力可沿其作用线移动而不改变对刚体的作用效果
2. 二力平衡条件：作用于刚体上的两个力平衡的充要条件是这两个力大小相等、方向相反、作用在同一直线上
3. 力的平行四边形法则：两个力的合力等于以这两个力为邻边构成的平行四边形的对角线

合力的大小范围：$|F_1 - F_2| \\leq |F_R| \\leq |F_1 + F_2|$`,
    formulas: ['mech-f-01'],
    examples: ['mech-q-001', 'mech-q-005'],
    difficulty: 2,
    freqScore: 9
  },
  {
    id: 'mech-kp-02',
    title: '力矩与力偶',
    chapter: '01',
    types: ['single', 'fill'],
    body: `力对点之矩（力矩）：
$M_O(\\vec{F}) = \\vec{r} \\times \\vec{F}$

力矩是矢量，其大小等于力的大小乘以力臂（点到力作用线的垂直距离）

力偶：由大小相等、方向相反、不共线的两个平行力组成

力偶矩：$M = F \\cdot d$（$d$为力偶臂）

力偶的性质：
1. 力偶没有合力，不能用一个力来等效替换
2. 力偶对物体的作用效果取决于力偶矩的大小、转向和作用面
3. 同一平面内的力偶可以任意移动而不改变对刚体的作用效果`,
    formulas: ['mech-f-02', 'mech-f-03'],
    examples: ['mech-q-003', 'mech-q-004'],
    difficulty: 2,
    freqScore: 8
  },
  {
    id: 'mech-kp-03',
    title: '力系的简化与平衡',
    chapter: '01',
    types: ['single', 'fill'],
    body: `平面汇交力系平衡条件：
$\\sum F_x = 0$，$\\sum F_y = 0$

平面一般力系平衡条件：
$\\sum F_x = 0$，$\\sum F_y = 0$，$\\sum M_O = 0$

空间力系向某点简化的结果：
1. 主矢$\\vec{R}' = 0$，主矩$\\vec{M}_O = 0$：力系平衡
2. 主矢$\\vec{R}' \\neq 0$，主矩$\\vec{M}_O = 0$：等效于一个力
3. 主矢$\\vec{R}' = 0$，主矩$\\vec{M}_O \\neq 0$：等效于一个力偶
4. 主矢$\\vec{R}' \\neq 0$，主矩$\\vec{M}_O \\neq 0$且$\\vec{R}' \\perp \\vec{M}_O$：等效于一个力
5. 主矢$\\vec{R}' \\neq 0$，主矩$\\vec{M}_O \\neq 0$且$\\vec{R}' \\not\\perp \\vec{M}_O$：等效于力螺旋`,
    formulas: ['mech-f-04', 'mech-f-05'],
    examples: ['mech-q-007', 'mech-q-010'],
    difficulty: 3,
    freqScore: 9
  },
  {
    id: 'mech-kp-04',
    title: '点的运动学',
    chapter: '02',
    types: ['single', 'fill'],
    body: `点的运动方程：$\\vec{r} = \\vec{r}(t)$ 或 $x = x(t)$，$y = y(t)$，$z = z(t)$

速度：$\\vec{v} = \\frac{d\\vec{r}}{dt}$

加速度：$\\vec{a} = \\frac{d\\vec{v}}{dt} = \\frac{d^2\\vec{r}}{dt^2}$

自然坐标系下的加速度分解：
- 切向加速度：$a_\\tau = \\frac{dv}{dt}$，反映速度大小的变化
- 法向加速度：$a_n = \\frac{v^2}{\\rho}$，反映速度方向的变化

刚体定轴转动：
- 角速度：$\\omega = \\frac{d\\varphi}{dt}$
- 角加速度：$\\varepsilon = \\frac{d\\omega}{dt}$
- 刚体上各点的角速度和角加速度都相同`,
    formulas: ['mech-f-06', 'mech-f-07'],
    examples: ['mech-q-011', 'mech-q-018'],
    difficulty: 2,
    freqScore: 8
  },
  {
    id: 'mech-kp-05',
    title: '刚体平面运动',
    chapter: '02',
    types: ['single', 'fill'],
    body: `刚体平面运动可分解为：随基点的平动 + 绕基点的转动

速度瞬心：平面运动刚体上速度为零的点

速度瞬心的确定方法：
1. 已知两点速度方向：过两点分别作速度的垂线，交点即为瞬心
2. 纯滚动：接触点为瞬心
3. 两点速度平行且垂直于两点连线：瞬心在两点连线上
4. 两点速度平行且不垂直于两点连线：瞬心在无穷远处（平动）

基点法求速度：$\\vec{v}_A = \\vec{v}_B + \\vec{v}_{AB}$

瞬心法求速度：$v_A = \\omega \\cdot r_{AC}$（$C$为瞬心）`,
    formulas: ['mech-f-08', 'mech-f-09'],
    examples: ['mech-q-012', 'mech-q-015'],
    difficulty: 3,
    freqScore: 9
  },
  {
    id: 'mech-kp-06',
    title: '刚体定轴转动的动量矩与动能',
    chapter: '03',
    types: ['single', 'fill'],
    body: `刚体对转轴的动量矩：$L_z = J_z \\omega$

刚体定轴转动的动能：$T = \\frac{1}{2}J_z\\omega^2$

常见均质刚体的转动惯量：
- 细杆绕端点：$J = \\frac{1}{3}ml^2$
- 细杆绕中点：$J = \\frac{1}{12}ml^2$
- 圆盘绕中心轴：$J = \\frac{1}{2}mR^2$
- 圆环绕中心轴：$J = mR^2$

平行轴定理：$J_z = J_{zc} + md^2$
（$J_{zc}$为过质心轴的转动惯量，$d$为两轴间距离）`,
    formulas: ['mech-f-10', 'mech-f-11', 'mech-f-12'],
    examples: ['mech-q-013', 'mech-q-014'],
    difficulty: 3,
    freqScore: 8
  },
  {
    id: 'mech-kp-07',
    title: '点的合成运动',
    chapter: '02',
    types: ['single', 'fill'],
    body: `三种运动：
- 绝对运动：动点相对于定参考系的运动
- 相对运动：动点相对于动参考系的运动
- 牵连运动：动参考系相对于定参考系的运动

速度合成定理：$\\vec{v}_a = \\vec{v}_e + \\vec{v}_r$
- $\\vec{v}_a$：绝对速度
- $\\vec{v}_e$：牵连速度
- $\\vec{v}_r$：相对速度

加速度合成定理：$\\vec{a}_a = \\vec{a}_e + \\vec{a}_r + \\vec{a}_C$
- $\\vec{a}_C$：科氏加速度，$\\vec{a}_C = 2\\vec{\\omega}_e \\times \\vec{v}_r$`,
    formulas: ['mech-f-13', 'mech-f-14'],
    examples: ['mech-q-016'],
    difficulty: 3,
    freqScore: 8
  },
  {
    id: 'mech-kp-08',
    title: '动量定理',
    chapter: '03',
    types: ['single', 'fill'],
    body: `质点的动量：$\\vec{p} = m\\vec{v}$

质点系的动量：$\\vec{p} = \\sum m_i\\vec{v}_i = m\\vec{v}_C$（$\\vec{v}_C$为质心速度）

动量定理：$\\frac{d\\vec{p}}{dt} = \\sum\\vec{F}^{(e)}$

动量守恒条件：质点系所受外力的主矢为零

质心运动定理：$m\\vec{a}_C = \\sum\\vec{F}^{(e)}$

质心运动守恒：若外力在某方向投影为零，则质心在该方向的速度分量不变`,
    formulas: ['mech-f-15', 'mech-f-16'],
    examples: ['mech-q-022', 'mech-q-023'],
    difficulty: 2,
    freqScore: 9
  },
  {
    id: 'mech-kp-09',
    title: '动量矩定理',
    chapter: '03',
    types: ['single', 'fill'],
    body: `质点对点$O$的动量矩：$\\vec{L}_O = \\vec{r} \\times m\\vec{v}$

质点系对点$O$的动量矩定理：
$\\frac{d\\vec{L}_O}{dt} = \\sum\\vec{M}_O^{(e)}$

刚体定轴转动微分方程：$J_z\\varepsilon = \\sum M_z^{(e)}$

动量矩守恒条件：外力对某轴的力矩之和为零时，质点系对该轴的动量矩守恒

转动惯量的计算：
$J_z = \\sum m_i r_i^2$（离散质点系）
$J_z = \\int r^2 dm$（连续体）`,
    formulas: ['mech-f-17', 'mech-f-18'],
    examples: ['mech-q-024', 'mech-q-030'],
    difficulty: 3,
    freqScore: 9
  },
  {
    id: 'mech-kp-10',
    title: '动能定理',
    chapter: '03',
    types: ['single', 'fill'],
    body: `质点的动能：$T = \\frac{1}{2}mv^2$

刚体平动的动能：$T = \\frac{1}{2}mv_C^2$

刚体定轴转动的动能：$T = \\frac{1}{2}J_z\\omega^2$

刚体平面运动的动能：$T = \\frac{1}{2}mv_C^2 + \\frac{1}{2}J_C\\omega^2$

动能定理：$T_2 - T_1 = \\sum W$

力的功：$W = \\int\\vec{F}\\cdot d\\vec{r}$

力矩的功：$W = \\int M d\\varphi$

机械能守恒：当作用于质点系的力都是有势力时，机械能守恒`,
    formulas: ['mech-f-19', 'mech-f-20', 'mech-f-21'],
    examples: ['mech-q-025'],
    difficulty: 3,
    freqScore: 9
  }
]
