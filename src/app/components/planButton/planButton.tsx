'use client'

import Image from 'next/image'
import { useState } from 'react'
import { planDetails } from '@constants/planDetails'
import { PlanType } from '@constants/planDetails'

export default function PlanButton({
  plan,
  isYearly,
  onClickPlan
}: {
  plan: PlanType
  isYearly: boolean
  onClickPlan: (plan: PlanType) => void
}) {
  const [isActive, setIsActive] = useState(false)

  const onClick = () => {
    setIsActive(!isActive)
    onClickPlan(plan)
  }

  return (
    <div
      className={`w-[130px] h-[160px] flex flex-col items-start justify-between border border-grey rounded-lg p-4 cursor-pointer hover:border-purple hover:bg-light-grey ${isActive ? 'border-purple bg-light-grey' : 'border-grey bg-white'}`}
      onClick={onClick}
    >
      <Image
        src={`/icon-${planDetails[plan].name.toLowerCase()}.svg`}
        alt={`${planDetails[plan].name} icon`}
        width={40}
        height={40}
        className="mr-2"
      />
      <div className="flex flex-col items-start">
        <div className="text-lg text-denim font-bold">{planDetails[plan].name}</div>
        <div className="text-sm text-dark-grey">
          {isYearly ? `$${planDetails[plan].yearlyPrice}/yr` : `$${planDetails[plan].monthlyPrice}/mo`}
        </div>
        {isYearly && <div className="text-xs text-purple">2 months free</div>}
      </div>
    </div>
  )
}
