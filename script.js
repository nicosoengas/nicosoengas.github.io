const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiParticles = [];

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        confettiParticles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 8 + 2,
            speedX: Math.random() * 4 - 2,
            speedY: Math.random() * 3 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 70%)`
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiParticles.forEach((p, index) => {
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y > canvas.height) {
            confettiParticles[index] = {
                x: Math.random() * canvas.width,
                y: -10,
                size: Math.random() * 8 + 2,
                speedX: Math.random() * 4 - 2,
                speedY: Math.random() * 3 + 2,
                color: `hsl(${Math.random() * 360}, 100%, 70%)`
            };
        }
    });

    requestAnimationFrame(drawConfetti);
}

function startConfetti() {
    confettiParticles = [];
    createConfetti();
}

window.onload = () => {
    createConfetti();
    drawConfetti();
};

window.onresize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
