// animação ao rolar
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll("section, .card").forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.6s";
  observer.observe(el);
});

// pacotes clicáveis
document.querySelectorAll(".pacote-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const detalhes = btn.nextElementSibling;
    const aberto = detalhes.style.display === "block";

    document.querySelectorAll(".pacote-detalhes").forEach((el) => {
      el.style.display = "none";
    });

    detalhes.style.display = aberto ? "none" : "block";
  });
});
