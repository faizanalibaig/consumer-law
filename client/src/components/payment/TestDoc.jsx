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

const TestDoc = () => {
  const handleDownload = async () => {
    try {
      const templateData = {
        client_state: "California",
        client_city: "Los Angeles",
        client_first_name: "John",
        client_middle_name: "Doe",
        client_last_name: "Smith",
        bdate: "01/01/1990",
        ss_number: "123-45-6789",
        id_number: "DL123456789",
        client_address: "123 Main St",
        client_postal_code: "90001",
        time_at_address: "5 years",
        date_identity_theft_started: "01/01/2022",
        todays_current_date: "04/04/2024",
        correct_first_name: "Muhammad",
        correct_middle_name: "JHON",
        correct_last_name: "ALP",
        pevious_address_wrong_info_reason:
          "BALAH BALAH BALAH BALAH BALAH.......",
        employer_Information_explanation:
          "he is wrong becaouse................",
      };

      const IDENTITY_THEFT_VICTIM_Template = new Document({
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

      const CREDIT_REPORT_DISPUTE_Template = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${templateData.client_first_name} ${templateData.client_middle_name} ${templateData.client_last_name}\n`,
                    bold: true,
                  }),
                  new TextRun(`${templateData.client_address}`),
                  new TextRun(
                    `${templateData.client_city}, ${templateData.client_state}, ${templateData.client_postal_code}`
                  ),
                  new TextRun("\n"),
                  new TextRun(`${templateData.todays_current_date}`),
                  new TextRun("\n"),
                  new TextRun("\n"),
                  new TextRun(
                    "According to 15 U.S.C. 1681i, Paragraph (5), if a consumer disputes any information and it is"
                  ),
                  new TextRun(
                    "found to be inaccurate, incomplete, or unverifiable, the consumer reporting agency must"
                  ),
                  new TextRun("promptly delete the item."),
                  new TextRun("\n"),
                  new TextRun("\n"),
                  new TextRun(
                    "The following personal information is reporting incorrectly on my credit report:"
                  ),
                  new TextRun("\n"),
                  new TextRun("\n"),
                  new TextRun({
                    text: `Name: The correct spelling of my name is ${templateData.correct_first_name} ${templateData.correct_middle_name} ${templateData.correct_last_name}`,
                    bold: true,
                  }),
                  new TextRun("\n"),
                  new TextRun("\n"),
                  new TextRun("Current Address:"),
                  new TextRun("\n"),
                  new TextRun({
                    text: "My correct current address is:",
                    bold: true,
                  }),
                  new TextRun("\n"),
                  new TextRun(`${templateData.client_address}`),
                  new TextRun("\n"),
                  new TextRun(
                    `${templateData.client_city} ${templateData.client_state} ${templateData.client_postal_code}`
                  ),
                  new TextRun("\n"),
                  new TextRun("\n"),

                  new TextRun("Previous Address:"),
                  new TextRun("\n"),
                  new TextRun({
                    text: "The following previous addresses are wrong:",
                    bold: true,
                  }),
                  new TextRun(
                    `${templateData.pevious_address_wrong_info_reason}`
                  ),

                  new TextRun("\n"),
                  new TextRun("Employment:"),
                  new TextRun("\n"),

                  new TextRun("\n"),
                  new TextRun({
                    text: "The following previous employers are wrong:",
                  }),
                  new TextRun("\n"),
                  new TextRun("\n"),

                  new TextRun(
                    `${templateData.employer_Information_explanation}`
                  ),
                  new TextRun("\n"),
                  new TextRun("\n"),

                  new TextRun(
                    "Please update my credit file to reflect the proper spelling and data as I have indicated above."
                  ),
                  new TextRun("\n"),
                  new TextRun(
                    "Please also remove the old inaccurate addresses. I do not want to be mistaken for someone"
                  ),
                  new TextRun("\n"),
                  new TextRun(
                    "else because of these errors that you are reporting."
                  ),
                  new TextRun("\n"),
                  new TextRun("Thank you,"),
                  new TextRun("\n"),

                  new TextRun(`${templateData.client_middle_name}`),
                  new TextRun(
                    `${templateData.client_first_name} ${templateData.client_last_name}`
                  ),
                  new TextRun("\n"),
                  new TextRun("\n"),

                  new TextRun({
                    text: `SSN: ${templateData.ss_number} \t\t\t\t\t\t\t DOB: ${templateData.bdate}`,
                    bold: true,
                  }),
                ],
              }),
            ],
          },
        ],
      });

      const IDENTITY_THEFT_LETTER_FCRA = new Document({
        sections: [
          {
            properties: {},
            children: [
              new TextRun("\n"),
              new TextRun({
                text: "Dear Credit Reporting Agency,",
              }),
              new TextRun("\n"),
              new TextRun("\n"),


              new TextRun("This is to inform you that I,"),
              new TextRun({
                text: `${templateData.client_first_name} ${templateData.client_middle_name} ${templateData.client_last_name} `,
                bold: true,
              }),
              new TextRun("a victim of identity theft and pursuant to "),
              new TextRun({
                text: "FCRA 605b 615(f) and 6023(a)(6) ",
                bold: true
              }),
              new TextRun(`an identity theft report can be used to permanently block fraudulent information that results from identity theft such accounts or addresses from appearing on victim’s credit profile. It will also make it sure that these debts do not reappear on the victim's credit report. Identity theft reports can prevent a company from continuing to collect debts that result from identity theft. A copy of these sections is enclosed and pursuant to `),
              new TextRun({
                text: "o 605b FCRA (15U.S.C. and 1681c -2) ",
                bold: true
              }),
              new TextRun(`Block Information Resulting from Identity Theft, except as provided in this section. A consumer reporting agency shall block the reporting of any information in a file of a consumer that the consumer identifies as information resulting from an alleged identity theft `),
              new TextRun({
                text: "t NO LATER THAN 4 DAYS",
                bold: true
              }),
              new TextRun(" after the date of the receipt by such agency of "),
              new TextRun("\n"),

              new TextRun("\n"),
              new TextRun("\t\t1. Appropriate proof of identity of consumer; Legible copies of Driver’s \t\t\tLicense, Social Security Card are provided.\n"),
              new TextRun("\t\t2. A copy of the Identity Theft Report.\n"),
              new TextRun("\t\t3. Identification of such information by the consumer, and a list of accounts \t\t\topened by identity theft and FTC Identity Theft Affidavit and Complaint are \t\t\tprovided.\n"),
              new TextRun("\t\t4. A statement by the consumer that the information is not the information \t\t\trelating to any transaction by the consumer.\n"),
              new TextRun("\t\t5. Finally, an Identity Theft Victim's Statement needs to be provided.\n"),
              new TextRun("\n"),
              new TextRun("\n"),



              new TextRun("Sincerely,"),
              new TextRun("\n"),
              new TextRun("\n"),
              new TextRun("\n"),


              new TextRun({
                text: `${templateData.client_first_name} ${templateData.client_last_name} ${templateData.client_last_name}\n`,
                bold: true
              }),
              new TextRun({
                text: `${templateData.client_address} ${templateData.client_city}\n`,
                bold: true
              }),
              new TextRun({
                text: `${templateData.client_state} ${templateData.client_postal_code}\n`,
                bold: true
              }),
              new TextRun("\n"),
              new TextRun("\n"),

              new TextRun({
                text: `SSN: ${templateData.ss_number} \t\t\t\t\t\t\t DOB: ${templateData.bdate}`,
                bold: true,
              }),

            ],
          },
        ],
      });

      Packer.toBlob(IDENTITY_THEFT_LETTER_FCRA).then((blob) => {
        console.log(blob);
        saveAs(blob, "example.docx");
        console.log("Document created successfully");
      });
    } catch (error) {
      console.error("Error generating document:", error);
    }
  };

  return (
    <div>
      <button onClick={handleDownload}>Export as DOCX</button>
    </div>
  );
};

export default TestDoc;


