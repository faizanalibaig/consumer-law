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

const Export2Word = () => {

    const selector=useSelector( state=> state.identitytheftslice)
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
                    text: "Dear Credit Reporting Agency,",
                    bold: true,
                    heading: HeadingLevel.TITLE,
                  }),
                  new TextRun("\n"),
                  new TextRun('\n'),
                  new TextRun(
                    `This is to inform you that I, ${" "+templateData.client_first_name + " " +templateData.client_middle_name + " " + templateData.client_last_name + " "} am a victim of identity theft and pursuant `),
                    new TextRun({
                        text:' FCRA 605b 615(f) and 6023(a)(6)',
                        bold: true
                    }),
                    new TextRun(
                      `an identity theft report can be used to permanently block fraudulent information that results from identity theft such accounts or addresses from appearing on victim’s credit profile. It will also make it sure that these debts do not reappear on the victim's credit report. Identity theft reports can prevent a company from continuing to collect debts that result from identity theft. A copy of these sections is enclosed and pursuant to `
                    ),new TextRun({
                        text:'  605b FCRA (15U.S.C. and 1681c -2) ',
                        bold: true
                    }),
                    new TextRun(
                        'Block Information Resulting from Identity Theft, except as provided in this section. A consumer reporting agency shall block the reporting of any information in a file of a consumer that the consumer identifies as information resulting from an alleged identity theft'),
                    new TextRun({
                        text:' NO LATER THAN 4 DAYS ',
                        bold: true
                    }),
                    new TextRun(
                        'after the date of the receipt by such agency of'
                    ),
                   new TextRun('\n\n\n'), 
                  new Paragraph({
                    text: `Appropriate proof of identity of consumer; Legible copies of Driver’s License, Social Security Card are provided.`,
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: `A copy of the Identity Theft Report.`,
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: `Identification of such information by the consumer, and a list of accounts opened by identity theft and FTC Identity Theft Affidavit and Complaint are provided.`,
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: `A statement by the consumer that the information is not the information relating to any transaction by the consumer.`,
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: `Finally, an Identity Theft Victim's Statement needs to be provided.`,
                    bullet: {
                      level: 0,
                    },

                  }),
                  new TextRun('\n'),
                  new Paragraph(
                    `I ask that you and your agency comply with the Federal Laws in place and swiftly and permanently block the accounts, addresses, inquiries and of his information that you are reporting listed on the “identity Theft Report List of Fraudulent Accounts” Pursuant to`
                  ),
                  new TextRun({
                    text:' o FCRA605b 615(f) and 6023(a) (6) ',
                    bold: true
                }),
                new TextRun(
                    `and mail an updated credit report if not done so already.`
                ),
                new TextRun('\n\n\n'),
                new TextRun(
                    `Sincerely,`)   ,
                    
                new TextRun('\n\n'),
                new TextRun(
                    `${templateData.client_first_name+ "  " + templateData.client_middle_name+"  "+ templateData.client_last_name}  Notary`
                ),    
                new TextRun('\n'),
                new TextRun(`${templateData.client_address+ "  "+ templateData.client_city}`),
                new TextRun('\n'),
                new TextRun(`${templateData.client_state+ "  "+ templateData.client_postal_code}`),

                new TextRun('\n\n'),
                new TextRun(`SSN: ${templateData.ss_number+ "  "} \t\t\t\t\t\t\t DOB: ${templateData.bdate}`),
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
    </div>
  );
};

export default Export2Word;