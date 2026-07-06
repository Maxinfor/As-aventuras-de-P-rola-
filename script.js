const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const perola = {
    x: 50,
    y: 300,
    largura: 100,
    altura: 100,
    velocidade: 10,
    imgAtual: new Image()
};

// Carrega a imagem inicial
perola.imgAtual.src = 'andando.png'; 

function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(perola.imgAtual, perola.x, perola.y, perola.largura, perola.altura);
    requestAnimationFrame(desenhar);
}

// Lógica de troca de imagem
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        perola.x += perola.velocidade;
        perola.imgAtual.src = 'passolargo.png'; // Troca a imagem
    }
    if (e.key === 'ArrowLeft') {
        perola.x -= perola.velocidade;
        perola.imgAtual.src = 'correndoesquerda.png'; // Troca a imagem
    }
    if (e.key === 'ArrowUp') {
        perola.imgAtual.src = 'pulando.png'; // Troca para pulando
    }
});

// Volta para a imagem original quando soltar a tecla
window.addEventListener('keyup', () => {
    perola.imgAtual.src = 'andando.png';
});

desenhar();
