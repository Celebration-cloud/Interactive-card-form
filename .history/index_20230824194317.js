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




if(forms){
    forms.addEventListener('input', async (e)=>{
        nameEl.textContent = nameVal.value
        number.textContent = parseInt(numberVal.value)
        const exp = `<span>${}</span>`
        expDate.textContent = parseInt(monthVal.value + yearVal.value)
        cvcDigit.textContent = parseInt(cvcVal.value)
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
            if(name === undefined){
                const error1 = `<p class="error"><p>`
                nameVal.textContent = 'please input your name'
            }else if(!cardNumber){
                const error2 = `<p class="error"></p>`
                numberVal.textContent += 'please input your card number'
            }else if(!month){
                const error3 = `<p class="error">please input your month</p>`
                monthVal.textContent += 'please input your month'
            }else if(!year){
                const error4 = `<p class="error"></p>`
                yearVal.textContent += 'please input your year'
            }else if(!cvc){
                const error5 = `<p class="error"></p>`
                cvcVal.textContent += 'please input your cvc'
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