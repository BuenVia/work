// Tab Variables
const tabOne = id('tabOne')
const tabTwo = id('tabTwo')
const sectionOne = id('sectionOne')
const sectionTwo = id('sectionTwo')

// Style Variables
const styleBtn = id('style')
const header = query('.head-container')
const side = query('.side-container')
const footer = query('.footer')

tabOne.addEventListener('click', changeTab)
tabTwo.addEventListener('click', changeTab)
styleBtn.addEventListener('click', changeStyle)

//Change Tab Function
function changeTab() {
    if (sectionOne.style.display === 'block') {
        console.log('tab one');
    } else if (sectionTwo.style.display === 'block') {
        console.log('tab two');
    }
    sectionOne.style.display = 'none'
    sectionTwo.style.display = 'block'
}

// Change Style Function
function changeStyle() {
    header.classList.toggle('head-dark')
    footer.classList.toggle('footer-dark')
    if (styleBtn.innerText === 'Dark') {
        styleBtn.innerText = 'Light'
        side.style.backgroundColor = '#999'
    } else {
        styleBtn.innerText = 'Dark'
        side.style.backgroundColor = '#ddd'
    }
}

// Helper Functions
function id(id) {
    return id = document.getElementById(id)
}

function query(query) {
    return query = document.querySelector(query)
}