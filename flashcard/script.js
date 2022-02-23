const card = document.getElementById('card')
const word = document.getElementById('word')
const answer = document.getElementById('answer')
const next = document.getElementById('next')
const prev = document.getElementById('prev')

card.addEventListener('click', reveal)

function reveal() {
    if (word.style.display == 'none') {
        word.style.display = 'block'
        answer.style.display = 'none'
    } else {
        word.style.display = 'none';
        answer.style.display = 'block'
    }
}