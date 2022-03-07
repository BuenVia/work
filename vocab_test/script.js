const englishEl = id('english')
const spanishEl = id('spanish')
const selectBtn = id('selectBtn')
const choice = id('choice')
const choiceContainer = id('choiceContainer')
const activityContainer = id('activityContainer')
const summaryContainer = id('summaryContainer')
const close = id('close')
const answerBtn = id('answerBtn')
const nextBtn = id('nextBtn')
const resetBtn = id ('resetBtn')

let category
let questionIndex = 0

selectBtn.addEventListener('click', loadWords)
answerBtn.addEventListener('click', checkAnswer)
nextBtn.addEventListener('click', setQuestion)
resetBtn.addEventListener('click', reset)
close.addEventListener('click', reset)

function loadWords() {
    if (choice.value === "colors") category = colors
    else if (choice.value === "conjunctions") category = conjunctions
    else if (choice.value === "opinions") category = opinions
    choiceContainer.style.display = 'none'
    activityContainer.style.display = 'block'
    close.style.display = 'block'
    nextBtn.style.display = 'none'
    setQuestion()
}

function setQuestion() {
    if (questionIndex < category.length) {
        englishEl.innerText = category[questionIndex].english
        answerBtn.style.display = 'block'
        nextBtn.style.display = 'none'
    } else {
        activityContainer.style.display = 'none'
        nextBtn.style.display = 'none'
        summaryContainer.style.display = 'block'
        console.log('finished');
    }

}

function checkAnswer () {
    answerBtn.style.display = 'none'
    nextBtn.style.display = 'block'
    if (spanishEl === category[questionIndex].spanish) {
        console.log('correct');
    } else {
        console.log('incorrect');
    }
    questionIndex++
}

function reset() {
    category = ''
    choiceContainer.style.display = 'block'
    activityContainer.style.display = 'none'
    summaryContainer.style.display = 'none'
    close.style.display = 'none'
}

function id(id) {
    return document.getElementById(id)
}

const colors = [
    { english: "purple", spanish: "morado" },
    { english: "vivo", spanish: "bright" },
    { english: "violeta", spanish: "violet" }
]

const conjunctions = [
    { english: "because of", spanish: "a causa de" },
    { english: "despite", spanish: "a pesar de" },
    { english: "besides, apart from", spanish: "además de" }
]

const opinions = [
    { english: "to be fed up of", spanish: "estar harto de" },
    { english: "outstanding, significant", spanish: "sobresaliente" },
    { english: "in general", spanish: "por lo general" }
]