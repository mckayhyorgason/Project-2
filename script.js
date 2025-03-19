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