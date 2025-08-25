'use client'

const addonData = {
  ONLINE_SERVICE: {
    title: 'Online service',
    description: 'Access to multiplayer games',
    monthly: 1,
    yearly: 10
  },
  LARGE_STORAGE: {
    title: 'Large storage',
    description: 'Extra 1TB of cloud save',
    monthly: 2,
    yearly: 20
  },
  CUSTOMIZABLE_PROFILE: {
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    monthly: 2,
    yearly: 20
  }
}

export default function AddonItem({ item, isYearly }: { item: keyof typeof addonData; isYearly: boolean }) {
  return (
    <div className="w-[450px] h-[81px] border border-light-gray rounded-lg flex items-center justify-between px-4 py-3">
      <div className="w-full flex justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <input type="checkbox" className="w-5 h-5 accent-purple" />
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
