import React from "react";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  HeadingLevel,
} from "docx";
import { saveAs } from "file-saver";
import {useSelector} from 'react-redux'
import { LogicHandler } from "../LogicHandler";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Export3Word = () => {

    const selector=useSelector( state=> state.personalinfoslice)
    const LOGINDETAILS = JSON.parse(localStorage.getItem("LOGINDETAILS"));
    const navigate= useNavigate();

  const handleDownload = async () => {
    try {
     if (LOGINDETAILS === null) {
        setTimeout(() => {
          navigate('/auth/login');
        }, 100); 
        return;
      }
      const isAllGood = await LogicHandler();
      if(!isAllGood)
      {
        setTimeout(() => {
          navigate('/payment');
        }, 100); 
        return;
      }
      const templateData = {
        client_state: `${selector.state}`,
        client_city: `${selector.city}`,
        client_first_name: `${selector.firstName}`,
        client_middle_name: `${selector.middleName}`,
        client_last_name: `${selector.lastName}`,
        bdate: `${selector.dob}`,
        ss_number: `${selector.number}`,
        client_address: `${selector.address}`,
        client_postal_code: `${selector.postalcode}`,
        client_personal_information: `${selector.personalinformation}`,
        client_employer_information: `${selector.employerinformation}`,
        currentDate: `${selector.currentdate}`,
        client_sign: `${selector.sign}` 
      };
   

      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                children: [

                    new TextRun("\n"),
                    new TextRun("\n\n\n"),
                  new TextRun({
                    text: `Name: ${templateData.client_first_name+ "  "+ templateData.client_middle_name + "  "+ templateData.client_last_name}`,
                    bold: true,
                    heading: HeadingLevel.TITLE,
                  }),
                  new TextRun("\n"),
                  new TextRun('\n'),
                  new TextRun(
                    `Address: ${templateData.client_address} `),
                    new TextRun("\n"),
                    new TextRun('\n'),
                    new TextRun(
                      `${templateData.client_city + "  "+templateData.client_state +"  "+templateData.client_postal_code} `),  

                      new TextRun("\n"),
                      new TextRun('\n'),
                      new TextRun(
                        `Date: ${templateData.currentDate} `),    
                  
                    new TextRun("\n"),
                    new TextRun('\n'),
                    new TextRun(
                      `According to`
                    ),
                    new TextRun({
                        text:'  15 U.S.C. 1681i, Paragraph (5), ',
                        bold: true
                    }),
                    new TextRun(
                        'if a consumer disputes any information and it is found to be inaccurate, incomplete, or unverifiable, the consumer reporting agency must promptly delete the item'),
                    
                   new TextRun('\n\n'), 
                  new Paragraph(`The following personal information is reporting incorrectly on my credit report:`),

                  new TextRun('\n\n'), 
                  new TextRun({
                    text:`Name: The correct spelling of my name is ${templateData.client_first_name+ " "+ templateData.client_middle_name+ " "+ templateData.client_last_name}`,
                    bold: true
                }),

                new TextRun('\n\n\n'), 
                new TextRun(
                    `Current Address: ${templateData.client_address}`),
                    new TextRun('\n'), 
                    new TextRun({
                        text:`My correct current address is:`,
                        bold: true
                    }),
                    new TextRun('\n'), 
                    new TextRun(
                        `${templateData.client_address}`),

                        new TextRun('\n'), 
                        new TextRun(
                            `${templateData.client_city+ " " + templateData.client_state+ " " + templateData.client_postal_code}`),


                new TextRun('\n\n\n'), 
                new TextRun(
                    `Previous Address: ${templateData.personalinformation}`),
                    new TextRun('\n'), 
                    new TextRun({
                        text:`The following previous addresses are wrong:`,
                        bold: true
                    }),
                    new TextRun('\n'), 
                    new TextRun(
                        `${templateData.personalinformation}`),

                
                      new TextRun('\n\n\n'), 
                new TextRun(
                    `Employment: ${templateData.employerinformation}`),
                    new TextRun('\n'), 
                    new TextRun({
                        text:`The following previous employers are wrong:`,
                        bold: true
                    }),
                    new TextRun('\n'), 
                    new TextRun(
                        `${templateData.employerinformation}`),
                     
                new TextRun('\n\n\n'),         
                new TextRun(`Please update my credit file to reflect the proper spelling and data as I have indicated above. Please also remove the old inaccurate addresses. I do not want to be mistaken for someone else because of these errors that you are reporting.`)  ,      
                       
                new TextRun('\n\n'),
                new TextRun('Thank you'),
                new TextRun('\n\n'),

                new TextRun(`Sign: ${templateData.client_sign}`),
                new TextRun('\n'),
                new TextRun(`${templateData.client_first_name+ "  "+ templateData.client_last_name}`),
                new TextRun('\n'),

                new TextRun(`SSN: ${templateData.ss_number} \t\t\t\t\t\t\t DOB:${templateData.bdate}`),
                new TextRun('\n\n\n\n'),

                ],
              }),
            ],
          },
        ],
      });

      Packer.toBlob(doc).then((blob) => {
        console.log(blob);
        saveAs(blob, "template.docx");
        console.log("Document created successfully");
      });
    } catch (error) {
      console.error("Error generating document:", error);
    }
  };

  return (
    <div className="h-[60px] bg-[#688deb] w-full text-white font-semibold flex justify-center">
    <button onClick={handleDownload}>Export as DOCX</button>
    <Toaster/>
    </div>
  );
};

export default Export3Word;