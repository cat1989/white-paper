/**
 * Provides the base class for a generic collection.
 */
export class Collection<T> extends Array<T> {
    /**
     * Initializes a new instance of the Collection<T> class that is empty.
     */
    constructor();
    /**
     * Initializes a new instance of the Collection<T> class as a wrapper for the specified list.
     * @param list The list that is wrapped by the new collection.
     */
    constructor(list: Array<T>);
    constructor(list?: Array<T>) {
        super()
        if (list !== undefined) {
            this.concat(list)
        }
    }

    /**
     * Gets the number of elements actually contained in the Collection<T>.
     */
    get count() {
        return this.length
    }

    /**
     * Adds an object to the end of the Collection<T>.
     * @param item The object to be added to the end of the Collection<T>. The value can be null for reference types.
     */
    add(item: T) {
        this.push(item)
    }

    /**
     * Removes all elements from the Collection<T>.
     */
    clear() {
        this.length = 0
    }

    /**
     * Removes all elements from the Collection<T>.
     */
    protected clearItems() {
        this.length = 0
    }

    /**
     * Determines whether an element is in the Collection<T>.
     * @param item The object to locate in the Collection<T>. The value can be null for reference types.
     */
    contains(item: T) {
        return !!this.find(it => it === item)
    }

    /**
     * Searches for the specified object and returns the zero-based index of the first occurrence within the entire Collection<T>.
     * @param item The object to locate in the Collection<T>. The value can be null for reference types.
     * @returns The zero-based index of the first occurrence of item within the entire Collection<T>, if found; otherwise, -1.
     */
    indexOf(item: T) {
        return this.findIndex(it => it === item)
    }

    /**
     * Inserts an element into the Collection<T> at the specified index.
     * @param index The zero-based index at which item should be inserted.
     * @param item The object to insert. The value can be null for reference types.
     */
    insert(index: number, item: T) {
        this.splice(index, 0, item)
    }

    /**
     * Inserts an element into the Collection<T> at the specified index.
     * @param index The zero-based index at which item should be inserted.
     * @param item The object to insert. The value can be null for reference types.
     */
    protected insertItem(index: number, item: T) {
        this.splice(index, 0, item)
    }

    /**
     * Removes the first occurrence of a specific object from the Collection<T>.
     * @param item The object to remove from the Collection<T>. The value can be null for reference types.
     * @returns true if item is successfully removed; otherwise, false. This method also returns false if item was not found in the original Collection<T>.
     */
    remove(item: T) {
        const index = this.indexOf(item)
        if (index === -1) {
            return false
        }
        else {
            this.splice(index, 1)
            return true
        }
    }

    /**
     * Removes the element at the specified index of the Collection<T>.
     * @param index The zero-based index of the element to remove.
     */
    removeAt(index: number) {
        this.splice(index, 1)
    }

    /**
     * Removes the element at the specified index of the Collection<T>.
     * @param index The zero-based index of the element to remove. 
     */
    removeItem(index: number) {
        this.splice(index, 1)
    }

    /**
     * Replaces the element at the specified index.
     * @param index The zero-based index of the element to replace.
     * @param item The new value for the element at the specified index. The value can be null for reference types.
     */
    setItem(index: number, item: T) {
        this.splice(index, 1, item)
    }
}
