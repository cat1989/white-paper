import { GameTime } from './game-time'

/**
 * Defines the interface for a drawable game component.
 */
export interface IDrawable {
    /**
     * The order in which to draw this object relative to other objects. Objects with a lower value are drawn first.
     */
    drawOrder: number;

    /**
     * Indicates whether IDrawable.Draw should be called in Game.Draw for this game component.
     */
    visible: boolean;

    /**
     * Draws the IDrawable.
     * @param gameTime Snapshot of the game's timing state.
     */
    draw(gameTime: GameTime): void;
}
