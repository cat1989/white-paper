import { MouseState } from './mouse-state'
import { ButtonState } from './button-state'

const mouseState: MouseState = {
    leftButton: ButtonState.Released,
    middleButton: ButtonState.Released,
    rightButton: ButtonState.Released,
    scrollWheelValue: 0,
    x: 0,
    y: 0,
}

window.addEventListener("mousedown", (e) => {
    mouseState.x = e.pageX
    mouseState.y = e.pageY
    switch (e.buttons) {
        case 1:
            mouseState.leftButton = ButtonState.Pressed
            break
        case 2:
            mouseState.leftButton = ButtonState.Pressed
            break
        case 3:
            mouseState.leftButton = ButtonState.Pressed
            break
    }
})

window.addEventListener("mousemove", (e) => {
    mouseState.x = e.pageX
    mouseState.y = e.pageY
})

window.addEventListener("mouseup", (e) => {
    switch (e.buttons) {
        case 1:
            mouseState.leftButton = ButtonState.Released
            break
        case 2:
            mouseState.leftButton = ButtonState.Released
            break
        case 3:
            mouseState.leftButton = ButtonState.Released
            break
    }
})

window.addEventListener("mousewheel", (e) => {
    //mouseState.scrollWheelValue = (e as WheelEvent)?.wheelDelta
})

/**
 * Allows retrieval of position and button clicks from a mouse input device.
 */
export class Mouse {
    private constructor() {

    }

    /**
     * Gets the current state of the mouse, including mouse position and buttons pressed.
     */
    static getState(): MouseState {
        return {...mouseState}
    }
}
