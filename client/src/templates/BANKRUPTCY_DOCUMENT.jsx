import React from 'react'
import {useSelector} from 'react-redux'
import { LogicHandler } from "../components/exporttemplates/LogicHandler";

const BANKRUPTCY_DOCUMENT = () => {

  const selector=useSelector(state=> state.bankruptcyslice)
  const LOGINDETAILS = JSON.parse(localStorage.getItem("LOGINDETAILS"));
  const isAllGood = LogicHandler();


  return (
    <div className="px-[1.5rem] sm:px-[5rem] lg:px-[8rem] xl:px-[17rem] py-[3rem]">
     <section className="p-[1rem] sm:p-[2rem] lg:p-[3rem] border border-black relative">
     {LOGINDETAILS !== null && !isAllGood ? <></> :<div className="w-full h-full absolute top-0 right-0 backdrop-filter backdrop-blur-lg bg-white bg-opacity-5" />} 
     <p className='flex flex-col font-bold'>
       <span>{selector.firstName + "  " + selector.middleName+ " " + selector.lastName}</span>
       <span>
        {selector.address}
       </span>
       <span>
        {selector.city +"  "+ selector.state+"  "+ selector.postalcode}
       </span>
      </p>

      <br/>
      <p className='font-bold'>
        <span className='mr-[10px] sm:mr-[15px] lg:mr-[20px]'>SSN: {selector.number}</span>  DOB: {selector.dob} 
      </p>
      <br/>
      <br/>


      <p>
      I am communicating because I have recently checked my most recent credit reports and
noticed a Bankruptcy in the Public records of my credit file and I do not recognize it.
Pursuant to § 621 of the FCRA, 15 U.S.C. § 1681s, a violation of the FCRA constitutes an
unfair or deceptive act or practice in or affecting commerce, in violation of Section 5(a) of
the FTC Act, 15 U.S.C. § 45(a). The listed bankruptcy has violated my federally protected
consumer rights to privacy and confidentiality under 15 USC 1681.<br/> <br/>
Whoever willfully and knowingly (1)gives false or inaccurate information or fails to
provide information which he is required to disclose under the provisions of this
subchapter or any regulation issued thereunder, (2)uses any chart or table authorized by
the Bureau under section 1606 of this title in such a manner as to consistently understate
the annual percentage rate determined under section 1606(a)(1)(A) of this title, or
(3)otherwise fails to comply with any requirement imposed under this subchapter, shall
be fined not more than $5,000 or imprisoned not more than one year, or both. According
to the provisions of 15 USC 1692g, 15 USC 1681b, and the Fair Credit Reporting Act
(FCRA), I have not granted any permission for your agency to list this public record on
my credit report. For all accounts mentioned below, I require verification and validation
of every detail including notations, dates, and balances, irrespective of their reported
status. I also request evidence of your verification method, and the specific details that
correspond with mine. Absent precise matches, the account must be removed
immediately in accordance with the FCRA. Pertaining to 15 USC 1605, 15 USC 1666b, 15
USC 1681a, and 15 USC 1681i(2)(A)(i), any reported late payments on this account must
be promptly removed.<br/> <br/>
<span className='font-bold'>Instruction: Please remove the false reporting listed accounts :</span>
      </p>

      <p>
        <span>{selector.bankruptcy}</span>
        <br/>
        <span>{selector.bankruptcyReason}</span>
        <br/>
        <span>{selector.bankruptcyInstructions}</span>
      </p>
      <br/>
      <br/>

     <p>
     15 U.S.C. 1681s-2 ( A ) ( 1 ) A person shall not furnish any information relating to a
consumer to any consumer reporting agency if the person knows or has reasonable
cause to believe that the information is inaccurate.<br/> <br/>
If said accounts are in fact believed to be correct, provide documentation from the
original creditor bearing my signature as validation that in fact those accounts are
legitimate. That documentation is to be sent to the Consumer Financial Protection
Bureau (“CFPB”) as well as sent to me via certified mail, as per the Fair Credit Reporting
Act 15 U.S. Code 1681i. Procedure in case of disputed accuracy. Also 15 U.S. Code 1611.
Criminal liability for willful and knowing violation. I am keeping a careful record of your
actions, including Method of Verification, I DO NOT CONSENT to e-oscar or any means of
automated verification. In maintaining a careful record, I am filing a complaint with the
Consumer Financial Protection Bureau for your erroneous reporting of the item (s) and
non-compliance.<br/> <br/>
I further remind you, as in Wegner vs. TransUnion Corp., No. 95-6445
(C.D.Cal.Nov.14,1995 ), you may be liable for the willful non-compliance, and for failure to
respond satisfactorily I will seek {'$1000.00'} per violation for : 1 ) Defamation 2 ) Negligent
Enablement of Identity Fraud 3 ) Violations of the Fair Credit Reporting Act. Please
govern yourself accordingly,<br/> <br/>
     </p>

     <p className='font-bold'>
      <br/>
Thank you for your assistance.
<br/>
<br/>
Regards,
      </p>

      <p className='font-bold'>
        {selector.firstName+ "  "+ selector.lastName}
        <br/>
        {selector.number}
      </p>


     </section> 
    </div>
  )
}

export default BANKRUPTCY_DOCUMENT
