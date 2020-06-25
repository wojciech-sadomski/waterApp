import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */
const btnAdd = document.querySelector(".btnAdd--style--js");
const btnRemove = document.querySelector(".btnRemove--style--js");
const demand = document.querySelector(".statistic__text--js");
const day = new Date().toISOString().slice(0, 10);
//lista aktywności
const checkRunning = document.querySelector(".list__active--running--js");
const checkWalking = document.querySelector(".list__active--walking--js");
const checkCycling = document.querySelector(".list__active--cycling--js");
const checkSwimming = document.querySelector(".list__active--swimming-js");
const checkCodeing = document.querySelector(".list__active--codeing--js");
//lista zmiennych
let glassesDrinked = localStorage.getItem(day);
let glassesNeed = 8;
//warunek początkowy
if (localStorage.getItem(day)) {
  glassesDrinked = localStorage.getItem(day);
  demand.innerHTML = `${glassesDrinked}`;
  if (glassesDrinked > glassesNeed) {
    document.documentElement.style.setProperty("--drops", "url(img/drops.svg)");
  }
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
    document.documentElement.style.setProperty("--colapse", "2s");
    console.log("działa");
  }
};
const removeGlass = function () {
  if (glassesDrinked <= 0) {
    glassesDrinked = 0;
  } else {
    glassesDrinked--;
    localStorage.setItem(day, glassesDrinked);
    demand.innerHTML = `${glassesDrinked}`;
  }
  if (glassesDrinked <= glassesNeed) {
    document.documentElement.style.setProperty("--drops", "none");
    document.documentElement.style.setProperty("--colapse", "0s");
  }
};
//checkbox
checkRunning.addEventListener("change", function () {
  glassesNeed = glassesNeed + 3;
  console.log(`potrzebujesz ${glassesNeed}`);
});
checkWalking.addEventListener("change", function () {
  glassesNeed = glassesNeed + 2;
  console.log(`potrzebujesz ${glassesNeed}`);
});
checkCycling.addEventListener("change", function () {
  glassesNeed = glassesNeed + 4;
  console.log(`potrzebujesz ${glassesNeed}`);
});
checkSwimming.addEventListener("change", function () {
  glassesNeed = glassesNeed + 3;
  console.log(`potrzebujesz ${glassesNeed}`);
});
//przyciski
btnAdd.addEventListener("click", addGlass);
btnRemove.addEventListener("click", removeGlass);
