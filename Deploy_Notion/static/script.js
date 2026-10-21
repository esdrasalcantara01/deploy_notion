
function iniciarAnimacaoLogo() {
    const logo = document.querySelector(".logo-app");

    if (!logo) return;

    logo.src = "/static/image.gif";
}


const formularios = document.querySelectorAll(
    ".form1, .form2"
);

formularios.forEach((formulario) => {
    formulario.addEventListener("submit", () => {
        if (formulario.checkValidity()) {
            iniciarAnimacaoLogo();
        }
    });
});


function cadastro() {
    const imagem = document.querySelector(".cadastro img");
    const form1 = document.querySelector(".cadastro .form1");
    const form2 = document.querySelector(".cadastro .form2");

    if (!form1 || !form2) return;

    if (window.innerWidth <= 425) {
        form1.style.transform = "translateX(0)";
        form2.style.transform = "translateX(0)";
    }

    if (imagem) {
       if (window.innerWidth <= 1220) {
          imagem.style.left = "298px";
       } 
}

}

function login() {
    const imagem = document.querySelector(".cadastro img");
    const form1 = document.querySelector(".cadastro .form1");
    const form2 = document.querySelector(".cadastro .form2");

    if (!form1 || !form2) return;

    if (window.innerWidth <= 425) {
        form1.style.transform = "translateX(-120%)";
        form2.style.transform = "translateX(-110%)";
    }

    if (imagem) {
        imagem.style.left = "0";
        imagem.style.right = "auto";
    }
}


function fecharDialogo() {
    const dialogo = document.getElementById("dialogo-erro");

    if (!dialogo || typeof dialogo.close !== "function") return;

    if (dialogo.open) {
        dialogo.close();
    }
}


// Mostrar e ocultar senha
const camposSenha = document.querySelectorAll(".campo-senha");

camposSenha.forEach(function (campo) {
    const senha = campo.querySelector("input");
    const olho = campo.querySelector(".olho");

    if (!senha || !olho) return;

    olho.addEventListener("click", function () {
        senha.type = senha.type === "password"
            ? "text"
            : "password";
    });
});


// Modal principal
const modal = document.querySelector("dialog");

function botão() {
    if (!modal || typeof modal.showModal !== "function") return;

    if (!modal.open) {
        modal.showModal();
    }
}

function cancelar() {
    if (!modal || typeof modal.close !== "function") return;

    if (modal.open) {
        modal.close();
    }
}


// Modais de exclusão
const abrir = document.querySelectorAll(".apagar");
const fechar = document.querySelectorAll(".cancelar_apagar");

abrir.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const modalApagar = botao.nextElementSibling;

        if (!modalApagar || modalApagar.tagName !== "DIALOG") return;
        if (typeof modalApagar.showModal !== "function") return;

        if (!modalApagar.open) {
            modalApagar.showModal();
        }
    });
});

fechar.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const modalApagar = botao.closest("dialog");

        if (!modalApagar || typeof modalApagar.close !== "function") return;

        if (modalApagar.open) {
            modalApagar.close();
        }
    });
});


// Ajustar altura do textarea
const textarea = document.querySelector("textarea");

function ajustar() {
    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
}

if (textarea) {
    textarea.addEventListener("input", ajustar);
    ajustar();
}


// Navegação entre os campos de título e texto
const titulo = document.querySelector('input[name="título"]');
const texto = document.querySelector('textarea[name="texto"]');

if (titulo && texto) {
    titulo.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            texto.focus();
        }
    });
}
