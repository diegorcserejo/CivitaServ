document.getElementById('informacoes-adicionais-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const nascimento = document.getElementById('nascimento').value;
    const cpf = document.getElementById('cpf').value;
    const genero = document.querySelector('input[name="genero"]:checked');

    if (endereco && telefone && nascimento && cpf && genero) {
        document.getElementById('sucesso').style.display = 'block';

        setTimeout(function() {
            window.location.href = 'login.html';
        }, 2000);  
    } else {
        alert('Por favor, preencha todos os campos corretamente!');
    }
});

document.getElementById('voltar-botao').addEventListener('click', function() {
    window.location.href = 'login.html';
});