const loadMenu = () => {
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
    buttonHome.id = "home-button";
    buttonHome.textContent = "Home";
    buttonHome.classList.remove("active");

    const buttonMenu = document.createElement("button");
    buttonMenu.setAttribute = ('type', 'button');
    buttonMenu.className = "active";
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
    homeImg.src = "../static/food-banner.jpg";
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

    let src1 = "../static/pho.jpg";
    let alt1 = "A bowl of pho";
    let desc1 = "Spiced with an array of herbs and flavors, this steaming traditional dish warms the very soul.";
    menuFactory(src1, alt1, desc1);
}

export { loadMenu };





