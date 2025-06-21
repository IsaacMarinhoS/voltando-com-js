function resultado() {
    var resposta = document.querySelector(".resposta")

  
    let jogadorEscolha = document.querySelector('input[name="jogo"]:checked')
    if (!jogadorEscolha) {
        resposta.innerHTML = "Escolha uma opção!"
        return
    }

    let jogador = jogadorEscolha.value;


    let opcoes = ["pedra", "papel", "tesoura"]
    let indice = Math.floor(Math.random() * 3)
    let computador = opcoes[indice]

    
    let resultadoFinal = ""

    if (jogador === computador) {
        resultadoFinal = "Empate!"
    } else if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")
    ) {
        resultadoFinal = "Você venceu!"
    } else {
        resultadoFinal = "Computador venceu!"
    }

    resposta.innerHTML = `
        Você escolheu: ${jogador}<br>
        Computador escolheu: ${computador}<br>
       ${resultadoFinal}
    `
}
