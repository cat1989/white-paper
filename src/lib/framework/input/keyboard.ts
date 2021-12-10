import { KeyboardState } from "./keyboard-state"
import { KeyState } from "./key-state"
// import { Keys } from './keys'

const keys: Record<string, KeyState> = { }

window.addEventListener("keydown", (e) => {
    keys[e.keyCode] = KeyState.Down
})

window.addEventListener("keyup", (e) => {
    keys[e.keyCode] = KeyState.Up
})

/**
 * Allows retrieval of keystrokes from a keyboard input device.
 */
export class Keyboard {
    private constructor() {

    }

    /**
     * Returns the current keyboard state.
     */
    static getState(): KeyboardState {
        const keyboardState = new KeyboardState()
        Object.keys(keys).map((key: string) => {
            keyboardState[Number(key)] = keys[key]
        })
        return keyboardState
    }
}
