import { Texture } from './texture'
import { GraphicsDevice } from './graphics-device'
import { ResourceType } from './resource-type'
import { ImageFileFormat } from './image-file-format';

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

    /**
     * Creates a texture resource from a file.
     * @param graphicsDevice The graphics device to use to create the texture resource.
     * @param filename The name of the file containing the texture.
     */
    static fromFile(
        graphicsDevice: GraphicsDevice,
        filename: string,
    ) {
        return new Promise<Texture2D>((resolve, reject) => {
            const texture2D = new Texture2D(graphicsDevice)
            texture2D.name = filename
            texture2D.image.onload = () => {
                resolve(texture2D)
            }
            texture2D.image.onerror = () => {
                reject()
            }
        })
    }

    /**
     * Saves a texture to a file.
     * @param filename The file name of the destination image.
     * @param format The file format to use when saving.
     */
    save(
        filename: string,
        format: ImageFileFormat,
    ) {
        const canvas = document.createElement("canvas")
        canvas.width = this.width
        canvas.height = this.height
        const context = canvas.getContext("2d")
        if (context) {
            context.drawImage(this.image, 0, 0)
            let type = ''
            switch (format) {
                case ImageFileFormat.Jpg:
                    type = 'jpg'
                    break
                case ImageFileFormat.Png:
                    type = 'png'
                    break
            }
            const a = document.createElement("a")
            a.download = filename
            a.href = canvas.toDataURL(type)
            a.click()
        }
    }
}
