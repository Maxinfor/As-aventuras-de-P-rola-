var config = {
    type: Phaser.AUTO,
    width: 375,
    height: 665,
    physics: { default: 'arcade', arcade: { gravity: { y: 300 } } },
    scene: { preload: preload, create: create, update: update }
};

var game = new Phaser.Game(config);

function preload() {
    // Imagens de teste da própria biblioteca Phaser
    this.load.image("capa", "https://labs.phaser.io/assets/pics/phaser-logo-small.png");
    this.load.image("chao", "https://labs.phaser.io/assets/sprites/platform.png");
    this.load.image("plataforma", "https://labs.phaser.io/assets/sprites/platform.png");
    this.load.spritesheet("andando", "https://labs.phaser.io/assets/sprites/brawler.png", { frameWidth: 100, frameHeight: 100 });
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
