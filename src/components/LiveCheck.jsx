import React, { useRef, useEffect, useState } from "react"
import Webcam from "react-webcam"
import axios from "axios"

const LiveCheck = () => {
    const webcamRef = useRef(null)
    const canvasRef = useRef(null)
    const [loading, setLoading] = useState(false)

    async function sendFrameToRoboflow(imageSrc){
        return new Promise((resolve, reject) =>{
            const img = new Image()
            img.src = imageSrc
            img.crossOrigin = "anonymous"

            img.onload = async () =>{
                const tempCanvas = document.createElement("canvas")
                const ctx = tempCanvas.getContext("2d")
                tempCanvas.width = img.width
                tempCanvas.height = img.height

                ctx.drawImage(img, 0, 0, img.width, img.height)
                const imageData = ctx.getImageData(0, 0, img.width, img.height)
                const data = imageData.data

                // Convert RGB to BGR
                for (let i = 0; i < data.length; i += 4){
                    const r = data[i]
                    data[i] = data[i + 2]      // Red <- Blue
                    data[i + 2] = r            // Blue <- Red
                }

                ctx.putImageData(imageData, 0, 0)

                tempCanvas.toBlob(async (blob) =>{
                    const formData = new FormData()
                    formData.append("file", blob)

                    try{
                        const response = await axios.post(`${import.meta.env.VITE_ROBOFLOW_API_URL}?api_key=${import.meta.env.VITE_ROBOFLOW_API_KEY}`, formData)
                        resolve(response.data)
                    } 
                    catch (err){
                        console.error("Error sending to Roboflow:", err.message)
                        reject(err)
                    }
                }, "image/jpeg")
            }

            img.onerror = (e) =>{
                reject("Failed to load image")
            }
        })
    }

    async function drawPredictions(predictions){
        const ctx = canvasRef.current?.getContext("2d")
        ctx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

        predictions?.forEach((prediction) =>{
            const { x, y, width, height, class: label, confidence } = prediction

            ctx.strokeStyle = "green"
            ctx.lineWidth = 3
            ctx.strokeRect(x - width / 2, y - height / 2, width, height)

            ctx.font = "18px Arial"
            ctx.fillStyle = "green"
            ctx.fillText(`${label} (${Math.round(confidence * 100)}%)`, x - width / 2, y - height / 2 - 10)
        })
    }

    useEffect(() =>{
        const interval = setInterval(async () =>{
            if(webcamRef.current && webcamRef.current.getScreenshot && !loading){
                setLoading(true)
                const imageSrc = webcamRef.current.getScreenshot()
                if(imageSrc){
                    try{
                        const result = await sendFrameToRoboflow(imageSrc)
                        drawPredictions(result?.predictions || [])
                    } 
                    catch (error){
                        console.error("Detection error:", error.message)
                    }
                }
                setLoading(false)
            }
        }, 300) // Every second

        return () => clearInterval(interval)
    }, [loading])

    return (
        <section id="live-check" className="px-6 pt-5 pb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Live Eye Check 👁️</h2>
            <p className="text-gray-600 mb-6">Enable camera and let AI analyze your eyes live.</p>

            <div className="flex justify-center">
                <div className="relative">
                    <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" width={640} height={480} className="rounded shadow-lg"/>
                    <canvas ref={canvasRef} width={640} height={480} className="absolute top-0 left-0 rounded" style={{ position: "absolute", top: 0, left: 0 }}/>
                </div>
            </div>
        </section>
    );
};

export default LiveCheck;
