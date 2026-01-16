const listaDeConvidados = ["Rubens", "Maria", "João", "Isabel"];

console.log("Bia fez aniversário e convidou: ", listaDeConvidados);
console.log("Quantos convidados ? ", listaDeConvidados.length);

console.log("Convidado número 1:", listaDeConvidados[0]);
console.log("Convidado número 4:", listaDeConvidados[3]);
console.log(
  "Convidado número 4:",
  listaDeConvidados[listaDeConvidados.length - 1]
);

console.log(
  "Maria está em qual indice do nosso array?",
  listaDeConvidados.indexOf("Maria")
);
