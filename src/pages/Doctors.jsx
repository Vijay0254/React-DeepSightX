import React from 'react'
import { hospitalData } from '../utils/data'
import { useParams } from 'react-router-dom'
import EachDoctor from '../components/EachDoctor'

const Doctors = () => {

    const { hospitalname } = useParams()

    const doctorsData = hospitalData.find((element) =>element.hospital_name == hospitalname.split("%20")[0]).doctors

  return (
    <section className='mt-5 mx-2 sm:p-5'>
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-8 items-center">
        <div>          
          <h1 className="text-5xl font-serif font-extrabold text-gray-900 leading-tight mb-4">
            Expert <span className='text-primary'>Doctors</span> <br className="hidden md:block" />
            Backed by Innovation
          </h1>

          <p className="text-gray-700 text-lg mb-6">
            Our AI-enhanced system connects you with top-tier specialists from India's leading hospitals.
            Whether it’s eye care or neurological treatment, find the right doctor for your needs here.
          </p>

          <p className='border-l-4 pl-3 py-2 mt-5 text-primary font-semibold uppercase tracking-wide text-lg mb-3 sm:text-xl sm:ml-5 border-primary'>Your Care Team, At a Glance</p>

        </div>

        <div className="sm:flex hidden justify-center">
          <img src="https://cdn-icons-png.flaticon.com/512/3871/3871387.png" alt="Doctor Illustration" className="sm:w-72 w-44 h-auto object-contain"/>
        </div>
      </div>

      <div className='flex flex-wrap lg:gap-12 gap-8 justify-center mt-5 sm:mt-10 '>
        {doctorsData.map((element) =>(
          <EachDoctor key={element.doctor_id} element={element} />
        ))}
      </div>
    </section>
  )
}

export default Doctors