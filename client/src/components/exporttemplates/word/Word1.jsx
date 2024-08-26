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


const ExportWord = () => {

    const selector=useSelector( state=> state.affidivatslice)
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
        id_number: `${selector.licensenumber}`,
        client_address: `${selector.address}`,
        client_postal_code: `${selector.postalcode}`,
        time_at_address: `${selector.timeataddress}`,
        date_identity_theft_started: `${selector.dateidentitytheftstarted}`,
        todays_current_date: `${selector.todayscurrentdate}`,
      };
    

      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: "\t\t\tIDENTITY THEFT VICTIM'S STATEMENT OF IDENTITY FRAUD",
                    bold: true,
                    heading: HeadingLevel.TITLE,
                  }),
                  new TextRun("\n"),
                  new TextRun(
                    `\t\t\t\t\tSTATE OF ${templateData.client_state}`
                  ),
                  new TextRun("\n"),
                  new TextRun({
                    text: "\t\t\t\tDECLARATION BY AFFIDAVIT",
                    bold: true,
                  }),
                  new TextRun("\n"),
                  new TextRun(`\t\t\t\t\tCITY OF ${templateData.client_city}`),
                  new TextRun("\n\n"),
                  new Paragraph({
                    text: `Affiant declares, that my full legal name is:  ${templateData.client_first_name} ${templateData.client_middle_name} ${templateData.client_last_name}`,
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: `Affiant declares, that Affiant is a resident of the state of: ${templateData.client_state}.`,
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: "Affiant declares that the Affiant is a victim of Identity Theft.",
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: `Affiant declares that the events described in this affidavit took place and my name was: ${templateData.client_first_name} ${templateData.client_middle_name} ${templateData.client_last_name}`,
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: `Affiant declares hers/his Date of Birth: ${templateData.bdate}.`,
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: `Affiant declares that Affiant’s social security number is: ${templateData.ss_number}.`,
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: `Affiant declares that Affiant’s driver’s license number is: ${templateData.id_number}.`,
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: `Affiant declares that Affiant’s current address is: ${templateData.client_address} ${templateData.client_city}, ${templateData.client_state} ${templateData.client_postal_code}.`,
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: `Affiant declares that Affiant has lived at this address since: ${templateData.time_at_address}`,
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: `Affiant declares, when the events described in this affidavit took place Affiant’s address was: ${templateData.client_address} ... ${templateData.client_city}, ${templateData.client_state} ${templateData.client_postal_code}.`,
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: "Affiant declares that Affiant did not authorize anyone to use Affiant’s name or personal information to seek money, credit, loans, goods or services described in this report.",
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: "Affiant declares that Affiant did not receive any benefits, money, goods or services as a result of the events described in this report.",
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: "Affiant declares to the best of Affiant’s knowledge and belief that he/she suspects that their information was stolen by a professional business service or individual which provided consumer and business loans for immigrants/individuals with no identity.",
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: "Affiant declares that Affiant suspects this online company used Affiant’s personal information or identification documents to get money, credit, loans, goods or services without Affiant’s knowledge or authorization.",
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: "Affiant declares that an identity thief has stolen Affiant’s identity and has opened accounts in Affiant’s name.",
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: "Affiant declares that Affiant didn’t authorize anyone to use his/her information nor did Affiant receive any goods or services from the accounts in Affiant’s name.",
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: "Affiant is willing to work with law enforcement",
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: `Affiant declares that the identity theft began on or about: ${templateData.date_identity_theft_started}.`,
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: `Affiant first discovered the identity theft on or about: ${templateData.todays_current_date}.`,
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph({
                    text: `Sincerely, ${templateData.client_first_name} ${templateData.client_middle_name} ${templateData.client_last_name}.`,
                    bullet: {
                      level: 0,
                    },
                  }),
                  new Paragraph("\n"),
                  new Paragraph("\n"),
                  new Paragraph({
                    text: ` Date: ${templateData.todays_current_date} \t\t\t\t\t\t\t Signature: ${templateData.client_first_name}`,
                  }),
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

export default ExportWord;