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

const Export6Word = () => {
  const selector = useSelector((state) => state.bankruptcyslice);
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
        bank_ruptcy: `${selector.bankruptcy}`,
        bankruptcy_reason: `${selector.bankruptcyReason}`,
        bankruptcy_instructions: `${selector.bankruptcyInstructions}`,
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
                    "I am communicating because I have recently checked my most recent credit reports and noticed a Bankruptcy in the Public records of my credit file and I do not recognize it. Pursuant to § 621 of the FCRA, 15 U.S.C. § 1681s, a violation of the FCRA constitutes an unfair or deceptive act or practice in or affecting commerce, in violation of Section 5(a) of the FTC Act, 15 U.S.C. § 45(a). The listed bankruptcy has violated my federally protected consumer rights to privacy and confidentiality under 15 USC 1681."
                  ),

                  new TextRun("\n\n"),
                  new Paragraph(
                    `Whoever willfully and knowingly (1)gives false or inaccurate information or fails to provide information which he is required to disclose under the provisions of this subchapter or any regulation issued thereunder, (2)uses any chart or table authorized by the Bureau under section 1606 of this title in such a manner as to consistently understate the annual percentage rate determined under section 1606(a (1)(A) of this title, or (3)otherwise fails to comply with any requirement imposed under this subchapter, shall be fined not more than $5,000 or imprisoned not more than one year, or both. According to the provisions of 15 USC 1692g, 15 USC 1681b, and the Fair Credit Reporting Act (FCRA), I have not granted any permission for your agency to list this public record on my credit report. For all accounts mentioned below, I require verification and validation of every detail including notations, dates, and balances, irrespective of their reported status. I also request evidence of your verification method, and the specific details that correspond with mine. Absent precise matches, the account must be removed immediately in accordance with the FCRA. Pertaining to 15 USC 1605, 15 USC 1666b, 15 USC 1681a, and 15 USC 1681i(2)(A)(i), any reported late payments on this account must be promptly removed.`
                  ),

                  new TextRun("\n\n"),
                  new Paragraph(
                    `Instruction: Please remove the false reporting listed accounts :`
                  ),

                  new TextRun("\n"),
                  new Paragraph({
                    text: `${templateData.bank_ruptcy}`,
                    bold: true,
                  }),
                  new TextRun("\n"),
                  new Paragraph({
                    text: `${templateData.bankruptcy_reason}`,
                    bold: true,
                  }),
                  new TextRun("\n"),
                  new Paragraph({
                    text: `${templateData.bankruptcy_instructions}`,
                    bold: true,
                  }),

                  new TextRun("\n"),
                  new TextRun("\n"),
                  new TextRun(
                    "15 U.S.C. 1681s-2 ( A ) ( 1 ) A person shall not furnish any information relating to a consumer to any consumer reporting agency if the person knows or has reasonable cause to believe that the information is inaccurate."
                  ),

                  new TextRun("\n"),
                  new TextRun("\n"),
                  new TextRun(
                    "If said accounts are in fact believed to be correct, provide documentation from the original creditor bearing my signature as validation that in fact those accounts are legitimate. That documentation is to be sent to the Consumer Financial Protection Bureau (“CFPB”) as well as sent to me via certified mail, as per the Fair Credit Reporting Act 15 U.S. Code 1681i. Procedure in case of disputed accuracy. Also 15 U.S. Code 1611. Criminal liability for willful and knowing violation. I am keeping a careful record of your actions, including Method of Verification, I DO NOT CONSENT to e-oscar or any means of automated verification. In maintaining a careful record, I am filing a complaint with the Consumer Financial Protection Bureau for your erroneous reporting of the item (s) and non-compliance."
                  ),

                  new TextRun("\n"),
                  new TextRun("\n"),
                  new TextRun(
                    "I further remind you, as in Wegner vs. TransUnion Corp., No. 95-6445 (C.D.Cal.Nov.14,1995 ), you may be liable for the willful non-compliance, and for failure to respond satisfactorily I will seek {$1000.00} per violation for : 1 ) Defamation 2 ) Negligent Enablement of Identity Fraud 3 ) Violations of the Fair Credit Reporting Act. Please govern yourself accordingly"
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

export default Export6Word;
