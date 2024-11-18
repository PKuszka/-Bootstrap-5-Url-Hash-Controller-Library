# Bootstrap 5 Hash Controller

This library enables easy integration of Bootstrap 5 components like **modals**, **accordions**, **tabs**, and more via URL hash (`#id`). By simply adding `#id` to the URL, the corresponding component (modal, accordion item, or tab) will automatically be triggered to show or open, creating a seamless user experience.

## Features

- **Modals**: Automatically opens modals when the URL contains a hash corresponding to the modal's `id`.
- **Accordions**: Automatically toggles accordion panels based on the URL hash, providing instant access to specific sections.
- **Tabs**: Switches to the correct tab when the URL contains a hash of the tab's `id`.
- **Tooltips & Popovers**: Optionally initialize tooltips and popovers on the page based on data attributes, with control via configuration.
- **Enable/Disable Components**: Use the `data-linkable` attribute to control whether an element can be linked to via URL hash. If `data-linkable="false"` is set, that element will be ignored by the library.
- **Automatic Sync**: The library automatically updates the URL hash when the user interacts with a modal, tab, or accordion, maintaining state across page reloads.

## Installation

You can install this library by cloning the repository or by including the script directly in your project. For example, to use the hosted version, simply add the following script tag to your HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/PKuszka/Bootstrap-5-URL-Hash-Controller-Library@main/BootstrapHashController.js"></script>
```

Alternatively, you can clone the repository to use it locally:

git clone https://github.com/PKuszka/Bootstrap-5-URL-Hash-Controller-Library.git

Then include the BootstrapHashController.js script in your project.

##Usage

Once the library is installed, it is ready to use. You do not need to initialize it manually; the library automatically hooks into your Bootstrap components when the page is loaded.
Modals

To make a modal open when the URL hash is set, ensure that the modal has an id attribute and that the URL contains #id:

```html
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="myModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Content of the modal.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

```

Now, when the URL is yourpage.html#myModal, the modal will open automatically.
Accordions

For accordions, make sure the accordion items have unique id attributes, and the URL hash will open the corresponding item:

```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Content for the first accordion item.
      </div>
    </div>
  </div>
</div>
```

If the URL is yourpage.html#collapseOne, the first accordion item will be expanded.
Tabs

For tabs, use the id of each tab as the hash in the URL to switch to the correct tab:

```html
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    Home tab content.
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
    Profile tab content.
  </div>
</div>
```

When the URL is yourpage.html#profile, the "Profile" tab will be shown automatically.
Tooltips and Popovers

You can optionally initialize Bootstrap tooltips and popovers with the data-bs-toggle attribute. You can control initialization by using a configuration option to enable/disable them.

<!-- Tooltip -->
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">Hover me</button>

<!-- Popover -->
<button type="button" class="btn btn-secondary" data-bs-toggle="popover" title="Popover title" data-bs-content="Popover content">Click me</button>

You can configure these in the library's settings for automatic initialization based on data attributes.
Configuration Options

You can configure the library to control how it behaves on your page. Options include enabling or disabling components or tooltips/popovers, setting a delay for opening components, and more.

```js
const options = {
  autoInitTooltips: true, // Automatically initialize tooltips
  autoInitPopovers: false, // Automatically initialize popovers
  disableHashSync: false,  // Disable automatic hash synchronization
};
```

##Contributing

Contributions are welcome! Feel free to submit pull requests, report issues, or suggest features. To contribute, fork the repository and create a pull request with your changes.

##License

This project is licensed under the MIT License 
