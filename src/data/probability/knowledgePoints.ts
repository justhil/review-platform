import type { KnowledgePoint } from '../../types'

export const probabilityKnowledgePoints: KnowledgePoint[] = [
  {
    id: 'prob-kp-01',
    title: '概率论基础',
    chapter: '01',
    types: ['fill', 'single', 'calc'],
    body: `随机事件与概率的基本概念。

古典概型：$P(A) = \\frac{m}{n}$（m为有利场合数，n为总场合数）

条件概率：$P(A|B) = \\frac{P(AB)}{P(B)}$

乘法公式：$P(AB) = P(A)P(B|A) = P(B)P(A|B)$

全概率公式：$P(A) = \\sum_{i=1}^{n} P(B_i)P(A|B_i)$

贝叶斯公式：$P(B_j|A) = \\frac{P(B_j)P(A|B_j)}{\\sum_{i=1}^{n} P(B_i)P(A|B_i)}$

事件独立性：$P(AB) = P(A)P(B)$`,
    formulas: ['prob-f-01', 'prob-f-02', 'prob-f-03'],
    examples: [],
    difficulty: 2,
    freqScore: 9
  },
  {
    id: 'prob-kp-02',
    title: '随机变量及其分布',
    chapter: '02',
    types: ['fill', 'single', 'calc'],
    body: `离散型随机变量：
- 0-1分布：$P(X=k) = p^k(1-p)^{1-k}$
- 二项分布：$P(X=k) = C_n^k p^k (1-p)^{n-k}$
- 泊松分布：$P(X=k) = \\frac{\\lambda^k}{k!}e^{-\\lambda}$

连续型随机变量：
- 均匀分布：$f(x) = \\frac{1}{b-a}$，$a \\leq x \\leq b$
- 指数分布：$f(x) = \\lambda e^{-\\lambda x}$，$x \\geq 0$
- 正态分布：$f(x) = \\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$

分布函数：$F(x) = P(X \\leq x)$`,
    formulas: ['prob-f-04', 'prob-f-05', 'prob-f-06'],
    examples: [],
    difficulty: 3,
    freqScore: 9
  },
  {
    id: 'prob-kp-03',
    title: '数字特征',
    chapter: '03',
    types: ['fill', 'single', 'calc'],
    body: `数学期望：
- 离散型：$E(X) = \\sum_i x_i p_i$
- 连续型：$E(X) = \\int_{-\\infty}^{+\\infty} xf(x)dx$

方差：$D(X) = E(X^2) - [E(X)]^2$

协方差：$Cov(X,Y) = E(XY) - E(X)E(Y)$

相关系数：$\\rho_{XY} = \\frac{Cov(X,Y)}{\\sqrt{D(X)}\\sqrt{D(Y)}}$

期望和方差的性质：
- $E(aX+b) = aE(X)+b$
- $D(aX+b) = a^2D(X)$
- $E(X+Y) = E(X)+E(Y)$
- 若X,Y独立：$D(X+Y) = D(X)+D(Y)$`,
    formulas: ['prob-f-07', 'prob-f-08', 'prob-f-09'],
    examples: [],
    difficulty: 3,
    freqScore: 9
  },
  {
    id: 'prob-kp-04',
    title: '大数定律与中心极限定理',
    chapter: '04',
    types: ['fill', 'single'],
    body: `切比雪夫不等式：$P(|X-\\mu| \\geq \\varepsilon) \\leq \\frac{\\sigma^2}{\\varepsilon^2}$

大数定律：
- 切比雪夫大数定律
- 伯努利大数定律：频率依概率收敛于概率

中心极限定理：
- 独立同分布中心极限定理：$\\frac{\\sum_{i=1}^n X_i - n\\mu}{\\sqrt{n}\\sigma} \\xrightarrow{d} N(0,1)$
- 棣莫弗-拉普拉斯定理（二项分布的正态近似）`,
    formulas: ['prob-f-10'],
    examples: [],
    difficulty: 3,
    freqScore: 7
  },
  {
    id: 'prob-kp-05',
    title: '数理统计基础',
    chapter: '05',
    types: ['fill', 'single', 'calc'],
    body: `统计量：
- 样本均值：$\\bar{X} = \\frac{1}{n}\\sum_{i=1}^n X_i$
- 样本方差：$S^2 = \\frac{1}{n-1}\\sum_{i=1}^n (X_i - \\bar{X})^2$

三大分布：
- $\\chi^2$分布：$\\chi^2 = \\sum_{i=1}^n X_i^2$，$X_i \\sim N(0,1)$
- $t$分布：$t = \\frac{X}{\\sqrt{Y/n}}$
- $F$分布：$F = \\frac{U/n_1}{V/n_2}$

抽样分布定理：
- $\\frac{\\bar{X}-\\mu}{\\sigma/\\sqrt{n}} \\sim N(0,1)$
- $\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)$
- $\\frac{\\bar{X}-\\mu}{S/\\sqrt{n}} \\sim t(n-1)$

参数估计：矩估计、极大似然估计
假设检验：Z检验、t检验、$\\chi^2$检验`,
    formulas: ['prob-f-11', 'prob-f-12', 'prob-f-13'],
    examples: [],
    difficulty: 4,
    freqScore: 8
  }
]
