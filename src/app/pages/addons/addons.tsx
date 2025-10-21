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
    <div className="flex justify-center w-full">
      <div className="w-[450px] flex flex-col h-full py-6">
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
        <div className="mt-auto flex justify-between">
          <button className="h-[48px] text-dark-grey" onClick={onClickBack}>
            Go Back
          </button>
          <div className="flex justify-end">
            <button className="h-[48px] w-[123px] bg-denim rounded-lg text-white" onClick={onClickNext}>
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
