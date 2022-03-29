const startBtn = id('startBtn')
const question = id('question')
const ansOne = id('ansOne')
const ansTwo = id('ansTwo')
const ansBtnOne = id('ansBtnOne')
const ansBtnTwo = id('ansBtnTwo')

let questionIndex = 0

startBtn.addEventListener('click', init)


//Start quiz
function init() {
    query('.intro').style.display = 'none'
    query('.quiz-card').style.display = 'flex'
    shuffle(questions)
    setQuestion(questions)
}

//Quiz Functionality
function setQuestion() {
    if (questionIndex < questions.length) {
        question.innerText = questions[questionIndex].question
    }
}

function checkAnswer() {

}

function shuffle(array) {
    let currentIndex = array.length, randomIndex
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array
}
//Summary

//Helper Functions
function id(id) {
    return document.getElementById(id)
}

function query(query) {
    return document.querySelector(query)
}

//Questions
const questions = [
    {
        question: "What color is rgb(0, 0, 0)?",
        answers: [
            { text: "black", correct: true },
            { text: "white", correct: false }
        ]
    },
    {
        question: "What has six strings?",
        answers: [
            { text: "guitar", correct: true },
            { text: "drums", correct: false }
        ]
    },
    {
        question: "What year is it?",
        answers: [
            { text: "2022", correct: true },
            { text: "1902", correct: false }
        ]
    },
]