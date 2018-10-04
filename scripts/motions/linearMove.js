export default class LinearMotion {
    constructor() {
        this.currentStep = 0;
        this.lastStep = 2000;
        this.distance = 300;
    }

    getNextStep(delta) {
        this.currentStep += delta;
        let progress = (100 * this.currentStep) / this.lastStep;
        if (progress <= 50) {
            return [0, -1];
        } else {
            return [0, 1];
        }
    }

    done() {
        return this.currentStep >= this.lastStep;
    }
}
