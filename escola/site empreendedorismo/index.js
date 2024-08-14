const observador = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("not-hidden");
    }
  });
});

const escondidinhos = document.querySelectorAll(".hidden");
escondidinhos.forEach((el) => observador.observe(el));
