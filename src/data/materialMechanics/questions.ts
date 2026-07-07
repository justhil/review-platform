import type { Question } from '../../types'

export const materialMechanicsQuestions: Question[] = [
  // 试卷一 判断题
  {
    id: 'mat-p1-tf-01',
    qtype: 'truefalse',
    stem: '研究杆件的应力与变形时，力可按力的平移定理进行移动。',
    answer: '错',
    analysis: '力的平移定理适用于刚体静力学；变形体上平移力会改变内力分布。',
    kp: ['mat-kp-01'],
    source: '材料力学试卷1',
    difficulty: 2
  },
  {
    id: 'mat-p1-tf-02',
    qtype: 'truefalse',
    stem: '轴力的大小与杆件的材料以及横截面积都无关。',
    answer: '对',
    kp: ['mat-kp-02'],
    source: '材料力学试卷1',
    difficulty: 1
  },
  {
    id: 'mat-p1-tf-03',
    qtype: 'truefalse',
    stem: '当轴的两端受到两大小相等、方向相反的力偶作用时，轴将产生扭转变形。',
    answer: '错',
    analysis: '两端力偶使杆受扭；若仅为轴向力偶组合需看具体受力，此处为错。',
    kp: ['mat-kp-02'],
    source: '材料力学试卷1',
    difficulty: 2
  },
  {
    id: 'mat-p1-tf-04',
    qtype: 'truefalse',
    stem: '实心圆轴扭转时，截面上没有切应力等于零的点。',
    answer: '错',
    analysis: '圆心处切应力为零。',
    kp: ['mat-kp-02'],
    source: '材料力学试卷1',
    difficulty: 2
  },
  {
    id: 'mat-p1-tf-05',
    qtype: 'truefalse',
    stem: '平面图形对某一轴的静矩为零，则该轴一定通过平面图形的形心，反之亦然。',
    answer: '对',
    kp: ['mat-kp-03'],
    source: '材料力学试卷1',
    difficulty: 2
  },
  {
    id: 'mat-p1-tf-06',
    qtype: 'truefalse',
    stem: '单元体上最大切应力作用面上必无正应力。',
    answer: '错',
    kp: ['mat-kp-06'],
    source: '材料力学试卷1',
    difficulty: 3
  },
  {
    id: 'mat-p1-tf-07',
    qtype: 'truefalse',
    stem: '当实心截面梁比较细长时，弯曲切应力是决定梁是否破坏的主要因素，弯曲正应力是次要因素。',
    answer: '错',
    kp: ['mat-kp-04'],
    source: '材料力学试卷1',
    difficulty: 2
  },
  {
    id: 'mat-p1-tf-08',
    qtype: 'truefalse',
    stem: '梁在发生纯弯曲变形时，根据平面假设及变形的连续性可知，中性层的纵向纤维无长度改变。',
    answer: '对',
    kp: ['mat-kp-04'],
    source: '材料力学试卷1',
    difficulty: 2
  },
  {
    id: 'mat-p1-tf-09',
    qtype: 'truefalse',
    stem: '材料、长度、截面形状和尺寸完全相同的两根梁，当载荷相同时，其变形和位移也相同。',
    answer: '错',
    kp: ['mat-kp-04'],
    source: '材料力学试卷1',
    difficulty: 2
  },
  {
    id: 'mat-p1-tf-10',
    qtype: 'truefalse',
    stem: '细长压杆失稳时，应力一定大于比例极限。',
    answer: '错',
    kp: ['mat-kp-08'],
    source: '材料力学试卷1',
    difficulty: 3
  },

  // 试卷一 选择题
  {
    id: 'mat-p1-single-01',
    qtype: 'single',
    stem: '构件在外力作用下（ ）的能力称为稳定性。',
    options: ['不发生断裂', '不发生变形', '保持静止', '保持原有平衡状态'],
    answer: 'D',
    kp: ['mat-kp-01'],
    source: '材料力学试卷1',
    difficulty: 1
  },
  {
    id: 'mat-p1-single-02',
    qtype: 'single',
    stem: '工程实际中产生弯曲变形的杆件，如火车轮轴、房屋楼板主梁，在得到计算简图时，需将其支承方式简化为（ ）。',
    options: ['简支梁', '轮轴为外伸梁，楼板主梁为简支梁', '外伸梁', '轮轴为简支梁，楼板主梁为外伸梁'],
    answer: 'B',
    kp: ['mat-kp-04'],
    source: '材料力学试卷1',
    difficulty: 2
  },
  {
    id: 'mat-p1-single-03',
    qtype: 'single',
    stem: '圆轴由钢管和铝套管牢固结合，扭转变形时横截面切应力分布正确的是（ ）（需结合图示：材料切变模量不同）。',
    options: ['切应力在结合面上连续且内外相同', '钢管与铝套切应力分布不同', '仅外管承受切应力', '切应力沿半径线性且与材料无关'],
    answer: 'B',
    kp: ['mat-kp-02'],
    source: '材料力学试卷1',
    difficulty: 3
  },
  {
    id: 'mat-p1-single-04',
    qtype: 'single',
    stem: '矩形截面对 $z$、$y$ 两形心轴的惯性矩分别为（ ）（$b$ 为水平边长，$h$ 为竖直边长）。',
    options: [
      '$I_z=\\dfrac{bh^2}{12}$，$I_y=\\dfrac{hb^2}{12}$',
      '$I_z=\\dfrac{hb^2}{12}$，$I_y=\\dfrac{bh^2}{12}$',
      '$I_z=\\dfrac{hb^3}{12}$，$I_y=\\dfrac{bh^3}{12}$',
      '$I_z=\\dfrac{bh^3}{12}$，$I_y=\\dfrac{hb^3}{12}$'
    ],
    answer: 'D',
    kp: ['mat-kp-03'],
    source: '材料力学试卷1',
    difficulty: 2
  },
  {
    id: 'mat-p1-single-05',
    qtype: 'single',
    stem: '梁在集中力作用的截面处，内力图（ ）。',
    options: [
      '剪力图有突变，弯矩图光滑连接',
      '剪力图有突变，弯矩图有转折',
      '剪力图光滑连接，弯矩图有突变',
      '剪力图有转折，弯矩图有突变'
    ],
    answer: 'B',
    kp: ['mat-kp-04'],
    source: '材料力学试卷1',
    difficulty: 2
  },
  {
    id: 'mat-p1-single-06',
    qtype: 'single',
    stem: '某二向应力状态单元体的应力圆如图所示，则单元体内最大切应力为（ ）。',
    options: ['$\\sigma_1$', '$\\sigma_2$', '$\\dfrac{\\sigma_1-\\sigma_2}{2}$', '$\\dfrac{\\sigma_1+\\sigma_2}{2}$'],
    answer: 'C',
    kp: ['mat-kp-06'],
    source: '材料力学试卷1',
    difficulty: 2
  },
  {
    id: 'mat-p1-single-07',
    qtype: 'single',
    stem: '梁发生纯弯曲时，其横截面绕（ ）旋转。',
    options: ['梁的轴线', '截面对称轴', '中性轴', '截面形心'],
    answer: 'C',
    kp: ['mat-kp-04'],
    source: '材料力学试卷1',
    difficulty: 2
  },
  {
    id: 'mat-p1-single-08',
    qtype: 'single',
    stem: '阶梯圆轴的最大切应力发生在（ ）。',
    options: ['扭矩最大的截面', '直径最大的截面', '直径最小的截面', '不能确定'],
    answer: 'D',
    kp: ['mat-kp-02'],
    source: '材料力学试卷1',
    difficulty: 2
  },
  {
    id: 'mat-p1-single-09',
    qtype: 'single',
    stem: '单位长度的扭转角 $\\varphi^{\\prime}$ 与（ ）无关。',
    options: ['杆的长度', '扭矩', '材料性质', '截面几何性质'],
    answer: 'A',
    kp: ['mat-kp-02'],
    source: '材料力学试卷1',
    difficulty: 2
  },
  {
    id: 'mat-p1-single-10',
    qtype: 'single',
    stem: '四根压杆材料、截面均相同，它们失稳的先后次序为（ ）。',
    options: ['(a),(b),(c),(d)', '(d),(a),(b),(c)', '(c),(d),(a),(b)', '(b),(c),(d),(a)'],
    answer: 'A',
    kp: ['mat-kp-08'],
    source: '材料力学试卷1',
    difficulty: 2
  },

  // 试卷一 填空
  {
    id: 'mat-p1-fill-01',
    qtype: 'fill',
    stem: '工程上须保证构件具有足够的______、______和______。',
    answer: ['强度', '刚度', '稳定性'],
    kp: ['mat-kp-01'],
    source: '材料力学试卷1',
    difficulty: 1
  },
  {
    id: 'mat-p1-fill-02',
    qtype: 'fill',
    stem: '切应力等于零的平面叫主平面，主平面上的正应力叫______。',
    answer: '主应力',
    kp: ['mat-kp-06'],
    source: '材料力学试卷1',
    difficulty: 2
  },
  {
    id: 'mat-p1-fill-03',
    qtype: 'fill',
    stem: '伸长率大于______的材料称为塑性材料。',
    answer: '5%',
    kp: ['mat-kp-01'],
    source: '材料力学试卷1',
    difficulty: 1
  },
  {
    id: 'mat-p1-fill-04',
    qtype: 'fill',
    stem: '实心圆轴直径减半（其余不变），最大切应力变为原来的______倍。',
    answer: '8',
    kp: ['mat-kp-02'],
    source: '材料力学试卷1',
    difficulty: 2
  },
  {
    id: 'mat-p1-fill-05',
    qtype: 'fill',
    stem: '矩形截面梁高度增加一倍，最大正应力变为原来的______倍。',
    answer: '0.25',
    analysis: '亦写 $\\frac{1}{4}$。',
    kp: ['mat-kp-04'],
    source: '材料力学试卷1',
    difficulty: 2
  },
  {
    id: 'mat-p1-fill-06',
    qtype: 'fill',
    stem: '正方形截面低碳钢拉杆轴力 $2.5\\mathrm{kN}$，$[\\sigma]=100\\mathrm{MPa}$，边长至少______ $\\mathrm{mm}$。',
    answer: '5',
    kp: ['mat-kp-01'],
    source: '材料力学试卷1',
    difficulty: 2
  },
  {
    id: 'mat-p1-fill-07',
    qtype: 'fill',
    stem: '长 $2\\mathrm{m}$ 拉杆 $F=10\\mathrm{kN}$，$A=100\\mathrm{mm}^2$，$E=200\\mathrm{GPa}$，伸长量______ $\\mathrm{mm}$。',
    answer: '1',
    kp: ['mat-kp-01'],
    source: '材料力学试卷1',
    difficulty: 2
  },
  {
    id: 'mat-p1-fill-08',
    qtype: 'fill',
    stem: '压杆从稳定平衡过渡到不稳定平衡时载荷的临界值称为______。',
    answer: '临界压力',
    kp: ['mat-kp-08'],
    source: '材料力学试卷1',
    difficulty: 2
  },

  // 试卷二 选择题（参考答案）
  {
    id: 'mat-p2-single-01',
    qtype: 'single',
    stem: '所谓强度，是指构件抵抗下面哪一种能力（ ）。',
    options: ['变形', '扭转', '弯曲', '破坏'],
    answer: 'D',
    kp: ['mat-kp-01'],
    source: '材料力学试卷2',
    difficulty: 1
  },
  {
    id: 'mat-p2-single-02',
    qtype: 'single',
    stem: '四种细长压杆截面形状，从稳定性考虑最合理与最不合理的组合是（ ）。',
    options: ['A 最合理，D 最不合理', 'B 最合理，C 最不合理', 'C 最合理，A 最不合理', 'D 最合理，B 最不合理'],
    answer: 'A',
    analysis: '参考答案为 AD（多选语义，平台取首项 A）。',
    kp: ['mat-kp-08'],
    source: '材料力学试卷2',
    difficulty: 2
  },
  {
    id: 'mat-p2-single-03',
    qtype: 'single',
    stem: '1、2、3 三杆铰接，1、2 杆材料尺寸相同，则正确关系为（ ）。',
    options: ['$\\Delta l_1=\\Delta l_3$', '$\\Delta l_1\\neq\\Delta l_3$', '$\\Delta l_3=\\Delta l_1\\cos\\alpha$', '$\\Delta l_1=\\Delta l_3\\cos\\alpha$'],
    answer: 'D',
    kp: ['mat-kp-01'],
    source: '材料力学试卷2',
    difficulty: 2
  },
  {
    id: 'mat-p2-single-04',
    qtype: 'single',
    stem: '内外径比 $D=2d$ 的空心圆轴，横截面最大切应力为 $\\tau$，内圆周处切应力为（ ）。',
    options: ['$\\tau$', '$\\frac{7}{8}\\tau$', '$\\frac{1}{2}\\tau$', '$\\frac{15}{16}\\tau$'],
    answer: 'C',
    kp: ['mat-kp-02'],
    source: '材料力学试卷2',
    difficulty: 2
  },
  {
    id: 'mat-p2-single-05',
    qtype: 'single',
    stem: '第三强度理论的相当应力是（ ）。',
    options: ['$\\sigma_1$', '$\\sigma_1-\\sigma_3$', '$\\sigma_1-\\mu(\\sigma_2+\\sigma_3)$', '$\\frac{\\sigma_1-\\sigma_3}{2}$'],
    answer: 'B',
    kp: ['mat-kp-06'],
    source: '材料力学试卷2',
    difficulty: 2
  },
  {
    id: 'mat-p2-single-06',
    qtype: 'single',
    stem: '图示结构属于（ ）。',
    options: ['静定结构', '超静定 1 次', '超静定 2 次', '超静定 3 次'],
    answer: 'C',
    kp: ['mat-kp-04'],
    source: '材料力学试卷2',
    difficulty: 2
  },
  {
    id: 'mat-p2-single-07',
    qtype: 'single',
    stem: '矩形与正方形截面面积相同，对对称轴 $x$ 惯性矩 $I_x^a,I_x^b$，对 $y$ 轴 $I_y^a,I_y^b$，则（ ）。',
    options: ['$I_x^a<I_x^b,\\; I_y^a<I_y^b$', '$I_x^a<I_x^b,\\; I_y^a>I_y^b$', '$I_x^a>I_x^b,\\; I_y^a<I_y^b$', '$I_x^a>I_x^b,\\; I_y^a>I_y^b$'],
    answer: 'C',
    kp: ['mat-kp-03'],
    source: '材料力学试卷2',
    difficulty: 2
  },
  {
    id: 'mat-p2-single-08',
    qtype: 'single',
    stem: '梁两种搁置方式下最大正应力之比 $(\\sigma_{\\max})_a/(\\sigma_{\\max})_b$ 为（ ）。',
    options: ['$\\dfrac{1}{4}$', '$\\dfrac{1}{16}$', '$\\dfrac{1}{64}$', '$16$'],
    answer: 'A',
    kp: ['mat-kp-04'],
    source: '材料力学试卷2',
    difficulty: 3
  },

  // 试卷三 判断题
  {
    id: 'mat-p3-tf-01',
    qtype: 'truefalse',
    stem: '最大伸长线应变理论是用来解释塑性材料屈服失效的强度理论。',
    answer: '错',
    kp: ['mat-kp-06'],
    source: '材料力学试卷3',
    difficulty: 2
  },
  {
    id: 'mat-p3-tf-02',
    qtype: 'truefalse',
    stem: '挤压面积的计算时，需要按实际挤压面面积计算。',
    answer: '错',
    kp: ['mat-kp-01'],
    source: '材料力学试卷3',
    difficulty: 2
  },
  {
    id: 'mat-p3-tf-03',
    qtype: 'truefalse',
    stem: '进行低碳钢拉伸试验时，在强化阶段会出现缩颈现象。',
    answer: '错',
    kp: ['mat-kp-01'],
    source: '材料力学试卷3',
    difficulty: 2
  },
  {
    id: 'mat-p3-tf-04',
    qtype: 'truefalse',
    stem: '纯弯曲时各纵向纤维都将发生伸长或缩短。',
    answer: '错',
    kp: ['mat-kp-04'],
    source: '材料力学试卷3',
    difficulty: 2
  },
  {
    id: 'mat-p3-tf-05',
    qtype: 'truefalse',
    stem: '切应力互等定理要求两相交截面上切应力大小相等、方向共同指向或背离交线。',
    answer: '错',
    kp: ['mat-kp-06'],
    source: '材料力学试卷3',
    difficulty: 2
  },
  {
    id: 'mat-p3-tf-06',
    qtype: 'truefalse',
    stem: '圆轴在两个纵向平面内同时弯曲时，两平面弯矩可合成为新弯矩且作用面仍为纵向对称面。',
    answer: '对',
    kp: ['mat-kp-04'],
    source: '材料力学试卷3',
    difficulty: 3
  },
  {
    id: 'mat-p3-tf-07',
    qtype: 'truefalse',
    stem: '薄壁圆筒与实心圆轴扭转时应力大小均与半径成正比。',
    answer: '错',
    kp: ['mat-kp-02'],
    source: '材料力学试卷3',
    difficulty: 2
  },
  {
    id: 'mat-p3-tf-08',
    qtype: 'truefalse',
    stem: '压杆稳定校核时工作安全因数 $n$ 应小于 $n_{st}$ 才满足稳定性。',
    answer: '错',
    kp: ['mat-kp-08'],
    source: '材料力学试卷3',
    difficulty: 2
  },
  {
    id: 'mat-p3-tf-09',
    qtype: 'truefalse',
    stem: '绘制刚架弯矩图时，约定把弯矩图画在杆件弯曲凹入的一侧。',
    answer: '对',
    kp: ['mat-kp-04'],
    source: '材料力学试卷3',
    difficulty: 1
  },
  {
    id: 'mat-p3-tf-10',
    qtype: 'truefalse',
    stem: '矩形截面梁上下边缘各点切应力等于零。',
    answer: '错',
    kp: ['mat-kp-04'],
    source: '材料力学试卷3',
    difficulty: 2
  },

  // 试卷四
  {
    id: 'mat-p4-tf-01',
    qtype: 'truefalse',
    stem: '应力不超过屈服极限时，应力与应变成正比，称为胡克定律。',
    answer: '错',
    kp: ['mat-kp-01'],
    source: '材料力学试卷4',
    difficulty: 2
  },
  {
    id: 'mat-p4-tf-02',
    qtype: 'truefalse',
    stem: '集中力处剪力图突变，弯矩图斜率也会改变。',
    answer: '对',
    kp: ['mat-kp-04'],
    source: '材料力学试卷4',
    difficulty: 2
  },
  {
    id: 'mat-p4-tf-03',
    qtype: 'truefalse',
    stem: '杆件轴向拉力作用下轴向伸长，横截面没有变化。',
    answer: '错',
    kp: ['mat-kp-01'],
    source: '材料力学试卷4',
    difficulty: 2
  },
  {
    id: 'mat-p4-tf-04',
    qtype: 'truefalse',
    stem: '安全系数在任何情况下都大于 1。',
    answer: '对',
    kp: ['mat-kp-01'],
    source: '材料力学试卷4',
    difficulty: 1
  },
  {
    id: 'mat-p4-tf-05',
    qtype: 'truefalse',
    stem: '弯扭组合变形危险点处于二向应力状态。',
    answer: '对',
    kp: ['mat-kp-06'],
    source: '材料力学试卷4',
    difficulty: 2
  },
  {
    id: 'mat-p4-single-01',
    qtype: 'single',
    stem: '应力圆 a、b、c 表示的应力状态分别为（ ）。',
    options: [
      '二向、纯剪切、三向',
      '单向拉、单向压、三向',
      '单向压、纯剪切、单向拉',
      '单向拉、单向压、纯剪切'
    ],
    answer: 'C',
    kp: ['mat-kp-06'],
    source: '材料力学试卷4',
    difficulty: 2
  },
  {
    id: 'mat-p4-single-02',
    qtype: 'single',
    stem: '变截面圆轴截面扭矩正确的是（ ）。',
    options: ['$T_1=3\\,\\mathrm{N\\cdot m}$，$T_2=T_3=2\\,\\mathrm{N\\cdot m}$', '$T_1=3\\,\\mathrm{N\\cdot m}$，$T_2=T_3=-2\\,\\mathrm{N\\cdot m}$', '$T_1=-3\\,\\mathrm{N\\cdot m}$，$T_2=T_3=-2\\,\\mathrm{N\\cdot m}$', '$T_1=3\\,\\mathrm{N\\cdot m}$，$T_2=T_3=5\\,\\mathrm{N\\cdot m}$'],
    answer: 'B',
    kp: ['mat-kp-02'],
    source: '材料力学试卷4',
    difficulty: 2
  },
  {
    id: 'mat-p4-single-03',
    qtype: 'single',
    stem: '关于强度理论的论述正确的是（ ）。',
    options: [
      '需模拟实际应力状态逐一试验',
      '无需试验只需破坏假说',
      '需简单试验无需破坏假说',
      '假设破坏共同原因并需简单试验'
    ],
    answer: 'D',
    kp: ['mat-kp-06'],
    source: '材料力学试卷4',
    difficulty: 2
  },
  {
    id: 'mat-p4-single-04',
    qtype: 'single',
    stem: '悬臂变截面梁用积分法求位移，最合适的条件是（ ）。',
    options: ['不能用积分法', '一段两个边界条件', '两段两个边界加两个光滑连续', '两段一个边界一个连续'],
    answer: 'C',
    kp: ['mat-kp-04'],
    source: '材料力学试卷4',
    difficulty: 3
  },
  {
    id: 'mat-p4-single-05',
    qtype: 'single',
    stem: '关于主平面正确的是（ ）。',
    options: ['主平面上切应力为零', '主平面上切应力最大', '主平面上正应力为零', '主平面上正应力最大'],
    answer: 'A',
    kp: ['mat-kp-06'],
    source: '材料力学试卷4',
    difficulty: 1
  },
  {
    id: 'mat-p4-single-06',
    qtype: 'single',
    stem: '决定杆件柔度的因素是（ ）。',
    options: ['约束、截面形状、弹性模量', '约束、杆长、弹性模量', '约束、杆长、截面形状', '长度、截面形状、弹性模量'],
    answer: 'B',
    kp: ['mat-kp-08'],
    source: '材料力学试卷4',
    difficulty: 2
  },

  // 试卷五
  {
    id: 'mat-p5-single-01',
    qtype: 'single',
    stem: '三种材料应力应变曲线制成同尺寸拉杆，正确叙述是（ ）。',
    options: ['1 强度最好，3 刚度最好，2 塑性最好', '2 强度最好，1 刚度最好，1 塑性最好', '3 强度最好，3 刚度最好，1 塑性最好', '1 强度最好，2 刚度最好，2 塑性最好'],
    answer: 'D',
    kp: ['mat-kp-01'],
    source: '材料力学试卷5',
    difficulty: 2
  },
  {
    id: 'mat-p5-single-02',
    qtype: 'single',
    stem: '铸铁梁截面积一定时最合理截面是（ ）。',
    options: ['中性轴靠受拉侧', '中性轴居中', 'T 形头朝上', '空心圆管'],
    answer: 'C',
    kp: ['mat-kp-04'],
    source: '材料力学试卷5',
    difficulty: 2
  },
  {
    id: 'mat-p5-single-06',
    qtype: 'single',
    stem: '用第三强度理论校核圆轴弯扭组合时，强度条件为（ ）。',
    options: [
      '$\\sqrt{\\left(\\dfrac{M}{W_z}\\right)^2+4\\left(\\dfrac{T}{W_p}\\right)^2}\\leq[\\sigma]$',
      '$\\sqrt{\\left(\\dfrac{M}{W_z}\\right)^2+3\\left(\\dfrac{T}{W_p}\\right)^2}\\leq[\\sigma]$',
      '$\\sqrt{\\left(\\dfrac{M}{W_z}\\right)^2+\\left(\\dfrac{T}{W_p}\\right)^2}\\leq[\\sigma]$',
      '$\\dfrac{M}{W_z}+\\dfrac{T}{W_p}\\leq[\\sigma]$'
    ],
    answer: 'A',
    kp: ['mat-kp-06'],
    source: '材料力学试卷5',
    difficulty: 3
  },
  {
    id: 'mat-p5-single-08',
    qtype: 'single',
    stem: '欧拉公式适用条件是临界应力不超过材料的（ ）。',
    options: ['$\\sigma_s$', '$\\sigma_b$', '$\\sigma_p$', '$\\sigma_{-1}$'],
    answer: 'C',
    kp: ['mat-kp-08'],
    source: '材料力学试卷5',
    difficulty: 2
  },
  {
    id: 'mat-p5-tf-01',
    qtype: 'truefalse',
    stem: '图形对其形心轴的惯性矩不可能为负数。',
    answer: '对',
    kp: ['mat-kp-03'],
    source: '材料力学试卷5',
    difficulty: 1
  },
  {
    id: 'mat-p5-tf-02',
    qtype: 'truefalse',
    stem: '设计良好的构件应有较高的强度、刚度和稳定性。',
    answer: '对',
    kp: ['mat-kp-01'],
    source: '材料力学试卷5',
    difficulty: 1
  },
  {
    id: 'mat-p5-tf-10',
    qtype: 'truefalse',
    stem: '其它条件相同时，压杆越长临界压力越小。',
    answer: '对',
    kp: ['mat-kp-08'],
    source: '材料力学试卷5',
    difficulty: 1
  },

  {
    id: 'mat-p5-single-03',
    qtype: 'single',
    stem: '图示梁弯曲变形后挠曲线的大致形状是（ ）（需结合原图）。',
    options: ['对称下挠', '一端翘起', 'S 形', '保持直线'],
    answer: 'D',
    kp: ['mat-kp-04'],
    source: '材料力学试卷5',
    difficulty: 2
  },
  {
    id: 'mat-p5-single-04',
    qtype: 'single',
    stem: '矩形截面梁弯曲时，横截面上的应力沿高度方向（ ）。',
    options: [
      '$\\sigma$、$\\tau$ 都按线性分布',
      '$\\sigma$、$\\tau$ 都按二次分布',
      '$\\sigma$ 线性、$\\tau$ 二次',
      '$\\sigma$ 二次、$\\tau$ 线性'
    ],
    answer: 'C',
    kp: ['mat-kp-04'],
    source: '材料力学试卷5',
    difficulty: 2
  },
  {
    id: 'mat-p5-single-05',
    qtype: 'single',
    stem: '受拉平板在中间开槽改为上侧开槽后，横截面内最大应力（ ）。',
    options: ['相同', '变大', '变小', '不一定'],
    answer: 'B',
    kp: ['mat-kp-01'],
    source: '材料力学试卷5',
    difficulty: 2
  },
  {
    id: 'mat-p5-single-07',
    qtype: 'single',
    stem: '圆筒形储气罐表面可近似为二向应力状态，则（ ）。',
    options: ['$\\sigma_t=\\sigma_m$', '$\\sigma_t>\\sigma_m$', '$\\sigma_t<\\sigma_m$', '不确定'],
    answer: 'B',
    kp: ['mat-kp-06'],
    source: '材料力学试卷5',
    difficulty: 2
  },
  {
    id: 'mat-p5-single-09',
    qtype: 'single',
    stem: '横截面等其它条件相同，压杆采用（ ）截面稳定性最好（需结合原图）。',
    options: ['开口薄壁', '实心圆', '工字形', '正方形'],
    answer: 'D',
    kp: ['mat-kp-08'],
    source: '材料力学试卷5',
    difficulty: 2
  },
  {
    id: 'mat-p5-single-10',
    qtype: 'single',
    stem: '四根压杆材料、截面相同，纸面内失稳先后次序为（ ）。',
    options: ['(a),(b),(c),(d)', '(d),(a),(b),(c)', '(c),(d),(a),(b)', '(b),(c),(d),(a)'],
    answer: 'A',
    kp: ['mat-kp-08'],
    source: '材料力学试卷5',
    difficulty: 2
  },
  {
    id: 'mat-p5-tf-03',
    qtype: 'truefalse',
    stem: '等截面直杆轴向拉压时各截面上只有正应力，剪应力为零。',
    answer: '错',
    kp: ['mat-kp-01'],
    source: '材料力学试卷5',
    difficulty: 1
  },
  {
    id: 'mat-p5-tf-04',
    qtype: 'truefalse',
    stem: '脆性材料构件的安全系数一般大于塑性材料，主要是因为脆性材料强度较低。',
    answer: '错',
    kp: ['mat-kp-01'],
    source: '材料力学试卷5',
    difficulty: 2
  },
  {
    id: 'mat-p5-tf-05',
    qtype: 'truefalse',
    stem: '铸铁试件拉伸试验不会出现局部变形阶段。',
    answer: '对',
    kp: ['mat-kp-01'],
    source: '材料力学试卷5',
    difficulty: 1
  },
  {
    id: 'mat-p5-tf-06',
    qtype: 'truefalse',
    stem: '切应力互等定理对非纯剪切状态也成立。',
    answer: '对',
    kp: ['mat-kp-06'],
    source: '材料力学试卷5',
    difficulty: 2
  },
  {
    id: 'mat-p5-tf-07',
    qtype: 'truefalse',
    stem: '提高梁弯曲强度的措施可用来提高弯曲刚度；反之亦然。',
    answer: '错',
    kp: ['mat-kp-04'],
    source: '材料力学试卷5',
    difficulty: 2
  },
  {
    id: 'mat-p5-tf-08',
    qtype: 'truefalse',
    stem: '自重下安全的悬臂梁，尺寸同比例放大后仍安全。',
    answer: '错',
    kp: ['mat-kp-04'],
    source: '材料力学试卷5',
    difficulty: 2
  },
  {
    id: 'mat-p5-tf-09',
    qtype: 'truefalse',
    stem: '按第三强度理论校核安全的构件，按第四强度理论校核必定也安全。',
    answer: '对',
    kp: ['mat-kp-06'],
    source: '材料力学试卷5',
    difficulty: 2
  },

  {
    id: 'mat-p3-fill-01',
    qtype: 'fill',
    stem: '工程上通常按______的大小把材料分为塑性材料和脆性材料。',
    answer: '伸长率',
    kp: ['mat-kp-01'],
    source: '材料力学试卷3',
    difficulty: 1
  },
  {
    id: 'mat-p3-fill-02',
    qtype: 'fill',
    stem: '按第三强度理论，图示单元体（图 1）的相当应力为______ $\mathrm{MPa}$。',
    answer: '80',
    kp: ['mat-kp-06'],
    source: '材料力学试卷3',
    difficulty: 2
  },
  {
    id: 'mat-p3-fill-03',
    qtype: 'fill',
    stem: '厂房“鱼腹梁”依据材料力学中的______概念设计。',
    answer: '等强度梁',
    kp: ['mat-kp-04'],
    source: '材料力学试卷3',
    difficulty: 2
  },
  {
    id: 'mat-p3-fill-04',
    qtype: 'fill',
    stem: '压杆 1 一端固定一端自由，压杆 2 两端固定，材料截面长度相同，临界力之比 $F_{cr1}:F_{cr2}=$______。',
    answer: '1/16',
    analysis: '亦写 $\\dfrac{1}{16}$。',
    kp: ['mat-kp-08'],
    source: '材料力学试卷3',
    difficulty: 3
  },
  {
    id: 'mat-p3-fill-05',
    qtype: 'fill',
    stem: '插销剪切面面积为______，挤压面面积为______（用文字或公式作答）。',
    answer: ['$\\pi d h/4$', '$\\pi(D^2-d^2)/4$'],
    analysis: '参考答案：剪切 $\\pi d h/4$，挤压 $\\pi(D^2-d^2)/4$。',
    kp: ['mat-kp-01'],
    source: '材料力学试卷3',
    difficulty: 3
  },
  {
    id: 'mat-p3-fill-06',
    qtype: 'fill',
    stem: '跨度 $2l$ 悬臂梁抗拉刚度 $EA$，C 处受 $3F$，自由端水平位移为______。',
    answer: '-6Fl/EA',
    kp: ['mat-kp-01'],
    source: '材料力学试卷3',
    difficulty: 3
  },
  {
    id: 'mat-p3-fill-07',
    qtype: 'fill',
    stem: '悬臂梁 $EIw^{\\prime\\prime}=$______；固定端边界条件（挠度与转角）为______。',
    answer: ['$-Fx$', '固定端挠度、转角均为零'],
    kp: ['mat-kp-04'],
    source: '材料力学试卷3',
    difficulty: 3
  },
  {
    id: 'mat-p3-fill-08',
    qtype: 'fill',
    stem: '铸铁 T 形截面悬臂梁为提高弯曲强度，T 字头合理朝向为______。',
    answer: '朝下',
    kp: ['mat-kp-04'],
    source: '材料力学试卷3',
    difficulty: 2
  },

  {
    id: 'mat-p2-fill-01',
    qtype: 'fill',
    stem: '四个铆钉连接钢板，$d=16\mathrm{mm}$，$\\delta=10\mathrm{mm}$，$F=90\mathrm{kN}$，铆钉切应力 $\\tau=$______，挤压应力 $\\sigma_{bs}=$______。',
    answer: ['112MPa', '142MPa'],
    kp: ['mat-kp-01'],
    source: '材料力学试卷2',
    difficulty: 3
  },
  {
    id: 'mat-p2-fill-02',
    qtype: 'fill',
    stem: '变形固体的三个基本假设是______、______、______。',
    answer: ['连续性', '均匀性', '各向同性'],
    kp: ['mat-kp-01'],
    source: '材料力学试卷2',
    difficulty: 1
  },
  {
    id: 'mat-p2-fill-03',
    qtype: 'fill',
    stem: '圆形的形心主惯性轴有______条。',
    answer: '无数多',
    kp: ['mat-kp-03'],
    source: '材料力学试卷2',
    difficulty: 2
  },
  {
    id: 'mat-p2-fill-04',
    qtype: 'fill',
    stem: '已知 $w_C=-\\dfrac{Fa^3}{3EI}$，$\\theta_C=-\\dfrac{Fa^2}{2EI}$，则 B 截面挠度 $w_B=$______，转角 $\\theta_B=$______。',
    answer: ['$-\\dfrac{Fa^2(3l-a)}{6EI}$', '$-\\dfrac{Fa^2}{2EI}$'],
    kp: ['mat-kp-04'],
    source: '材料力学试卷2',
    difficulty: 3
  },
  {
    id: 'mat-p2-fill-05',
    qtype: 'fill',
    stem: '圆截面杆扭转时，最大拉应力发生在______截面；最大切应力发生在______截面。',
    answer: ['45°斜', '横'],
    kp: ['mat-kp-02'],
    source: '材料力学试卷2',
    difficulty: 2
  },

  {
    id: 'mat-p5-fill-01',
    qtype: 'fill',
    stem: '材料的力学性能指在外力作用下表现出的变形和______等方面的性能。',
    answer: '破坏',
    kp: ['mat-kp-01'],
    source: '材料力学试卷5',
    difficulty: 1
  },
  {
    id: 'mat-p5-fill-02',
    qtype: 'fill',
    stem: '衡量材料塑性的两个重要指标是伸长率和______。',
    answer: '断面收缩率',
    kp: ['mat-kp-01'],
    source: '材料力学试卷5',
    difficulty: 1
  },
  {
    id: 'mat-p5-fill-03',
    qtype: 'fill',
    stem: '图示铆钉计算挤压强度时，挤压面积 $A_{bs}=$______。',
    answer: 'td',
    analysis: '即 $t\\times d$（板厚乘直径）。',
    kp: ['mat-kp-01'],
    source: '材料力学试卷5',
    difficulty: 2
  },
  {
    id: 'mat-p5-fill-04',
    qtype: 'fill',
    stem: '阶梯轴 AB 段与 BC 段最大切应力之比 $\\tau_{\max1}/\\tau_{\max2}=$______。',
    answer: '3/8',
    kp: ['mat-kp-02'],
    source: '材料力学试卷5',
    difficulty: 2
  },
  {
    id: 'mat-p5-fill-05',
    qtype: 'fill',
    stem: '用积分法求图示梁挠曲线时将引入______个积分常数。',
    answer: '4',
    kp: ['mat-kp-04'],
    source: '材料力学试卷5',
    difficulty: 2
  },
  {
    id: 'mat-p5-fill-06',
    qtype: 'fill',
    stem: '第二强度理论又称______。',
    answer: '最大拉应变理论',
    kp: ['mat-kp-06'],
    source: '材料力学试卷5',
    difficulty: 2
  },
  {
    id: 'mat-p5-fill-07',
    qtype: 'fill',
    stem: '图示单元体第 3 主应力 $\\sigma_3=$______ $\mathrm{MPa}$。',
    answer: '-50',
    kp: ['mat-kp-06'],
    source: '材料力学试卷5',
    difficulty: 2
  },
  {
    id: 'mat-p5-fill-08',
    qtype: 'fill',
    stem: '图示曲杆 AB 段为______组合变形。',
    answer: '拉弯',
    kp: ['mat-kp-04'],
    source: '材料力学试卷5',
    difficulty: 2
  },
  {
    id: 'mat-p5-fill-09',
    qtype: 'fill',
    stem: 'T 型截面梁高 $12\mathrm{cm}$，上缘 A、下缘 B 弯曲正应力分别为 $-5\mathrm{MPa}$、$10\mathrm{MPa}$，中性轴距下缘 $\\delta=$______ $\mathrm{cm}$。',
    answer: '4',
    kp: ['mat-kp-04'],
    source: '材料力学试卷5',
    difficulty: 3
  }
]