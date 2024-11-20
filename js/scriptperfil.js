document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-icon').addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

function changePhoto() {
    document.getElementById("fileInput").click();
}

document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("profileImage").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

function removePhoto() {
    document.getElementById("profileImage").src = "./imgs/desconhecido.png";
    document.getElementById("fileInput").value = ''; 
}


document.querySelectorAll('.profile-details .input-group button').forEach((button) => {
    button.addEventListener('click', function() {
        const input = this.previousElementSibling;
        if (input.readOnly) {
            input.readOnly = false;
            input.focus();
            this.textContent = 'Salvar';
        } else {
            input.readOnly = true;
            this.textContent = 'Editar';
        
            console.log(`Novo valor: ${input.value}`);
        }
    });
});

