import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import download from "downloadjs";
import { jsPDF } from "jspdf";

export default function converter(extention) {
  const cv_el = document.getElementById("cv");
  const name_file = `CV_${username}_${dateNow()}.${extention}`;
  switch (extention) {
    case "pdf":
      const doc = new jsPDF();
      doc.html(cv_el, 10, 10);
      doc.save(name_file);
      break;
    case "png":
      htmlToImage.toPng(cv_el).then(function (dataUrl) {
        download(dataUrl, name_file);
      });
      break;

    default:
      download(cv_el, name_file, "text/html");
      break;
  }
}
