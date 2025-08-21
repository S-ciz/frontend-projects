const i = document.querySelector('i');
const input = document.querySelector('input');
const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
})
i.addEventListener('click', (e)=>{

     if(input.classList.contains('active'))
     {
        input.classList.remove('active');
        input.classList.remove('border-active');
        i.classList.remove('border-active')
     
     }else 
     {
        input.classList.add('active');
        input.classList.add('border-active');
          i.classList.add('border-active')
     }

})