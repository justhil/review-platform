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
  }
]
