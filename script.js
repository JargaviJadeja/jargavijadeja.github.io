const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

// Theme Switcher
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
    themeToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// Simple Particle System for Dark Mode
let particles = [];
function initParticles() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    for(let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            speed: Math.random() * 0.5
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(body.classList.contains('dark')) {
        ctx.fillStyle = 'white';
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            p.y -= p.speed;
            if(p.y < 0) p.y = canvas.height;
        });
    }
    requestAnimationFrame(animate);
}

window.addEventListener('resize', initParticles);
initParticles();
animate();

// Filter Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const skillItems = document.querySelectorAll('.skill-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        
        skillItems.forEach(item => {
            if(filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
