import React from 'react'
import img1 from '../assets/images/laptop2.png'
import img2 from '../assets/images/bg2.jpg'
import img3 from '../assets/images/Group line.png'

const Laptop = () => {
    return (
        <div className="w-full text-white flex relative justify-center items-center h-screen font-montserrat bg-[#1A0C25]">
            {/* <!-- Gradient Blur Background with Lines --> */}
            <div className="absolute inset-0 z-0 flex justify-center items-center">
                {/* <!-- Background Gradient --> */}
                <div className="absolute w-[70%] h-[90%] bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl rounded-full"></div>
                <img src={img3} alt="" srcset="" />
            </div>

            {/* <!-- Images in Foreground --> */}
            <img className="w-[70%] object-fill h-[90%] z-10" src={img1} alt="" />
            {/* <img className="object-cover w-[50%] h-[50%] top-[6rem] absolute rounded-lg z-10" src={img2} alt="" /> */}
        </div>

    )
}

export default Laptop