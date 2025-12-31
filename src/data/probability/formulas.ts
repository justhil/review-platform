import type { Formula } from '../../types'

export const probabilityFormulas: Formula[] = [
  {
    id: 'prob-f-01',
    latex: 'P(A|B) = \\frac{P(AB)}{P(B)}',
    chapter: '01',
    mnemonic: '条件概率 = 交集概率 / 条件概率',
    usage: '已知B发生的条件下A发生的概率',
    kp: ['prob-kp-01']
  },
  {
    id: 'prob-f-02',
    latex: 'P(A) = \\sum_{i=1}^{n} P(B_i)P(A|B_i)',
    chapter: '01',
    mnemonic: '全概率公式：分解求和',
    usage: '通过完备事件组计算事件概率',
    kp: ['prob-kp-01']
  },
  {
    id: 'prob-f-03',
    latex: 'P(B_j|A) = \\frac{P(B_j)P(A|B_j)}{\\sum_{i=1}^{n} P(B_i)P(A|B_i)}',
    chapter: '01',
    mnemonic: '贝叶斯公式：由果溯因',
    usage: '已知结果反推原因的概率',
    kp: ['prob-kp-01']
  },
  {
    id: 'prob-f-04',
    latex: 'P(X=k) = C_n^k p^k (1-p)^{n-k}',
    chapter: '02',
    mnemonic: '二项分布：n次独立重复试验',
    usage: 'n次伯努利试验中成功k次的概率',
    kp: ['prob-kp-02']
  },
  {
    id: 'prob-f-05',
    latex: 'P(X=k) = \\frac{\\lambda^k}{k!}e^{-\\lambda}',
    chapter: '02',
    mnemonic: '泊松分布：稀有事件',
    usage: '单位时间内随机事件发生k次的概率',
    kp: ['prob-kp-02']
  },
  {
    id: 'prob-f-06',
    latex: 'f(x) = \\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}',
    chapter: '02',
    mnemonic: '正态分布密度函数',
    usage: '正态分布的概率密度',
    kp: ['prob-kp-02']
  },
  {
    id: 'prob-f-07',
    latex: 'E(X) = \\sum_i x_i p_i \\text{ 或 } \\int_{-\\infty}^{+\\infty} xf(x)dx',
    chapter: '03',
    mnemonic: '期望：加权平均',
    usage: '计算随机变量的数学期望',
    kp: ['prob-kp-03']
  },
  {
    id: 'prob-f-08',
    latex: 'D(X) = E(X^2) - [E(X)]^2',
    chapter: '03',
    mnemonic: '方差 = 平方的期望 - 期望的平方',
    usage: '计算随机变量的方差',
    kp: ['prob-kp-03']
  },
  {
    id: 'prob-f-09',
    latex: '\\rho_{XY} = \\frac{Cov(X,Y)}{\\sqrt{D(X)}\\sqrt{D(Y)}}',
    chapter: '03',
    mnemonic: '相关系数：标准化的协方差',
    usage: '衡量两个随机变量的线性相关程度',
    kp: ['prob-kp-03']
  },
  {
    id: 'prob-f-10',
    latex: 'P(|X-\\mu| \\geq \\varepsilon) \\leq \\frac{\\sigma^2}{\\varepsilon^2}',
    chapter: '04',
    mnemonic: '切比雪夫不等式',
    usage: '估计随机变量偏离期望的概率上界',
    kp: ['prob-kp-04']
  },
  {
    id: 'prob-f-11',
    latex: '\\bar{X} = \\frac{1}{n}\\sum_{i=1}^n X_i',
    chapter: '05',
    mnemonic: '样本均值',
    usage: '估计总体均值',
    kp: ['prob-kp-05']
  },
  {
    id: 'prob-f-12',
    latex: 'S^2 = \\frac{1}{n-1}\\sum_{i=1}^n (X_i - \\bar{X})^2',
    chapter: '05',
    mnemonic: '样本方差（无偏估计）',
    usage: '估计总体方差',
    kp: ['prob-kp-05']
  },
  {
    id: 'prob-f-13',
    latex: '\\frac{\\bar{X}-\\mu}{S/\\sqrt{n}} \\sim t(n-1)',
    chapter: '05',
    mnemonic: 't统计量',
    usage: '总体方差未知时的均值检验',
    kp: ['prob-kp-05']
  }
]
