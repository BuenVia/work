const choiceContainer = id('choiceContainer')
const activityContainer = id('activityContainer')
const summaryContainer = id('summaryContainer')
const choice = id('choice')
const inputElement = id('inputElement')
const englishSentenceEl = id('englishSentenceEl')
const spanishSentenceEl = id('spanishSentenceEl')
const completed = id('completed')
const emailContainer = id('emailContainer')
const spanishEmail = id('spanishEmail')
const englishEmail = id('englishEmail')
const selectBtn = id('selectBtn')
const submitBtn = id('submitBtn')
const resetBtn = id('resetBtn')

let emailType

selectBtn.addEventListener('click', loadEmail)

function loadEmail() {
    if (choice.value === 'emailFormalOne') emailType = emailInformalOne
    else if (choice.value === 'emailInformalOne') emailType = emailInformalTwo
}

function id(id) {
    return document.getElementById(id)
}

const emailFormalOne = [
    { english: "Dear Sir/ Madam", spanish: ["Estimado Señor/ Señora"] },
    { english: "I am writing to you to offer my services in case there is a vacancy in your company.", spanish: ["Me dirijo a usted para ofrecerle mis servicios en el caso de haber alguna vacante en su empresa", "Me dirijo a ustedes para ofrecerles mis servicios en el case de haber alguna vacante en su empresa"] },
    { english: "Dear Sir/ Madam", spanish: ["Estimado señor/ señora"] }
]

const emailInformalOne = []