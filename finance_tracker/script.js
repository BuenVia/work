const paymentType = document.getElementById('paymentType')
const amount = document.getElementById('amount')
const category = document.getElementById('category')
const date = document.getElementById('date')
const submit = document.getElementById('submit')

submit.addEventListener('click', createItem)

function createItem() {
    errorMessages()
}

function errorMessages() {
    if (paymentType.value === '') { /*FIX ISSUE*/
      alert('Enter Type')  
    } else if (amount.value === '') {
        alert('Enter amount')
    } else if (category.value === '') {
        alert('Enter category')
    } else if (date.value === '') {
        alert('Enter date')
    }
}