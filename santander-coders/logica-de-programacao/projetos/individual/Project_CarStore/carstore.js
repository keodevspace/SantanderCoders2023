// import enviar-email.js
const enviarEmail = require("./enviar-email");

// last month list of clients
const clientList = [
  {
    name: "Cliente1",
    email: "cliente1@cliente.com",
    flag: true,
  },
  {
    name: "Cliente2",
    email: "cliente3@cliente.com",
    flag: false,
  },
  {
    name: "Cliente3",
    email: "cliente1@cliente.com",
    flag: true,
  },
];

// check the flag of the clients
let clientValidatedList = [];

function flagCheck() {
  for (let i = 0; i < clientList.length; i++) {
    if (clientList[i].flag === true) {
      clientValidatedList.push(clientList[i]);
    }
  }
}
flagCheck();

// check if today is monday
function checkWeekDay() {
  const data = new Date();
  const weekDay = data.getDay();
  return weekDay === 1;
}

// send email to the validated list
function sendEmailToValidatedList() {
  if (checkWeekDay()) {
    for (let i = 0; i < clientValidatedList.length; i++) {
      const clients = clientValidatedList[i];
      const addressee = clients.email;
      const subject = "Novidades CarStore!";
      const body = `Olá ${clients.name}, tudo bem? Aqui é o Ferreira da CarStore. Estamos entrando em contato para apresentar as novidades da semana!`;
      
      enviarEmail(addressee, subject, body);
    }
  } else {    
    for (let i = 0; i < clientList.length; i++) {
      const clients = clientList[i];
      if (!clients.flag) {
        const defaultAddressee = clients.email;
        const defaultSubject = "E-mail padrão";
        const defaultBody = "Este é um e-mail padrão para ser enviado em dias que não são segunda-feira.";
        enviarEmail(defaultAddressee, defaultSubject, defaultBody);
      }
    }
  }
}

sendEmailToValidatedList();
