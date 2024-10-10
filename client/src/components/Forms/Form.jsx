import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Form({ heading, des, link, imageLink }) {
  // API - INTEGRATION
  useEffect(() => {
    const fetchData = async () => {
      const LOGINDETAILS = localStorage.getItem("LOGINDETAILS");
      if (LOGINDETAILS) {
        try {
          const userPlanStatus = await axios.get(
            `${import.meta.env.VITE_REACT_APP_BASEURL}/api/payment/userPlanStatus`,
            {
              params: {
                _id: JSON.parse(LOGINDETAILS)._id,
              },
            }
          );

          // Update LOGINDETAILS with the new plan
          const updatedLoginDetails = JSON.parse(LOGINDETAILS);
          updatedLoginDetails.plan = userPlanStatus?.data?.plan;

          // Save updated LOGINDETAILS back to localStorage
          localStorage.setItem(
            "LOGINDETAILS",
            JSON.stringify(updatedLoginDetails)
          );
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, []);

  const [image, setImage] = useState(false);

  const handleImage = () => {
    setImage(true);
  };

  const handleClose = () => {
    setImage(false);
  };

  useEffect(() => {
    if (image) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [image]);

  return (
    <section className="relative pt-8 pb-24 sm:py-10">
      <div className="w-full lg:h-[500px] px-6 sm:px-28 xl:px-48 grid grid-cols-1 lg:grid-cols-2 lg:gap-10 xl:gap-0">
        <div className="h-full w-full py-10">
          <div className="h-[50%] pb-10 lg:pb-0">
            <h1
              className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] 
          xl:text-[52px] font-bold py-2"
            >
              {heading}
            </h1>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] mb-auto">
              {des}
            </p>
          </div>
          <div className="h-[50%] flex items-end">
            <Link
              to={link}
              className="w-full h-[60px] bg-[#4B62F9] rounded-[8px] text-white font-semibold text-[14px] sm:text-[16px] lg:text-[18px] flex justify-center items-center"
            >
              Create Document
            </Link>
          </div>
        </div>
        <div className="xl:px-14">
          <div className="w-full h-full border border-black rounded-[8px] flex justify-center items-center">
            <img
              src={imageLink}
              alt="random"
              className="w-auto h-[300px] sm:h-[500px]"
              onClick={handleImage}
            />
          </div>
        </div>
      </div>
      {image && <FormImage close={handleClose} img={imageLink} />}
    </section>
  );
}

export default Form;

function FormImage({ close, img }) {
  return (
    <div className="w-full h-screen flex justify-center items-center fixed top-0 left-0 bg-black/50">
      <div className="flex justify-center items-center h-[650px] w-[500px] relative">
        <img
          src={img}
          alt="random"
          className="w-auto h-[400px] sm:w-auto sm:h-[550px]"
        />
        <IoMdClose
          onClick={close}
          className="text-4xl text-white absolute top-14 right-4 sm:top-14 sm:-right-4 cursor-pointer"
        />
      </div>
    </div>
  );
}
