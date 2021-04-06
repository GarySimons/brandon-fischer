// this grabs multiple elements from DOM and makes 
// a node list which is like an array. This gets all the
// elements with the slide class
const slides = document.querySelectorAll('.slide');
// next and prev buttons. Just gets the one id
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
// auto scroll. false = dont and true = do
const auto = false;
// interval to scroll automatically
const intervalTime = 5000;
// keeps track of interval
let slideInterval;


// methods for slides

const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // remove current class
    current.classList.remove('current');
    // Check for next slide (sibling)
    if(current.nextElementSibling) {
        // if true then add current class to the next slide (sibling)
        current.nextElementSibling.classList.add('current');
        // if at the end of the slides, then add current class to first again
    } else {
        // Add current class to start position [0] is first slide
        slides[0].classList.add('current');
    }
    // remove current class again, with delay
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // remove current class
    current.classList.remove('current');
    // Check for previous slide (sibling)
    if(current.previousElementSibling) {
        // if true then add current class to the previous slide (sibling)
        current.previousElementSibling.classList.add('current');
        // if at the end of the slides, then add current class to first again
    } else {
        // Add current class to last slide to appear when going back from start
        // takes the length of the list and goes back 1
        slides[slides.length - 1].classList.add('current');
    }
    // remove current class again, with delay
    setTimeout(() => current.classList.remove('current'));
};

// Button events

// add click event to next button to go to next slide
next.addEventListener('click', e => {
    nextSlide();
});
// add click event to prev button to go to previous slide
prev.addEventListener('click', e => {
    prevSlide();
});

