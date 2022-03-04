import { words } from './wordBank.js'

const verb = id('verb')
const submitBtn = id('submitBtn')
const answer = id('answer')
const answerBtn = id('answerBtn')
const questionEl = id('questionElement')
const nextBtn = id('nextBtn')

submitBtn.addEventListener('click', init)
answerBtn.addEventListener('click', checkAnswer)
nextBtn.addEventListener('click', nextQuestion)

let question
let number = 0

function init() {
    const x = verb.value
    question = words[x]
    document.querySelector('.choice-container').style.display = 'none'
    document.querySelector('.question-container').style.display = 'block'
    setQuestion()
}

function setQuestion() {
    questionEl.innerText = question.conjugate[number].question;
}

function nextQuestion() {
    if (number < question.conjugate.length) {
        number++
    }
    console.log(number);
    setQuestion()
}

function checkAnswer() {
    if (answer.value === question.conjugate[number].answer) {
        console.log(true);
    } else {
        console.log(false);
    }
}

function id(id) {
    return document.getElementById(id)
}