const viewMoreBtn = document.querySelector('.btn')

const hideElements = () => {
    const elementsToHide = document.querySelectorAll('.hide')
    elementsToHide.forEach(element => {
        element.classList.add('hidden')
    })
    changeBtnToShow()
}

const displayElements = () => {
    const elementsToDisplay = document.querySelectorAll('.hidden')
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

viewMoreBtn.addEventListener('click', displayElements)