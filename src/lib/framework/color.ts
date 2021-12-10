/**
 * Represents a color using Red, Green, Blue, and Alpha values.
 */
export class Color {
    /**
     * Creates a new instance of the class.
     * @param r Red component.
     * @param g Green component.
     * @param b Blue component.
     */
    constructor(
        r: number,
        g: number,
        b: number,
    );
    /**
     * Creates a new instance of the class.
     * @param r Red component.
     * @param g Green component.
     * @param b Blue component.
     * @param a Alpha component.
     */
    constructor(
        r: number,
        g: number,
        b: number,
        a: number,
    );
    constructor(
        r: number,
        g: number,
        b: number,
        a?: number,
    ) {
        this.r = r
        this.g = g
        this.b = b
        if (a === undefined) {
            this.a = 255
        }
        else {
            this.a = a
        }
    }

    /**
     * Gets or sets the alpha component value.
     */
    a: number;

    /**
     * Gets or sets the blue component value of this Color.
     */
    b: number;

    /**
     * Gets a system-defined color with the value R:100 G:149 B:237 A:255.
     */
    static get cornflowerBlue() {
        return new Color(100, 149, 237)
    }

    /**
     * Gets or sets the green component value of this Color.
     */
    g: number;

    /**
     * Gets or sets the red component value of this Color.
     */
    r: number;

    /**
     * Gets a system-defined color with the value R:255 G:255 B:255 A:255.
     */
    static get white() {
        return new Color(255, 255, 255)
    }
}
