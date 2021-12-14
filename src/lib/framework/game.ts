import { GameTime } from './game-time'
import { GameComponentCollection } from './game-component-collection'
import { GameWindow } from './game-window'

/**
 * Provides basic graphics device initialization, game logic, and rendering code.
 */
export class Game {
    private _components = new GameComponentCollection()

    private _window = new GameWindow()

    /**
     * Initializes a new instance of this class, which provides basic graphics device initialization, game logic, rendering code, and a game loop.
     */
    constructor() {
        Object.defineProperty(this, 'isMouseVisible', {
            set(isMouseVisible: boolean) {
                document.querySelector("html")!.style.cursor = isMouseVisible ? 'auto' : 'none'
            }
        })
        this.isMouseVisible = false
    }

    /**
     * Gets the collection of GameComponents owned by the game.
     */
    get components() {
        return this._components
    }

    /**
     * Gets or sets a value indicating whether the mouse cursor should be visible.
     */
    isMouseVisible: boolean;

    /**
     * Gets the underlying operating system window.
     */
    get window() {
        return this._window
    }
    
    /**
     * Call this method to initialize the game, begin running the game loop, and start processing events for the game.
     */
    run() {
        this.initialize()
        this.beginRun()
        let start = performance.now()
        const tick = (time: number) => {
            const gameTime = new GameTime()
            gameTime.elapsedGameTime = (time - start)
            gameTime.totalGameTime = time
            start = time
            this.update(gameTime)
            if (this.beginDraw()) {
                this.draw(gameTime)
                this.endDraw()
            }
            requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
    }

    /**
     * Starts the drawing of a frame. This method is followed by calls to Draw and EndDraw.
     * @returns true if the frame should be drawn; false otherwise.
     */
    protected beginDraw(): boolean {
        return true
    }

    /**
     * Called after all components are initialized but before the first update in the game loop.
     */
    protected beginRun() {

    }

    /**
     * Called when the game determines it is time to draw a frame. Override this method with game-specific rendering code.
     * @param gameTime Time passed since the last call to Draw.
     */
    protected draw(gameTime: GameTime) {

    }

    /**
     * Ends the drawing of a frame. This method is preceeded by calls to Draw and BeginDraw.
     */
    protected endDraw() {

    }

    /**
     * Called after the Game and GraphicsDevice are created, but before LoadGraphicsContent.
     */
    protected initialize() {
        this.loadGraphicsContent(true)
    }

    /**
     * Called when graphics resources need to be loaded. Override this method to load any game-specific graphics resources.
     * @param loadAllContent true if all graphics resources need to be loaded; false if only manual resources need to be loaded.
     */
    protected loadGraphicsContent(loadAllContent: boolean) {

    }

    /**
     * Called when the game has determined that game logic needs to be processed. Override this method with game-specific logic.
     * @param gameTime Time passed since the last call to Update.
     */
    protected update(gameTime: GameTime) {
        
    }
}
