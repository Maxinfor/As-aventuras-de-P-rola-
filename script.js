const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Ajusta o tamanho do canvas para a tela toda
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Objeto da personagem
const perola = {
    x: 50,
    y: 300,
    largura: 100,
    altura: 100,
    velocidade: 10,
    imagem: new Image()
};

perola.imagem.src = 'andando.png'; // Garanta que a imagem esteja na pasta assets

// Função para desenhar a Pérola
function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa a tela
    ctx.drawImage(perola.imagem, perola.x, perola.y, perola.largura, perola.altura);
    requestAnimationFrame(desenhar); // Mantém o desenho constante
}

// Controle pelo teclado
window.addEventListener('keydown', (evento) => {
    if (evento.key === 'ArrowRight') perola.x += perola.velocidade;
    if (evento.key === 'ArrowLeft') perola.x -= perola.velocidade;
});

// Inicia o jogo
desenhar();
