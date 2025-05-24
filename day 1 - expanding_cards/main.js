const divs = document.querySelectorAll('.panel');


function removeActiveClasses()
{
    divs.forEach((panel)=>{
        panel.className = 'panel';
        panel.querySelector('h3').style.opacity = 0;
    })
}

function expand(e)
{

     removeActiveClasses();
     e.target.classList.add('active');
      e.target.querySelector('h3').style.opacity = 1;
}

for(let i = 0; i < divs.length; i++)
{
   divs[i].addEventListener('click', expand)
}