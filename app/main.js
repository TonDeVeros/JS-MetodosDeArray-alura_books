let livros = [];
const endPointDaApi =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarlivrosDaApi();

async function getBuscarlivrosDaApi() {
  const res = await fetch(endPointDaApi);
  livros = await res.json();
  let livrosComDesconto = aplicarDesconto(livros)
  exibirOsLivrosNaTela(livrosComDesconto);

//   console.table(livros);//utilizando console.table podemos ver uma tabela no console.

}


