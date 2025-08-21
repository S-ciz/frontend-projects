const btn = document.getElementById('btn');
const joke = document.getElementById('joke_text');

const DAD_JOKE_URL = "https://icanhazdadjoke.com/slack"
btn.addEventListener("click", ()=>{

    fetch(DAD_JOKE_URL)
    .then(res => res.json())
    .then(data=>{
        const text = data.attachments[0].fallback;
        let arr_text = text.split("?");
        if(arr_text.length < 2)
        {
            joke.innerText = text;
        }else 
        {
           joke.innerHTML = arr_text[0] + `? \n<span class="active"> ${arr_text[1]} </span>`
        }
    
    })
})