function aplicarDesconto(livros){
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto) }
    })
    return livrosComDesconto;
}


//a funcao acima retorna todos os meus livros, só que o preco dele 
// vai ser igual ao valor original menos o desconto