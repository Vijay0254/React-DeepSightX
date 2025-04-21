import React from 'react'

const EachDoctor = ({ element }) => {
  return (
    <div className='flex w-[300px] sm:w-[250px] p-4 relative flex-col gap-y-5 rounded-lg border border-slate-400'>
        <div className='flex items-center justify-center flex-1'>
            <img src={element.doctor_image} alt="DoctorImage" />
        </div>
        <div>
            <h1 className='font-bold text-lg'>{element.doctor_name}</h1>
            <p className='font-medium text-gray-500'>{element.doctor_speciality}</p>
        </div>
    </div>
  )
}

export default EachDoctor