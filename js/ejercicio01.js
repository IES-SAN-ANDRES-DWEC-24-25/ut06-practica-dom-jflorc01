const btnCambio = document.getElementById("btnCambio");
const titulo = document.getElementsByTagName('h1')[0];
const inputColor = document.getElementById("inputColor");

btnCambio.addEventListener('click', () => {
    titulo.style.color = inputColor.value;
});