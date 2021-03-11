// select carouselSlide div
const carouselSlide = document.querySelector('.carousel-slide');
// select all images
const carouselImages = document.querySelectorAll('.carouselSlide img');

// Buttons
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

// Counter
// select a slide
let counter = 1;
// Tell it width of image so knows how much to slide
const size = carouselImages[0].clientWidth;

// create slide that starts on image 1 rather than clone and moves on the x the size of image
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

