import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const SECTION_IDS = [
  "pdf-hero",
  "pdf-about",
  "pdf-experience",
  "pdf-projects",
  "pdf-skills",
  "pdf-general-skills",
  "pdf-education",
  "pdf-footer",
];

export const downloadResumePDF = async () => {
  document.body.classList.add("pdf-mode");

  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();

  for (let i = 0; i < SECTION_IDS.length; i++) {
    const el = document.getElementById(SECTION_IDS[i]);
    if (!el) continue;

    const canvas = await html2canvas(el, {
      scale: 3,
      backgroundColor: "#ffffff",
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    if (i !== 0) pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight);
  }

  pdf.save("portfolio.pdf");
  document.body.classList.remove("pdf-mode");
};
