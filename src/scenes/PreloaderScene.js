import 'phaser';

export default class PreloaderScene extends Phaser.Scene {
    constructor() {
        super('Preloader');
    }

    preload() {
        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        // Display Progress Bar
        const progressBar = this.add.graphics();
        const progressBox = this.add.graphics()
            .fillStyle(0x222222, 0.8)
            .fillRect(width / 2 - 160, height / 1.8, 320, 30);

        // Loading Text
        const loadingText = this.make.text({
            x: width / 2,
            y: height / 2,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        }).setOrigin(0.5, 0.5);

        // Percent Text
        const percentText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        }).setOrigin(0.5, 0.5);

        // Update Progress Bar
        this.load.on('progress', (value) => {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear()
                       .fillStyle(0xffffff, 1)
                       .fillRect(width / 2 - 160, height / 1.8, 320 * value, 30);
        });

        // Remove Progress Bar When Complete
        this.load.on('complete', () => {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
        });

        // Load Game Assets
        this.load.image('background', 'assets/balloon-clicker-background.png');
        this.load.spritesheet('air-button', 'assets/air-pump-one-ss.png', {frameWidth: 128, frameHeight: 128});
        this.load.image('balloon', 'assets/balloon.png');
        this.load.image('upgrades-button', 'assets/upgrades-button.png');
        this.load.image('shops-button', 'assets/shops-button.png');

        // Placeholder
        for (let i = 0; i < 2; i++) {
            this.load.image('background' +i, 'assets/balloon-clicker-background.png');
        }
    }

    create() {
        this.scene.start('Game');
    }
}