
// ================================
// MENU MOBILE
// ================================

const menuBotao = document.getElementById("menuBotao");
const navegacao = document.getElementById("navegacao");

menuBotao.addEventListener("click", () => {
    navegacao.classList.toggle("ativo");
});


// Fecha o menu ao clicar em algum link

const linksMenu = document.querySelectorAll(".navegacao a");

linksMenu.forEach((link) => {

    link.addEventListener("click", () => {
        navegacao.classList.remove("ativo");
    });

});


// ================================
// FORMULÁRIO
// ================================

const formulario = document.getElementById("formulario");

const mensagemFormulario =
    document.getElementById("mensagemFormulario");

formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const nome =
        document.getElementById("nome").value;

    mensagemFormulario.textContent =
        `Obrigado, ${nome}! Sua mensagem foi enviada.`;

    formulario.reset();

});


// ================================
// ANIMAÇÃO AO ENTRAR NA TELA
// ================================

const elementos = document.querySelectorAll(
    ".card, .sobre__texto, .painel, .formulario"
);

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.style.opacity = "1";

                entrada.target.style.transform =
                    "translateY(0)";

                observador.unobserve(entrada.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach((elemento) => {

    elemento.style.opacity = "0";

    elemento.style.transform =
        "translateY(25px)";

    elemento.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observador.observe(elemento);

});
