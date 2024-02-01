// Crie um algoritmo que, dada uma variável, que recebe o valor de um CPF com formatação, remova essa formatação e armazene esse valor sem formatação, como um 'number'.

let cpf = "123.456.789-10";
let cpfSemFormatacao = cpf.replace(/\D/g, "");

console.log(parseInt(cpfSemFormatacao));

// sem regex

let cpf2 = "123.456.789-10";
let cpfSemFormatacao2 = cpf2.split(".").join("").split("-").join("");

console.log(parseInt(cpfSemFormatacao2));




