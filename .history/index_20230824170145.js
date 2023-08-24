const buttonEl = document.querySelector("button")
const nameInput = document.getElementById("card-name")
const nameVal = document.getElementById("cardholder-name-input")

// form.addEventListener('submit', function(ev){
//     ev.preventDefault()
//     ev.stopPropagation()
//     successful()
// })
const successful = async () =>{
    const name = nameInput.value
    const nameVal = nameInput.value
    const response = await (`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${name}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: nameVal,
        }),
    })
    const data = await response.json()
    console.log(data)
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