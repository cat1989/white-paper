import { IGameComponent } from './i-game-component'
import { IUpdateable } from './i-updateable'
import { GameTime } from './game-time'
import { Game } from './game'

/**
 * Base class for all XNA Framework game components.
 */
export class GameComponent implements IGameComponent, IUpdateable {
    private _game: Game;

    /**
     * Initializes a new instance of this class.
     * @param game Game that the game component should be attached to.
     */
    constructor(game: Game) {
        this._game = game
    }

    /**
     * Indicates whether GameComponent.Update should be called when Game.Update is called.
     */
    enabled: boolean = true;

    /**
     * Indicates the order in which the GameComponent should be updated relative to other GameComponent instances. Lower values are updated first.
     */
    updateOrder: number = 0;

    /**
     * Gets and sets the Game associated with this GameComponent.
     */
    get game() {
        return this._game
    }

    /**
     * Called when the GameComponent needs to be initialized. Override this method to query for required services and load any non-graphics resources.
     */
    initialize() {

    }

    /**
     * Called when the GameComponent needs to be updated. Override this method with component-specific update code.
     * @param gameTime Time elapsed since the last call to Update
     */
    update(gameTime: GameTime) {

    }
}
