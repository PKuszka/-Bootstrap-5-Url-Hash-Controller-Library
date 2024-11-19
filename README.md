# Bootstrap 5 Hash Controller

This library enables easy integration of Bootstrap 5 components like **modals**, **accordions**, **tabs**, and more via URL hash (`#id`). By simply adding `#id` to the URL, the corresponding component (modal, accordion item, or tab) will automatically be triggered to show or open, creating a seamless user experience.

## Features

- **Modals**: Automatically opens modals when the URL contains a hash corresponding to the modal's `id`.
- **Accordions**: Automatically toggles accordion panels based on the URL hash, providing instant access to specific sections.
- **Enable/Disable Components**: Use the `data-hash` attribute to control whether an element can be linked to via URL hash. If `data-hash="false"` is set, that element will be ignored by the library.


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
