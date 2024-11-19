# Bootstrap Hash Controller

A JavaScript library that enables dynamic interaction with Bootstrap components using URL hash values. It registers event listeners for hash changes and processes elements identified by the hash, applying actions such as showing or hiding Bootstrap components like modals, collapses, tooltips, and more.

## Features

- **Hash-driven component control**: Automatically open, close, or trigger actions on Bootstrap components based on the URL hash.
- **Supports multiple Bootstrap components**: Modal, Collapse, Tooltip, Popover, Toast, Dropdown, Offcanvas, Tab, and more.
- **Customizable handlers**: Add custom actions or modify existing handlers.
- **Auto-hide functionality**: Automatically hide elements after a specified time.
- **Smooth scrolling**: Scroll to elements when they are triggered by hash changes.

## Methods

### `constructor()`
Initializes the controller and sets up default handlers for Bootstrap components (Modal, Collapse, Tooltip, etc.).

- **Properties:**
  - `handlers`: A map storing the component types and their corresponding handler functions.
  - `autoHideTime`: Time (in ms) to auto-hide components after they are triggered.
  - `delayTime`: Time (in ms) to delay the activation of a component.
  - `defaultHandlersConfig`: A list of default handlers for different component types.

### `setupEventListeners()`
Sets up event listeners for `hashchange` and `DOMContentLoaded` events. Calls `processHash()` when either event occurs.

- **Events:**
  - `hashchange`: Triggers when the URL hash changes.
  - `DOMContentLoaded`: Triggers when the document is fully loaded.

### `registerDefaultHandlers()`
Registers the default handlers for supported component types such as Modals, Collapses, and Tooltips.

### `registerHandler(type, handler)`
Registers a custom handler for a specific component type.

- **Parameters:**
  - `type`: The component type (e.g., `"modal"`, `"collapse"`).
  - `handler`: The function that handles the component behavior.

### `processHash()`
Processes the current URL hash and triggers the corresponding actions for the elements identified by the hash.

- **How it works:**
  - Extracts the hash from the URL and splits it by commas (if multiple IDs are present).
  - For each ID, it checks if the element exists and applies the corresponding handler.

### `executeHandler(element)`
Finds the appropriate handler for an element and executes it.

- **How it works:**
  - Checks if the element has any of the supported component types (e.g., Modal, Collapse).
  - Calls the handler for the matched component type.

### `handleAutoFadeout(handler, element)`
Handles the automatic fade-out behavior after a specified duration.

- **How it works:**
  - Fetches the `data-bs-fadeout` attribute of the element to determine the time for auto-hide.
  - Calls the handler function for the element, then waits for the fade-out time to hide the component.

### `getAutoHideTime(element)`
Gets the auto-hide time for an element from the `data-bs-fadeout` attribute.

- **Parameters:**
  - `element`: The DOM element to inspect.
- **Returns**: The auto-hide time in milliseconds, or `null` if not specified.

### `getDelayTime(element)`
Gets the delay time for an element from the `data-bs-delay` attribute.

- **Parameters:**
  - `element`: The DOM element to inspect.
- **Returns**: The delay time in milliseconds, or `null` if not specified.

### `isDisabled(element)`
Checks if the element is disabled for hash control, based on the `data-bs-hash` attribute.

- **Parameters:**
  - `element`: The DOM element to inspect.
- **Returns**: `true` if the element is disabled, otherwise `false`.

### `handleError(message)`
Logs a warning message to the console if an error occurs (e.g., element not found or no handler available).

- **Parameters:**
  - `message`: The error message to log.

### `handleModal(element)`
Handles the modal behavior. Uses Bootstrap's modal instance to show the modal.

- **Parameters:**
  - `element`: The modal DOM element.
  
### `handleCollapse(element)`
Handles the collapse behavior. Uses Bootstrap's collapse instance to toggle the collapse.

- **Parameters:**
  - `element`: The collapse DOM element.

### `handleFade(element)`
Handles the fade behavior by adding the "show" class to the element.

- **Parameters:**
  - `element`: The element to fade.

### `handleTooltip(element)`
Handles the tooltip behavior. Uses Bootstrap's tooltip instance to show the tooltip.

- **Parameters:**
  - `element`: The tooltip DOM element.

### `handleOffcanvas(element)`
Handles the offcanvas behavior. Uses Bootstrap's offcanvas instance to toggle the offcanvas.

- **Parameters:**
  - `element`: The offcanvas DOM element.

### `handlePopover(element)`
Handles the popover behavior. Uses Bootstrap's popover instance to show the popover.

- **Parameters:**
  - `element`: The popover DOM element.

### `handleToast(element)`
Handles the toast behavior. Uses Bootstrap's toast instance to show the toast.

- **Parameters:**
  - `element`: The toast DOM element.

### `handleTab(element)`
Handles the tab behavior. Activates the corresponding tab using Bootstrap's Tab instance.

- **Parameters:**
  - `element`: The tab DOM element.

### `handleDropdown(element)`
Handles the dropdown behavior. Uses Bootstrap's Dropdown instance to toggle the dropdown.

- **Parameters:**
  - `element`: The dropdown DOM element.

### `handleScroll(element)`
Scrolls the page smoothly to the top of the element.

- **Parameters:**
  - `element`: The DOM element to scroll to.
  
### `setupAutoHide(instance, element, type = null)`
Sets up auto-hide functionality for a Bootstrap instance (Modal, Toast, etc.). Hides the component after the specified `autoHideTime`.

- **Parameters:**
  - `instance`: The Bootstrap component instance (e.g., Modal, Toast).
  - `element`: The DOM element associated with the instance.
  - `type`: Optional. The component type (e.g., `"fade"`) to apply specific handling.
  
### `setupDelay(instance, element, type = null)`
Sets up a delay before showing a Bootstrap component instance (e.g., Modal, Toast).

- **Parameters:**
  - `instance`: The Bootstrap component instance (e.g., Modal, Toast).
  - `element`: The DOM element associated with the instance.
  - `type`: Optional. The component type (e.g., `"fade"`) to apply specific handling.

---

## Usage Example

```javascript
const hashController = new BootstrapHashController();

// Register a custom handler
hashController.registerHandler("custom-type", (element) => {
    element.style.backgroundColor = "yellow";
});
