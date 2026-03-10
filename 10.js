let tipoIngresso = "3D";
let estudante = true;
let preco;

if (tipoIngresso === "Normal") {
  preco = 20;
} else if (tipoIngresso === "3D") {
  preco = 30;
} else if (tipoIngresso === "IMAX") {
  preco = 40;
}

if (estudante) {
  preco = preco / 2;
}

console.log("Valor do ingresso: R$ " + preco);