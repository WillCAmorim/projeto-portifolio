document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("hamburguer");
  const menu = document.getElementById("menu-mobile");

  btn.addEventListener("click", () => {
    const aberto = menu.style.right === "0px";
    menu.style.right = aberto ? "-220px" : "0px";
  });

  // Fecha o menu ao clicar em um link
  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.style.right = "-220px";
    });
  });
});