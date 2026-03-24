// ── NAVBAR SCROLL ──
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 60);
});
// init on load
if (window.scrollY > 60) navbar.classList.add("scrolled");
else navbar.classList.add("scrolled"); // always show bg for visibility

// ── HAMBURGER ──
function toggleMenu() {
  document.getElementById("mobileNav").classList.toggle("open");
}

// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right",
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
revealEls.forEach((el) => observer.observe(el));

// ── MENU ADD BUTTON FEEDBACK ──
document.querySelectorAll(".menu-add").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const orig = this.textContent;
    this.textContent = "✓";
    this.style.background = "#22c55e";
    setTimeout(() => {
      this.textContent = orig;
      this.style.background = "";
    }, 1200);
  });
});

// ── SMOOTH SCROLL FOR NAV LINKS ──
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
