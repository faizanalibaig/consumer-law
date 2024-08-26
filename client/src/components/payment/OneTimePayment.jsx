import React from "react";
import creditCard from "../../public/CREDIT-CARD.png";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const OneTimePayment = () => {
  async function handleClick() {
    const LOGINDETAILS = localStorage.getItem("LOGINDETAILS");
    if (!LOGINDETAILS) {
      toast.error("Please register yourself first", {
        position: "top-right",
        icon: "👏",
        style: {
          height: "60px",
          border: "1px solid red",
        },
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/payment/oneTimePayment",
        {
          _id: JSON.parse(LOGINDETAILS)._id,
          planID: "price_1P1i6rCP79PNi6t6TGrW5x8F",
        }
      );
      window.open(response.data.successUrl, "_blank");
    } catch (error) {
      if (error.response.status === 400 || error.response.status === 404) {
        toast.error(error.response.data.message, {
          position: "top-right",
          icon: "👏",
          style: {
            height: "60px",
            border: "1px solid red",
          },
        });
      } else {
        toast.error(error.message, {
          position: "top-right",
          icon: "👏",
          style: {
            height: "60px",
            border: "1px solid red",
          },
        });
      }
    }
  }

  return (
    <div class="container my-24 mx-auto md:px-6 xl:px-32">
      <section class="mb-32">
        <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
          <div class="flex flex-wrap items-center">
            <div class="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
              <img
                src={creditCard}
                alt="Trendy Pants and Shoes"
                class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              />
            </div>
            <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
              <div class="px-6 py-12 md:px-12">
                <h2 class="mb-6 pb-2 text-4xl font-bold">One-Time Payment</h2>
                <p class="mb-6 pb-2 text-neutral-500">
                  Unlock access to premium, legal templates for just a one-time
                  payment of $0.80! Elevate your projects with professionally
                  crafted templates. Act now and thank yourself later!
                </p>
                <div class="mb-6 flex flex-wrap">
                  <div class="mb-6 w-full md:w-4/12 lg:w-6/12 xl:w-4/12">
                    <p class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-success"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Print
                    </p>
                  </div>
                  <div class="mb-6 w-full md:w-4/12 lg:w-6/12 xl:w-4/12">
                    <p class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-success"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Export As PDF
                    </p>
                  </div>
                  <div class="mb-6 w-full md:w-4/12 lg:w-6/12 xl:w-4/12">
                    <p class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-success"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Export As DOCX
                    </p>
                  </div>
                  <div class="mb-6 w-full md:w-4/12 lg:w-6/12 xl:w-4/12">
                    <p class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-success"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Template
                    </p>
                  </div>
                  <div class="mb-6 w-full md:w-4/12 lg:w-6/12 xl:w-4/12">
                    <p class="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-3 h-5 w-5 text-success"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Download
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  class="inline-block rounded bg-primary px-12 pt-3.5 pb-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={handleClick}
                >
                  Pay now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Toaster />
    </div>
  );
};

export default OneTimePayment;
