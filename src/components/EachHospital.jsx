import React from 'react'
import { Phone, Link, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const EachHospital = ({ element }) => {

    const navigate = useNavigate()

  return (
        <div className='flex relative flex-col sm:flex-row gap-x-7 rounded-lg shadow-xl bg-white'>
            <div className='flex items-center pl-3 pt-5 sm:pt-0 sm:w-[300px]'>
                <img className='w-full' src={element.hospital_logo} alt="HospitalLogo" />
            </div>
            
            <div className='p-6 flex-1 space-y-3'>
                <h1 className='sm:text-3xl flex-1 text-2xl font-serif mt-[-2px] font-bold pb-3 sm:pb-4'>{element.hospital_name}</h1>
                <div className='flex items-center ml-2 gap-x-2'>
                    <Phone />
                    <p className='font-medium'>{element.hospital_phoneno}</p>
                </div>
                <div className='flex items-center ml-2 gap-x-2'>
                    <Link />
                    <a href={element.hospital_link} target='__blank' className='font-medium underline cursor-pointer truncate text-blue-500'>{element.hospital_link}</a>
                </div>

                <div className='flex mt-6 justify-end items-end'>
                    <button onClick={() =>navigate(`/doctors/${element.hospital_name}`)} className='rounded px-4 py-2 font-medium text-lg bg-black text-white hover:bg-black/70 cursor-pointer flex items-center justify-center gap-x-2 duration-200'>Doctors <ArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default EachHospital