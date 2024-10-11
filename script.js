// Image Slider
let currentSlide = 0;
const slides = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Replace with your image paths

function showSlide(index) {
    const slide = document.getElementById('slide');
    slide.src = slides[index];
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in Effect
const fadeIns = document.querySelectorAll('.fade-in');

function checkScroll() {
    fadeIns.forEach(fadeIn => {
        const rect = fadeIn.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            fadeIn.classList.add('visible');
        } else {
            fadeIn.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Initial check
