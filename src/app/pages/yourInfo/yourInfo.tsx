'use client'

import { useForm } from 'react-hook-form'
import Title from '@/app/components/title/title'
import { useStepStore } from '@/app/store/useStepStore'
import { useYourInfoStore } from '@/app/store/useYourInfoStore'
import { useShallow } from 'zustand/react/shallow'
import { useEffect } from 'react'

type Input = {
  name: string
  email: string
  phone: string
}

export default function YourInfo() {
  const infoData = useYourInfoStore(
    useShallow((state) => ({
      name: state.name,
      email: state.email,
      phone: state.phone
    }))
  )
  const setStep = useStepStore((state) => state.setStep)
  const setInfoData = useYourInfoStore((state) => state.setInfoData)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Input>({
    defaultValues: {
      name: infoData.name ?? '',
      email: infoData.email ?? '',
      phone: infoData.phone ?? ''
    }
  })

  const onSubmit = (data: Input) => {
    setInfoData({
      name: data.name,
      email: data.email,
      phone: data.phone
    })
    setStep('SELECT_PLAN')
  }

  useEffect(() => {
    reset({
      name: infoData.name,
      email: infoData.email,
      phone: infoData.phone
    })
  }, [infoData, reset])

  return (
    <div className="flex justify-center w-full">
      <div className="w-[450px] flex flex-col h-full py-6">
        <Title name="YOUR_INFO" />
        <form className="flex flex-col justify-between gap-4 mt-6 flex-grow" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <label htmlFor="name" className="text-denim">
                  Name
                </label>
                {errors.name?.type === 'required' && (
                  <p className="text-red text-sm mt-1" role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <input
                id="name"
                type="text"
                placeholder="e.g. Stephen King"
                className={`border rounded-md p-2 text-black ${errors.name ? 'border-red' : 'border-grey'}`}
                {...register('name', { required: 'Please fill in your name' })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <label htmlFor="email" className="text-denim">
                  Email Address
                </label>
                {errors.email?.type === 'required' && (
                  <p className="text-red text-sm mt-1" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <input
                id="email"
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                className={`border rounded-md p-2 text-black ${errors.email ? 'border-red' : 'border-grey'}`}
                {...register('email', { required: 'Please fill in a valid email address' })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <label htmlFor="phone" className="text-denim">
                  Phone Number
                </label>
                {errors.phone?.type === 'required' && (
                  <p className="text-red text-sm mt-1" role="alert">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <input
                id="phone"
                type="tel"
                placeholder="e.g. +1 234 567 890"
                className={`border rounded-md p-2 text-black ${errors.email ? 'border-red' : 'border-grey'}`}
                {...register('phone', { required: 'Please fill in your phone number' })}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="h-[48px] w-[123px] bg-denim rounded-lg text-white">
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
