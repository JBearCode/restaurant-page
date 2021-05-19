function loadHome() {

const contentDiv = document.getElementById("content");

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



}




