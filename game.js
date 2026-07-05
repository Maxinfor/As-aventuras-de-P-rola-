const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: { gravity: { y: 800 }, debug: false }
    },
    scene: { preload, create, update }
};

const game = new Phaser.Game(config);

function preload() {
    // Carregamos a imagem do sprite sheet que você gerou
    // Ajuste o frameWidth/Height baseado no tamanho real de cada quadro na sua imagem
    this.load.spritesheet("perola", "watermarked_img_1976088997429529370.png", {
        frameWidth: 64, 
        frameHeight: 64
    });
}

function create() {
    // Criando a animação de correr para a direita (exemplo com os primeiros 8 quadros)
    this.anims.create({
        key: "correrDir",
        frames: this.anims.generateFrameNumbers("perola", { start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1
    });

    // Pérola aparece no jogo
    this.perola = this.physics.add.sprite(100, 450, "perola");
    this.perola.play("correrDir");
}

function update() {
    // Lógica de controle do teclado ou toque virá aqui
}
