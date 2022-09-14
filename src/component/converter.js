import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import download from "downloadj";

const tesel = document.getElementById("testingpng");
htmlToImage.toPng(tesel).then(function (dataUrl) {
  download(dataUrl, "my-node.png");
  alert("yey");
});
