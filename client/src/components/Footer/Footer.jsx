import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const FirstOption = [
  "All Forms",
  "Lease Agreement",
  "Power of Attorney",
  "Non-Disclosure Agreement",
  "Eviction Notice",
];

export const SecondOption = [
  "Pricing",
  "About Us",
  "Legal Resourses",
  "Careers",
  "Contact Us",
  "Partner With Us",
];

export const ThirdOption = [
  "Terms of Use",
  "Privacy Policy",
  "Do Not Sell My Personal Information",
];

export default function Footer() {
  return (
    <div className="pt-[25px] sm:pt-[50px] lg:pt-[80px] ">
      <section className="px-4 sm:px-[35px] lg:px-[50px] xl:px-[125px] grid grid-cols-2 lg:grid-cols-3 w-full  h-[400px] sm:h-[480px] lg:h-[350px]">
        <div className=" flex flex-col sm:gap-5 lg:gap-6">
          <h1
            className="text-[16px] sm:text-[18px] 
              font-medium"
          >
            LEGAL DOCUMENTS
          </h1>
          <div className="flex flex-col gap-1 sm:gap-2 lg:gap-3 ">
            {FirstOption.map((value, index) => {
              return (
                <>
                  <h1
                    key={index}
                    className="text-[14px] sm:text-[16px] cursor-pointer"
                  >
                    {value}
                  </h1>
                </>
              );
            })}
          </div>
        </div>
        <div className=" flex flex-col gap-4 sm:gap-5 lg:gap-6">
          <h1
            className="text-[16px] sm:text-[18px] 
              font-medium"
          >
            COMPANY
          </h1>
          <div className="flex flex-col gap-1 sm:gap-2 lg:gap-3">
            {SecondOption.map((value, index) => {
              return (
                <>
                  <h1
                    key={index}
                    className="text-[14px] sm:text-[16px] cursor-pointer"
                  >
                    {value}
                  </h1>
                </>
              );
            })}
          </div>
        </div>
        <div className=" flex flex-col gap-4 sm:gap-5 lg:gap-6">
          <h1
            className="text-[16px] sm:text-[18px] 
              font-medium"
          >
            USERS
          </h1>
          <div className="flex flex-col gap-1 sm:gap-2 lg:gap-3">
            {ThirdOption.map((value, index) => {
              return (
                <>
                  <h1
                    key={index}
                    className="text-[14px] sm:text-[16px] cursor-pointer"
                  >
                    {value}
                  </h1>
                </>
              );
            })}
          </div>
        </div>
      </section>

      <div className="bg-[#FDFDFD] px-4 sm:px-[35px] lg:px-[50px] xl:px-[125px]">
        <section className=" flex lg:items-center flex-col gap-3 sm:gap-4 lg:gap-0 lg:flex-row justify-between py-4 lg:py-8 border-b border-black">
          <p className="text-[12px] sm:text-[14px]">
            (855) 335-9779, Monday-Friday, 9AM - 7PM EDT
          </p>

          <div className="flex gap-3">
            <FaFacebookF className="text-[22px] hover:text-[#006495]" />
            <FaTwitter className="text-[22px] hover:text-[#006495]" />
            <FaLinkedinIn className="text-[22px] hover:text-[#006495]" />
            <FaYoutube className="text-[22px] hover:text-[#006495]" />
          </div>
        </section>

        <section className="py-5">
          <p className="text-[12px] sm:text-[13px]">
            Copyright 2024 Legal Templates LLC. Legal Templates LLC is not a
            lawyer, or a law firm and does not engage in the practice of law.
            Legal Templates cannot and does not provide legal advice or legal
            representation. All information, software and services provided on
            the site are for informational purposes and self-help only and are
            not intended to be a substitute for a lawyer or professional legal
            advice. Use of this site is subject to our Terms of Use.
            Legaltemplates.net is owned and operated by Resume Technologies
            Limited, London with offices in London United Kingdom.
          </p>
        </section>
      </div>
    </div>
  );
}

