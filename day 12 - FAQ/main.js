const cards = document.querySelectorAll('.card');



cards.forEach((card, index)=>{
  
  
    let icon = card.querySelector('i');
   
    icon.addEventListener('click', (e)=>{
        if(!icon.classList.contains('fa-times'))
        {
            icon.classList = 'fa fa-times'
            card.classList.add('active')
        }else 
        {
             icon.classList = 'fa fa-chevron-down'
             card.classList.remove('active')
        }
    })
})