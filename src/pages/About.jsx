import React from 'react'
import CnnImg from '../assets/Cnn.jpg'

const About = () => {
  return (
<section className="sm:mt-9 sm:ml-10 mt-7 mx-2 space-y-10 sm:space-y-12">
  {/* Hero Section */}
  <div className="text-center">
    <h1 className="sm:text-4xl text-3xl font-extrabold mb-2 sm:mb-4">About DeepSightX</h1>
    <p className="text-gray-600 font-medium sm:text-lg max-w-3xl mx-auto">
      A smart AI-powered platform for early detection of retinal and neurodegenerative diseases using facial imaging and deep learning.
    </p>
  </div>

  {/* Purpose */}
  <div>
    <h2 className="text-2xl font-bold mb-3">Project Purpose 🔍</h2>
    <p className="text-gray-700 leading-relaxed text-base">
      This web application is developed as a diagnostic tool to detect eye-related and neurological disorders early using AI. 
      With real-time predictions, condition descriptions, and downloadable reports, DeepSightX makes diagnostics accessible and fast.
    </p>
  </div>

  {/* Architecture */}
  <div>
    <h2 className="text-2xl font-bold mb-3">AI Model Architecture 🧠</h2>
    <p className="text-gray-700 mb-4">
      The deep learning pipeline used in DeepSightX is a Convolutional Neural Network (CNN) optimized for image classification. The model processes a 224x224 RGB image and goes through layers of convolution, activation, pooling, and dense connections to output predictions on various eye-related and neurological conditions.
    </p>
    <div className="rounded-xl overflow-hidden shadow-lg border">
      <img src={CnnImg} alt="CNN Model Architecture" className="w-full h-auto"/>
    </div>
  </div>

  {/* Tech Stack */}
  <div>
    <h2 className="text-2xl font-bold mb-4">Technology Stack 💻</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {["React.js", "Tailwind CSS", "Python Flask", "Raspberry Pi", "Roboflow", "Axios", "CNN"].map((tech, i) => (
        <div key={i} className="bg-white p-4 text-center rounded-lg shadow-md hover:shadow-lg transition">
          <p className="text-primary font-semibold">{tech}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Workflow */}
  <div>
    <h2 className="text-2xl font-bold mb-4">Workflow 🔄</h2>
    <ol className="list-decimal pl-3 sm:pl-5 list-inside space-y-2 text-gray-700">
      <li>User uploads a facial or eye image.</li>
      <li>Image is sent to Flask backend hosted on Raspberry Pi.</li>
      <li>Backend forwards the image to Roboflow for analysis.</li>
      <li>Prediction is returned with condition & confidence score.</li>
      <li>Results are displayed along with option to download a PDF report.</li>
    </ol>
  </div>

  {/* Features */}
  <div>
    <h2 className="text-2xl font-bold mb-4">Key Features ✨</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <div className="text-3xl">📷</div>
        <h3 className="font-semibold mt-2">AI Image Analysis</h3>
        <p className="text-sm text-gray-600">Deep learning model trained to identify conditions from images.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <div className="text-3xl">📄</div>
        <h3 className="font-semibold mt-2">PDF Report</h3>
        <p className="text-sm text-gray-600">Download detailed diagnostic reports with results and visual analysis.</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <div className="text-3xl">🏥</div>
        <h3 className="font-semibold mt-2">Hospital Connect</h3>
        <p className="text-sm text-gray-600">Find nearby hospitals and specialists relevant to your condition.</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default About