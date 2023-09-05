//do jeito abaixo até esta certo, mas vai ficar muito repetitivo

// const btnFiltrarLivrosDeFront = document.getElementById('btnFiltrarLivrosFront');

// btnFiltrarLivros.addEventListener('click', filtrarLivrosDeFront);

// function filtrarLivros(){
//     let livrosFiltrados = livros.filter(livro => livro.categoria === 'front-end');

// }



// Maneira mais apropriada:
const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros(){
    let elementoBtn = document.getElementById(this.id);
    let categoria = elementoBtn.value;


    console.table(livros);

    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);

    exibirOsLivrosNaTela(livrosFiltrados);
    if(categoria == 'disponivel'){
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
}

        
function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria === categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal){
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div> 
    `
}