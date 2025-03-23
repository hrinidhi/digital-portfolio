// Dark Mode Toggle
function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

// Typing Effect for "I'm Developer"
const text = "Developer";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.querySelector(".typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 200);
    }
}

// Start typing effect when the page loads
window.onload = function () {
    typeEffect();
    / Toggle Dark/LightMode
function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

// Smooth scrolling for navigation
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
});

};
