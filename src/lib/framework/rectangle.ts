import { Point } from './point'

/**
 * Defines a rectangle.
 */
export class Rectangle {
    /**
     * Initializes a new instance of Rectangle.
     * @param x The x-coordinate of the rectangle.
     * @param y The y-coordinate of the rectangle.
     * @param width Width of the rectangle.
     * @param height Height of the rectangle.
     */
    constructor(
        x: number,
        y: number,
        width: number,
        height: number,
    ) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    /**
     * Specifies the height of the rectangle.
     */
    height: number;

    /**
     * Specifies the width of the rectangle.
     */
    width: number;

    /**
     * Specifies the x-coordinate of the rectangle.
     */
    x: number;

    /**
     * Specifies the y-coordinate of the rectangle.
     */
    y: number;

    /**
     * Returns the y-coordinate of the bottom of the rectangle.
     */
    get bottom() {
        return this.y + this.height
    }

    /**
     * Returns a Rectangle with all of its values set to zero.
     */
    static empty() {
        return new Rectangle(0, 0, 0, 0)
    }

    /**
     * Returns the x-coordinate of the left side of the rectangle.
     */
    get left() {
        return this.x
    }

    /**
     * Returns the x-coordinate of the right side of the rectangle.
     */
    get right() {
        return this.x + this.width
    }

    /**
     * Returns the y-coordinate of the top of the rectangle.
     */
    get top() {
        return this.y
    }

    /**
     * Determines whether this Rectangle contains a specified point represented by its x- and y-coordinates.
     * @param x The x-coordinate of the specified point.
     * @param y The y-coordinate of the specified point.
     * @returns true if the specified point is contained within this Rectangle; false otherwise.
     */
    contains(
        x: number,
        y: number,
    ): boolean;
    /**
     * Determines whether this Rectangle contains a specified Point.
     * @param value The Point to evaluate.
     * @returns true if the specified Point is contained within this Rectangle; false otherwise.
     */
    contains(value: Point): boolean;
    /**
     * Determines whether this Rectangle entirely contains a specified Rectangle.
     * @param value The Rectangle to evaluate.
     * @returns true if this Rectangle entirely contains the specified Rectangle; false otherwise.
     */
    contains(value: Rectangle): boolean;
    contains(
        value1: number | Point | Rectangle,
        value2?: number,
    ): boolean {
        if (value1 instanceof Point) {
            return this.contains(value1.x, value1.y)
        }
        else if (value1 instanceof Rectangle) {
            return (
                value1.x >= this.left &&
                value1.x <= this.right &&
                value1.y >= this.top &&
                value1.y <= this.bottom
            )
        }
        else if (typeof value1 == 'number' && typeof value2 == 'number') {
            return (
                value1 >= this.left &&
                value1 <= this.right &&
                value2 >= this.top &&
                value2 <= this.bottom
            )
        }
        else {
            return false
        }
    }

    /**
     * Pushes the edges of the Rectangle out by the horizontal and vertical values specified.
     * @param horizontalAmount Value to push the sides out by.
     * @param verticalAmount Value to push the top and bottom out by.
     */
    inflate(
        horizontalAmount: number,
        verticalAmount: number,
    ) {
        this.x -= horizontalAmount
        this.y -= verticalAmount
        this.width += 2 * horizontalAmount
        this.height += 2 * verticalAmount
    }

    /**
     * Determines whether a specified Rectangle intersects with this Rectangle.
     * @param value The Rectangle to evaluate.
     * @returns true if the specified Rectangle intersects with this one; false otherwise.
     */
    intersects(value: Rectangle) {
        return (
            this.right > value.left ||
            this.left < value.right ||
            this.top > value.bottom ||
            this.bottom < value.top
        )
    }

    /**
     * Changes the position of the Rectangle.
     * @param offsetX Change in the x-position.
     * @param offsetY Change in the y-position.
     */
    offset(
        offsetX: number,
        offsetY: number,
    ): void;
    /**
     * Changes the position of the Rectangle.
     * @param offset The values to adjust the position of the Rectangle by.
     */
    offset(offset: Point): void;
    offset(
        offsetX: number | Point,
        offsetY?: number,
    ) {
        if (offsetX instanceof Point) {
            this.x += offsetX.x
            this.y += offsetX.y
        }
        else if (typeof offsetX == 'number' && typeof offsetY == 'number') {
            this.x += offsetX
            this.y += offsetY
        }
    }
}
