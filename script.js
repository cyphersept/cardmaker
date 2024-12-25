document.querySelector("button").onclick = downloadAllCards;

// to html https://text-html.com/

const cardInfo = {
  bgSrc: "https://www.mtgcardmaker.com/mcmaker/createcard.jpg",
};

// regex filters to separate content out of god-awful formatting
const filters = {
  removeQuantities: /\(x[0-9]\)(?=[\s\S]*<strong>.*:)/gm,
  separateCard: /<p>[\S\s]*(?=<p>[\S\s]*<strong>.*:<\/strong>)/g,
  startOfCard: /<p>.*<strong>.*<\/strong>:?/g,
  title: /<p><strong>.*<\/strong>/g,
  flavor: /(?:strong>)<em>.*<\/em>/g,
  types: /(Leadership|Military|Stewardship|Intrigue|Magic)/g,
  passFail: /(Pass|Failure|Partial Success|Partial|Fail)/g,
  conditions:
    /(?<=\>( ?|Activate.*))(Revealer Choice|Council Vote|Regent Choice)[:.-]?/g,
  options:
    /(?<=(Revealer Choice|Council Vote|Regent Choice)[\s\S]*)&ldquo;.{3,50}&rdquo; ?(?!<)/g,
  fuckColons: /:/g,
  fuckSpaces: /(<p>&nbsp;<\/p>|&nbsp;)/g,
  checks: /([0-9]+) .*(Test|Check)/g,
  ifs: /(?<=IF[\s\S]*)IF/g,
};

// Apply useful filters and return an array of each card's innerHTML
function applyFilters(str = "") {
  // Adds useful tags to keywords
  const newStr = str
    .replace(filters.removeQuantities, "")
    .replace(filters.fuckColons, "")
    .replace(filters.fuckSpaces, "")
    .replace(filters.ifs, "<br><br>$&")
    .replace(filters.types, "<label class='type $&'>$&</label>")
    .replace(filters.passFail, "<b>$&</b>")
    .replace(filters.options, "<b class='quotes'>$&</b>")
    .replace(filters.conditions, "<label class='condition'>$&</label>")
    .replace(filters.checks, "<label class='check' data-diff='$1'>$&</label>")
    .replace(filters.startOfCard, "!!BREAK$&");

  // Split each card to separate string in array
  const cards = newStr.split("!!BREAK");
  return cards;
}

const data = `<strong>Mercenaries: </strong><em>Their demands may be outrageous, but fighting men are always needed, and I worry what they might do if we reject them&hellip;</em> Council Vote:</p>
<p>&ldquo;Hire Them&rdquo; <em>We always need more soldiers, expensive as they may be. </em>Lose 3 Treasury, add one Army to the Reserve.</p>
<p>&ldquo;Send them Off&rdquo; <em>Did they really think we would consider such outrageous demands?</em> Skill check 11 Military + Intrigue. Pass, nothing happens. Fail, add 2 Bandits and 1 War Machine to PLAINS.</p>
<p><strong>Mercenaries: </strong><em>Their demands may be outrageous, but fighting men are always needed, and I worry what they might do if we reject them&hellip;</em> Council Vote:</p>
<p>&ldquo;Hire Them&rdquo; <em>We always need more soldiers, expensive as they may be. </em>Lose 3 Treasury, add one Army to the Reserve.</p>
<p>&ldquo;Send them Off&rdquo; <em>Did they really think we would consider such outrageous demands?</em> Skill check 11 Military + Intrigue. Pass, nothing happens. Fail, add 2 Bandits and 1 War Machine to PLAINS.</p>
<p><strong>Mercenaries: </strong><em>Their demands may be outrageous, but fighting men are always needed, and I worry what they might do if we reject them&hellip;</em> Council Vote:</p>
<p>&ldquo;Hire Them&rdquo; <em>We always need more soldiers, expensive as they may be. </em>Lose 3 Treasury, add one Army to the Reserve.</p>
<p>&ldquo;Send them Off&rdquo; <em>Did they really think we would consider such outrageous demands?</em> Skill check 11 Military + Intrigue. Pass, nothing happens. Fail, add 2 Bandits and 1 War Machine to PLAINS.</p>
<p>`;

// function parseCard(str) {
//   const splitLines = str.split("\n\n");
//   const titleRegex = /^.*:/;
//   splitLines.map((line) => {
//     const parts = line.split();
//   });
// }

function createCard(inner) {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const content = document.createElement("div");

  card.classList = "card";
  img.classList = "bg";
  content.classList = "content";
  content.innerHTML = inner;

  card.appendChild(img);
  card.appendChild(content);
  document.getElementById("cards").appendChild(card);
}

function generateCardsFromContent(content) {
  applyFilters(content).forEach((inner) => {
    createCard(inner);
  });
}

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

generateCardsFromContent(events);
