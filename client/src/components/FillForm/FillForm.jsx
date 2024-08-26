import React from 'react'
import formletter from '../../public/authPhotos/Standard-Lease-Agreement-325x420.png';

function FillForm() {
  return (
    <section className='grid grid-cols-3 h-auto'>
       <div className=' py-10 col-span-2 flex justify-center items-center'>
       <img src={formletter} alt="form" className='h-[1000px]'/>
       </div>
       <div className='py-20 px-20 flex flex-col gap-2 text-white'>
           <button className='w-full h-[60px] rounded-[10px] bg-[#4B62F9]'>
            Export as Word
           </button>
           <button className='w-full h-[60px] rounded-[10px] bg-[#4B62F9]'>
            Export as PDF
           </button>
       </div>
    </section>
  )
}

export default FillForm