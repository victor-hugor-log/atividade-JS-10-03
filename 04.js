let semaforo = "Vermelho";

switch (semaforo) {
  case "Vermelho":
  case "Amarelo":
    console.log("Parar o carro");
    break;

  case "Verde":
    console.log("Acelerar");
    break;

  default:
    console.log("Cor de semáforo inválida");
}