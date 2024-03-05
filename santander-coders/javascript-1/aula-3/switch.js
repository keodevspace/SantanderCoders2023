// Escreva, usando switch case, um codigo que retorna o dia da semana, por extenso e em ptbr, de acordo com a data do sistema.

let dia = new Date().getDay();  
let diaSemana;

switch (dia) {

    case 0:
        diaSemana = "Domingo";
        break;
    case 1:
        diaSemana = "Segunda-feira";
        break;
    case 2:
        diaSemana = "Terça-feira";
        break;
    case 3:
        diaSemana = "Quarta-feira";
        break;
    case 4:
        diaSemana = "Quinta-Feira";
        break;
    case 5:
        diaSemana = "Sexta-feira";
        break;
    case 6:
        diaSemana = "Sábado";
        break;
}

console.log(diaSemana);



