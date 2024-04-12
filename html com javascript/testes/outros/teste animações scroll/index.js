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

const escondidinhos = document.querySelectorAll(".escondidinho");
escondidinhos.forEach((el) => observador.observe(el));
