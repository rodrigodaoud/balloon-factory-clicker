import 'phaser';
import config from './config/config';
import GameScene from './scenes/GameScene';
import PreloaderScene from './scenes/PreloaderScene';
import UpgradesScene from './scenes/UpgradesScene';
import BootScene from './scenes/BootScene';

class Game extends Phaser.Game {
    constructor() {
        super(config);
        this.scene.add('Game', GameScene);
        this.scene.add('Boot', BootScene);
        this.scene.add('Preloader', PreloaderScene);
        this.scene.add('Upgrades', UpgradesScene);
        this.scene.start('Boot');
    }
}

window.onload = function () {
    window.game = new Game();
}
