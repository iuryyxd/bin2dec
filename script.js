const inputDigit = document.querySelector("form input"),
convertButton = document.querySelector("form button"),
inputResult = document.querySelector(".result input");

inputDigit.addEventListener("keydown", function(e){
    if(e.key > 1 || e.key < 0) {
        alert("Não é permitido outros números além de 0 e 1!")
    }
})

inputDigit.addEventListener("input", function(){
    if(inputDigit.value == "") {
        inputResult.value = ""
    }
})

let arrayResult = []
var soma = 0;

function convertUnits(e) {
    e.preventDefault();

    if(inputDigit.value == "") return alert("Digite algum número!")

    var newString = ""

    for(let i = inputDigit.value.length - 1; i >= 0; i--) {
        newString += inputDigit.value[i]
    }

    for(let i = 0; i < inputDigit.value.length; i++) {
        let res = newString[i] * Math.pow(2, i)
        arrayResult.push(res)
    }

    for(var i = 0; i < arrayResult.length; i++) {
         soma += arrayResult[i];
     }

    inputResult.value = soma.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    arrayResult = []
    soma = 0
    
}

convertButton.addEventListener("click", convertUnits)