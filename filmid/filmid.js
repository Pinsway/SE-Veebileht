// autor: chatGPT


// vahetab slaidi slaidishows, pilt mida näidatakse kasutab css klassi .slider-image.active
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

// Näitab järgmist slaidi vastava indeksiga slaidshows
function nextSlide(slideshowIndex) {
    const slides = document.querySelectorAll(`#slider-container-${slideshowIndex} .slider-image`);
    const currentSlide = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex, slideshowIndex);
}

// Näitab eelmist slaidi vastava indeksiga slaidshows
function prevSlide(slideshowIndex) {
    const slides = document.querySelectorAll(`#slider-container-${slideshowIndex} .slider-image`);
    const currentSlide = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex, slideshowIndex);
}