let navItems = document.querySelector(".navbar-nav").children;
navItems[0].style.transform = "rorate(78ded)";

let bottomBtn = document.querySelector(".top-arrow");
bottomBtn.addEventListener('click', function(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
});
 
let loader = document.querySelector("#loader");

function animationHidde(){
    loader.style.display = "none";
}