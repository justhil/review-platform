import type { Question } from '../../types'

export const physicsQuestions: Question[] = [
  // 2018-2019学年A卷 - 填空题
  {
    id: 'phy-2019a-fill-01',
    qtype: 'fill',
    stem: '一质点沿$x$轴运动，其加速度$a=4t\\,\\mathrm{m/s^2}$，初始时刻质点位于原点，初速度为$2\\,\\mathrm{m/s}$，则质点的运动方程为$x=$______',
    answer: '$t^2+2t$（或$\\frac{2}{3}t^3+2t$）',
    kp: ['phy-kp-01'],
    source: '2018-2019学年A卷',
    difficulty: 2
  },
  {
    id: 'phy-2019a-fill-02',
    qtype: 'fill',
    stem: '一质点沿半径为$R$的圆周运动，某时刻其速率为$v$，切向加速度为$a_t$，则该时刻质点的加速度大小为______',
    answer: '$\\sqrt{a_t^2+\\frac{v^4}{R^2}}$',
    kp: ['phy-kp-01'],
    source: '2018-2019学年A卷',
    difficulty: 2
  },
  {
    id: 'phy-2019a-fill-03',
    qtype: 'fill',
    stem: '一均匀细棒长为$L$，质量为$M$，绕过其一端且垂直于棒的轴转动，其转动惯量为______',
    answer: '$\\frac{1}{3}ML^2$',
    kp: ['phy-kp-04'],
    source: '2018-2019学年A卷',
    difficulty: 2
  },
  {
    id: 'phy-2019a-fill-04',
    qtype: 'fill',
    stem: '一弹簧振子作简谐振动，振幅为$A$，在起始时刻质点的位移为$\\frac{A}{2}$，且向$x$轴正方向运动，则初相位$\\varphi=$______',
    answer: '$-\\frac{\\pi}{6}$',
    kp: ['phy-kp-05'],
    source: '2018-2019学年A卷',
    difficulty: 2
  },
  {
    id: 'phy-2019a-fill-05',
    qtype: 'fill',
    stem: '一平面简谐波沿$x$轴正方向传播，波动方程为$y=A\\cos(\\omega t-kx)$，则波速$u=$______',
    answer: '$\\frac{\\omega}{k}$',
    kp: ['phy-kp-06'],
    source: '2018-2019学年A卷',
    difficulty: 2
  },
  {
    id: 'phy-2019a-fill-06',
    qtype: 'fill',
    stem: '理想气体的内能只与______有关',
    answer: '温度',
    kp: ['phy-kp-07'],
    source: '2018-2019学年A卷',
    difficulty: 1
  },
  {
    id: 'phy-2019a-fill-07',
    qtype: 'fill',
    stem: '在等温过程中，理想气体对外做功$W$，则气体吸收的热量$Q=$______',
    answer: '$W$',
    kp: ['phy-kp-08'],
    source: '2018-2019学年A卷',
    difficulty: 1
  },
  {
    id: 'phy-2019a-fill-08',
    qtype: 'fill',
    stem: '一点电荷$q$位于边长为$a$的正方体中心，则通过正方体一个面的电通量为______',
    answer: '$\\frac{q}{6\\varepsilon_0}$',
    kp: ['phy-kp-09'],
    source: '2018-2019学年A卷',
    difficulty: 2
  },
  {
    id: 'phy-2019a-fill-09',
    qtype: 'fill',
    stem: '一无限长直导线通有电流$I$，距导线$r$处的磁感应强度大小为______',
    answer: '$\\frac{\\mu_0 I}{2\\pi r}$',
    kp: ['phy-kp-11'],
    source: '2018-2019学年A卷',
    difficulty: 2
  },

  // 2018-2019学年A卷 - 选择题
  {
    id: 'phy-2019a-single-01',
    qtype: 'single',
    stem: '一质点作圆周运动，其切向加速度$a_t$恒定，则下列说法正确的是',
    options: [
      '质点作匀速圆周运动',
      '质点作匀加速圆周运动',
      '质点的角速度均匀增加',
      '质点的法向加速度恒定'
    ],
    answer: 'C',
    kp: ['phy-kp-01'],
    source: '2018-2019学年A卷',
    difficulty: 2
  },
  {
    id: 'phy-2019a-single-02',
    qtype: 'single',
    stem: '关于刚体的转动惯量，下列说法正确的是',
    options: [
      '转动惯量只与刚体的质量有关',
      '转动惯量只与转轴的位置有关',
      '转动惯量与刚体的质量和质量分布及转轴位置都有关',
      '转动惯量与刚体的角速度有关'
    ],
    answer: 'C',
    kp: ['phy-kp-04'],
    source: '2018-2019学年A卷',
    difficulty: 2
  },
  {
    id: 'phy-2019a-single-03',
    qtype: 'single',
    stem: '一弹簧振子作简谐振动，当位移为振幅的一半时，其动能与势能的比值为',
    options: ['$1:1$', '$1:3$', '$3:1$', '$1:2$'],
    answer: 'C',
    kp: ['phy-kp-05'],
    source: '2018-2019学年A卷',
    difficulty: 2
  },
  {
    id: 'phy-2019a-single-04',
    qtype: 'single',
    stem: '一平面简谐波在介质中传播，介质中某质元在平衡位置时',
    options: [
      '动能最大，势能最大',
      '动能最大，势能最小',
      '动能最小，势能最大',
      '动能最小，势能最小'
    ],
    answer: 'A',
    kp: ['phy-kp-06'],
    source: '2018-2019学年A卷',
    difficulty: 2
  },
  {
    id: 'phy-2019a-single-05',
    qtype: 'single',
    stem: '理想气体等温膨胀过程中',
    options: [
      '气体对外做功，内能增加',
      '气体对外做功，内能不变',
      '外界对气体做功，内能增加',
      '外界对气体做功，内能不变'
    ],
    answer: 'B',
    kp: ['phy-kp-08'],
    source: '2018-2019学年A卷',
    difficulty: 2
  },
  {
    id: 'phy-2019a-single-06',
    qtype: 'single',
    stem: '关于高斯定理，下列说法正确的是',
    options: [
      '高斯面上各点的电场强度只由面内电荷决定',
      '高斯面上的电通量只由面内电荷决定',
      '若高斯面上电通量为零，则面内一定没有电荷',
      '若高斯面内没有电荷，则面上各点电场强度为零'
    ],
    answer: 'B',
    kp: ['phy-kp-09'],
    source: '2018-2019学年A卷',
    difficulty: 2
  },
  {
    id: 'phy-2019a-single-07',
    qtype: 'single',
    stem: '一载流直导线在均匀磁场中所受的安培力',
    options: [
      '与导线中的电流成正比',
      '与导线的长度成反比',
      '与磁感应强度成反比',
      '方向沿磁场方向'
    ],
    answer: 'A',
    kp: ['phy-kp-11'],
    source: '2018-2019学年A卷',
    difficulty: 2
  },
  {
    id: 'phy-2019a-single-08',
    qtype: 'single',
    stem: '在双缝干涉实验中，若将入射光的波长增大，则',
    options: [
      '干涉条纹间距增大',
      '干涉条纹间距减小',
      '干涉条纹间距不变',
      '干涉现象消失'
    ],
    answer: 'A',
    kp: ['phy-kp-14'],
    source: '2018-2019学年A卷',
    difficulty: 2
  },

  // 2018-2019学年A卷 - 计算题
  {
    id: 'phy-2019a-calc-01',
    qtype: 'calc',
    stem: '一质量为$m$的物体从高度$h$处自由下落，落在一弹簧上，设弹簧的劲度系数为$k$，求弹簧的最大压缩量。',
    answer: '$x_{max}=\\frac{mg}{k}+\\sqrt{\\frac{m^2g^2}{k^2}+\\frac{2mgh}{k}}$',
    analysis: '设弹簧最大压缩量为$x$，由能量守恒：$mg(h+x)=\\frac{1}{2}kx^2$，解得$x_{max}=\\frac{mg}{k}+\\sqrt{\\frac{m^2g^2}{k^2}+\\frac{2mgh}{k}}$',
    kp: ['phy-kp-03'],
    source: '2018-2019学年A卷',
    difficulty: 3
  },
  {
    id: 'phy-2019a-calc-02',
    qtype: 'calc',
    stem: '一均匀细杆长为$L$，质量为$M$，可绕过其一端$O$且垂直于杆的水平轴转动。杆从水平位置由静止释放，求杆转过$90°$时的角速度。',
    answer: '$\\omega=\\sqrt{\\frac{3g}{L}}$',
    analysis: '杆绕端点转动惯量$J=\\frac{1}{3}ML^2$，由能量守恒：$Mg\\frac{L}{2}=\\frac{1}{2}J\\omega^2$，解得$\\omega=\\sqrt{\\frac{3g}{L}}$',
    kp: ['phy-kp-04'],
    source: '2018-2019学年A卷',
    difficulty: 3
  },
  {
    id: 'phy-2019a-calc-03',
    qtype: 'calc',
    stem: '一弹簧振子，弹簧的劲度系数$k=50\\,\\mathrm{N/m}$，物体质量$m=0.5\\,\\mathrm{kg}$。$t=0$时，$x_0=0.02\\,\\mathrm{m}$，$v_0=-0.2\\,\\mathrm{m/s}$，求振动方程。',
    answer: '$x=0.02\\sqrt{2}\\cos(10t+\\frac{3\\pi}{4})\\,\\mathrm{m}$',
    analysis: '角频率$\\omega=\\sqrt{\\frac{k}{m}}=10\\,\\mathrm{rad/s}$，振幅$A=\\sqrt{x_0^2+\\frac{v_0^2}{\\omega^2}}=0.02\\sqrt{2}\\,\\mathrm{m}$，由初始条件确定初相位$\\varphi=\\frac{3\\pi}{4}$',
    kp: ['phy-kp-05'],
    source: '2018-2019学年A卷',
    difficulty: 3
  },
  {
    id: 'phy-2019a-calc-04',
    qtype: 'calc',
    stem: '一定量理想气体从状态$A(p_1,V_1)$等温膨胀到状态$B(p_2,V_2)$，求气体对外做的功和吸收的热量。',
    answer: '$W=Q=p_1V_1\\ln\\frac{V_2}{V_1}=nRT\\ln\\frac{V_2}{V_1}$',
    analysis: '等温过程$pV=$常数，$W=\\int_{V_1}^{V_2}pdV=p_1V_1\\ln\\frac{V_2}{V_1}$。等温过程内能不变，由热力学第一定律$Q=W$',
    kp: ['phy-kp-08'],
    source: '2018-2019学年A卷',
    difficulty: 3
  },
  {
    id: 'phy-2019a-calc-05',
    qtype: 'calc',
    stem: '一半径为$R$的均匀带电球面，总电荷为$Q$，求球面内外的电场强度分布。',
    answer: '$E=\\begin{cases}0 & (r<R)\\\\ \\frac{Q}{4\\pi\\varepsilon_0 r^2} & (r>R)\\end{cases}$',
    analysis: '由高斯定理，取同心球面为高斯面。$r<R$时，面内无电荷，$E=0$；$r>R$时，$E\\cdot 4\\pi r^2=\\frac{Q}{\\varepsilon_0}$，得$E=\\frac{Q}{4\\pi\\varepsilon_0 r^2}$',
    kp: ['phy-kp-09'],
    source: '2018-2019学年A卷',
    difficulty: 3
  },

  // 2016-2017学年试卷 - 填空题
  {
    id: 'phy-2017-fill-03',
    qtype: 'fill',
    stem: '一弹簧振子的振动周期为$T$，当振子从平衡位置向正方向运动时开始计时，则振子第一次到达正向最大位移处所需时间为______',
    answer: '$\\frac{T}{4}$',
    kp: ['phy-kp-05'],
    source: '2016-2017学年试卷',
    difficulty: 2
  },
  {
    id: 'phy-2017-fill-04',
    qtype: 'fill',
    stem: '波长为$\\lambda$的平面简谐波，两点间的距离为$\\frac{\\lambda}{4}$，则这两点的相位差为______',
    answer: '$\\frac{\\pi}{2}$',
    kp: ['phy-kp-06'],
    source: '2016-2017学年试卷',
    difficulty: 2
  },
  {
    id: 'phy-2017-fill-05',
    qtype: 'fill',
    stem: '氧气分子（$O_2$）在标准状态下的方均根速率为______$\\mathrm{m/s}$（已知$R=8.31\\,\\mathrm{J/(mol\\cdot K)}$，$M=32\\times10^{-3}\\,\\mathrm{kg/mol}$）',
    answer: '461',
    kp: ['phy-kp-07'],
    source: '2016-2017学年试卷',
    difficulty: 3
  },
  {
    id: 'phy-2017-fill-06',
    qtype: 'fill',
    stem: '一定量理想气体经历一循环过程，内能变化$\\Delta U=$______',
    answer: '0',
    kp: ['phy-kp-08'],
    source: '2016-2017学年试卷',
    difficulty: 1
  },
  {
    id: 'phy-2017-fill-07',
    qtype: 'fill',
    stem: '两个点电荷$+q$和$-q$相距$2a$，则它们连线中点处的电场强度大小为______',
    answer: '$\\frac{q}{2\\pi\\varepsilon_0 a^2}$（或$\\frac{2kq}{a^2}$）',
    kp: ['phy-kp-09'],
    source: '2016-2017学年试卷',
    difficulty: 2
  },
  {
    id: 'phy-2017-fill-08',
    qtype: 'fill',
    stem: '电容为$C$的平行板电容器，充电后电荷量为$Q$，则电容器储存的电场能量为______',
    answer: '$\\frac{Q^2}{2C}$',
    kp: ['phy-kp-09'],
    source: '2016-2017学年试卷',
    difficulty: 2
  },
  {
    id: 'phy-2017-fill-09',
    qtype: 'fill',
    stem: '一长直螺线管，单位长度匝数为$n$，通有电流$I$，则管内的磁感应强度为______',
    answer: '$\\mu_0 nI$',
    kp: ['phy-kp-11'],
    source: '2016-2017学年试卷',
    difficulty: 2
  },
  {
    id: 'phy-2017-fill-10',
    qtype: 'fill',
    stem: '在双缝干涉实验中，若将整个装置放入水中（水的折射率为$n$），则干涉条纹间距将______（填"增大"、"减小"或"不变"）',
    answer: '减小',
    kp: ['phy-kp-14'],
    source: '2016-2017学年试卷',
    difficulty: 2
  },

  // 2016-2017学年试卷 - 选择题
  {
    id: 'phy-2017-single-08',
    qtype: 'single',
    stem: '关于安培力，下列说法正确的是',
    options: [
      '安培力的方向与电流方向相同',
      '安培力的方向与磁场方向相同',
      '安培力的方向垂直于电流和磁场所确定的平面',
      '安培力的大小与导线长度无关'
    ],
    answer: 'C',
    kp: ['phy-kp-11'],
    source: '2016-2017学年试卷',
    difficulty: 2
  },

  // 2016-2017学年试卷 - 计算题
  {
    id: 'phy-2017-calc-01',
    qtype: 'calc',
    stem: '一质点沿$x$轴运动，加速度$a=2-6t$（SI），$t=0$时$v_0=0$，$x_0=0$，求质点速度最大时的位置。',
    answer: '$x=\\frac{2}{9}\\,\\mathrm{m}$',
    analysis: '速度最大时$a=0$，即$t=\\frac{1}{3}\\,\\mathrm{s}$。$v=\\int adt=2t-3t^2$，$x=\\int vdt=t^2-t^3$。$t=\\frac{1}{3}\\,\\mathrm{s}$时，$x=\\frac{1}{9}-\\frac{1}{27}=\\frac{2}{9}\\,\\mathrm{m}$',
    kp: ['phy-kp-01'],
    source: '2016-2017学年试卷',
    difficulty: 3
  },
  {
    id: 'phy-2017-calc-02',
    qtype: 'calc',
    stem: '一均匀细杆长为$L$，质量为$M$，可绕过其中点且垂直于杆的轴转动。在杆的一端施加一恒力$F$（垂直于杆），求杆从静止开始转过$90°$时的角速度。',
    answer: '$\\omega=\\sqrt{\\frac{6F}{ML}}$',
    analysis: '杆绕中点转动惯量$J=\\frac{1}{12}ML^2$，力矩$M=F\\cdot\\frac{L}{2}$。由$M=J\\alpha$得$\\alpha=\\frac{6F}{ML}$。由$\\omega^2=2\\alpha\\theta$，$\\theta=\\frac{\\pi}{2}$，得$\\omega=\\sqrt{\\frac{6F\\pi}{ML}}$（或用能量法$\\omega=\\sqrt{\\frac{6F}{ML}}$）',
    kp: ['phy-kp-04'],
    source: '2016-2017学年试卷',
    difficulty: 3
  },
  {
    id: 'phy-2017-calc-04',
    qtype: 'calc',
    stem: '一定量双原子理想气体（$C_V=\\frac{5}{2}R$），从状态$A(p_1,V_1)$绝热膨胀到状态$B(p_2,V_2)$，求气体对外做的功。',
    answer: '$W=\\frac{5}{2}(p_1V_1-p_2V_2)$',
    analysis: '绝热过程$Q=0$，由热力学第一定律$W=-\\Delta U=-nC_V\\Delta T=\\frac{5}{2}nR(T_1-T_2)=\\frac{5}{2}(p_1V_1-p_2V_2)$',
    kp: ['phy-kp-08'],
    source: '2016-2017学年试卷',
    difficulty: 3
  },
  {
    id: 'phy-2017-calc-05',
    qtype: 'calc',
    stem: '一无限大均匀带电平面，面电荷密度为$\\sigma$，求平面两侧的电场强度。',
    answer: '$E=\\frac{\\sigma}{2\\varepsilon_0}$',
    analysis: '取圆柱形高斯面，两底面平行于带电平面且对称分布。由高斯定理$2ES=\\frac{\\sigma S}{\\varepsilon_0}$，得$E=\\frac{\\sigma}{2\\varepsilon_0}$，方向垂直于平面向外',
    kp: ['phy-kp-09'],
    source: '2016-2017学年试卷',
    difficulty: 3
  },

  // 2019-2020学年试卷 - 填空题
  {
    id: 'phy-2020-fill-03',
    qtype: 'fill',
    stem: '一弹簧振子作简谐振动，振幅为$A$，角频率为$\\omega$，则振子的最大加速度为______',
    answer: '$A\\omega^2$',
    kp: ['phy-kp-05'],
    source: '2019-2020学年试卷',
    difficulty: 2
  },
  {
    id: 'phy-2020-fill-04',
    qtype: 'fill',
    stem: '一平面简谐波的波动方程为$y=0.05\\cos(2\\pi t-\\pi x)$（SI），则波速为______$\\mathrm{m/s}$',
    answer: '2',
    kp: ['phy-kp-06'],
    source: '2019-2020学年试卷',
    difficulty: 2
  },
  {
    id: 'phy-2020-fill-05',
    qtype: 'fill',
    stem: '理想气体的压强公式为$p=\\frac{1}{3}nm\\overline{v^2}$，其中$\\overline{v^2}$表示______',
    answer: '分子速率的平方平均值',
    kp: ['phy-kp-07'],
    source: '2019-2020学年试卷',
    difficulty: 2
  },
  {
    id: 'phy-2020-fill-06',
    qtype: 'fill',
    stem: '卡诺热机在高温热源$T_1$和低温热源$T_2$之间工作，其效率$\\eta=$______',
    answer: '$1-\\frac{T_2}{T_1}$（或$\\frac{T_1-T_2}{T_1}$）',
    kp: ['phy-kp-08'],
    source: '2019-2020学年试卷',
    difficulty: 2
  },
  {
    id: 'phy-2020-fill-07',
    qtype: 'fill',
    stem: '真空中一点电荷$q$，距其$r$处的电势为______（取无穷远处电势为零）',
    answer: '$\\frac{q}{4\\pi\\varepsilon_0 r}$（或$\\frac{kq}{r}$）',
    kp: ['phy-kp-09'],
    source: '2019-2020学年试卷',
    difficulty: 2
  },
  {
    id: 'phy-2020-fill-08',
    qtype: 'fill',
    stem: '一平行板电容器，极板间距为$d$，电压为$U$，则极板间的电场强度为______',
    answer: '$\\frac{U}{d}$',
    kp: ['phy-kp-09'],
    source: '2019-2020学年试卷',
    difficulty: 1
  },
  {
    id: 'phy-2020-fill-09',
    qtype: 'fill',
    stem: '一载流线圈在均匀磁场中所受的力矩使线圈转向______位置（填"稳定平衡"或"不稳定平衡"）',
    answer: '稳定平衡',
    kp: ['phy-kp-11'],
    source: '2019-2020学年试卷',
    difficulty: 2
  },
  {
    id: 'phy-2020-fill-10',
    qtype: 'fill',
    stem: '在单缝夫琅禾费衍射实验中，缝宽为$a$，透镜焦距为$f$，入射光波长为$\\lambda$，则中央明纹的宽度为______',
    answer: '$\\frac{2f\\lambda}{a}$',
    kp: ['phy-kp-14'],
    source: '2019-2020学年试卷',
    difficulty: 2
  },

  // 2019-2020学年试卷 - 选择题
  {
    id: 'phy-2020-single-08',
    qtype: 'single',
    stem: '在双缝干涉实验中，若将双缝间距减小，则',
    options: [
      '干涉条纹间距增大',
      '干涉条纹间距减小',
      '干涉条纹间距不变',
      '干涉现象消失'
    ],
    answer: 'A',
    kp: ['phy-kp-14'],
    source: '2019-2020学年试卷',
    difficulty: 2
  },

  // 2019-2020学年试卷 - 计算题
  {
    id: 'phy-2020-calc-05',
    qtype: 'calc',
    stem: '一无限长同轴电缆，内导体半径为$a$，外导体内半径为$b$，外半径为$c$，内外导体之间为真空。内导体均匀带电，线电荷密度为$\\lambda$，求$a<r<b$区域的电场强度。',
    answer: '$E=\\frac{\\lambda}{2\\pi\\varepsilon_0 r}$',
    analysis: '取同轴圆柱形高斯面，半径$r$，长度$l$。由高斯定理$E\\cdot 2\\pi rl=\\frac{\\lambda l}{\\varepsilon_0}$，得$E=\\frac{\\lambda}{2\\pi\\varepsilon_0 r}$',
    kp: ['phy-kp-09'],
    source: '2019-2020学年试卷',
    difficulty: 3
  },

  // 2011-2012学年第一学期期末试卷A卷 - 填空题
  {
    id: 'phy-2012a-fill-03',
    qtype: 'fill',
    stem: '一质量为$m$的质点以速度$\\vec{v}$运动，其动量为______，动能为______',
    answer: '$m\\vec{v}$，$\\frac{1}{2}mv^2$',
    kp: ['phy-kp-02', 'phy-kp-03'],
    source: '2011-2012学年A卷',
    difficulty: 1
  },
  {
    id: 'phy-2012a-fill-04',
    qtype: 'fill',
    stem: '质量为$M$、半径为$R$的均匀圆盘，绕通过圆心且垂直于盘面的轴转动，其转动惯量为______',
    answer: '$\\frac{1}{2}MR^2$',
    kp: ['phy-kp-04'],
    source: '2011-2012学年A卷',
    difficulty: 2
  },
  {
    id: 'phy-2012a-fill-05',
    qtype: 'fill',
    stem: '一弹簧振子作简谐振动，振幅为$A$，周期为$T$，则振子的最大速度为______',
    answer: '$\\frac{2\\pi A}{T}$',
    kp: ['phy-kp-05'],
    source: '2011-2012学年A卷',
    difficulty: 2
  },
  {
    id: 'phy-2012a-fill-07',
    qtype: 'fill',
    stem: '温度为$T$的理想气体，其分子的平均平动动能$\\bar{\\varepsilon}_k=$______',
    answer: '$\\frac{3}{2}kT$',
    kp: ['phy-kp-07'],
    source: '2011-2012学年A卷',
    difficulty: 2
  },
  {
    id: 'phy-2012a-fill-08',
    qtype: 'fill',
    stem: '热力学第一定律的数学表达式为______',
    answer: '$Q=\\Delta U+W$（或$\\mathrm{d}Q=\\mathrm{d}U+\\mathrm{d}W$）',
    kp: ['phy-kp-08'],
    source: '2011-2012学年A卷',
    difficulty: 1
  },

  // 2011-2012学年第一学期期末试卷A卷 - 选择题
  {
    id: 'phy-2012a-single-01',
    qtype: 'single',
    stem: '一质点沿$x$轴运动，其速度$v$与位置$x$的关系为$v=k\\sqrt{x}$（$k$为正常数），则质点的加速度',
    options: [
      '与$x$成正比',
      '与$\\sqrt{x}$成正比',
      '为恒量',
      '与$x$成反比'
    ],
    answer: 'C',
    kp: ['phy-kp-01'],
    source: '2011-2012学年A卷',
    difficulty: 3
  },
  {
    id: 'phy-2012a-single-02',
    qtype: 'single',
    stem: '关于刚体绕定轴转动的角动量，下列说法正确的是',
    options: [
      '角动量只与角速度有关',
      '角动量只与转动惯量有关',
      '角动量与角速度和转动惯量都有关',
      '角动量与角加速度有关'
    ],
    answer: 'C',
    kp: ['phy-kp-04'],
    source: '2011-2012学年A卷',
    difficulty: 2
  },
  {
    id: 'phy-2012a-single-04',
    qtype: 'single',
    stem: '两列相干波相遇时，某点振动加强的条件是两列波到达该点的波程差为',
    options: [
      '$k\\lambda$（$k=0,\\pm1,\\pm2,...$）',
      '$(2k+1)\\frac{\\lambda}{2}$（$k=0,\\pm1,\\pm2,...$）',
      '$(2k+1)\\lambda$（$k=0,\\pm1,\\pm2,...$）',
      '$\\frac{k\\lambda}{2}$（$k=0,\\pm1,\\pm2,...$）'
    ],
    answer: 'A',
    kp: ['phy-kp-06'],
    source: '2011-2012学年A卷',
    difficulty: 2
  },
  {
    id: 'phy-2012a-single-07',
    qtype: 'single',
    stem: '一运动电荷在磁场中所受洛伦兹力的方向',
    options: [
      '与电荷运动方向相同',
      '与磁场方向相同',
      '垂直于速度和磁场所确定的平面',
      '沿速度和磁场的夹角平分线方向'
    ],
    answer: 'C',
    kp: ['phy-kp-11'],
    source: '2011-2012学年A卷',
    difficulty: 2
  },

  // 2011-2012学年第一学期期末试卷A卷 - 计算题

  // 2010-2011学年第一学期期末试卷B卷 - 填空题

  // 2010-2011学年第一学期期末试卷B卷 - 选择题

  // 2010-2011学年第一学期期末试卷B卷 - 计算题
  {
    id: 'phy-2011b-calc-05',
    qtype: 'calc',
    stem: '一无限长直导线通有电流$I$，求距导线$r$处的磁感应强度。',
    answer: '$B=\\frac{\\mu_0 I}{2\\pi r}$',
    analysis: '由安培环路定理，取以导线为轴、半径为$r$的圆形回路。$\\oint\\vec{B}\\cdot d\\vec{l}=B\\cdot 2\\pi r=\\mu_0 I$，得$B=\\frac{\\mu_0 I}{2\\pi r}$',
    kp: ['phy-kp-11'],
    source: '2010-2011学年B卷',
    difficulty: 3
  },

  // 2012-2013学年第一学期期末试卷B卷 - 填空题

  // 2012-2013学年第一学期期末试卷B卷 - 选择题
  {
    id: 'phy-2013b-single-08',
    qtype: 'single',
    stem: '在单缝衍射实验中，若将单缝宽度减小，则',
    options: [
      '中央明纹变窄',
      '中央明纹变宽',
      '中央明纹宽度不变',
      '衍射现象消失'
    ],
    answer: 'B',
    kp: ['phy-kp-14'],
    source: '2012-2013学年B卷',
    difficulty: 2
  },

  // 2012-2013学年第一学期期末试卷B卷 - 计算题
  {
    id: 'phy-2013b-calc-05',
    qtype: 'calc',
    stem: '一半径为$R$的无限长均匀带电圆柱体，电荷体密度为$\\rho$，求圆柱体内外的电场强度分布。',
    answer: '$E=\\begin{cases}\\frac{\\rho r}{2\\varepsilon_0} & (r<R)\\\\ \\frac{\\rho R^2}{2\\varepsilon_0 r} & (r>R)\\end{cases}$',
    analysis: '由高斯定理，取同轴圆柱形高斯面。$r<R$时，$E\\cdot 2\\pi rl=\\frac{\\rho\\pi r^2 l}{\\varepsilon_0}$，得$E=\\frac{\\rho r}{2\\varepsilon_0}$；$r>R$时，$E\\cdot 2\\pi rl=\\frac{\\rho\\pi R^2 l}{\\varepsilon_0}$，得$E=\\frac{\\rho R^2}{2\\varepsilon_0 r}$',
    kp: ['phy-kp-09'],
    source: '2012-2013学年B卷',
    difficulty: 3
  },

  // 2013-2014学年第一学期期末试卷A卷 - 填空题

  // 2013-2014学年第一学期期末试卷A卷 - 选择题
  {
    id: 'phy-2014a1-single-08',
    qtype: 'single',
    stem: '在双缝干涉实验中，若将光源由单色光换成白光，则',
    options: [
      '干涉条纹消失',
      '中央为白色明纹，两侧为彩色条纹',
      '所有条纹都是彩色的',
      '干涉条纹间距增大'
    ],
    answer: 'B',
    kp: ['phy-kp-14'],
    source: '2013-2014学年第一学期A卷',
    difficulty: 2
  },

  // 2013-2014学年第一学期期末试卷A卷 - 计算题

  // 2013-2014学年第一学期期末试卷B卷 - 填空题

  // 2013-2014学年第一学期期末试卷B卷 - 选择题
  {
    id: 'phy-2014b1-single-08',
    qtype: 'single',
    stem: '在光栅衍射实验中，若增大光栅常数，则',
    options: [
      '衍射条纹间距增大',
      '衍射条纹间距减小',
      '衍射条纹间距不变',
      '衍射现象消失'
    ],
    answer: 'B',
    kp: ['phy-kp-14'],
    source: '2013-2014学年第一学期B卷',
    difficulty: 2
  },

  // 2013-2014学年第一学期期末试卷B卷 - 计算题
  {
    id: 'phy-2014b1-calc-05',
    qtype: 'calc',
    stem: '两块无限大平行带电平板，面电荷密度分别为$+\\sigma$和$-\\sigma$，求两板之间和两板外侧的电场强度。',
    answer: '两板之间$E=\\frac{\\sigma}{\\varepsilon_0}$，两板外侧$E=0$',
    analysis: '由叠加原理，每块板产生的电场$E_0=\\frac{\\sigma}{2\\varepsilon_0}$。两板之间两电场同向叠加$E=\\frac{\\sigma}{\\varepsilon_0}$；两板外侧两电场反向抵消$E=0$',
    kp: ['phy-kp-09'],
    source: '2013-2014学年第一学期B卷',
    difficulty: 3
  },

  // 2013-2014学年第二学期期末试卷A卷 - 填空题（电磁学和光学）
  {
    id: 'phy-2014a2-fill-03',
    qtype: 'fill',
    stem: '一圆形线圈共$N$匝，面积为$S$，通有电流$I$，则线圈的磁矩大小为______',
    answer: '$NIS$',
    kp: ['phy-kp-11'],
    source: '2013-2014学年第二学期A卷',
    difficulty: 2
  },
  {
    id: 'phy-2014a2-fill-04',
    qtype: 'fill',
    stem: '法拉第电磁感应定律的数学表达式为$\\varepsilon=$______',
    answer: '$-\\frac{d\\Phi}{dt}$',
    kp: ['phy-kp-11'],
    source: '2013-2014学年第二学期A卷',
    difficulty: 2
  },
  {
    id: 'phy-2014a2-fill-05',
    qtype: 'fill',
    stem: '一自感系数为$L$的线圈，通有电流$I$，则线圈储存的磁场能量为______',
    answer: '$\\frac{1}{2}LI^2$',
    kp: ['phy-kp-11'],
    source: '2013-2014学年第二学期A卷',
    difficulty: 2
  },
  {
    id: 'phy-2014a2-fill-08',
    qtype: 'fill',
    stem: '光栅方程为______',
    answer: '$d\\sin\\theta=k\\lambda$（$k=0,\\pm1,\\pm2,...$）',
    kp: ['phy-kp-14'],
    source: '2013-2014学年第二学期A卷',
    difficulty: 2
  },
  {
    id: 'phy-2014a2-fill-10',
    qtype: 'fill',
    stem: '马吕斯定律的表达式为$I=$______',
    answer: '$I_0\\cos^2\\theta$',
    kp: ['phy-kp-14'],
    source: '2013-2014学年第二学期A卷',
    difficulty: 2
  },

  // 2013-2014学年第二学期期末试卷A卷 - 选择题
  {
    id: 'phy-2014a2-single-03',
    qtype: 'single',
    stem: '一载流线圈在均匀磁场中所受的合力',
    options: [
      '一定为零',
      '一定不为零',
      '可能为零，也可能不为零',
      '与线圈的形状有关'
    ],
    answer: 'A',
    kp: ['phy-kp-11'],
    source: '2013-2014学年第二学期A卷',
    difficulty: 2
  },
  {
    id: 'phy-2014a2-single-04',
    qtype: 'single',
    stem: '关于电磁感应，下列说法正确的是',
    options: [
      '穿过线圈的磁通量越大，感应电动势越大',
      '穿过线圈的磁通量变化越大，感应电动势越大',
      '穿过线圈的磁通量变化越快，感应电动势越大',
      '穿过线圈的磁通量为零时，感应电动势一定为零'
    ],
    answer: 'C',
    kp: ['phy-kp-11'],
    source: '2013-2014学年第二学期A卷',
    difficulty: 2
  },
  {
    id: 'phy-2014a2-single-07',
    qtype: 'single',
    stem: '自然光通过偏振片后',
    options: [
      '光强不变',
      '光强减半',
      '光强为零',
      '光强增大'
    ],
    answer: 'B',
    kp: ['phy-kp-14'],
    source: '2013-2014学年第二学期A卷',
    difficulty: 2
  },

  // 2013-2014学年第二学期期末试卷A卷 - 计算题
  {
    id: 'phy-2014a2-calc-03',
    qtype: 'calc',
    stem: '一矩形线圈共$N$匝，面积为$S$，在均匀磁场$B$中以角速度$\\omega$绕垂直于磁场的轴匀速转动，求线圈中的感应电动势（设$t=0$时线圈平面与磁场垂直）。',
    answer: '$\\varepsilon=NBS\\omega\\sin\\omega t$',
    analysis: '磁通量$\\Phi=NBS\\cos\\omega t$。由法拉第定律$\\varepsilon=-\\frac{d\\Phi}{dt}=NBS\\omega\\sin\\omega t$',
    kp: ['phy-kp-11'],
    source: '2013-2014学年第二学期A卷',
    difficulty: 3
  },

  // 2013-2014学年第二学期期末试卷B卷 - 填空题（电磁学和光学）
  {
    id: 'phy-2014b2-fill-05',
    qtype: 'fill',
    stem: '一线圈的自感系数为$L$，当通过线圈的电流变化率为$\\frac{dI}{dt}$时，自感电动势为______',
    answer: '$-L\\frac{dI}{dt}$',
    kp: ['phy-kp-11'],
    source: '2013-2014学年第二学期B卷',
    difficulty: 2
  },
  {
    id: 'phy-2014b2-fill-08',
    qtype: 'fill',
    stem: '光栅的分辨本领$R=$______（用光栅总缝数$N$和衍射级次$k$表示）',
    answer: '$kN$',
    kp: ['phy-kp-14'],
    source: '2013-2014学年第二学期B卷',
    difficulty: 2
  },
  {
    id: 'phy-2014b2-fill-09',
    qtype: 'fill',
    stem: '布儒斯特角$i_B$与介质折射率$n$的关系为______',
    answer: '$\\tan i_B=n$',
    kp: ['phy-kp-14'],
    source: '2013-2014学年第二学期B卷',
    difficulty: 2
  },

  // 2013-2014学年第二学期期末试卷B卷 - 选择题
  {
    id: 'phy-2014b2-single-02',
    qtype: 'single',
    stem: '关于磁场的高斯定理，下列说法正确的是',
    options: [
      '通过任意闭合曲面的磁通量一定为零',
      '通过任意闭合曲面的磁通量可能不为零',
      '磁感应强度为零处，磁通量一定为零',
      '磁通量为零处，磁感应强度一定为零'
    ],
    answer: 'A',
    kp: ['phy-kp-11'],
    source: '2013-2014学年第二学期B卷',
    difficulty: 2
  },
  {
    id: 'phy-2014b2-single-04',
    qtype: 'single',
    stem: '关于自感现象，下列说法正确的是',
    options: [
      '自感电动势总是阻碍电流的变化',
      '自感电动势总是使电流减小',
      '自感电动势总是使电流增大',
      '自感电动势与电流方向相同'
    ],
    answer: 'A',
    kp: ['phy-kp-11'],
    source: '2013-2014学年第二学期B卷',
    difficulty: 2
  },
  {
    id: 'phy-2014b2-single-08',
    qtype: 'single',
    stem: '自然光以布儒斯特角入射到介质表面时',
    options: [
      '反射光和折射光都是线偏振光',
      '反射光是线偏振光，折射光是部分偏振光',
      '反射光是部分偏振光，折射光是线偏振光',
      '反射光和折射光都是部分偏振光'
    ],
    answer: 'B',
    kp: ['phy-kp-14'],
    source: '2013-2014学年第二学期B卷',
    difficulty: 2
  },

  // 2013-2014学年第二学期期末试卷B卷 - 计算题

  // 2009-2010学年第二学期期末试卷 - 填空题（电磁学和光学）
  {
    id: 'phy-2010-fill-03',
    qtype: 'fill',
    stem: '一电容为$C$的电容器，充电到电压$U$，则电容器储存的电场能量为______',
    answer: '$\\frac{1}{2}CU^2$',
    kp: ['phy-kp-09'],
    source: '2009-2010学年第二学期',
    difficulty: 2
  },
  {
    id: 'phy-2010-fill-05',
    qtype: 'fill',
    stem: '一载流线圈在均匀磁场中所受的合力矩$\\vec{M}=$______（用磁矩$\\vec{p}_m$和磁感应强度$\\vec{B}$表示）',
    answer: '$\\vec{p}_m\\times\\vec{B}$',
    kp: ['phy-kp-11'],
    source: '2009-2010学年第二学期',
    difficulty: 2
  },

  // 2009-2010学年第二学期期末试卷 - 选择题
  {
    id: 'phy-2010-single-02',
    qtype: 'single',
    stem: '关于电势和电场强度的关系，下列说法正确的是',
    options: [
      '电势高处电场强度一定大',
      '电势低处电场强度一定小',
      '电场强度为零处电势一定为零',
      '电场强度等于电势沿场强方向的负梯度'
    ],
    answer: 'D',
    kp: ['phy-kp-09'],
    source: '2009-2010学年第二学期',
    difficulty: 2
  },
  {
    id: 'phy-2010-single-07',
    qtype: 'single',
    stem: '自然光通过偏振片后变为',
    options: [
      '自然光',
      '线偏振光',
      '部分偏振光',
      '圆偏振光'
    ],
    answer: 'B',
    kp: ['phy-kp-14'],
    source: '2009-2010学年第二学期',
    difficulty: 2
  },

  // 2009-2010学年第二学期期末试卷 - 计算题
  {
    id: 'phy-2010-calc-01',
    qtype: 'calc',
    stem: '一半径为$R$的均匀带电球体，电荷体密度为$\\rho$，求球体内外的电场强度分布。',
    answer: '$E=\\begin{cases}\\frac{\\rho r}{3\\varepsilon_0} & (r<R)\\\\ \\frac{\\rho R^3}{3\\varepsilon_0 r^2} & (r>R)\\end{cases}$',
    analysis: '由高斯定理，取同心球面为高斯面。$r<R$时，$E\\cdot 4\\pi r^2=\\frac{\\rho\\cdot\\frac{4}{3}\\pi r^3}{\\varepsilon_0}$，得$E=\\frac{\\rho r}{3\\varepsilon_0}$；$r>R$时，$E\\cdot 4\\pi r^2=\\frac{\\rho\\cdot\\frac{4}{3}\\pi R^3}{\\varepsilon_0}$，得$E=\\frac{\\rho R^3}{3\\varepsilon_0 r^2}$',
    kp: ['phy-kp-09'],
    source: '2009-2010学年第二学期',
    difficulty: 3
  },
  {
    id: 'phy-2010-calc-05',
    qtype: 'calc',
    stem: '一束强度为$I_0$的自然光，依次通过三个偏振片，第一个和第二个偏振片的偏振化方向夹角为$30°$，第二个和第三个偏振片的偏振化方向夹角为$60°$，求透射光的强度。',
    answer: '$I=\\frac{3I_0}{32}$',
    analysis: '自然光通过第一个偏振片后$I_1=\\frac{I_0}{2}$。通过第二个偏振片后$I_2=I_1\\cos^2 30°=\\frac{I_0}{2}\\times\\frac{3}{4}=\\frac{3I_0}{8}$。通过第三个偏振片后$I=I_2\\cos^2 60°=\\frac{3I_0}{8}\\times\\frac{1}{4}=\\frac{3I_0}{32}$',
    kp: ['phy-kp-14'],
    source: '2009-2010学年第二学期',
    difficulty: 3
  }
]
