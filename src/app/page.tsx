import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-slate-100 min-h-screen">
      <div className="bg-white p-4 rounded-lg w-[940px] h-[600px]">
        <Image className="" src="/bg-sidebar-desktop.svg" alt="Desktop banner" width={274} height={568} priority />
      </div>
    </div>
  )
}
