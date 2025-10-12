'use client'

import { useForm } from 'react-hook-form'
import Title from '@/app/components/title/title'
import { useStepStore } from '@/app/store/useStepStore'

type Input = {
  name: string
  email: string
  phone: string
}

export default function YourInfo() {
  const {
    register,
    handleSubmit
    // formState: { errors }
  } = useForm<Input>()

  const setStep = useStepStore((state) => state.setStep)

  const onClickNext = () => {
    setStep('SELECT_PLAN')
  }

  return (
    <div className="flex justify-center w-full">
      <div className="w-[450px] flex flex-col h-full py-6">
        <Title name="YOUR_INFO" />
        <form
          className="flex flex-col justify-between gap-4 mt-6 flex-grow"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-denim">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="e.g. Stephen King"
                className="border border-grey rounded-md p-2 text-black"
                {...register('name', { required: true })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-denim">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                className="border border-grey rounded-md p-2 text-black"
                {...register('email', { required: true })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-denim">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="e.g. +1 234 567 890"
                className="border border-grey rounded-md p-2 text-black"
                {...register('phone', { required: true })}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="h-[48px] w-[123px] bg-denim rounded-lg text-white" onClick={onClickNext}>
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
