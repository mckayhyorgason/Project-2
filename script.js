/////////// Element in Viewport////////////
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom > 0
    );
}


document.addEventListener("scroll", function() {
    const elements = document.querySelectorAll('.int-ext-container');

    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        }
    });
});


///////////////// Hamburger Menu ///////////////
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", function () {
        // Toggle the display of the mobile menu
        console.log(mobileMenu)
        if (mobileMenu.style.display === "flex") {
            mobileMenu.style.display = "none";
        } else {
            mobileMenu.style.display = "flex";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    menuBtn.addEventListener("click", function () {
        // Remove and re-add the class to retrigger animation
        if (mobileMenu.classList.contains("active")) {
            mobileMenu.classList.remove("active");
            void mobileMenu.offsetWidth; // Force browser to recognize class removal
            mobileMenu.classList.add("inactive"); // Play closing animation
        } else {
            mobileMenu.classList.remove("inactive"); // Reset state
            mobileMenu.classList.add("active"); // Play opening animation
        }
    });
});

window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    document.querySelector(".parallax").style.backgroundPositionY = scrollPos * 0.5 + "px";
});
