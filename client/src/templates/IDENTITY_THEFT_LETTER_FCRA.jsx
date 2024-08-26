import { useEffect } from "react";
import {useSelector} from 'react-redux'
import "../index.css"
import { LogicHandler } from "../components/exporttemplates/LogicHandler";

const IDENTITY_THEFT_LETTER_FCRA = () => {

  const selector=useSelector(state=> state.identitytheftslice)
  const LOGINDETAILS = JSON.parse(localStorage.getItem("LOGINDETAILS"));
  const isAllGood = LogicHandler();

  const point = [
    `Appropriate proof of identity of consumer; Legible copies of Driver’s License, Social
    Security Card are provided`,
    `. A copy of the Identity Theft Report.`,
    `Identification of such information by the consumer, and a list of accounts opened by
    identity theft and FTC Identity Theft Affidavit and Complaint are provided.
    `,
    `A statement by the consumer that the information is not the information relating to
    any transaction by the consumer.`,
    ` Finally, an Identity Theft Victim's Statement needs to be provided.
    `,
  ];
  return (
    <div className="px-[1.5rem] sm:px-[5rem] lg:px-[8rem] xl:px-[17rem] py-[3rem]">
     <section className="p-[1rem] sm:p-[2rem] lg:p-[3rem] border border-black relative">
     {LOGINDETAILS !== null && !isAllGood ? <></> :<div className="w-full h-full absolute top-0 right-0 backdrop-filter backdrop-blur-lg bg-white bg-opacity-5" />}
     <h1 className="font-bold text-[16px] sm:text-[20px] py-5">Dear Credit Reporting Agency,</h1>

<p className="">
  This is to inform you that I, {selector.firstName + " " +selector.middleName + " "+ selector.lastName} am a victim of identity theft and pursuant to{" "}
  <span className="bold">FCRA 605b 615(f) and 6023(a)(6)</span> an
  identity theft report can be used to permanently block fraudulent
  information that results from identity theft such accounts or addresses
  from appearing on victim's credit profile. It will also make it sure
  that these debts do not reappear on the victim's credit report. Identity
  theft reports can prevent a company from continuing to collect debts
  that result from identity theft. A copy of these sections is enclosed
  and pursuant to
  <span className="bold">605b FCRA (15U.S.C. and 1681c -2)</span> Block
  Information Resulting from Identity Theft, except as provided in this
  section. A consumer reporting agency shall block the reporting of any
  information in a file of a consumer that the consumer identifies as
  information resulting from an alleged identity theft{" "}
  <span className="bold">NO LATER THAN 4 DAYS</span> after the date of the
  receipt by such agency of
</p>

<ol className="py-10 text-[14px] sm:text-[17px]">
  {point.map((POINT, index) => (
    <li key={index}>
      {index + 1}. {POINT}
    </li>
  ))}
</ol>

<p className="text-[14px] sm:text-[17px]">
  I ask that you and your agency comply with the Federal Laws in place and
  swiftly and permanently block the accounts, addresses, inquiries and of
  his information that you are reporting listed on the “identity Theft
  Report List of Fraudulent Accounts” Pursuant to{" "}
  <span className="bold">FCRA 605b 615(f) and 6023(a) (6)</span> and mail
  an updated credit report if not done so already.
</p>
<p className="py-5 text-[14px] sm:text-[17px]">Sincerely,</p>
<hr />
<div className="py-3 text-[14px] sm:text-[17px]">
  <p className="">
    <span className="bold">
    {selector.firstName + " " +selector.middleName + " "+ selector.lastName}  NOTARY
    </span>
  </p>
  <p>
    <span className="bold">{selector.address + " " +selector.city}</span>
  </p>
  <p>
    <span className="bold"> {selector.state + " " +selector.postalcode} </span>
  </p>
</div>
<div className="flex justify-between pt-20 text-[14px] sm:text-[17px]">
  <p>
    <span className="bold">SSN: {selector.number}</span>
  </p>
  <p>
    <span className="bold">DOB: {selector.dob}</span>
  </p>
</div>
     </section>
    </div>
  );
};

export default IDENTITY_THEFT_LETTER_FCRA;
