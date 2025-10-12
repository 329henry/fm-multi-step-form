'use client'

import YourInfo from '@pages/yourInfo/yourInfo'
import PlanSelect from '@pages/planSelect/planSelect'
import NavigationList from './components/navigationList/navigationList'
import Addons from '@pages/addons/addons'
import Summary from '@pages/summary/summary'
import { useStepStore } from '@store/useStepStore'

export default function Home() {
  const currentStep = useStepStore((state) => state.currentStep)

  return (
    <div className="flex items-center justify-center bg-slate-100 min-h-screen">
      <div className="flex bg-white p-4 rounded-lg w-[940px] h-[600px]">
        <NavigationList />
        {currentStep === 'YOUR_INFO' && <YourInfo />}
        {currentStep === 'SELECT_PLAN' && <PlanSelect />}
        {currentStep === 'ADD_ONS' && <Addons />}
        {currentStep === 'SUMMARY' && <Summary />}
      </div>
    </div>
  )
}
