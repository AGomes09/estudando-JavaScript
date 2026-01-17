// const nomes = ["Maria", "Beatriz", "Matheus"];

// const [nome1, nome2, nome3] = nomes;
// console.log(nome1);

const casais = [
  ["Maria", "Décio"],
  ["Matheus", "Beatriz"],
];

const [[nome1, nome2], [nome3, nome4]] = casais;
console.log(nome2);

const pessoa = {
  nome: "Maria",
  sobrenome: "Elena",
  familia: ["Décio", "Beatriz", "Matheus"],
};

const { nome, sobrenome, familia: membrosFamilia } = pessoa;
console.log(nome, membrosFamilia);
