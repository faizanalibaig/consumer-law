import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

import { useAutoAnimate } from '@formkit/auto-animate/react'
import BusinessHover from "../HoverDown/BusinessHover";
import { useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import logo from "../../public/logo.png";


export const List = [
  { name: "Business", hover: <BusinessHover /> },
  { name: "Real Estate", hover: <BusinessHover /> },
  { name: "Estate Planning", hover: <BusinessHover /> },
  { name: "Personal", hover: <BusinessHover /> },
];

function NavBar() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(null);
  const [animationParent] = useAutoAnimate()
  const [nav, setNav] = useState(false);

useEffect(() => {
  document.body.style.overflow = nav ? 'hidden' : 'auto';
}, [nav]);

const OpenNav = () => {
  setNav(true);
};

const CloseNav = () => {
  setNav(false);
};


  useEffect(() => {
    const isUserExist = localStorage.getItem("LOGINDETAILS");
    setUserLoggedIn(isUserExist);
  }, [isUserLoggedIn]);

  return (
    <nav ref={animationParent} className=" flex justify-between px-4 sm:px-[35px] lg:px-[50px] xl:px-[125px] h-[75px] lg:h-[100px] font-sans relative">
      <section className="flex lg:gap-12 xl:gap-16 items-center ">
        <div className=" h-full flex items-center">
          <Link
            to="/"
            className="text-[19px] sm:text-[20px] md:text-[22px] lg:text-[26px] xl:text-[30px]
         font-medium cursor-pointer text-[#283250]"
          >
            <img src={logo} alt="LOGO-OF-CUSTOMER-LAW-TEMPLATE-WEBSITE" className="w-[180px] h-auto sm:w-[220px] lg:w-[280px] xl:w-[300px]"/>
          </Link>
        </div>
        {/* <div className="hidden lg:block">
          <div className="flex items-center gap-5 h-full cursor-pointer ">
            <BusinessHover />
          </div>
        </div> */}
      </section>

      <section className="hidden lg:block font-normal font-sans">
        <div className="flex gap-5 items-center h-full cursor-pointer">
          <h1 className="text-[17px]">Support</h1>
          <Link to='/payment' className="text-[17px]">Plans</Link>
          {isUserLoggedIn ? (
            <button
            className="text-[17px]"
              onClick={() => {
                localStorage.clear();
                toast.success("Successfully !! Logout...", {
                  position: "top-right",
                  icon: "🔥",
                  style: {
                    height: "60px",
                    border: "1px solid green",
                  },
                }); 
                setUserLoggedIn("");
              }}
            >
             Logout
            </button>
          ) : (
            <Link to="/auth/login" className="text-[17px]">
              Sign In
            </Link>
          )}
        </div>
      </section>
      

      <section className="block lg:hidden">
        <div className="flex items-center h-full">
          <IoMenu className="text-[26px] sm:text-[30px]" onClick={OpenNav}/>
        </div>        
      </section>
      <Toaster/>
      {nav && <div className="text-white bg-black text-9xl absolute top-0 h-[250px] left-0 z-10 w-full p-5 border-b-2 border-black">
           <div className="w-full h-[20%] flex justify-end">
             <IoMdClose className="text-[35px] sm:text-[40px]" onClick={CloseNav}/>
           </div>
           <div className="w-full h-[80%] flex flex-col justify-end gap-3 px-2 py-4">
           <h1 className="text-[20px] font-medium">Support</h1>
          <Link to='/paymentheader' className="text-[20px] font-medium">Plans</Link>
          {isUserLoggedIn ? (
            <button
            className="text-[20px] font-medium text-left"
              onClick={() => {
                localStorage.clear();
                toast.success("Successfully !! Logout...", {
                  position: "bottom-right",
                  icon: "🔥",
                  style: {
                    height: "60px",
                    border: "1px solid green",
                  },
                }); 
                setUserLoggedIn("");
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/auth/login" className="text-[20px] font-medium">
              Sign In
            </Link>
          )}
           </div>
        </div>}
    </nav>
  );
}

export default NavBar;
