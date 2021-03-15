const carouselSlide = document.querySelector('.carousel-slide');
// select all images
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
// select a slide
let counter = 1;
// Tell it width of image so knows how much to slide
const size = carouselImages[0].clientWidth;

// create slide that starts on image 1 rather than clone and moves on the x the size of image
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button listeners
nextBtn.addEventListener('click',()=> {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    // adds 1 to counter
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=> {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    // subtracts 1 from counter
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});