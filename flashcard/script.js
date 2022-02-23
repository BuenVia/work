const showBtn = document.getElementById('show')
const deleteBtn = document.getElementById('delete')
const saveBtn = document.getElementById('save')
const closeBtn = document.getElementById('close')
const question = document.getElementById('question')
const answer = document.getElementById('answer')
const flashcards = document.getElementById('flashcards')

let words = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []

saveBtn.addEventListener('click', createWord)

words.forEach(createFlashcard);
// CREATE FLASHCARD
function createFlashcard(text) {
    let div = document.createElement('div')
    let p_question = document.createElement('p')
    let p_answer = document.createElement('p')

    div.classList = 'flashcard'

    p_question.innerHTML = text.question
    p_answer.innerHTML = text.answer

    p_question.setAttribute('style', 'text-align: center; border-bottom: 1px solid red; padding: 15px; margin-top: 30px')
    p_answer.setAttribute('style', 'text-align: center; display: none; color: red; margin-top: 30px')

    div.appendChild(p_question)
    div.appendChild(p_answer)

    div.addEventListener('click', () => {
        p_answer.style.display === 'none' ? p_answer.style.display = 'block' : p_answer.style.display = 'none'
    })

    flashcards.appendChild(div)
}

// ADD TO ARRAY
function createWord() {
    let wordObj = {
        'question': question.value,
        'answer': answer.value
    }
    words.push(wordObj)
    localStorage.setItem('data', JSON.stringify(words))
    createFlashcard(words[words.length - 1])
    question.value = ''
    answer.value = ''
}


// DELETE FLASHCARDS

// SHOW / HIDE CREATE BOX