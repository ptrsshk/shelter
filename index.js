const BURGER_BTN = document.getElementById("menu__burger");
const MENU = document.getElementById("header__menu");
const BG_SHADOWING = document.getElementById("bg__shadowing");
const MENU_LINK = document.querySelectorAll(".menu__link");

BURGER_BTN.addEventListener("click", () => {
    BURGER_BTN.classList.toggle("active");
    MENU.classList.toggle("active");
    BG_SHADOWING.classList.toggle("active");
    document.body.classList.toggle("locked")
});

MENU_LINK.forEach((link) => {link.addEventListener("click", () => {
    BURGER_BTN.classList.remove("active");
    MENU.classList.remove("active");
    BG_SHADOWING.classList.remove("active");
    document.body.classList.remove("locked")
})
});

BG_SHADOWING.addEventListener("click", () => {
    BURGER_BTN.classList.remove("active");
    MENU.classList.remove("active");
    BG_SHADOWING.classList.remove("active");
    document.body.classList.remove("locked")
});
