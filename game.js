const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: { gravity: { y: 800 }, debug: true }
    },
    scene: { preload, create, update }
};

const game = new Phaser.Game(config);

function preload() {
    // Carregando a sprite sheet com as medidas calculadas
    this.load.spritesheet("perola", "perola.png", { frameWidth: 96, frameHeight: 105 });
    this.load.image("chao", "Chao.jpg");
    this.load.image("plataforma", "plataforma.jpg");
}

function create() {
    // Cenário
    this.plataformas = this.physics.add.staticGroup();
    this.plataformas.create(400, 568, 'chao').setScale(2).refreshBody();
    this.plataformas.create(600, 400, 'plataforma');
    this.plataformas.create(50, 250, 'plataforma');

    // Personagem
    this.perola = this.physics.add.sprite(100, 450, "perola");
    this.perola.setCollideWorldBounds(true);
    this.physics.add.collider(this.perola, this.plataformas);

    // Animações
    this.anims.create({ key: "correrDir", frames: this.anims.generateFrameNumbers("perola", { start: 0, end: 7 }), frameRate: 10, repeat: -1 });
    this.anims.create({ key: "correrEsq", frames: this.anims.generateFrameNumbers("perola", { start: 8, end: 15 }), frameRate: 10, repeat: -1 });
    this.anims.create({ key: "pular", frames: this.anims.generateFrameNumbers("perola", { start: 16, end: 17 }), frameRate: 5 });

    this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    // Movimentação
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

    // Pulo
    if (this.cursors.up.isDown && this.perola.body.touching.down) {
        this.perola.setVelocityY(this.cursors.shift.isDown ? -500 : -300);
        this.perola.play("pular", true);
    }
}
