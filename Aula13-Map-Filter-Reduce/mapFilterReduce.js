const distanciaEmMetros = [1000, 1500, 2000, 2500, 3000, 3500, 4000];

// MAP

const distanciasEmKm = distanciaEmMetros.map((distancia) => distancia / 1000);

console.log("Distancia em KM: ", distanciasEmKm);

// FILTER

const itensFiltrados = distanciaEmMetros.filter(
  (distancia) => distancia > 2000,
);

// const itemFiltrado = distanciaEmMetros.filter(
//   (distancia, index, arrayOriginal) => {
//     console.log(
//       `${distancia} indice: ${index}\n Array Original: ${arrayOriginal}`,
//     );
//   },
// );

console.log(itensFiltrados);

// REDUCE

const distanciaTotal = distanciaEmMetros.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);

console.log(`A distancia Total é: ${distanciaTotal}`);
