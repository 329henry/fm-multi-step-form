'use client'

export type TStep = 'YOUR_INFO' | 'SELECT_PLAN' | 'ADD_ONS' | 'SUMMARY'

export const stepInfo = {
  YOUR_INFO: { label: 'Your Info', number: 1 },
  SELECT_PLAN: { label: 'Select PLan', number: 2 },
  ADD_ONS: { label: 'Add Ons', number: 3 },
  SUMMARY: { label: 'Summary', number: 4 }
}

export default function StepLabel({ step, currentStep }: { step: TStep; currentStep: TStep }) {
  const isActive = step === currentStep

  return (
    <div className="w-auto md:w-full max-w-[228px] flex items-center md:gap-6">
      <div
        className={`w-8 h-8 md:w-10 md:h-10 rounded-full font-bold flex items-center justify-center ${isActive ? 'bg-light-blue text-denim border-denim' : 'border border-white bg-transparent text-white'}`}
      >
        {stepInfo[step].number}
      </div>
      <div className="hidden md:flex md:flex-col">
        <div className="text-sm text-light-blue tracking-widest">{`STEP ${stepInfo[step].number}`}</div>
        <div className="text-white font-bold text-lg">{`${stepInfo[step].label}`}</div>
      </div>
    </div>
  )
}
