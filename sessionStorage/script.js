const CHAVE = "nomeUsuario";

const inputNome = document.getElementById("nome");
const btnSalvar = document.getElementById("btnSalvar");
const btnRecuperar = document.getElementById("btnRecuperar");
const btnRemover = document.getElementById("btnRemover");
const resultado = document.getElementById("resultado");

btnSalvar.addEventListener("click", function () {
  const nome = inputNome.value.trim();

  if (nome === "") {
    resultado.textContent = "Digite um nome antes de salvar.";
    return;
  }

  sessionStorage.setItem(CHAVE, nome);
  resultado.textContent = `Nome "${nome}" salvo no sessionStorage.`;
  inputNome.value = "";
});

btnRecuperar.addEventListener("click", function () {
  const nomeSalvo = sessionStorage.getItem(CHAVE);

  if (nomeSalvo === null) {
    resultado.textContent = "Nenhum nome encontrado no sessionStorage.";
  } else {
    resultado.textContent = `Nome recuperado: ${nomeSalvo}`;
  }
});

btnRemover.addEventListener("click", function () {
  sessionStorage.removeItem(CHAVE);
  resultado.textContent = "Nome removido do sessionStorage.";
});