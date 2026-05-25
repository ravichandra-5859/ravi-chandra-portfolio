// Phone click: open dialer on mobile, WhatsApp on desktop
function isMobileDevice() {
  return /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(
    navigator.userAgent,
  );
}

function handlePhoneClick(e) {
  e.preventDefault();
  const phone = "+919550808836";
  if (isMobileDevice()) {
    window.location.href = `tel:${phone}`;
  } else {
    window.open(`https://wa.me/${phone.replace("+", "")}`, "_blank");
  }
}

document.querySelectorAll(".contact-phone").forEach((el) => {
  el.addEventListener("click", handlePhoneClick);
});
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
