const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

// 1. Theme Toggle
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggleBtn.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});

// 2. Particle System
let particles = [];
const particleCount = 150; // Increased number

function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1, // Increased size
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random()
    });
  }
}


const filterButtons = document.querySelectorAll('.filter-btn');
const skillCards = document.querySelectorAll('.skill-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');

        // Filter cards
        const filterValue = btn.getAttribute('data-filter');
        skillCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Only draw particles in dark mode
  if (body.classList.contains("dark")) {
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      // Move particles up
      p.y -= p.speed;
      if (p.y < 0) p.y = canvas.height;
    });
  }
  
  requestAnimationFrame(animate);
}

window.addEventListener("resize", init);
init();
animate();
