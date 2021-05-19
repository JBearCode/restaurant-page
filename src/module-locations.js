import laosMapChart from "../static/laos-map-chart.jpg";

const loadLocations = () => {
    // get main div
    const contentDiv = document.getElementById("content");

    // load banner image div and img
    const bannerImageDiv = document.createElement("div");
    bannerImageDiv.className = "banner-image-div";
    contentDiv.appendChild(bannerImageDiv);

    const homeImg = document.createElement("img");
    homeImg.src = laosMapChart;
    homeImg.alt = "Map of our locations";
    bannerImageDiv.appendChild(homeImg);

    // load locations cards div
    const menuCardsDiv = document.createElement("div");
    menuCardsDiv.className = "menu-cards-div";
    contentDiv.appendChild(menuCardsDiv);

    // function to create menu cards
    let menuFactory = (source, alt, description) => {
        // create and append card div
        const menuCard = document.createElement('div');
        menuCard.className = "menu-card";
        menuCard.style.backgroundColor = "#D2F1FF";
        menuCardsDiv.appendChild(menuCard);
        // create card img div
        const imgDiv = document.createElement('div');
        imgDiv.className = "card-img";
        menuCard.appendChild(imgDiv);
        // add image
        const cardImg = document.createElement('img');
        cardImg.src = source;
        cardImg.alt = alt;
        imgDiv.appendChild(cardImg);
        // create and append para div
        const paraDiv = document.createElement('div');
        paraDiv.className = "card-p";
        menuCard.appendChild(paraDiv);
        // add paragraph and content
        const para = document.createElement('p');
        para.textContent = description;
        paraDiv.appendChild(para);
    }

    let src1 = "../static/vientiane.jpg";
    let alt1 = "The capital city";
    let desc1 = `Located in the heart of Laos' capital city, our prestigious first location
    has hosted presidents and dignitaries from around the globe.`;
    menuFactory(src1, alt1, desc1);

    let src2 = "../static/luang-prabang.jpg";
    let alt2 = "One of Laos' many waterfalls";
    let desc2 = `Overlooking a secluded waterfall, our Luang Prabang location offers a
    natural and relaxing environment for your expensive meal.`;
    menuFactory(src2, alt2, desc2);

    let src3 = "../static/phongsali.jpg";
    let alt3 = "Mountains of Laos";
    let desc3 = `Our newest location is nestled in Phongsaly's mountains, but you may not
    see them through all the fog. In fact, even seeing your food may be prove a challenge.`;
    menuFactory(src3, alt3, desc3);
}

const context = require.context('../static', false, /\.jpg$/);
function importAll(targetContext) {
  const files = {};
  targetContext.keys().forEach((item) => {
    files[item.replace('./', '')] = targetContext(item);
  });
  return files;
}

const allMyFiles = importAll(context);

export { loadLocations, laosMapChart };