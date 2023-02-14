import html2canvas from "html2canvas";
export const saveImage = (div, callback) => {
  html2canvas(document.querySelector(div)).then((canvas) => {
    const img = canvas.toDataURL("image/png");
    console.log(img);

    FileMaker.PerformScriptWithOption(callback, JSON.stringify(img), 5);
  });
};
