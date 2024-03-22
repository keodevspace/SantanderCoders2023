document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'SERVIDOR'); 
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            const serverResponse = JSON.parse(xhr.responseText);
            document.getElementById('serverResponse').innerText = `Resposta do Servidor: ${JSON.stringify(serverResponse, null, 2)}`;
        } else {
            console.error('Erro no servidor:', xhr.statusText);
        }
    };
     
    const encodedFormData = new URLSearchParams(formData).toString();

    xhr.send(encodedFormData);
});