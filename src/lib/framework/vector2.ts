/**
 * Defines a vector with two components.
 */
export class Vector2 {
    /**
     * Creates a new instance of Vector2.
     * @param value Value to initialize both components to.
     */
    constructor(value: number);
    /**
     * Initializes a new instance of Vector2.
     * @param x Initial value for the x-component of the vector.
     * @param y Initial value for the y-component of the vector.
     */
    constructor(x: number, y: number);
    constructor(x: number, y?: number) {
        if (y === undefined) {
            this.x = x
            this.y = x
        }
        else {
            this.x = x
            this.y = y
        }
    }

    /**
     * Gets or sets the x-component of the vector.
     */
    x: number;

    /**
     * Gets or sets the y-component of the vector.
     */
    y: number;

    /**
     * Returns a Vector2 with both of its components set to one.
     */
    static get one() {
        return new Vector2(1)
    }

    /**
     * Returns the unit vector for the x-axis.
     */
    static get unitX() {
        return new Vector2(1, 0)
    }

    /**
     * Returns the unit vector for the y-axis.
     */
    static get unitY() {
        return new Vector2(0, 1)
    }

    /**
     * Returns a Vector2 with all of its components set to zero.
     */
    static get zero() {
        return new Vector2(0)
    }

    /**
     * Adds two vectors.
     * @param value1 Source vector.
     * @param value2 Source vector.
     */
    static add(
        value1: Vector2,
        value2: Vector2,
    ) {
        return new Vector2(value1.x + value2.x, value1.y + value2.y)
    }

    /**
     * Calculates the distance between two vectors.
     * @param value1 Source vector.
     * @param value2 Source vector.
     */
    static distance(
        value1: Vector2,
        value2: Vector2,
    ) {
        return Math.sqrt(Math.pow(value1.x - value2.x, 2) + Math.pow(value1.y - value2.y, 2))
    }

    /**
     * Calculates the length of the vector.
     */
    length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }

    /**
     * Turns the current vector into a unit vector.
     */
    normalize() {
        const length = this.length()
        this.x /= length
        this.y /= length
    }
}
