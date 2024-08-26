import React from "react";

const PaymentHero = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <h1
          className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[52px] 
    font-bold sm:px-[35px] lg:text-center  text-[#292929] text-opacity-100 px-[5px] sm:w-[75%] lg:w-[50%] 
    font-sans">
          Print and download your Legal Document
        </h1>
      </div>
      <p>
        4M+{" "}
        <span className="text-[#686A71] text-base sm:text-lg font-semibold leading-10">
          legal documents created since 2015
        </span>
      </p>
    </div>
  );
};

export default PaymentHero;
