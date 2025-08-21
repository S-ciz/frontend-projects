const slides = document.querySelectorAll('.slide');
const body = document.querySelector('body');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight')

let currentSlideIndex = 0;


//setBodyBg

function setBodyBg() {
    body.style.backgroundImage = slides[currentSlideIndex].style.backgroundImage
}

setBodyBg()


function setSlideBg() {

    slides.forEach(slide => {
        slide.classList.remove('active')
    })

    slides[currentSlideIndex].classList.add('active')

}


btnLeft.addEventListener('click', () => {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1
    }

    setSlideBg();
    setBodyBg();
})

btnRight.addEventListener('click', () => {
    currentSlideIndex++;
    if (currentSlideIndex > slides.length - 1) {
        currentSlideIndex = 0
    }

    setSlideBg();
    setBodyBg();
})