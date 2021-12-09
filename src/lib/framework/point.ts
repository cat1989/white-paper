/**
 * Defines a point in 2D space.
 */
export class Point {
    /**
     * Initializes a new instance of Point.
     * @param x The x-coordinate of the Point.
     * @param y The y-coordinate of the Point.
     */
    constructor(
        x: number,
        y: number,
    ) {
        this.x = x
        this.y = y
    }

    /**
     * Specifies the x-coordinate of the Point.
     */
    x: number;

    /**
     * Specifies the y-coordinate of the Point.
     */
    y: number;

    /**
     * Returns the point (0,0).
     */
    static zero() {
        return new Point(0, 0)
    }
}
