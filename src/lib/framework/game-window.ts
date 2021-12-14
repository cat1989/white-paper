import { Rectangle } from './rectangle'

/**
 * The system window associated with a Game.
 */
export class GameWindow {
    /**
     * The screen dimensions of the game window's client rectangle.
     */
    get clientBounds() {
        return new Rectangle(0, 0, this.handle.innerWidth, this.handle.innerHeight)
    }

    /**
     * Gets the handle to the system window.
     */
    get handle() {
        return window
    }

    /**
     * Gets and sets the title of the system window.
     */
    get title() {
        return document.title
    }
    
    /**
     * Gets and sets the title of the system window.
     */
    set title(title: string) {
        document.title = title
    }

    /**
     * Sets the title of the GameWindow.
     * @param title The new title of the GameWindow.
     */
    setTitle(title: string) {
        this.title = title
    }
}
