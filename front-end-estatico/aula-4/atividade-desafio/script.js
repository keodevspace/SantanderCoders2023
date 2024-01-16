function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var age = document.getElementById("age").value;
  var paymentMethod = document.getElementById("paymentMethod").value;
  var creditCardNumber = document.getElementById("creditCardNumber").value;
  var expirationDate = document.getElementById("expirationDate").value;
  var cvv = document.getElementById("cvv").value;
  var donationAmount = document.getElementById("donationAmount").value;

  if (!name || !email || !age || !paymentMethod || !donationAmount) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  if (
    paymentMethod === "creditCard" &&
    (!creditCardNumber || !expirationDate || !cvv)
  ) {
    alert("Por favor, preencha os detalhes do cartão de crédito.");
    return;
  }

  if (paymentMethod === "pix") {
    alert("Por favor, faça o pagamento PIX para a conta especificada.");
  } else if (paymentMethod === "creditCard") {
    alert(
      "Processando pagamento com cartão de crédito...\nValor: " + donationAmount
    );
  }

  alert("Formulário enviado com sucesso!");
}
document
  .getElementById("paymentMethod")
  .addEventListener("change", function () {
    var creditCardDetails = document.getElementById("creditCardDetails");

    if (this.value === "creditCard") {
      creditCardDetails.style.display = "block";
    } else {
      creditCardDetails.style.display = "none";
    }
  });
