//Animate hamburger menu
const menu= document.querySelector(".nav__hamburger");
menu.addEventListener("click", animateMenu);

var nav1Bar= document.querySelector(".nav__hamburger__bar1");
var nav2Bar= document.querySelector(".nav__hamburger__bar2");
var nav3Bar= document.querySelector(".nav__hamburger__bar3");

var linksMenu= document.querySelector(".nav__links");

var navigation= document.querySelector(".nav");

function animateMenu(){
    nav1Bar.classList.toggle("active-nav__hamburger__bar1");
    nav2Bar.classList.toggle("active-nav__hamburger__bar2");
    nav3Bar.classList.toggle("active-nav__hamburger__bar3");

    linksMenu.classList.toggle("active-nav__links");

    navigation.classList.toggle("active-nav");
}