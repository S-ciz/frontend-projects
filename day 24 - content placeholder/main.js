//const boxes

let headerEl = document.getElementById('header')
let titleEl = document.getElementById('title')
let textEl = document.getElementById('text')
let profileEl = document.getElementById('profile-img')
let namEl = document.getElementById('name')
let datEl = document.getElementById('date')


function removeSkeletons() {
    headerEl.classList.remove('skeleton')
    titleEl.classList.remove('skeleton')
    textEl.classList.remove('skeleton')
    profileEl.classList.remove('skeleton')
    namEl.classList.remove('skeleton')
    datEl.classList.remove('skeleton')
}

function populateCard() {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => {

            let profile = data.results[0]

              console.log(profile)
            headerEl.innerHTML = `<img  src="https://images.pexels.com/photos/32860766/pexels-photo-32860766.jpeg"/>`
            titleEl.innerText = profile.location.city + ', ' + profile.location.country
            textEl.innerText = 'Loving the blues and daisies from the daffodils since sunrise'
            profileEl.innerHTML = `<img src="${profile.picture.thumbnail}"/>`
            namEl.innerText = `${profile.name.title} ${profile.name.first} ${profile.name.last}`
            datEl.innerText = `${profile.email}`
            removeSkeletons()

        }).catch(err => {
            console.log(err)
        })


}

populateCard()

