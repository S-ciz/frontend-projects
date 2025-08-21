const textarea = document.querySelector('textarea');
const choices = document.getElementById("choices")


textarea.addEventListener("keyup", (e)=>{
        
      if(e.code === 'Enter')
      {
            console.log('finished')
            lightlight();
      }

      const word = e.target.value
      let wordArr = word.split(',').map(item=> item.trim())
      createChoice(wordArr)
})  

function createChoice(wordList)
{   
      choices.innerHTML = ''
      wordList.forEach(item =>{
            const choice = document.createElement('div');
            choice.innerText = item;
            choice.classList.add('choice');
            choices.appendChild(choice)
      })
}

function lightlight()
{
  choices.querySelectorAll('.choice' ).forEach((c, index)=>{
      
      c.classList.add('active')
      c.style.animationDelay = index + 's'
      
  })
}