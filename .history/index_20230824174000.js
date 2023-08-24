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
    try {
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
            const error1 = 'please input your name'
            nameVal.textContent += error1
        }else if(!parseInt(cardNumber)){
            const error2 = 'please input your card number'
            numberVal.textContent += error2
        }else if(!parseInt(year)){
            const error3 = 'please input your year'
            yearVal.textContent += ''
            yearVal.append('')
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
            result()
        }
    } catch (error) {
        error = `Sorry, Something went wrong, please try again`
        const sorry = document.getElementById("cardholder-number-label")
        sorry.innerHTML += error
    }
    
}

const result = () =>{
    const info = document.getElementById("section-b")
    const success = `
    <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="url(#a)"/>
        <path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/>
        <defs>
            <linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse">
                <stop stop-color="#6348FE"/>
                <stop offset="1" stop-color="#610595"/>
            </linearGradient>
        </defs>
    </svg>
    <h1 class="thanks">THANK YOU!</h1>
    <p class="complete">We've added your card details</p>
    <button type="submit">Continue</button>
    `
    return info.innerHTML = success
}