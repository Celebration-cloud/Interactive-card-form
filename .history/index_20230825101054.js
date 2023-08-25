const forms = document.getElementById("formEl")
const nameVal = document.getElementById("cardholder-name-input")
const numberVal = document.getElementById("card-number-input")
const monthVal = document.getElementById("expire-date")
const yearVal = document.getElementById("expire-date2")
const cvcVal = document.getElementById("cvc")
const nameEl = document.getElementById("card-name")
const number = document.getElementById("card-number")
const expDate = document.getElementById("exp-date")
const cvcDigit = document.getElementById("cvc-digit")

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

if(forms){
    forms.addEventListener('input', async (e)=>{
        nameEl.textContent = nameVal.value
        number.textContent = parseInt(numberVal.value)
        const mon = parseInt(monthVal.value)
        const yea = parseInt(yearVal.value)
        if(mon > 31){
            const error1 = `<p class="error">invalid month</p>`
            monthVal.textContent += 'invalid month'
        }else if(yea > 12){
            const error2 = `<p class="error">invalid year</p>`
            yearVal.textContent += 'invalid year'
        }
        expDate.textContent = mon + `/` + yea
        cvcDigit.textContent = parseInt(cvcVal.value)
        forms.addEventListener('submit', async () => {
            e.preventDefault()
            const result = async () => {
                const response = await fetch('https://api.stripe.com/v1/tokens', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(card)
                })
                const data = await response.json()
                console.log(data)
            }
        })
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
            if(name === ""){
                const nameLabel = document.getElementById("chn-error")
                const error1 = `please input your name`
                nameLabel.innerHTML = error1
            }else if(!cardNumber){
                const numberLabel = document.getElementById("cn-error")
                const error2 = `please input your card number`
                numberLabel.textContent += error2
            }else if(!month){
                const monthLabel = document.getElementById("month-error")
                const error3 = `please input your month`
                monthLabel.textContent += error3
            }else if(!year){
                const yearLabel = document.getElementById("year-error")
                const error4 = `please input your year`
                yearLabel.textContent += error4
            }else if(!cvc){
                const cvcLabel = document.getElementById("cvc-error")
                const error5 = `please input your cvc`
                cvcLabel.textContent = error5
            }else{
                console.log(card)
                result()
            }
            
        } catch (error) {
            error = `<p>Sorry, Something went wrong, please try again</p>`
            const sorry = document.getElementById("cardholder-number-label")
            sorry.textContent += 'Sorry, Something went wrong, please try again'
        }
    })
}