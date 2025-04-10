const btn = document.getElementById("btnEnviar");
const form = document.getElementById("formCadastro");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const lista = document.getElementById("listaUsuarios");
const msg = document.getElementById("mensagemErro");

btn.addEventListener("click", function (evento) {
    evento.preventDefault();

    //Senha invalida
    if (senha.value.length < 8) {
        senha.classList.add("invalido");
    } else {
        senha.classList.remove("invalido")
    }

    //Verificação de email
    if (


        nome.value != "" &&
        email.value.includes("@") &&
        senha.value.length >= 8
    ) {
        let li = document.createElement("li");
        li.innerText = nome.value + " - " + email.value;
        lista.appendChild(li);

        nome.value = "";
        email.value = "";
        senha.value = "";

        msg.style.display = "none";
    } else {
        msg.style.display = "block"
    }
});


