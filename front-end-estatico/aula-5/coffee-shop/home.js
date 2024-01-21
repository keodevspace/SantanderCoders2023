
//chuva de confete
function createConfetti() {  
  const confettiCount = 100;
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.animationDuration = Math.random() * 2 + 1 + "s";

    document.body.appendChild(confetti);

    // finaliza a animação e remove o elemento
    confetti.addEventListener("animationend", () => {
      confetti.remove();
    });
  }
}

// evento para receber nivel de satisfação
const rangeInput = document.getElementById("nivel-satisfacao");
const porcentagemText = document.getElementById("porcentagem");

rangeInput.addEventListener("input", () => {
  porcentagemText.textContent = `${rangeInput.value}%`;
});

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // valores dos campos do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const ideia = document.getElementById("ideia").value;
    const porcentagem = document.getElementById("porcentagem").textContent;

    // objeto com os dados do participante
    const participantData = {
      name,
      email,
      ideia,
      porcentagem,
    };

    // chamada da API usando fetch
    fetch("http://localhost:3000/participants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(participantData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Ideia Brilhante! Em breve retornaremos o contato!", data);
        alert("Ideia Brilhante! Em breve retornaremos o contato!");
      })   
      
      // Adiciona confetes após o envio do formulário
      createConfetti();
    })

      .catch((error) => {
        console.error(
          "Ops...Erro ao registrar sua ideia. Tente novamente!",
          error
        );
        alert("Ops...Erro ao registrar sua ideia. Tente novamente!");
      });  

  function toggleDescription(card) {
    // ao clicar no card ativa o toggle
    card.classList.toggle("active");
  
    // remove o toggle dos outros cards
    const allCards = document.querySelectorAll(".card");
    allCards.forEach((otherCard) => {
      if (otherCard !== card && otherCard.classList.contains("active")) {
        otherCard.classList.remove("active");
      }
    });
  }
  