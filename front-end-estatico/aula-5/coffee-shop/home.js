const rangeInput = document.getElementById('nivel-satisfacao');
const porcentagemText = document.getElementById('porcentagem');

rangeInput.addEventListener('input', () => {
    porcentagemText.textContent = `${rangeInput.value}%`;
  });

  // revisar
  const enviarButton = document.querySelector('button');
  enviarButton.addEventListener('click', () => {      
      console.log('Formulário enviado!');
  });

function toggleDescription(card) {
    card.classList.toggle('active');
}
  
 
