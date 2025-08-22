interface IPlan {
  name: string
  price: string
}

export default function PlanButton({ plan, onClick }: { plan: IPlan; onClick: (plan: string) => void }) {
  return (
    <button
      className="w-full bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
      onClick={() => onClick(plan.name)}
    >
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold">{plan.name}</span>
        <span className="text-sm text-gray-500">{plan.price}</span>
      </div>
    </button>
  )
}
