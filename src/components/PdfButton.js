import React from "react";

const PdfButton = () => {
  const openPdf = () => {
    const pdfPath = "/files/audio_enhance.pdf"; // Relative to the public folder
    window.open(pdfPath, "_blank");
  };

  return (
    <button onClick={openPdf}>
      Saznaj kako besplatno poboljšati kvalitetu audio signala.
    </button>
  );
};

export default PdfButton;
