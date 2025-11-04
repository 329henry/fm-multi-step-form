'use client'

import PlanButton from '@/app/components/planButton/planButton'
import Title from '@/app/components/title/title'
import { useStepStore } from '@/app/store/useStepStore'
import { usePlanDataStore } from '@/app/store/usePlanDataStore'
import { PlanType } from '@/app/constants/planDetails'

export default function PlanSelect() {
  const plan = usePlanDataStore((state) => state.plan)
  const isYearly = usePlanDataStore((state) => state.isYearly)
  const setPlan = usePlanDataStore((state) => state.setPlan)
  const setStep = useStepStore((state) => state.setStep)
  const setIsYearly = usePlanDataStore((state) => state.setIsYearly)

  const onClickPlan = (selectedPlan: PlanType) => {
    setPlan(selectedPlan)
  }

  const onClickNext = () => {
    if (!plan) {
      return
    }
    setStep('ADD_ONS')
  }

  const onClickBack = () => {
    setStep('YOUR_INFO')
  }

  const onChangeIsYearly = () => {
    setIsYearly(!isYearly)
  }

  return (
    <div className="w-full h-full">
      <div className="h-full flex justify-between flex-col">
        <div className="flex flex-col">
          <Title name="SELECT_PLAN" />
          <div className="flex justify-between mt-12 mb-4 gap-4">
            <PlanButton
              plan={PlanType.ARCADE}
              isSelected={plan === PlanType.ARCADE}
              isYearly={isYearly}
              onClickPlan={onClickPlan}
            />
            <PlanButton
              plan={PlanType.ADVANCED}
              isSelected={plan === PlanType.ADVANCED}
              isYearly={isYearly}
              onClickPlan={onClickPlan}
            />
            <PlanButton
              plan={PlanType.PRO}
              isSelected={plan === PlanType.PRO}
              isYearly={isYearly}
              onClickPlan={onClickPlan}
            />
          </div>
          <div className="h-[48px] flex bg-light-grey">
            <div className="m-auto flex items-center gap-4">
              <div className={`text-sm font-bold ${!isYearly ? 'text-denim' : 'text-dark-grey'}`}>Monthly</div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isYearly}
                  onChange={() => onChangeIsYearly()}
                />
                <div className="w-11 h-6 bg-purple rounded-full peer peer-focus:ring-4 peer-focus:ring-light-blue peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-grey after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-denim"></div>
              </label>
              <div className={`text-sm font-bold ${isYearly ? 'text-denim' : 'text-dark-grey'}`}>Yearly</div>
            </div>
          </div>
        </div>
        <div className="w-full md:static">
          <div className="h-[72px] bg-white fixed left-0 right-0 bottom-0 flex justify-between items-center px-4 md:px-0 md:static md:h-auto md:bg-transparent">
            <button className="h-[48px] text-dark-grey" onClick={onClickBack}>
              Go Back
            </button>
            <button
              className={`h-[48px] w-[123px] ${plan ? 'bg-denim' : 'bg-grey'} rounded-lg text-white`}
              onClick={onClickNext}
              disabled={!plan}
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
