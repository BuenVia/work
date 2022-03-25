const startBtn = id('startBtn')

startBtn.addEventListener('click', init)
//Start quiz
function init() {
    query('.intro').style.display = 'none'
    query('.quiz-card').style.display = 'flex'
    setNextQuestion()
}

function setNextQuestion() {
    
}

//Quiz Functionality

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