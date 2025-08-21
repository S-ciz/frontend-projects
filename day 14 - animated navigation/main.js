const menu_btn = document.getElementById('menu');
const nav = document.getElementById('navbar').querySelector('ul');


menu_btn.addEventListener('click', ()=>{
    if(menu_btn.classList.contains('fa-times')) 
    {
     
        nav.classList.add('hide_ul');
        setTimeout(() => {
               menu_btn.classList.remove('fa-times');
        menu_btn.classList.add('fa-bars')
        }, 600);
    }else 
    {  
        nav.classList.remove('hide_ul');
         
        setTimeout(() => {
            menu_btn.classList.add('fa-times');
        menu_btn.classList.remove('fa-bars')
       
        }, 200);
            
       
        
    }
})