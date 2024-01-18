const inputCheck = document.querySelector('#modo-noturno');
const elementoBody = document.body;

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'dark' : 'light';
    elementoBody.classList.toggle('modo-noturno', inputCheck.checked);
});
