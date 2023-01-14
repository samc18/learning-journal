const viewMoreBtn = document.querySelector('.btn')
const menuBtn = document.querySelector('.fa-bars')
const menu = document.querySelector('.menu')

const hideElements = () => {
    const elementsToHide = document.querySelectorAll('.hide')
    elementsToHide.forEach(element => {
        element.classList.add('hidden')
    })
    changeBtnToShow()
}

const displayElements = () => {
    const elementsToDisplay = document.querySelectorAll('.hide')
    elementsToDisplay.forEach(element => {
        element.classList.remove('hidden')
    })
    changeBtnToHide()
}

const changeBtnToHide = () => {
    viewMoreBtn.textContent = 'View Less'
    viewMoreBtn.removeEventListener('click', displayElements)
    viewMoreBtn.addEventListener('click', hideElements)
}

const changeBtnToShow = () => {
    viewMoreBtn.textContent = 'View More'
    viewMoreBtn.removeEventListener('click', hideElements)
    viewMoreBtn.addEventListener('click', displayElements)
}

viewMoreBtn && viewMoreBtn.addEventListener('click', displayElements)

const toggleMenu = () => {
    menu.classList.toggle('hidden')
    menuBtn.classList.toggle('fa-bars-active')
}

menuBtn.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        toggleMenu()
    } else {
        menu.setAttribute('closing', '')
        menu.addEventListener('animationend', () => {
            menu.removeAttribute('closing')
            toggleMenu()
        }, {once: true})
    }
})

const hideMenu = () => {
    if (window.innerWidth >= 800) {
        menuBtn.classList.remove('fa-bars-active')
        menu.classList.add('hidden')
    }
}

window.addEventListener('resize', hideMenu)