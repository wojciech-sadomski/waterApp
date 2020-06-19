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
console.log(day);

if (localStorage.getItem(day)) {
  glassesDrinked = localStorage.getItem(day);
  demand.innerHTML = `${glassesDrinked}`;
  console.log("jest");
} else {
  localStorage.setItem(day, 0);
  glassesDrinked = localStorage.getItem(day);
  demand.innerHTML = `${glassesDrinked}`;
  console.log(localStorage.getItem(day));
  console.log("nie było");
}
console.log(glassesDrinked);

const addGlass = function () {
  glassesDrinked++;
  localStorage.setItem(day, glassesDrinked);
  demand.innerHTML = `${glassesDrinked}`;
  if (glassesDrinked > 8) {
    document.documentElement.style.setProperty(
      "--drops",
      "url(../assets/img/drops.svg)"
    );
  }
};

// const checkRunning = document.querySelector(".list__active--running--js");
// if (checkRunning) {
//   document.documentElement.style.setProperty("--drops", "none");
// }
const removeGlass = function () {
  if (glassesDrinked <= 0) {
    glassesDrinked = 0;
  } else {
    glassesDrinked--;
    localStorage.setItem(day, glassesDrinked);
    demand.innerHTML = `${glassesDrinked}`;
  }
  if (glassesDrinked < 8) {
    document.documentElement.style.setProperty("--drops", "none");
  }
};

btnAdd.addEventListener("click", addGlass);
btnRemove.addEventListener("click", removeGlass);
