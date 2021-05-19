import feastImg from "../static/food-banner.jpg";
import pho from "../static/pho.jpg";
import redCurry from "../static/red-curry.jpg";
import padThai from "../static/shrimp-pad-thai.jpg";
import garlicPork from "../static/garlic-pork.jpg";
import smoothie from "../static/smoothie.jpg";
import mango from "../static/mango-sticky-rice.jpg";

const loadMenu = () => {
    // get main div
    const contentDiv = document.getElementById("content");

    // load banner image div and img
    const bannerImageDiv = document.createElement("div");
    bannerImageDiv.className = "banner-image-div";
    contentDiv.appendChild(bannerImageDiv);

    const homeImg = document.createElement("img");
    homeImg.src = feastImg;
    homeImg.alt = "A Lao feast";
    bannerImageDiv.appendChild(homeImg);

    // load menu cards div
    const menuCardsDiv = document.createElement("div");
    menuCardsDiv.className = "menu-cards-div";
    contentDiv.appendChild(menuCardsDiv);

    // function to create menu cards
    let menuFactory = (source, alt, description) => {
        // create and append card div
        const menuCard = document.createElement('div');
        menuCard.className = "menu-card";
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

    let src1 = pho;
    let alt1 = "A bowl of pho";
    let desc1 = `Spiced with an array of herbs and flavors, 
    this steaming traditional dish of traditional pho warms the very soul.`;
    menuFactory(src1, alt1, desc1);

    let src2 = redCurry;
    let alt2 = "Red curry";
    let desc2 = `Your mouth isn't ready for the explosion 
    of spicy flavor delivered by each spoonful of our famous red curry`;
    menuFactory(src2, alt2, desc2);

    let src3 = padThai;
    let alt3 = "Shrimp pad thai";
    let desc3 = `Our shrimp pad thai is a perfect blend of sweet, sour, and spicy
    that will leave you in breathless wonder.`;
    menuFactory(src3, alt3, desc3);

    let src4 = garlicPork;
    let alt4 = "Garlic pork";
    let desc4 = `Garlic lovers travel from distant continents to experience our 
    famous garlic pork, served with rice and topped with an egg fried to perfection`;
    menuFactory(src4, alt4, desc4);

    let src5 = smoothie;
    let alt5 = "Smoothie";
    let desc5 = `Cool off with a sweet smoothie made from 100% locally-sourced organic fruit`;
    menuFactory(src5, alt5, desc5);

    let src6 = mango;
    let alt6 = "Mango sticky rice";
    let desc6 = `Once you've tasted a serving of mango sticky rice, you may find yourself
    ordering a dozen more. Don't say we didn't warn you.`;
    menuFactory(src6, alt6, desc6);
}

export { loadMenu };





