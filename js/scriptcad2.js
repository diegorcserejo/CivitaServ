document.querySelectorAll('.custom-button input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        console.log("Checkbox alterado: ", checkbox);

        document.querySelectorAll('.custom-button').forEach(function(label) {
            label.classList.remove('clicked');
        });

        if (checkbox.checked) {
            console.log("Checkbox marcado: ", checkbox);
            checkbox.closest('label').classList.add('clicked');
        }

        toggleBotaoContinuar();
    });
});

function toggleBotaoContinuar() {
    const botaoContinuar = document.getElementById("botao-continuar");
    const tipoSelecionado = document.querySelector('input[name="tipo"]:checked');
    
    console.log("Tipo selecionado: ", tipoSelecionado ? tipoSelecionado.value : "Nenhum");

    if (tipoSelecionado) {
        botaoContinuar.disabled = false;  
        console.log("Botão 'Continuar' ativado.");
    } else {
        botaoContinuar.disabled = true; 
        console.log("Botão 'Continuar' desativado.");
    }
}

document.getElementById("botao-continuar").addEventListener("click", function() {
    var tipoSelecionado = document.querySelector('input[name="tipo"]:checked');
    
    if (tipoSelecionado) {
        console.log("Redirecionando para 'cadastro3.html' com tipo selecionado: ", tipoSelecionado.value);
        window.location.href = "cadastro3.html"; 
    } else {
        console.log("Tentativa de continuar sem seleção.");
        alert("Por favor, selecione uma opção antes de continuar.");
    }
});
