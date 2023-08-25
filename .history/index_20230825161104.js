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
    <section class="finish">
        <svg class="checked" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="url(#a)"/>
        <path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/>
        <defs>
            <linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse">
                <stop stop-color="#6348FE"/>
                <stop offset="1" stop-color="#610595"/>
            </linearGradient>
        </defs>
        </svg>
        <div class="benefit">
            <h1 class="thanks">THANK YOU!</h1>
            <p class="complete">We've added your card details</p>
        </div>
        <button class="success-button" type="submit"><a href="index.html">Continue</a></button>
    </section>
    `
    return info.innerHTML = success
}

const puttingInfo = () =>{
    nameEl.textContent = nameVal.value
    number.textContent = parseInt(numberVal.value)
    const mon = parseInt(monthVal.value)
    const yea = parseInt(yearVal.value)
    expDate.textContent = mon + `/` + yea
    cvcDigit.textContent = parseInt(cvcVal.value)
}

if(forms){
    forms.addEventListener('input', async (e)=>{
        puttingInfo()
        forms.addEventListener('submit', async () => {
            e.preventDefault()
            
            try {
                const nameEl = nameVal.value
                const cardNumber = parseInt(numberVal.value)
                const month = parseInt(monthVal.value)
                const year = parseInt(yearVal.value)
                const cvc = parseInt(cvcVal.value)
                const card = {
                name: [nameEl],
                cardNum: [cardNumber],
                expDate: [ {
                            month: month,
                            year: year
                    }
                    ],
                 cvc: [cvc]
                }
                console.log(card)
                if(nameEl){
                    if(cardNumber){
                        if(month){
                            if(year){

                                if(cvc){
                                    
                                    const response = await fetch('https://api.stripe.com/v1/tokens', {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify(card)
                                        })
                                        const token = await response.json()
                                        console.log(token)
                                        if(token.error){
                                            
                                            const sorry = document.getElementById("try-again")
                                            
                                            sorry.textContent = 'Sorry, Something went wrong, please try again'
                                            // sorry.style.display="block"
                                            }else{
                                                
                                                const result = await fetch('https://api.stripe.com/v1/charges', {
                                                    method: 'POST',
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                        'Authorization': `Bearer ${token.id}`
                                                    },
                                                    body: JSON.stringify({
                                                        amount: 1000,
                                                        currency: 'usd',
                                                        description: 'Test Charge',
                                                        source: token.id
                                                    })
                                                })
                                                    const charge = await result.json()
                                                    console.log(charge)
                                                    if(charge.error){
                                                        const sorry = document.getElementById("try-again")
                                                        sorry.textContent = 'Sorry, Something went wrong, please try again'
                                                    }else{
                                                        const thankyou = document.getElementById("section-b")
                                                        thankyou.innerHTML = result()
                                                    }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } catch (error) {
                const sorry = document.getElementById("try-again")
                sorry.textContent = 'Sorry, Something went wrong, please try again'
            }
        })
    })
}