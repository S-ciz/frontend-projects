
const songs = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const btns = document.querySelector('.btns');

songs.forEach(song =>{
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = song;

    btn.addEventListener('click', (e)=>{
        stopSongs();
       let s = document.getElementById(song);
       s.play();
    } )

    btns.appendChild(btn);

})


function stopSongs()
{ 
    for(let s = 0; s < songs.length; s++)
    {
        let song = songs[s];
        let song_audi = document.getElementById(song);
        song_audi.pause();
        song_audi.currentTime = 0;
    }

}