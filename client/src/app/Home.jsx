import React from "react";

import BuildLegalForms from "../components/HomeComponents/BuildLegalForms";
import License from "../components/HomeComponents/License";
import HowItWork from "../components/HomeComponents/HowItWork";
import WhyChooseUs from "../components/HomeComponents/WhyChooseUs";


// import { BiMessageSquareDetail } from "react-icons/bi";

export default function Home() {
  return (
    <div>
      <BuildLegalForms/>
      <License/>
      <HowItWork/>
      <WhyChooseUs/>
    </div> 
  );
}
