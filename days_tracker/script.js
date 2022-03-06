const date = id('date')
const submitBtn = id('submit')
const daysEl = id('days')
const dateRep = id('date-rep')
const eventName = id('eventName')
const title = id('title')

const today = new Date();
let todayYear = today.getFullYear()
let todayMonth = today.getMonth() + 1
let todayDay = today.getDate()
todayMonth = addZero(todayMonth)
todayDay = addZero(todayDay)

const now = `${todayYear}-${todayMonth}-${todayDay}`

submitBtn.addEventListener('click', operation)

function operation() {
    if(eventName.value === '') {
        alert('Enter something!')
    } else {
        const d1 = new Date(now)
        const d2 = new Date(date.value)
        const diffTime = d2 - d1
        const diffDays = diffTime / (1000 * 3600 * 24)

        const format = new Date(date.value)
        const dateTwo = `${format.toDateString()}`

        if (diffDays > 0) {
            document.body.style.background = 'var(--bkgThree)';
            title.innerText = 'Days Until'
            dateRep.innerText = `${diffDays} days until ${eventName.value} on ${dateTwo}`
        } else if (diffDays === 0) {
            alert('That\'s today!');
        } else {
            document.body.style.background = 'var(--bkgTwo)';
            title.innerText = 'Days Since'
            dateRep.innerText = `${Math.abs(diffDays)} days have passed since ${eventName.value} on ${dateTwo}`
        }
    
    }
}

function addZero(item) {
    if (item <= 9) {
        item = "0" + item
        return item
    } else {
        return item
    }
}

function dateHolder() {
    date.value = now;
}
dateHolder()

function id(id) {
    return document.getElementById(id)
}