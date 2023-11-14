function exibirInformacoes() {
  const params = new URLSearchParams(window.location.search);

  const nomeCompleto = params.get("nomeCompleto") || "N/A";
  const numeroWhatsApp = params.get("numeroWhatsApp") || "N/A";
  const email = params.get("email") || "N/A";
  const autorizacao = params.get("autorizacao") === "true" ? "Sim" : "Não";

  document.getElementById("infoNomeCompleto").innerText = nomeCompleto;
  document.getElementById("infoNumeroWhatsApp").innerText = numeroWhatsApp;
  document.getElementById("infoEmail").innerText = email;
  document.getElementById("infoAutorizacao").innerText = autorizacao;

  localStorage.setItem(
    "formInfo",
    JSON.stringify({
      nomeCompleto,
      numeroWhatsApp,
      email,
      autorizacao,
    })
  );
}

document.addEventListener("DOMContentLoaded", exibirInformacoes);
