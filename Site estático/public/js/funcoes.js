// sessão
function validarSessao() {
    aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var idUsuario = sessionStorage.ID_USUARIO;
    var nome = sessionStorage.NOMEUSER_USUARIO;
    var arena = sessionStorage.ARENA_FRANQUIA;
    var idPerso = sessionStorage.ID_PERSONAGEM;
    var nomePerso = sessionStorage.NOME_PERSONAGEM;

    var b_usuario = document.getElementById("b_usuario");
    var perfil = document.getElementById("perfil");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = idUsuario;

        finalizarAguardar();
    }
    if(idPerso == null){
    }
    else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    aguardar();
    sessionStorage.clear();
    finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    // divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    // divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    // if (texto) {
    //     divErrosLogin.innerHTML = texto;
    // }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

