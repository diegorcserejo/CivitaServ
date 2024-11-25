document.addEventListener('DOMContentLoaded', function() {
    console.log("Documento carregado.");
    document.querySelector('.menu-icon').addEventListener('click', function() {
        console.log("Menu icon clicado. Toggling 'active' class.");
        this.classList.toggle('active');
    });
});

function changePhoto() {
    console.log("Alterando foto de perfil. Abrindo input de arquivo.");
    document.getElementById("fileInput").click();
}

document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        console.log("Arquivo selecionado: ", file.name);
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("profileImage").src = e.target.result;
            console.log("Imagem carregada para exibição.");
        };
        reader.readAsDataURL(file);
    }
});

function removePhoto() {
    console.log("Foto removida. Resetando imagem de perfil.");
    document.getElementById("profileImage").src = "/imgs/desconhecido.png";
    document.getElementById("fileInput").value = ''; 
}

document.querySelectorAll('.profile-details .input-group button').forEach((button) => {
    button.addEventListener('click', function() {
        const input = this.previousElementSibling;
        if (input.readOnly) {
            console.log("Campo editável ativado. Focando no campo.");
            input.readOnly = false;
            input.focus();
            this.textContent = 'Salvar';
        } else {
            console.log("Campo editado. Salvando valor.");
            input.readOnly = true;
            this.textContent = 'Editar';
            console.log(`Novo valor: ${input.value}`);
        }
    });
});
