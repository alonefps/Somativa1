function capturar() {
  var nomeCompleto = document.getElementById("nomeCompleto").value;
  var numeroWhatsApp = document.getElementById("numeroWhatsApp").value;
  var email = document.getElementById("email").value;
  var autorizacao = document.getElementById("autorizacao").checked;

  if (nomeCompleto && numeroWhatsApp && email && autorizacao) {
    var telefoneValido = /^[0-9]{10,11}$/.test(numeroWhatsApp);

    if (telefoneValido) {
      window.location.href =
        "formAction.html" +
        "?nomeCompleto=" +
        encodeURIComponent(nomeCompleto) +
        "&numeroWhatsApp=" +
        encodeURIComponent(numeroWhatsApp) +
        "&email=" +
        encodeURIComponent(email) +
        "&autorizacao=" +
        autorizacao;
    } else {
      alert("Por favor, insira um número de WhatsApp válido.");
    }
  } else {
    var mensagem = "Por favor, preencha os seguintes campos:\n";
    if (!nomeCompleto) mensagem += "- Nome Completo\n";
    if (!numeroWhatsApp) mensagem += "- Número WhatsApp\n";
    if (!email) mensagem += "- Email\n";
    if (!autorizacao) mensagem += "- Autorização\n";

    alert(mensagem);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var botao = document.getElementById("botaoEnviar");
  if (botao) {
    botao.addEventListener("click", capturar);
  }
});
