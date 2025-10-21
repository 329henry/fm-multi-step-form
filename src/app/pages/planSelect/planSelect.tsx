'use client'

import PlanButton from '@/app/components/planButton/planButton'
import Title from '@/app/components/title/title'
import { useStepStore } from '@/app/store/useStepStore'
import { usePlanDataStore } from '@/app/store/usePlanDataStore'
import { PlanType } from '@/app/constants/planDetails'

export default function PlanSelect() {
  const isYearly = usePlanDataStore((state) => state.isYearly)
  const setPlan = usePlanDataStore((state) => state.setPlan)
  const setStep = useStepStore((state) => state.setStep)
  const setIsYearly = usePlanDataStore((state) => state.setIsYearly)

  const onClickPlan = (selectedPlan: PlanType) => {
    setPlan(selectedPlan)
  }

  const onClickNext = () => {
    setStep('ADD_ONS')
  }

  const onClickBack = () => {
    setStep('YOUR_INFO')
  }

  const onChangeIsYearly = () => {
    setIsYearly(!isYearly)
  }

  return (
    <div className="flex justify-center w-full">
      <div className="w-[450px] flex flex-col h-full py-6">
        <Title name="SELECT_PLAN" />
        <div className="flex justify-between mt-12 mb-4">
          <PlanButton plan={PlanType.ARCADE} isYearly={isYearly} onClickPlan={onClickPlan} />
          <PlanButton plan={PlanType.ADVANCED} isYearly={isYearly} onClickPlan={onClickPlan} />
          <PlanButton plan={PlanType.PRO} isYearly={isYearly} onClickPlan={onClickPlan} />
        </div>
        <div className="h-[48px] flex bg-light-grey">
          <div className="m-auto flex items-center gap-4">
            <div className={`text-sm font-bold ${!isYearly ? 'text-denim' : 'text-dark-grey'}`}>Monthly</div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={isYearly} onChange={() => onChangeIsYearly()} />
              <div className="w-11 h-6 bg-purple rounded-full peer peer-focus:ring-4 peer-focus:ring-light-blue peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-grey after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-denim"></div>
            </label>
            <div className={`text-sm font-bold ${isYearly ? 'text-denim' : 'text-dark-grey'}`}>Yearly</div>
          </div>
        </div>
        <div className="mt-auto flex justify-between">
          <button className="h-[48px] text-dark-grey" onClick={onClickBack}>
            Go Back
          </button>
          <div className="flex justify-end">
            <button className="h-[48px] w-[123px] bg-denim rounded-lg text-white" onClick={onClickNext}>
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
