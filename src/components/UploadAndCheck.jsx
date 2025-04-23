import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import uploadImg from '../assets/upload_area.png'
import { Download, Loader2, ScanEye } from 'lucide-react'
import EyeResult from './EyeResult'
import toast from 'react-hot-toast'
import { PDFDownloadLink } from '@react-pdf/renderer'
import Pdf from '../utils/Pdf'

const UploadAndCheck = () => {

    const [image, setImage] = useState(null)
    const [leftEye, setLeftEye] = useState(null)
    const [rightEye, setRightEye] = useState(null)
    const [singleEye, setSingleEye] = useState(null)
    const [loading, setLoading] = useState(false)
    const [eyeCount, setEyeCount] = useState("two_eyes")
    
    const navigate = useNavigate()
  
    async function fetchResult(){
        if(!image){
            return toast.error("Please upload an image")
        }
        const formData = new FormData()
        formData.append('file', image)
        setLoading(true)
        try{
            const response = await axios.post(`${import.meta.env.VITE_ROBOFLOW_API_URL}?api_key=${import.meta.env.VITE_ROBOFLOW_API_KEY}`, formData)
    
            //Displaying error message if no predictions are found
            if(response.data.predictions.length === 0){
                return toast.error("Please upload a clear image")
            }
    
            //For single eye prediction, finding the highest confidence prediction
            if(eyeCount === "single_eye"){
                setSingleEye(response.data.predictions.reduce((prev, curr) =>
                    prev.confidence > curr.confidence ? prev : curr
                ))
                return;
            }
    
            let tempLeftEye = []
            let tempRightEye = []
            let centrePoint = Math.floor(response.data.image.width / 2)
    
            //Splitting predictions into left and right eye based on x coordinate
            for (let i = 0; i < response.data.predictions.length; i++) {
                if(response.data.predictions[i].x >= centrePoint){
                    tempLeftEye.push(response.data.predictions[i])
                } 
                else{
                    tempRightEye.push(response.data.predictions[i])
                }
            }
    
            //Finding highest confidence prediction for left and right eye
            if(tempLeftEye.length > 0){
                setLeftEye(tempLeftEye.reduce((prev, curr) =>
                    prev.confidence > curr.confidence ? prev : curr
                ))
            }
            if(tempRightEye.length > 0){
                setRightEye(tempRightEye.reduce((prev, curr) =>
                    prev.confidence > curr.confidence ? prev : curr
                ))
            }
        }
        catch(err){
            navigate('/500')
            console.log(`Error in Fetch Result - ${err.message}`)
        }
        finally{
            setLoading(false)
        }
    }
  
    useEffect(() =>{
      setLeftEye(null)
      setRightEye(null)
      setSingleEye(null)
    }, [image, eyeCount])

  return (
    <div>
        <div className='mt-10 sm:mx-10 flex sm:items-stcart items-center flex-col'>
            <h1 className='font-bold uppercase text-3xl'>UPLOAD NOW 👇</h1>
            <label htmlFor="image" className='my-4 mx-7 w-[200px]'>
                <img src={image ? URL.createObjectURL(image) : uploadImg} alt="UploadImg" className=' rounded cursor-pointer' />
                <input onChange={(event) =>setImage(event.target.files[0])} type="file" name="image" className='hidden' accept='image/*' id="image" />
            </label>

            <div className='flex items-center justify-center gap-x-5 my-2'>
                <div className='flex items-center gap-x-2'>
                    <input className='cursor-pointer' checked={eyeCount === "two_eyes"} onChange={() =>setEyeCount("two_eyes")} type="radio" name="two_eyes" id="two_eyes" />
                    <label htmlFor="two_eyes" className='font-medium text-lg cursor-pointer'>Both Eyes</label>
                </div>
                <div className='flex items-center gap-x-2'>
                    <input className='cursor-pointer' checked={eyeCount === "single_eye"} onChange={() =>setEyeCount("single_eye")} type="radio" name="single_eye" id="single_eye" />
                    <label htmlFor="single_eye" className='font-medium text-lg cursor-pointer'>Single Eye</label>
                </div>
            </div>

            <div className='w-full sm:w-[260px] mt-3'>
                <button onClick={() =>fetchResult()} disabled={loading} className='py-2 disabled:cursor-not-allowed disabled:bg-black/70 w-full rounded font-medium text-lg bg-black text-white hover:bg-black/70 cursor-pointer flex items-center justify-center gap-x-2 duration-200'>{loading ? <><Loader2 className='animate-spin size-5' />Loading...</> : <><ScanEye />Check</>}</button>
            </div>
        </div>

        {(leftEye || rightEye || singleEye) && 
            <div className='mt-12 mb-20 sm:mx-10'>
                <h1 className='text-center font-bold text-4xl'>🧬Diagnosis Result</h1>
                {(eyeCount === "single_eye" && singleEye) ?
                    <div className='flex items-center justify-center mt-6 w-full'>
                        <EyeResult eye={"Eye"} diagnosis={singleEye?.class} accuracy={singleEye?.confidence} />
                    </div> :
                    <div className='flex lg:flex-row gap-y-7 gap-x-20 flex-col justify-center w-full mt-6'>
                        {leftEye && <EyeResult eye={"Left Eye"} diagnosis={leftEye?.class} accuracy={leftEye?.confidence} />}
                        {rightEye && <EyeResult eye={"Right Eye"} diagnosis={rightEye?.class} accuracy={rightEye?.confidence} />}
                    </div>
                }

                <div className='flex items-center justify-center mt-10'>
                    <PDFDownloadLink document={<Pdf leftEye={leftEye} rightEye={rightEye} image={image} singleEye={singleEye} />} fileName='EyeReport.pdf'>
                        <button className='flex hover:bg-black/70 duration-200 cursor-pointer items-center justify-center gap-x-2 text-white bg-black py-2 px-5 rounded font-medium'>Download<Download className='size-5' /></button>
                    </PDFDownloadLink>
                </div>
            </div>
        }
    </div>
  )
}

export default UploadAndCheck