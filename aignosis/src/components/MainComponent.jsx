import React from 'react'



import BookScreening from './BookScreening'
import AutismTest from './AutismTest'
import Comparison from './Comparison'
import Partner from './Partner'

const MainComponent = () => {
  return (
    <div className='font-montserrat'>
     <AutismTest />
     <Comparison />
     <Partner />
     <BookScreening />
    </div>
  )
}

export default MainComponent
