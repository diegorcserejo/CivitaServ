document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault(); 

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    // verifica se os campos não estão vazios
    if (email === "" || senha === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        // redireciona para home.html
        window.location.href = 'home.html';
    }
});