'use client'

export type TStep = 'YOUR_INFO' | 'SELECT_PLAN' | 'ADD_ONS' | 'SUMMARY'

const stepInfo = {
  YOUR_INFO: { label: 'Your Info', number: 1 },
  SELECT_PLAN: { label: 'Select PLan', number: 2 },
  ADD_ONS: { label: 'Add Ons', number: 3 },
  SUMMARY: { label: 'Summary', number: 4 }
}

export default function StepLabel({ step, currentStep }: { step: TStep; currentStep: TStep }) {
  const isActive = step === currentStep

  return (
    // <div className="w-[274px] h-[568px] bg-no-repeat bg-sidebar-mobile md:bg-sidebar-desktop bg-left-top p-8 rounded-lg flex md:flex-col gap-4 md:gap-8">
    <div className="flex items-center gap-4 md:gap-6">
      <div
        className={`w-8 h-8 md:w-10 md:h-10 rounded-full border border-white text-white font-bold flex items-center justify-center ${isActive ? 'bg-light-blue text-denim border-denim' : 'bg-transparent'}`}
      >
        {stepInfo[step].number}
      </div>
      <div className="hidden md:flex flex-col">
        <div className="text-sm text-light-blue tracking-widest">{`STEP ${stepInfo[step].number}`}</div>
        <div className="text-white font-bold text-lg">{`${stepInfo[step].label}`}</div>
      </div>
    </div>

    // </div>
  )
}
