import 'phaser';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    create() {
        // Dimensions
        this.width = this.cameras.main.width;
        this.height = this.cameras.main.height;

        // Variables
        let balloons = 0;
        let money = 0;
        let airClick = 1;

        // Display Loaded Assets
        this.background = this.add.image(this.width / 2, this.height / 2, 'game-scene-background').setScale(0.08);
        this.balloonIcon = this.add.image(this.width / 2 - 155, this.height / 2 - 282, 'balloon').setScale(0.04);
        this.upgradesButton = this.add.image(this.width / 2 - 140, this.height / 2 + 290, 'upgrades-button').setScale(0.05);
        this.shopsButton = this.add.image(this.width / 2 -90, this.height / 2 + 290, 'shops-button').setScale(0.07);

        // Air Button Animation
        
        this.anims.create({
            key: 'pump-air',
            frameRate: 48,
            frames: this.anims.generateFrameNames('air-button', {start: 1, end: 20})
        });

        const positions = [this.width / 2, this.width / 2 - 100, this.width / 2 + 100];
        
        // Air Button Logic
        this.backgroundClick = this.add.image(this.width / 2, this.height / 2, 'background-click')
            .setScale(0.08)
            .setInteractive()
            .on('pointerdown', () => {
                this.updateBalloonCount(balloons += airClick);
        });

        this.upgradesButton.setInteractive()
            .on('pointerup', () => {
                this.scene.switch('Upgrades');
        });

        this.createBalloonsTextCount();
        this.createMoneyTextCount();
        this.updateBalloonCount(balloons);
        this.updateMoneyCount(money);
        
    }

    updateBalloonCount(balloons) {
        this.balloonsText.setText(`${balloons}`);
    }

    updateMoneyCount(money) {
        this.moneyText.setText(`$${money}`);
    }

    createBalloonsTextCount() {
        this.balloonsText = this.make.text({
            x: this.width / 2 - 135,
            y: this.height/ 2 - 300,
            text: '',
            style: {
                font: '30px monospace',
                fill: '#000'
            }
        });
    }

    createMoneyTextCount() {
        this.moneyText = this.make.text({
            x: this.width / 2 + 125,
            y: this.height / 2 - 300,
            text: '',
            style: {
                font: '30px monospace',
                fill: '#000'
            }
        });
    }
}
