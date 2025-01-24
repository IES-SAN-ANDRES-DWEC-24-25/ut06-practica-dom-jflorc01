const lista = document.getElementsByTagName('ul')[0];
const btn = document.getElementsByClassName('BotonAñadir')[0];
const inputElemento = document.getElementsByClassName('AñadirElemento')[0];

btn.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent=inputElemento.value;
    lista.appendChild(li);
    inputElemento.value="";
});
