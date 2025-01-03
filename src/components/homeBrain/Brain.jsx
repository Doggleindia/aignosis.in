import React from 'react'
import Divider from '../aboutus/Divider'
import linebg from '../../assets/linebg.png'
import brain_img from '../../assets/brain_img.png'
const Brain = () => {
  return (
    <div className='bg-[#1A0C25] relative min-h-screen font-raleway  p-[4vw] max-sm:p-[6vw] '>
     <Divider title="Text" desc='' subtitle = 'How early interventions can help'   />
     <div className='flex max-sm:flex-col  justify-center gap-[8vw] items-centergap-8   max-sm:mx-2' style={{ backgroundImage: `url(${linebg})`, backgroundSize: 'cover' }}>
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
           style={{background: "radial-gradient(101.54% 60.98% at 50% 39.02%, #241E22 0%, #43284C 100%)"
           }} >
       <div className='flex'>
            <div className="w-1 h-6 bg-[#1FCFF1] mr-2 rounded"></div>
            <h3 className="text-lg font-semibold">Fast</h3>
            </div>
      <p className="mt-2 text-sm">
        Don’t keep your users waiting. Solana has block times of 400 milliseconds —
        and as hardware gets faster, so will the network.
      </p>
      <div className="relative mt-6">
        {/* Dot symbol */}
        <div className="absolute -top-2 -left-2 w-2 h-2 bg-blue-400 rounded-full"></div>
        <div className="text-4xl ">0</div>
      </div>
      <p className="text-sm mt-1">TRANSACTIONS PER SECOND</p>
    </div>
    <div className="bg-gradient-to-b  p-6 rounded-lg text-white w-80 shadow-lg"            style={{background: "radial-gradient(101.54% 60.98% at 50% 39.02%, #241E22 0%, #43284C 100%)"
           }}>
       <div className='flex'>
            <div className="w-1 h-6 bg-[#9945FF] mr-2 rounded"></div>
            <h3 className="text-lg font-semibold">Scalable</h3>
            </div>
      <p className="mt-2 text-sm">
      Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.0025.
      </p>
      <div className="relative mt-6">
        {/* Dot symbol */}
        <div className="absolute -top-2 -left-2 w-2 h-2 bg-blue-400 rounded-full"></div>
        <div className="text-4xl ">0</div>
      </div>
      <p className="text-sm mt-2 uppercase">Total transactions</p>
    </div>
          </div>
           
           {/* card 2 column */}
           <div className='flex gap-4 flex-col'>
           <div className="bg-gradient-to-b  p-6 rounded-lg text-white w-80 shadow-lg"            style={{background: "radial-gradient(101.54% 60.98% at 50% 39.02%, #241E22 0%, #43284C 100%)"
           }}>
            <div className='flex'>
            <div className="w-1 h-6 bg-[#FFD512] mr-2 rounded"></div>
            <h3 className="text-lg font-semibold">Decentralized</h3>
            </div>
            
      <p className="mt-2 text-sm">
      The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant.
      </p>
      <div className="relative mt-6">
        {/* Dot symbol */}
        <div className="absolute -top-2 -left-2 w-2 h-2 bg-blue-400 rounded-full"></div>
        <div className="text-4xl ">0</div>
      </div>
      <p className="text-sm mt-1 uppercase">Validator nodes</p>
    </div>
    <div className="bg-gradient-to-b  p-6 rounded-lg text-white w-80 shadow-lg"            style={{background: "radial-gradient(101.54% 60.98% at 50% 39.02%, #241E22 0%, #43284C 100%)"
           }}>
       <div className='flex'>
            <div className="w-1 h-6 bg-[#19FB9B] mr-2 rounded"></div>
            <h3 className="text-lg font-semibold">Energy Efficient</h3>
            </div>
      <p className="mt-2 text-sm">
      Solana’s proof of stake network and other innovations minimize its impact on the <span className='text-[#00FFBD]'>environment .</span>  Each Solana transaction uses about the same energy as a few Google searches.
      </p>
      <div className="mt-6 text-4xl ">0 %</div>
      <p className="text-sm mt-1 uppercase">Net carbon impact</p>
    </div>
           </div>
        
       

        </div>



       
     </div>


    </div>
  )
}

export default Brain
