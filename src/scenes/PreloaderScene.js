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
        this.load.image('background-click', 'assets/game-scene/background-click.png');
        this.load.image('balloon', 'assets/game-scene/balloon.png');
        this.load.image('upgrades-button', 'assets/game-scene/upgrades-button.png');
        this.load.image('center-button', 'assets/game-scene/center-button.png');
        this.load.image('right-button', 'assets/game-scene/right-button.png');
        this.load.image('game-scene-background', 'assets/game-scene/background-game-scene.png');

        this.load.image('close-button', 'assets/upgrade-scene/close-button.png');

        // Placeholder
        for (let i = 0; i < 100; i++) {
            this.load.image('upgrades-button' +i, 'assets/game-scene/upgrades-button.png');
        }
    }

    create() {
        this.scene.start('Game');
    }
}