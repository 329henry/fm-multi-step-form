import StepLabel from '../stepLabel/stepLabel'

export default function NavigationList() {
  return (
    <div className="w-[274px] h-[568px] flex flex-col justify-start items-center bg-[url(/bg-sidebar-desktop.svg)] gap-4 py-8 px-6">
      <StepLabel step="YOUR_INFO" currentStep="YOUR_INFO" />
      <StepLabel step="SELECT_PLAN" currentStep="YOUR_INFO" />
      <StepLabel step="ADD_ONS" currentStep="YOUR_INFO" />
      <StepLabel step="SUMMARY" currentStep="YOUR_INFO" />
    </div>
  )
}
