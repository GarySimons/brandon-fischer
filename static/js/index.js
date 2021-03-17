// JS from tutorial https://www.youtube.com/watch?v=KcdBOoK3Pfw

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
    // Prevents the images not showing when clicking too fast
    if (counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    // adds 1 to counter
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=> {
    // Prevents the images not showing when clicking too fast
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    // subtracts 1 from counter
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Transition End to loop back to start of slides when original transition ends 
carouselSlide.addEventListener('transitionend', () => {
    // Prev button
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2 ;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    // Next button
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});




// Code from Full Screen Responsive Image Slider | No Libraries
// https://www.youtube.com/watch?v=wWWNrANNO1k