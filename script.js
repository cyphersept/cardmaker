document.querySelector("button").onclick = downloadAllCards;

// to html https://text-html.com/

const cardInfo = {
  bgSrc: "https://www.mtgcardmaker.com/mcmaker/createcard.jpg",
};

const filters = {
  removeQuantities: /\(x[0-9]\) <strong>(?=.*:)/gm,
  title: /<p><strong>.*<\/strong>>/g,
  flavor: /(?:strong>)<em>.*<\/em>/g,
};

const data = `<strong>Mercenaries: </strong><em>Their demands may be outrageous, but fighting men are always needed, and I worry what they might do if we reject them&hellip;</em> Council Vote:</p>
<p>&ldquo;Hire Them&rdquo; <em>We always need more soldiers, expensive as they may be. </em>Lose 3 Treasury, add one Army to the Reserve.</p>
<p>&ldquo;Send them Off&rdquo; <em>Did they really think we would consider such outrageous demands?</em> Skill check 11 Military + Intrigue. Pass, nothing happens. Fail, add 2 Bandits and 1 War Machine to PLAINS.</p>
<p>
  
 <strong>Mercenaries: </strong><em>Their demands may be outrageous, but fighting men are always needed, and I worry what they might do if we reject them&hellip;</em> Council Vote:</p>
<p>&ldquo;Hire Them&rdquo; <em>We always need more soldiers, expensive as they may be. </em>Lose 3 Treasury, add one Army to the Reserve.</p>
<p>&ldquo;Send them Off&rdquo; <em>Did they really think we would consider such outrageous demands?</em> Skill check 11 Military + Intrigue. Pass, nothing happens. Fail, add 2 Bandits and 1 War Machine to PLAINS.</p>
<p>
  
  <strong>Mercenaries: </strong><em>Their demands may be outrageous, but fighting men are always needed, and I worry what they might do if we reject them&hellip;</em> Council Vote:</p>
<p>&ldquo;Hire Them&rdquo; <em>We always need more soldiers, expensive as they may be. </em>Lose 3 Treasury, add one Army to the Reserve.</p>
<p>&ldquo;Send them Off&rdquo; <em>Did they really think we would consider such outrageous demands?</em> Skill check 11 Military + Intrigue. Pass, nothing happens. Fail, add 2 Bandits and 1 War Machine to PLAINS.</p>
<p>`;

function parseCard(str) {
  const splitLines = str.split("\n\n");
  const titleRegex = /^.*:/;
  splitLines.map((line) => {
    const parts = line.split();
  });
}

function createCard(obj) {}

async function addNodeToZip(domNode, name, zip) {
  return domtoimage.toBlob(domNode).then(function (blob) {
    zip.file(name + ".png", blob);
  });
}

function downloadAllCards() {
  const name = document.getElementById("name").value;
  const zip = new JSZip();
  const zipArr = [...document.querySelectorAll(".card")].map((node, index) =>
    addNodeToZip(node, name + index, zip)
  );

  Promise.all(zipArr).then(() =>
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, name + ".zip");
    })
  );
}

console.log("Hello world");
