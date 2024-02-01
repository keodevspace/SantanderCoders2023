// calcular imc

let peso = parseInt(prompt('Digite seu peso: '));
let altura = parseFloat(prompt('Digite sua altura: '));

function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Magreza'
    } else if (imc < 24.9) {
        return 'Normal'
    } else if (imc < 29.9) {
        return 'Sobrepeso'
    } else if (imc < 39.9) {
        return 'Obesidade'
    } else {
        return 'Obesidade Grave'
    }
}

function mostrarResultado(peso, altura) {
    const imc = calcularIMC(peso, altura)
    const classificacao = classificarIMC(imc)

    console.log(`Seu IMC é ${imc.toFixed(2)} (${classificacao})`)
}