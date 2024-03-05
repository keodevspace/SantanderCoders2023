// evento para receber nível de satisfação
const rangeInput = document.getElementById("satisfaction");
const percentText = document.getElementById("percent");
rangeInput.addEventListener("input", () => {
  percentText.textContent = `${rangeInput.value}%`;
});

document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // valores dos campos do formulário
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const ideia = document.getElementById("ideia").value;
  const percent = document.getElementById("percent").textContent;

  // objeto com os dados da ideia
  const ideaData = {
    name,
    email,
    ideia,
    percent,
  };

  // chamada da API usando fetch
  fetch("http://localhost:3000/ideas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ideaData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao registrar a ideia. Tente novamente!");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Ideia Brilhante! Em breve retornaremos o contato!", data);
      alert("Ideia Brilhante! Em breve retornaremos o contato!");
    })
    .catch((error) => {
      console.error("Ops... " + error.message);
      alert(error.message);
    });
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
