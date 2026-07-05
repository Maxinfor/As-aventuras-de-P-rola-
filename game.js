function preload() {
    // Carregue a capa
    this.load.image("capa", "capa.png");

    // Carregue os spritesheets. 
    // SE suas imagens "andando.png", "pulando.png", etc., forem apenas UMA imagem por arquivo:
    // Mude frameWidth e frameHeight para o tamanho da imagem (ex: 100, 100)
    this.load.spritesheet("andando", "andando.png", { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet("pulando", "pulando.png", { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet("escalando", "escalando1.png", { frameWidth: 100, frameHeight: 100 });
}

function create() {
    // Adiciona a capa na tela
    this.capaDoJogo = this.add.image(400, 300, 'capa');
    
    // Configura o mundo físico
    this.plataformas = this.physics.add.staticGroup();
    this.plataformas.create(400, 568, 'chao').setScale(2).refreshBody();

    // Cria o personagem
    this.perola = this.physics.add.sprite(100, 450, "andando");
    this.perola.setCollideWorldBounds(true);
    this.physics.add.collider(this.perola, this.plataformas);

    // Cria as animações
    this.anims.create({ key: "andar", frames: this.anims.generateFrameNumbers("andando", { start: 0, end: 0 }), frameRate: 10, repeat: -1 });
    this.anims.create({ key: "pular", frames: this.anims.generateFrameNumbers("pulando", { start: 0, end: 0 }), frameRate: 5 });

    this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    // Movimentação
    if (this.cursors.left.isDown) {
        this.perola.setVelocityX(-160);
        this.perola.flipX = true;
        this.perola.anims.play("andar", true);
    } else if (this.cursors.right.isDown) {
        this.perola.setVelocityX(160);
        this.perola.flipX = false;
        this.perola.anims.play("andar", true);
    } else {
        this.perola.setVelocityX(0);
        this.perola.anims.stop();
    }

    if (this.cursors.up.isDown && this.perola.body.touching.down) {
        this.perola.setVelocityY(-350);
        this.perola.anims.play("pular", true);
    }
}
