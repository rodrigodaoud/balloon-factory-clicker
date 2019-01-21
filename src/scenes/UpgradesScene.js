import 'phaser';

export default class UpgradesScene extends Phaser.Scene {
    constructor() {
        super('Upgrades');
    }

    create() {
        // Dimensions
        this.width = this.cameras.main.width;
        this.height = this.cameras.main.height;

        this.background = this.add.graphics()
            .fillStyle(0xc1f4ff, 1)
            .fillRect(0, 0, 360, 640);

        this.closeButton = this.add.image(this.width / 2 + 150, this.height / 2 - 290, 'close-button')
            .setScale(0.08)
            .setInteractive()
            .on('pointerdown', () => {
                this.scene.switch('Game');
            });
    }
}