console.log("Script chargé !");
console.log("Bouton menu-toggle :", document.querySelector(".menu-toggle"));
console.log("Navigation nav :", document.querySelector("nav"));
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

// 🟢 Déclenche l'animation au scroll pour les sections
const sections = document.querySelectorAll(".consultations-container");

if (sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.2, // Déclenche lorsque 10% de la section est visible
    }
  );

  sections.forEach((section) => {
    section.style.opacity = 0; // Initialise avec opacité 0
    observer.observe(section);
  });
} else {
  console.error(
    "Erreur : aucune section avec la classe 'consultations-container' n'a été trouvée."
  );
}
