const style = document.createElement('style');
style.id = 'print-cleanup-style';
style.textContent = `
  * {
    filter: none !important;
    box-shadow: none !important;
    transition: none !important;
    transform: none !important;
    animation: none !important;
    cursor: default !important;
  }
`;

function addPrintCleanupStyles() {
  document.head.appendChild(style);
}

function removePrintCleanupStyles() {
  const existingStyle = document.getElementById('print-cleanup-style');
  if (existingStyle) {
    existingStyle.remove();
  }
}


export function downloadPdf() {
  document.getElementById("download-pdf").addEventListener("click", () => {
    addPrintCleanupStyles();
    const main = document.getElementById("main");
    var opt = {
      margin: 1,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(main).set(opt).save().then(() => {
        removePrintCleanupStyles();
    });
  });
}
