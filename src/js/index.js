import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const add = function () {
  console.log("HELLO 🚀");
};

const btnAdd = document.querySelector(".btnAdd--style--js");
btnAdd.addEventListener("click", add);
const btnRemove = document.querySelector(".btnRemove--style--js");
btnRemove.addEventListener("click", add);
