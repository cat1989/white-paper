import { ButtonState } from './button-state'

/**
 * Represents the state of a mouse input device, including mouse cursor position and buttons pressed.
 */
export type MouseState = {
    /**
     * Returns the state of the left mouse button.
     */
    leftButton: ButtonState;

    /**
     * Returns the state of the middle mouse button.
     */
    middleButton: ButtonState;

    /**
     * Returns the state of the right mouse button.
     */
    rightButton: ButtonState;

    /**
     * Gets the cumulative mouse scroll wheel value since the game was started.
     */
    scrollWheelValue: number;

    /**
     * Specifies the horizontal position of the mouse cursor.
     */
    x: number;

    /**
     * Specifies the vertical position of the mouse cursor.
     */
    y: number;
}
