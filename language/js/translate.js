    const englishEl = id('english')
    const spanishEl = id('spanish')
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

    function checkAnswer () {
        answerBtn.style.display = 'none'
        nextBtn.style.display = 'block'
        spanishEl.disabled = true
        nextBtn.focus()
        if (category[questionIndex].spanish.includes(spanishEl.value)) {
            elementCtrl('green', 'white', 'white')
        } else {
            elementCtrl('red', 'white', 'white')
            wrongAnswer.push(category[questionIndex])
        }
        questionIndex++
    }

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

    function elementCtrl(clr1, clr2, clr3) {
        activityContainer.style.backgroundColor = clr1
        englishEl.style.color = clr2
        spanishEl.style.color = clr3
    }

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
        { english: "besides, apart from", spanish: ["además de"] }
    ]

    const opinions = [
        { english: "to be fed up of", spanish: ["estar harto de"] },
        { english: "outstanding, significant", spanish: ["sobresaliente"] },
        { english: "in general", spanish: ["por lo general"] }
    ]