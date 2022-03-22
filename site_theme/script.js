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
   let i, section, btnLink
   section = document.getElementsByClassName('section')
   for (i = 0; i < section.length; i++) {
       section[i].style.display = 'none'
   }
   btnLink = document.getElementsByClassName('btn-link')
   for (i = 0; i < btnLink.length; i++) {
       btnLink[i].style.backgroundColor = ''
   }
    document.getElementById(sectionName).style.display = 'block'
}

id('tabOne').click()

// Change Style Function
function changeStyle() {
    header.classList.toggle('head-dark')
    footer.classList.toggle('footer-dark')
    if (styleBtn.innerText === 'Dark') {
        styleBtn.innerText = 'Light'
        navBar.style.backgroundColor = '#333'
        side.style.backgroundColor = '#111'
        side.style.color = '#ddd'
        mainCont.style.backgroundColor = '#222'
        mainCont.style.color = '#ddd'
    } else {
        styleBtn.innerText = 'Dark'
        navBar.style.backgroundColor = ''
        side.style.backgroundColor = ''
        side.style.color = ''
        mainCont.style.backgroundColor = ''
        mainCont.style.color = ''
    }
}

// Helper Functions
function id(id) {
    return id = document.getElementById(id)
}

function query(query) {
    return query = document.querySelector(query)
}