const observador = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("aparecidinho");
    } else {
      entry.target.classList.remove("aparecidinho");
    }
  });
});

const escondidinhosL = document.querySelectorAll(".escondidinho-esquerda");
const escondidinhosD = document.querySelectorAll(".escondidinho-direita");
escondidinhosL.forEach((el) => observador.observe(el));
escondidinhosD.forEach((el) => observador.observe(el));
