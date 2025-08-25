import Title from '@/app/components/title/title'

export default function Summary() {
  return (
    <div className="flex justify-center w-full">
      <div className="w-[450px] flex flex-col h-full py-6">
        <Title name="SUMMARY" />
        <div className="flex flex-col gap-4 mt-8">
          <div className="w-[450px] h-[81px] bg-light-grey rounded-lg flex flex-col justify-center px-4 py-3">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-denim font-bold">Arcade (Monthly)</div>
                <div className="text-sm text-dark-grey underline cursor-pointer hover:text-purple">Change</div>
              </div>
              <div className="text-sm text-denim font-bold">$9/mo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
