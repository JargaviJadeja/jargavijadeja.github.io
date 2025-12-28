const toggle = document.getElementById("themeToggle");
const icon = toggle.querySelector("i");
const body = document.body;

// Correct icon logic
function updateIcon() {
  if (body.classList.contains("dark")) {
    icon.className = "fas fa-sun";
  } else {
    icon.className = "fas fa-moon";
  }
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  updateIcon();
});

updateIcon();

// Scroll reveal
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
