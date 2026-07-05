// Configuração do jogo com a proporção da sua capa
var config = {
    type: Phaser.AUTO,
    width: 375,
    height: 665,
    physics: {
        default: 'arcade',
        arcade: { gravity: { y: 300 }, debug: false }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    // Carregamento de todos os arquivos
    this.load.image("capa", "capa.png");
    this.load.spritesheet("andando", "andando.png", { frameWidth: 500, frameHeight: 500 });
    this.load.spritesheet("pulando", "pulando.png", { frameWidth: 500, frameHeight: 500 });
    this.load.spritesheet("correndoEsq", "correndoesquerda.png", { frameWidth: 500, frameHeight: 500 });
}

function create() {
    // Adiciona a capa centralizada
    this.add.image(187.5, 332.5, 'capa');

    // Cenário (ajustado para a tela vertical)
    this.plataformas = this.physics.add.staticGroup();
    this.plataformas.create(187.5, 650, 'chao').setScale(2).refreshBody();

    // Criação do personagem
    this.perola = this.physics.add.sprite(187.5, 500, "andando");
    this.perola.setScale(0.2); // Reduzindo o tamanho para caber na tela
    this.perola.setCollideWorldBounds(true);
    this.physics.add.collider(this.perola, this.plataformas);

    // Definição das animações
    this.anims.create({ 
        key: "correrDir", 
        frames: this.anims.generateFrameNumbers("andando", { start: 0, end: 0 }), 
        frameRate: 10, 
        repeat: -1 
    });

    this.anims.create({ 
        key: "correrEsq", 
        frames: this.anims.generateFrameNumbers("correndoEsq", { start: 0, end: 0 }), 
        frameRate: 10, 
        repeat: -1 
    });

    this.anims.create({ 
        key: "pular", 
        frames: this.anims.generateFrameNumbers("pulando", { start: 0, end: 0 }), 
        frameRate: 5 
    });

    this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    // Lógica de movimentação
    if (this.cursors.left.isDown) {
        this.perola.setVelocityX(-160);
        this.perola.anims.play("correrEsq", true);
    } else if (this.cursors.right.isDown) {
        this.perola.setVelocityX(160);
        this.perola.anims.play("correrDir", true);
    } else {
        this.perola.setVelocityX(0);
        this.perola.anims.stop();
    }

    // Lógica do pulo
    if (this.cursors.up.isDown && this.perola.body.touching.down) {
        this.perola.setVelocityY(-350);
        this.perola.anims.play("pular", true);
    }
}
