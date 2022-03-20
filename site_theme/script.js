const tabOne = id('tabOne')
const tabTwo = id('tabTwo')
const sectionOne = id('sectionOne')
const sectionTwo = id('sectionTwo')

tabOne.addEventListener('click', changeTab)
tabTwo.addEventListener('click', changeTab)

function changeTab() {
    if (sectionOne.style.display !== 'block') {
    console.log('tab one');
    }
}

function id(id) {
    return id = document.getElementById(id)
}
