import React from "react";
import { Link } from "react-router-dom";

import { FaEnvelope } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";
import { GoLaw } from "react-icons/go";
import { BsCollectionFill } from "react-icons/bs";
import { RiBankCardFill } from "react-icons/ri";
import { BsCreditCard2BackFill } from "react-icons/bs";
import { RiAccountBoxFill } from "react-icons/ri";



const List = [
  {
    title: "Identity Theft Letter",
    link: "/form/theft-letter",
    logo: <IoIosInformationCircle/>,
  },
  {
    title: "Personal Information Document",
    link: "/form/personal-information",
    logo: <IoDocumentText/>,
  },
  {
    title: "Identity Theft Affidavit",
    link: "/form/theft-affidavit",
    logo: <GoLaw/>,
  },{
    title: "Inquiry Document",
    link: "/form/inquiry-document",
    logo: <FaEnvelope/>,
  },
  {
    title: "Collection Document",
    link: "/form/collection-document",
    logo: <BsCollectionFill/>,
  },
  {
    title: "BankRuptcy Document",
    link: "/form/bankruptcy-document",
    logo: <RiBankCardFill/>,
  },{
    title: "All Purpose Credit Document",
    link: "/form/all-purpose-credit-document",
    logo: <BsCreditCard2BackFill/>,
  },{
    title: "Accounts Document",
    link: "/form/accounts-document",
    logo: <RiAccountBoxFill/>,
  }
];

function FormBoxes() {
  return (
    <div className=" flex justify-center overflow-x-auto scrollbar-hide my-12">
      <div className="flex gap-4 min-w-full justify-start lg:justify-center ml-4 sm:ml-[60px] lg:ml-0 lg:flex-wrap lg:px-20 xl:px-32">
        {List.map((value, index) => (
          <Link
            to={value.link}
            key={index}
            className="flex flex-col justify-between gap-3 hover:bg-[#F5F8FF] font-medium text-[#292929] text-center p-8 min-w-[180px] min-h-32 sm:min-w-[200px] lg:w-[200px] lg:h-52 xl:w-52 xl:h-52 rounded-[8px] border-2 hover:border-[#4B62F9]">
            {value.title}
            <div className="flex justify-center text-5xl sm:text-5xl lg:text-6xl text-[#4B62F9]">
            {value.logo}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FormBoxes;
