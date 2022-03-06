const colorsBtn = id('colors')
const conjunctionsBtn = id('conjunctions')
const opinionsBtn = id('opinions')
const englishEl = id('english')

let category

colorsBtn.addEventListener('click', loadWords)
conjunctionsBtn.addEventListener('click', loadWords)
opinionsBtn.addEventListener('click', loadWords)

function loadWords() {
    if (this.id === "colors") category = colors
    else if (this.id === "conjunctions") category = conjunctions
    else if (this.id === "opinions") category = opinions
    setQuestion()
}

function setQuestion() {
    englishEl.innerText = category[0].english
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