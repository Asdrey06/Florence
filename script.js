document.addEventListener("DOMContentLoaded", function () {
  // Sélection des éléments HTML
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll("nav ul li a"); // Sélectionne tous les liens du menu

  // Vérifie que les éléments existent avant d'ajouter les événements
  if (menuToggle && nav) {
    // Ajoute un événement de clic au bouton menu
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("show-menu");
    });

    // Ajoute un événement de clic sur chaque lien du menu pour fermer après un clic
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        nav.classList.remove("show-menu");
      });
    });
  } else {
    console.error(
      "Erreur : le bouton menu-toggle ou la navigation (nav) est introuvable."
    );
  }
});
