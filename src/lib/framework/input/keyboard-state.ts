import { KeyState } from "./key-state"
import { Keys } from './keys'

/**
 * Represents a state of keystrokes recorded by a keyboard input device.
 */
export class KeyboardState extends Array {
    /**
     * Returns whether a specified key is currently being pressed.
     * @param key Enumerated value that specifies the key to query.
     * @returns true if the key specified by key is being held down; false otherwise.
     */
    isKeyDown(key: Keys) {
        return this[key] && this[key] == KeyState.Down
    }

    /**
     * Returns whether a specified key is currently not pressed.
     * @param key Enumerated value that specifies the key to query.
     * @returns true if the key specified by key is not pressed; false otherwise.
     */
    isKeyUp(key: Keys) {
        return this[key] === undefined || this[key] == KeyState.Up
    }
}
