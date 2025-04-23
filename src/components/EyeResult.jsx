import React from 'react'
import { diseaseDescription } from '../utils/data'

const EyeResult = ({ eye, diagnosis, accuracy }) => {

  const barColor = Math.round(accuracy * 100) >= 70 ? '#22c55e' : Math.round(accuracy * 100) >= 40 ? '#facc15' : '#ef4444'
  const desc = diseaseDescription.find((element) =>element.name == diagnosis)

  return (
    <div className='border lg:w-[50%] shadow-xl bg-white border-slate-300 rounded-2xl p-7'>
      <h1 className='uppercase text-center font-bold text-3xl font-mono'>{eye}</h1>
      <h2 className='text-primary mt-1 text-center font-bold text-2xl'>Detected: {diagnosis.split("_").join(" ")}</h2>
      <div className='space-y-2 my-4'>
        <p className='text-lg font-medium'>Accuracy: <span className='text-primary pl-1'>{Math.round(accuracy * 100)}%</span></p>
        <div className='w-full h-3.5 bg-slate-300 rounded-full relative'>
          <p style={{width: `${Math.round(accuracy * 100)}%`, backgroundColor: barColor}} className={`absolute left-0 rounded-full top-0 bottom-0`}></p>
        </div>
      </div>

      <div className='shadow-xl border border-slate-300 mt-5 p-6 rounded-xl shadow-slate-300'>
        <h4 className='font-medium pb-1 text-lg'>Description:</h4>
        <p className='indent-6 text-justify'>{desc?.description}</p>
      </div>
    </div>
  )
}

export default EyeResult