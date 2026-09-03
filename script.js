// MENU

const menuBotao = document.getElementById("menuBotao");
const navegacao = document.getElementById("navegacao");

menuBotao.addEventListener("click", function() {
    navegacao.classList.toggle("ativo");
});


// FECHAR MENU

const links = document.querySelectorAll(".navegacao a");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        navegacao.classList.remove("ativo");
    });
}


// FORMULÁRIO

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const nome = document.getElementById("nome").value;

    const mensagem = document.getElementById("mensagemFormulario");

    mensagem.textContent =
        "Obrigado, " + nome + "! Sua mensagem foi enviada.";

    formulario.reset();
});
