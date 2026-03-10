let n1 = 10;
let n2 = 5;
let operacao = "+";

switch (operacao) {
  case "+":
    console.log(n1 + n2);
    break;

  case "-":
    console.log(n1 - n2);
    break;

  case "*":
    console.log(n1 * n2);
    break;

  case "/":
    console.log(n1 / n2);
    break;

  default:
    console.log("Operação não suportada!");
}