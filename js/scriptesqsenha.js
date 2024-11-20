document.getElementById('sendButton').addEventListener('click', function() {
    var email = document.getElementById('email').value;
    if (email) {
        document.getElementById('message').classList.remove('hidden');
    }
});