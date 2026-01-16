const notasFinais = [
  { nome: "Beatriz", nota: 5 },
  { nome: "Matheus", nota: 7 },
  { nome: "Amanda", nota: 10 },
  { nome: "Paula", nota: 5 },
];

// for (let i = 0; i < notasFinais.length; i++) {
//   if (notasFinais[i].nota >= 6) {
//     console.log(
//       `O Aluno ${notasFinais[i].nome}está aprovado com a nota ${notasFinais[i].nota}`
//     );
//   } else {
//     console.log(
//       `O Aluno ${notasFinais[i].nome} está reprovado com a nota ${notasFinais[i].nota}`
//     );
//   }
// }

// for (let aluno of notasFinais) {
//   if (aluno.nota >= 6) {
//     console.log(`O Aluno ${aluno.nome}está aprovado com a nota ${aluno.nota}`);
//   } else {
//     console.log(
//       `O Aluno ${aluno.nome} está reprovado com a nota ${aluno.nota}`
//     );
//   }
// }

notasFinais.forEach((aluno) => {
  if (aluno.nota >= 6) {
    console.log(`O Aluno ${aluno.nome}está aprovado com a nota ${aluno.nota}`);
  } else {
    console.log(
      `O Aluno ${aluno.nome} está reprovado com a nota ${aluno.nota}`
    );
  }
});
