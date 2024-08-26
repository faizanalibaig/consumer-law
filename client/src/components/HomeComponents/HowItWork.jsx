import React from 'react'
import Heading from '../Text/Heading/Heading'
import image from '../../public/HowWorks/Group-7641.webp';
import image2 from '../../public/HowWorks/Group-7695.webp';
import image3 from '../../public/HowWorks/Group-7746.webp';



function HowItWork() {
  return (
    <div className='py-20 bg-[#F7F8FC] px-12 lg:px-20'>
     <h1 className='text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[52px] 
    font-bold px-4 sm:px-[35px] text-center text-[#292929] text-opacity-100'>
        How It Works
    </h1>
       <section className='text-[#292929] w-full flex gap-10 flex-col items-center  sm:flex-row justify-center sm:px-5 lg:px-0 my-20'>
      <div className='w-[260px] h-[220px] sm:h-[200px] lg:w-[320px] py-3 flex justify-center items-center flex-col'>
        <img src={image} alt="random" className='w-36 h-36' />
        <div className='flex flex-col md:mt-10'>
        <h1 className='w-full text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-center'>
        Choose Your Legal Form
        </h1>
        <p className='text-center text-[#5C6680]'>
        Browse our 160+ free online legal contracts & documents
        </p>
        </div>
      </div>
      <div className='w-[260px] h-[220px] sm:h-[200px] lg:w-[320px] py-3  flex justify-center items-center flex-col'>
      <img src={image2} alt="random" className='w-36 h-36' />
      <div className='flex flex-col md:mt-10'>
        <h1 className='w-full text-[16px] sm:text-[18px] lg:text-[20px] font-semibold  text-center'>
        Answer Simple Questions
        </h1>
        <p className=' text-center text-[#5C6680]'>
            Our contract creator will turn your answers into a customized legal form
        </p>
        </div>
      </div>
      <div className='w-[260px] h-[220px] sm:h-[200px] lg:w-[320px] py-3 flex justify-center items-center flex-col'>
      <img src={image3} alt="random" className='w-36 h-36' />
      <div className='flex flex-col md:mt-10'>
        <h1 className=' text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-center'>
        Sign Your Document
        </h1>
        <p className=' text-center text-[#5C6680]'>
        Download and print your customized legal document</p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default HowItWork