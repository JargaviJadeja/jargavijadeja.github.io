const toggle = document.getElementById("themeToggle");
const icon = toggle.querySelector("i");
const body = document.body;

function updateIcon() {
  icon.className = body.classList.contains("dark")
    ? "fas fa-sun"
    : "fas fa-moon";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  updateIcon();
});

updateIcon();

/* Reveal on scroll */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.8s";
  observer.observe(el);
});
