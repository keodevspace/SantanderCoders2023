document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // valores dos campos do formulário
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const shirtSize = document.getElementById('shirtSize').value;
    const registrationCategory = document.getElementById('registrationCategory').value;
    const donationAmount = document.getElementById('donationAmount').value;

    // objeto com os dados do participante
    const participantData = {
        name,
        age,
        email,
        shirtSize,
        registrationCategory,
        donationAmount
    };

    // chamada da API usando fetch
    fetch('http://localhost:3000/participants', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(participantData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Registro bem-sucedido:', data);
        alert('Registro bem-sucedido!');
    })
    .catch((error) => {
        console.error('Erro ao registrar participante:', error);
        alert('Erro ao registrar participante. Por favor, tente novamente.');
    });
});

