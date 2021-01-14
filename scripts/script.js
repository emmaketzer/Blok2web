// JavaScript Document
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var hammenu = document.querySelector(".hammenu")
var hamicon = document.querySelector(".hamicon")


function toggleHamburger(){
  hammenu.classList.toggle("showNav")
  hamicon.classList.toggle("showClose")
}

hamicon.addEventListener("click", toggleHamburger)


window.addEventListener("scroll",function(){
    var menubalk = document.querySelector(".menubalk");
    menubalk.classList.toggle("scroll",window.scrollY > 0);
})
