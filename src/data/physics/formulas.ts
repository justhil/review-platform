import type { Formula } from '../../types'

export const physicsFormulas: Formula[] = [
  {
    id: 'phy-f-01',
    latex: 'v = \\frac{dx}{dt}, \\quad a = \\frac{dv}{dt}',
    chapter: '01',
    mnemonic: '速度是位移对时间的导数，加速度是速度对时间的导数',
    kp: ['phy-kp-01']
  },
  {
    id: 'phy-f-02',
    latex: 'a_n = \\frac{v^2}{R}, \\quad a = \\sqrt{a_t^2 + a_n^2}',
    chapter: '01',
    mnemonic: '法向加速度指向圆心，总加速度是切向和法向的矢量和',
    kp: ['phy-kp-01']
  },
  {
    id: 'phy-f-03',
    latex: 'F = ma',
    chapter: '02',
    mnemonic: '牛顿第二定律',
    kp: ['phy-kp-02']
  },
  {
    id: 'phy-f-04',
    latex: 'p = mv, \\quad \\sum F = \\frac{dp}{dt}',
    chapter: '03',
    mnemonic: '动量定理',
    kp: ['phy-kp-03']
  },
  {
    id: 'phy-f-05',
    latex: 'E_k = \\frac{1}{2}mv^2, \\quad W = \\Delta E_k',
    chapter: '03',
    mnemonic: '动能定理：合外力做功等于动能增量',
    kp: ['phy-kp-03']
  },
  {
    id: 'phy-f-06',
    latex: 'J = \\int r^2 dm',
    chapter: '04',
    mnemonic: '转动惯量定义',
    kp: ['phy-kp-04']
  },
  {
    id: 'phy-f-07',
    latex: 'J_{杆端} = \\frac{1}{3}ML^2, \\quad J_{杆中} = \\frac{1}{12}ML^2',
    chapter: '04',
    mnemonic: '均匀细杆的转动惯量',
    kp: ['phy-kp-04']
  },
  {
    id: 'phy-f-08',
    latex: 'x = A\\cos(\\omega t + \\varphi)',
    chapter: '05',
    mnemonic: '简谐振动方程',
    kp: ['phy-kp-05']
  },
  {
    id: 'phy-f-09',
    latex: '\\omega = \\sqrt{\\frac{k}{m}}, \\quad T = 2\\pi\\sqrt{\\frac{m}{k}}',
    chapter: '05',
    mnemonic: '弹簧振子的角频率和周期',
    kp: ['phy-kp-05']
  },
  {
    id: 'phy-f-10',
    latex: 'y = A\\cos(\\omega t - kx + \\varphi), \\quad u = \\frac{\\omega}{k}',
    chapter: '06',
    mnemonic: '波动方程，波速等于角频率除以波数',
    kp: ['phy-kp-06']
  },
  {
    id: 'phy-f-11',
    latex: 'pV = nRT',
    chapter: '07',
    mnemonic: '理想气体状态方程',
    kp: ['phy-kp-07']
  },
  {
    id: 'phy-f-12',
    latex: '\\bar{\\varepsilon} = \\frac{i}{2}kT',
    chapter: '07',
    mnemonic: '能量均分定理',
    kp: ['phy-kp-07']
  },
  {
    id: 'phy-f-13',
    latex: 'Q = \\Delta U + W',
    chapter: '08',
    mnemonic: '热力学第一定律',
    kp: ['phy-kp-08']
  },
  {
    id: 'phy-f-14',
    latex: 'W = \\int pdV',
    chapter: '08',
    mnemonic: '气体对外做功',
    kp: ['phy-kp-08']
  },
  {
    id: 'phy-f-15',
    latex: '\\oint_S \\vec{E} \\cdot d\\vec{S} = \\frac{\\sum q}{\\varepsilon_0}',
    chapter: '09',
    mnemonic: '高斯定理',
    kp: ['phy-kp-09']
  },
  {
    id: 'phy-f-16',
    latex: 'E = \\frac{q}{4\\pi\\varepsilon_0 r^2}',
    chapter: '09',
    mnemonic: '点电荷电场强度',
    kp: ['phy-kp-09']
  },
  {
    id: 'phy-f-17',
    latex: 'B = \\frac{\\mu_0 I}{2\\pi r}',
    chapter: '11',
    mnemonic: '无限长直导线的磁场',
    kp: ['phy-kp-11']
  },
  {
    id: 'phy-f-18',
    latex: 'F = BIL\\sin\\theta',
    chapter: '11',
    mnemonic: '安培力公式',
    kp: ['phy-kp-11']
  },
  {
    id: 'phy-f-19',
    latex: '\\Delta x = \\frac{D\\lambda}{d}',
    chapter: '14',
    mnemonic: '双缝干涉条纹间距',
    kp: ['phy-kp-14']
  },
  {
    id: 'phy-f-20',
    latex: 'd\\sin\\theta = k\\lambda',
    chapter: '14',
    mnemonic: '双缝干涉明纹条件',
    kp: ['phy-kp-14']
  }
]
