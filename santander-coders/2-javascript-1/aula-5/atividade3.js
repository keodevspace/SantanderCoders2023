/*
    Crie uma função "validarSenha" que recebe uma senha como parâmetro e retorna true se a senha atender aos seguintes critérios, sem utilizar regex:

    Pelo menos 8 caracteres de comprimento.
    Deve conter pelo menos uma letra maiúscula.
    Deve conter pelo menos uma letra minúscula.
    Deve conter pelo menos um número.
*/

function validarSenha(senha) {
    if (senha.lenght < 8) {
        return false;
    }
    if (senha.match(/A - Z/) === null) {
        return false;
    }
    if (senha.match (/a - z/) === null) {
        return false;
    }
    if (senha.match (/0 - 9/) === null) {
        return false;
    }
    return true;
}

console.log(validarSenha('12345678')); // false
console.log(validarSenha('12345678A')); // false
console.log(validarSenha('AgoraFoi12345')); // true