const hamburger = document.querySelector(".hamburger");
const navul = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navul.classList.toggle("active");
});