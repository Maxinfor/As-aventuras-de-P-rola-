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
    // Carrega a imagem única 'perola.png'
    // Ajuste frameWidth e frameHeight conforme o tamanho real do seu arquivo
    this.load.spritesheet("perola", "perola.png", {
        frameWidth: 128, 
        frameHeight: 128
    });
}

function create() {
    // 1. Correr Direita (Quadros 0 a 7)
    this.anims.create({
        key: "correrDir",
        frames: this.anims.generateFrameNumbers("perola", { start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1
    });

    // 2. Correr Esquerda (Quadros 8 a 15)
    this.anims.create({
        key: "correrEsq",
        frames: this.anims.generateFrameNumbers("perola", { start: 8, end: 15 }),
        frameRate: 10,
        repeat: -1
    });

    // 3. Pulo (Quadros 16 e 17)
    this.anims.create({
        key: "pular",
        frames: this.anims.generateFrameNumbers("perola", { start: 16, end: 17 }),
        frameRate: 5,
        repeat: 0
    });

    // Criando a Pérola no jogo
    this.perola = this.physics.add.sprite(400, 300, "perola");
    this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    // Lógica simples de movimento
    if (this.cursors.left.isDown) {
        this.perola.setVelocityX(-160);
        this.perola.play("correrEsq", true);
    } else if (this.cursors.right.isDown) {
        this.perola.setVelocityX(160);
        this.perola.play("correrDir", true);
    } else {
        this.perola.setVelocityX(0);
        this.perola.anims.stop();
    }
}
