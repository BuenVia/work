import { words } from './wordBank.js'

const verb = id('verb')
const submitBtn = id('submitBtn')
const answer = id('answer')
const answerBtn = id('answerBtn')
const questionEl = id('questionElement')

submitBtn.addEventListener('click', init)
answerBtn.addEventListener('click', checkAnswer)

let question
let number = 0

function init() {
    const x = verb.value
    question = words[x]
    console.log(question.conjugate.length);
    document.querySelector('.choice-container').style.display = 'none'
    document.querySelector('.question-container').style.display = 'block'
    setQuestion()
}

function setQuestion() {
    questionEl.innerText = question.conjugate[0].question;
}

function nextQuestion() {

}

function checkAnswer() {
    if (answer.value === question.conjugate[0].answer) {
        console.log(true);
        nextQuestion()
    } else {
        console.log(false);
    }
}

function id(id) {
    return document.getElementById(id)
}