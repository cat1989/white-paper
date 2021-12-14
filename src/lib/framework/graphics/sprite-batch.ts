import { GraphicsDevice } from './graphics-device'
import { Texture2D } from './texture-2d'
import { Rectangle } from '../rectangle'
import { Color } from '../color'
import { Nullable } from '../nullable'
import { Vector2 } from '../vector2'
import { MathHelper } from '../math-helper'
import { SpriteFont } from './sprite-font'

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
            context.save()
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
                let x = value1.x
                let y = value1.y
                if (rotation !== undefined && origin !== undefined) {
                    context.setTransform(1, 0, 0, 1, 0, 0)
                    context.translate(x + origin.x, y + origin.y)
                    x -= x + origin.x
                    y -= y + origin.y
                    if (scale !== undefined) {
                        if (scale instanceof Vector2) {
                            context.scale(scale.x, scale.y)
                        }
                        else {
                            context.scale(scale, scale)
                        }
                    }
                    context.rotate(MathHelper.toRadians(rotation))
                }
                if (value2 instanceof Rectangle) {
                    if (value1 instanceof Rectangle) {
                        context.drawImage(
                            texture.image,
                            value2.x, value2.y, value2.width, value2.height,
                            x, y, value1.width, value1.height,
                        )
                    }
                    else {
                        context.drawImage(
                            texture.image,
                            value2.x, value2.y, value2.width, value2.height,
                            x, y, texture.image.width, texture.image.height,
                        )
                    }
                }
                else {
                    if (value1 instanceof Rectangle) {
                        context.drawImage(
                            texture.image,
                            x, y, value1.width, value1.height
                        )
                    }
                    else {
                        context.drawImage(
                            texture.image,
                            x, y,
                        )
                    }
                }
            }
            context.restore()
        }
    }

    /**
     * Adds a sprite string to the batch of sprites to be rendered, specifying the font, output text, screen position, and color tint.
     * @param spriteFont The sprite font.
     * @param text The string to draw.
     * @param position The location, in screen coordinates, where the text will be drawn.
     * @param color The desired color of the text.
     */
    drawString(
        spriteFont: SpriteFont,
        text: string,
        position: Vector2,
        color: Color,
    ): void;
    /**
     * Adds a sprite string to the batch of sprites to be rendered, specifying the font, output text, screen position, color tint, rotation, origin, scale, and effects.
     * @param spriteFont The sprite font.
     * @param text The string to draw.
     * @param position The location, in screen coordinates, where the text will be drawn.
     * @param color The desired color of the text.
     * @param rotation The angle, in radians, to rotate the text around the origin.
     * @param origin The origin of the string. Specify (0,0) for the upper-left corner.
     * @param scale Uniform multiple by which to scale the sprite width and height.
     */
    drawString(
        spriteFont: SpriteFont,
        text: string,
        position: Vector2,
        color: Color,
        rotation: number,
        origin: Vector2,
        scale: number,
    ): void;
    /**
     * Adds a sprite string to the batch of sprites to be rendered, specifying the font, output text, screen position, color tint, rotation, origin, scale, effects, and depth.
     * @param spriteFont The sprite font.
     * @param text The string to draw.
     * @param position The location, in screen coordinates, where the text will be drawn.
     * @param color The desired color of the text.
     * @param rotation The angle, in radians, to rotate the text around the origin.
     * @param origin The origin of the string. Specify (0,0) for the upper-left corner.
     * @param scale Vector containing separate scalar multiples for the x- and y-axes of the sprite.
     */
    drawString(
        spriteFont: SpriteFont,
        text: string,
        position: Vector2,
        color: Color,
        rotation: number,
        origin: Vector2,
        scale: Vector2,
    ): void;
    drawString(
        spriteFont: SpriteFont,
        text: string,
        position: Vector2,
        color: Color,
        rotation?: number,
        origin?: Vector2,
        scale?: number | Vector2,
    ) {
        const context = this.graphicsDevice.canvas.getContext("2d")
        if (context) {
            context.save()
            let x = position.x
            let y = position.y
            if (rotation !== undefined && origin !== undefined && scale !== undefined) {
                context.setTransform(1, 0, 0, 1, 0, 0)
                context.translate(position.x + origin.x, position.y + origin.y)
                x -= position.x + origin.x
                y -= position.y + origin.y
                if (scale instanceof Vector2) {
                    context.scale(scale.x, scale.y)
                }
                else {
                    context.scale(scale, scale)
                }
                context.rotate(MathHelper.toRadians(rotation))
            }
            context.textAlign = 'left'
            context.textBaseline = 'top'
            context.font = spriteFont.font
            context.fillStyle = `rgba(${color.r},${color.g},${color.b},${color.a})`
            context.fillText(text, x, y)
            context.restore()
        }
    }

    /**
     * Flushes the sprite batch and restores the device state to how it was before Begin was called.
     */
    end() {
        
    }
}
