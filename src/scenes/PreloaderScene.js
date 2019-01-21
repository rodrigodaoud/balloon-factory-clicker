import 'phaser';

export default class PreloaderScene extends Phaser.Scene {
    constructor() {
        super('Preloader');
    }

    preload() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        this.add.image(width / 2, height / 2, 'background').setScale(0.08);

        const progressBox = this.add.graphics()
            .fillStyle(0x222222, 0.8)
            .fillRect(width / 2 - 160, height / 2 + 275, 320, 10);

        // Display Progress Bar
        const progressBar = this.add.graphics();
        // Update Progress Bar
        this.load.on('progress', (value) => {
            progressBar.clear()
                       .fillStyle(0xffa500, 1)
                       .fillRect(width / 2 - 160, height / 2 + 275, 320 * value, 10);
        });

        // Load Game Assets
        this.load.image('balloon', 'assets/balloon.png');
        this.load.image('upgrades-button', 'assets/upgrades-button.png');
        this.load.image('shops-button', 'assets/shops-button.png');
        this.load.image('close-button', 'assets/close-button.png');
        this.load.image('game-scene-background', 'assets/balloon-clicker-game-scene.png');
        this.load.image('background-click', 'assets/background-click.png');
        this.load.spritesheet('air-button', 'assets/air-pump-one-ss.png', {frameWidth: 256, frameHeight: 256});

        // Placeholder
        for (let i = 0; i < 100; i++) {
            this.load.image('upgrades-button' +i, 'assets/upgrades-button.png');
        }
    }

    create() {
        this.scene.start('Game');
    }
}