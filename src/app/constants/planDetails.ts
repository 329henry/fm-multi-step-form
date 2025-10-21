export enum PlanType {
  ARCADE = 'ARCADE',
  ADVANCED = 'ADVANCED',
  PRO = 'PRO'
}

export const planDetails = {
  ARCADE: { name: 'Arcade', monthlyPrice: 9, yearlyPrice: 90 },
  ADVANCED: { name: 'Advanced', monthlyPrice: 12, yearlyPrice: 120 },
  PRO: { name: 'Pro', monthlyPrice: 15, yearlyPrice: 150 }
}
