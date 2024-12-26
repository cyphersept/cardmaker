document.querySelector("button").onclick = downloadAllCards;
document.querySelector(".add-contents button").onclick = updateContents;
document.getElementById("card-type").onchange = () => {
  updateCardType();
  updateContents();
};

updateCardType();

// to html https://text-html.csom/

// regex filters to separate content out of god-awful formatting
const filters = {
  event: {
    // separateCard: /<p>[\S\s]*(?=<p>[\S\s]*<strong>.*:<\/strong>)/g,
    // title: /<p><strong>.*<\/strong>/g,
    // flavor: /(?:strong>)<em>.*<\/em>/g,
    activate: /Activate [\w ,]{9,60}\./,
    checks: /([0-9]+) .{0,60}(Test|Check)/g,
    conditions:
      /(?<=\>( ?|Activate.*))(Revealer Choice|Council Vote|Regent Choice)[:.-]?/g,
    damage: /Damage!/g,
    fuckColons: /:/g,
    fuckSpaces: /(<p>&nbsp;<\/p>|&nbsp;)/g,
    ifs: /IF .{5,50}:/g,
    if2: /(?<=IF[\s\S]*)IF/g,
    options:
      /(?<=(Revealer Choice|Council Vote|Regent Choice)[\s\S]*)&ldquo;.{3,50}&rdquo;(?! ([aA]ction|[cC]ard))/g,
    passFail: /(Pass|Failure|Partial Success|Partial|Fail)[.,-]?/g,
    removeQuantities: /\(x[0-9]\)(?=[\s\S]*<strong>.*:)/gm,
    ritualTier: /(?<=Tier [0-8]) ritual/g,
    startOfCard: /<p>.*<strong>.*<\/strong>:?/g,
    types: /(Leadership|Military|Stewardship|Intrigue|Magic)/g,
  },
  decree: {
    action: /Action:/g,
    damage: /Damage!/g,
    emTags: /(<em>|<\/em>)/g,
    flavour: /(<em>).+(<\/em>)/,
    startOfCard: /<p>.*<strong>.*<\/strong>:?/g,
    types: /(Leadership|Military|Stewardship|Intrigue|Magic)/g,
  },
  skill: {
    action: /Action:/g,
    damage: /Damage!/g,
    end: /<\/p>/,
    flavour: /(<em>).+(<\/em>)(?=\.?<\/p>)/g,
    fuckSpaces: /<p><br \/><br \/><\/p>/g,
    number: /[0-9](&amp;[0-9])?:/g,
    startOfCard: /<p>[0-9](&amp;[0-9])?:/g,
    title: /(?<=[0-9]: )([\w ]+) - /g,
    type: /<p>(Leadership|Military|Stewardship|Intrigue|Magic) - \w{3,15}<\/p>/g,
    typeOnly: /(Leadership|Military|Stewardship|Intrigue|Magic)/g,
  },
};

// Apply useful filters and return an array of each card's innerHTML
function applyEventFilters(str = "") {
  const f = filters.event;
  // Adds useful tags to keywords
  const newStr = str
    .replace(f.removeQuantities, "")
    .replace(f.ifs, "<b class='unfuck-colons'>$&</b>")
    .replace(f.if2, "<br><br>$&")
    .replace(f.ritualTier, "<label class='ritual word padder'>$&</label>")
    .replace(f.fuckColons, "")
    .replace(f.fuckSpaces, "")
    .replace(f.damage, "<b>$&</b>")
    .replace(f.passFail, "<b class='success unfuck-colons'>$1</b>")
    .replace(f.options, "<b class='quotes'>$&</b>")
    .replace(f.types, "<label class='type $&'>$&</label>")
    .replace(f.activate, "<label class='activate'>$&</label>")
    .replace(f.conditions, "<label class='condition'>$&</label>")
    .replace(f.checks, "<label class='check' data-diff='$1'>$&</label>")
    .replace(f.startOfCard, "!!BREAK$&");

  // Split each card to separate string in array
  const cards = newStr.split("!!BREAK");
  return cards;
}

