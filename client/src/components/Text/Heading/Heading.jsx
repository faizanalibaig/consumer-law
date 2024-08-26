import React from 'react'

function Heading({heading}) {
  return (
    <>
    <h1 className='text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[52px] 
    font-bold px-4 sm:px-[35px] lg:text-center  text-[#292929] text-opacity-100	'>
      {heading}
    </h1>
    </>
  )
}

export default Heading