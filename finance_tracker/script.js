const paymentType = document.getElementById('paymentType')
const amount = document.getElementById('amount')
const category = document.getElementById('category')
const company = document.getElementById('company')
const date = document.getElementById('date')
const submit = document.getElementById('submit')
const outputContainer = document.getElementById('outputContainer')
const totalSpent = document.getElementById('totalSpent')
const totalDebit = document.getElementById('totalDebit')
const totalCredit = document.getElementById('totalCredit')

let spent = 0
let debit = 0
let credit = 0
let items = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []

submit.addEventListener('click', process)



function process() {
    createArray()
    createNewItem()
}

items.forEach(createNewItem)

function createNewItem(text) {
 
        const divNewItem = document.createElement('div')
        const pNewAmount = document.createElement('div')
        const pNewType = document.createElement('div')
        const pNewCat = document.createElement('div')
        const pNewCom = document.createElement('div')
        const pNewDate = document.createElement('div')

        divNewItem.classList.add('new-item')
        // FIX CREDIT/ DEBIT COLOR - because array is creating object
        if(paymentType.value === 'DEBIT') {
            pNewAmount.innerText = `-$${text.amount}`
            pNewAmount.style.color = 'var(--txt-three)'
        } else {
            pNewAmount.innerText = `+$${text.amount}`
            pNewAmount.style.color = 'var(--txt-two)'
        }
        pNewType.innerText = text.type
        pNewCat.innerText = text.category
        pNewCom.innerText = text.company
        pNewDate.innerText = text.date

        divNewItem.appendChild(pNewAmount)
        divNewItem.appendChild(pNewType)
        divNewItem.appendChild(pNewCat)
        divNewItem.appendChild(pNewCom)
        divNewItem.appendChild(pNewDate)

        outputContainer.appendChild(divNewItem)

        addNewItem()
    
}

// FIX TOTAL SPENT HEADINGS
function addNewItem(text) {
    if (paymentType.value === 'DEBIT') {
        spent += parseFloat(amount.value)
        debit += parseFloat(amount.value)
        totalSpent.innerText = `$${spent}`
        totalDebit.innerText = `-$${debit}`
        totalDebit.style.color = 'var(--txt-three)'
    } else {
        spent -= parseFloat(amount.value)
        credit += parseFloat(amount.value)
        totalSpent.innerText = `$${spent}`
        totalCredit.innerText = `+$${credit}`
        totalCredit.style.color = 'var(--txt-two)'
    }
}

function createArray() {
    let itemObj = {
        'type': paymentType.value,
        'amount': amount.value, 
        'category': category.value,
        'company': company.value,
        'date': date.value
    }
    items.push(itemObj)
    localStorage.setItem('data', JSON.stringify(items))
}


function todayDate() {
    const todayDate = new Date()
    let day = todayDate.getDay()
    let month = todayDate.getMonth() + 1
    let year = todayDate.getFullYear()
    day = addZero(day)
    month = addZero(month)

    function addZero(x) {
        if (x < 10) {
            x = '0' + x
        }
        return x
    }
    date.value = year + '-' + month + '-' + day
}

todayDate()

// REMOVE ITEM FUNCTION
// LOCAL STORAGE