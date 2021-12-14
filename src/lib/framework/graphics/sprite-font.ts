import { GraphicsDevice } from './graphics-device'
import { Vector2 } from '../vector2'

/**
 * Represents a font texture.
 */
export class SpriteFont {
    private _graphicsDevice: GraphicsDevice;

    constructor(graphicsDevice: GraphicsDevice) {
        this._graphicsDevice = graphicsDevice
    }

    family: string = 'Arial';

    size: number = 18;

    get font() {
        return `${this.size}px ${this.family}`
    }

    /**
     * Returns the height and width of a given string as a Vector2.
     * @param text The string to measure.
     */
    measureString(text: string) {
        const context = this._graphicsDevice.canvas.getContext("2d")
        if (context) {
            context.textAlign = 'left'
            context.textBaseline = 'top'
            context.font = this.font
            return new Vector2(
                context.measureText(text).width,
                this.size,
            )
        }
        else {
            return new Vector2(0, 0)
        }
    }
}
