let azul = false;

function mostrarMensagem() {
    document.getElementById("mensagem").innerHTML =
        "🎉 Você acabou de aprender JavaScript!";
}

function mudarCor() {
    if (azul === false) {
        document.body.style.backgroundColor = "blue";
        azul = true;
    } else {
        document.body.style.backgroundColor = "#222";
        azul = false;
    }
}
