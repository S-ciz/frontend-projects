const toggleEl = document.querySelector('button.toggle')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')



//toggler
toggleEl.addEventListener('click', () => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        toggleEl.textContent = "Dark mode"
    } else {
        html.classList.add('dark')
        toggleEl.textContent = "Light mode"
    }
})

const objDate = new Date();


function getTime() {
    const objDate = new Date();
    let hours = objDate.getHours();
    const minutes = objDate.getMinutes();

    let strhours = hours < 10 ? `0${hours}` : hours
    let strMinutes = minutes < 10 ? `0${minutes}` : minutes
    let m = hours >= 12 ? 'PM' : 'AM'

    return `${strhours}:${strMinutes} ${m}`
}

function getDate() {

    const dates = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const day = objDate.getDay();
    const month = objDate.getMonth();
    const week = objDate.getDate();


    return `${dates[day]}, ${months[month]} <span class="bold"> ${week} </span`


}



//move them hands

const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')

function minutesToHour(minutes) {
    return minutes / 60;
}

function secondsToHour(sec) {
    return (sec / 3600)
}

function hoursToDegree(h) {
    return h * 15
}

function rotateHands() {

    hourEl.style.transform = `rotate(${scale('hour', new Date().getHours()%12)}deg)`
    minuteEl.style.transform = `rotate(${scale('minute', new Date().getMinutes())}deg)`
    secondEl.style.transform = `rotate(${scale('second', new Date().getSeconds())}deg)`
   
    timeEl.textContent = getTime();
    dateEl.innerHTML = getDate();
    
}

function scale(type, number) {
    switch (type) {
        case 'minute': {
            return number * (360 / (60))
        }
        case 'second':
            {
                return number * (360 / 60)
            }
        case 'hour':
            {
                return number * (360 / (12))
            }
    }
}

setInterval(() => {
    rotateHands();
}, 1000)



