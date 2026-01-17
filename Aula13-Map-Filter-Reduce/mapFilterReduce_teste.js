//  Enunciado
// Dado um array de números, utilize reduce para somar apenas os números pares.

// Exemplo de entrada:

// [1, 2, 3, 4, 5, 6]

// Saída esperada:

// 12  (2 + 4 + 6)

const entrada = [1, 2, 3, 4, 5, 6];
const saida = entrada.reduce((acumulador, valorAtual) => {
  if (valorAtual % 2 === 0) {
    acumulador += valorAtual;
  }
  return acumulador;
}, 0);
console.log(saida);

// Enunciado
// Dado um array de palavras, use reduce para contar quantas vezes cada palavra aparece, retornando um objeto.

// Exemplo de entrada:

// ["js", "html", "css", "js", "css", "js"]

// Saída esperada:

// {
//   js: 3,
//   html: 1,
//   css: 2
// }

const palavras = ["js", "html", "css", "js", "css", "js"];
const jogos = [
  "Resident Evil",
  "GTA 5",
  "CSGO",
  "CSGO",
  "CS2",
  "Resident Evil",
  "Resident Evil",
  "Resident Evil",
];
const resultado = jogos.reduce((acumulador, valorAtual) => {
  if (acumulador[valorAtual]) {
    acumulador[valorAtual]++;
  } else {
    acumulador[valorAtual] = 1;
  }
  return acumulador;
}, {});

console.log(resultado);
