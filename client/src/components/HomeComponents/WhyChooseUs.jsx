import React from "react";
import Heading from "../Text/Heading/Heading";
import { MdOutlineHandshake } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FaPeopleGroup } from "react-icons/fa6";

function WhyChooseUs() {
  return (
    <div className="text-[#292929 py-10 lg:py-20 bg-white px-6 md:px-12 lg:px-20">
      <h1
        className="text-center text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[52px] 
    font-bold px-4 sm:px-[35px] lg:text-center  text-[#292929] text-opacity-100	"
      >
        Why Choose Legal Templates?
      </h1>
      <p className="text-[#5C6680] text-center text-base md:text-lg lg:text-xl px-4 sm:px-12 lg:px-20 py-3">
        All of our legal contracts and documents are drafted and regularly
        updated by licensed attorneys. Save your hard-earned money and time with
        Legal Templates.
      </p>
      <section className="w-full flex flex-col gap-5 md:flex-row sm:gap-8 justify-center items-center px-6 sm:px-12 lg:px-20 my-10 md:my-20">
        {/* <div className="bg-red-500 w-[260px] h-auto md:w-[300px] md:h-[250px] lg:w-[320px] lg:h-[280px] flex justify-center items-center flex-col">
          <MdOutlineHandshake
            color="#4B62F9"
            className="text-9xl md:text-5xl lg:text-[7rem] bg-green-500 w-auto h-auto"
          />
          <div className="flex flex-col mt-4 md:mt-6 bg-blue-400">
            <h1 className="text-[#292E41] text-xl md:text-2xl lg:text-4xl font-semibold text-center">
              +7
            </h1>
            <p className="text-lg md:text-xl text-[#ABB0C3]">
              Years In Business
            </p>
          </div>
         
        </div> */}
         <div className='w-[260px] h-auto sm:h-[200px] lg:w-[320px] py-3 flex flex-col items-center gap-2'>
        <MdOutlineHandshake className='text-7xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#4B62F9]'/>
        <div className="flex flex-col mt-4 md:mt-6">
            <h1 className="text-[#292E41] text-xl md:text-2xl lg:text-4xl font-semibold text-center">
              +7
            </h1>
            <p className="text-lg md:text-xl text-[#ABB0C3] text-center">
              Years In Business
            </p>
          </div>
      </div>
        {/* <div className="w-[260px] h-[220px] md:w-[300px] md:h-[250px] lg:w-[320px] lg:h-[280px] py-3 flex justify-center items-center flex-col">
          <HiOutlineClipboardDocumentList
            color="#4B62F9"
            className="text-4xl md:text-5xl lg:text-[7rem]"
          />
          <div className="flex flex-col mt-4 md:mt-6">
            <h1 className="text-[#292E41] text-xl md:text-2xl lg:text-4xl font-semibold text-center">
              10M
            </h1>
            <p className="text-lg md:text-xl text-[#ABB0C3]">
              Documents Created
            </p>
          </div>
        </div> */}
        <div className='w-[260px] h-auto sm:h-[200px] lg:w-[320px] py-3 flex flex-col items-center gap-2'>
        <HiOutlineClipboardDocumentList className='text-7xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#4B62F9]'/>
        <div className="flex flex-col mt-4 md:mt-6">
            <h1 className="text-[#292E41] text-xl md:text-2xl lg:text-4xl font-semibold text-center">
              10M
            </h1>
            <p className="text-lg md:text-xl text-[#ABB0C3] text-center">
            Documents Created
            </p>
          </div>
          </div>

        
        {/* <div className="w-[260px] h-[220px] md:w-[300px] md:h-[250px] lg:w-[320px] lg:h-[280px] py-3 flex justify-center items-center flex-col">
          <FaPeopleGroup
            color="#4B62F9"
            className="text-4xl md:text-5xl lg:text-[7rem]"
          />
          <div className="flex flex-col mt-4 md:mt-6">
            <h1 className="text-[#292E41] text-xl md:text-2xl lg:text-4xl font-semibold text-center">
              900k
            </h1>
            <p className="text-lg text-center md:text-xl text-[#ABB0C3]">
              Registered Customers
            </p>
          </div>
        </div> */}


        <div className='w-[260px] h-auto sm:h-[200px] lg:w-[320px] py-3 flex flex-col items-center gap-2'>
         <FaPeopleGroup className='text-7xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#4B62F9]'/>
        <div className="flex flex-col mt-4 md:mt-6">
            <h1 className="text-[#292E41] text-xl md:text-2xl lg:text-4xl font-semibold text-center">
              900k
            </h1>
            <p className="text-lg md:text-xl text-[#ABB0C3] text-center">
             Registered Customers
            </p>
          </div>
          </div>

      </section>
    </div>
  );
}

export default WhyChooseUs;
