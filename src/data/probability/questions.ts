import type { Question } from '../../types'

export const probabilityQuestions: Question[] = [
  // 2022-2023学年A卷 - 选择题
  {
    id: 'prob-2023a-single-01',
    qtype: 'single',
    stem: '设$A_1$、$A_2$是两个随机事件，$A=A_1\\cup A_2$，则下列等式成立的是',
    options: [
      '$P(A)=P(A_1A_2)$',
      '$P(A)=P(A_1+A_2)$',
      '$P(A)=P(A_1)+P(A_2)-1$',
      '$P(A)=P(A_1)+P(A_2)-1$'
    ],
    answer: 'C',
    kp: ['prob-kp-01'],
    source: '2022-2023学年A卷',
    difficulty: 2
  },
  {
    id: 'prob-2023a-single-02',
    qtype: 'single',
    stem: '设$A$、$B$为两个随机事件，$P(B)=0.5$，$P(A\\cup B)=0.3$，则$P(B|\\bar{A})=$',
    options: ['$0.1$', '$0.2$', '$0.3$', '$0.4$'],
    answer: 'B',
    kp: ['prob-kp-01'],
    source: '2022-2023学年A卷',
    difficulty: 2
  },
  {
    id: 'prob-2023a-single-03',
    qtype: 'single',
    stem: '设随机变量$X$的概率密度为$f(x)$，分布函数为$F(x)$，且$f(x)=f(-x)$，$a$为常数，则',
    options: [
      '$F(a)=F(-a)$',
      '$F(a)=2F(a)-1$',
      '$a$处$f(a)=1$，$\\int_0^a f(x)dx$',
      '$F(a)=1$，$a$处$\\int_{-\\infty}^{20} f(x)dx$'
    ],
    answer: 'D',
    kp: ['prob-kp-02'],
    source: '2022-2023学年A卷',
    difficulty: 3
  },
  {
    id: 'prob-2023a-single-04',
    qtype: 'single',
    stem: '设$X_1,X_2,X_3$相互独立，$X_1\\sim N(0,1)$，$X_2\\sim N(0,4)$，$X_3\\sim N(5,9)$，记$p_i=P\\{-2<X_i<2\\}(i=1,2,3)$，则',
    options: [
      '$p_1<p_2<p_3$',
      '$p_2<p_1<p_3$',
      '$p_3<p_1<p_2$',
      '$p_3<p_2<p_1$'
    ],
    answer: 'A',
    kp: ['prob-kp-02'],
    source: '2022-2023学年A卷',
    difficulty: 3
  },
  {
    id: 'prob-2023a-single-05',
    qtype: 'single',
    stem: '设$X_1,X_2,X_3,X_4$是来自正态总体$X\\sim N(1,\\sigma^2)(\\sigma>0)$的简单随机样本，则$\\frac{X_1-X_2}{\\sqrt{(X_3-X_4)^2/2}}$服从',
    options: ['$N(0,1)$', '$t(1)$', '$\\chi^2(1)$', '$F(1,1)$'],
    answer: 'B',
    kp: ['prob-kp-05'],
    source: '2022-2023学年A卷',
    difficulty: 4
  },

  // 2022-2023学年A卷 - 填空题
  {
    id: 'prob-2023a-fill-01',
    qtype: 'fill',
    stem: '设$P(A)=\\frac{1}{4}$，$P(B|A)=\\frac{1}{3}$，$P(A|B)=\\frac{1}{2}$，则$P(A\\cup B)=$______',
    answer: '$\\frac{1}{3}$',
    kp: ['prob-kp-01'],
    source: '2022-2023学年A卷',
    difficulty: 2
  },
  {
    id: 'prob-2023a-fill-02',
    qtype: 'fill',
    stem: '设随机变量$X$的概率密度为$f(x)=\\begin{cases}2x, & x\\in(0,1)\\\\0, & x\\notin(0,1)\\end{cases}$，$a\\in(0,1)$，若$P(X<a)=P(X>a)$，则$a=$______',
    answer: '$\\frac{\\sqrt{2}}{2}$',
    kp: ['prob-kp-02'],
    source: '2022-2023学年A卷',
    difficulty: 2
  },
  {
    id: 'prob-2023a-fill-03',
    qtype: 'fill',
    stem: '设随机变量$X$的分布律为$P\\{X=k\\}=ae^{-k^2}$，$k=0,1,2,\\ldots$，则常数$a=$______',
    answer: '$e^{-2}-e^{-3}$',
    kp: ['prob-kp-02'],
    source: '2022-2023学年A卷',
    difficulty: 3
  },
  {
    id: 'prob-2023a-fill-04',
    qtype: 'fill',
    stem: '设$X\\sim P(\\lambda)$，$E(X+1)(X+2)=1$，则$\\lambda=$______',
    answer: '$1$',
    kp: ['prob-kp-03'],
    source: '2022-2023学年A卷',
    difficulty: 3
  },
  {
    id: 'prob-2023a-fill-05',
    qtype: 'fill',
    stem: '设随机变量$X$的概率密度为$f(x)=\\frac{1}{2}e^{-|x|}$（$-\\infty<x<+\\infty$），$X_1,X_2,\\ldots,X_n$是来自$X$的简单随机样本，$S^2$为样本方差，则$E(S^2)=$______',
    answer: '$2$',
    kp: ['prob-kp-05'],
    source: '2022-2023学年A卷',
    difficulty: 3
  },

  // 2022-2023学年A卷 - 计算题
  {
    id: 'prob-2023a-calc-01',
    qtype: 'calc',
    stem: '某工厂有10台机器，每台机器在一周内发生故障的概率为0.1，各机器是否发生故障相互独立。求：(1) 一周内恰有3台机器发生故障的概率；(2) 一周内至少有2台机器发生故障的概率。',
    answer: '(1) $C_{10}^3 \\cdot 0.1^3 \\cdot 0.9^7 \\approx 0.057$；(2) $1-C_{10}^0 \\cdot 0.9^{10}-C_{10}^1 \\cdot 0.1 \\cdot 0.9^9 \\approx 0.264$',
    analysis: '这是二项分布问题。设$X$为一周内发生故障的机器数，则$X\\sim B(10,0.1)$。',
    kp: ['prob-kp-02'],
    source: '2022-2023学年A卷',
    difficulty: 2
  },
  {
    id: 'prob-2023a-calc-02',
    qtype: 'calc',
    stem: '设随机变量$X$的概率密度为$f(x)=\\begin{cases}6x(1-x), & 0<x<1\\\\0, & \\text{其他}\\end{cases}$，求：(1) $X$的分布函数；(2) $Y=2X+1$的概率密度。',
    answer: '(1) $F(x)=\\begin{cases}0, & x<0\\\\3x^2-2x^3, & 0\\leq x\\leq 1\\\\1, & x>1\\end{cases}$；(2) $f_Y(y)=\\begin{cases}\\frac{3}{4}(y^2-4y+3), & 1<y<3\\\\0, & \\text{其他}\\end{cases}$',
    kp: ['prob-kp-02'],
    source: '2022-2023学年A卷',
    difficulty: 3
  },
  {
    id: 'prob-2023a-calc-03',
    qtype: 'calc',
    stem: '设二维随机变量$(X,Y)$的联合概率密度为$f(x,y)=\\begin{cases}\\frac{x^2+xy}{3}, & 0<x<1,0<y<2\\\\0, & \\text{其他}\\end{cases}$，求：(1) $X$和$Y$的边缘概率密度；(2) 判断$X$与$Y$是否独立。',
    answer: '(1) $f_X(x)=\\frac{2x^2+2x}{3}$（$0<x<1$），$f_Y(y)=\\frac{1}{3}+\\frac{y}{6}$（$0<y<2$）；(2) 因为$f(x,y)\\neq f_X(x)f_Y(y)$，所以$X$与$Y$不独立。',
    kp: ['prob-kp-02'],
    source: '2022-2023学年A卷',
    difficulty: 3
  },
  {
    id: 'prob-2023a-calc-04',
    qtype: 'calc',
    stem: '设随机变量$X$的概率密度为$f(x)=\\begin{cases}\\frac{2}{\\lambda}xe^{-\\frac{x}{\\lambda}}, & x>0\\\\0, & x\\leq 0\\end{cases}$（$\\lambda>0$），$X_1,X_2,\\ldots,X_n$是来自$X$的简单随机样本，求$\\lambda$的矩估计量和极大似然估计量。',
    answer: '矩估计量：$\\hat{\\lambda}=\\frac{\\bar{X}}{2}$；极大似然估计量：$\\hat{\\lambda}=\\frac{\\bar{X}}{2}$',
    kp: ['prob-kp-05'],
    source: '2022-2023学年A卷',
    difficulty: 4
  },
  {
    id: 'prob-2023a-calc-05',
    qtype: 'calc',
    stem: '设$X_1,X_2,\\ldots,X_n$是来自总体$X$的简单随机样本，$\\bar{X}$为样本均值，证明：$E(X_i-\\bar{X})=0$，$D(X_i-\\bar{X})=\\frac{n-1}{n}\\sigma^2$。',
    answer: '证明：$E(X_i-\\bar{X})=E(X_i)-E(\\bar{X})=\\mu-\\mu=0$；$D(X_i-\\bar{X})=D(X_i-\\frac{1}{n}\\sum_{j=1}^n X_j)=\\frac{(n-1)^2}{n^2}\\sigma^2+\\frac{n-1}{n^2}\\sigma^2=\\frac{n-1}{n}\\sigma^2$',
    kp: ['prob-kp-05'],
    source: '2022-2023学年A卷',
    difficulty: 4
  },

  // 补充题型 - 贝叶斯公式
  {
    id: 'prob-2024a-calc-01',
    qtype: 'calc',
    stem: '甲、乙、丙三人进行射击，命中目标的概率分别为$0.4$、$0.5$、$0.6$。现随机选一人射击，结果命中了目标。求：(1) 目标被命中的概率；(2) 是甲命中目标的概率。',
    answer: '(1) 设$B$="目标被命中"，$A_i$="第$i$人射击"($i=1,2,3$)。由全概率公式：$P(B)=\\frac{1}{3}(0.4+0.5+0.6)=0.5$\n(2) 由贝叶斯公式：$P(A_1|B)=\\frac{P(A_1)P(B|A_1)}{P(B)}=\\frac{\\frac{1}{3}\\times 0.4}{0.5}=\\frac{4}{15}$',
    analysis: '全概率公式用于"已知原因求结果"，贝叶斯公式用于"已知结果反推原因"。本题先用全概率公式求命中概率，再用贝叶斯公式求条件概率。',
    kp: ['prob-kp-01'],
    source: '2023-2024学年A卷',
    difficulty: 3
  },

  // 补充题型 - 假设检验（t检验）
  {
    id: 'prob-2024a-calc-02',
    qtype: 'calc',
    stem: '某工厂生产的零件长度$X$（单位：cm）服从正态分布$N(\\mu,\\sigma^2)$。现抽取$7$件测得长度为$125$，样本标准差$S=2.71$。在显著性水平$\\alpha=0.1$下，检验该批零件平均长度是否为$124$cm。（已知$t_{0.05}(6)=1.943$）',
    answer: '设$H_0:\\mu=124$，$H_1:\\mu\\neq 124$\n检验统计量：$T=\\frac{\\bar{X}-\\mu_0}{S/\\sqrt{n}}=\\frac{125-124}{2.71/\\sqrt{7}}=0.976$\n拒绝域：$|T|\\geq t_{0.05}(6)=1.943$\n因为$|T|=0.976<1.943$，所以接受$H_0$，认为平均长度为$124$cm。',
    analysis: '双侧t检验步骤：(1)建立假设$H_0$和$H_1$；(2)选择统计量$T=\\frac{\\bar{X}-\\mu_0}{S/\\sqrt{n}}\\sim t(n-1)$；(3)确定拒绝域$|T|\\geq t_{\\alpha/2}(n-1)$；(4)计算并判断。',
    kp: ['prob-kp-05'],
    source: '2023-2024学年A卷',
    difficulty: 4
  },

  // 补充题型 - 置信区间
  {
    id: 'prob-2024a-fill-01',
    qtype: 'fill',
    stem: '设总体$X\\sim N(\\mu,\\sigma^2)$，$\\sigma^2$未知，从中抽取容量为$16$的样本，得$\\bar{X}=40$，$S=2$。则$\\mu$的置信度为$0.95$的置信区间为______。（已知$t_{0.025}(15)=2.131$）',
    answer: '$[39.47, 40.53]$',
    analysis: '当$\\sigma^2$未知时，$\\mu$的置信区间为$(\\bar{X}-t_{\\alpha/2}(n-1)\\frac{S}{\\sqrt{n}}, \\bar{X}+t_{\\alpha/2}(n-1)\\frac{S}{\\sqrt{n}})$。代入得$(40-2.131\\times\\frac{2}{4}, 40+2.131\\times\\frac{2}{4})=[39.47, 40.53]$',
    kp: ['prob-kp-05'],
    source: '2023-2024学年A卷',
    difficulty: 3
  },

  // 补充题型 - 全概率公式
  {
    id: 'prob-2024b-calc-01',
    qtype: 'calc',
    stem: '有两箱零件，第一箱有$50$个其中$20$个一等品，第二箱有$40$个其中$25$个一等品。现随机取一箱，从中先后取两次，每次取一个（取后不放回）。求：(1) 第一次取出一等品的概率；(2) 已知第一次取出的是一等品，求它来自第一箱的概率。',
    answer: '(1) 设$A$="第一次取出一等品"，$B_1$="取第一箱"，$B_2$="取第二箱"。\n$P(A)=P(B_1)P(A|B_1)+P(B_2)P(A|B_2)=\\frac{1}{2}\\times\\frac{20}{50}+\\frac{1}{2}\\times\\frac{25}{40}=\\frac{1}{2}\\times 0.4+\\frac{1}{2}\\times 0.625=0.5125$\n(2) $P(B_1|A)=\\frac{P(B_1)P(A|B_1)}{P(A)}=\\frac{0.5\\times 0.4}{0.5125}=0.39$',
    analysis: '全概率公式：$P(A)=\\sum_{i}P(B_i)P(A|B_i)$，其中$\\{B_i\\}$是完备事件组。贝叶斯公式：$P(B_j|A)=\\frac{P(B_j)P(A|B_j)}{P(A)}$',
    kp: ['prob-kp-01'],
    source: '2023-2024学年B卷',
    difficulty: 3
  },

  // 补充题型 - 正态分布标准化
  {
    id: 'prob-2016a-fill-01',
    qtype: 'fill',
    stem: '设$X\\sim N(10,4)$，已知$P(10<X<20)=0.3$，则$P(0<X<10)=$______',
    answer: '$0.3$',
    analysis: '正态分布关于均值$\\mu$对称。由$P(10<X<20)=0.3$，标准化后$P(0<\\frac{X-10}{2}<5)=0.3$。由对称性，$P(-5<\\frac{X-10}{2}<0)=0.3$，即$P(0<X<10)=0.3$。',
    kp: ['prob-kp-02'],
    source: '2015-2016学年',
    difficulty: 2
  },

  // 补充题型 - 无偏估计量比较
  {
    id: 'prob-2016a-fill-02',
    qtype: 'fill',
    stem: '设$X_1,X_2,X_3$是来自正态总体$X\\sim N(\\mu,\\sigma^2)$的简单随机样本，$\\hat{\\mu}_1=\\frac{1}{5}X_1+\\frac{3}{10}X_2+\\frac{1}{2}X_3$，$\\hat{\\mu}_2=\\frac{1}{3}X_1+\\frac{1}{4}X_2+\\frac{5}{12}X_3$，$\\hat{\\mu}_3=\\frac{1}{3}(X_1+X_2+X_3)$。三个估计量中，$\\mu$的无偏估计量是______，其中最有效的是______。',
    answer: '$\\hat{\\mu}_3$；$\\hat{\\mu}_3$',
    analysis: '无偏性：$E(\\hat{\\mu})=\\mu$，即系数之和为$1$。$\\hat{\\mu}_1$系数和$=1$，$\\hat{\\mu}_2$系数和$=1$，$\\hat{\\mu}_3$系数和$=1$，三者都是无偏估计。有效性比较方差：$D(\\hat{\\mu}_1)=(\\frac{1}{25}+\\frac{9}{100}+\\frac{1}{4})\\sigma^2=0.38\\sigma^2$，$D(\\hat{\\mu}_2)=(\\frac{1}{9}+\\frac{1}{16}+\\frac{25}{144})\\sigma^2=0.347\\sigma^2$，$D(\\hat{\\mu}_3)=\\frac{1}{3}\\sigma^2=0.333\\sigma^2$。$\\hat{\\mu}_3$方差最小，最有效。',
    kp: ['prob-kp-05'],
    source: '2015-2016学年',
    difficulty: 4
  },

  // 补充题型 - 条件概率与互不相容
  {
    id: 'prob-2023b-single-01',
    qtype: 'single',
    stem: '设$A$、$B$为两个随机事件，且$P(A)>0$，$P(B)>0$，若$P(A|B)=0$，则',
    options: [
      '$A$与$B$互不相容',
      '$A$与$B$相互独立',
      '$P(B|A)>0$',
      '$P(A\\cup B)=P(A)+P(B)$'
    ],
    answer: 'A',
    analysis: '由$P(A|B)=\\frac{P(AB)}{P(B)}=0$且$P(B)>0$，得$P(AB)=0$，即$A$与$B$互不相容。互不相容时$P(A\\cup B)=P(A)+P(B)$，D也对，但A是最直接的结论。',
    kp: ['prob-kp-01'],
    source: '2022-2023学年B卷',
    difficulty: 2
  },

  // 补充题型 - 分布函数性质
  {
    id: 'prob-2023b-single-02',
    qtype: 'single',
    stem: '设随机变量$X$的分布函数为$F(x)$，则下列结论正确的是',
    options: [
      '若$a<b$，则$F(a)\\leq F(b)$',
      '$F(-\\infty)=1$',
      '$F(+\\infty)=0$',
      '$F(x)$一定连续'
    ],
    answer: 'A',
    analysis: '分布函数三大性质：(1)单调不减：$a<b$则$F(a)\\leq F(b)$；(2)边界条件：$F(-\\infty)=0$，$F(+\\infty)=1$；(3)右连续性：$F(x)$右连续但不一定处处连续（离散型在跳跃点不连续）。',
    kp: ['prob-kp-02'],
    source: '2022-2023学年B卷',
    difficulty: 2
  },

  // 补充题型 - 正态分布对称性
  {
    id: 'prob-2023b-single-03',
    qtype: 'single',
    stem: '设$X\\sim N(\\mu,\\sigma^2)$，则$P(X\\leq\\mu)=$',
    options: ['$0$', '$0.5$', '$1$', '不确定'],
    answer: 'B',
    analysis: '正态分布关于均值$\\mu$对称，密度函数曲线在$x=\\mu$处达到最大值，且左右对称。因此$P(X\\leq\\mu)=P(X\\geq\\mu)=0.5$。',
    kp: ['prob-kp-02'],
    source: '2022-2023学年B卷',
    difficulty: 1
  },

  // 补充题型 - 独立正态变量线性组合
  {
    id: 'prob-2023b-single-04',
    qtype: 'single',
    stem: '设随机变量$X$与$Y$相互独立，且$X\\sim N(0,1)$，$Y\\sim N(1,1)$，则',
    options: [
      '$X+Y\\sim N(1,1)$',
      '$X+Y\\sim N(1,2)$',
      '$X-Y\\sim N(1,2)$',
      '$X-Y\\sim N(-1,1)$'
    ],
    answer: 'B',
    analysis: '独立正态变量的线性组合仍是正态分布。$E(X+Y)=0+1=1$，$D(X+Y)=D(X)+D(Y)=1+1=2$（独立时方差可加）。注意：$D(X-Y)=D(X)+D(Y)=2$，方差永远是加！',
    kp: ['prob-kp-02', 'prob-kp-03'],
    source: '2022-2023学年B卷',
    difficulty: 2
  },

  // 补充题型 - 抽样分布
  {
    id: 'prob-2023b-single-05',
    qtype: 'single',
    stem: '设总体$X\\sim N(\\mu,\\sigma^2)$，$X_1,X_2,\\ldots,X_n$是来自总体的简单随机样本，$\\bar{X}$为样本均值，$S^2$为样本方差，则',
    options: [
      '$\\frac{\\bar{X}-\\mu}{\\sigma/\\sqrt{n}}\\sim t(n)$',
      '$\\frac{\\bar{X}-\\mu}{S/\\sqrt{n}}\\sim t(n)$',
      '$\\frac{\\bar{X}-\\mu}{S/\\sqrt{n}}\\sim t(n-1)$',
      '$\\frac{(n-1)S^2}{\\sigma^2}\\sim\\chi^2(n)$'
    ],
    answer: 'C',
    analysis: '三大抽样分布公式：(1)$\\frac{\\bar{X}-\\mu}{\\sigma/\\sqrt{n}}\\sim N(0,1)$（$\\sigma$已知）；(2)$\\frac{\\bar{X}-\\mu}{S/\\sqrt{n}}\\sim t(n-1)$（$\\sigma$未知）；(3)$\\frac{(n-1)S^2}{\\sigma^2}\\sim\\chi^2(n-1)$。注意自由度都是$n-1$。',
    kp: ['prob-kp-05'],
    source: '2022-2023学年B卷',
    difficulty: 3
  },

  // 补充题型 - 样本均值的数字特征
  {
    id: 'prob-2023b-single-06',
    qtype: 'single',
    stem: '设$X_1,X_2,\\ldots,X_n$是来自总体$X$的简单随机样本，$E(X)=\\mu$，$D(X)=\\sigma^2$，则$E(\\bar{X})$和$D(\\bar{X})$分别为',
    options: [
      '$\\mu$，$\\sigma^2$',
      '$\\mu$，$\\sigma^2/n$',
      '$n\\mu$，$\\sigma^2$',
      '$n\\mu$，$n\\sigma^2$'
    ],
    answer: 'B',
    analysis: '样本均值$\\bar{X}=\\frac{1}{n}\\sum_{i=1}^n X_i$。$E(\\bar{X})=\\frac{1}{n}\\sum E(X_i)=\\mu$（无偏性）。$D(\\bar{X})=\\frac{1}{n^2}\\sum D(X_i)=\\frac{\\sigma^2}{n}$（方差缩小$n$倍）。',
    kp: ['prob-kp-05'],
    source: '2022-2023学年B卷',
    difficulty: 2
  }
]
