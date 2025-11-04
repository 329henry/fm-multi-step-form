'use client'

import YourInfo from '@pages/yourInfo/yourInfo'
import PlanSelect from '@pages/planSelect/planSelect'
import NavigationList from '@components/navigationList/navigationList'
import Addons from '@pages/addons/addons'
import Summary from '@pages/summary/summary'
import { useStepStore } from '@store/useStepStore'

export default function Home() {
  const currentStep = useStepStore((state) => state.currentStep)

  return (
    <div className="flex md:items-center justify-center bg-slate-100 min-h-screen">
      <div className="relative flex flex-col md:flex-row bg-light-purple md:bg-white md:p-4 rounded-lg w-full md:w-[940px] md:h-[600px]">
        <NavigationList />
        <div className="-mt-9 z-10 flex flex-col mx-auto items-center py-6 px-4 md:flex-1 bg-white rounded-lg md:max-w-[450px] md:h-full md:justify-start md:bg-transparent md:mt-0">
          {currentStep === 'YOUR_INFO' && <YourInfo />}
          {currentStep === 'SELECT_PLAN' && <PlanSelect />}
          {currentStep === 'ADD_ONS' && <Addons />}
          {currentStep === 'SUMMARY' && <Summary />}
        </div>
      </div>
    </div>
  )
}
