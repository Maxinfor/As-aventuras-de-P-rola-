function preload() {
    // Carregando as novas imagens como spritesheets
    // Certifique-se de ajustar a largura e altura dos frames (frameWidth/frameHeight) conforme o tamanho da sua imagem
    this.load.spritesheet("pulando", "pulando.png", { frameWidth: 32, frameHeight: 48 });
    this.load.spritesheet("andando", "andando.png", { frameWidth: 32, frameHeight: 48 });
    this.load.spritesheet("passolargo", "passolargo.png", { frameWidth: 32, frameHeight: 48 });
    this.load.spritesheet("escalando1", "escalando1.png", { frameWidth: 32, frameHeight: 48 });
    this.load.image("capa", "capa.png");
}

function create() {
    // Exemplo de como usar a capa no início do jogo
    // this.add.image(400, 300, 'capa');

    // Cenário
    this.plataformas = this.physics.add.staticGroup();
    this.plataformas.create(400, 568, 'chao').setScale(2).refreshBody();
    this.plataformas.create(600, 400, 'plataforma');
    this.plataformas.create(50, 250, 'plataforma');

    // Personagem (usando 'andando' como base inicial)
    this.perola = this.physics.add.sprite(100, 450, "andando");
    this.perola.setCollideWorldBounds(true);
    this.physics.add.collider(this.perola, this.plataformas);

    // Animações utilizando os novos arquivos
    this.anims.create({ 
        key: "correr", 
        frames: this.anims.generateFrameNumbers("andando", { start: 0, end: 3 }), 
        frameRate: 10, 
        repeat: -1 
    });

    this.anims.create({ 
        key: "pular", 
        frames: this.anims.generateFrameNumbers("pulando", { start: 0, end: 3 }), 
        frameRate: 5 
    });

    this.anims.create({ 
        key: "escalar", 
        frames: this.anims.generateFrameNumbers("escalando1", { start: 0, end: 3 }), 
        frameRate: 10, 
        repeat: -1 
    });

    this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    // Movimentação atualizada
    if (this.cursors.left.isDown) {
        this.perola.setVelocityX(-160);
        this.perola.flipX = true; // Espelha a imagem para esquerda
        this.perola.anims.play("correr", true);
    } else if (this.cursors.right.isDown) {
        this.perola.setVelocityX(160);
        this.perola.flipX = false; // Mantém a imagem normal para direita
        this.perola.anims.play("correr", true);
    } else {
        this.perola.setVelocityX(0);
        this.perola.anims.stop();
    }

    // Pulo
    if (this.cursors.up.isDown && this.perola.body.touching.down) {
        this.perola.setVelocityY(-350);
        this.perola.anims.play("pular", true);
    }
}
