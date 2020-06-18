import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */
const btnAdd = document.querySelector(".btnAdd--style--js");
const btnRemove = document.querySelector(".btnRemove--style--js");
const demand = document.querySelector(".statistic__text--js");

let glassesNeed = 8;
const glassesSaved = localStorage.getItem("glassesDrinked");
let glassesDrinked = 8;
let glassesDemand = glassesNeed - glassesDrinked;

if (glassesSaved) {
  if (glassesDemand <= glassesSaved) {
    glassesDrinked = glassesSaved;
    demand.innerHTML = `${glassesDrinked}`;
  } else {
    glassesDrinked = glassesNeed;
    demand.innerHTML = `${glassesDemand}`;
  }
} else {
  glassesDrinked = 0;
  demand.innerHTML = `${glassesDemand}`;
}
const addGlass = function () {
  glassesDrinked++;
  localStorage.setItem("glassesDrinked", glassesDrinked);
  demand.innerHTML = `${glassesNeed - glassesDrinked}`;
};

// const checkRunning = document.querySelector(".list__active--running--js");
// if (checkRunning) {
//   document.documentElement.style.setProperty("--drops", "none");
// }
const removeGlass = function () {
  glassesDrinked--;
  localStorage.setItem("glassesDrinked", glassesDrinked);
  demand.innerHTML = `${glassesNeed - glassesDrinked}`;
};

btnAdd.addEventListener("click", addGlass);
btnRemove.addEventListener("click", removeGlass);
