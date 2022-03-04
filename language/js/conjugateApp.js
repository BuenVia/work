import { words } from './wordBank.js'

const submitBtn = id('submitBtn')
const answerBtn = id('answerBtn')
const nextBtn = id('nextBtn')
const resetBtn = id('resetBtn')
const verb = id('verb')
const answer = id('answer')
const questionEl = id('questionElement')
const summaryEl = id('summaryElement')

submitBtn.addEventListener('click', init)
answerBtn.addEventListener('click', checkAnswer)
nextBtn.addEventListener('click', nextQuestion)
resetBtn.addEventListener('click', reset)

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
    answer.disabled = false
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
    answer.disabled = true
    if (answer.value === question.conjugate[number].answer) {
        questionEl.classList.add('correct-text')
        answer.style.color = 'var(--correct)'
        answerBtn.style.display = 'none'
        nextBtn.style.display = 'block'
        nextBtn.style.backgroundColor = 'var(--correct)'
        nextBtn.focus()
    } else {
        // Push to array to show in summary
        console.log(false);
        questionEl.classList.add('incorrect-text')
        answer.style.color = 'var(--incorrect)'
        answerBtn.style.display = 'none'
        nextBtn.style.display = 'block'
        nextBtn.focus()
        summary.push(question.conjugate[number].answer)
    }
}

function reset() {
    number = 0
    summary = []
    question = ''
    document.querySelector('.choice-container').style.display = 'block'
    document.querySelector('.question-container').style.display = 'none'
    document.querySelector('.summary-container').style.display = 'none'
    summaryEl.innerText = ''
}

function id(id) {
    return document.getElementById(id)
}