let golsCasa = 0;
let golsVisitante = 2;

if (golsCasa > golsVisitante) {
  console.log("Vitória do Time da Casa!");
} else if (golsVisitante > golsCasa) {
  console.log("Vitória do Time Visitante!");
} else {
  console.log("Rolou um empate!");
}