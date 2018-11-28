export default class LinearMotion {
    constructor(speed) {
        this.speed = speed;
        this.currentStep = 0;
        this.lastStep = 2000;
        this.distance = 300;
    }

    getNextStep(delta) {
        this.currentStep += delta;
        return [-1, 0];
    }

    done() {
        return this.currentStep >= this.lastStep;
    }
}
