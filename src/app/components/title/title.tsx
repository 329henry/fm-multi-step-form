import { TStep } from '@components/stepLabel/stepLabel'

const titleDetails = {
  YOUR_INFO: { label: 'Personal info', detail: 'Please provide your name, email address, and phone number.' },
  SELECT_PLAN: { label: 'Select your plan', detail: 'You have the option of monthly or yearly billing.' },
  ADD_ONS: { label: 'Pick add-ons', detail: 'Add-ons help enhance your gaming experience.' },
  SUMMARY: { label: 'Finishing up', detail: 'Double-check everything looks OK before confirming.' }
}

export default function Title({ name }: { name: TStep }) {
  return (
    <div className="gap-4">
      <h1 className="text-denim font-bold text-3xl">{`${titleDetails[name]?.label}`}</h1>
      <p className="text-dark-grey mt-4">{`${titleDetails[name]?.detail}`}</p>
    </div>
  )
}
