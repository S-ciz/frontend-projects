
const btn_prev = document.querySelector('button#prev')
const btn_next = document.querySelector('button#next')
const progress_bar = document.querySelector("div.progress-steps");
const circles = document.querySelectorAll('.circle')

let curr_index = 1;


function update() {
    progress_bar.style.width = (curr_index -1 ) / (circles.length - 1) * 100 + '%';
}


btn_next.addEventListener('click', () => {



    curr_index++;

    if(curr_index >1)
    {
        btn_prev.disabled = false;
    }

    if (curr_index >= circles.length) {
        curr_index = circles.length
        btn_next.disabled = true;
    }


    circles.forEach((circle, index) => {


        if (curr_index > index) {
            circle.classList.add('active')

        }


    })

    update();


})


btn_prev.addEventListener('click', () => {

        curr_index--;

    if (curr_index <= 1) {
        curr_index = 1;
        btn_prev.disabled = true;
       
    }else { btn_next.disabled = false;}


    circles.forEach((circle, index) => {


        if (curr_index <= index) {
            circle.classList.remove('active')

        }


    })

    update();
})