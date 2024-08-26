import { useEffect } from "react";
import {useSelector} from 'react-redux'
import "../index.css"
import { LogicHandler } from "../components/exporttemplates/LogicHandler";


const PERSONAL_INFORMATION = () => {

  const selector=useSelector(state=> state.personalinfoslice)
  const LOGINDETAILS = JSON.parse(localStorage.getItem("LOGINDETAILS"));
  const isAllGood = LogicHandler();
 
  return (
    <div className="px-[1.5rem] sm:px-[5rem] lg:px-[17rem] py-[3rem] flex flex-col items-center justify-center">
     <section className="p-[1rem] sm:p-[1.5rem] lg:p-[3rem] border border-black flex flex-col relative">
     {LOGINDETAILS !== null && !isAllGood ? <></> :<div className="w-full h-full absolute top-0 right-0 backdrop-filter backdrop-blur-lg bg-white bg-opacity-5" />}
        <p className="font-bold">{selector.firstName + " " + selector.middleName + " " + selector.lastName}<br/>
        {selector.address}<br/>
        {selector.city + " " + selector.state + " " + selector.postalcode}
        <br/>
        <br/>
        <br/>
         Current Date: {selector.currentdate}
         <br/>
         <br/>
        </p>

        <div>
            <p>
            According to 15 U.S.C. 1681i, Paragraph (5), if a consumer disputes any information and it is found to be inaccurate, incomplete, or unverifiable, the consumer reporting agency must promptly delete the item.
            <br/>
            <br/>
            <br/>
            The following personal information is reporting incorrectly on my credit report:
            <br/>
            <br/>
            <span className="font-bold">Name: The correct spelling of my name is {selector.firstName + " " + selector.middleName + " " + selector.lastName}</span>
            </p>
        </div>
        <div>
        <br/>
            <h1>Current Address: {selector.address}</h1><br/>
            <span className="font-bold">My correct current address is:</span><br/>
            {selector.address}<br/>
            {selector.city + " " + selector.state + " " + selector.postalcode}
        </div>

        <div>
            <br/>
            <h1>Previous Address: {selector.personalinformation}</h1>
            <span className="font-bold">The following previous addresses are wrong:</span><br/>
            {selector.personalinformation}
        </div>

        <div>
            <br/>
            <h1>Employment:</h1><br/>
            <span className="font-bold">The following previous employers are wrong:</span><br/>
            {selector.employerinformation}
        </div>

        <div>
            <br/>
            <p>
            Please update my credit file to reflect the proper spelling and data as I have indicated above. Please also remove the old inaccurate addresses. I do not want to be mistaken for someone else because of these errors that you are reporting.<br/><br/>Thank you,</p>
            <br/>            
            <br/>            
            <br/>
            Sign: {selector.sign}<br/>
            Name: {selector.firstName +" "+ selector.lastName}
            <br/>
            <br/>
        </div>

        <div className="flex justify-between">
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

export default PERSONAL_INFORMATION;
