let statusCode = 404;

switch (statusCode) {
  case 200:
    console.log("OK! Conexão feita com sucesso.");
    break;

  case 404:
    console.log("Página não encontrada! (Aquele famoso Erro 404)");
    break;

  case 500:
    console.log("Erro interno do Servidor. O estagiário tropeçou no fio!");
    break;

  default:
    console.log("Erro desconhecido.");
}