const loadHome = () => {
    // get main div
    const contentDiv = document.getElementById("content");
    
    /* load header
    const homeHeader = document.createElement("header");
    contentDiv.appendChild(homeHeader);
    
    const restaurantNameDiv = document.createElement("div");
    restaurantNameDiv.id = "restaurant-name-div";
    homeHeader.appendChild(restaurantNameDiv);
    
    const h1 = document.createElement("h1");
    h1.textContent = "Rice & Spice";
    
    const h2 = document.createElement("h2");
    h2.textContent = "Authentic Lao Cuisine";
    
    restaurantNameDiv.appendChild(h1);
    restaurantNameDiv.appendChild(h2);

    // load nav
    const nav = document.createElement("nav");
    homeHeader.appendChild(nav);

    const buttonHome = document.createElement("button");
    buttonHome.setAttribute = ('type', 'button');
    buttonHome.className = "active";
    buttonHome.id = "home-button";
    buttonHome.textContent = "Home";

    const buttonMenu = document.createElement("button");
    buttonMenu.setAttribute = ('type', 'button');
    buttonMenu.id = "menu-button";
    buttonMenu.textContent = "Menu";

    const buttonLocations = document.createElement("button");
    buttonLocations.setAttribute = ('type', 'button');
    buttonLocations.id = "locations-button";
    buttonLocations.textContent = "Locations";

    nav.appendChild(buttonHome);
    nav.appendChild(buttonMenu);
    nav.appendChild(buttonLocations);
    */

    // load banner image div and img
    const bannerImageDiv = document.createElement("div");
    bannerImageDiv.className = "banner-image-div";
    contentDiv.appendChild(bannerImageDiv);

    const homeImg = document.createElement("img");
    homeImg.src = "../static/laos-background.jpg";
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