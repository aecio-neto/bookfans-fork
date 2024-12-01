// Obtém a data e hora atual
const dataAtual = new Date();

// Formata a data e hora no formato desejado
const dia = dataAtual.getDate();
const mes = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'][dataAtual.getMonth()];
const horas = dataAtual.getHours();
const minutos = dataAtual.getMinutes();
const dataFormatada = `${dia} ${mes} às ${horas}:${minutos}`;

// Insere a data e hora no elemento post-date
const postDateElement = document.querySelector('#ipost-date');
postDateElement.textContent = dataFormatada;

// Associar eventos aos botões
const botaoPostar = document.getElementById('postar');
botaoPostar.addEventListener('click', postarMensagem);

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

const usuarioLogado = JSON.parse(localStorage.getItem('usuarios'))[0];
if (usuarioLogado) {
    document.getElementById('nome-usuario').textContent = usuarioLogado.email;
} else {
    console.error('Usuário não encontrado');
    // Ou exibir uma mensagem para o usuário
}