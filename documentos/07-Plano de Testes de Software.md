# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e1-proj-web-t6-pmv-ads-2024-2-e1-projbookfans/blob/fcce5cf30c59b7461ded395429bc6e7965577d64/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-2-e1-proj-web-t6-pmv-ads-2024-2-e1-projbookfans/blob/fcce5cf30c59b7461ded395429bc6e7965577d64/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento das funcionalidades da página de Feed</td>
  <td>
   <ul>
   <li>RF-001: O sistema deve permitir a manutenção de textos por autores, incluindo título, resumo, conteúdo e privacidade (privado/rascunho, não listado, apenas para assinantes, público).</li>
   <li>RF-002: O sistema deve permitir a busca por textos e grupos de texto, oferecendo filtros para tipo de texto, título, autor, dados de publicação, dados de última atualização, categoria, gênero, número de palavras, status de conclusão (em progresso, concluído, abandonado) e tags.</li>
   </ul>
  </td>
  <td>Verificar se os campos da página Feed apresentam corretamente suas respectivas funcinalidades</td>
  <td>
   <ol>
    <li>Fazer login.</li>
    <li>Inserir um texto ou comentário.</li>
    <li>Buscar um texto ou comentário.</li>
    <li>Registrar uma avaliação.</li>
   </ol>
   </td>
  <td>Todos os links da página Feed devem encaminhar os usuários para as páginas descritas. Todos os botões e ações devem corresponder a funcionalidade esperada</td>
  <td>Aécio e Guilherme</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento da tela de Estatísticas do Autor</td>
  <td>
   <ul>
   <li>RF-003: O sistema deve permitir comentários dos leitores em um texto.</li>
   <li>RF-004: O sistema deve permitir avaliações de leitores em um texto, de 1 a 5 estrelas.</li>
   <li>RF-005: O sistema deve permitir a manutenção de grupos de texto por autores (por exemplo, para capítulos de um mesmo livro).</li>
   </ul>
  </td>
  <td>Verificar se a tela apresenta as informações corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Fazer login.</li>
    <li>Acessar a tela de estatísticas e verificar se as informações estão corretas e os links funcionais</li>
   </ol>
   </td>
  <td>Os dados apresentados precisam estar corretos e os links remeterem para as suas respectivas páginas.</td>
  <td>Renato</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
 <tr>
  <td>CT-03: Testar a funcionalidade de seguir um determinado autor</td>
  <td>
   <ul>
    <li>RF-006: O sistema deve oferecer uma interface de edição de texto para autores, com ferramentas de formatação.</li>
   <li>RF-009: O sistema deve disponibilizar estatísticas sobre um texto para seu autor (número de leituras, comentários, avaliações).</li>
   </ul>
  </td>
  <td>Testar a funcionalidade de seguir um autor</td>
  <td>
   <ol>
    <li>Acessar a tela de perfil</li>
    <li>Acessar a tela de Post.</li>
    <li>Clicar em 'Seguir'.</li>
    <li>Visualizar a confirmação da ação de seguir um determinado autor.</li>
   </ol>
   </td>
  <td>A funcionalidade foi implementada com exito.</td>
  <td>Leopoldo</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar o cadastro de usuários</td>
  <td>
   <ul>
    <li>RF-010: O sistema deve permitir que o leitor siga um autor.</li>
    <li>RF-011: O sistema deve notificar os seguidores de um autor sobre novas publicações.</li>
   </ul>
  </td>
  <td>Verificar se as notificações estão sendo recebidas.</td>
  <td>
   <ol>
    <li>Acessar a tela de Feed.</li>
    <li>Clicar no botão de Mensagens.</li>
    <li>Visualizar o seu conteúdo.</li>
   </ol>
   </td>
  <td>A tela deve apresentar todas as mensagens de notificação de seus seguidores recentes.</td>
  <td>Paulo</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar o funcionamento da tela de assinaturas</td>
  <td>
   <ul>
   <li>RF-012: O sistema deve permitir a manutenção de planos de assinatura para os seguidores de um autor, incluindo nome, preço, benefícios e ícone.</li>
   </ul>
  </td>
  <td>Verificar se as assinaturas funcionam corretamente. </td>
  <td>
   <ol>
    <li>Acessar o Feed.</li>
    <li>Clicar no botão 'Favoritos'.</li>
    <li>Selecionar um livro ou autor.</li>
    <li>Clicar em 'Apoiar'.</li>
    <li>Escolher o plano e clicar em 'Apoie'.</li>
   </ol>
   </td>
  <td>Após a seleção do plano o usuário passa a contribuir conforme desejado.</td>
  <td>Matheus</td>
 </tr>
 </table>

> **Links Úteis**:
>
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
