// Tab Variables
const tabOne = id('tabOne')
const tabTwo = id('tabTwo')
const sectionOne = id('sectionOne')
const sectionTwo = id('sectionTwo')

// Style Variables
const styleBtn = id('style')
const header = query('.head-container')
const navBar = query('.navbar')
const side = query('.side-container')
const mainCont = query('.main-container')
const footer = query('.footer')

styleBtn.addEventListener('click', changeStyle)

//Change Tab Function
function changeTab(sectionName) {
   const section = document.getElementsByClassName('section')
   for (let i = 0; i < section.length; i++) {
       section[i].style.display = 'none'
   }
   id(sectionName).style.display = 'block'
}

id('tabOne').click()

// Change Style Function
function changeStyle() {
    if (styleBtn.innerText === 'Dark') {
        document.body.classList.add('dark-mode')
        styleBtn.innerText = 'Light'
    } else {
        document.body.classList.remove('dark-mode')
        styleBtn.innerText = 'Dark'
    }
}

// Helper Functions
function id(id) {
    return id = document.getElementById(id)
}

function query(query) {
    return query = document.querySelector(query)
}