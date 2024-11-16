document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let confirmarSenha = document.getElementById('confirmarSenha').value;

    if (nome && email && senha && confirmarSenha) {
        if (senha === confirmarSenha) {
            window.location.href = 'cadastro2.html'; 
        } else {
            alert('As senhas não coincidem!');
        }
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
