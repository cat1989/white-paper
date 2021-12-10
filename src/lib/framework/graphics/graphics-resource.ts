import { GraphicsDevice } from './graphics-device'
import { ResourceType } from './resource-type'

/**
 * Queries and prepares resources.
 */
export abstract class GraphicsResource {
    /**
     * Gets the GraphicsDevice associated with this GraphicsResource.
     */
    abstract get graphicsDevice(): GraphicsDevice;

    /**
     * Gets the name of the resource.
     */
    name: string = '';

    /**
     * Gets the type of this resource.
     */
    abstract get resourceType(): ResourceType;
}
