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


const Export5Word = () => {
  const selector = useSelector((state) => state.collectionslice);
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
        disputed_collection: `${selector.disputedCollection}`,
        disputed_collection_instruction: `${selector.disputedCollectionInstruction}`,
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
                  new TextRun({
                    text: `Attention:`,
                    bold: true,
                  }),

                  new TextRun("\n"),
                  new TextRun("\n"),
                  new TextRun(
                    "I am sending this to you today because I have pulled my most recent credit report and I am extremely confused. It is very troubling as these items are reported as collections."
                  ),

                  new TextRun("\n\n"),
                  new Paragraph(
                    `According to the Fair Debt Collection Practices Act (FDCPA), specifically 15 U.S.C. § 1692e (previously mentioned as 807) which prohibits the use of false or misleading information, and 15 U.S.C. § 1692j (previously mentioned as 8012) which prohibits furnishing deceptive forms, the agent in question is in non-compliance. Per 15 U.S.C. § 1692g, I should have been provided written notification of this matter at least five days in advance, which I was not. As the sole original creditor, I have the exclusive authority to validate this debt. I hereby state that I DO NOT VALIDATE THIS DEBT.`
                  ),

                  new TextRun("\n\n"),
                  new Paragraph(`According to 15 U.S.C. 1681i, Paragraph (5), if a consumer disputes any information and it is
                  found to be inaccurate, incomplete, or unverifiable, the consumer reporting agency must
                  promptly delete the item`),

                  new TextRun("\n"),
                  new Paragraph(`${templateData.disputed_collection}`),
                  new TextRun("\n"),
                  new Paragraph(
                    `${templateData.disputed_collection_instruction}`
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

export default Export5Word;
