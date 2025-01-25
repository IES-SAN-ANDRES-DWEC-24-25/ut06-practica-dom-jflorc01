const lista = document.getElementsByTagName('ul')[0];
const inputElemento = document.getElementsByClassName('AñadirElemento')[0];
const btnAdd = document.getElementById('btnAdd');
const btnUlti = document.getElementById('btnUlti');
const btnPrim = document.getElementById('btnPrim');


btnAdd.addEventListener('click', () => {
    if(inputElemento.value != ""){
        const li = document.createElement('li');
        li.textContent=inputElemento.value;
        lista.appendChild(li);
        inputElemento.value="";
    }
});

btnUlti.addEventListener('click', () => {
    lista.removeChild(lista.lastChild);
});

btnPrim.addEventListener('click', () => {
    lista.removeChild(lista.firstChild);
});
