/**
 * Snapshot of the game timing state expressed in values that can be used by variable-step (real time) or fixed-step (game time) games.
 */
export class GameTime {
    /**
     * Creates a new instance of GameTime.
     */
    constructor() {
        this.elapsedGameTime = 0
        this.totalGameTime = 0
    }

    /**
     * The amount of elapsed game time since the last update.
     */
    elapsedGameTime: number;

    /**
     * The amount of game time since the start of the game.
     */
    totalGameTime: number;
}
