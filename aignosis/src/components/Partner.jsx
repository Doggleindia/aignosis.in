import React from 'react'
import com1 from '../assets/images/sponsered/image 83.png'
import com2 from '../assets/images/sponsered/image 85.png'
import com3 from '../assets/images/sponsered/image 87.png'
import com4 from '../assets/images/sponsered/image 89.png'
import com5 from '../assets/images/sponsered/image 102.png'
import com6 from '../assets/images/sponsered/image 104.png'
import com7 from '../assets/images/sponsered/image 105.png'
import com8 from '../assets/images/sponsered/image 106.png'
import com9 from '../assets/images/sponsered/image 107.png'
import com10 from '../assets/images/sponsered/image 108.png'
import com11 from '../assets/images/sponsered/image 112.png'
import com12 from '../assets/images/sponsered/image 113.png'
import com13 from '../assets/images/sponsered/image 114.png'

import './partner.css'

const logos = [com1, com2, com3, com4, com5, com6, com7, com8, com9, com10, com11, com12, com13];

const Partner = () => {
  return (
    <div className="bg-white overflow-hidden max-w-full min-h-[30vw] justify-center items-center flex flex-col mb-[2vw] text-white py-10 px-6 text-center">
      <div className="w-full h-[2vw] flex justify-center items-center">
        <h1 className='font-montserrat font-semibold text-4xl text-black'>Supported by</h1>
      </div>

      <div className="marquee-container mt-[4vw]">
        <div className="marquee marquee-speed-1">
          {logos.concat(logos).map((img, index) => (
            <img key={`loop1-${index}`} className="marquee-image" src={img} alt={`Sponsor ${index + 1}`} />
          ))}
        </div>
      </div>

      <div className="marquee-container mt-[2vw]">
        <div className="marquee marquee-speed-2">
          {logos.concat(logos).map((img, index) => (
            <img key={`loop2-${index}`} className="marquee-image" src={img} alt={`Sponsor ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partner;
