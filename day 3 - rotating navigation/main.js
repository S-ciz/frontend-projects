
const btn_open = document.querySelector("button.open")
const btn_close = document.querySelector("button.close")
const nav = document.querySelector('.navbar')

const container = document.querySelector('div.container')
const ul = document.querySelector("ul")

btn_open.addEventListener('click', ()=>{

     container.classList.add('active_container');
     ul.classList.add('active_ul')
     nav.classList.add('active_nav')
})

btn_close.addEventListener("click", ()=>{
     container.classList.remove('active_container');
       nav.classList.remove('active_nav')
     ul.classList.remove('active_ul')
})