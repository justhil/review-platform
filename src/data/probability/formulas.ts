import type { Formula } from '../../types'

export const probabilityFormulas: Formula[] = [
  // 第一章：概率论基础
  {
    id: 'prob-f-01',
    latex: 'P(A|B) = \\frac{P(AB)}{P(B)}',
    chapter: '01',
    mnemonic: '条件概率公式',
    usage: '已知B发生的条件下A发生的概率',
    kp: ['prob-kp-01']
  },
  {
    id: 'prob-f-02',
    latex: 'P(A) = \\sum_{i=1}^{n} P(B_i)P(A|B_i)',
    chapter: '01',
    mnemonic: '全概率公式',
    usage: '通过完备事件组计算事件概率（已知原因求结果）',
    kp: ['prob-kp-01']
  },
  {
    id: 'prob-f-03',
    latex: 'P(B_j|A) = \\frac{P(B_j)P(A|B_j)}{\\sum_{i=1}^{n} P(B_i)P(A|B_i)}',
    chapter: '01',
    mnemonic: '贝叶斯公式',
    usage: '已知结果反推原因的概率（由果溯因）',
    kp: ['prob-kp-01']
  },
  {
    id: 'prob-f-04',
    latex: 'P(A \\cup B) = P(A) + P(B) - P(AB)',
    chapter: '01',
    mnemonic: '加法公式',
    usage: '计算两事件并集的概率',
    kp: ['prob-kp-01']
  },
  {
    id: 'prob-f-05',
    latex: 'P(AB) = P(A)P(B|A) = P(B)P(A|B)',
    chapter: '01',
    mnemonic: '乘法公式',
    usage: '计算两事件交集的概率',
    kp: ['prob-kp-01']
  },

  // 第二章：随机变量及其分布
  {
    id: 'prob-f-06',
    latex: 'P(X=k) = C_n^k p^k (1-p)^{n-k}',
    chapter: '02',
    mnemonic: '二项分布 B(n,p)',
    usage: 'n次独立重复试验中成功k次的概率',
    kp: ['prob-kp-02']
  },
  {
    id: 'prob-f-07',
    latex: 'P(X=k) = \\frac{\\lambda^k}{k!}e^{-\\lambda}',
    chapter: '02',
    mnemonic: '泊松分布 P(λ)',
    usage: '单位时间/空间内稀有事件发生k次的概率',
    kp: ['prob-kp-02']
  },
  {
    id: 'prob-f-08',
    latex: 'f(x) = \\frac{1}{b-a}, \\quad a \\leq x \\leq b',
    chapter: '02',
    mnemonic: '均匀分布 U(a,b)',
    usage: '在区间[a,b]上等可能取值',
    kp: ['prob-kp-02']
  },
  {
    id: 'prob-f-09',
    latex: 'f(x) = \\lambda e^{-\\lambda x}, \\quad x \\geq 0',
    chapter: '02',
    mnemonic: '指数分布 E(λ)',
    usage: '寿命分布，无记忆性',
    kp: ['prob-kp-02']
  },
  {
    id: 'prob-f-10',
    latex: 'f(x) = \\frac{1}{\\sqrt{2\\pi}\\sigma}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}',
    chapter: '02',
    mnemonic: '正态分布 N(μ,σ²)',
    usage: '最重要的连续型分布',
    kp: ['prob-kp-02']
  },
  {
    id: 'prob-f-11',
    latex: 'F(x) = P(X \\leq x) = \\int_{-\\infty}^{x} f(t)dt',
    chapter: '02',
    mnemonic: '分布函数定义',
    usage: '随机变量取值不超过x的概率',
    kp: ['prob-kp-02']
  },
  {
    id: 'prob-f-12',
    latex: 'f_Y(y) = f_X(h(y)) \\cdot |h\'(y)|',
    chapter: '02',
    mnemonic: '随机变量函数的密度',
    usage: 'Y=g(X)时，求Y的概率密度',
    kp: ['prob-kp-02']
  },

  // 第三章：数字特征
  {
    id: 'prob-f-13',
    latex: 'E(X) = \\sum_i x_i p_i \\text{ 或 } \\int_{-\\infty}^{+\\infty} xf(x)dx',
    chapter: '03',
    mnemonic: '数学期望',
    usage: '随机变量的平均值（加权平均）',
    kp: ['prob-kp-03']
  },
  {
    id: 'prob-f-14',
    latex: 'D(X) = E(X^2) - [E(X)]^2',
    chapter: '03',
    mnemonic: '方差计算公式',
    usage: '平方的期望减期望的平方',
    kp: ['prob-kp-03']
  },
  {
    id: 'prob-f-15',
    latex: 'E(aX+bY) = aE(X) + bE(Y)',
    chapter: '03',
    mnemonic: '期望的线性性质',
    usage: '期望可加可减，与独立性无关',
    kp: ['prob-kp-03']
  },
  {
    id: 'prob-f-16',
    latex: 'D(aX+b) = a^2 D(X)',
    chapter: '03',
    mnemonic: '方差的性质',
    usage: '常数不影响方差，系数要平方',
    kp: ['prob-kp-03']
  },
  {
    id: 'prob-f-17',
    latex: 'D(X \\pm Y) = D(X) + D(Y) \\quad (\\text{独立时})',
    chapter: '03',
    mnemonic: '独立变量方差可加',
    usage: '注意：方差永远是加，不是减！',
    kp: ['prob-kp-03']
  },
  {
    id: 'prob-f-18',
    latex: 'Cov(X,Y) = E(XY) - E(X)E(Y)',
    chapter: '03',
    mnemonic: '协方差公式',
    usage: '衡量两变量的线性相关程度',
    kp: ['prob-kp-03']
  },

  // 第四章：大数定律与中心极限定理
  {
    id: 'prob-f-19',
    latex: 'P(|X-\\mu| \\geq \\varepsilon) \\leq \\frac{\\sigma^2}{\\varepsilon^2}',
    chapter: '04',
    mnemonic: '切比雪夫不等式',
    usage: '估计随机变量偏离期望的概率上界',
    kp: ['prob-kp-04']
  },
  {
    id: 'prob-f-20',
    latex: '\\frac{\\sum_{i=1}^n X_i - n\\mu}{\\sqrt{n}\\sigma} \\xrightarrow{d} N(0,1)',
    chapter: '04',
    mnemonic: '中心极限定理',
    usage: '大量独立同分布随机变量之和近似正态',
    kp: ['prob-kp-04']
  },

  // 第五章：数理统计
  {
    id: 'prob-f-21',
    latex: '\\bar{X} = \\frac{1}{n}\\sum_{i=1}^n X_i',
    chapter: '05',
    mnemonic: '样本均值',
    usage: 'E(X̄)=μ，D(X̄)=σ²/n',
    kp: ['prob-kp-05']
  },
  {
    id: 'prob-f-22',
    latex: 'S^2 = \\frac{1}{n-1}\\sum_{i=1}^n (X_i - \\bar{X})^2',
    chapter: '05',
    mnemonic: '样本方差（无偏估计）',
    usage: 'E(S²)=σ²，除以n-1保证无偏',
    kp: ['prob-kp-05']
  },
  {
    id: 'prob-f-23',
    latex: '\\frac{\\bar{X}-\\mu}{\\sigma/\\sqrt{n}} \\sim N(0,1)',
    chapter: '05',
    mnemonic: 'σ已知时的标准化',
    usage: '总体方差已知时用Z检验',
    kp: ['prob-kp-05']
  },
  {
    id: 'prob-f-24',
    latex: '\\frac{\\bar{X}-\\mu}{S/\\sqrt{n}} \\sim t(n-1)',
    chapter: '05',
    mnemonic: 'σ未知时的t统计量',
    usage: '总体方差未知时用t检验，自由度n-1',
    kp: ['prob-kp-05']
  },
  {
    id: 'prob-f-25',
    latex: '\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)',
    chapter: '05',
    mnemonic: 'χ²统计量',
    usage: '用于方差的检验和估计，自由度n-1',
    kp: ['prob-kp-05']
  },
  {
    id: 'prob-f-26',
    latex: '\\left(\\bar{X} - t_{\\alpha/2}(n-1)\\frac{S}{\\sqrt{n}}, \\bar{X} + t_{\\alpha/2}(n-1)\\frac{S}{\\sqrt{n}}\\right)',
    chapter: '05',
    mnemonic: 'μ的置信区间（σ未知）',
    usage: '总体方差未知时均值的区间估计',
    kp: ['prob-kp-05']
  },
  {
    id: 'prob-f-27',
    latex: '\\left(\\bar{X} - u_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}}, \\bar{X} + u_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}}\\right)',
    chapter: '05',
    mnemonic: 'μ的置信区间（σ已知）',
    usage: '总体方差已知时均值的区间估计',
    kp: ['prob-kp-05']
  }
]
