
const imagens = document.querySelectorAll(".mosaico_box-imgs")

// Função para adicionar a sombra quando o mouse entra no elemento
function adicionarSombra() {
  this.classList.add('adiciona-sombra'); // Adiciona a classe que remove o filtro de escala de cinza e adiciona a sombra
}

// Função para remover a sombra quando o mouse sai do elemento
function removerSombra() {
  this.classList.remove('adiciona-sombra'); // Remove a classe, voltando ao estado original com o filtro de escala de cinza
}

imagens.forEach(function(imagem) {
    // Adiciona um ouvinte de eventos para o mouseenter
imagem.addEventListener('mouseenter', adicionarSombra);

// Adiciona um ouvinte de eventos para o mouseleave
imagem.addEventListener('mouseleave', removerSombra);
})


