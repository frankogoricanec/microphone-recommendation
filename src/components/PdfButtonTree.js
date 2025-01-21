import React from "react";

const PdfButtonTree = () => {
  const openPdf = () => {
    const pdfPath = "/files/dec_tree.pdf"; // Relative to the public folder
    window.open(pdfPath, "_blank");
  };

  return (
    <button onClick={openPdf} className="tree-button">
      Pregled svih mikrofona - PDF
    </button>
  );
};

export default PdfButtonTree;
