import { Game } from './game'
import { GraphicsDevice } from './graphics/graphics-device'

/**
 * Handles the configuration and management of the graphics device.
 */
export class GraphicsDeviceManager {
    private game: Game;

    private _graphicsDevice: GraphicsDevice;

    /**
     * Creates a new GraphicsDeviceManager and registers it to handle the configuration and management of the graphics device for the specified Game.
     * @param game Game the GraphicsDeviceManager should be associated with.
     */
    constructor(game: Game) {
        this.game = game
        this._graphicsDevice = new GraphicsDevice()
    }

    /**
     * Gets the GraphicsDevice associated with the GraphicsDeviceManager.
     */
    get graphicsDevice() {
        return this._graphicsDevice
    }
}
