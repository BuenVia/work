const paymentType = document.getElementById('paymentType')
const amount = document.getElementById('amount')
const category = document.getElementById('category')
const date = document.getElementById('date')
const submit = document.getElementById('submit')
const outputContainer = document.getElementById('outputContainer')
const totalSpent = document.getElementById('totalSpent')

let total = 0

submit.addEventListener('click', process)

function process() {
    errorMessages()
    addNewItem()
    console.log(total);
}

function addNewItem() {
    total += parseInt(amount.value)
    totalSpent.innerText = `$${total}` 
    createNewItem()
    }

function createNewItem() {
    const divNewItem = document.createElement('div')
    const pNewAmount = document.createElement('div')
    const pNewType = document.createElement('div')
    const pNewCat = document.createElement('div')
    const pNewDate = document.createElement('div')

    divNewItem.classList.add('new-item')

    pNewAmount.innerText = `$${amount.value}`
    pNewType.innerText = paymentType.value
    pNewCat.innerText = category.value
    pNewDate.innerText = date.value

    divNewItem.appendChild(pNewAmount)
    divNewItem.appendChild(pNewType)
    divNewItem.appendChild(pNewCat)
    divNewItem.appendChild(pNewDate)

    outputContainer.appendChild(divNewItem)
}

function errorMessages() {
    // if (paymentType.value === '') { /*FIX ISSUE*/
    //   alert('Enter Type') } 
    if (amount.value === '') {
        alert('Enter amount')
    } else if (category.value === '') {
        alert('Enter category')
    } else if (date.value === '') {
        alert('Enter date')
    }
}