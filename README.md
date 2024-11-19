# Bootstrap Hash Controller

The BootstrapHashController library allows you to control various Bootstrap 5 components using the URL hash. It provides the functionality to open and control modals, toasts, collapses, tooltips, popovers, tabs, and more based on the hash in the URL. It enhances the user experience by providing smooth transitions and auto-hide behaviors based on custom configurations.

## Features

- **Automatic Handling of Hash-Triggered Components:** Automatically processes elements triggered by the URL hash.
- **Supports Multiple Bootstrap Components:** Handles Bootstrap modals, collapses, toasts, tooltips, popovers, offcanvas, dropdowns, and tabs.
- **Custom Handlers** Register custom handlers for different types of components.
- **Auto-Fadeout:** Supports auto-hide after a certain delay.
- **Scroll to Element:** Optionally scroll to an element when triggered by hash.
- **Delay for Actions:** Allows delayed opening of components based on data attributes.
- **Error Handling:** Provides warnings if an element is not found or no handler is available.

The library can automatically hide components after a set time using the ```data-bs-fadeout``` attribute. It supports a delay for component visibility using the data-bs-delay attribute.

## Bootstrap Component Support

- Modals
- Fade
- Alert
- Collapses
- Tooltips
- Popovers
- Toasts
- Offcanvas
- Tabs
- Dropdowns
