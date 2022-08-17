const addressForm = document.querySelector("#address-form");
const cepInput = document.querySelector("#cep")
const addressInput = document.querySelector("#address")
const cityInput = document.querySelector("#city")
const neighborhoodInout = document.querySelector("#neighborhood");
const regionInput = document.querySelector("#region");
const formInputs = document.querySelectorAll("[data-input]");
const closeButton = document.querySelector("#close-message");
const fadeElement = document.querySelector("#fade");
const loaderElement = document.querySelector("#loader");
const messageElement = document.querySelector("#message");


// aceita somente num no cep
cepInput.addEventListener("keypress", (e) => {
    const onlyNumber = /[0-9]/;
    const key = String.fromCharCode(e.keyCode);

    if (!onlyNumber.test(key)) {
        e.preventDefault();
        return;
    }
});

// chama API
cepInput.addEventListener("keyup", (e) => {
    const cep = e.target.value;

    if (cep.length === 8) {
        getCep(cep);
    }
});

cepInput.addEventListener("focus", () => {
    // alert("sad");
})

closeButton.addEventListener("click", () => {
    togleMensagem();
})


// Funcao consulta API e preenche os campos
const getCep = async (cep) => {


    togleLoader();
    cepInput.blur();

    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log(data)

    if (data.erro == "true") {
        if (!addressInput.hasAttribute("disabled")) {
            togleInputs();  
        }

        console.log("cep invalido")
        addressForm.reset();
        togleLoader();   
        togleMensagem();
        return;
    }

    if (addressInput.value == "") {
        togleInputs();    
    }

    
    addressInput.value = data.logradouro;
    cityInput.value = data.localidade;
    neighborhoodInout.value = data.bairro;
    regionInput.value = data.uf;
    togleLoader();


}

// togle disabled inputs
const togleInputs = () => {
    if (addressInput.hasAttribute("disabled")) {
        formInputs.forEach((input) => {
            input.removeAttribute("disabled");
        });
    }else{
        formInputs.forEach((input) => {
            input.setAttribute("disabled","disabled");
        });
    }
}


// funcao togle loader
const togleLoader = () => {
    fadeElement.classList.toggle("hide");
    loaderElement.classList.toggle("hide");

}

// funcao mensagem
const togleMensagem = () => {
    fadeElement.classList.toggle("hide");
    messageElement.classList.toggle("hide");
}



