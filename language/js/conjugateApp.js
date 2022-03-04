import { words } from './wordBank.js'

const verb = id('verb')
const submitBtn = id('submitBtn')
const answer = id('answer')
const answerBtn = id('answerBtn')
const questionEl = id('questionElement')
const nextBtn = id('nextBtn')
const summaryEl = id('summaryElement')

submitBtn.addEventListener('click', init)
answerBtn.addEventListener('click', checkAnswer)
nextBtn.addEventListener('click', nextQuestion)

let question
let number = 0
let summary = []

function init() {
    const x = verb.value
    question = words[x]
    document.querySelector('.choice-container').style.display = 'none'
    document.querySelector('.question-container').style.display = 'block'
    nextBtn.style.display = 'none'
    setQuestion()
}

function setQuestion() {
    console.log(number);
    if (number < question.conjugate.length) {
        questionEl.innerText = question.conjugate[number].question;
        answer.focus()
        answerBtn.style.display = 'block'
        nextBtn.style.display = 'none'
        answer.value = ''
    } else {
        // Show summary
        console.log('commplete');
        document.querySelector('.question-container').style.display = 'none'
        document.querySelector('.summary-container').style.display = 'block'
        summaryEl.innerText = summary
    }
}

function nextQuestion() {
    number++
    setQuestion()
}

function checkAnswer() {
    if (answer.value === question.conjugate[number].answer) {
        questionEl.classList.add('correct-text')
        answer.style.color = 'var(--correct)'
        answerBtn.style.display = 'none'
        nextBtn.style.display = 'block'
        nextBtn.style.backgroundColor = 'var(--correct)'
    } else {
        // Push to array to show in summary
        console.log(false);
        questionEl.classList.add('incorrect-text')
        answer.style.color = 'var(--incorrect)'
        answerBtn.style.display = 'none'
        nextBtn.style.display = 'block'
        summary.push(question.conjugate[number].answer)
    }
}

function id(id) {
    return document.getElementById(id)
}