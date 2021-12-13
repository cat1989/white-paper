import { MouseState } from './mouse-state'
import { ButtonState } from './button-state'

const mouseState: MouseState = {
    leftButton: ButtonState.Released,
    middleButton: ButtonState.Released,
    rightButton: ButtonState.Released,
    scrollWheelValue: 0,
    x: 0,
    xButton1: ButtonState.Released,
    xButton2: ButtonState.Released,
    y: 0,
}

window.addEventListener("mousedown", (e) => {
    switch (e.button) {
        case 0:
            mouseState.leftButton = ButtonState.Pressed
            break
        case 1:
            mouseState.middleButton = ButtonState.Pressed
            break
        case 2:
            mouseState.rightButton = ButtonState.Pressed
            break
        case 3:
            mouseState.xButton1 = ButtonState.Pressed
            break
        case 4:
            mouseState.xButton2 = ButtonState.Pressed
            break
    }
})

window.addEventListener("mousemove", (e) => {
    mouseState.x = e.pageX
    mouseState.y = e.pageY
})

window.addEventListener("mouseup", (e) => {
    switch (e.button) {
        case 0:
            mouseState.leftButton = ButtonState.Released
            break
        case 1:
            mouseState.middleButton = ButtonState.Released
            break
        case 2:
            mouseState.rightButton = ButtonState.Released
            break
        case 3:
            mouseState.xButton1 = ButtonState.Released
            break
        case 4:
            mouseState.xButton2 = ButtonState.Released
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
