import Image from 'next/image'
import YourInfo from '@pages/yourInfo/yourInfo'
import PlanSelect from './pages/planSelect/planSelect'

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-slate-100 min-h-screen">
      <div className="flex bg-white p-4 rounded-lg w-[940px] h-[600px]">
        <Image className="" src="/bg-sidebar-desktop.svg" alt="Desktop banner" width={274} height={568} priority />
        {/* <YourInfo /> */}
        <PlanSelect />
      </div>
    </div>
  )
}
