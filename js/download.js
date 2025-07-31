function applyPdfColors() {
  const root = document.documentElement.style;

  root.setProperty('--job-tag-bg', 'rgba(126, 115, 18, 1)');
  root.setProperty('--job-tag-text-bg', '#000000');
  root.setProperty('--about-job-bg', '#b5e9d5'); 
  root.setProperty('--role-name-bg', '#000000');
  root.setProperty('--info-bg', '#3f3d3d');

  root.setProperty('--tools-title-color', '#000000');
  root.setProperty('--tools-tag-bg', '#000000');
  root.setProperty('--tools-tag-text', '#ffffff');
  root.setProperty('--tools-bg', '#ffffff');

  root.setProperty('--highlight', '#1cc96a'); 
}

function resetColors() {
  const root = document.documentElement.style;

  root.setProperty('--job-tag-bg', 'rgba(126, 115, 18, 0.4)');
  root.setProperty('--job-tag-text-bg', 'rgba(221, 241, 99, 1)');
  root.setProperty('--about-job-bg', 'rgba(235, 249, 242, 1)');
  root.setProperty('--role-name-bg', 'rgba(0, 0, 0, 1)');
  root.setProperty('--info-bg', 'rgba(63, 61, 61, 1)');

  root.setProperty('--tools-title-color', 'rgba(0, 0, 0, 1)');
  root.setProperty('--tools-tag-bg', 'rgba(0, 0, 0, 1)');
  root.setProperty('--tools-tag-text', 'rgba(255, 255, 255, 1)');
  root.setProperty('--tools-bg', 'rgba(255, 255, 255, 1)');

  root.setProperty('--highlight', '#28d979');
}

async function downloadResume() {
  applyPdfColors();

  const element = document.querySelector('.container');

  const canvas = await html2canvas(element, {
    scale: 4,
    useCORS: true,
    backgroundColor: '#ffffff'
  });

  resetColors();

  const imgData = canvas.toDataURL('image/jpeg', 1.0);
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF('p', 'pt', 'a4');

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = canvas.width;
  const imgHeight = canvas.height;
  const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

  const imgX = 0;
  const imgY = 0;
  const imgW = imgWidth * ratio;
  const imgH = imgHeight * ratio;

  pdf.addImage(imgData, 'JPEG', imgX, imgY, imgW, imgH);
  pdf.save('resume.pdf');
}

