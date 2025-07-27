var listaFilmes = ["Yesterday", "A chegada", "Escola de Rock"];
// elemento        1            2            3
// índice          0            1            2

//adicionando novos elementos - indice 3
listaFilmes.push("Harry Potter 3");

// valor inicial. condicao. expressão final
for (var indice = 0; indice < 4; indice++) {
  document.write("<p>" + indice + "</p>");
  document.write("<p>" + listaFilmes[indice] + "</p>");
}