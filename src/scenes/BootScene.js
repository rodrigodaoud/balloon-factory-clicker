import 'phaser';

export default class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        this.load.image('background', 'assets/preload-scene/balloon-clicker-background.png');
    }

    create() {
        this.scene.start('Preloader');
    }
}