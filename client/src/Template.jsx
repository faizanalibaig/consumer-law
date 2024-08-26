import React from "react";
import html2canvas from "html2canvas";
import jsPdf from "jspdf";
import Document from "./Document";

function handleExport() {
  const templateOne = document.getElementById("template");
  html2canvas(templateOne, { scale: 1, }).then((canvas) => {
    const imgData = canvas.toDataURL("image/jpeg", 1.0);
    const height = canvas.height*210/canvas.width;

    const pdf = new jsPdf("p", "mm", "a4");
    pdf.addImage(imgData, "JPEG", 0, 0, 210, height) + 10;
    pdf.save("template1.pdf");
  });
}

const Template1 = () => {
  return (
    <div>
        <div id="template">
            <Document/>
        </div>
        <button onClick={handleExport}>export as pdf</button><br/>
        <button>export as docx</button>
    </div>
  );
};

export default Template1;