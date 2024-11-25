const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

loginBtn.addEventListener('click', () => {
    console.log("Login botão clicado.");

    loginBtn.style.backgroundColor = "#21264D";
    registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    loginForm.style.left = "50%";
    registerForm.style.left = "-50%";

    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;

    document.querySelector(".col-1").style.borderRadius = "0 30% 20% 0";

    console.log("Forms trocados para Login. Login Form visível.");
});
  
registerBtn.addEventListener('click', () => {
    console.log("Register botão clicado.");

    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registerBtn.style.backgroundColor = "#21264D";

    loginForm.style.left = "150%";
    registerForm.style.left = "50%";

    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;

    document.querySelector(".col-1").style.borderRadius = "0 20% 30% 0";

    console.log("Forms trocados para Register. Register Form visível.");
});

document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault(); 
    console.log("Botão de login clicado.");

    const email = document.querySelector('.login-form .input-field[type="text"]').value;
    const password = document.querySelector('.login-form .input-field[type="password"]').value;

    console.log("Dados de login:");
    console.log("Email: ", email || "Não preenchido");
    console.log("Senha: ", password || "Não preenchida");

    if (email && password) {
        console.log("Login bem-sucedido. Redirecionando para home.");
        window.location.href = 'home.php';
    } else {
        console.log("Campos de login não preenchidos corretamente.");
        alert('Preencha todos os campos!');
    }
});

document.getElementById('next-btn').addEventListener('click', function (event) {
    event.preventDefault(); 
    console.log("Botão de cadastro clicado.");

    const fullName = document.querySelector('.register-form .input-field[placeholder="Nome Completo"]').value;
    const email = document.querySelector('.register-form .input-field[placeholder="Email"]').value;
    const password = document.querySelector('.register-form .input-field[placeholder="Senha"]').value;
    const confirmPassword = document.querySelector('.register-form .input-field[placeholder="Confirmar senha"]').value;

    console.log("Dados de registro:");
    console.log("Nome Completo: ", fullName || "Não preenchido");
    console.log("Email: ", email || "Não preenchido");
    console.log("Senha: ", password || "Não preenchida");
    console.log("Confirmar Senha: ", confirmPassword || "Não preenchida");

    if (fullName && email && password && confirmPassword) {
        if (password === confirmPassword) {
            console.log("Senhas coincidem. Redirecionando para cadastro2.");
            window.location.href = 'cadastro2.php';
        } else {
            console.log("As senhas não coincidem.");
            alert('As senhas não coincidem!');
        }
    } else {
        console.log("Campos de registro não preenchidos corretamente.");
        alert('Preencha todos os campos!');
    }
});
