const formulario = document.getElementById("formulario");
const tabela = document.getElementById("tabela");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const whatsapp = document.getElementById("whatsapp").value;

    const novaLinha = document.createElement("tr");

    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${email}</td>
        <td>${whatsapp}</td>
    `;

    tabela.appendChild(novaLinha);

    formulario.reset();
});