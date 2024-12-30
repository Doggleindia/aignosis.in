import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import PriceBody from './Priceplan/PriceBody'
import PricepageBanefits from './Priceplan/PricepageBanefits'

const Priceplan = () => {
  return (
    <div className='bg-[#1A0C25] p-2 overflow-x-hidden text-white w-full h-full'>
        <NavBar/>
        <div className="w-full h-full">
            <div className="w-full p-10 flex ml-6 gap-10">
                <button className='border-b border-[#811F67]'>Assesments</button>
                <button>Therapy</button>
            </div>
        </div>
        <PriceBody/>
        <PricepageBanefits/>
    </div>
  )
}

export default Priceplan