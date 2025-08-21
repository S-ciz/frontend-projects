
const txt = document.querySelector('h1');
const interval = setInterval(blurring, 300 );
const bg = document.querySelector('.bg');


let current_px = 10;
let loading = 0;
let px = ''


function blurring()
{
  loading = loading + 1;
  txt.textContent = (loading/10)*100 + "%";
  
   current_px = current_px - 1;
   px = current_px + 'px';
   bg.style.filter = `blur(${px})`;

   if(loading >=10)
   {
     clearInterval(interval);
     txt.textContent = ''
   }
   
   
}