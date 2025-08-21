const form_controls = document.querySelectorAll('.form-control');


form_controls.forEach((control)=>{
    let label = control.querySelector('label')
    let text = label.textContent;
    label.innerHTML = text.split('')
    .map((char, index)=> `<span style="transition-delay: ${index * 50}ms"> ${char} </span>`).join('');
})