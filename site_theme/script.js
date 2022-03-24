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
let darkMode = localStorage.getItem('darkMode')

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
function enableDarkMode() {
    document.body.classList.add('dark-mode')
    styleBtn.innerText = 'Light'
    localStorage.setItem('darkMode', 'enabled')
}

function enableLightMode() {
    document.body.classList.remove('dark-mode')
    styleBtn.innerText = 'Dark'
    localStorage.setItem('darkMode', null)
}

if (darkMode === 'enabled') {
    enableDarkMode()
}

function changeStyle() {
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'enabled') {
        enableDarkMode()
    } else {
        enableLightMode()
    }
}

// Helper Functions
function id(id) {
    return id = document.getElementById(id)
}

function query(query) {
    return query = document.querySelector(query)
}