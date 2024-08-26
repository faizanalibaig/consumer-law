import React from 'react'

const PaymentFooter = () => {
  return (
    <div className='flex flex-col gap-4 px-5 sm:px-[30px] lg:px-[100px] xl:px-[240px] h-[75px] 
    lg:h-[90px] font-sans text-black/60 mb-52 mt-28'>
     <p className='sm:block text-[12px] md:text-[13px] lg:text-[14px] border-t border-black/20 pt-8'>
     Copyright 2024 Legal Templates Incorporated. Legal Templates LLC is not a lawyer, a law firm and does not engage in the practice of law. Legal Templates cannot and does not provide legal advice or legal representation. All information, software and services provided on the site are for informational purposes and self-help only and are not intended to be a substitute for a lawyer or professional legal advice. Use of this site is subject to our Terms of Use.</p>
     <p className='sm:block text-[12px] md:text-[13px] lg:text-[14px]'>
       Legal Templates is a group of companies and consist of :<br/>
       U.S.: Legal Templates LLC, 4023 Kennett Pike #57884 Wilmington, DE 19807
     </p>
    </div>
  )
}

export default PaymentFooter
