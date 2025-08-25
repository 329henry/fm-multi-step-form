import AddonItem from '@/app/components/addonItem/addonItem'
import Title from '@/app/components/title/title'

export default function Addons() {
  return (
    <div className="flex justify-center w-full">
      <div className="w-[450px] flex flex-col h-full py-6">
        <Title name="ADD_ONS" />
        <div className="flex flex-col gap-4 mt-8">
          <AddonItem item="ONLINE_SERVICE" isYearly={false} />
          <AddonItem item="LARGE_STORAGE" isYearly={false} />
          <AddonItem item="CUSTOMIZABLE_PROFILE" isYearly={false} />
        </div>
        <div className="mt-auto flex justify-between">
          <button className="h-[48px] text-dark-grey">Go Back</button>
          <div className="flex justify-end">
            <button className="h-[48px] w-[123px] bg-denim rounded-lg text-white">Next Step</button>
          </div>
        </div>
      </div>
    </div>
  )
}
