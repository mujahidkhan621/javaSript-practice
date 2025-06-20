// This script is used to change the icon of the list menu and toggle the visibility of the social media links on mobile devices.
let toggle_icon = document.querySelector(".js_btn");
let for_mobile = document.querySelector(".social-media")
let icon_btn = document.querySelectorAll(".js_link-icon")
toggle_icon.onclick = tochange;
// to invoke the tochange function  on each btn 
for (let each_btn of icon_btn)
    each_btn.onclick = tochange;

function tochange() {
    // for changing hambergur menu
    toggle_icon.classList.toggle("fa-list");
    toggle_icon.classList.toggle("fa-xmark")
    //  for changing class
    if (window.innerWidth > 770) {
        for_mobile.classList.add("social-media")
    } else {
        for_mobile.classList.toggle("social-media-resp")
        for_mobile.classList.toggle("social-media")
    }
}

