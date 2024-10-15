const formIMC = document.querySelector("#imc-values");
const resultOutput = document.querySelector("#imc-result");
const imcResult = document.querySelector("#imc-result");

formIMC.addEventListener("submit", function(event) {
    event.preventDefault();

    const weightTxt = document.getElementById("weight").value; 
    const heightTxt = document.getElementById("height").value;

    const weight = parseFloat(handleText(weightTxt));
    const height = parseFloat(handleText(heightTxt));
    const imc = weight / Math.pow(height,2);

    resultOutput.innerText = `Seu IMC é de ${imc.toFixed(2)} (${rateIMC(imc)})`;
    imcResult.style.display = "block";
    
    function rateIMC() {
        switch (true) {
            case (imc < 18.5):
                return "Abaixo do peso";
            case (imc >= 18.5 && imc <= 24.9):
                return "Peso normal";
            case (imc >= 25 && imc <= 29.9):
                return "Sobrepeso";
            case (imc >= 30 && imc <= 34.9):
                return "Obesidade grau 1";
            case (imc >= 35 && imc <= 39.9):
                return "Obesidade grau 2"
            case (imc > 40):
                return "Obesidade grau 3"
            default:
                return "invalid";
        }
    }
    console.log("Formulário enviado e o cálculo foi realizado.");
});

function handleText(x) {
    return x.replace(",",".");
}