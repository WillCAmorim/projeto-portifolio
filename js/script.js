document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("mobileMenu");
    const button = document.querySelector(".hamburguer-btn");

    function toggleMenu() {
      const isOpen = menu.style.right === "0px";
      menu.style.right = isOpen ? "-220px" : "0px";
    }

    button.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleMenu();
    });

    document.addEventListener("click", function (event) {
      const isClickInsideMenu = menu.contains(event.target);
      const isClickOnButton = button.contains(event.target);
      if (!isClickInsideMenu && !isClickOnButton) {
        menu.style.right = "-220px";
      }
    });

    const links = menu.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        menu.style.right = "-220px";
      });
    });
  });
