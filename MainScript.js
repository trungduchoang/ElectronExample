import { hapiHoteLinks } from "./dataSources/index.js";

(() => {
  document.getElementById("myBtn").onclick = () => {
    execute(0);
  };
})();

function execute(i) {
  if (hapiHoteLinks.length === 0 || i < 0 || i >= hapiHoteLinks.length) {
    appendText("(ᵔᴥᵔ) (=^ェ^=) ʕ •ᴥ•ʔ  Done!");
    return;
  }

  appendText(`\nOpen ${hapiHoteLinks[i]}`);

  var popup = window.open(
    `https://gcpdev.happyhotel.jp/${hapiHoteLinks[i]}`,
    "",
    "width=20, height=20"
  );

  setTimeout(() => {
    popup.close();
    execute(i + 1);
  }, 300);
}

function appendText(text) {
  var paragraph = document.getElementById("myP");
  paragraph.appendChild(document.createElement("br"));
  paragraph.appendChild(document.createTextNode(text));
  window.scrollTo(0, document.body.scrollHeight);
}
