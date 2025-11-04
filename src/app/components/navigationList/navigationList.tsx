import { useStepStore } from '@/app/store/useStepStore'
import StepLabel from '../stepLabel/stepLabel'

export default function NavigationList() {
  const currentStep = useStepStore((state) => state.currentStep)

  return (
    <div className="w-full md:w-[274px] h-[172px] md:h-[568px] flex justify-center md:flex-col md:justify-start items-center bg-[url('/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat md:bg-[url('/bg-sidebar-desktop.svg')] bg-no-repeat gap-4 py-8 px-6">
      <StepLabel step="YOUR_INFO" currentStep={currentStep} />
      <StepLabel step="SELECT_PLAN" currentStep={currentStep} />
      <StepLabel step="ADD_ONS" currentStep={currentStep} />
      <StepLabel step="SUMMARY" currentStep={currentStep} />
    </div>
  )
}
