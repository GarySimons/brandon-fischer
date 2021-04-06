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


// methods
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
