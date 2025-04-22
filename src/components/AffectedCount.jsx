import React from 'react'
import { diseaseCount } from '../utils/data'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const AffectedCount = () => {

    const { ref, inView } = useInView({ triggerOnce: false })

  return (
    <section ref={ref} className='my-10 mt-16 sm:mt-20'>
        {/* Title */}
        <div className='space-y-2'>
            <h1 className='text-4xl font-bold font-serif'>India's Eye & Neurological Disease Burden</h1>
            <p className='text-justify sm:pl-[50px] text-[22px] text-gray-800'>Millions of people in India suffer from vision-related conditions and neurological disorders. Early detection and treatment can help prevent severe complications and improve quality of life. Here are the estimated affected numbers,</p>
        </div>

        {/* Count */}
        <div className='grid lg:grid-cols-6 place-items-center sm:grid-cols-3 grid-cols-2 mt-7 px-5 flex-wrap gap-y-7 sm:gap-y-8 gap-x-16'>
            {diseaseCount.map((element) =>(
                <div key={element.id} className='flex flex-col lg:gap-y-1 items-center'>
                    <div className='flex text-primary text-[40px] sm:text-5xl lg:text-6xl font-bold items-center'>
                        {inView && <CountUp start={0} end={element.count} delay={0} duration={5} />}
                        <p>{element.system}</p>
                        <span className='pl-0.5'>+</span>
                    </div>
                    <h1 className='sm:text-xl mt-[-7px] sm:mt-0 font-bold'>{element.name}</h1>
                </div>
            ))}
        </div>
    </section>
  )
}

export default AffectedCount