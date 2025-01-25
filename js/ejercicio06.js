let listDiv = "";
let listUl = "";
let lis = "";
let toggleList = "";
let descriptionInput = "";
let descriptionP = "";
let descriptionButton = "";
let addItemInput = "";
let addItemButton = "";

window.addEventListener("load", iniciar);

function iniciar() {
  listDiv = document.querySelector(".list");
  listUl = listDiv.querySelector("ul");
  lis = listUl.children;
  toggleList = document.getElementById("toggleList");
  descriptionInput = document.querySelector("input.description");
  descriptionP = document.querySelector("p.description");
  descriptionButton = document.querySelector("button.description");
  addItemInput = document.querySelector("input.addItemInput");
  addItemButton = document.querySelector("button.addItemButton");

  for (let i = 0; i < lis.length; i += 1) {
    attachListItemButtons(lis[i]);
  }

  listUl.addEventListener("click", crearbotones);
  toggleList.addEventListener("click", MostrarOcultarLista);
  descriptionButton.addEventListener("click", CambiarTextoLista);
  addItemButton.addEventListener("click", AñadirElemento);
}

function attachListItemButtons(li) {
  let subir = document.createElement("button");
  subir.className = "subir";
  subir.textContent = "subir";
  li.appendChild(subir);

  let bajar = document.createElement("button");
  bajar.className = "bajar";
  bajar.textContent = "bajar";
  li.appendChild(bajar);

  let borrar = document.createElement("button");
  borrar.className = "borrar";
  borrar.textContent = "borrar";
  li.appendChild(borrar);
}

function crearbotones(event) {
  if (event.target.tagName === "BUTTON") {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;

    if (button.className === "borrar") {
      ul.removeChild(li);
    } else if (button.className === "subir") {
      const prevLi = li.previousElementSibling;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    } else if (button.className === "bajar") {
      const nextLi = li.nextElementSibling;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
  }
}

function MostrarOcultarLista() {
  if (listDiv.style.display === "none") {
    listDiv.style.display = "block";
    toggleList.textContent = "Ocultar lista";
  } else {
    listDiv.style.display = "none";
    toggleList.textContent = "Mostrar lista";
  }
}

function CambiarTextoLista() {
  const newText = descriptionInput.value.trim();
  if (newText) {
    descriptionP.textContent = newText;
  }
}

function AñadirElemento() {
  const newItemText = addItemInput.value.trim();
  if (newItemText) {
    const li = document.createElement("li");
    li.textContent = newItemText;
    attachListItemButtons(li);
    listUl.appendChild(li);
    addItemInput.value = "";
  }
}
