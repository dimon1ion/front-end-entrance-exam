import { downloadPdf } from "./downloadPdf";

window.onload = function () {
  downloadPdf();
};

[...document.querySelectorAll("p, ul")].forEach((el) => {
  el.addEventListener("click", function () {
    if (this.innerText === "empty") {
      this.innerText = "";
    }
    this.contentEditable = true;
    this.focus();
    this.addEventListener("blur", function () {
      if (this.innerText.trim().length === 0) {
        this.innerText = "empty";
      }
      this.contentEditable = false;
    });
  });
});
