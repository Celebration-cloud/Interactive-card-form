const form = document.querySelector("form")
const nameInput = document.getElementById("card-name")
const nameVal = document.getElementById("cardholder-name-input")
const numberVal = document.getElementById("card-number-input")
const monthVal = document.getElementById("expire-date")
const yearVal = document.getElementById("expire-date2")
const cvcVal = document.getElementById("cvc")

// form.addEventListener('submit', function(ev){
//     ev.preventDefault()
//     ev.stopPropagation()
//     successful()
// })
const successful = async () =>{
    const name = nameVal.value
    const cardNumber = parseInt(numberVal.value)
    const month = parseInt(monthVal.value)
    const year = parseInt(yearVal.value)
    const cvc = parseInt(cvcVal.value)
    const card = {
        name: [name],
        cardNum: [cardNumber],
        expDate: [
            month,
            year
        ],
        cvc: [cvc]
    }
    console.log(card) 
    if(!name){
        nameVal.append('please input your name')
    }else if(!parseInt(cardNumber)){
        numberVal.append('please input your card number')
    }else if(!parseInt(year)){
        yearVal.append('please input your year')
    }else if(!parseInt(cvc)){
        cvcVal.append('please input your cvc')
    }else if(!parseInt(cvc)){
        cvcVal.append('please input your cvc')
    }else{
        const response = await fetch('/api/cards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(card)
        })
        const data = await response.json()
        console.log(data)
        console.log(card)
    }
    
}

const resu