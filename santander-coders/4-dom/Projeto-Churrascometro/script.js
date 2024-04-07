document.addEventListener("DOMContentLoaded", function () {
    // Passo 1: Informações Pessoais
    const infoForm = document.getElementById('infoForm');
    infoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        localStorage.setItem('nome', document.getElementById('nome').value);
        localStorage.setItem('email', document.getElementById('email').value);
        localStorage.setItem('cep', document.getElementById('cep').value);
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';
    });

    // Passo 2: Quantidade de Pessoas
    const quantidadeForm = document.getElementById('quantidadeForm');
    quantidadeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const homem = parseInt(document.getElementById('homens').value);
        const mulher = parseInt(document.getElementById('mulheres').value);
        const crianca = parseInt(document.getElementById('criancas').value);
        const alcool = parseInt(document.getElementById('alcool').value);

        const carne = 0.4 * homem + 0.32 * mulher + 0.20 * crianca;
        const paoDeAlho = 2 * (homem + mulher) + crianca;
        const carvao = homem + mulher + crianca;
        const sal = 0.04 * (homem + mulher + crianca);
        const gelo = Math.ceil((homem + mulher + crianca) / 10) * 5;
        const refrigerante = Math.ceil((homem + mulher + crianca) / 5);
        const agua = Math.ceil((homem + mulher + crianca) / 5);
        const cerveja = 3 * alcool;

        const resultado = `
            <tr>
                <td>Carne</td>
                <td>${carne} KG</td>
            </tr>
            <tr>
                <td>Pão de Alho</td>
                <td>${paoDeAlho}</td>
            </tr>
            <tr>
                <td>Carvão</td>
                <td>${carvao} KG</td>
            </tr>
            <tr>
                <td>Sal</td>
                <td>${sal} KG</td>
            </tr>
            <tr>
                <td>Gelo</td>
                <td>${gelo} KG</td>
            </tr>
            <tr>
                <td>Refrigerante</td>
                <td>${refrigerante} Garrafas de 2L</td>
            </tr>
            <tr>
                <td>Água</td>
                <td>${agua} Garrafas de 1L</td>
            </tr>
            <tr>
                <td>Cerveja</td>
                <td>${cerveja} Garrafas de 600ml</td>
            </tr>
        `;

        document.getElementById('resultado').innerHTML = resultado;
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step3').style.display = 'block';
    });

    // Verificar se já há informações preenchidas
    if (localStorage.getItem('nome')) {
        document.getElementById('nome').value = localStorage.getItem('nome');
    }
    if (localStorage.getItem('email')) {
        document.getElementById('email').value = localStorage.getItem('email');
    }
    if (localStorage.getItem('cep')) {
        document.getElementById('cep').value = localStorage.getItem('cep');
    }
});
