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

// Wait for the entire HTML document to be fully loaded and parsed
document.addEventListener("DOMContentLoaded", function () {

    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(entries => {
        // Loop through all observed elements (bars) that have intersected (entered the viewport)
        entries.forEach(entry => {
            // console.log(entry)
            // Check if the element is currently visible (at least 50% in viewport as per threshold below)
            if (entry.isIntersecting) {
                const el = entry.target; // Get the DOM element that is being observed
            
                // Based on its class, add the corresponding animation class to trigger CSS animation
                if (el.classList.contains("bar-html")) {
                    el.classList.add("animate-html"); // Starts the HTML bar animation
                } else if (el.classList.contains("bar-css")) {
                    el.classList.add("animate-css");  // Starts the CSS bar animation
                } else if (el.classList.contains("bar-js")) {
                    el.classList.add("animate-js");   // Starts the JS bar animation
                }

                // Stop observing this element so the animation only runs once
                observer.unobserve(el);
            }
        });
    }, {
        threshold: 0.5 // Trigger when at least 50% of the element is visible in the viewport
    });

    // Select all elements with bar-html, bar-css, and bar-js classes and observe them
    document.querySelectorAll('.bar-html, .bar-css, .bar-js').forEach(bar => {
        observer.observe(bar); // Start observing each progress bar
    });

});
// I have made the above function with help of AI;


// animation for move_box_fram

const radios = document.querySelectorAll(".bobble");
const panels = document.querySelectorAll(".content-panel");
let currentIndex = 0;
let intervalId;

function showPanel(index) {
    panels.forEach((panel, i) => {
        panel.classList.toggle("active", i === index);
        radios[i].checked = (i === index);
    });
    currentIndex = index;
}

function autoCycle() {
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % panels.length;

        showPanel(currentIndex);
    }, 3000); // Change every 3 seconds
}

// Manual selection by radio buttons
radios.forEach((radio, i) => {
    radio.addEventListener("change", () => {
        clearInterval(intervalId); // Stop auto cycle on manual selection
        showPanel(i);
        autoCycle(); // Optionally restart cycle
    });
});

// Initialize
showPanel(currentIndex);
autoCycle();
