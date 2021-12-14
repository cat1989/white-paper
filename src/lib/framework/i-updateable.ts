import { GameTime } from './game-time'

/**
 * Defines an interface for a game component that should be updated in Game.Update.
 */
export interface IUpdateable {
    /**
     * Indicates whether the game component's Update method should be called in Game.Update.
     */
    enabled: boolean;

    /**
     * Indicates when the game component should be updated relative to other game components. Lower values are updated first.
     */
    updateOrder: number;

    /**
     * Called when the game component should be updated.
     * @param gameTime Snapshot of the game's timing state.
     */
    update(gameTime: GameTime): void;
}
