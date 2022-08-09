const addressForm = document.querySelector("#address-form");
const cepInput = document.querySelector("#cep")
const addressInput = document.querySelector("#address")
const cityInput = document.querySelector("#city")
const neighborhoodInout = document.querySelector("#neighborhood");
const regionInput = document.querySelector("#region");
const formInputs = document.querySelectorAll("[data-input]");
const closeButton = document.querySelector("#close-message");
const fadeElement = document.querySelector("#fade");

// Validacao cep input
cepInput.addEventListener("keypress", (e) => {    
    if (!checkNumber(e)) {
        e.preventDefault();
    }
})

function checkNumber(e) {
    const key = String.fromCharCode(e.keyCode);
    const onlyNumber = /[0-9]/
    return key.match(onlyNumber) ? true : false;
}




