import bannerImg from "../static/laos-background.jpg";

const loadHome = () => {
    // get main div
    const contentDiv = document.getElementById("content");

    // load banner image div and img
    const bannerImageDiv = document.createElement("div");
    bannerImageDiv.className = "banner-image-div";
    contentDiv.appendChild(bannerImageDiv);

    const homeImg = document.createElement("img");
    homeImg.src = bannerImg;
    homeImg.alt = "Rice fields in Laos";
    bannerImageDiv.appendChild(homeImg);

    // load main paragraphs
    const homeParagraphsDiv = document.createElement("div");
    homeParagraphsDiv.className = "home-paragraphs";
    contentDiv.appendChild(homeParagraphsDiv);

    const p1 = document.createElement("p");
    p1.innerHTML = `For thirty years, Rice and Spice has served up the finest culinary creations in the land, 
    from our minty <i>laap</i> to our fiery papaya salad. Cool off with a fresh smoothie and one
    of our famous desserts.`;

    const paraBreak = document.createElement('br');

    const p2 = document.createElement("p");
    p2.innerHTML = `All of our ingredients are sourced fresh locally, with rice harvested from the very fields
    you'll overlook from our breezy veranda. With a relaxing atmosphere and the best food around,
    Rice & Spice is a memory you won't soon forget.`;

    homeParagraphsDiv.appendChild(p1);
    homeParagraphsDiv.appendChild(paraBreak);
    homeParagraphsDiv.appendChild(p2);
}

export { loadHome };