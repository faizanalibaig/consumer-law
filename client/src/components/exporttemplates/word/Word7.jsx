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
import { useSelector } from "react-redux";
import { LogicHandler } from "../LogicHandler";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Export7Word = () => {
  const selector = useSelector((state) => state.allpurposecreditslice);
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
        disputed_personal_information: `${selector.disputedPersonalInformation}`,
        disputed_personal_information_instruction: `${selector.disputedPersonalInformationInstruction}`,
        disputed_accounts: `${selector.disputedAccounts}`,
        disputed_accounts_instruction: `${selector.disputedAccountsInstruction}`,
        disputed_inquiries: `${selector.disputedinquiries}`,
        disputed_inquires_instruction: `${selector.disputedinquiresinstruction}`,
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
                    text: `Name: ${
                      templateData.client_first_name +
                      "  " +
                      templateData.client_middle_name +
                      "  " +
                      templateData.client_last_name
                    }`,
                    bold: true,
                    heading: HeadingLevel.TITLE,
                  }),
                  new TextRun("\n"),
                  new TextRun("\n"),
                  new TextRun({
                    text: `Address: ${templateData.client_address} `,
                    bold: true,
                  }),
                  new TextRun("\n"),
                  new TextRun("\n"),
                  new TextRun({
                    text: `${
                      templateData.client_city +
                      "  " +
                      templateData.client_state +
                      "  " +
                      templateData.client_postal_code
                    } `,
                    bold: true,
                  }),

                  new TextRun("\n"),
                  new TextRun("\n"),
                  new TextRun(
                    "I am communicating because as in, Civil Action No. 1:23-cv-2659 FEDERAL TRADE COMMISSION, and CONSUMER FINANCIAL PROTECTION BUREAU, Plaintiffs, v. TRANSUNION RENTAL SCREENING SOLUTIONS, INC., a Delaware corporation, and TRANS UNION LLC, a Delaware limited liability company, Defendants, I am also a victim of said case"
                  ),

                  new TextRun("\n\n"),
                  new Paragraph(
                    `On numerous occasions I asked you to put a freeze on my credit report because I may have been a victim of identity theft. I clearly made you aware of the situation before any accounts were falsely opened and you lied and said that a credit freeze was active pursuant to my call. You lied and never put a credit freeze as said leaving the report open for possible identity theft. . Pursuant to § 621 of the FCRA 15 U.S.C. § 1681s, a violation of the FCRA constitutes an unfair or deceptive act or practice in or affecting commerce, in violation of Section 5(a) of the FTC Act, 15 U.S C. § 45(a).`
                  ),

                  new TextRun("\n\n"),
                  new Paragraph(
                    `The FCRA imposes several obligations on Consumer Reporting Agencies, including obligations to: (1) follow reasonable procedures to assure the maximum possible accuracy of the information in Consumer Reports, 15 U.S.C. § 1681e(b), and (2) upon a consumer’s request, disclose to the consumer all information contained in the consumer’s file and the sources of the information, 15 U.S.C. § 1681g(a). 16. Pursuant to § 621 of the FCRA, 15 U.S.C. § 1681s, a violation of the FCRA constitutes an unfair or deceptive act or practice in or affecting commerce, in violation of Section 5(a) of the FTC Act, 15 U.S.C. § 45(a). `
                  ),

                  new TextRun("\n\n"),
                  new Paragraph(
                    `Instruction: Please remove the false information listed :`
                  ),

                  new TextRun("\n"),
                  new Paragraph({
                    text: `${
                      templateData.disputed_personal_information + "  "
                    }`,
                    bold: true,
                  }),
                  new Paragraph({
                    text: `${templateData.disputed_personal_information_instruction}`,
                    bold: true,
                  }),

                  new TextRun("\n\n"),
                  new Paragraph(
                    `Instruction: Please remove the false information listed :`
                  ),

                  new TextRun("\n"),
                  new Paragraph({
                    text: `${templateData.disputed_accounts + " "}`,
                    bold: true,
                  }),
                  new Paragraph({
                    text: `${templateData.disputed_accounts_instruction}`,
                    bold: true,
                  }),

                  new TextRun("\n\n"),
                  new Paragraph(
                    `Instruction: Please remove the false information listed :`
                  ),

                  new TextRun("\n"),
                  new Paragraph({
                    text: `${templateData.disputed_inquiries + "  "}`,
                    bold: true,
                  }),
                  new Paragraph({
                    text: `${templateData.disputed_inquires_instruction}`,
                    bold: true,
                  }),

                  new TextRun("\n"),
                  new TextRun("\n"),
                  new TextRun(
                    "If said accounts are in fact believed to be correct, provide documentation from the original creditor bearing my signature as validation that in fact those accounts are legitimate. That documentation is to be sent to the Consumer Financial Protection Bureau (“CFPB”) as well as sent to me via certified mail, as per the Fair Credit Reporting Act 15 U.S. Code 1681i. Procedure in case of disputed accuracy. Also 15 U.S. Code 1611 Criminal liability for willful and knowing violation. I am keeping a careful record of your actions, including Method of Verification, I DO NOT CONSENT to e-oscar or any means of automated verification. In maintaining a careful record, I am filing a complaint with the Consumer Financial Protection Bureau for your erroneous reporting of the item (s) and non-compliance."
                  ),

                  new TextRun("\n"),
                  new TextRun("\n"),
                  new TextRun(
                    "I further remind you, as in Wegner vs. TransUnion Corp., No. 95-6445 (C.D.Cal.Nov.14,1995 ), you may be liable for the willful non-compliance, and for failure to respond satisfactorily I will seek {$1000.00} per violation for : 1 ) Defamation 2 ) Negligent Enablement of Identity Fraud 3 ) Violations of the Fair Credit Reporting Act. Please govern yourself accordingly,"
                  ),

                  new TextRun("\n\n"),
                  new Paragraph(`Thank you for your assistance.`),

                  new TextRun("\n"),
                  new Paragraph(`Regards,`),

                  new TextRun("\n"),
                  new TextRun({
                    text: `${
                      templateData.client_first_name +
                      " " +
                      templateData.client_last_name
                    }`,
                    bold: true,
                  }),

                  new TextRun("\n\n"),
                  new TextRun({
                    text: `${templateData.ss_number}`,
                    bold: true,
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

export default Export7Word;
