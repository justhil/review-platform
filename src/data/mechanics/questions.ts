import type { Question } from '../../types'

export const mechanicsQuestions: Question[] = [
  // 第一章 静力学 - 选择题
  {
    id: 'mech-q-001',
    qtype: 'single',
    stem: '图1所示，三角架ABC中，各杆自重不计，在节点C上作用铅直力$\\vec{F}$，则杆BC所受的力___________',
    options: ['为拉力', '为压力', '为零', '不能确定'],
    answer: 'A',
    kp: ['mech-kp-01'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-002',
    qtype: 'single',
    stem: '图2所示，力$\\vec{F}$沿1方向移动时_____',
    options: ['力$\\vec{F}$对物体的作用效果不变', '力$\\vec{F}$对物体的作用效果改变', '沿方向1移动不变，沿方向2移动改变', '沿方向1移动改变，沿方向2移动不变'],
    answer: 'A',
    kp: ['mech-kp-01'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-003',
    qtype: 'single',
    stem: '图3所示，力偶矩的计算公式为$M=2Fa$，其中$a$的方向_____',
    options: ['沿AB方向', '沿BC方向', '沿CA方向', '沿D方向'],
    answer: 'D',
    kp: ['mech-kp-02'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-004',
    qtype: 'single',
    stem: '力偶对物体的作用效果取决于_____',
    options: ['力偶矩$a=$力偶中力的大小', '力偶矩$a=$力偶臂的大小', '力偶矩的大小、转向和作用面', '力偶中各力的作用点位置'],
    answer: 'C',
    kp: ['mech-kp-02'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-005',
    qtype: 'single',
    stem: '设$\\vec{F}_R$为$\\vec{F}_1$与$\\vec{F}_2$的合力，$|\\vec{F}_R|$、$|\\vec{F}_1|$、$|\\vec{F}_2|$分别表示三个力的大小，则_____',
    options: ['$|\\vec{F}_R| \\leq |\\vec{F}_1| + |\\vec{F}_2|$', '$|\\vec{F}_R| \\geq |\\vec{F}_1| + |\\vec{F}_2|$', '$|\\vec{F}_R| \\leq |\\vec{F}_1|$, $|\\vec{F}_R| \\leq |\\vec{F}_2|$', '$|\\vec{F}_R| \\geq |\\vec{F}_1|$, $|\\vec{F}_R| \\geq |\\vec{F}_2|$'],
    answer: 'A',
    kp: ['mech-kp-01'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-006',
    qtype: 'single',
    stem: '刚体在两个力作用下平衡的充要条件是：这两个力大小相等、方向相反、作用在___',
    options: ['同一点上', '同一直线上', '同一刚体上', '平行线上'],
    answer: 'B',
    kp: ['mech-kp-01'],
    source: '理论力学题库',
    difficulty: 1
  },
  {
    id: 'mech-q-007',
    qtype: 'single',
    stem: '平面汇交力系平衡的充要条件是_____',
    options: ['力系的合力为零', '力系中各力在任意两个坐标轴上投影的代数和分别为零', '力系对任一点的力矩为零', '以上都对'],
    answer: 'D',
    kp: ['mech-kp-03'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-008',
    qtype: 'single',
    stem: '平面一般力系向某点简化，可能得到的最简结果有（）种',
    options: ['1-2种', '4-6种', '2-3种', '3-1种'],
    answer: 'C',
    kp: ['mech-kp-03'],
    source: '理论力学题库',
    difficulty: 3
  },
  {
    id: 'mech-q-009',
    qtype: 'single',
    stem: '力对点之矩与力对轴之矩的关系是（）',
    options: ['力对点之矩在过该点的轴上的投影等于力对该轴之矩', '力对点之矩等于力对过该点各轴之矩的矢量和', '力对点之矩的大小等于力对过该点各轴之矩的代数和', '没有直接关系'],
    answer: 'A',
    kp: ['mech-kp-03'],
    source: '理论力学题库',
    difficulty: 3
  },
  {
    id: 'mech-q-010',
    qtype: 'single',
    stem: '空间力系向某点简化，若主矢$\\vec{R}=0$，主矩$\\vec{M}_O=0$，则该力系（）',
    options: ['等效于一个力', '等效于一个力偶', '平衡', '等效于一个力螺旋'],
    answer: 'C',
    kp: ['mech-kp-03'],
    source: '理论力学题库',
    difficulty: 2
  },

  // 第二章 运动学 - 选择题
  {
    id: 'mech-q-011',
    qtype: 'single',
    stem: '图1所示，半径为$R$的圆轮沿直线轨道作纯滚动，轮心$O$的加速度为$a_O$。设轮缘上$A$、$B$两点的加速度分别为$a_A$、$a_B$，$OA=R$，$OB=R/2$，则$a_A$、$a_B$与角加速度$\\varepsilon$的关系为',
    options: ['$a_A = 2a_B$, $\\varepsilon=2$', '$a_A = 2a_B$, $\\varepsilon=\\pi$', '$a_A = a_B$, $\\varepsilon=2$', '$a_A = a_B$, $\\varepsilon=\\pi$'],
    answer: 'A',
    kp: ['mech-kp-04'],
    source: '理论力学题库',
    difficulty: 3
  },
  {
    id: 'mech-q-012',
    qtype: 'single',
    stem: '图2所示，长度为$L$的均质杆，一端$A$靠在光滑的墙上，另一端$B$放在光滑的水平面上。若杆在铅垂平面内运动，则杆的瞬心$C$位于',
    options: ['距$A$点$L/2$处', '无穷远处', '杆的中点', '杆的延长线上'],
    answer: 'A',
    kp: ['mech-kp-05'],
    source: '理论力学题库',
    difficulty: 3
  },
  {
    id: 'mech-q-013',
    qtype: 'single',
    stem: '图3所示，质量为$m$、半径为$R$的均质圆盘，绕通过圆心$O$且垂直于盘面的轴以角速度$\\omega$转动，则圆盘对转轴的动量矩为',
    options: ['$P=0$', '$P=mR\\omega$', '$P=2mR\\omega$', '$P=mR^2\\omega$'],
    answer: 'A',
    kp: ['mech-kp-06'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-014',
    qtype: 'single',
    stem: '图4所示，质量为$m$、半径为$R$的均质圆盘，绕通过边缘上一点$O$且垂直于盘面的轴以角速度$\\omega$转动，则圆盘对$O$轴的动量矩$L_O$和动能$T$为',
    options: ['$L_O=\\frac{1}{2}mR^2\\omega$, $T=\\frac{1}{4}mR^2\\omega^2$', '$L_O=mR^2\\omega$, $T=mR^2\\omega^2$', '$L_O=\\frac{3}{2}mR^2\\omega$, $T=\\frac{3}{4}mR^2\\omega^2$', '$L_O=2mR^2\\omega$, $T=\\frac{1}{4}mR^2\\omega^2$'],
    answer: 'C',
    kp: ['mech-kp-06'],
    source: '理论力学题库',
    difficulty: 3
  },
  {
    id: 'mech-q-015',
    qtype: 'single',
    stem: '图5所示，下列各图中，哪些图的速度瞬心位于无穷远处',
    options: ['(a)(d)', '(b)(d)', '(b)(f)', '(a)(e)'],
    answer: 'B',
    kp: ['mech-kp-05'],
    source: '理论力学题库',
    difficulty: 3
  },
  {
    id: 'mech-q-016',
    qtype: 'single',
    stem: '点的速度合成定理$\\vec{v}_a = \\vec{v}_e + \\vec{v}_r$中，三种速度的关系是',
    options: ['$\\vec{v}_a$是绝对速度，$\\vec{v}_e$是牵连速度，$\\vec{v}_r$是相对速度', '$\\vec{v}_a$是相对速度，$\\vec{v}_e$是绝对速度，$\\vec{v}_r$是牵连速度', '$\\vec{v}_a$是牵连速度，$\\vec{v}_e$是相对速度，$\\vec{v}_r$是绝对速度', '三者可以任意互换'],
    answer: 'A',
    kp: ['mech-kp-07'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-017',
    qtype: 'single',
    stem: '刚体作平面运动时，若某瞬时角速度$\\omega=0$，则该瞬时刚体上各点',
    options: ['速度都为零', '加速度都为零', '速度相等', '加速度相等'],
    answer: 'C',
    kp: ['mech-kp-05'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-018',
    qtype: 'single',
    stem: '点沿曲线运动，其加速度的方向',
    options: ['沿轨迹的切线方向', '沿轨迹的法线方向', '介于切线和法线之间', '与速度方向相同'],
    answer: 'C',
    kp: ['mech-kp-04'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-019',
    qtype: 'single',
    stem: '刚体绕定轴转动时，刚体上各点的角速度和角加速度',
    options: ['都相同', '与到转轴的距离成正比', '与到转轴的距离成反比', '角速度相同，角加速度不同'],
    answer: 'A',
    kp: ['mech-kp-04'],
    source: '理论力学题库',
    difficulty: 1
  },
  {
    id: 'mech-q-020',
    qtype: 'single',
    stem: '图7所示，半径为$R$的圆轮沿直线轨道作纯滚动，轮心$C$的速度为$v_C$。设轮缘上$A$、$B$两点与轮心$C$在同一水平线上，则$A$、$B$两点的速度大小分别为',
    options: ['$v_A=0$, $v_B=2v_C$', '$v_A=2v_C$, $v_B=0$', '$v_A=v_C$, $v_B=v_C$', '$v_A=v_B=\\sqrt{2}v_C$'],
    answer: 'A',
    kp: ['mech-kp-05'],
    source: '理论力学题库',
    difficulty: 2
  },

  // 第三章 动力学 - 选择题
  {
    id: 'mech-q-021',
    qtype: 'single',
    stem: '力$\\vec{F}_1$与$\\vec{F}_2$的合力$\\vec{F}$，当$\\vec{F}_1$与$\\vec{F}_2$夹角变化时',
    options: ['$|\\vec{F}|$一定变化', '$|\\vec{F}|$可能不变', '$|\\vec{F}|$一定不变', '无法确定'],
    answer: 'A',
    kp: ['mech-kp-01'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-022',
    qtype: 'single',
    stem: '质点系动量守恒的条件是',
    options: ['质点系所受外力的主矢为零', '质点系所受外力对某点的主矩为零', '质点系所受外力在某轴上的投影为零', '质点系内各质点的动量都不变'],
    answer: 'A',
    kp: ['mech-kp-08'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-023',
    qtype: 'single',
    stem: '图所示，均质杆$AB$的重量为$W$，$A$端靠在光滑的墙上，$B$端放在光滑的水平面上。若杆在铅垂平面内运动，设杆与水平面的夹角为$\\theta$，则杆的质心$C$的$x$坐标$x_C$',
    options: ['$x_C$随$\\theta$变化', '$x_C>0$', '$x_C=0$', '$x_C<0$'],
    answer: 'C',
    kp: ['mech-kp-08'],
    source: '理论力学题库',
    difficulty: 3
  },
  {
    id: 'mech-q-024',
    qtype: 'single',
    stem: '图所示，半径为$r$的均质圆盘，圆心$C$偏离转轴$O$的距离为$e_C$，即$OC=e$。圆盘绕$O$轴以角速度$\\omega$转动，则圆盘对$O$轴的动量矩为',
    options: ['$L_O=\\frac{1}{2}mr^2\\omega$', '$L_O=mr^2\\omega$', '$L_O=(\\frac{1}{2}mr^2+me^2)\\omega$', '$L_O=me^2\\omega$'],
    answer: 'C',
    kp: ['mech-kp-09'],
    source: '理论力学题库',
    difficulty: 3
  },
  {
    id: 'mech-q-025',
    qtype: 'single',
    stem: '动能定理中，力对质点所做的功等于',
    options: ['质点动能的增量', '质点动量的增量', '质点动量矩的增量', '质点势能的增量'],
    answer: 'A',
    kp: ['mech-kp-10'],
    source: '理论力学题库',
    difficulty: 1
  },
  {
    id: 'mech-q-026',
    qtype: 'single',
    stem: '质点系的动量矩定理表明，质点系对某固定点的动量矩对时间的导数等于',
    options: ['作用于质点系的外力对该点的力矩之和', '作用于质点系的内力对该点的力矩之和', '作用于质点系的所有力对该点的力矩之和', '质点系的动量对该点的力矩'],
    answer: 'A',
    kp: ['mech-kp-09'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-027',
    qtype: 'single',
    stem: '刚体绕定轴转动的转动惯量$J$与下列哪个因素无关',
    options: ['刚体的质量', '质量的分布', '转轴的位置', '刚体的角速度'],
    answer: 'D',
    kp: ['mech-kp-09'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-028',
    qtype: 'single',
    stem: '平行轴定理$J_z = J_{zc} + md^2$中，$J_{zc}$是',
    options: ['刚体对任意轴的转动惯量', '刚体对过质心轴的转动惯量', '刚体对$z$轴的转动惯量', '刚体对平行于$z$轴的任意轴的转动惯量'],
    answer: 'B',
    kp: ['mech-kp-09'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-029',
    qtype: 'single',
    stem: '空间力系向某点$O$简化，若主矢$\\vec{R}\\neq 0$，主矩$\\vec{M}_O=0$，则该力系',
    options: ['等效于一个力', '等效于一个力偶', '平衡', '等效于一个力螺旋'],
    answer: 'A',
    kp: ['mech-kp-03'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-030',
    qtype: 'single',
    stem: '图所示，长度为$l$的均质杆，质量为$m$，一端$O$为固定铰支座，杆与铅垂线成$60°$角时由静止释放。则杆的角加速度为',
    options: ['$\\frac{3g}{4l}$', '$\\frac{3g\\sqrt{3}}{4l}$', '$\\frac{3g}{2l}$', '$\\frac{3g\\sqrt{3}}{2l}$'],
    answer: 'B',
    kp: ['mech-kp-09'],
    source: '理论力学题库',
    difficulty: 3
  },

  // 填空题
  {
    id: 'mech-q-031',
    qtype: 'fill',
    stem: '力是物体间相互的机械作用，这种作用使物体的_______________发生改变',
    answer: '运动状态或形状',
    kp: ['mech-kp-01'],
    source: '理论力学题库',
    difficulty: 1
  },
  {
    id: 'mech-q-032',
    qtype: 'fill',
    stem: '力对点之矩是一个_____________量',
    answer: '矢量',
    kp: ['mech-kp-02'],
    source: '理论力学题库',
    difficulty: 1
  },
  {
    id: 'mech-q-033',
    qtype: 'fill',
    stem: '力偶对物体的作用效果取决于力偶矩的______________',
    answer: '大小、转向和作用面',
    kp: ['mech-kp-02'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-034',
    qtype: 'fill',
    stem: '平面汇交力系平衡的充要条件是________________',
    answer: '力系的合力为零',
    kp: ['mech-kp-03'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-035',
    qtype: 'fill',
    stem: '平面一般力系平衡的充要条件是______________',
    answer: '主矢和主矩都为零',
    kp: ['mech-kp-03'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-036',
    qtype: 'fill',
    stem: '图8所示，$F_1=F_2=F_3=F_4=F$，作用在正方形$ABCD$的各边上，边长为$a$，则力系向$O$点简化的主矢$\\vec{R}\'=$_____，主矩$M_O=$_____',
    answer: ['0', '2Fa'],
    kp: ['mech-kp-03'],
    source: '理论力学题库',
    difficulty: 3
  },
  {
    id: 'mech-q-037',
    qtype: 'fill',
    stem: '点的运动方程为$x=50t$，$y=500-5t^2$（$x$、$y$以$m$计，$t$以$s$计），则$t=0$时点的加速度大小为_____$m/s^2$',
    answer: '10',
    kp: ['mech-kp-04'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-038',
    qtype: 'fill',
    stem: '刚体作平面运动时，其上任一点的速度等于_______',
    answer: '基点速度与该点相对于基点转动速度的矢量和',
    kp: ['mech-kp-05'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-039',
    qtype: 'fill',
    stem: '刚体绕定轴转动时，刚体上各点的角速度_______，角加速度_______',
    answer: ['相同', '相同'],
    kp: ['mech-kp-04'],
    source: '理论力学题库',
    difficulty: 1
  },
  {
    id: 'mech-q-040',
    qtype: 'fill',
    stem: '质点系动量定理：质点系动量对时间的导数等于_______',
    answer: '作用于质点系的外力的矢量和',
    kp: ['mech-kp-08'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-041',
    qtype: 'fill',
    stem: '动能定理：质点动能的增量等于_______',
    answer: '作用于质点的力所做的功',
    kp: ['mech-kp-10'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-042',
    qtype: 'fill',
    stem: '质量为$m$、长度为$l$的均质杆，绕过端点且垂直于杆的轴的转动惯量为_______',
    answer: '$\\frac{1}{3}ml^2$',
    kp: ['mech-kp-09'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-043',
    qtype: 'fill',
    stem: '图所示，质量为$M$、长度为$l$的均质杆$OB$，绕$O$点转动，杆与铅垂线成$60°$角，则杆的重力对$O$点的力矩为_______',
    answer: '$\\frac{Mgl}{4}$',
    kp: ['mech-kp-02'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-044',
    qtype: 'fill',
    stem: '点的加速度的切向分量$a_\\tau$反映速度_______的变化，法向分量$a_n$反映速度_______的变化',
    answer: ['大小', '方向'],
    kp: ['mech-kp-04'],
    source: '理论力学题库',
    difficulty: 2
  },
  {
    id: 'mech-q-045',
    qtype: 'fill',
    stem: '刚体平面运动可以分解为随_______的平动和绕_______的转动',
    answer: ['基点', '基点'],
    kp: ['mech-kp-05'],
    source: '理论力学题库',
    difficulty: 2
  }
]
