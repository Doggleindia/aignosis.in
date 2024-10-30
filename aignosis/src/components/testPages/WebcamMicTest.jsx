import React from 'react'
import StepProgress from './StepProgress'

const WebcamMicTest = () => {
  return (
    <>
    <div className=' bg-[#1A0C25]  min-h-screen flex flex-col justify-center items-center'> 
        
    <div className="w-[900px] h-[600px] mt-[6px] bg-[#FDF9FF] rounded-3xl shadow-lg flex flex-col items-center p-8 space-y-6 relative border border-[#5F1B73]">
        
        {/* Ai.gnosis Branding */}
        <div className="text-4xl font-bold text-[#1A0C25] relative mb-2">
          <span className=" z-10 font-montserrat">Ai.gnosis</span>
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <div className="w-[150px] h-[100px] bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-2xl opacity-70"></div>
          </div>
          
        </div>

        {/* Webcam & Microphone Test Section */}
        <h2 className="text-2xl font-semibold text-[#292738] font-manrope">Webcam & Microphone test</h2>
        
        {/* Webcam Preview */}
        <div className="w-[500px] h-[300px] bg-[#D9D9D9] rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Webcam preview area</p>
        </div>

        {/* Take Snapshot Button */}
        <button className="mt-4 px-6 py-2 border-2 border-[#9C00AD] text-[#292738] rounded-full font-semibold hover:bg-[#F0A1FF] hover:text-white transition-colors font-montserrat">
          Take snapshot
        </button>

        {/* Microphone Test Section */}
        <div className="text-center mt-4">
          <h3 className="text-lg font-medium text-[#292738] font-montserrat">Microphone test</h3>
          <p className="text-[#292738] font-raleway">Speak into the microphone and volume level will be displayed below:</p>
          
          {/* Error Message */}
          <p className="text-[#D0161F] font-raleway mt-2">
            Error: please allow access to your webcam and microphone
          </p>
        </div>
      </div>
    
      </div>
    </>
  )
}

export default WebcamMicTest
