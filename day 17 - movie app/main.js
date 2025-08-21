// UI

const search_btn = document.getElementById('search');
const search_input = document.getElementById('search_input')


search_btn.addEventListener('click', () => {

    if (search_input.className == "hidden") {
        search_input.className = ""
    } else {
        search_input.className = "hidden"
    }
})

//hamburger menu

const menu = document.getElementById('menu');
const ul = document.getElementById('list')
menu.addEventListener('click', () => {

    if (menu.classList.contains('fa-times')) {   //remove list
        ul.classList.add('hidden_nav')
        ul.classList.remove('list')
        menu.classList.remove('fa-times');
        menu.classList.add('fa-bars')
    } else {
        ul.classList.remove('hidden_nav')
        ul.classList.add('list')
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-times')
    }
})

//movies

const movies_container = document.getElementById('movies');
const apiKey = `c805a03cc1c848c2d3c1323ff79ffac6`;
let prefix = `http://image.tmdb.org/t/p/w500`;
let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

console.group(movies_container)

async function displayPopular() {

    let response = await fetch(url, {
        method: 'GET',
    })

    let data = await response.json();

    let movies = data.results;
    console.log(movies[0])
 

    movies.forEach((movie, index)=>{

        const img_url = "https://image.tmdb.org/t/p/w500/" + movie.poster_path
      movies_container.innerHTML+= ` <div class="movie">

           <div style="background-image: url(${img_url});" class="bg_img">
            <div class="content">
                <i class="fa fa-star"></i>
                  <p>3/10</p>
                <button>View movie</button>
            </div>
           
        </div>
        </div>`
    })
}


document.addEventListener('DOMContentLoaded', async ()=>{
 
    await displayPopular();
})




