import React from 'react'
import { PiBankDuotone } from "react-icons/pi";
import { CgFileDocument } from "react-icons/cg";
import { HiOutlineDocumentDownload } from "react-icons/hi";




function License() {
  return (
    <section className='text-center text-opacity-95	text-[#292929] font-normal flex flex-col items-center gap-8 sm:flex-row justify-center sm:px-5 lg:px-0 h-[600px] sm:h-[400px]'>
      <div className='w-[260px] h-auto sm:h-[200px] lg:w-[320px] py-3 border-b-2 sm:border-b-0 sm:border-r-2 flex flex-col items-center gap-2'>
        <PiBankDuotone className='text-7xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#4B62F9]'/>
        <h1 className='w-36 lg:w-52 text-[16px] sm:text-[18px] lg:text-[20px] '>
        Legal documents created by attorneys
        </h1>
      </div>
      <div className='w-[260px] h-auto sm:h-[200px] lg:w-[320px] py-3 border-b-2 sm:border-b-0 sm:border-r-2 flex flex-col items-center gap-2'>
       <CgFileDocument className='text-7xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#4B62F9]'/>
        <h1 className='w-36 lg:w-40 text-[16px] sm:text-[18px] lg:text-[20px]'>
        Filled out forms, ready to be used
        </h1>
      </div>
      <div className='w-[260px] h-auto sm:h-[200px] lg:w-[320px] py-3 flex flex-col items-center gap-2 '>
      <HiOutlineDocumentDownload className='text-7xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#4B62F9]'/>      
        <h1 className='w-36 lg:w-52 text-[16px] sm:text-[18px] lg:text-[20px]'>
        Unlimited revisions and copies
        </h1>
      </div>
    </section>
  )
}

export default License