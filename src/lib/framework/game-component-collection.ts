import { IGameComponent } from './i-game-component'

/**
 * A collection of game components.
 */
export class GameComponentCollection extends Array<IGameComponent> {
    get count() {
        return this.length
    }

    add(item: IGameComponent) {
        this.push(item)
    }

    clear() {
        this.length = 0
    }

    contains(item: IGameComponent) {
        return !!this.find(it => it === item)
    }

    indexOf(item: IGameComponent) {
        return this.findIndex(it => it === item)
    }

    insert(index: number, item: IGameComponent) {
        this.splice(index, 0, item)
    }

    remove(item: IGameComponent) {
        const index = this.indexOf(item)
        if (index == -1) {
            return false
        }
        else {
            this.splice(index, 1)
            return true
        }
    }

    removeAt(index: number) {
        this.splice(index, 1)
    }
}
