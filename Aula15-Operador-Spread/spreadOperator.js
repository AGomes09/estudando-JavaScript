const listaBia = ["Maria", "Beatriz", "Matheus"];

const listaMaeBia = [...listaBia, "Sergio", "Valdete"];

console.log("Lista Bia", listaBia);
const listaBia2 = [...listaBia];
listaBia2.push("Leonardo");
console.log("Lista Bia2", listaBia2);

const professor1 = {
  materia: "Matemática",
  escola: "Escola Bia Codes",
  nome: "Beatriz",
};

const professor2 = {
  ...professor1,
  nome: "Décio",
};

console.log("Professor 1: ", professor1);
console.log("Professor 2: ", professor2);
