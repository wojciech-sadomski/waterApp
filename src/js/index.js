import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */
const btnAdd = document.querySelector(".btnAdd--style--js");
const btnRemove = document.querySelector(".btnRemove--style--js");
const demand = document.querySelector(".statistic__text--js");
const key = new Date().toISOString().slice(0, 10);

let glassesSaved = localStorage.getItem("glassesDrinked");
let glassesNeed = 8;
let glassesDrinked = 0;
if (!glassesSaved) {
  glassesDrinked = glassesSaved;
  demand.innerHTML = `${glassesNeed - glassesDrinked}`;
} else {
  demand.innerHTML = `${glassesNeed - glassesDrinked}`;
}
const addGlass = function () {
  console.log(glassesDrinked);
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
