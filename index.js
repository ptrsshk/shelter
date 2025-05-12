import { pets } from "./petsData.js";

const BURGER_BTN = document.getElementById("menu__burger");
const MENU = document.getElementById("header__menu");
const BG_SHADOWING = document.getElementById("bg__shadowing");
const MENU_LINK = document.querySelectorAll(".menu__link");

BURGER_BTN.addEventListener("click", () => {
  BURGER_BTN.classList.toggle("active");
  MENU.classList.toggle("active");
  BG_SHADOWING.classList.toggle("active");
  document.body.classList.toggle("locked");
});

MENU_LINK.forEach((link) => {
  link.addEventListener("click", () => {
    BURGER_BTN.classList.remove("active");
    MENU.classList.remove("active");
    BG_SHADOWING.classList.remove("active");
    document.body.classList.remove("locked");
  });
});

BG_SHADOWING.addEventListener("click", () => {
  BURGER_BTN.classList.remove("active");
  MENU.classList.remove("active");
  BG_SHADOWING.classList.remove("active");
  document.body.classList.remove("locked");
});

const CARD = document.querySelectorAll(".card");
const MODAL = document.getElementById("modal__wrapper");
const IMAGE = document.getElementById("modal__image");
const H3 = document.getElementById("modal__heading-3");
const H4 = document.getElementById("modal__heading-4");
const TEXT = document.getElementById("modal__text");
const AGE = document.getElementById("age");
const DISEASES = document.getElementById("diseases");
const INOCULATIONS = document.getElementById("inoculations");
const PARASITES = document.getElementById("parasites");
const CLOSE = document.getElementById("modal__close");

CARD.forEach((el) => {
  el.addEventListener("click", () => {
    const petData = pets.filter(
      (pet) => pet.name === el.children[1].children[0].innerText,
    )[0];
    IMAGE.src = petData.img;
    H3.innerText = petData.name;
    H4.innerText = petData.type + " - " + petData.breed;
    TEXT.innerText = petData.description;
    AGE.innerHTML = "<b>Age: </b>" + petData.age;
    DISEASES.innerHTML = "<b>Diseases: </b>" + petData.diseases;
    INOCULATIONS.innerHTML = "<b>Inoculations: </b>" + petData.inoculations;
    PARASITES.innerHTML = "<b>Parasites: </b>" + petData.parasites;

    document.body.classList.toggle("locked");
    MODAL.classList.add("open");
  });
});

MODAL.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    MODAL.classList.remove("open");
    document.body.classList.remove("locked");
  }
});

CLOSE.addEventListener("click", () => {
  MODAL.classList.remove("open");
  document.body.classList.remove("locked");
});
