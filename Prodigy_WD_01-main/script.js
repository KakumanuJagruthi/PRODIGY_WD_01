window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var content = document.getElementById('content');
    if (window.scrollY > content.offsetTop) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Carousel functionality
var slideIndex = 0;

function showSlides() {
    var slides = document.querySelectorAll('.carousel-item');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
    slideIndex++;
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

showSlides();
