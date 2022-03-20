const tabOne = id('tabOne')
const tabTwo = id('tabTwo')
const styleBtn = id('style')
const sectionOne = id('sectionOne')
const sectionTwo = id('sectionTwo')

const headCont = query('.head-container')

tabOne.addEventListener('click', changeTab)
tabTwo.addEventListener('click', changeTab)
styleBtn.addEventListener('click', changeStyle)

function changeTab() {
    if (sectionOne.style.display !== 'block') {
        console.log('tab one');
    }
}

function changeStyle() {
    headCont.style.backgroundColor = 'red'
    styleBtn.innerText = 'Dark'
    // document.querySelector('.head-container').style.backgroundColor = 'blue'

}

function id(id) {
    return id = document.getElementById(id)
}

function query(query) {
    return query = document.querySelector(query)
}