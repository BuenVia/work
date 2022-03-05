const date = document.getElementById('date')
const submitBtn = document.getElementById('submit')

const today = new Date();
const todayYear = today.getFullYear()
let todayMonth = today.getMonth() + 1
let todayDay = today.getDay() - 1
todayMonth = addZero(todayMonth)
todayDay = addZero(todayDay)

const now = `${todayYear}-${todayMonth}-${todayDay}`



function addZero(item) {
    if (item <= 9) {
        item = "0" + item
        return item
    }
}


submitBtn.addEventListener('click', () => {
    console.log(date.value)
})

function dateHolder() {
    date.value = now;
}
dateHolder()