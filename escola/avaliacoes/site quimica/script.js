document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".table button");
  const flips = document.querySelectorAll("main section.flip");
  const initialFlip = document.getElementById("initial-flip");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      flips.forEach((flip) => {
        flip.classList.add("not-here");
        flip.classList.remove("here");
      });

      const buttonClass = button.classList[0];
      const targetFlip = document.getElementById(`${buttonClass}-flip`);
      if (targetFlip) {
        targetFlip.classList.add("here");
        targetFlip.classList.remove("not-here");
      }
    });
  });

  document.addEventListener("click", (event) => {
    const clickInButton = Array.from(buttons).some((button) =>
      button.contains(event.target)
    );

    if (!clickInButton) {
      flips.forEach((flip) => {
        flip.classList.add("not-here");
        flip.classList.remove("here");
      });
      initialFlip.classList.add("here");
      initialFlip.classList.remove("not-here");
    }
  });
});
