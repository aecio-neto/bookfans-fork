const usuarioLogado = JSON.parse(localStorage.getItem('usuarios'))[0];
if (usuarioLogado) {
    document.getElementById('nome-usuario').textContent = usuarioLogado.email;
} else {
    console.error('Usuário não encontrado');
    // Ou exibir uma mensagem para o usuário
}