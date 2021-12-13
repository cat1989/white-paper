/**
 * Provides access to information about the capabilities of the touch input device.
 */
export class TouchPanelCapabilities {
    /**
     * Indicates if the touch panel device is available for use.
     */
    isConnected() {
        return window.ontouchstart !== undefined
    }
}
