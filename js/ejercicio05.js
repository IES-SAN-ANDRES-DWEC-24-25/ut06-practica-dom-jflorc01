const elementosH3 = document.querySelectorAll("h3");

elementosH3.forEach((h3) => {
  h3.addEventListener("click", function (evento) {
    const textoH3 = evento.target.textContent.trim();
    const divPadre = evento.target.closest("div");
    const idDiv = divPadre.id;
    const elementosUl = divPadre.querySelectorAll("ul");
    let nombresGrupos = [];

    elementosUl.forEach((ul) => {
      const elementosLi = ul.querySelectorAll("li");
      elementosLi.forEach((li) => {
        nombresGrupos.push(li.textContent);
      });
    });

    const numeroGrupos = nombresGrupos.length;
    const nombresGruposString = nombresGrupos.join(", ");

    const textoResultado = `Has elegido ${textoH3} que se imparte en turno de ${idDiv}
Los nº de grupos que se imparten son ${numeroGrupos}: ${nombresGruposString}`;

    const divResultado = document.createElement("div");
    divResultado.textContent = textoResultado;
    document.body.appendChild(divResultado);
  });
});
