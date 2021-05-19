import { loadHeader } from './module-header.js';
import { loadHome } from './module-home.js';
import { loadMenu } from './module-menu.js';
import './style.css';

console.log("Webpack is working");

window.onload = function() {
    loadHeader();
    loadHome();
    document.getElementById("home-button").addEventListener('click', homeClick);
    document.getElementById("menu-button").addEventListener('click', menuClick);
    document.getElementById("locations-button").addEventListener('click', locationsClick);
}

function homeClick() {
    const homeButton = document.getElementById("home-button");
    console.log("homeClick() ran");
    if (homeButton.className === "active") {
        console.log('home page already active');
        return;
    }
    else {
        eraseContent();
        loadHome();
        clearClass();
        homeButton.classList = "active";
    }
}

function menuClick() {
    const menuButton = document.getElementById("menu-button");
    console.log("menuClick() ran");
    if (menuButton.className === "active") {
        console.log('menu page already active');
        return;
    }
    else {
        eraseContent();
        loadMenu();
        clearClass();
        menuButton.classList = "active";
    }
}

function locationsClick() {
    const locationsButton = document.getElementById("locations-button");
    console.log("locationsClick() ran");
    if (locationsButton.className === "active") {
        console.log('locations page already active');
        return;
    }
    else {
        eraseContent();
        loadLocations();
        clearClass();
        locationsButton.classList = "active";
    }
}

function eraseContent() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
}

function clearClass() {
    document.getElementById("home-button").className = "";
    document.getElementById("menu-button").className = "";
    document.getElementById("locations-button").className = "";
}



