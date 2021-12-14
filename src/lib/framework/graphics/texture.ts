import { GraphicsResource } from './graphics-resource'
import { GraphicsDevice } from './graphics-device'
/**
 * Represents a texture resource.
 */
export abstract class Texture extends GraphicsResource {
    /**
     * Creates a texture resource from a file.
     * @param graphicsDevice The graphics device to use to create the texture resource.
     * @param filename The name of the file containing the texture.
     */
    static fromFile(
        graphicsDevice: GraphicsDevice,
        filename: string,
    ) {
        
    }
}
