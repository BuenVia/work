const date = id('date')
const submitBtn = id('submit')
const daysEl = id('days')
const dateRep = id('date-rep')
const eventName = id('eventName')

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
        alert('Enter some shit!')
    } else {
        const d1 = new Date(now)
        const d2 = new Date(date.value)
        const diffTime = d2 - d1
        const diffDays = diffTime / (1000 * 3600 * 24)
        if (diffDays > 0) {
            console.log(diffDays);

            const format = new Date(date.value)
            let formatYear = format.getFullYear()
            let formatMonth = format.getMonth() + 1
            let formatDay = format.getDate()
            formatMonth = addZero(formatMonth)
            formatDay = addZero(formatDay)
    
            const formattedDate = `${formatDay}/${formatMonth}/${formatYear}`
    
            daysEl.innerText = diffDays
            dateRep.innerText = `${eventName.value} on ${formattedDate}`
        } else {
            alert('Must be greater than today');
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