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
        let airCount = 0;
        let airClick = 1;
        let balloonValue = 10;
        let airCountProgress = 0;

        // Background
        this.background = this.add.graphics()
            .fillStyle(0xc1f4ff, 1)
            .fillRect(0, 0, 360, 470);
        // Floor
        const floor = this.add.graphics()
            .fillStyle(0x333333, 1)
            .fillRect(this.width / 2 - 180 , this.height / 2 + 150, 360, 170);

        // Display Loaded Assets
        this.balloonIcon = this.add.image(this.width / 2 - 155, this.height / 2 - 282, 'balloon').setScale(0.04);
        this.upgradesButton = this.add.image(this.width / 2 - 140, this.height / 2 + 290, 'upgrades-button').setScale(0.05);
        this.shopsButton = this.add.image(this.width / 2 -90, this.height / 2 + 290, 'shops-button').setScale(0.07);

        // Air Count Box-Progress
        // const airCountBox = this.add.graphics()
        //     .fillStyle(0x222222, 1)
        //     .fillRect(this.width / 2 - 160, this.height / 2 + 250, 320, 10);
        // const airCountBar = this.add.graphics();

        // Air Button Animation
        this.anims.create({
            key: 'pump-air',
            frameRate: 48,
            frames: this.anims.generateFrameNames('air-button', {start: 1, end: 20})
        });
        
        // Air Button Logic
        this.airButton = this.add.sprite(this.width/2, this.height/1.2, 'air-button', 0)
            .setInteractive()
            .on('pointerdown', () => {
                this.airButton.play('pump-air');
                airCountProgress += 320 / balloonValue;
                if (airCount == balloonValue) {
                    airCount -= balloonValue;
                    this.updateBalloonCount(++balloons);
                }
                if (airCountProgress == 320 + 320 / balloonValue) {
                    airCountProgress -= airCountProgress - 320 / balloonValue;
                    // airCountBar.clear();
                }
                // airCountBar.fillStyle(0xffffff, 1);
                // airCountBar.fillRect(this.width / 2 - 160, this.height / 2 + 250, airCountProgress, 10);
                airCount += airClick;
        });

        this.upgradesButton.setInteractive()
            .on('pointerup', () => {
                this.scene.start('Upgrades');
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
