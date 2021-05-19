const loadHeader = () => {
    // get main div
    const contentDiv = document.getElementById("static-header");
    
    // load header
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
    buttonHome.className = "active";

    const buttonMenu = document.createElement("button");
    buttonMenu.setAttribute = ('type', 'button');
    buttonMenu.id = "menu-button";
    buttonMenu.textContent = "Menu";

    const buttonLocations = document.createElement("button");
    buttonLocations.setAttribute = ('type', 'button');
    buttonLocations.id = "locations-button";
    buttonLocations.textContent = "Locations";

    // append buttons
    nav.appendChild(buttonHome);
    nav.appendChild(buttonMenu);
    nav.appendChild(buttonLocations);
}

export { loadHeader };





