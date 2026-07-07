import type { Formula } from '../../types'

export const materialMechanicsFormulas: Formula[] = [
  {
    id: 'mat-f-01',
    latex: '\\sigma = \\frac{F_N}{A},\\quad \\Delta l = \\frac{F_N l}{EA}',
    chapter: '01',
    mnemonic: '拉压正应力与胡克定律',
    usage: '轴力杆应力与变形',
    kp: ['mat-kp-01']
  },
  {
    id: 'mat-f-02',
    latex: '\\tau_{\\max} = \\frac{T}{W_t}',
    chapter: '02',
    mnemonic: '扭转最大切应力',
    usage: '圆轴扭转强度',
    kp: ['mat-kp-02']
  },
  {
    id: 'mat-f-03',
    latex: '\\varphi^{\\prime} = \\frac{T}{G I_p}',
    chapter: '02',
    mnemonic: '单位长度扭转角',
    usage: '扭转刚度',
    kp: ['mat-kp-02']
  },
  {
    id: 'mat-f-04',
    latex: '\\sigma_{\\max} = \\frac{M}{W_z}',
    chapter: '04',
    mnemonic: '弯曲正应力',
    usage: '梁弯曲强度校核',
    kp: ['mat-kp-04']
  },
  {
    id: 'mat-f-05',
    latex: '\\sigma_{r3} = \\sigma_1 - \\sigma_3',
    chapter: '06',
    mnemonic: '第三强度理论',
    usage: '塑性材料危险点强度',
    kp: ['mat-kp-06']
  },
  {
    id: 'mat-f-06',
    latex: 'F_{cr} = \\frac{\\pi^2 E I}{(\\mu l)^2}',
    chapter: '08',
    mnemonic: '欧拉临界力',
    usage: '细长压杆稳定',
    kp: ['mat-kp-08']
  }
]