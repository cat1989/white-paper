import { Texture } from './texture'
import { GraphicsDevice } from './graphics-device'
import { ResourceType } from './resource-type'

/**
 * Represents a 2D grid of texels.
 */
export class Texture2D extends Texture {
    private _graphicsDevice: GraphicsDevice;

    readonly image: HTMLImageElement;

    /**
     * Creates an uninitialized Texture2D resource of the specified dimensions. To initialize a Texture2D from an existing file, see the static method ContentManager.Load or Texture2D.FromFile.
     * @param graphicsDevice The GraphicsDevice used to display the texture.
     */
    constructor(graphicsDevice: GraphicsDevice) {
        super()
        this._graphicsDevice = graphicsDevice
        this.image = new Image()
    }

    /**
     * Gets the GraphicsDevice associated with this GraphicsResource.
     */
    get graphicsDevice() {
        return this._graphicsDevice
    }

    /**
     * Gets the height of this texture resource, in pixels.
     */
    get height() {
        return this.image.height
    }

    /**
     * Gets the type of this resource.
     */
    get resourceType() {
        return ResourceType.Texture2D
    }

    /**
     * Gets the width of this texture resource, in pixels.
     */
    get width() {
        return this.image.width
    }
}
