function login (){

    if (window.innerWidth <= 1220){
    document.querySelector(".cadastro img").style.left = "310px";
    }

    else {
     if (window.innerWidth > 1220){
     document.querySelector(".cadastro img").style.left = "343px";
    }
        
    }

}


function cadastro (){

 document.querySelector(".cadastro img").style.left = "0px";
}


function fecharDialogo() {
    document.getElementById('dialogo-erro').close();
}


const camposSenha = document.querySelectorAll('.campo-senha');

camposSenha.forEach(function(campo) {

    const senha = campo.querySelector('input');
    const olho = campo.querySelector('.olho');

    olho.addEventListener('click', function() {

        if (senha.type === 'password') {
            senha.type = 'text';
        } else {
            senha.type = 'password';
        }

    });

});


const modal = document.querySelector("dialog")
const closeModal = document.querySelector("dialog button")

function botão(){

modal.showModal()
}

function cancelar(){
    modal.close()
}


const abrir = document.querySelectorAll(".apagar");
const fechar = document.querySelectorAll(".cancelar_apagar");



abrir.forEach(function(botao) {

    botao.addEventListener('click', function(){
        const modal_apagar = botao.nextElementSibling;

        modal_apagar.showModal();
    });
});


fechar.forEach(function(botao) {
    
    botao.addEventListener('click', function(){
        const modal_apagar = botao.closest('dialog');

        modal_apagar.close();
    });
});


const textarea = document.querySelector('textarea');

function ajustar() {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

textarea.addEventListener('input', ajustar);

ajustar();


const titulo = document.querySelector('input[name="título"]');
const texto = document.querySelector('textarea[name="texto"]');

titulo.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        texto.focus();
    }
});