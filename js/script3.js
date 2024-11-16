
document.querySelectorAll('.custom-button input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {

        document.querySelectorAll('.custom-button').forEach(function(label) {
            label.classList.remove('clicked');
        });

        if (checkbox.checked) {
            checkbox.parentElement.classList.add('clicked');
        }
    });
});

document.getElementById("botao-continuar").addEventListener("click", function() {
    var tipoSelecionado = document.querySelector('input[name="tipo"]:checked');
    if (tipoSelecionado) {
        window.location.href = "cadastro3.html"; 
    } else {
        alert("Por favor, selecione uma opção antes de continuar.");
    }
});