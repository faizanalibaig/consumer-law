import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PaymentCard = ({ title, pricingInfo, shortHeading, perks }) => {
  const Navigate = useNavigate();
  const planIDs = [
    {
      name: "TRIAL",
      planID: "price_1P0yiOCP79PNi6t6tWTdFUrg",
    },
    {
      name: "BASIC",
      planID: "price_1P0yiOCP79PNi6t6tWTdFUrg",
    },
    {
      name: "STANDARD",
      planID: "price_1P0yijCP79PNi6t6tQulbjkv",
    },
    {
      name: "PREMIUM",
      planID: "price_1P0yjZCP79PNi6t6tX5KCZnT",
    },
  ];

  async function handleSubscription(plan) {
    const PLAN = planIDs.find((PLAN) => PLAN.name === plan);
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
        "http://localhost:8000/api/payment/checkout",
        {
          _id: JSON.parse(LOGINDETAILS)._id,
          planType: PLAN.name,
          planID: PLAN.planID,
        }
      );
      toast.success("Hurrey! Redirectingl");
      window.open(response.data.successUrl, "_blank");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <div
      className="max-w-sm p-2 md:p-6 bg-white border border-gray-200 rounded-lg shadow px-10 py-8
    hover:bg-[#F5F8FF] hover:border-[#1D4ED8] mx-5 lg:mx-0">
      <h2 className="text-gray-700 text-lg font-sans font-medium tracking-widest">
        {title}
      </h2>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {pricingInfo}
      </h5>

      <div className="py-6">
        <p className="mb-1 text-sm md:text-lg  font-bold text-gray-700 ">
          {shortHeading}
        </p>
        {perks.map((TEXT) => (
          <p>{TEXT}</p>
        ))}
      </div>
      <p
        href="#"
        className="
        hover:cursor-pointer
        inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        onClick={() => {
          handleSubscription(title);
        }}
      >
        Subscribe
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </p>
      <Toaster />
    </div>
  );
};

export default PaymentCard;
