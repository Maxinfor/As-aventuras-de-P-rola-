function create() {
    // ... (Código anterior de carregar sprite e plataformas) ...

    // Criando a colisão entre a Pérola e as plataformas
    this.physics.add.collider(this.perola, this.plataformas);

    // Configurando os controles
    this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    // Movimentação lateral
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

    // Lógica do Pulo
    // 'this.perola.body.touching.down' garante que ela só pule se estiver no chão
    if (this.cursors.up.isDown && this.perola.body.touching.down) {
        
        // Pulo Alto (força maior no eixo Y)
        if (this.cursors.shift.isDown) {
            this.perola.setVelocityY(-500); 
        } 
        // Pulo Baixo (força menor)
        else {
            this.perola.setVelocityY(-300);
        }
        
        // Toca a animação de pulo
        this.perola.play("pular", true);
    }
}
