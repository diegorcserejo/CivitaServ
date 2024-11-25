document.getElementById('informacoes-adicionais-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    console.log("Formulário de informações adicionais enviado.");

    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const nascimento = document.getElementById('nascimento').value;
    const cpf = document.getElementById('cpf').value;
    const genero = document.querySelector('input[name="genero"]:checked');

    console.log("Valores capturados:");
    console.log("Endereço: ", endereco || "Não preenchido");
    console.log("Telefone: ", telefone || "Não preenchido");
    console.log("Nascimento: ", nascimento || "Não preenchido");
    console.log("CPF: ", cpf || "Não preenchido");
    console.log("Gênero: ", genero ? genero.value : "Não selecionado");

    if (endereco && telefone && nascimento && cpf && genero) {
        console.log("Todos os campos preenchidos. Exibindo mensagem de sucesso.");
        document.getElementById('sucesso').style.display = 'block';

        setTimeout(function() {
            console.log("Redirecionando para 'login+cadastro.php'...");
            window.location.href = 'login+cadastro.php';
        }, 2000);  
    } else {
        console.log("Campos obrigatórios não preenchidos. Exibindo alerta.");
        alert('Por favor, preencha todos os campos corretamente!');
    }
});

document.getElementById('voltar-botao').addEventListener('click', function() {
    console.log("Botão 'Voltar' clicado. Redirecionando para 'login+cadastro.php'.");
    window.location.href = 'login+cadastro.php';
});
