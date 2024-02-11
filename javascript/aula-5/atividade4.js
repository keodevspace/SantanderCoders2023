/*
    Crie uma função "gerarSenhaAleatoria" que recebe um comprimento (tamanho) como parâmetro e gera uma senha aleatória contendo letras maiúsculas, letras minúsculas e números.
*/

function gerarSenhaAleatoria(tamanho) {
    let senha = '';
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < tamanho; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return senha;
}

console.log(gerarSenhaAleatoria(8)); // senha aleatória de 8 caracteres

