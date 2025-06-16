

function calcular() {

    var altura = window.document.getElementById("altura")
    var altura = Number(altura.value)
    var peso = window.document.getElementById("peso")
    var peso = Number(peso.value)
    var mensagem = window.document.getElementById("msg")
    var descricao = window.document.getElementById("descricao")

    var conta = altura * altura
    var calcular = peso / conta

    mensagem.innerHTML = `Seu imc é de ${calcular.toFixed(2)}`

    if (altura == "" || peso == "" ) {
        alert("Preencha todos os campos!")
    }

    if (calcular < 18.5) {
        descricao.innerHTML = "Você esta abaixo do peso"
    } else if (calcular <= 18.5 && calcular >= 24.9) {
        descricao.innerHTML = "Seu peso esta normal"
    } else if (calcular <= 25 && calcular >= 29.9) {
        descricao.innerHTML = "Você esta Acima do peso"
    } else {
        descricao.innerHTML = "Você é obeso"
    }

}

