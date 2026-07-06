const config = {
    type: Phaser.AUTO,
    width: 375,
    height: 665,
    backgroundColor: '#2d2d2d',
    scene: {
        create: create
    }
};

const game = new Phaser.Game(config);

function create() {
    // Escreve um texto na tela para confirmar que o JavaScript rodou
    this.add.text(187.5, 332.5, 'JOGO FUNCIONANDO!', { 
        fontSize: '32px', 
        fill: '#ffffff' 
    }).setOrigin(0.5);
}
