import React, { useEffect, useRef } from "react";
import PaymentCard from "./PaymentCard";
import TestDoc from "./TestDoc";
import OneTimePayment from "./OneTimePayment";
const PaymentInfo = () => {
  const cardDetail = [
    {
      title: "TRIAL",
      pricingInfo: "$0, then $1 for week",
      shortHeading: "Includes:",
      perks: ["Limited copies and downloads", "Store documents digitally"],
    },
    {
      title: "BASIC",
      pricingInfo: "$1 for week",
      shortHeading: "Limited access to document's",
      perks: [
        "Create document",
        "Export document as PDF access",
        "Access document whenever you want.",
      ],
    },
    {
      title: "STANDARD",
      pricingInfo: "$4 for month",
      shortHeading: "Limited access to document's",
      perks: [
        "Create document",
        "Export document as PDF & Docx access",
        "Access document whenever you want.",
        "Access of document of any category",
      ],
    },
    {
      title: "PREMIUM",
      pricingInfo: "$48 for year",
      shortHeading: "Full access to 140+ legal forms:",
      perks: [
        "Protect your business from disputes",
        "Coverage for children, family and pets",
        "Secure real estate & other assets",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-center text-2xl sm:text-3xl font-sans font-medium">
        Choose your plan type
        <span className="block text-[12px] md:text-sm text-gray-500">
        You can cancle your payment anytime you want.
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-md gap-6 justify-center">
        {cardDetail.map(({ title, shortHeading, pricingInfo, perks }) => (
          <PaymentCard
            key={title}
            title={title}
            shortHeading={shortHeading}
            pricingInfo={pricingInfo}
            perks={perks}
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentInfo;
