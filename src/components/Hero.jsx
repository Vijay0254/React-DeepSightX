import React from 'react'
import heroImg from '../assets/hero.png'

const Hero = () => {
  return (
    <section className='flex gap-x-10 lg:flex-row gap-y-7 flex-col flex-between items-center justify-between mt-7 sm:mt-9 mb-10 md:mb-14'>
        <div className='font-bold lg:w-[700px]'>
            <h3 className='text-primary text-lg sm:text-xl pb-4'>Welcome to the eye care destination</h3>
            <div className='sm:text-[44px] text-[32px] font-serif leading-12 sm:leading-16'>
                Early Detection of <span className='text-primary'>Retinal</span> and <span className='text-primary'>Neurodegenerative</span> Diseases Using AI-Powered Imaging
            </div>
        </div>
        <div>
            <img className='rounded-br-3xl w-[calc(100vw-10px)] lg:w-full rounded-tl-3xl' src={heroImg} alt="heroImg" />
        </div>
    </section>
  )
}

export default Hero