// Smooth scroll for nav links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (this.hash) {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({ behavior: "smooth" });
      document
        .querySelectorAll(".nav-links a")
        .forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
      // Close mobile menu
      document.querySelector(".nav-links").classList.remove("open");
    }
  });
});

// Hamburger menu toggle
document.getElementById("hamburgerBtn").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});

// Dark mode toggle
const darkModeBtn = document.getElementById("darkModeToggle");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeBtn.innerHTML = document.body.classList.contains("dark-mode")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

document
  .querySelectorAll("section, .project-card, .skill-card, .contact-card")
  .forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });
