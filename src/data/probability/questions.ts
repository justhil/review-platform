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
      '$P(A)=P(A_1)+P(A_2)-P(A_1A_2)$'
    ],
    answer: 'D',
    analysis: '加法公式：$P(A_1\\cup A_2)=P(A_1)+P(A_2)-P(A_1A_2)$。A选项把并集写成交集，错；B选项$A_1+A_2$就是$A_1\\cup A_2$，等式两边相同没意义；C选项减1无依据；D正确。',
    kp: ['prob-kp-01'],
    source: '2022-2023学年A卷',
    difficulty: 2
  },
  {
    id: 'prob-2023a-single-02',
    qtype: 'single',
    stem: '设$A$、$B$为两个随机事件，$P(A)=0.5$，$P(B)=0.5$，$P(A\\cup B)=0.8$，则$P(B|\\bar{A})=$',
    options: ['$0.1$', '$0.2$', '$0.3$', '$0.6$'],
    answer: 'D',
    analysis: '**思路**：求$P(B|\\bar{A})=\\frac{P(\\bar{A}B)}{P(\\bar{A})}$。\n**步骤**：①$P(\\bar{A})=1-0.5=0.5$；②由加法公式$P(AB)=0.5+0.5-0.8=0.2$；③$P(\\bar{A}B)=P(B)-P(AB)=0.5-0.2=0.3$；④$P(B|\\bar{A})=\\frac{0.3}{0.5}=0.6$。',
    kp: ['prob-kp-01'],
    source: '2022-2023学年A卷',
    difficulty: 2
  },
  {
    id: 'prob-2023a-single-03',
    qtype: 'single',
    stem: '设随机变量$X$的概率密度为$f(x)$，分布函数为$F(x)$，且$f(x)=f(-x)$，则',
    options: [
      '$F(a)=F(-a)$',
      '$F(a)=2F(a)-1$',
      '$F(-a)=1-F(a)$',
      '$F(a)+F(-a)=0$'
    ],
    answer: 'C',
    analysis: '**关键**：$f(x)=f(-x)$说明密度函数关于$y$轴对称（偶函数）。\n**推导**：$F(-a)=\\int_{-\\infty}^{-a}f(x)dx$。令$t=-x$，则$F(-a)=\\int_{\\infty}^{a}f(-t)(-dt)=\\int_a^{\\infty}f(t)dt=1-F(a)$。\n**记忆**：对称分布的分布函数满足$F(-a)+F(a)=1$。',
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
      '$p_3<p_2<p_1$',
      '$p_3<p_1<p_2$'
    ],
    answer: 'C',
    analysis: '**思路**：标准化后比较。\n**计算**：$p_1=P(-2<X_1<2)=\\Phi(2)-\\Phi(-2)=2\\Phi(2)-1\\approx 0.954$（区间覆盖$\\pm 2\\sigma$）；$p_2=P(-2<X_2<2)=\\Phi(1)-\\Phi(-1)=2\\Phi(1)-1\\approx 0.683$（$\\sigma=2$，区间只覆盖$\\pm 1\\sigma$）；$p_3=P(-2<X_3<2)=\\Phi(-1)-\\Phi(-7/3)$很小（均值为5，区间在均值左侧很远）。\n**结论**：$p_3<p_2<p_1$。',
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
    analysis: '**分子**：$X_1-X_2\\sim N(0,2\\sigma^2)$，标准化得$\\frac{X_1-X_2}{\\sqrt{2}\\sigma}\\sim N(0,1)$。\n**分母**：$X_3-X_4\\sim N(0,2\\sigma^2)$，所以$\\frac{(X_3-X_4)^2}{2\\sigma^2}\\sim\\chi^2(1)$。\n**合并**：原式$=\\frac{(X_1-X_2)/(\\sqrt{2}\\sigma)}{\\sqrt{(X_3-X_4)^2/(2\\sigma^2)}}=\\frac{N(0,1)}{\\sqrt{\\chi^2(1)/1}}\\sim t(1)$。',
    kp: ['prob-kp-05'],
    source: '2022-2023学年A卷',
    difficulty: 4
  },

  // 2022-2023学年A卷 - 填空题
  {
    id: 'prob-2023a-fill-01',
    qtype: 'fill',
    stem: '设$P(A)=\\frac{1}{4}$，$P(B|A)=\\frac{1}{3}$，$P(A|B)=\\frac{1}{2}$，则$P(A\\cup B)=$______',
    answer: '$\\frac{5}{12}$',
    analysis: '**步骤**：①由乘法公式$P(AB)=P(A)P(B|A)=\\frac{1}{4}\\times\\frac{1}{3}=\\frac{1}{12}$；②由$P(A|B)=\\frac{P(AB)}{P(B)}$得$P(B)=\\frac{P(AB)}{P(A|B)}=\\frac{1/12}{1/2}=\\frac{1}{6}$；③由加法公式$P(A\\cup B)=P(A)+P(B)-P(AB)=\\frac{1}{4}+\\frac{1}{6}-\\frac{1}{12}=\\frac{5}{12}$。',
    kp: ['prob-kp-01'],
    source: '2022-2023学年A卷',
    difficulty: 2
  },
  {
    id: 'prob-2023a-fill-02',
    qtype: 'fill',
    stem: '设随机变量$X$的概率密度为$f(x)=\\begin{cases}2x, & x\\in(0,1)\\\\0, & x\\notin(0,1)\\end{cases}$，$a\\in(0,1)$，若$P(X<a)=P(X>a)$，则$a=$______',
    answer: '$\\frac{\\sqrt{2}}{2}$',
    analysis: '**条件**：$P(X<a)=P(X>a)$意味着$a$是中位数，即$P(X<a)=0.5$。\n**计算**：$P(X<a)=\\int_0^a 2x\\,dx=x^2\\big|_0^a=a^2=0.5$，解得$a=\\frac{1}{\\sqrt{2}}=\\frac{\\sqrt{2}}{2}$。',
    kp: ['prob-kp-02'],
    source: '2022-2023学年A卷',
    difficulty: 2
  },
  {
    id: 'prob-2023a-fill-03',
    qtype: 'fill',
    stem: '设随机变量$X$的分布律为$P\\{X=k\\}=a\\cdot 2^{-k}$，$k=1,2,3,\\ldots$，则常数$a=$______',
    answer: '$1$',
    analysis: '**原理**：概率之和为1，即$\\sum_{k=1}^{\\infty}P(X=k)=1$。\n**计算**：$\\sum_{k=1}^{\\infty}a\\cdot 2^{-k}=a\\cdot\\sum_{k=1}^{\\infty}(\\frac{1}{2})^k=a\\cdot\\frac{1/2}{1-1/2}=a\\cdot 1=a$。\n所以$a=1$。\n**公式**：等比级数$\\sum_{k=1}^{\\infty}r^k=\\frac{r}{1-r}$（$|r|<1$）。',
    kp: ['prob-kp-02'],
    source: '2022-2023学年A卷',
    difficulty: 3
  },
  {
    id: 'prob-2023a-fill-04',
    qtype: 'fill',
    stem: '设$X\\sim P(\\lambda)$，$E[(X+1)(X+2)]=6$，则$\\lambda=$______',
    answer: '$1$',
    analysis: '**展开**：$E[(X+1)(X+2)]=E[X^2+3X+2]=E(X^2)+3E(X)+2$。\n**泊松分布性质**：$E(X)=\\lambda$，$D(X)=\\lambda$，所以$E(X^2)=D(X)+[E(X)]^2=\\lambda+\\lambda^2$。\n**代入**：$\\lambda+\\lambda^2+3\\lambda+2=\\lambda^2+4\\lambda+2=6$，解得$\\lambda=1$。',
    kp: ['prob-kp-03'],
    source: '2022-2023学年A卷',
    difficulty: 3
  },
  {
    id: 'prob-2023a-fill-05',
    qtype: 'fill',
    stem: '设随机变量$X$的概率密度为$f(x)=\\frac{1}{2}e^{-|x|}$（$-\\infty<x<+\\infty$），$X_1,X_2,\\ldots,X_n$是来自$X$的简单随机样本，$S^2$为样本方差，则$E(S^2)=$______',
    answer: '$2$',
    analysis: '**关键公式**：$E(S^2)=\\sigma^2$（样本方差是总体方差的无偏估计）。\n**求总体方差**：由对称性$E(X)=0$。$E(X^2)=\\int_{-\\infty}^{+\\infty}x^2\\cdot\\frac{1}{2}e^{-|x|}dx=\\int_0^{+\\infty}x^2 e^{-x}dx$。\n用分部积分：$\\int_0^{\\infty}x^2 e^{-x}dx=2$（Gamma函数$\\Gamma(3)=2!$）。\n所以$D(X)=E(X^2)-[E(X)]^2=2-0=2$，故$E(S^2)=2$。',
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
    analysis: '**识别模型**：n=10次独立试验，每次成功概率p=0.1 → 二项分布$X\\sim B(10,0.1)$。\n**公式**：$P(X=k)=C_n^k p^k(1-p)^{n-k}$。\n**(1)** $P(X=3)=C_{10}^3\\cdot 0.1^3\\cdot 0.9^7=120\\times 0.001\\times 0.478=0.057$。\n**(2)** "至少2台"用补集：$P(X\\geq 2)=1-P(X=0)-P(X=1)=1-0.9^{10}-10\\times 0.1\\times 0.9^9\\approx 0.264$。',
    kp: ['prob-kp-02'],
    source: '2022-2023学年A卷',
    difficulty: 2
  },
  {
    id: 'prob-2023a-calc-02',
    qtype: 'calc',
    stem: '设随机变量$X$的概率密度为$f(x)=\\begin{cases}6x(1-x), & 0<x<1\\\\0, & \\text{其他}\\end{cases}$，求：(1) $X$的分布函数；(2) $Y=2X+1$的概率密度。',
    answer: '(1) $F(x)=\\begin{cases}0, & x<0\\\\3x^2-2x^3, & 0\\leq x\\leq 1\\\\1, & x>1\\end{cases}$；(2) $f_Y(y)=\\begin{cases}\\frac{3}{2}(y-1)(3-y)/4, & 1<y<3\\\\0, & \\text{其他}\\end{cases}$',
    analysis: '**第(1)问**：$F(x)=\\int_{-\\infty}^x f(t)dt$。当$0\\leq x\\leq 1$时，$F(x)=\\int_0^x 6t(1-t)dt=6(\\frac{t^2}{2}-\\frac{t^3}{3})\\big|_0^x=3x^2-2x^3$。\n**第(2)问**：用公式法。$Y=2X+1$，则$X=\\frac{Y-1}{2}$，$\\frac{dx}{dy}=\\frac{1}{2}$。$f_Y(y)=f_X(\\frac{y-1}{2})\\cdot|\\frac{1}{2}|=6\\cdot\\frac{y-1}{2}\\cdot(1-\\frac{y-1}{2})\\cdot\\frac{1}{2}=\\frac{3(y-1)(3-y)}{4}$，$1<y<3$。',
    kp: ['prob-kp-02'],
    source: '2022-2023学年A卷',
    difficulty: 3
  },
  {
    id: 'prob-2023a-calc-03',
    qtype: 'calc',
    stem: '设二维随机变量$(X,Y)$的联合概率密度为$f(x,y)=\\begin{cases}\\frac{x^2+xy}{3}, & 0<x<1,0<y<2\\\\0, & \\text{其他}\\end{cases}$，求：(1) $X$和$Y$的边缘概率密度；(2) 判断$X$与$Y$是否独立。',
    answer: '(1) $f_X(x)=\\frac{2x^2+2x}{3}$（$0<x<1$），$f_Y(y)=\\frac{1}{3}+\\frac{y}{6}$（$0<y<2$）；(2) 因为$f(x,y)\\neq f_X(x)f_Y(y)$，所以$X$与$Y$不独立。',
    analysis: '**第(1)问**：边缘密度=对另一变量积分。\n$f_X(x)=\\int_0^2\\frac{x^2+xy}{3}dy=\\frac{1}{3}(x^2 y+\\frac{xy^2}{2})\\big|_0^2=\\frac{2x^2+2x}{3}$（$0<x<1$）。\n$f_Y(y)=\\int_0^1\\frac{x^2+xy}{3}dx=\\frac{1}{3}(\\frac{x^3}{3}+\\frac{x^2 y}{2})\\big|_0^1=\\frac{1}{9}+\\frac{y}{6}$（$0<y<2$）。\n**第(2)问**：若独立则$f(x,y)=f_X(x)\\cdot f_Y(y)$。验证：$f_X(x)f_Y(y)=\\frac{2x^2+2x}{3}\\cdot(\\frac{1}{9}+\\frac{y}{6})\\neq\\frac{x^2+xy}{3}$，故不独立。',
    kp: ['prob-kp-02'],
    source: '2022-2023学年A卷',
    difficulty: 3
  },
  {
    id: 'prob-2023a-calc-04',
    qtype: 'calc',
    stem: '设随机变量$X$的概率密度为$f(x)=\\begin{cases}\\frac{1}{\\lambda^2}xe^{-\\frac{x}{\\lambda}}, & x>0\\\\0, & x\\leq 0\\end{cases}$（$\\lambda>0$），$X_1,X_2,\\ldots,X_n$是来自$X$的简单随机样本，求$\\lambda$的矩估计量和极大似然估计量。',
    answer: '矩估计量：$\\hat{\\lambda}=\\frac{\\bar{X}}{2}$；极大似然估计量：$\\hat{\\lambda}=\\frac{\\bar{X}}{2}$',
    analysis: '**矩估计**：先求$E(X)=\\int_0^{\\infty}x\\cdot\\frac{x}{\\lambda^2}e^{-x/\\lambda}dx=\\frac{1}{\\lambda^2}\\int_0^{\\infty}x^2 e^{-x/\\lambda}dx=2\\lambda$（Gamma函数）。令$E(X)=\\bar{X}$，得$\\hat{\\lambda}=\\frac{\\bar{X}}{2}$。\n**极大似然估计**：$L=\\prod_{i=1}^n\\frac{x_i}{\\lambda^2}e^{-x_i/\\lambda}=\\frac{\\prod x_i}{\\lambda^{2n}}e^{-\\sum x_i/\\lambda}$。取对数$\\ln L=\\sum\\ln x_i-2n\\ln\\lambda-\\frac{\\sum x_i}{\\lambda}$。令$\\frac{d\\ln L}{d\\lambda}=-\\frac{2n}{\\lambda}+\\frac{\\sum x_i}{\\lambda^2}=0$，解得$\\hat{\\lambda}=\\frac{\\bar{X}}{2}$。',
    kp: ['prob-kp-05'],
    source: '2022-2023学年A卷',
    difficulty: 4
  },
  {
    id: 'prob-2023a-calc-05',
    qtype: 'calc',
    stem: '设$X_1,X_2,\\ldots,X_n$是来自总体$X$的简单随机样本，$\\bar{X}$为样本均值，证明：$E(X_i-\\bar{X})=0$，$D(X_i-\\bar{X})=\\frac{n-1}{n}\\sigma^2$。',
    answer: '证明：$E(X_i-\\bar{X})=E(X_i)-E(\\bar{X})=\\mu-\\mu=0$；$D(X_i-\\bar{X})=\\frac{n-1}{n}\\sigma^2$',
    analysis: '**证$E(X_i-\\bar{X})=0$**：$E(X_i-\\bar{X})=E(X_i)-E(\\bar{X})=\\mu-\\mu=0$。\n**证$D(X_i-\\bar{X})$**：将$X_i-\\bar{X}$改写为$X_i-\\frac{1}{n}\\sum_{j=1}^n X_j=(1-\\frac{1}{n})X_i-\\frac{1}{n}\\sum_{j\\neq i}X_j$。\n由独立性：$D(X_i-\\bar{X})=(1-\\frac{1}{n})^2\\sigma^2+\\frac{n-1}{n^2}\\sigma^2=\\frac{(n-1)^2+n-1}{n^2}\\sigma^2=\\frac{(n-1)n}{n^2}\\sigma^2=\\frac{n-1}{n}\\sigma^2$。',
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
    answer: '$\\hat{\\mu}_1,\\hat{\\mu}_2,\\hat{\\mu}_3$；$\\hat{\\mu}_3$',
    analysis: '**无偏性判断**：$E(\\hat{\\mu})=\\mu$当且仅当系数之和为1。\n$\\hat{\\mu}_1$：$\\frac{1}{5}+\\frac{3}{10}+\\frac{1}{2}=\\frac{2+3+5}{10}=1$ ✓\n$\\hat{\\mu}_2$：$\\frac{1}{3}+\\frac{1}{4}+\\frac{5}{12}=\\frac{4+3+5}{12}=1$ ✓\n$\\hat{\\mu}_3$：$\\frac{1}{3}+\\frac{1}{3}+\\frac{1}{3}=1$ ✓\n三者都是无偏估计。\n**有效性比较**（方差越小越有效）：\n$D(\\hat{\\mu}_1)=(\\frac{1}{25}+\\frac{9}{100}+\\frac{1}{4})\\sigma^2=0.38\\sigma^2$\n$D(\\hat{\\mu}_2)=(\\frac{1}{9}+\\frac{1}{16}+\\frac{25}{144})\\sigma^2\\approx 0.347\\sigma^2$\n$D(\\hat{\\mu}_3)=3\\times\\frac{1}{9}\\sigma^2=\\frac{1}{3}\\sigma^2\\approx 0.333\\sigma^2$\n$\\hat{\\mu}_3$方差最小，最有效。',
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
  },

  // 补充题型 - χ²分布构造
  {
    id: 'prob-2015a-single-01',
    qtype: 'single',
    stem: '设$X_1,X_2,\\ldots,X_n$是来自正态总体$N(0,\\sigma^2)$的简单随机样本，则$\\sigma^2$的无偏估计量是',
    options: [
      '$\\frac{1}{n}\\sum_{i=1}^n X_i^2$',
      '$\\frac{1}{n-1}\\sum_{i=1}^n X_i^2$',
      '$\\frac{1}{n}\\sum_{i=1}^n X_i$',
      '$\\frac{1}{n-1}\\sum_{i=1}^n X_i$'
    ],
    answer: 'A',
    analysis: '**关键**：当$\\mu=0$时，$E(X_i^2)=D(X_i)+[E(X_i)]^2=\\sigma^2+0=\\sigma^2$。\n**验证**：$E(\\frac{1}{n}\\sum X_i^2)=\\frac{1}{n}\\sum E(X_i^2)=\\frac{1}{n}\\cdot n\\sigma^2=\\sigma^2$。\n**注意**：这与一般情况不同！一般$\\mu\\neq 0$时，$S^2=\\frac{1}{n-1}\\sum(X_i-\\bar{X})^2$才是无偏估计。',
    kp: ['prob-kp-05'],
    source: '2015-2016学年',
    difficulty: 3
  },

  // 补充题型 - 独立正态变量平方和
  {
    id: 'prob-2015a-single-02',
    qtype: 'single',
    stem: '设$X\\sim N(0,1)$，$Y\\sim N(0,1)$，$X$与$Y$相互独立，则下列正确的是',
    options: [
      '$X+Y$服从正态分布',
      '$X^2+Y^2$服从$\\chi^2$分布',
      '$X^2/Y^2$服从$F$分布',
      '$X^2Y^2$服从$\\chi^2$分布'
    ],
    answer: 'B',
    analysis: '**A正确**：独立正态之和仍是正态，$X+Y\\sim N(0,2)$。\n**B正确**：$X^2\\sim\\chi^2(1)$，$Y^2\\sim\\chi^2(1)$，独立$\\chi^2$之和$X^2+Y^2\\sim\\chi^2(2)$。\n**C错误**：$F$分布定义是$\\frac{\\chi^2(m)/m}{\\chi^2(n)/n}$，这里$X^2/Y^2=\\frac{\\chi^2(1)/1}{\\chi^2(1)/1}\\sim F(1,1)$，C表述不完整。\n**D错误**：乘积不服从$\\chi^2$分布。\n**注**：本题A、B都对，但B更直接考查$\\chi^2$分布定义。',
    kp: ['prob-kp-05'],
    source: '2015-2016学年',
    difficulty: 3
  },

  // 补充题型 - 单侧假设检验拒绝域
  {
    id: 'prob-2015a-single-03',
    qtype: 'single',
    stem: '设总体$X\\sim N(\\mu,\\sigma^2)$，$\\sigma^2$已知，用$U$检验法检验$H_0:\\mu=\\mu_0$，$H_1:\\mu>\\mu_0$，则拒绝域为',
    options: [
      '$W=\\{u:|u|\\geq u_{\\alpha}\\}$',
      '$W=\\{u:u\\geq u_{1-\\alpha/2}\\}$',
      '$W=\\{u:u\\geq u_{1-\\alpha}\\}$',
      '$W=\\{u:u\\geq u_{\\alpha/2}\\}$'
    ],
    answer: 'C',
    analysis: '**单侧检验**：$H_1:\\mu>\\mu_0$是右侧检验。\n**拒绝域**：当$U=\\frac{\\bar{X}-\\mu_0}{\\sigma/\\sqrt{n}}$足够大时拒绝$H_0$。\n**临界值**：$P(U\\geq u_{1-\\alpha})=\\alpha$，所以拒绝域$W=\\{u:u\\geq u_{1-\\alpha}\\}$。\n**记忆**：右侧检验用$u_{1-\\alpha}$，左侧检验用$-u_{1-\\alpha}$，双侧检验用$\\pm u_{1-\\alpha/2}$。',
    kp: ['prob-kp-05'],
    source: '2015-2016学年',
    difficulty: 3
  },

  // 补充题型 - σ²已知时的置信区间
  {
    id: 'prob-2016a-single-01',
    qtype: 'single',
    stem: '设$X_1,X_2,\\ldots,X_n$是来自正态总体$N(\\mu,4)$的简单随机样本，$\\bar{X}$为样本均值，则$\\mu$的置信度为$1-\\alpha$的置信区间为',
    options: [
      '$(\\bar{X}-u_{\\alpha/2}\\frac{4}{\\sqrt{n}}, \\bar{X}+u_{\\alpha/2}\\frac{4}{\\sqrt{n}})$',
      '$(\\bar{X}-u_{1-\\alpha/2}\\frac{2}{\\sqrt{n}}, \\bar{X}+u_{\\alpha/2}\\frac{2}{\\sqrt{n}})$',
      '$(\\bar{X}-u_{\\alpha}\\frac{2}{\\sqrt{n}}, \\bar{X}+u_{\\alpha}\\frac{2}{\\sqrt{n}})$',
      '$(\\bar{X}-u_{\\alpha/2}\\frac{2}{\\sqrt{n}}, \\bar{X}+u_{\\alpha/2}\\frac{2}{\\sqrt{n}})$'
    ],
    answer: 'D',
    analysis: '**条件**：$\\sigma^2=4$已知，$\\sigma=2$。\n**公式**：$\\sigma$已知时，$\\mu$的置信区间为$(\\bar{X}-u_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}}, \\bar{X}+u_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}})$。\n**代入**：$(\\bar{X}-u_{\\alpha/2}\\frac{2}{\\sqrt{n}}, \\bar{X}+u_{\\alpha/2}\\frac{2}{\\sqrt{n}})$。\n**对比**：$\\sigma$未知时用$t$分布和$S$。',
    kp: ['prob-kp-05'],
    source: '2016-2017学年',
    difficulty: 3
  },

  // 补充题型 - 分布函数线性组合
  {
    id: 'prob-2016a-single-02',
    qtype: 'single',
    stem: '设$F(x)$和$G(x)$分别是随机变量$X$和$Y$的分布函数，若$H(x)=aF(x)+bG(x)$也是某随机变量的分布函数，则',
    options: [
      '$a=0.3$，$b=0.2$',
      '$a=0.3$，$b=0.7$',
      '$a=0.4$，$b=0.5$',
      '$a=0.5$，$b=0.6$'
    ],
    answer: 'B',
    analysis: '**分布函数性质**：$H(+\\infty)=1$，$H(-\\infty)=0$，且$H(x)$单调不减。\n**验证**：$H(+\\infty)=aF(+\\infty)+bG(+\\infty)=a\\cdot 1+b\\cdot 1=a+b=1$。\n$H(-\\infty)=aF(-\\infty)+bG(-\\infty)=a\\cdot 0+b\\cdot 0=0$。\n**结论**：必须$a+b=1$且$a,b\\geq 0$。只有B选项$0.3+0.7=1$满足。',
    kp: ['prob-kp-02'],
    source: '2016-2017学年',
    difficulty: 3
  },

  // 补充题型 - 分段分布函数求概率
  {
    id: 'prob-2015a-fill-03',
    qtype: 'fill',
    stem: '设随机变量$X$的分布函数为$F(x)=\\begin{cases}0, & x<0\\\\0.3, & 0\\leq x<1\\\\0.6, & 1\\leq x<2\\\\1, & x\\geq 3\\end{cases}$，则$P\\{0.5\\leq X\\leq 2.5\\}=$______',
    answer: '$0.7$',
    analysis: '**方法**：$P\\{a<X\\leq b\\}=F(b)-F(a)$。\n**注意**：分布函数右连续，$P\\{X=a\\}=F(a)-F(a^-)$。\n**计算**：$P\\{0.5\\leq X\\leq 2.5\\}=P\\{0.5<X\\leq 2.5\\}+P\\{X=0.5\\}$。\n由于$F(0.5)=F(0.5^-)=0.3$，所以$P\\{X=0.5\\}=0$。\n$P\\{0.5<X\\leq 2.5\\}=F(2.5)-F(0.5)=1-0.3=0.7$。',
    kp: ['prob-kp-02'],
    source: '2015-2016学年',
    difficulty: 3
  },

  // 补充题型 - 方差的χ²检验
  {
    id: 'prob-2016a-calc-01',
    qtype: 'calc',
    stem: '某工厂生产的零件直径$X$（单位：cm）服从正态分布。现抽取12个零件，测得样本均值$\\bar{X}=27$，样本标准差$S=2.267$。在显著性水平$\\alpha=0.05$下，检验总体方差是否不超过$3.24$。（已知$\\chi^2_{0.05}(11)=19.675$，$\\chi^2_{0.95}(11)=4.575$）',
    answer: '设$H_0:\\sigma^2\\leq 3.24$，$H_1:\\sigma^2>3.24$\n检验统计量：$\\chi^2=\\frac{(n-1)S^2}{\\sigma_0^2}=\\frac{11\\times 2.267^2}{3.24}=17.448$\n拒绝域：$\\chi^2\\geq\\chi^2_{0.05}(11)=19.675$\n因为$17.448<19.675$，所以接受$H_0$，认为方差不超过$3.24$。',
    analysis: '**方差检验步骤**：\n(1)建立假设：$H_0:\\sigma^2\\leq\\sigma_0^2$，$H_1:\\sigma^2>\\sigma_0^2$（右侧检验）\n(2)统计量：$\\chi^2=\\frac{(n-1)S^2}{\\sigma_0^2}\\sim\\chi^2(n-1)$\n(3)拒绝域：右侧检验$\\chi^2\\geq\\chi^2_{\\alpha}(n-1)$\n(4)计算判断：$\\chi^2=\\frac{11\\times 5.139}{3.24}=17.448<19.675$，接受$H_0$。',
    kp: ['prob-kp-05'],
    source: '2016-2017学年',
    difficulty: 4
  },

  // 补充题型 - 均匀分布求随机变量函数的密度
  {
    id: 'prob-2015a-calc-01',
    qtype: 'calc',
    stem: '设随机变量$X$服从$(0,1)$上的均匀分布，$Y=2X+1$，求$Y$的概率密度。',
    answer: '$f_Y(y)=\\begin{cases}\\frac{1}{2}, & 1<y<3\\\\0, & \\text{其他}\\end{cases}$',
    analysis: '**方法一（公式法）**：\n$X\\sim U(0,1)$，$f_X(x)=1$（$0<x<1$）。\n$Y=2X+1$，则$X=\\frac{Y-1}{2}$，$\\frac{dx}{dy}=\\frac{1}{2}$。\n$f_Y(y)=f_X(\\frac{y-1}{2})\\cdot|\\frac{1}{2}|=1\\cdot\\frac{1}{2}=\\frac{1}{2}$。\n$Y$的取值范围：$X\\in(0,1)\\Rightarrow Y\\in(1,3)$。\n**方法二（分布函数法）**：\n$F_Y(y)=P(Y\\leq y)=P(2X+1\\leq y)=P(X\\leq\\frac{y-1}{2})=F_X(\\frac{y-1}{2})$。\n$f_Y(y)=F_Y\'(y)=\\frac{1}{2}f_X(\\frac{y-1}{2})=\\frac{1}{2}$（$1<y<3$）。',
    kp: ['prob-kp-02'],
    source: '2015-2016学年',
    difficulty: 3
  },

  // 补充题型 - 二维连续型随机变量独立性判断
  {
    id: 'prob-2016a-calc-02',
    qtype: 'calc',
    stem: '设二维随机变量$(X,Y)$的联合概率密度为$f(x,y)=\\begin{cases}xe^{-x}\\cdot\\frac{1}{(1+y)^2}, & x\\geq 0,y\\geq 0\\\\0, & \\text{其他}\\end{cases}$，求：(1) $X$和$Y$的边缘概率密度；(2) 判断$X$与$Y$是否独立。',
    answer: '(1) $f_X(x)=xe^{-x}$（$x\\geq 0$），$f_Y(y)=\\frac{1}{(1+y)^2}$（$y\\geq 0$）\n(2) 因为$f(x,y)=f_X(x)\\cdot f_Y(y)$，所以$X$与$Y$相互独立。',
    analysis: '**第(1)问**：\n$f_X(x)=\\int_0^{+\\infty}xe^{-x}\\cdot\\frac{1}{(1+y)^2}dy=xe^{-x}\\cdot[-\\frac{1}{1+y}]_0^{+\\infty}=xe^{-x}$（$x\\geq 0$）。\n$f_Y(y)=\\int_0^{+\\infty}xe^{-x}\\cdot\\frac{1}{(1+y)^2}dx=\\frac{1}{(1+y)^2}\\cdot\\int_0^{+\\infty}xe^{-x}dx=\\frac{1}{(1+y)^2}$（$y\\geq 0$）。\n**第(2)问**：\n验证$f(x,y)=xe^{-x}\\cdot\\frac{1}{(1+y)^2}=f_X(x)\\cdot f_Y(y)$，成立！\n**结论**：$X$与$Y$相互独立。\n**技巧**：若联合密度可分离为$f(x,y)=g(x)h(y)$的形式，则独立。',
    kp: ['prob-kp-02'],
    source: '2016-2017学年',
    difficulty: 3
  },

  // ========== 2016年试卷补充题型 ==========

  // 补充题型 - 事件独立性判断
  {
    id: 'prob-2016a-single-03',
    qtype: 'single',
    stem: '设$A$、$B$为两个随机事件，$P(A)=0.4$，$P(B)=0.5$，$P(AB)=0.2$，则$A$与$B$',
    options: [
      '相互独立',
      '互不相容',
      '既不独立也不互不相容',
      '条件不足，无法判断'
    ],
    answer: 'A',
    analysis: '**独立性判断**：若$P(AB)=P(A)P(B)$则独立。\n**验证**：$P(A)P(B)=0.4\\times 0.5=0.2=P(AB)$，成立！\n**结论**：$A$与$B$相互独立。\n**注意**：互不相容要求$P(AB)=0$，这里$P(AB)=0.2\\neq 0$，所以不互不相容。',
    kp: ['prob-kp-01'],
    source: '2015-2016学年',
    difficulty: 2
  },

  // 补充题型 - 协方差计算
  {
    id: 'prob-2016a-fill-03',
    qtype: 'fill',
    stem: '设随机变量$X$与$Y$满足$E(X)=1$，$E(Y)=2$，$D(X)=4$，$D(Y)=9$，$\\rho_{XY}=0.5$，则$Cov(X,Y)=$______',
    answer: '$3$',
    analysis: '**公式**：$\\rho_{XY}=\\frac{Cov(X,Y)}{\\sqrt{D(X)}\\sqrt{D(Y)}}$。\n**代入**：$0.5=\\frac{Cov(X,Y)}{\\sqrt{4}\\cdot\\sqrt{9}}=\\frac{Cov(X,Y)}{2\\times 3}=\\frac{Cov(X,Y)}{6}$。\n**解得**：$Cov(X,Y)=0.5\\times 6=3$。',
    kp: ['prob-kp-03'],
    source: '2015-2016学年',
    difficulty: 2
  },

  // 补充题型 - 协方差性质
  {
    id: 'prob-2016a-fill-04',
    qtype: 'fill',
    stem: '设$D(X)=2$，$D(Y)=3$，$Cov(X,Y)=1$，则$D(2X-Y)=$______',
    answer: '$7$',
    analysis: '**公式**：$D(aX+bY)=a^2D(X)+b^2D(Y)+2ab\\cdot Cov(X,Y)$。\n**代入**：这里$a=2,b=-1$。\n$D(2X-Y)=4D(X)+D(Y)+2\\times 2\\times(-1)\\times Cov(X,Y)$\n$=4\\times 2+3-4\\times 1=8+3-4=7$。\n**记忆**：方差的线性组合公式中，系数要平方，协方差项系数是$2ab$。',
    kp: ['prob-kp-03'],
    source: '2015-2016学年',
    difficulty: 3
  },

  // 补充题型 - 二维正态分布性质
  {
    id: 'prob-2016a-single-04',
    qtype: 'single',
    stem: '设$(X,Y)$服从二维正态分布，下列结论错误的是',
    options: [
      '$X$与$Y$都服从正态分布',
      '$aX+bY$服从正态分布（$a,b$为常数）',
      '若$\\rho=0$，则$X$与$Y$相互独立',
      '若$X$与$Y$都服从正态分布，则$(X,Y)$服从二维正态分布'
    ],
    answer: 'D',
    analysis: '**A正确**：二维正态的边缘分布是一维正态。\n**B正确**：二维正态的线性组合仍是正态。\n**C正确**：对于二维正态分布，$\\rho=0$等价于独立（这是二维正态的特殊性质）。\n**D错误**：两个一维正态不一定构成二维正态！反例：$X\\sim N(0,1)$，$Y=X$当$|X|\\leq 1$，$Y=-X$当$|X|>1$，则$Y\\sim N(0,1)$但$(X,Y)$不是二维正态。',
    kp: ['prob-kp-02', 'prob-kp-03'],
    source: '2015-2016学年',
    difficulty: 3
  },

  // 补充题型 - 由协方差求期望
  {
    id: 'prob-2016a-fill-05',
    qtype: 'fill',
    stem: '设$E(X)=2$，$E(Y)=3$，$E(XY)=8$，则$Cov(X,Y)=$______',
    answer: '$2$',
    analysis: '**公式**：$Cov(X,Y)=E(XY)-E(X)E(Y)$。\n**代入**：$Cov(X,Y)=8-2\\times 3=8-6=2$。\n**记忆**：协方差=乘积期望-期望乘积。',
    kp: ['prob-kp-03'],
    source: '2015-2016学年',
    difficulty: 2
  },

  // 补充题型 - 离散型随机变量期望（分布律）
  {
    id: 'prob-2016a-fill-06',
    qtype: 'fill',
    stem: '设随机变量$X$的分布律为$P\\{X=k\\}=\\frac{k}{6}$，$k=1,2,3$，则$E(X)=$______',
    answer: '$\\frac{7}{3}$',
    analysis: '**公式**：$E(X)=\\sum_k k\\cdot P(X=k)$。\n**计算**：$E(X)=1\\times\\frac{1}{6}+2\\times\\frac{2}{6}+3\\times\\frac{3}{6}=\\frac{1+4+9}{6}=\\frac{14}{6}=\\frac{7}{3}$。\n**验证概率和**：$\\frac{1}{6}+\\frac{2}{6}+\\frac{3}{6}=1$ ✓',
    kp: ['prob-kp-03'],
    source: '2015-2016学年',
    difficulty: 2
  },

  // 补充题型 - 相关系数性质
  {
    id: 'prob-2016a-single-05',
    qtype: 'single',
    stem: '设随机变量$X$与$Y$的相关系数$\\rho_{XY}=-1$，则',
    options: [
      '$Y=X$',
      '$Y=-X$',
      '$Y=aX+b$，其中$a<0$',
      '$Y=aX+b$，其中$a>0$'
    ],
    answer: 'C',
    analysis: '**相关系数性质**：$|\\rho_{XY}|=1$当且仅当$Y$与$X$存在线性关系$Y=aX+b$。\n**符号判断**：$\\rho_{XY}=-1$说明$a<0$（负相关）；$\\rho_{XY}=1$说明$a>0$（正相关）。\n**注意**：B选项$Y=-X$是特例，但不是唯一可能，C更一般。',
    kp: ['prob-kp-03'],
    source: '2015-2016学年',
    difficulty: 2
  }
]
