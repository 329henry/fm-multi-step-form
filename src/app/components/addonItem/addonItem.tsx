'use client'

import { addonData, AddonType } from '@/app/constants/addonData'

export default function AddonItem({
  item,
  isYearly,
  isActive,
  onChange
}: {
  item: AddonType
  isYearly: boolean
  isActive: boolean
  onChange: (addons: AddonType) => void
}) {
  const onClick = () => {
    onChange(item)
  }

  return (
    <div
      className={`w-full h-[81px] border  rounded-lg flex items-center justify-between px-4 py-3 ${isActive ? 'bg-light-grey border-purple' : 'bg-white border-light-gray'}`}
    >
      <div className="w-full flex justify-between items-center gap-4" onClick={onClick}>
        <div className="flex items-center gap-4">
          <input type="checkbox" className="w-5 h-5 accent-purple" checked={isActive} readOnly />
          <div className="flex flex-col">
            <div className="text-denim font-bold">{`${addonData[item].title}`}</div>
            <div className="text-sm text-dark-grey">{`${addonData[item].description}`}</div>
          </div>
        </div>
        <div className="text-sm text-purple font-bold">
          {isYearly ? `+${addonData[item].yearly}/yr` : `+${addonData[item].monthly}/mo`}
        </div>
      </div>
    </div>
  )
}
