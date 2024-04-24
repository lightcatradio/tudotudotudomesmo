const fundo = document.getElementById("fundo");

// ---------- AMAZONIA ----------

const popAmazonia = document.getElementById("pop-up-amazonia-principal");
const popAmazoniaSecundario = document.getElementById(
  "pop-up-amazonia-secundario"
);

function abreAmazonia() {
  popAmazonia.classList.add("aparece");
  fundo.classList.add("aparece");
}
function proximoAmazonia() {
  popAmazonia.classList.remove("aparece");
  popAmazoniaSecundario.classList.add("aparece");
}
function anteriorAmazonia() {
  popAmazonia.classList.add("aparece");
  popAmazoniaSecundario.classList.remove("aparece");
}
function fechaAmazonia() {
  popAmazonia.classList.remove("aparece");
  popAmazoniaSecundario.classList.remove("aparece");
  fundo.classList.remove("aparece");
}

// ---------- CAATINGA ----------

const popCaatinga = document.getElementById("pop-up-caatinga-principal");
const popCaatingaSecundario = document.getElementById(
  "pop-up-caatinga-secundario"
);

function abreCaatinga() {
  popCaatinga.classList.add("aparece");
  fundo.classList.add("aparece");
}
function proximoCaatinga() {
  popCaatinga.classList.remove("aparece");
  popCaatingaSecundario.classList.add("aparece");
}
function anteriorCaatinga() {
  popCaatinga.classList.add("aparece");
  popCaatingaSecundario.classList.remove("aparece");
}
function fechaCaatinga() {
  popCaatinga.classList.remove("aparece");
  popCaatingaSecundario.classList.remove("aparece");
  fundo.classList.remove("aparece");
}

// ---------- CERRADO ----------

const popCerrado = document.getElementById("pop-up-cerrado-principal");
const popCerradoSecundario = document.getElementById(
  "pop-up-cerrado-secundario"
);

function abreCerrado() {
  popCerrado.classList.add("aparece");
  fundo.classList.add("aparece");
}
function proximoCerrado() {
  popCerrado.classList.remove("aparece");
  popCerradoSecundario.classList.add("aparece");
}
function anteriorCerrado() {
  popCerrado.classList.add("aparece");
  popCerradoSecundario.classList.remove("aparece");
}
function fechaCerrado() {
  popCerrado.classList.remove("aparece");
  popCerradoSecundario.classList.remove("aparece");
  fundo.classList.remove("aparece");
}

// ---------- MATA ATLANTICA ----------

const popMata = document.getElementById("pop-up-mata-principal");
const popMataSecundario = document.getElementById("pop-up-mata-secundario");

function abreMata() {
  popMata.classList.add("aparece");
  fundo.classList.add("aparece");
}
function proximoMata() {
  popMata.classList.remove("aparece");
  popMataSecundario.classList.add("aparece");
}
function anteriorMata() {
  popMata.classList.add("aparece");
  popMataSecundario.classList.remove("aparece");
}
function fechaMata() {
  popMata.classList.remove("aparece");
  popMataSecundario.classList.remove("aparece");
  fundo.classList.remove("aparece");
}

// ---------- PAMPA ----------

const popPampa = document.getElementById("pop-up-pampa-principal");
const popPampaSecundario = document.getElementById("pop-up-pampa-secundario");

function abrePampa() {
  popPampa.classList.add("aparece");
  fundo.classList.add("aparece");
}
function proximoPampa() {
  popPampa.classList.remove("aparece");
  popPampaSecundario.classList.add("aparece");
}
function anteriorPampa() {
  popPampa.classList.add("aparece");
  popPampaSecundario.classList.remove("aparece");
}
function fechaPampa() {
  popPampa.classList.remove("aparece");
  popPampaSecundario.classList.remove("aparece");
  fundo.classList.remove("aparece");
}

// ---------- PANTANAL ----------

const popPantanal = document.getElementById("pop-up-pantanal-principal");
const popPantanalSecundario = document.getElementById(
  "pop-up-pantanal-secundario"
);

function abrePantanal() {
  popPantanal.classList.add("aparece");
  fundo.classList.add("aparece");
}
function proximoPantanal() {
  popPantanal.classList.remove("aparece");
  popPantanalSecundario.classList.add("aparece");
}
function anteriorPantanal() {
  popPantanal.classList.add("aparece");
  popPantanalSecundario.classList.remove("aparece");
}
function fechaPantanal() {
  popPantanal.classList.remove("aparece");
  popPantanalSecundario.classList.remove("aparece");
  fundo.classList.remove("aparece");
}
