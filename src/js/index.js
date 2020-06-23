import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */
const btnAdd = document.querySelector(".btnAdd--style--js");
const btnRemove = document.querySelector(".btnRemove--style--js");
const demand = document.querySelector(".statistic__text--js");
const day = new Date().toISOString().slice(0, 10);
let glassesDrinked = localStorage.getItem(day);
let glassesNeed = 8;
console.log(day);

if (localStorage.getItem(day)) {
  glassesDrinked = localStorage.getItem(day);
  demand.innerHTML = `${glassesDrinked}`;
} else {
  localStorage.setItem(day, 0);
  glassesDrinked = localStorage.getItem(day);
  demand.innerHTML = `${glassesDrinked}`;
}
const addGlass = function () {
  glassesDrinked++;
  localStorage.setItem(day, glassesDrinked);
  demand.innerHTML = `${glassesDrinked}`;
  if (glassesDrinked > glassesNeed) {
    document.documentElement.style.setProperty("--drops", "url(img/drops.svg)");
    console.log("działa");
  }
};

const checkRunning = document.querySelector(".list__active--running--js");

checkRunning.addEventListener("change", function () {
  if (checkCodeing == "true") {
    glassesNeed = glassesNeed + 3;
    console.log(`potrzebujesz ${glassesNeed}`);
  }
});
const checkCodeing = document.querySelector(".list__active--codeing--js");

checkCodeing.addEventListener("change", function () {
  document.documentElement.style.setProperty("--drops", "url(img/nuke.svg)");
});

const removeGlass = function () {
  if (glassesDrinked <= 0) {
    glassesDrinked = 0;
  } else {
    glassesDrinked--;
    localStorage.setItem(day, glassesDrinked);
    demand.innerHTML = `${glassesDrinked}`;
  }
  if (glassesDrinked < glassesNeed) {
    document.documentElement.style.setProperty("--drops", "none");
  }
};

btnAdd.addEventListener("click", addGlass);
btnRemove.addEventListener("click", removeGlass);
