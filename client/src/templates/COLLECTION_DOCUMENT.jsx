import React from 'react'
import {useSelector} from 'react-redux'
import { LogicHandler } from "../components/exporttemplates/LogicHandler";

const COLLECTION_DOCUMENT = () => {

  const selector=useSelector(state=> state.collectionslice)
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
        <span className='font-bold'>Attention:</span><br/><br/>
I am sending this to you today because I have pulled my most recent credit report and I am
extremely confused. It is very troubling as these items are reported as collections.<br/>
      <br/>
According to the Fair Debt Collection Practices Act (FDCPA), specifically 15 U.S.C. § 1692e
(previously mentioned as 807) which prohibits the use of false or misleading information, and 15
U.S.C. § 1692j (previously mentioned as 8012) which prohibits furnishing deceptive forms, the
agent in question is in non-compliance. Per 15 U.S.C. § 1692g, I should have been provided
written notification of this matter at least five days in advance, which I was not. As the sole
original creditor, I have the exclusive authority to validate this debt. I hereby state that I DO NOT
VALIDATE THIS DEBT.<br/>
According to 15 U.S.C. 1681i, Paragraph (5), if a consumer disputes any information and it is
found to be inaccurate, incomplete, or unverifiable, the consumer reporting agency must
promptly delete the item.
      </p>
      <br/>
      <br/>
      <p>
        {selector.disputedCollection}<br/>
        <br/>
        {selector.disputedCollectionInstruction}
      </p>
      <br/>
      <br/>
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

export default COLLECTION_DOCUMENT
