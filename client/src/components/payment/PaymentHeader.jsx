import React from "react";
import { Link } from "react-router-dom";
import PaymentHero from "./PaymentHero";
import PaymentInfo from "./PaymentInfo";
import OneTimePayment from "./OneTimePayment";


const PaymentHeader = () => {
  return (
    <div className=" space-y-6 py-5">
      <div
        className="flex justify-between items-center px-5 sm:px-[30px] lg:px-[100px] xl:px-[240px] h-[75px] 
    lg:h-[90px] font-sans "
      >
        <Link
          to="/"
          className="text-[20px] md:text-[20px] lg:text-[24px] xl:text-[26px]
      font-medium cursor-pointer text-[#283250]"
        >
          consumerlawtemplate.
        </Link>
        <p className="hidden font-sans sm:block md:text-[14px] lg:text-[12px] xl:text-[15px] text-[#686A71]">
          Support 5 days a week, call us at{" "}
          <span className="text-[#4B62F9]"> +1 (855) 335-9779</span>
        </p>
      </div>
      <PaymentHero />
      <OneTimePayment/>
      <PaymentInfo />
    </div>
  );
};

export default PaymentHeader;
