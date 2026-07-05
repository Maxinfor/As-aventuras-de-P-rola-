var config = {
    type: Phaser.AUTO,
    width: 375,
    height: 665,
    physics: { default: 'arcade', arcade: { gravity: { y: 300 } } },
    scene: { preload: preload, create: create, update: update }
};

var game = new Phaser.Game(config);

function preload() {
    // Atenção: Use exatamente o nome do arquivo, maiúsculas importam!
    this.load.image("capa", "capa.png");
    this.load.image("chao", "Chao.jpg"); 
    this.load.image("plataforma", "plataforma.jpg");
    this.load.spritesheet("andando", "andando.png", { frameWidth: 500, frameHeight: 500 });
}

function create() {
    this.add.image(187.5, 332.5, 'capa');
    
    // Botão simples para testar o clique
    let btn = this.add.text(187.5, 500, 'JOGAR', { fontSize: '40px', fill: '#000' })
        .setOrigin(0.5)
        .setInteractive();

    btn.on('pointerdown', () => {
        alert("Botão clicado!");
    });
}

function update() {}