function applyDecreeFilters(str = "") {
  const fd = filters.decree;
  // Adds useful tags to keywords
  const newStr = str
    .replace(fd.action, "<b>$&</b>")
    .replace(fd.damage, "<b>$&</b>")
    .replace(fd.types, "<label class='type $&'>$&</label>")
    .replace(fd.checks, "<label class='check' data-diff='$1'>$&</label>")
    .replace(fd.startOfCard, "!!BREAK$&");

  // Split each card to separate string in array
  const cards = [];
  newStr.split("!!BREAK").forEach((inner) => {
    const flavour = inner.match(fd.flavour);
    if (!flavour) return;
    const alts = flavour[0].replace(fd.emTags, "").split("|");
    alts.forEach((alt) => cards.push(inner.replace(fd.flavour, `$1${alt}$2`)));
  });
  return cards;
}

function applySkillFilters(str = "") {
  const fs = filters.skill;
  // Adds useful tags to keywords
  const newStr = str
    .replace(fs.type, "!!SECTION$&")
    .replace(fs.fuckSpaces, "")
    .replace(fs.action, "<b>$&</b>")
    .replace(fs.damage, "<b>$&</b>")
    .replace(fs.title, "$1!!INSERTTYPE")
    .replace(fs.startOfCard, "!!BREAK$&");

  const cards = [];
  newStr.split("!!SECTION").forEach((section) => {
    console.log(section);
    // Extract type of card for the section
    const typeHead = section.match(fs.type);
    if (!typeHead) return;
    const type = typeHead[0].match(fs.typeOnly)[0];
    const typeHTML = `<p class="card-type ${type.toLowerCase()}">${type}</p>`;
    const cardsStr = section.replace(fs.type, "");

    // Split each card to separate string in array
    cardsStr.split("!!BREAK").forEach((inner) => {
      const number = inner.match(fs.number);
      const numbers = number ? number[0].match(/[0-9]/g) : [0];

      // Separate card for each number
      numbers.forEach((n) => {
        const flavour = inner.match(fs.flavour);
        if (!flavour) return;
        const alts = flavour[0].replace(fs.emTags, "").split("|");

        // Separate card for each variant
        alts.forEach((alt) =>
          cards.push(
            inner
              .replace(fs.flavour, `<em class="flavour">${alt}$2`)
              .replace(fs.end, `<label data-value=${n}> </label>$&`)
              .replace(/!!INSERTTYPE/g, typeHTML)
              .replace(fs.number, "")
          )
        );
      });
    });
  });
  return cards;
}

// Generate card element with inner content and add it to the DOM
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

// Take inner-content input, clean and separate it into cards
function generateCards(content, type) {
  document.getElementById("cards").classList = type;
  if (type === "event")
    applyEventFilters(content).forEach((inner) => {
      createCard(inner);
    });
  else if (type === "decree")
    applyDecreeFilters(content).forEach((inner) => {
      createCard(inner);
    });
  else if (type === "skill")
    applySkillFilters(content).forEach((inner) => {
      createCard(inner);
    });
}

// Convert each card to png and download
function downloadAllCards() {
  const name = document.getElementById("name").value;
  const zip = new JSZip();
  const allCards = [...document.querySelectorAll(".card")];
  const addNodeToZip = async (domNode, name, zip) => {
    return domtoimage.toBlob(domNode).then((blob) => {
      zip.file(name + ".png", blob);
    });
  };
  const zipArr = allCards.map((node, i) => addNodeToZip(node, name + i, zip));

  Promise.all(zipArr).then(() =>
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, name + ".zip");
    })
  );
}

function updateCardType() {
  const newType = document.getElementById("card-type").value;
  const contentMap = {
    event: events,
    decree: decrees,
    skill: skills,
  };
  document.getElementById("inner-contents").value = contentMap[newType];
}

function updateContents() {
  const type = document.getElementById("card-type").value;
  document.getElementById("cards").innerHTML = "";
  generateCards(document.getElementById("inner-contents").value, type);
}
updateContents();
