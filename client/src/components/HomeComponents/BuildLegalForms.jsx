import React from 'react'
import Heading from '../Text/Heading/Heading'
import FormBoxes from './FormBoxes'

function BuildLegalForms() {
  return (
    <div className='py-[50px] sm:py-[75px] lg:py-[100px] 
    bg-gradient-to-r from-[#FFFFFF] to-[#F7F8FF]'>
        <Heading heading={"Build Your Legal Forms"}/>
        <p className='text-start lg:text-center text-[16px] sm:text-[18px] md:text-[20px] 
        lg:text-[24px] xl:text-[26px] px-4 sm:px-[35px] py-3 sm:py-5 text-[#7477A6]'>
            Create Your Free Legal Documents & Contracts Online in Minutes.
        </p>
    <FormBoxes/>

    </div>
  )
}

export default BuildLegalForms