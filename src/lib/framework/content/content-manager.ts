import { Texture2D, GraphicsDevice } from '../graphics'

/**
 * The ContentManager is the run-time component which loads managed objects from the binary files produced by the design time content pipeline. It also manages the lifespan of the loaded objects, disposing the content manager will also dispose any assets which are themselves IDisposable.
 */
export class ContentManager {
    private _graphicsDevice: GraphicsDevice;

    private assets: {
        assetName: string;
        image: HTMLImageElement;
    }[] = [];

    /**
     * Initializes a new instance of ContentManager.
     */
    constructor(graphicsDevice: GraphicsDevice) {
        this._graphicsDevice = graphicsDevice
    }

    /**
     * Loads an asset that has been processed by the Content Pipeline.
     * @param assetName Asset name, relative to the loader root directory, and not including the .xnb file extension.
     */
    load(assetName: string): Texture2D {
        const texture2D = new Texture2D(this._graphicsDevice)
        texture2D.name = assetName
        this.assets.push({
            assetName,
            image: texture2D.image,
        })
        return texture2D
    }

    loadAll() {
        return new Promise((resolve, reject) => {
            if (this.assets.length == 0) {
                resolve()
            }
            else {
                Promise.all(
                    this.assets.map(asset => {
                        return new Promise((resolve, reject) => {
                            asset.image.onload = () => {
                                resolve()
                            }
                            asset.image.src = `./${asset.assetName}`
                        })
                    })
                ).then(() => {
                    resolve()
                })
            }
        })
    }
}
