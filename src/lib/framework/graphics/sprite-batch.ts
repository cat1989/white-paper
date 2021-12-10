import { GraphicsDevice } from './graphics-device'
import { Texture2D } from './texture-2d'
import { Rectangle } from '../rectangle'
import { Color } from '../color'
import { Nullable } from '../nullable'
import { Vector2 } from '../vector2'

/**
 * Enables a group of sprites to be drawn using the same settings.
 */
export class SpriteBatch {
    private _graphicsDevice: GraphicsDevice;

    /**
     * Initializes a new instance of the class, which enables a group of sprites to be drawn using the same settings.
     * @param graphicsDevice The graphics device where sprites will be drawn.
     */
    constructor(graphicsDevice: GraphicsDevice) {
        this._graphicsDevice = graphicsDevice
    }

    /**
     * Gets the graphics device associated with this SpriteBatch.
     */
    get graphicsDevice() {
        return this._graphicsDevice
    }

    /**
     * Prepares the graphics device for drawing sprites.
     */
    begin() {
        const context = this.graphicsDevice.canvas.getContext("2d")
        if (context) {
            context.save()
        }
    }

    /**
     * Adds a sprite to the batch of sprites to be rendered, specifying the texture, destination rectangle, and color tint.
     * @param texture The sprite texture.
     * @param destinationRectange A rectangle specifying, in screen coordinates, where the sprite will be drawn. If this rectangle is not the same size as sourcerectangle, the sprite is scaled to fit.
     * @param color The color channel modulation to use. Use Color.White for full color with no tinting.
     */
    draw(
        texture: Texture2D,
        destinationRectange: Rectangle,
        color: Color,
    ): void;
    /**
     * Adds a sprite to the batch of sprites to be rendered, specifying the texture, destination and source rectangles, and color tint.
     * @param texture The sprite texture.
     * @param destinationRectange A rectangle specifying, in screen coordinates, where the sprite will be drawn. If this rectangle is not the same size as sourcerectangle the sprite will be scaled to fit.
     * @param sourceRectangle A rectangle specifying, in texels, which section of the rectangle to draw. Use null to draw the entire texture.
     * @param color The color channel modulation to use. Use Color.White for full color with no tinting.
     */
    draw(
        texture: Texture2D,
        destinationRectange: Rectangle,
        sourceRectangle: Nullable<Rectangle>,
        color: Color,
    ): void;
    /**
     * Adds a sprite to the batch of sprites to be rendered, specifying the texture, destination and source rectangles, color tint, rotation, origin, effects, and sort depth.
     * @param texture The sprite texture.
     * @param destinationRectange A rectangle specifying, in screen coordinates, where the sprite will be drawn. If this rectangle is not the same size as sourcerectangle, the sprite is scaled to fit.
     * @param sourceRectangle A rectangle specifying, in texels, which section of the rectangle to draw. Use null to draw the entire texture.
     * @param color The color channel modulation to use. Use Color.White for full color with no tinting.
     * @param rotation The angle, in radians, to rotate the sprite around the origin.
     * @param origin The origin of the sprite. Specify (0,0) for the upper-left corner.
     */
    draw(
        texture: Texture2D,
        destinationRectange: Rectangle,
        sourceRectangle: Nullable<Rectangle>,
        color: Color,
        rotation: number,
        origin: Vector2,
    ): void;
    /**
     * Adds a sprite to the batch of sprites to be rendered, specifying the texture, screen position, and color tint.
     * @param texture The sprite texture.
     * @param position The location, in screen coordinates, where the sprite will be drawn.
     * @param color The color channel modulation to use. Use Color.White for full color with no tinting.
     */
    draw(
        texture: Texture2D,
        position: Vector2,
        color: Color,
    ): void;
    /**
     * Adds a sprite to the batch of sprites to be rendered, specifying the texture, screen position, source rectangle, and color tint.
     * @param texture The sprite texture.
     * @param position The location, in screen coordinates, where the sprite will be drawn.
     * @param sourceRectangle A rectangle specifying, in texels, which section of the rectangle to draw. Use null to draw the entire texture.
     * @param color The color channel modulation to use. Use Color.White for full color with no tinting.
     */
    draw(
        texture: Texture2D,
        position: Vector2,
        sourceRectangle: Nullable<Rectangle>,
        color: Color,
    ): void;
    /**
     * Adds a sprite to the batch of sprites to be rendered, specifying the texture, screen position, optional source rectangle, color tint, rotation, origin, scale, effects, and sort depth.
     * @param texture The sprite texture.
     * @param position The location, in screen coordinates, where the sprite will be drawn.
     * @param sourceRectangle A rectangle specifying, in texels, which section of the rectangle to draw. Use null to draw the entire texture.
     * @param color The color channel modulation to use. Use Color.White for full color with no tinting.
     * @param rotation The angle, in radians, to rotate the sprite around the origin.
     * @param origin The origin of the sprite. Specify (0,0) for the upper-left corner.
     * @param scale Uniform multiple by which to scale the sprite width and height.
     */
    draw(
        texture: Texture2D,
        position: Vector2,
        sourceRectangle: Nullable<Rectangle>,
        color: Color,
        rotation: number,
        origin: Vector2,
        scale: number,
    ): void;
    /**
     * Adds a sprite to the batch of sprites to be rendered, specifying the texture, screen position, source rectangle, color tint, rotation, origin, scale, effects, and sort depth.
     * @param texture The sprite texture.
     * @param position The location, in screen coordinates, where the sprite will be drawn.
     * @param sourceRectangle A rectangle specifying, in texels, which section of the rectangle to draw. Use null to draw the entire texture.
     * @param color The color channel modulation to use. Use Color.White for full color with no tinting.
     * @param rotation The angle, in radians, to rotate the sprite around the origin.
     * @param origin The origin of the sprite. Specify (0,0) for the upper-left corner.
     * @param scale Vector containing separate scalar multiples for the x- and y-axes of the sprite.
     */
    draw(
        texture: Texture2D,
        position: Vector2,
        sourceRectangle: Nullable<Rectangle>,
        color: Color,
        rotation: number,
        origin: Vector2,
        scale: Vector2,
    ): void;
    draw(
        texture: Texture2D,
        value1: Vector2 | Rectangle,
        value2: Nullable<Rectangle> | Color,
        value3?: Color,
        rotation?: number,
        origin?: Vector2,
        scale?: number | Vector2,
    ) {
        const context = this.graphicsDevice.canvas.getContext("2d")
        if (context) {
            if (value2 instanceof Color) {
                if (value1 instanceof Rectangle) {
                    context.drawImage(
                        texture.image,
                        value1.x, value1.y, value1.width, value1.height
                    )
                }
                else {
                    context.drawImage(
                        texture.image,
                        value1.x, value1.y,
                    )
                }
            }
            else {
                if (rotation !== undefined && origin !== undefined) {
                    // TODO
                }
                if (value2 instanceof Rectangle) {
                    if (value1 instanceof Rectangle) {
                        context.drawImage(
                            texture.image,
                            value2.x, value2.y, value2.width, value2.height,
                            value1.x, value1.y, value1.width, value1.height,
                        )
                    }
                    else {
                        context.drawImage(
                            texture.image,
                            value2.x, value2.y, value2.width, value2.height,
                            value1.x, value1.y, texture.image.width, texture.image.height,
                        )
                    }
                }
                else {
                    if (value1 instanceof Rectangle) {
                        context.drawImage(
                            texture.image,
                            value1.x, value1.y, value1.width, value1.height
                        )
                    }
                    else {
                        context.drawImage(
                            texture.image,
                            value1.x, value1.y,
                        )
                    }
                }
            }
        }
    }

    /**
     * Flushes the sprite batch and restores the device state to how it was before Begin was called.
     */
    end() {
        const context = this.graphicsDevice.canvas.getContext("2d")
        if (context) {
            context.restore()
        }
    }
}
