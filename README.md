# Bootstrap 5 Hash Controller

This library enables easy integration of Bootstrap 5 components like **modals**, **accordions**, and **tabs** via URL hash (`#id`). By simply adding `#id` to the URL, the corresponding component (modal, accordion item, or tab) will automatically be triggered to show or open.

## Features

- **Modals**: Opens modals when the URL contains a hash corresponding to the modal's `id`.
- **Accordions**: Automatically toggles accordion panels based on the URL hash.
- **Tabs**: Switches to the correct tab when the URL contains a hash of the tab's `id`.
- **Tooltips & Popovers**: Optionally initialize tooltips and popovers on the page based on data attributes, with control via configuration.
- **Enable/Disable Components**: Use the `data-linkable` attribute to control whether an element can be linked to via URL hash. If `data-linkable="false"` is set, that element will be ignored by the library.

## Installation

You can install this library by cloning the repository or by including the script in your project.
