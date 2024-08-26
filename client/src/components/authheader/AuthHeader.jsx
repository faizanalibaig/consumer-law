import React from "react";
import { Link } from "react-router-dom";

const AuthHeader = () => {
  return (
    <div className="px-4 sm:px-[35px] lg:px-[50px] xl:px-[80px] h-[60px] lg:h-[80px] border-b border-black/20 flex items-center">
      <Link
        to="/"
        className="text-[17px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px]
         font-medium cursor-pointer text-[#283250]"
      >
        consumerlawtemplate.
      </Link>
    </div>
  );
};

export default AuthHeader;
