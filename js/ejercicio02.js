const body = document.getElementsByTagName('body')[0];
const btnCambio = document.getElementById('btnCambio');

btnCambio.addEventListener('click', () => {
    if(btnCambio.textContent === "fondo oscuro"){
        btnCambio.textContent = "fondo claro";
        body.classList.add('inverso');
    }else{
        btnCambio.textContent = "fondo oscuro";
        body.classList.remove('inverso');
    }
});