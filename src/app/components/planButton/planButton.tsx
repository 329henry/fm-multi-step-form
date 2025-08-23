'use client'

import Image from 'next/image'

interface IPlan {
  name: string
  price: string
}

export default function PlanButton({ plan }: { plan: IPlan }) {
  return (
    <div
      className="w-[130px] h-[160px] flex flex-col items-start justify-between bg-white rounded-lg p-4 hover:border-purple selected:border-purple"
      onClick={() => alert(`${plan.name} plan selected!`)}
    >
      <Image
        src={`/icon-${plan.name.toLowerCase()}.svg`}
        alt={`${plan.name} icon`}
        width={40}
        height={40}
        className="mr-2"
      />
      <div className="flex flex-col items-start">
        <div className="text-lg text-denim font-bold">{plan.name}</div>
        <div className="text-sm text-grey">{plan.price}</div>
      </div>
    </div>
  )
}
