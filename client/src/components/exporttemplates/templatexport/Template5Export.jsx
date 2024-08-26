import React from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import COLLECTION_DOCUMENT from "../../../templates/COLLECTION_DOCUMENT";
import Export5Word from "../word/Word5";
import { LogicHandler } from "../LogicHandler";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Template5Export = () => {
  const componentRef = useRef();
  const navigate= useNavigate();
  const LOGINDETAILS = JSON.parse(localStorage.getItem("LOGINDETAILS"));

  const generateAndSaveFiles = async (printIframe) => {
    try {
      if (LOGINDETAILS === null) {
        setTimeout(() => {
          navigate('/auth/login');
        }, 100); 
        return; 
      }

      const isAllGood = await LogicHandler();
      if (!isAllGood) {
        setTimeout(() => {
          navigate('/payment');
        }, 100); 
        return;  
      }

      const scale = window.devicePixelRatio; // Adjust scale based on device pixel ratio
      const canvas = await html2canvas(printIframe.contentDocument.body, {
        scale: scale, // Use the adjusted scale
        useCORS: true,
      });
      const imgData = canvas.toDataURL("image/jpeg");

      // Adjust dimensions based on the scale
      const pdfWidth = (canvas.width / scale) * 0.264583;
      const pdfHeight = (canvas.height / scale) * 0.264583;
      const pdf = new jsPDF("p", "mm", [pdfWidth, pdfHeight]);

      const imgWidth = pdfWidth * 0.8;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgX = pdfWidth - imgWidth;
      const imgY = (pdfHeight - imgHeight) / 2;
      pdf.addImage(imgData, "JPEG", imgX, imgY, imgWidth, imgHeight);

      pdf.save("template.pdf");
    } catch (error) {
      console.log(error, "in first template");
    }
  };

  // Function to trigger printing using react-to-print
  const DOWNLOADPDF = useReactToPrint({
    content: () => componentRef.current,
    print: async (printIframe) => {
      await generateAndSaveFiles(printIframe);
    },
  });

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div ref={componentRef} className="main-document">
        <COLLECTION_DOCUMENT />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3  gap-3 w-full px-[1.5rem] sm:px-[5rem] lg:px-[17rem] pb-[5rem]">
        <div className="">
          <Export5Word />
        </div>
        {/* <div>
      <button onClick={generateAndSaveFiles}  className="h-[60px] bg-[#688deb] w-full text-white font-semibold">
        Print</button>
    </div> */}
        <button
          onClick={async () => {
            try {
              if (LOGINDETAILS === null) {
                setTimeout(() => {
                  navigate('/auth/login');
                }, 100); 
                return; 
              }

              const isAllGood = await LogicHandler();
              if (!isAllGood) {
                setTimeout(() => {
                  navigate('/payment');
                }, 100); 
                return;
              }
              handlePrint();
            } catch (error) {}
          }}
          className="h-[60px] bg-[#688deb] w-full text-white font-semibold"
        >
          Print
        </button>
        <div>
          <button
            onClick={DOWNLOADPDF}
            className="h-[60px] bg-[#688deb] w-full text-white font-semibold"
          >
            Export As PDF
          </button>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default Template5Export;
