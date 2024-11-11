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
    document.getElementById("profileImage").src = "imgs/desconhecido.png"; 
}

document.getElementById("btn-cadastrar").addEventListener("click", function(event) {
    event.preventDefault(); 
    document.body.classList.add("fade-out");
    
    setTimeout(function() {
        window.location.href = "cadastro.html"; 
    }, 1000); 
});

document.getElementById("btn-login").addEventListener("click", function(event) {
    event.preventDefault();
    document.body.classList.add("fade-out");
    
    setTimeout(function() {
        window.location.href = "login.html";
    }, 1000);
});



