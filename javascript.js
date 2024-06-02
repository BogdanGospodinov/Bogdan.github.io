// script.js
function scrollToAbout() {
    var aboutSection = document.getElementById('about-section');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}