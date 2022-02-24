import { ser } from "./wordbank.js"

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

// let words = localStorage.getItem('flashcard-word') ? JSON.parse(localStorage.getItem('flashcard-word')) : []

// saveBtn.addEventListener('click', createWord)

// ser.forEach(createFlashcard);
// CREATE FLASHCARD
// function createFlashcard(text) {
//     let div = document.createElement('div')
//     let p_question = document.createElement('p')
//     let p_answer = document.createElement('p')

//     div.classList = 'flashcard'

//     p_question.innerHTML = text.question
//     p_answer.innerHTML = text.answer

//     p_question.setAttribute('style', 'text-align: center; border-bottom: 1px solid red; padding: 15px; margin-top: 30px')
//     p_answer.setAttribute('style', 'text-align: center; display: none; color: red; margin-top: 30px')

//     div.appendChild(p_question)
//     div.appendChild(p_answer)

//     div.addEventListener('click', () => {
//         p_answer.style.display === 'none' ? p_answer.style.display = 'block' : p_answer.style.display = 'none'
//     })

//     flashcards.appendChild(div)
// }

function createRandom(array) {
    let currentIndex = array.length, randomIndex
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array
}


createRandom(ser)

let y = 0

function showWord() {
    if (y < ser.length) {
        quest.innerText = ser[y].question;
        ans.innerText = ser[y].answer
        flashcard.addEventListener('click', hideAnswer)
        y++
    }   else {
        quest.innerText = ''
    }
} 

function hideAnswer() {
    ans.style.display === 'none' ? ans.style.display = 'block' : ans.style.display = 'none'
}



// ser.forEach(createFlashcard)


// ADD TO ARRAY
// function createWord() {
//     let wordObj = {
//         'question': question.value,
//         'answer': answer.value
//     }
//     words.push(wordObj)
//     localStorage.setItem('flashcard-word', JSON.stringify(words))
//     createFlashcard(words[words.length - 1])
//     question.value = ''
//     answer.value = ''
// }


// DELETE FLASHCARDS

// SHOW / HIDE CREATE BOX