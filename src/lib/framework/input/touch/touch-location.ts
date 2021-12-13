import { Vector2 } from '../../vector2'
import { TouchLocationState } from './touch-location-state'

/**
 * Provides methods and properties for interacting with a touch location on a touch screen device.
 */
export class TouchLocation {
    private _id: number;

    private _position: Vector2;

    private _state: TouchLocationState;

    /**
     * Initializes a new TouchLocation with an ID, state, position, and pressure.
     * @param id ID of the new touch location.
     * @param state State of the new touch location.
     * @param position Position, in screen coordinates, of the new touch location.
     */
    constructor(
        id: number,
        state: TouchLocationState,
        position: Vector2,
    ) {
        this._id = id
        this._state = state
        this._position = position
    }

    /**
     * Gets the ID of the touch location.
     */
    get id() {
        return this._id
    }

    /**
     * Gets the position of the touch location.
     */
    get position() {
        return this._position
    }

    /**
     * Gets the state of the touch location.
     */
    get state() {
        return this._state
    }
}
