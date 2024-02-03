function jogoDeAdivinhacao() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
    let tentativa;
    let tentativas = 0;

    while (true) {
        tentativa = parseInt(prompt("Tente adivinhar o número (entre 1 e 100):"));

        switch (true) {
            case isNaN(tentativa):
                alert("Por favor, insira um número válido.");
                break;
            case tentativa < numeroAleatorio:
                alert("O número é maior. Tente novamente.");
                tentativas++;
                break;
            case tentativa > numeroAleatorio:
                alert("O número é menor. Tente novamente.");
                tentativas++;
                break;
            default:
                tentativas++;
                alert(`Parabéns! Você acertou o número em ${tentativas} tentativa(s).`);
                return;
        }
    }
}

jogoDeAdivinhacao();
