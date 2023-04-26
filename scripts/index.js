import { Router } from './router.js'

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/explore", "/pages/explore.html")
router.add(404, "/pages/404.html")
    
router.handle()

window.onpopstate = () => router.handle() 
window.route = () => router.route()

//Nav selection highlight
//Variables elements
let home = document.querySelector(".home")
let universe = document.querySelector(".universe")
let explore = document.querySelector(".explore")
let bodyBg = document.querySelector("body")

//Functions
function homeClick() {
    home.classList.add('selected')
    bodyBg.style.backgroundImage = 'url(/assets/bg-1.png)'

    universe.classList.remove('selected')
    explore.classList.remove('selected')
}

function universeClick() {
    universe.classList.add('selected')
    bodyBg.style.backgroundImage = 'url(/assets/bg-2.png)'

    home.classList.remove('selected')
    explore.classList.remove('selected')
}

function exploreClick() {
    explore.classList.add('selected')
    bodyBg.style.backgroundImage = 'url(/assets/bg-3.png)'

    home.classList.remove('selected')
    universe.classList.remove('selected')
}

//Event listeners
home.addEventListener('click', function() {
    homeClick()
})

universe.addEventListener('click', function() {
    universeClick()
})

explore.addEventListener('click', function() {
    exploreClick()
})