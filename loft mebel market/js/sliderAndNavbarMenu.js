const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
const closeNavbarMenuIcon = document.querySelector(".close__navbar__menu__icon");
const navbarMenuIcon = document.querySelector(".navbar__menu__icon");
const navbarTop = document.querySelector(".navbar__top");

navbarMenuIcon.addEventListener("click", () => {
    navbarTop.style.left = 0;
})

closeNavbarMenuIcon.addEventListener("click", () => {
    navbarTop.style.left = "-100%";
})

var currentIndex = 1;

function displaySlide(n) {
    currentIndex = n;

    if (currentIndex > slides.length) {
        currentIndex = 1;
    }
    if (currentIndex < 1) {
        currentIndex = slides.length;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[currentIndex - 1].style.display = "block";
    dots[currentIndex - 1].className = "dot active";
}

displaySlide(currentIndex);

function changeSlide(n) {
    currentIndex += n;
    displaySlide(currentIndex);
}

function currentSlide(n) {
    displaySlide(n);
}