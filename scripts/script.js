// JavaScript Document
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

/* Hamburgermenu. Bron:ljc-dev. (2020, 26 juli). Easy hamburger menu with JS. DEV. https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0  */
var hammenu = document.querySelector(".hammenu")
var hamicon = document.querySelector(".hamicon")


function toggleHamburger(){
  hammenu.classList.toggle("showNav")
  hamicon.classList.toggle("showClose")
}

hamicon.addEventListener("click", toggleHamburger)

/* menubalk veranderd van kleur. Bron:Online Tutorials. (2020, 21 februari). Sticky Navigation Bar On Scroll Using Vanilla Javascript | Fixed Navbar on Scroll [Video]. YouTube. */
window.addEventListener("scroll",function(){
    var menubalk = document.querySelector(".menubalk");
    menubalk.classList.toggle("scroll",window.scrollY > 0);
})

