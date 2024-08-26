import React from 'react'

function SubHeading({heading}) {
  return (
    <>
    <h1 className='text-[22px] sm:text-[28px] md:text-[32px] lg:text-[34px] xl:text-[38px]'>
      {heading}
    </h1>
    </>
  )
}

export default SubHeading