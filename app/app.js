document.addEventListener("DOMContentLoaded", function () {

    //navigation
    const menuWraper = document.getElementsByClassName("menu-wrapper");
    const hamburger = document.querySelector(".hamburger-menu");
    const menu = document.querySelector(".menu");

    function animateHamburger() {
        hamburger.classList.toggle("animate");
    };
    function openMenu() {
        animateHamburger();
        cosole.log("click");
    }

    menuWraper[0].addEventListener("click", openMenu);

})