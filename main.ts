const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d')!;
document.body.appendChild(canvas);
canvas.width = 480;
canvas.height = 320;

let score = 0;
let highScore = Number(localStorage.getItem('highScore')) || 0;

function drawScore() {
  ctx.font = '16px Arial';
  ctx.fillStyle = '#0095DD';
  ctx.fillText(`Score: ${score}`, 8, 20);
  ctx.fillText(`High Score: ${highScore}`, 360, 20);
}

function updateHighScore() {
  if (score > highScore) {
    highScore = score;
    localStorage.setItem('highScore', String(highScore));
  }
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawScore();
  requestAnimationFrame(gameLoop);
}

gameLoop();
