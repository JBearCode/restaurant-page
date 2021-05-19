import { loadHome } from './module-home.js';
import './style.css';

console.log("Webpack is working");
window.onload = loadHome();

const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const locationsButton = document.getElementById("locations-button");

function homeClick() {
    if (homeButton.className === "active") {
        console.log('home page already active');
        return;
    }
    else {
        eraseContent();
        loadHome();
    }
}

function menuClick() {
    if (menuButton.className === "active") {
        console.log('menu page already active');
        return;
    }
    else {
        eraseContent();
        loadMenu();
    }
}

function locationsClick() {
    if (locationsButton.className === "active") {
        console.log('locations page already active');
        return;
    }
    else {
        eraseContent();
        loadLocations();
    }
}

function eraseContent() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
}

homeButton.addEventListener('click', homeClick);
menuButton.addEventListener('click', menuClick);
locationsButton.addEventListener('click', locationsClick);


