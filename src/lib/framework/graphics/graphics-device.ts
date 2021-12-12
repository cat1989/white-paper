import { Color } from '../color'
import { Viewport } from './viewport' 

/**
 * Performs primitive-based rendering, creates resources, handles system-level variables, adjusts gamma ramp levels, and creates shaders.
 */
export class GraphicsDevice {
    readonly canvas: HTMLCanvasElement;

    viewport: Viewport;

    /**
     * Creates a new instance of GraphicsDevice
     */
    constructor() {
        this.canvas = document.createElement("canvas")
        this.viewport = new Viewport()
        const resetCanvas = () => {
            this.viewport.x = 0
            this.viewport.y = 0
            this.viewport.width = window.innerWidth
            this.viewport.height = window.innerHeight
            this.canvas.width = this.viewport.width
            this.canvas.height = this.viewport.height
        }
        // Object.defineProperty(this, 'viewport', {
        //     set(viewport: Viewport) {
        //         resetCanvas()
        //     }
        // })
        // Object.defineProperty(this.viewport, 'width', {
        //     get() {
        //         return this.viewport.width
        //     },
        //     set(width: number) {
        //         this.viewport.width = width
        //         resetCanvas()
        //     }
        // })
        // Object.defineProperty(this.viewport, 'height', {
        //     get() {
        //         return this.viewport.height
        //     },
        //     set(height: number) {
        //         this.viewport.height = height
        //         resetCanvas()
        //     }
        // })
        resetCanvas()
        document.body.appendChild(this.canvas)
        window.addEventListener("resize", resetCanvas)
    }
    
    /**
     * Clears the viewport to a specified color.
     * @param color Color value to which the render target surface is cleared.
     */
    clear(color: Color) {
        const context = this.canvas.getContext("2d")
        if (context) {
            context.fillStyle = `rgba(${color.r},${color.g},${color.b},${color.a})`
            context.fillRect(0, 0, this.canvas.width, this.canvas.height)
        }
    }
}
