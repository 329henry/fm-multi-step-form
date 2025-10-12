import { useStepStore } from '@/app/store/useStepStore'
import StepLabel from '../stepLabel/stepLabel'

export default function NavigationList() {
  const currentStep = useStepStore((state) => state.currentStep)

  return (
    <div className="w-[274px] h-[568px] flex flex-col justify-start items-center bg-[url(/bg-sidebar-desktop.svg)] gap-4 py-8 px-6">
      <StepLabel step="YOUR_INFO" currentStep={currentStep} />
      <StepLabel step="SELECT_PLAN" currentStep={currentStep} />
      <StepLabel step="ADD_ONS" currentStep={currentStep} />
      <StepLabel step="SUMMARY" currentStep={currentStep} />
    </div>
  )
}
