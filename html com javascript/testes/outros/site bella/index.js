function moverBotao() {
  const button = document.getElementById("nao");
  const containerWidth = window.innerWidth - button.offsetWidth;
  const containerHeight = window.innerHeight - button.offsetHeight;

  const left = Math.floor(Math.random() * containerWidth);
  const top = Math.floor(Math.random() * containerHeight);

  button.style.left = left + "px";
  button.style.top = top + "px";
}
function mensagemNAO() {
  window.alert("Quer ss !!");
}
function mensagemSIM() {
  window.alert("Eba !! Estamos namorando");
}
