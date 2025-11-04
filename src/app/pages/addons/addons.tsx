'use client'

import AddonItem from '@/app/components/addonItem/addonItem'
import Title from '@/app/components/title/title'
import { AddonType } from '@/app/constants/addonData'
import { usePlanDataStore } from '@/app/store/usePlanDataStore'
import { useStepStore } from '@/app/store/useStepStore'

export default function Addons() {
  const setStep = useStepStore((state) => state.setStep)
  const addonList = usePlanDataStore((state) => state.addonList)
  const isYearly = usePlanDataStore((state) => state.isYearly)
  const setAddonList = usePlanDataStore((state) => state.setAddonList)
  const isAddonActive = (item: AddonType) => {
    return addonList.includes(item)
  }

  const onClickNext = () => {
    setStep('SUMMARY')
  }

  const onClickBack = () => {
    setStep('SELECT_PLAN')
  }

  const onChange = (addons: AddonType) => {
    if (addonList.includes(addons)) {
      setAddonList(addonList.filter((item) => item !== addons))
    } else {
      setAddonList([...addonList, addons])
    }
  }

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div>
        <Title name="ADD_ONS" />
        <div className="flex flex-col gap-4 mt-8">
          <AddonItem
            item={AddonType.ONLINE_SERVICE}
            isYearly={isYearly}
            isActive={isAddonActive(AddonType.ONLINE_SERVICE)}
            onChange={onChange}
          />
          <AddonItem
            item={AddonType.LARGE_STORAGE}
            isYearly={isYearly}
            isActive={isAddonActive(AddonType.LARGE_STORAGE)}
            onChange={onChange}
          />
          <AddonItem
            item={AddonType.CUSTOMIZABLE_PROFILE}
            isYearly={isYearly}
            isActive={isAddonActive(AddonType.CUSTOMIZABLE_PROFILE)}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="w-full md:static">
        <div className="h-[72px] bg-white fixed left-0 right-0 bottom-0 flex justify-between items-center px-4 md:px-0 md:static md:h-auto md:bg-transparent">
          <button className="h-[48px] text-dark-grey" onClick={onClickBack}>
            Go Back
          </button>
          <button className="h-[48px] w-[123px] bg-denim rounded-lg text-white" onClick={onClickNext}>
            Next Step
          </button>
        </div>
      </div>
    </div>
  )
}
