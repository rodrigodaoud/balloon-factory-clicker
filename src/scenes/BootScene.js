import 'phaser';

export default class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        this.load.image('start-button', 'assets/start-button.png');
    }

    create() {
        this.startButton = this.add.image(360/2, 640/2, 'start-button')
            .setInteractive()
            .setScale(0.15)
            .once('pointerup', () => {
                this.scene.start('Preloader');
            });
    }
}