<!DOCTYPE html>
<html lang="br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login+Cadastro</title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="/css/styleslog+cad.css">
</head>
<body>
    <div class="form-container">
        <div class="col col-1">
            <div class="image-layer"> 
                <img src="imgs/pose (1).jpg" class="form-image rocket">
            </div>
            <div class="logo"></div>
        </div>
        <div class="col col-2">
            <div class="btn-box">
                <button class="btn btn-1" id="login">Login</button>
                <button class="btn btn-2" id="register">Cadastro</button>
            </div>
            <div class="login-form">
                <div class="form-title">
                    <span>Acessar Conta</span>
                </div>
                <div class="form-inputs">
                    <div class="input-box">
                        <input type="text" class="input-field" placeholder="Email" required>
                        <i class="bx bx-envelope icon"></i>
                    </div>
                    <div class="input-box">
                        <input type="password" class="input-field" placeholder="Senha" required>
                        <i class="fas fa-lock"></i>  
                        <i class="bx bx-lock-alt icon"></i> 
                    </div>                    
                    <div class="forgot-pass">
                        <a href="esqueceusenha.html">Esqueceu sua senha?</a>
                    </div>
                    <div class="input-box">
                      <button class="input-submit" id="login-btn">
                        <span>Entrar</span>
                        <i class="bx bx-right-arrow-alt"></i>
                    </button>
                    </div>
                </div>
                <div class="social-login">
                    <div class="icon-google">
                        <i class="bx bxl-google"></i>
                    </div>
                    <div class="icon-facebook">
                        <i class="bx bxl-facebook"></i>
                    </div>
                    <div class="icon-twitter">
                        <i class="bx bxl-twitter"></i>
                    </div>
                    <div class="icon-github">
                        <i class="bx bxl-github"></i>
                    </div>
                </div>
            </div>

            <div class="register-form">
                <div class="form-title">
                    <span>Criar Conta</span>
                </div>
                <div class="form-inputs">
                    <div class="input-box">
                        <input type="text" class="input-field" placeholder="Nome Completo" required>
                        <i class="bx bx-user icon"></i>
                    </div>
                    <div class="input-box">
                        <input type="text" class="input-field" placeholder="Email" required>
                        <i class="bx bx-envelope icon"></i>
                    </div>
                    <div class="input-box">
                        <i class="fas fa-lock"></i>
                        <input type="password" class="input-field" placeholder="Senha" required>
                        <i class="fas fa-lock"></i>
                        <i class="bx bx-lock-alt icon"></i>
                    </div>
                    <div class="input-box">
                        <input type="password" class="input-field" placeholder="Confirmar senha" required>
                        <i class="fas fa-lock"></i>
                        <i class="bx bx-lock-alt icon"></i>
                    </div>
                    <div class="forgot-pass">
                        <a href="esqueceusenha.html">Esqueceu sua senha?</a>
                    </div>
                    <div class="input-box">
                      <button class="input-submit" id="next-btn">
                        <span>Próximo</span>
                        <i class="bx bx-right-arrow-alt"></i>
                    </button>
                    </div>
                </div>
                <div class="social-login">
                    <div class="icon-google">
                        <i class="bx bxl-google"></i>
                    </div>
                    <div class="icon-facebook">
                        <i class="bx bxl-facebook"></i>
                    </div>
                    <div class="icon-twitter">
                        <i class="bx bxl-twitter"></i>
                    </div>
                    <div class="icon-github">
                        <i class="bx bxl-github"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="/js/scriptlog+cad.js"></script>
</body>
</html>
