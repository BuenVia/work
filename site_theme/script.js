const tabOne = id('tabOne')
const sectionOne = id('sectionOne')

tabOne.addEventListener('click', () => {
    console.log(true);
})

function id(id) {
    return id = document.getElementById(id)
}