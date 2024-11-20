document.querySelectorAll('.custom-button input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {

        document.querySelectorAll('.custom-button').forEach(function(label) {
            label.classList.remove('clicked');
        });

        if (checkbox.checked) {
            checkbox.closest('label').classList.add('clicked');
        }

        toggleBotaoContinuar();
    });
});

function toggleBotaoContinuar() {
    const botaoContinuar = document.getElementById("botao-continuar");
    const tipoSelecionado = document.querySelector('input[name="tipo"]:checked');
    
    if (tipoSelecionado) {
        botaoContinuar.disabled = false;  
    } else {
        botaoContinuar.disabled = true; 
    }
}

document.getElementById("botao-continuar").addEventListener("click", function() {
    var tipoSelecionado = document.querySelector('input[name="tipo"]:checked');
    
    if (tipoSelecionado) {
        window.location.href = "cadastro3.html"; 
    } else {
        alert("Por favor, selecione uma opção antes de continuar.");
    }
});
