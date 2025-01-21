// Array para armazenar os nomes dos amigos
let listaDeAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nomeAmigo = capitalizeFirstLetter(inputAmigo.value.trim());

  if (nomeAmigo === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }

  listaDeAmigos.push(nomeAmigo);
  atualizarListaDeAmigos();
  inputAmigo.value = "";
}

