const allSwitch = document.querySelectorAll('.slide-switch')
const slide = document.querySelectorAll('.one-slide')

let idSlider = 0;

const topSlider = document.querySelector('.top-angle')
const bottomSlider = document.querySelector('.bottom-angle')

// ARROW SLIDER

topSlider.addEventListener('click', () => {
    if(idSlider == 0) {
        nextSlide(idSlider, 1)
    } else if (idSlider == 1) {
        nextSlide(1, 2)
    } else if (idSlider == 2) {
        nextSlide(idSlider, 0)
    }
})

bottomSlider.addEventListener('click', () => {
    if(idSlider == 0) {
        nextSlide(idSlider, 2)
    } else if (idSlider == 1) {
        nextSlide(1, 0)
    } else if (idSlider == 2) {
        nextSlide(idSlider, 1)
    }
})


// CHANGE SLIDE

function nextSlide(actual, next) {
    allSwitch[actual].classList.remove('active')
    allSwitch[next].classList.add('active')
    slide[actual].setAttribute('class', 'one-slide last-slide')
    slide[next].setAttribute('class', 'one-slide active-slide')
    idSlider = slide[next].getAttribute('slide-number')
}


// BUTTON SLIDER

for(let i = 0; i < allSwitch.length; i++) {
    allSwitch[i].addEventListener('click', () => {
        if(allSwitch[i].getAttribute('slide-number') == slide[i].getAttribute('slide-number')) {
            nextSlide(idSlider, i)
        }
    })
}


// AUTOPLAY

setInterval(() => {
    if(idSlider == 0) {
        nextSlide(0, 1)
    } else if(idSlider == 1) {
        nextSlide(1, 2)
    } else if(idSlider == 2) {
        nextSlide(2, 0)
    }
}, 15000)
