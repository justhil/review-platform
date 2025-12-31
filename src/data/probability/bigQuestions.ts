import type { BigQuestion, BigQuestionImageGroup } from '../../types'

export const probabilityBigQuestions: BigQuestion[] = [
  {
    id: 'prob-bq-01',
    groupId: 'prob-bqg-01',
    chapter: '02',
    topic: '二项分布计算',
    prompt: '某工厂有n台机器，每台机器在一周内发生故障的概率为p，各机器是否发生故障相互独立。求恰有k台机器发生故障的概率。',
    summary: [
      '识别二项分布模型：n次独立重复试验',
      '写出分布：$X\\sim B(n,p)$',
      '套用公式：$P(X=k)=C_n^k p^k (1-p)^{n-k}$'
    ],
    details: [
      '关键词识别：独立、相同概率、计数',
      '至少k台：$P(X\\geq k)=1-\\sum_{i=0}^{k-1}P(X=i)$',
      '至多k台：$P(X\\leq k)=\\sum_{i=0}^{k}P(X=i)$'
    ],
    tags: ['calc', 'procedure']
  },
  {
    id: 'prob-bq-02',
    groupId: 'prob-bqg-01',
    chapter: '02',
    topic: '求分布函数与概率密度',
    prompt: '已知随机变量$X$的概率密度$f(x)$，求分布函数$F(x)$；已知$Y=g(X)$，求$Y$的概率密度。',
    summary: [
      '分布函数：$F(x)=\\int_{-\\infty}^{x}f(t)dt$',
      '分段积分，注意分界点',
      '函数变换：用分布函数法或公式法'
    ],
    details: [
      '分布函数性质：单调不减、右连续、$F(-\\infty)=0$、$F(+\\infty)=1$',
      '公式法（单调函数）：$f_Y(y)=f_X(h(y))|h\'(y)|$',
      '分布函数法：$F_Y(y)=P(Y\\leq y)=P(g(X)\\leq y)$'
    ],
    tags: ['calc', 'procedure']
  },
  {
    id: 'prob-bq-03',
    groupId: 'prob-bqg-02',
    chapter: '02',
    topic: '二维随机变量边缘分布与独立性',
    prompt: '已知$(X,Y)$的联合概率密度$f(x,y)$，求边缘概率密度$f_X(x)$、$f_Y(y)$，判断$X$与$Y$是否独立。',
    summary: [
      '边缘密度：$f_X(x)=\\int_{-\\infty}^{+\\infty}f(x,y)dy$',
      '边缘密度：$f_Y(y)=\\int_{-\\infty}^{+\\infty}f(x,y)dx$',
      '独立性判断：$f(x,y)=f_X(x)f_Y(y)$是否恒成立'
    ],
    details: [
      '积分区域：根据$f(x,y)\\neq 0$的区域确定积分限',
      '独立性：只要存在一点使等式不成立，即不独立',
      '离散型：$P(X=x_i,Y=y_j)=P(X=x_i)P(Y=y_j)$'
    ],
    tags: ['calc', 'procedure']
  },
  {
    id: 'prob-bq-04',
    groupId: 'prob-bqg-02',
    chapter: '05',
    topic: '矩估计与极大似然估计',
    prompt: '设$X_1,X_2,\\ldots,X_n$是来自总体$X$的简单随机样本，$X$的概率密度含参数$\\theta$，求$\\theta$的矩估计量和极大似然估计量。',
    summary: [
      '矩估计：令$E(X)=\\bar{X}$（或$E(X^2)=\\frac{1}{n}\\sum X_i^2$）',
      '极大似然：写似然函数$L(\\theta)=\\prod f(x_i;\\theta)$',
      '取对数求导：$\\frac{d\\ln L}{d\\theta}=0$'
    ],
    details: [
      '矩估计步骤：计算总体矩$\\mu_k=E(X^k)$，用样本矩$A_k$替换',
      '似然函数：连续型用密度函数，离散型用分布律',
      '多参数：建立方程组联立求解'
    ],
    tags: ['calc', 'procedure']
  },
  {
    id: 'prob-bq-05',
    groupId: 'prob-bqg-03',
    chapter: '05',
    topic: '抽样分布与统计量',
    prompt: '设$X_1,X_2,\\ldots,X_n$是来自正态总体$N(\\mu,\\sigma^2)$的简单随机样本，求统计量的分布。',
    summary: [
      '$\\frac{\\bar{X}-\\mu}{\\sigma/\\sqrt{n}}\\sim N(0,1)$',
      '$\\frac{(n-1)S^2}{\\sigma^2}\\sim\\chi^2(n-1)$',
      '$\\frac{\\bar{X}-\\mu}{S/\\sqrt{n}}\\sim t(n-1)$'
    ],
    details: [
      '样本均值：$E(\\bar{X})=\\mu$，$D(\\bar{X})=\\sigma^2/n$',
      '样本方差：$E(S^2)=\\sigma^2$（无偏性）',
      '$\\bar{X}$与$S^2$相互独立（正态总体特有性质）'
    ],
    tags: ['theory', 'calc']
  },
  {
    id: 'prob-bq-06',
    groupId: 'prob-bqg-01',
    chapter: '01',
    topic: '条件概率与全概率公式',
    prompt: '利用条件概率、全概率公式或贝叶斯公式求解概率问题。',
    summary: [
      '条件概率：$P(A|B)=\\frac{P(AB)}{P(B)}$',
      '全概率：$P(A)=\\sum P(B_i)P(A|B_i)$',
      '贝叶斯：$P(B_j|A)=\\frac{P(B_j)P(A|B_j)}{P(A)}$'
    ],
    details: [
      '全概率公式：已知原因求结果',
      '贝叶斯公式：已知结果反推原因',
      '完备事件组：$B_1,B_2,\\ldots,B_n$两两互斥且并为全集'
    ],
    tags: ['calc', 'procedure']
  },
  {
    id: 'prob-bq-07',
    groupId: 'prob-bqg-02',
    chapter: '03',
    topic: '期望与方差计算',
    prompt: '计算随机变量的数学期望$E(X)$和方差$D(X)$。',
    summary: [
      '离散型：$E(X)=\\sum x_i p_i$',
      '连续型：$E(X)=\\int xf(x)dx$',
      '方差：$D(X)=E(X^2)-[E(X)]^2$'
    ],
    details: [
      '期望性质：$E(aX+bY)=aE(X)+bE(Y)$',
      '方差性质：$D(aX+b)=a^2D(X)$',
      '独立时：$D(X+Y)=D(X)+D(Y)$，$E(XY)=E(X)E(Y)$'
    ],
    tags: ['calc']
  }
]

export const probabilityBigQuestionImageGroups: BigQuestionImageGroup[] = [
  {
    id: 'prob-bqg-01',
    label: '概率计算类',
    sourceHint: '条件概率、分布计算'
  },
  {
    id: 'prob-bqg-02',
    label: '随机变量类',
    sourceHint: '分布、数字特征'
  },
  {
    id: 'prob-bqg-03',
    label: '数理统计类',
    sourceHint: '抽样分布、参数估计'
  }
]
