/**
 * Defines an interface for game components.
 */
export interface IGameComponent {
    /**
     * Called when the component should be initialized. This method can be used for tasks like querying for services the component needs and setting up non-graphics resources.
     */
    initialize(): void;
}
