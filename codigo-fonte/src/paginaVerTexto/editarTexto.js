// Seletores
const textoPrincipal = document.getElementById("texto-principal");
const editorTexto = document.getElementById("editor-texto");
const btnEditarTexto = document.getElementById("btn-editar-texto");
const btnSalvarTexto = document.getElementById("btn-salvar-texto");

// Verifica se há texto salvo no localStorage e carrega
document.addEventListener("DOMContentLoaded", () => {
  const textoSalvo = localStorage.getItem("textoPrincipal");
  if (textoSalvo) {
    textoPrincipal.innerText = textoSalvo;
  }
});

// Alternar para o modo de edição
btnEditarTexto.addEventListener("click", () => {
  editorTexto.style.display = "block";
  btnSalvarTexto.style.display = "inline";
  textoPrincipal.style.display = "none";
  btnEditarTexto.style.display = "none";

  // Preenche o editor com o texto atual
  editorTexto.value = textoPrincipal.innerText;
});

// Salvar a edição
btnSalvarTexto.addEventListener("click", () => {
  const novoTexto = editorTexto.value;

  // Atualiza o texto principal
  textoPrincipal.innerText = novoTexto;

  // Alterna para o modo de exibição
  editorTexto.style.display = "none";
  btnSalvarTexto.style.display = "none";
  textoPrincipal.style.display = "block";
  btnEditarTexto.style.display = "inline";

  // Salva no localStorage
  localStorage.setItem("textoPrincipal", novoTexto);

  console.log("Texto salvo no localStorage:", novoTexto);
});