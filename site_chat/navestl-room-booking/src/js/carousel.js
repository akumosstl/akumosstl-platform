document.addEventListener('DOMContentLoaded', function () {
    var carouselElement = document.querySelector('#roomCarousel');
    var carousel = new bootstrap.Carousel(carouselElement, {
        interval: 2000,
        wrap: true
    });

    // Optional: Add event listeners for custom controls if needed
    var nextButton = document.querySelector('#carouselNext');
    var prevButton = document.querySelector('#carouselPrev');

    if (nextButton) {
        nextButton.addEventListener('click', function () {
            carousel.next();
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', function () {
            carousel.prev();
        });
    }
});