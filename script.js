// to toggle btwn menu icons and display of mobile menu bar 
let toggle_btn = document.querySelector(".fa-solid");
let mobile_menu = document.querySelector(".js_menu")
let link_btn = document.querySelectorAll(".js_link")
toggle_btn.onclick = tochange;
// to invoke the tochange function  on each btn 
for (let each_btn of link_btn)
each_btn.onclick = tochange;

function tochange() {
    // for changing hambergur menu
    toggle_btn.classList.toggle("fa-bars");
    toggle_btn.classList.toggle("fa-xmark")
    //  for changing class
    if(window.innerWidth > 650){
        mobile_menu.classList.add("nav_menu")
    }else{
         mobile_menu.classList.toggle("nav_menu")
        mobile_menu.classList.toggle("to_display_menu")
    }
}


// for shrinking menu height 
const nav = document.querySelector("nav");
const logo = document.querySelector(".nav_logo");
const heading = document.querySelector(".nav_logo h1");



window.addEventListener("scroll", () => {

    if (window.scrollY > 10) {

        if (window.innerWidth < 650) {
            nav.style.height = "80px";
        } else {
            logo.style.opacity = "0";
            logo.style.display = "none";
            nav.style.height = "80px";
        }

    } else {

        if (window.innerWidth < 650) {
            nav.style.height = "80px";
        } else {
            logo.style.display = "flex";
            logo.style.opacity = "1";
            nav.style.height = "150px";
        }
    }
});


//  for animtion when visible 

function animation(){

}