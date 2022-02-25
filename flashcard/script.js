import { word } from "./wordbank.js"

const prev = document.getElementById('prev')
const next = document.getElementById('next')
const saveBtn = document.getElementById('save')
const closeBtn = document.getElementById('close')
const question = document.getElementById('question')
const answer = document.getElementById('answer')


const flashcard = document.getElementById('flashcard')
const quest = document.getElementById('quest')
const ans = document.getElementById('ans')


next.addEventListener('click', showWord)

function createRandom(array) {
    let currentIndex = array.length, randomIndex
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array
}


createRandom(word)

let y = 0

function showWord() {
    if (y < word.length) {
        quest.innerText = word[y].question;
        ans.innerText = word[y].answer
        flashcard.addEventListener('click', hideAnswer)
        y++
    }   else {
        quest.innerText = ''
        ans.innerText = ''
    }
} 

function hideAnswer() {
    ans.style.display === 'none' ? ans.style.display = 'block' : ans.style.display = 'none'
}

