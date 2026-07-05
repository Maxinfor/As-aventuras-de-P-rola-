// ... (seu config permanece o mesmo)

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

    // Animações corrigidas (Base 4 colunas: linha * 4 + coluna)
    // Linha 0 (0-3): Andar Direita
    this.anims.create({ key: "correrDir", frames: this.anims.generateFrameNumbers("perola", { start: 0, end: 3 }), frameRate: 10, repeat: -1 });
    // Linha 1 (4-7): Andar Esquerda
    this.anims.create({ key: "correrEsq", frames: this.anims.generateFrameNumbers("perola", { start: 4, end: 7 }), frameRate: 10, repeat: -1 });
    // Linha 2 (8-11): Agachar (índices 8, 9)
    this.anims.create({ key: "agachar", frames: this.anims.generateFrameNumbers("perola", { start: 8, end: 9 }), frameRate: 5 });
    // Linha 3 (12-15): Escalar
    this.anims.create({ key: "escalar", frames: this.anims.generateFrameNumbers("perola", { start: 12, end: 15 }), frameRate: 10, repeat: -1 });
    // Linha 4 (16-19): Rodar
    this.anims.create({ key: "rodar", frames: this.anims.generateFrameNumbers("perola", { start: 16, end: 19 }), frameRate: 10, repeat: -1 });
    // Linha 5 (20-23): Pular
    this.anims.create({ key: "pular", frames: this.anims.generateFrameNumbers("perola", { start: 20, end: 23 }), frameRate: 5 });
    // Linha 6 (24-27): Saltar Longe
    this.anims.create({ key: "saltarLonge", frames: this.anims.generateFrameNumbers("perola", { start: 24, end: 27 }), frameRate: 10 });

    this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    // Movimentação
    if (this.cursors.left.isDown) {
        this.perola.setVelocityX(-160);
        this.perola.anims.play("correrEsq", true);
    } else if (this.cursors.right.isDown) {
        this.perola.setVelocityX(160);
        this.perola.anims.play("correrDir", true);
    } else if (this.cursors.down.isDown) {
        this.perola.anims.play("agachar", true);
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
