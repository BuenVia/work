import { words } from './wordBank.js'

const startButton = document.getElementById('start');
const submitButton = document.getElementById('submit')
const nextButton = document.getElementById('next')

const wordEl = document.getElementById('word');
const responseEl = document.getElementById('response');
const translation = document.getElementById('translation')

const numWords = words.length;
let shuffledQuestions, answer, wordTrans
let currentQuestionIndex = 0
let wrongAnswer = []
let wrongAnswerTrans = []

startButton.addEventListener('click', startNew)
form.addEventListener('submit', scoring)
nextButton.addEventListener('click', clearForNext)
responseEl.addEventListener('keyup', blockBtn)

function startNew() {
    document.getElementById('flashcard').classList.remove('hide')
    document.getElementById('start').classList.add('hide')
    submitButton.classList.remove('hide')
    shuffledQuestions = words.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextWord()
}

function setNextWord() {
    showNextWord(shuffledQuestions[currentQuestionIndex])
}

function showNextWord(words) {
    if (currentQuestionIndex < numWords) {
        answer = words.answer
        wordTrans = words.word
        wordEl.innerText = words.word
    } else {
        showWrong()
    }
}

function scoring() {
    responseEl.disabled = true
    submitButton.classList.add('hide')
    nextButton.classList.remove('hide')
    submitButton.disabled = true
    if (responseEl.value === answer) {
        translation.innerText = 'correct'
        translation.style.color = 'white'
        document.getElementById('foot').classList.add('correct')
        nextButton.innerText = 'Correct'
    } else {
        translation.innerText = 'incorrect'
        translation.style.color = 'red'
        document.getElementById('foot').classList.add('incorrect')
        nextButton.innerText = 'Incorrect'
        wrongAnswer.push(answer);
        wrongAnswerTrans.push(wordTrans)
    }
}

function showWrong() {
    for (let i = 0; i < wrongAnswer.length; i++){

        const div = document.createElement('div');
        const h2_question = document.createElement('h2');
        const h2_answer = document.createElement('p');
    
        div.className = 'wrong-item';
    
        h2_question.innerHTML = wrongAnswer[i];
        h2_answer.innerHTML = wrongAnswerTrans[i];
    
        div.appendChild(h2_question);
        div.appendChild(h2_answer);

        document.querySelector('.details').appendChild(div)
    }
    document.querySelector('.card').classList.add('hide')
    document.querySelector('.summary').classList.remove('hide')
    submitButton.classList.add('hide')
    // document.body.innerText = 'finished ' + wrongWords;
    console.log(wrongAnswer, wrongAnswerTrans);
}

function clearForNext() {
    currentQuestionIndex++;
    translation.innerText = ''
    responseEl.value = ''
    responseEl.disabled = false
    submitButton.classList.remove('hide')
    nextButton.classList.add('hide')
    document.getElementById('foot').classList.remove('incorrect')
    document.getElementById('foot').classList.remove('correct')
    setNextWord()
}

function blockBtn() {
    if(responseEl.value ==='') {
        submitButton.disabled = true
    } else {
        submitButton.disabled = false
    }
}