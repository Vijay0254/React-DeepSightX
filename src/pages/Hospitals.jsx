import React from 'react'
import { hospitalData } from '../utils/data'
import EachHospital from '../components/EachHospital'
import { useState } from 'react'
import Pagination from '../components/Pagination'
import { useParams } from 'react-router-dom'

const Hospitals = () => {
  
  const { pageNumber } = useParams()

  const postsPerPage = 4
  const lastPostIndex = pageNumber * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage


  return (
    <section className='sm:mt-9 sm:ml-10 mt-7 mx-2'>
      <div>
        <h1 className='font-bold sm:text-3xl text-[29px]'>Find the Right Hospital for Your Care🏥</h1>
        <p className='font-medium pt-4 indent-6 text-justify sm:px-7'>Below is a list of hospitals tailored for your needs. View their contact info, websites, and explore the doctors associated with each by clicking the Doctors button.</p>
      </div>

      <div className='flex flex-col gap-8 mt-10 sm:mx-7'>
        {hospitalData.slice(firstPostIndex, lastPostIndex).map((element) =>(
          <EachHospital key={element.hospital_id} element={element} />
        ))}

        <Pagination totalPosts={hospitalData.length} postsPerPage={postsPerPage} pageNumber={pageNumber} />
      </div>
    </section>
  )
}

export default Hospitals