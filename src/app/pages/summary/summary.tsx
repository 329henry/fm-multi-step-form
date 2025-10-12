'use client'

import { useState } from 'react'
import Image from 'next/image'
import Title from '@/app/components/title/title'
import { useStepStore } from '@/app/store/useStepStore'
import { usePlanDataStore } from '@/app/store/usePlanDataStore'
import { planDetails } from '@constants/planDetails'
import { addonData } from '@/app/constants/addonData'

export default function Summary() {
  const [isConfirm, setIsConfirm] = useState(false)

  return (
    <div className="flex justify-center w-full">
      <div className="w-[450px] flex flex-col justify-center h-full py-6">
        {isConfirm ? <Confirmation /> : <PlanSummary setIsConfirm={setIsConfirm} />}
      </div>
    </div>
  )
}

function PlanSummary({ setIsConfirm }: { setIsConfirm: (value: boolean) => void }) {
  const setStep = useStepStore((state) => state.setStep)
  const plan = usePlanDataStore((state) => state.plan)
  const isYearly = usePlanDataStore((state) => state.isYearly)
  const addonList = usePlanDataStore((state) => state.addonList)

  const onClickNext = () => {
    setIsConfirm(true)
  }

  const onClickBack = (isChangePlan?: boolean) => {
    if (isChangePlan) {
      setStep('SELECT_PLAN')
    } else {
      setStep('ADD_ONS')
    }
  }

  return (
    <>
      <Title name="SUMMARY" />
      <div className="flex flex-col gap-4 mt-8">
        <div className="w-[450px] min-h-[81px] bg-light-grey rounded-lg flex flex-col justify-center px-4 py-3">
          {plan ? (
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-denim font-bold">
                    {plan && planDetails?.[plan]?.name}
                    {isYearly ? '(Yearly)' : '(Monthly)'}
                  </div>
                  <div
                    className="text-sm text-dark-grey underline cursor-pointer hover:text-purple"
                    onClick={() => onClickBack(true)}
                  >
                    Change
                  </div>
                </div>

                <div className="text-sm text-denim font-bold text-[16px]">
                  {isYearly ? planDetails?.[plan]?.yearlyPrice : planDetails?.[plan]?.monthlyPrice}
                </div>
              </div>
              {addonList.length > 0 ? (
                <div className="border-t border-grey mt-3 pt-3 flex flex-col gap-2">
                  {addonList.map((item) => (
                    <div key={item} className="flex justify-between py-1">
                      <div className="text-sm text-dark-grey">{addonData?.[item]?.title}</div>
                      <div className="text-sm text-dark-grey ">
                        {isYearly ? `+${addonData?.[item]?.yearly}/yr` : ` +${addonData?.[item]?.monthly}/mo`}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-auto flex justify-between">
        <button className="h-[48px] text-dark-grey" onClick={() => onClickBack()}>
          Go Back
        </button>
        <div className="flex justify-end">
          <button className="h-[48px] w-[123px] bg-purple rounded-lg text-white" onClick={onClickNext}>
            Confirm
          </button>
        </div>
      </div>
    </>
  )
}

function Confirmation() {
  return (
    <div className="flex justify-center align-center w-full">
      <div className="w-[450px] flex flex-col h-full py-6 items-center text-center">
        <Image src="/icon-thank-you.svg" alt="Thank You" width={80} height={80} className="mb-6" />
        <div className="text-denim font-bold text-2xl mb-4">Thank you!</div>
        <div className="text-dark-grey">
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
          please feel free to email us at support@loremgaming.com.
        </div>
      </div>
    </div>
  )
}
