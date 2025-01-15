import React from 'react'
import Divider from '../aboutus/Divider'
import linebg from '../../assets/linebg.png'
import brain_img from '../../assets/brain_img.png'
const Brain = () => {
  return (
    <div className='bg-[#1A0C25] relative min-h-screen font-raleway  p-[4vw] max-sm:p-[6vw] '>
      <Divider title="Transformative" desc='' subtitle='How early interventions can help' />
      {/*style={{ backgroundImage: `url(${linebg})`, backgroundSize: 'cover' }}*/}
      <div className='flex max-sm:flex-col  justify-center gap-[8vw] items-centergap-8   max-sm:mx-2' >
        <div className="absolute inset-0 bg-[#B740A1] w-[40vw] sm:w-[40vw] h-[20vw] sm:h-[10vw] top-[50%] -left-[20%]  opacity-65 blur-[120px] rounded-xl"></div>
        <div className='flex flex-col max-sm:justify-center max-sm:items-center gap-4'>
          <div className='flex flex-col'>
            <p className='font-raleway text-[48px] text-[#ffff]'>
              Made for
            </p>
            <p className='text-[#C4C4C4] text-[16px]'>Live Data</p>
          </div>
          <div className='w-[350px] max-sm:w-[200px]'>
            <img src={brain_img} alt="" />
          </div>
        </div>

        <div className='flex max-sm:flex-col max-sm:justify-center max-sm:items-center gap-[4vw]'>
          {/* card1  column*/}
          <div className='flex flex-col gap-4 mt-[2vw]'>
            <div className="bg-gradient-to-b  p-6 rounded-lg text-white w-80 shadow-lg"
              style={{
                background: "radial-gradient(101.54% 60.98% at 50% 39.02%, #241E22 0%, #43284C 100%)"
              }} >
              <div className='flex'>
                <div className="w-2 h-6 bg-[#1FCFF1] mr-2 rounded"></div>
                <h3 className="text-lg font-semibold">Catch Issues Early, Prevent Bigger Challenges</h3>
              </div>
              <p className="mt-2 ml-4 text-[#C4C4C4] text-sm">
                Early intervention helps identify developmental concerns before they turn into bigger problems, saving time and money on more intensive treatments later.
              </p>
              <div className="relative mt-6">
                {/* Dot symbol */}
                {/* <div className="absolute -top-2 -left-2 w-2 h-2 bg-blue-400 rounded-full"></div> */}
                {/* <div className="text-4xl ">0</div> */}
              </div>
              {/* <p className="text-sm mt-1">TRANSACTIONS PER SECOND</p> */}
            </div>
            <div className="bg-gradient-to-b  p-6 rounded-lg text-white w-80 shadow-lg" style={{
              background: "radial-gradient(101.54% 60.98% at 50% 39.02%, #241E22 0%, #43284C 100%)"
            }}>
              <div className='flex'>
                <div className="w-1 h-6 bg-[#9945FF] mr-2 rounded"></div>
                <h3 className="text-lg font-semibold">Affordable and Accessible</h3>
              </div>
              <p className="mt-2 ml-4 text-[#C4C4C4] text-sm">
                Our early detection test is cost-effective and can be easily accessed, ensuring that children get the help they need without expensive treatments or long waiting times.
              </p>
              <div className="relative mt-6">
                
                {/* <div className="absolute -top-2 -left-2 w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="text-4xl ">0</div> */}
              </div>
              {/* <p className="text-sm mt-2 uppercase">Total transactions</p> */}
            </div>
          </div>

          {/* card 2 column */}
          <div className='flex gap-4 flex-col'>
            <div className="bg-gradient-to-b  p-6 rounded-lg text-white w-80 shadow-lg" style={{
              background: "radial-gradient(101.54% 60.98% at 50% 39.02%, #241E22 0%, #43284C 100%)"
            }}>
              <div className='flex'>
                <div className="w-1 h-6 bg-[#FFD512] mr-2 rounded"></div>
                <h3 className="text-lg font-semibold">Maximize Your Child’s Potential</h3>
              </div>

              <p className="mt-2 ml-4 text-[#C4C4C4] text-sm">
                The sooner you start, the better the chances of your child reaching their full potential. Early intervention leads to better skills, faster learning, and more confidence.

              </p>
              <div className="relative mt-6">
                {/* Dot symbol */}
                {/* <div className="absolute -top-2 -left-2 w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="text-4xl ">0</div> */}
              </div>
              {/* <p className="text-sm mt-1 uppercase">Validator nodes</p> */}
            </div>
            <div className="bg-gradient-to-b  p-6 rounded-lg text-white w-80 shadow-lg" style={{
              background: "radial-gradient(101.54% 60.98% at 50% 39.02%, #241E22 0%, #43284C 100%)"
            }}>
              <div className='flex'>
                <div className="w-1 h-6 bg-[#19FB9B] mr-2 rounded"></div>
                <h3 className="text-lg font-semibold">Improved Quality of Life for Families</h3>
              </div>
              <p className="mt-2 ml-4 mb-6 text-[#C4C4C4] text-sm">
              By addressing concerns early, both children and their families experience less stress, better communication, and smoother transitions into school and social settings.
              </p>
              {/* <div className="mt-6 text-4xl ">0 %</div>
              <p className="text-sm mt-1 uppercase">Net carbon impact</p> */}
            </div>
          </div>



        </div>




      </div>


    </div>
  )
}

export default Brain
