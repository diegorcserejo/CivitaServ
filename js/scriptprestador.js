// função para validar os campos e redirecionar para cadastro3.html
function validateAndRedirect() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // validação de campos obrigatórios
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        alert("Todos os campos são obrigatórios!");
        return false;
    }

    // validação do e-mail 
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    // Validação de senha e confirmação
    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return false;
    }

    // redireciona para a página de cadastro3.html
    window.location.href = "login.html";
}
