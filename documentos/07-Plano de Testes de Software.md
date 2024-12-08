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
  <td>CT-01: Verifique o funcionamento dos links da página Home e da função de cadastro de usuário</td>
  <td>
   <ul>
   <li>RF-20: O sistema deve permitir que novos usuários se cadastrem por meio de uma página de cadastro</li>
   </ul>
  </td>
  <td>Verifique se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acesse o navegador.</li>
    <li>Informe o endereço do site.</li>
    <li>Visualizar a página inicial.</li>
    <li>Clique nos links da página Home.</li>
    <li>Clicar em ‘Cadastro’.</li>
    <li>Realizar o cadastro.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.
Deve ocorrer uma validação das informações fornecidas pelo usuário, e ao clicar em "Cadastrar", deverá aparecer a mensagem "Usuário cadastrado com sucesso"
</td>
  <td>Aécio</td>
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
  <td>CT-02: Verifique o login de usuários</td>
  <td>
   <ul>
   <li>RF-21: O sistema deve permitir que usuários façam login para acessar funcionalidades restritas</li>
   </ul>
  </td>
  <td>Verifique se o login está sendo feito corretamente</td>
  <td>
   <ol>
    <li>Acesse o navegador.</li>
    <li>Informe o endereço do site.</li>
    <li>Visualizar a página inicial.</li>
    <li>Clique em “Login”, no menu superior.</li>
    <li>Preencher seus dados e clicar em “Entrar”</li>
   </ol>
   </td>
  <td>Após o login, o usuário deverá ser redirecionado para sua página de Feed.</td>
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
  <td>CT-03: Verificar o funcinamento da página de Feed</td>
  <td>
   <ul>
    <li>RF-16: O sistema deve gerar um feed para cada leitor, mostrando atualizações e publicações recentes de autores e recomendações de textos e autores que possam o interessar.</li>
   </ul>
  </td>
  <td>Verificar se o Feed funciona corretamente</td>
  <td>
   <ol>
    <li>Acesse o navegador.</li>
    <li>Informe o endereço do site.</li>
    <li>Visualizar a página inicial.</li>
    <li>Clique em “Login”, no menu superior.</li>
    <li>Preencher seus dados e clicar em “Entrar”.</li>
    <li>Visualize o feed.</li>
   </ol>
   </td>
  <td>Verificar se os links da página feed funcionam corretamente e se é possível incluir comentários na página.</td>
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
  <td>CT-04: Verificar a página de perfil</td>
  <td>
   <ul>
    <li>RF-25: O sistema deve oferecer uma área de edição de perfil para que usuários alterem informações pessoais, como nome, e-mail e foto de perfil.</li>
   </ul>
  </td>
  <td>Verifique se a página Perfil está apresentando as informações cadastradas pelo usuário corretamente.</td>
  <td>
   <ol>
    <li>Acesse o navegador.</li>
    <li>Informe o endereço do site.</li>
    <li>Visualizar a página inicial.</li>
    <li>Faça o login.</li>
    <li>No feed, cliquem em ‘Perfil’ e em ‘Editar Perfil’.</li>
    <li>Visualize os dados.</li>
   </ol>
   </td>
  <td>As informações registradas pelo usuário no momento do cadastro deverão ser disponibilizadas na página Perfil.</td>
  <td>Guilherme</td>
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
  <td>CT-05: Verificar a função de buscar utilizando API</td>
  <td>
   <ul>
   <li>RF-02: O sistema deve permitir a busca por textos e grupos de texto, oferecendo filtros para tipo de texto, título, autor, data de publicação, data de última atualização, categoria, gênero, número de palavras, status de conclusão (em progresso, concluído, abandonado) e tags.</li>
   </ul>
  </td>
  <td>Verificar se a função de busca de livros funciona corretamente. </td>
  <td>
   <ol>
    <li>Acesse o navegador.</li>
    <li>Informe o endereço do site.</li>
    <li>Visualizar a página inicial.</li>
    <li>Faça login.</li>
    <li>No feed, digite no filtro de pesquisa o nome de algum livro que deseja pesquisa e verifique se o resultado está exibido na página.</li>
   </ol>
   </td>
  <td>Os dados inseridos no filtro de pesquisa deverão mostrar uma relação de livros onde há o dado informado.</td>
  <td>Matheus</td>
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
  <td>CT-06: Verificar o funcionamento das páginas de Termo de Uso e Política de Privacidade</td>
  <td>
   <ul>
   <li>RF-23: O sistema deve exibir uma página com os Termos de Uso e Política de Privacidade acessível a todos os usuários.</li>
   </ul>
  </td>
  <td>Verificar se as páginas funcinam corretamente. </td>
  <td>
   <ol>
    <li>Acesse o navegador.</li>
    <li>Informe o endereço do site.</li>
    <li>Visualizar a página inicial.</li>
    <li>No rodapé da página, clique nos links Termos de Uso e Política de Privacidade.</li>
    <li>Acesse e confira as informações das páginas.</li>
   </ol>
   </td>
  <td>As páginas devem mostrar orientações legais e de atendimento da LGPD.</td>
  <td>Leopoldo</td>
 </tr>
 </table>

> **Links Úteis**:
>
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
