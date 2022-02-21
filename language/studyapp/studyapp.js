import { ser } from './wordbank.js';

const wordContainer = document.getElementById('wordContainer')
const userInput = document.getElementById('userInput')
const startBtn = document.getElementById('start')
const submitBtn = document.getElementById('submit')
const nextBtn = document.getElementById('next')
const summaryContainer = document.getElementById('summaryContainer')
const summaryBox = document.getElementById('summaryBox')
const incorrectAnswers = document.getElementById('incorrectAnswers')
const incorrectMessage = document.getElementById('incorrectMessage')
const resetBtn = document.getElementById('reset')
const progress = document.getElementById('progress')

let word
let answer
let wordIndex = 0
let attempted = 0
let progressScore = 0
let wrongAnswer = []

startBtn.addEventListener('click', init)
submitBtn.addEventListener('click', checkAnswer)
nextBtn.addEventListener('click', getWord)
resetBtn.addEventListener('click', resetApp)

function init() {
    document.getElementById('mainContainer').style.display = 'flex'
    document.getElementById('infoContainer').style.display = 'none'
    progress.innerText =  `First Word...`
    getWord()
}

function getWord() {
    clearStatus()
    if(wordIndex < ser.length) {
        wordContainer.innerText = ser[wordIndex].word;
        word = ser[wordIndex].word
        answer = ser[wordIndex].answer
        wordIndex++
        // CREATE SHUFFLE WORD ORDER FUNCTION
    } else {
        finalAssessment()
    }
}

function checkAnswer() {
    if (userInput.value === answer) {
        wordContainer.style.color = 'var(--correct)'
        userInput.style.color = 'var(--correct)'
        userInput.disabled = true
        submitBtn.style.display = 'none'
        nextBtn.style.display = 'inline'
        console.log(true);
        nextBtn.style.backgroundColor = 'var(--correct)'
        progressScore++
        scoring()
    } else {
        wordContainer.style.color = 'var(--incorrect)'
        userInput.style.color = 'var(--incorrect)'
        userInput.disabled = true
        submitBtn.style.display = 'none'
        nextBtn.style.display = 'inline'
        let wrongObj = {word, answer}
        console.log(wrongObj);
        wrongAnswer.push(wrongObj)
        nextBtn.style.backgroundColor = 'var(--incorrect)'
        scoring()
    }
}

function scoring() {
    attempted++
    progress.innerText = `${progressScore} out of ${attempted}`
    console.log(progressScore);
}

function clearStatus() {
    wordContainer.style.color = 'var(--text-one)'
    userInput.style.color = 'var(--text-one)'
    userInput.disabled = false
    submitBtn.style.display = 'inline'
    nextBtn.style.display = 'none'
    userInput.value = ''
}

function finalAssessment() {
    summaryContainer.style.display = 'block'
    if (wrongAnswer.length > 0) {
        incorrectMessage.innerText = `The following ${wrongAnswer.length} words were incorrect:`
        wrongAnswer.forEach(printWrong)
        function printWrong(textAnswer) {
            let div = document.createElement('div');
            let h2_answer = document.createElement('h2');
            let p_word = document.createElement('p')
            div.className = 'wrongBox'
            h2_answer.innerHTML = textAnswer.answer
            p_word.innerHTML = textAnswer.word
            div.appendChild(h2_answer)
            div.appendChild(p_word)
            incorrectAnswers.appendChild(div)
        } 
    } else {
        let p = document.createElement('p')
        const message = 'No wrong answers!'
        p.innerText = message
        summaryBox.appendChild(p)
    }
}


function resetApp() {
    summaryContainer.style.display = 'none'
    document.getElementById('mainContainer').style.display = 'none'
    document.getElementById('infoContainer').style.display = 'flex'
    wordIndex = 0
    attempted = 0
    progressScore = 0
    progress.innerText = ''
    incorrectAnswers.innerHTML = ''
    wrongAnswer = []
    clearStatus()
}

// KEYUP UNDISABLES BUTTON
// ADD MORE WORDS TO WORDBANK
// TURN WORDBANK IN TO JSON OBJECT
// ALLOW USER TO STUDY BY SUBJECT
// ALLOW USER TO ADD THEIR OWN WORDS TO BANK FOR STUDY
// LINK TO DATABASE TO SAVE SCORE HISTORY/ INCORRECT WORD HISTORY