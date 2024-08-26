import React from 'react'
import { Data, PlanData } from '../../Data/ChoosePlan.Data'
 

const ChoosePlan = () => {
  return (
    <div className='flex h-auto flex-col px-5 sm:px-[30px] lg:px-[100px] xl:px-[240px]
    font-sans py-20'>
      <h1 className='text-start text-[22px] sm:text-[24px] lg:text-[30px] xl:text-[35px] 
        font-bold text-[#292929] text-opacity-100	'>
        Your document is ready, choose a plan to download
      </h1>
      <div className=' w-full my-10 grid grid-cols-2 h-full'>
         <div className=' h-[550px] p-8 border border-black/15'>
          <div className='border border-black/15 w-full h-full'/>
        </div>
        <section className=' h-[600px] px-8'>
          <div className=' w-full h-full flex flex-col justify-between'>
            {/* first section */}
               <section className='flex flex-col gap-3'>
                {PlanData.map(({key, title, price})=>{
                  return(
                    <div key={key} className='border border-black/15 h-[65px] flex justify-between items-center px-8'>
                      <h1 className='text-[18px]'>
                        {title}
                      </h1>
                      <h1 className='text-[18px]'>
                        {price}
                      </h1>
                    </div>
                  )
                 })}
               </section>
               {/* second section */}
               <section className='h-auto text-[16px]'>
               {Data.map(({title, list}) => {
                  return (
                     <div key={title}>
                       <h1 className='font-medium text-lg pb-2'>{title}</h1>
                       <ul className='px-4 text-[16px]'>
                         {list.map(({key, li}) => (
                           <li key={key} className='list-decimal py-1'>{li}</li>
                         ))}
                       </ul>
                     </div>
                   )})}

               </section>
               {/* third section */}
               <section>
                <button className='text-[18px] w-full h-[60px] bg-[#4B62F9] rounded-[6px] font-semibold 
                text-white'>
                  Continue
                </button>
                <p className='text-[14px] py-2'>
                  At the end of your introductory period, you will continue to be charged every month for $39.95 ($1.43/day) unless you cancel your subscription.
                </p>
               </section>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ChoosePlan
