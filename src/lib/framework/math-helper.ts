/**
 * Contains commonly used precalculated values.
 */
export class MathHelper {
    private constructor() {

    }

    /**
     * Represents the mathematical constant e.
     */
    readonly e = Math.E;

    /**
     * Represents the log base ten of e.
     */
    readonly log10E = Math.LOG10E;

    /**
     * Represents the log base two of e.
     */
    readonly log2E = Math.LOG2E;

    /**
     * Represents the value of pi.
     */
    readonly pi = Math.PI;

    /**
     * Represents the value of pi divided by two.
     */
    readonly piOver2 = Math.PI * .5;

    /**
     * Represents the value of pi divided by four.
     */
    readonly piOver4 = Math.PI * .25;

    /**
     * Represents the value of pi times two.
     */
    readonly twoPi = Math.PI * 2;

    /**
     * Restricts a value to be within a specified range.
     * @param value The value to clamp.
     * @param min The minimum value.
     * @param max The maximum value.
     */
    static clamp(
        value: number,
        min: number,
        max: number,
    ) {
        return Math.min(max, Math.max(min, value))
    }

    /**
     * Calculates the absolute value of the difference of two values.
     * @param value1 Source value.
     * @param value2 Source value.
     * @returns Distance between the two values.
     */
    static distance(
        value1: number,
        value2: number,
    ) {
        return Math.sqrt(Math.pow(value1, 2) + Math.pow(value2, 2))
    }

    /**
     * Linearly interpolates between two values.
     * @param value1 Source value.
     * @param value2 Source value.
     * @param amount Value between 0 and 1 indicating the weight of value2.
     */
    static lerp(
        value1: number,
        value2: number,
        amount: number,
    ) {
        return value1 + (value2 - value1) * amount
    }

    /**
     * Returns the greater of two values.
     * @param value1 Source value.
     * @param value2 Source value.
     */
    static max(
        value1: number,
        value2: number,
    ) {
        return Math.max(value1, value2)
    }

    /**
     * Returns the lesser of two values.
     * @param value1 Source value.
     * @param value2 Source value.
     */
    static min(
        value1: number,
        value2: number,
    ) {
        return Math.min(value1, value2)
    }

    /**
     * Converts radians to degrees.
     * @param radians The angle in radians.
     */
    static toDegrees(radians: number) {
        return radians * 180 / Math.PI
    }

    /**
     * Converts degrees to radians.
     * @param degrees The angle in degrees.
     */
    static toRadians(degrees: number) {
        return Math.PI * degrees / 180
    }
}
