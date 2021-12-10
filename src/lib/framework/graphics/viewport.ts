/**
 * Defines the window dimensions of a render-target surface onto which a 3D volume projects.
 */
export class Viewport {
    /**
     * Gets or sets the height dimension of the viewport on the render-target surface, in pixels.
     */
    height: number = 0;

    /**
     * Gets or sets the width dimension of the viewport on the render-target surface, in pixels.
     */
    width: number = 0;

    /**
     * Gets or sets the pixel coordinate of the upper-left corner of the viewport on the render-target surface.
     */
    x: number = 0;

    /**
     * Gets or sets the pixel coordinate of the upper-left corner of the viewport on the render-target surface.
     */
    y: number = 0;
}
