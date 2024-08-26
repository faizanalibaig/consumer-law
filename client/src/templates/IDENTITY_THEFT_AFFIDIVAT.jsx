import React from 'react'
import {useSelector} from 'react-redux'
import { LogicHandler } from "../components/exporttemplates/LogicHandler";

const point=[
    "Affiant declares that Affiant did not authorize anyone to use Affiant’s name or personal information to seek money, credit, loans, goods or services described in this report.",
    "Affiant declares that Affiant did not receive any benefits, money, goods or services as a result of the events described in this report", "Affiant declares to the best of Affiant’s knowledge and belief that he/she suspects that their information was stolen by a professional business service or individual which provided consumer and business loans for immigrants/individuals with no identity",
    "Affiant declares that Affiant suspects this online company used Affiant’s personal information or identification documents to get money, credit, loans, goods or services without Affiant’s knowledge or authorization.", "Affiant declares that an identity thief has stolen Affiant’s identity and has opened accounts in Affiant’s name.", "Affiant declares that Affiant didn’t authorize anyone to use his/her information nor did Affiant receive any goods or services from the accounts in Affiant’s name.", "Affiant is willing to work with law enforcement",
]

const IDENTITY_THEFT_AFFIDIVAT = () => {

    const selector=useSelector(state=> state.affidivatslice)
    const LOGINDETAILS = JSON.parse(localStorage.getItem("LOGINDETAILS"));
    const isAllGood = LogicHandler();

  return (
    <div className='px-[1.5rem] sm:px-[5rem] lg:px-[8rem] xl:px-[17rem] py-[3rem]'>
      <section className='p-[2rem] lg:p-[3rem] border border-black relative'>
      {LOGINDETAILS !== null && !isAllGood ? <></> :<div className="w-full h-full absolute top-0 right-0 backdrop-filter backdrop-blur-lg bg-white bg-opacity-5" />}
          <div className='text-center'>
            <p className='font-bold text-[20px] pb-10'>
            IDENTITY THEFT VICTIM'S STATEMENT OF IDENTITY FRAUD<br/>
            STATE OF {selector.state}<br/>
            DECLARATION BY AFFIDAVIT<br/>
            CITY OF {selector.city}
            </p>
          </div>

           <div className='main-content-affidivat'>
           <ul className='list-disc' >
              <li>Affiant declares, that my full legal name is: <span className='font-bold'>{selector.firstName + " " + selector.middleName+ " "+ selector.lastName}</span></li>
                <li>Affiant declares, that Affiant is a resident of the state of: <span className='font-bold'>{selector.state}</span></li> 
                <li>Affiant declares that the Affiant is a victim of Identity Theft.</li>
                <li>Affiant declares that the events described in this affidavit took place and my name was:<span className='font-bold'>{selector.firstName + " " + selector.middleName+ " "+ selector.lastName}</span></li>
                <li>Affiant declares hers/his Date of Birth: <span className='font-bold'>{selector.dob}</span></li> <li>Affiant declares that Affiant’s social security number is: <span className='font-bold'>{selector.number}</span></li>
                <li>Affiant declares that Affiant’s driver’s license number is: <span className='font-bold'>{selector.licensenumber}</span></li>
                <li>Affiant declares that Affiant’s current address is: <span className='font-bold'>{selector.time_at_address}</span><span className='font-bold'>{selector.address+" "+ selector.city+" "+selector.state +" "+ selector.postalcode}</span></li>
                <li>Affiant declares that Affiant has lived at this address since: <span className='font-bold'>{selector.timeataddress}</span> </li>
                <li>Affiant declares, when the events described in this affidavit took place Affiant’s address was: <span className='font-bold'>{selector.address+" "+ selector.city+" "+selector.state +" "+ selector.postalcode}</span></li></ul>
           </div>
          <div>
          <ul className='list-disc' >
            {point.map((value)=>{
                return(
                    <li>
                    {value}
                    </li>)})}
            </ul>
          </div>

           <div className='list-disc' >
            <li>Affiant declares that the identity theft began on or about: <span className='font-bold'>{selector.dateidentitytheftstarted}</span></li>
            <li>Affiant first discovered the identity theft on or about: <span className='font-bold'>
                {selector.date}
                </span>
                </li>
            <li>Affiant declares he/she has incurred about <span className='font-bold'>
                {selector.amountspentfixingcredit} </span>in out of pocket
                expenses relating to identity theft.
                </li>
           </div>


        <div className='py-10'>
        Sincerely, <span className='font-bold'>{selector.firstName + " " + selector.middleName+ " "+ selector.lastName}</span><br/>
        Date: {selector.date}  {"\t\t\t\t\t\t\t\t"}Signature: {selector.sign}
        </div>

        <div className='main-footer-affidivat'>
            <p>
            I, {selector.MyName}. a Notary Public, do hereby certify that on this {selector.day} day of {selector.month}, 20 {selector.year}, personally appeared before me
           {selector.before}, known to me to be the person whose name is subscribed to the foregoing
           instrument ,and swore and acknowledged to me that he executed the same for the purpose and in the capacity therein expressed, and that the statements contained therein are true and correct.
           <br/>
           <br/>
           <br/>
           <span >Notary Public, State of {selector.notarypublic}</span>
           <br/>
           <br/>
           <br/>
           <span>Name, Typed or Printed: {selector.nameTyped}</span>
           <br/>
           <br/>
           <br/>
           <span>My Commission Expires: {selector.commissionexpires}</span>
            </p>
        </div>

      </section>
    </div>
  )
}

export default IDENTITY_THEFT_AFFIDIVAT
