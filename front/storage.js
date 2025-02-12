let inputMail = document.querySelector('.inputMail');
let inputPassword = document.querySelector('.inputPassword');

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.btn').addEventListener('click', () => {
        localStorage.setItem(inputMail.value, inputPassword.value);
        alert("Donnée enregistrée avec succès");
    });
});

