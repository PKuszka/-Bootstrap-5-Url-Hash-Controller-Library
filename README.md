# Bootstrap Hash Controller

A JavaScript library that handles Bootstrap components (such as modals, tooltips, dropdowns, etc.) based on URL hash changes. This library allows you to open or interact with Bootstrap elements directly via the URL, making it easier to control UI components dynamically.

## Features

- Automatically processes the hash in the URL and triggers corresponding Bootstrap elements (e.g., modal, tooltip, toast, etc.).
- Supports dynamic elements, such as modals, collapses, toasts, tooltips, popovers, and dropdowns.
- Handles auto-hide and delay animatioon functionality for components based on custom ```data-bs-fadeout``` and ```data-bs-delay``` attributes.
- Provides smooth scrolling to the target element if specified in the ```data-bs-scroll``` attribute.
- Supports custom event handlers for additional component types.

## Installation

Simply include the BootstrapHashController class in your project, and make sure you have Bootstrap 5 loaded for the library to function correctly.

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="path/to/BootstrapHashController.js"></script>
