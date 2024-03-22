document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('reservationForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const formData = new FormData(form);
        const jsonData = {};

        formData.forEach(function (value, key) {
            jsonData[key] = value.trim();
        });

        if (Object.values(jsonData).some(value => value === '')) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        fetch('http://localhost:3000/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao enviar os dados.');
            }
            return response.json();
        })
        .then(data => {
            alert('Reserva enviada com sucesso!');
            form.reset(); 
        })
        .catch(error => {
            alert(error.message);
        });
    });
});
