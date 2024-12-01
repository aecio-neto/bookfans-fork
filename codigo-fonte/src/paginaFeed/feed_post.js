// criar post
document.addEventListener('DOMContentLoaded', function () {
    const postButton = document.getElementById('postar');
    postButton.addEventListener('click', postarMensagem);

    function postarMensagem() {
        const textarea = document.getElementById('my-textarea');
        const texto = textarea.value;
        const postMade = document.getElementById('post-made');
        const postContent = postMade.querySelector('.post-content');
        postContent.textContent = texto;
        postMade.style.display = 'block'; // Mostrar o elemento post-made inteiro
        textarea.value = '';
        document.getElementById('ipost-user').textContent = usuarioLogado.email;
    }
});