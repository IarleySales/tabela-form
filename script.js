const formulario = document.getElementById("formVaga");
const listaVagas = document.getElementById("listaVagas");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const empresa = document.getElementById("empresa").value;
    const vaga = document.getElementById("vaga").value;
    const area = document.getElementById("area").value;
    const local = document.getElementById("local").value;
    const email = document.getElementById("email").value;

    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${empresa}</td>
        <td>${vaga}</td>
        <td>${area}</td>
        <td>${local}</td>
        <td>${email}</td>
    `;

    listaVagas.appendChild(linha);

    formulario.reset();
});