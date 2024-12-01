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