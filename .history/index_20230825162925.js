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
        try {
            puttingInfo()
            forms.addEventListener('submit', async (e) => {
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
                        const nameLabel = document.getElementById("chn-error")
                        nameLabel.textContent = `please input your name`
                    }else if(!cardNumber){
                        const numberLabel = document.getElementById("cn-error")
                        numberLabel.textContent = `please input your card number`
                    }else if(!month &&!year){
                        const expLabel = document.getElementById("exp-error")
                        expLabel.textContent = `please input your exp date`
                    }else if(!cvc){
                        const cvcLabel = document.getElementById("cvc-error")
                        cvcLabel.textContent = `please input your cvc`
                    }else{
                        result()
                    }
                } catch (error) {
                    const sorry = document.getElementById("try-again")
                    sorry.textContent = 'Sorry, Something went wrong, please try again'
                }
            })
        } catch (error) {
            const sorry = document.getElementById("try-again")
            sorry.textContent = 'Sorry, Something went wrong, please try again'
        }
    })
}

class Form {
    constructor(){
        this.nameEl = document.getElementById("cardholder-name-input")
        this.numberEl = document.getElementById("card-number-input")
        this.monthEl = document.getElementById("expire-date")
        this.yearEl = document.getElementById("expire-date2")
        this.cvcEl = document.getElementById("cvc")
        this.submitBtn = document.getElementById("submit-btn")
        this.nameLabel = document.getElementById("chn-error")
        this.numberLabel = document.getElementById("cn-error")
        this.expLabel = document.getElementById("exp-error")
        this.cvcLabel = document.getElementById("cvc-error")
        this.result = document.getElementById("section-b")
    }
    handleSubmit(e){
        e.preventDefault()
        const nameEl = this.nameEl.value
        const cardNumber = parseInt(this.numberEl.value)
        const month = parseInt(this.monthEl.value)
        const year = parseInt(this.yearEl.value)
        const cvc = parseInt(this.cvcEl.value)
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
    }
}