import { GameComponent } from './game-component'
import { IDrawable } from './i-drawable'
import { GraphicsDevice } from './graphics'
import { GameTime } from './game-time'

/**
 * A game component that is notified when it needs to draw itself.
 */
class DrawableGameComponent extends GameComponent implements IDrawable {
    /**
     * Order in which the component should be drawn, relative to other components that are in the same GameComponentCollection.
     */
    drawOrder: number = 0;

    /**
     * Indicates whether Draw should be called.
     */
    visible: boolean = true;

    /**
     * The GraphicsDevice the DrawableGameComponent is associated with.
     */
    // protected get graphicsDevice() {
        
    // }

    /**
     * Called when the DrawableGameComponent needs to be drawn. Override this method with component-specific drawing code.
     * @param gameTime Time passed since the last call to Draw.
     */
    draw(gameTime: GameTime) {

    }
}
