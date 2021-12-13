import { TouchLocation } from './touch-location'

/**
 * Provides methods and properties for accessing state information for the touch screen of a touch-enabled device.
 */
export class TouchCollection extends Array<TouchLocation> {
    /**
     * Gets the current number of touch locations for the touch screen.
     */
    get count() {
        return this.length
    }

    /**
     * Indicates if the touch screen is available for use.
     */
    get isConnected() {
        return window.ontouchstart !== undefined
    }

    /**
     * Adds a TouchLocation to the collection.
     * @param item TouchLocation to add.
     */
    add(item: TouchLocation) {
        this.push(item)
    }

    /**
     * Removes all TouchLocation objects from the collection.
     */
    clear() {
        this.length = 0
    }

    /**
     * Checks if the current touch collection contains the specified touch location.
     * @param item Touch location to be checked against the current collection.
     */
    contains(item: TouchLocation) {
        return !!this.find(it => it === item)
    }

    /**
     * Determines the index of a TouchLocation in the TouchCollection.
     * @param item TouchLocation to locate in the collection.
     * @returns The index of the specified touch location; -1 if the touch location could not be found.
     */
    indexOf(item: TouchLocation) {
        return this.findIndex(it => it === item)
    }

    /**
     * Inserts a new TouchLocation into the TouchCollection at a specified index.
     * @param index Index in the touch collection for the new item.
     * @param item TouchLocation to be inserted.
     */
    insert(
        index: number,
        item: TouchLocation,
    ) {
        this.splice(index, 0, item)
    }

    /**
     * Removes the specified TouchLocation from the TouchCollection.
     * @param item TouchLocation to be removed.
     */
    remove(item: TouchLocation) {
        const index = this.indexOf(item)
        if (index == -1) {
            return false
        }
        else {
            this.splice(index, 1)
            return true
        }
    }

    /**
     * Removes a TouchLocation at the specified index in the TouchCollection.
     * @param index Index of the TouchLocation to remove.
     */
    removeAt(index: number) {
        this.splice(index, 1)
    }
}
