import Level from './level.js';

import MountainsWorld from '../worlds/mountains.js';

import Mountains from '../objects/mountains.js';
import David from '../objects/david.js';

export default class Level1 extends Level {
    constructor() {
        super(
            new MountainsWorld([
                new Mountains(),
                new David(),
            ]),
        );
    }

    async initialize(canvas, context) {
        return this.world.initialize(canvas, context);
    }

    update(delta, canvas, context) {
        // TODO: update the progress of the level
        this.world.update(delta, canvas, context);
    }
}
