// Updated script.js

function showSlide(index, slideshowIndex) {
    const slides = document.querySelectorAll(`#slider-container-${slideshowIndex} .slider-image`);
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide(slideshowIndex) {
    const slides = document.querySelectorAll(`#slider-container-${slideshowIndex} .slider-image`);
    const currentSlide = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex, slideshowIndex);
}

function prevSlide(slideshowIndex) {
    const slides = document.querySelectorAll(`#slider-container-${slideshowIndex} .slider-image`);
    const currentSlide = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex, slideshowIndex);
}

// Optional: You can add automatic slideshow functionality
// setInterval(nextSlide, 3000); // Change image every 3 seconds