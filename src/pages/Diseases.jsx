import React, { useState } from 'react'
import UploadAndCheck from '../components/UploadAndCheck'
import LiveCheck from '../components/LiveCheck'
import { UploadCloud, Video } from "lucide-react"

const Diseases = () => {

  const [changeSection, setChangeSection] = useState(false)

  return (
    <section className='sm:mt-9 sm:ml-10 mt-7 mx-2'>
      <div>
        <h1 className='font-bold text-3xl '>Check Your Eyes Instantly with AI 🧠👁️</h1>
        <p className='font-medium pt-4 indent-6 text-justify sm:px-7'>Upload a clear image of your face, and let DeepSightX analyze each eye individually using advanced AI. Our system detects visible signs of eye-related conditions like crossed eyes, normal alignment, and more — returning results for both your left and right eyes, each with a confidence score to indicate prediction accuracy.</p>
        <p className='font-medium pt-3 indent-6 text-justify sm:pt-2 sm:px-7'>This feature is designed to assist in early detection and guide you toward better eye care decisions. Whether you're curious about your vision or supporting clinical follow-ups, our tool is fast, secure, and easy to use.</p>
        <p className='border-l-4 pl-3 py-2 text-primary font-bold mt-5 sm:mt-7 sm:ml-7 text-xl border-primary'>Just upload. Let AI do the rest.</p>
      </div>

      <div className="w-full sm:max-w-xl sm:mx-auto mt-10 sm:mt-12 sm:px-4">
        <h1 className="text-3xl font-semibold text-center mb-5 text-gray-800">Detection Type</h1>

        <div className="flex justify-center space-x-6 mb-5">
          <button onClick={() => setChangeSection(false)} className={`text-sm flex cursor-pointer items-center gap-2 px-3 sm:px-5 py-2 sm:text-lg font-medium border-b-2 transition ${!changeSection ? " border-b-black": "text-gray-600 border-b-transparent"}`}>
            <UploadCloud className='size-[20px]' />
            Upload & Check
          </button>

          <button onClick={() => setChangeSection(true)} className={`text-sm flex cursor-pointer items-center gap-2 px-3 sm:px-5 py-2 sm:text-lg font-medium border-b-2 transition ${changeSection ? " border-b-black": "text-gray-600 border-b-transparent"}`}>
            <Video className='size-[20px]' />
            Live Check
          </button>
        </div>
      </div>

      {!changeSection ? 
        <UploadAndCheck /> :
        <LiveCheck />
      }

    </section>
  )
}

export default Diseases