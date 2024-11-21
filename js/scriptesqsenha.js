document.getElementById('sendButton').addEventListener('click', function() {
    var email = document.getElementById('email').value;

    console.log("Botão 'Enviar' clicado.");
    console.log("Email informado: ", email || "Nenhum email informado.");

    if (email) {
        console.log("Email válido inserido. Exibindo mensagem de sucesso.");
        document.getElementById('message').classList.remove('hidden');
    } else {
        console.log("Nenhum email foi inserido. Ação não realizada.");
    }
});
