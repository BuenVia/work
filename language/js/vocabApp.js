const englishEl = id('english')
const spanishEl = id('spanish')
const showCorrectEl = id('showCorrect')
const selectBtn = id('selectBtn')
const choice = id('choice')
const choiceContainer = id('choiceContainer')
const activityContainer = id('activityContainer')
const summaryContainer = id('summaryContainer')
const itemContainer = id('itemContainer')
const close = id('close')
const answerBtn = id('answerBtn')
const nextBtn = id('nextBtn')
const resetBtn = id ('resetBtn')

let category
let questionIndex = 0
let wrongAnswer = []

selectBtn.addEventListener('click', loadWords)
answerBtn.addEventListener('click', checkAnswer)
nextBtn.addEventListener('click', setQuestion)
resetBtn.addEventListener('click', reset)
close.addEventListener('click', reset)

// Loads the words from the category chosen
function loadWords() {
    if (choice.value === "colors") category = colors
    else if (choice.value === "conjunctions") category = conjunctions
    else if (choice.value === "opinions") category = opinions
    else if (choice.value === "conjunctionsTwo") category = conjunctionsTwo
    choiceContainer.style.display = 'none'
    activityContainer.style.display = 'block'
    close.style.display = 'block'
    nextBtn.style.display = 'none'
    shuffle(category)
    console.log(category);
    setQuestion()
}

// Renders the words to the screen until all words in current selection have been completed
function setQuestion() {
    if (questionIndex < category.length) {
        englishEl.innerText = category[questionIndex].english
        
        spanishEl.value = ''
        spanishEl.disabled = false
        spanishEl.focus()
        answerBtn.style.display = 'block'
        nextBtn.style.display = 'none'
        elementCtrl('white', 'black', 'black')
    } else {
        activityContainer.style.display = 'none'
        nextBtn.style.display = 'none'
        summaryContainer.style.display = 'flex'
        console.log('finished', wrongAnswer);
        if (wrongAnswer.length > 0) {
            wrongAnswer.forEach(divMaker)
        } else {
            itemContainer.innerText = 'Congratulations!!! No wrong answers.'
        }
    }
}

// Checks to see if the user answer is correct or not
function checkAnswer() {
    answerBtn.style.display = 'none'
    nextBtn.style.display = 'block'
    spanishEl.disabled = true
    nextBtn.focus()
    if (category[questionIndex].spanish.includes(spanishEl.value)) {
        elementCtrl('green', 'white', 'white')
    } else {
        elementCtrl('red', 'white', 'white')
        wrongAnswer.push(category[questionIndex])
        showCorrect.innerText = category[questionIndex].spanish
    }
    questionIndex++
}

// Resets all the values in the app
function reset() {
    category = ''
    questionIndex = 0
    wrongAnswer = []
    itemContainer.innerHTML = ''
    choiceContainer.style.display = 'block'
    activityContainer.style.display = 'none'
    summaryContainer.style.display = 'none'
    close.style.display = 'none'
}

// Shuffles the word order so that it is different everytime
function shuffle(array) {
    let currentIndex = array.length, randomIndex
    while (currentIndex !=0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array
}

// Prints wrong answers to the screen once the answer
function divMaker(wrongAnswer) {
    const div = document.createElement('div')
    const divEnglish = document.createElement('div')
    const divSpanish = document.createElement('div')
    divEnglish.innerText = wrongAnswer.english
    divSpanish.innerText = wrongAnswer.spanish

    div.classList.add('summary-item')
    divEnglish.classList.add('english')
    divSpanish.classList.add('spanish')

    div.appendChild(divEnglish)
    div.appendChild(divSpanish)

    itemContainer.appendChild(div)
}

// Helper function that contains the DOM elements of the app
function elementCtrl(clr1, clr2, clr3) {
    activityContainer.style.backgroundColor = clr1
    englishEl.style.color = clr2
    spanishEl.style.color = clr3
    showCorrectEl.innerText = ''
}

// Helper function for storing the DOM elements of the page
function id(id) {
    return document.getElementById(id)
}

const colors = [
    { english: "purple", spanish: ["morado", "morada"] },
    { english: "bright", spanish: ["vivo"] },
    { english: "violet", spanish: ["violeta"] }
]

const conjunctions = [
    { english: "because of", spanish: ["a causa de"] },
    { english: "despite", spanish: ["a pesar de"] },
    { english: "besides, apart from", spanish: ["además de"] },
    { english: "apart from", spanish: ["aparte de"] },
    { english: "so, therefore", spanish: ["así"] },
    { english: "even (if)", spanish: ["aun (si)"] },
    { english: "although, even though, even if", spanish: ["aunque"] },
    { english: "when", spanish: ["cuando"] },
    { english: "given that", spanish: ["dado que"] },
    { english: "since", spanish: ["desde"] }
]

const conjunctionsTwo = [
    {english: "Several companies have made staffing cuts due to the economic crisis.", spanish: ["Varias empresas han hecho recortes de personal a causa de la crisis económica."]},
    {english: "Lina is always smiling, in spite of problems.", spanish: ["Lina siempre está sonriendo, a pesar de los problemas."]},
    {english: "Besides my normal obligations, I have to be in charge of this project?", spanish: ["¿Además de mis obligaciones habituales me tengo que encargar de este trabajo?"]},
    {english: "Apart from the tip, the dinner cost $100 dollars.", spanish: ["Propina aparte, la cena cuesta 100 dólares."]},
    {english: "Given that my son is sick, I can't go to the party.", spanish: ["Dado que mi hijo está enfermo, no puedo ir a la fiesta.", "Dado que mi hijo se encuentra mal, no puedo ir a la fiesta"]}
]

const opinions = [
    { english: "to be fed up of", spanish: ["estar harto de"] },
    { english: "outstanding, significant", spanish: ["sobresaliente"] },
    { english: "in general", spanish: ["por lo general"] }
]
