import { TouchPanelCapabilities } from './touch-panel-capabilities'
import { TouchCollection } from './touch-collection'
import { TouchLocation } from './touch-location'
import { TouchLocationState } from './touch-location-state'
import { Vector2 } from '../../vector2'

window.addEventListener("orientationchange", (e) => {
    // console.log(e)
})

const touchCollection = new TouchCollection()

if (window.ontouchstart !== undefined) {
    window.addEventListener("touchstart", (e) => {
        Array.from(e.changedTouches).map(changedTouch => {
            touchCollection.push(new TouchLocation(
                changedTouch.identifier,
                TouchLocationState.Pressed,
                new Vector2(changedTouch.pageX, changedTouch.pageY),
            ))
        })
    })

    window.addEventListener("touchmove", (e) => {
        Array.from(e.changedTouches).map(changedTouch => {
            const index = touchCollection.findIndex(touch => touch.id === changedTouch.identifier)
            if (index != -1) {
                touchCollection.removeAt(index)
                touchCollection.push(new TouchLocation(
                    changedTouch.identifier,
                    TouchLocationState.Moved,
                    new Vector2(changedTouch.pageX, changedTouch.pageY),
                ))
            }
        })
    })

    window.addEventListener("touchend", (e) => {
        Array.from(e.changedTouches).map(changedTouch => {
            const index = touchCollection.findIndex(touch => touch.id === changedTouch.identifier)
            if (index != -1) {
                touchCollection.removeAt(index)
                // touchCollection.push(new TouchLocation(
                //     changedTouch.identifier,
                //     TouchLocationState.Released,
                //     new Vector2(changedTouch.pageX, changedTouch.pageY),
                // ))
            }
        })
    })
}

/**
 * Provides methods for retrieving touch panel device information.
 */
export class TouchPanel {
    private constructor() {

    }

    /**
     * Gets or sets the display height of the touch panel.
     */
    get displayHeight() {
        return this.windowHandle.innerHeight
    }

    /**
     * Gets or sets the display width of the touch panel.
     */
    get displayWidth() {
        return this.windowHandle.innerHeight
    }

    /**
     * The window handle of the touch panel.
     */
    get windowHandle() {
        return window
    }

    /**
     * Gets the touch panel capabilities for an available device.
     */
    static getCapabilities() {
        return new TouchPanelCapabilities()
    }

    /**
     * Gets the current state of the touch panel.
     */
    static getState() {
        return touchCollection
    }
}
