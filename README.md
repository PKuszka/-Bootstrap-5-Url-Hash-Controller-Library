# Bootstrap 5 Hash Controller

This library enables easy integration of Bootstrap 5 components like **modals**, **accordions**, **tabs**, and more via URL hash (`#id`). By simply adding `#id` to the URL, the corresponding component (modal, accordion item, or tab) will automatically be triggered to show or open, creating a seamless user experience.

## Features

The library comes with default handlers for various Bootstrap 5 components, but you can also register custom handlers for other elements.
Default Handlers

These handlers are registered automatically for the following components:

- Modal
- Collapse (Accordion)
- Fade 
- Alert
- Tooltip
- Offcanvas
- Popover
- Toast
- Tab-Pane
- Dropdown

## Installation

You can install this library by cloning the repository or by including the script directly in your project. For example, to use the hosted version, simply add the following script tag to your HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/PKuszka/Bootstrap-5-URL-Hash-Controller-Library@main/BootstrapHashController.js"></script>
```

Alternatively, you can clone the repository to use it locally:

git clone https://github.com/PKuszka/Bootstrap-5-URL-Hash-Controller-Library.git

Then include the BootstrapHashController.js script in your project.

## Usage

Once the library is installed, it is ready to use. You do not need to initialize it manually; the library automatically hooks into your Bootstrap components when the page is loaded.

## Contributing

Contributions are welcome! Feel free to submit pull requests, report issues, or suggest features. To contribute, fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License 
