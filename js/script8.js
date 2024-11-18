const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

loginBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "#21264D";
    registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    loginForm.style.left = "50%";
    registerForm.style.left = "-50%";

    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;

    document.querySelector(".col-1").style.borderRadius = "0 30% 20% 0";
});
  
registerBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registerBtn.style.backgroundColor = "#21264D";

    loginForm.style.left = "150%";
    registerForm.style.left = "50%";

    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;

    document.querySelector(".col-1").style.borderRadius = "0 20% 30% 0";
});
    document.getElementById('login-btn').addEventListener('click', function (event) {
        event.preventDefault(); 

        const email = document.querySelector('.login-form .input-field[type="text"]').value;
        const password = document.querySelector('.login-form .input-field[type="password"]').value;

        if (email && password) {
            window.location.href = 'home.html';
        } else {
            alert('Preencha todos os campos!');
        }
    });

    document.getElementById('next-btn').addEventListener('click', function (event) {
        event.preventDefault(); 

        const fullName = document.querySelector('.register-form .input-field[placeholder="Nome Completo"]').value;
        const email = document.querySelector('.register-form .input-field[placeholder="Email"]').value;
        const password = document.querySelector('.register-form .input-field[placeholder="Senha"]').value;
        const confirmPassword = document.querySelector('.register-form .input-field[placeholder="Confirmar senha"]').value;

        if (fullName && email && password && confirmPassword) {
            if (password === confirmPassword) {
                window.location.href = 'cadastro2.html';
            } else {
                alert('As senhas não coincidem!');
            }
        } else {
            alert('Preencha todos os campos!');
        }
    });
