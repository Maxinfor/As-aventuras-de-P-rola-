var gameState = 'menu'; // Estados: 'menu', 'dificuldade', 'jogando'

function preload() {
    this.load.image("capa", "capa.png");
    // Carregue aqui outras imagens de botões se tiver, ou usaremos texto
    this.load.spritesheet("andando", "andando.png", { frameWidth: 500, frameHeight: 500 });
    this.load.spritesheet("pulando", "pulando.png", { frameWidth: 500, frameHeight: 500 });
    this.load.spritesheet("correndoEsq", "correndoesquerda.png", { frameWidth: 500, frameHeight: 500 });
}

function create() {
    // Tela Inicial
    this.telaCapa = this.add.image(187.5, 332.5, 'capa');
    
    // Botão Jogar
    this.botaoJogar = this.add.text(187.5, 500, 'JOGAR', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5).setInteractive();
    
    this.botaoJogar.on('pointerdown', () => {
        this.telaCapa.setVisible(false);
        this.botaoJogar.setVisible(false);
        mostrarDificuldade.call(this);
    });
}

function mostrarDificuldade() {
    this.add.text(187.5, 200, 'Escolha a Dificuldade', { fontSize: '24px' }).setOrigin(0.5);
    
    let btnFacil = this.add.text(187.5, 300, 'FÁCIL', { fontSize: '20px', color: '#0f0' }).setOrigin(0.5).setInteractive();
    let btnMedio = this.add.text(187.5, 350, 'MÉDIO', { fontSize: '20px', color: '#ff0' }).setOrigin(0.5).setInteractive();
    let btnDificil = this.add.text(187.5, 400, 'DIFÍCIL', { fontSize: '20px', color: '#f00' }).setOrigin(0.5).setInteractive();

    [btnFacil, btnMedio, btnDificil].forEach(btn => {
        btn.on('pointerdown', () => {
            iniciarJogo.call(this);
        });
    });
}

function iniciarJogo() {
    // Esconde os botões de dificuldade (poderia limpar a cena aqui)
    gameState = 'jogando';
    
    // Cria o cenário e o personagem como antes
    this.plataformas = this.physics.add.staticGroup();
    this.plataformas.create(187.5, 650, 'chao').setScale(2).refreshBody();

    this.perola = this.physics.add.sprite(187.5, 500, "andando");
    this.perola.setScale(0.2).setCollideWorldBounds(true);
    this.physics.add.collider(this.perola, this.plataformas);
    
    // (Incluir aqui as animações do seu código anterior)
}

function update() {
    if (gameState === 'jogando' && this.perola) {
        // Lógica de movimento que já criamos
        if (this.cursors.left.isDown) { ... }
    }
}
