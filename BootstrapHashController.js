class BootstrapHashController {
    /**
     * Constructor for BootstrapHashController class
     * @param {Object} config Configuration object
     */
    constructor(config = {}) {
        const defaultConfig = {
            Modals: true,
            Accordions: true,
            Tabs: true,
            Tooltips: true,
            Popovers: true,
        };

        // Merging user settings with default settings
        this.config = { ...defaultConfig, ...config };

        // Storing all components
        this.components = {
            modal: { class: 'modal', init: this.initModal.bind(this) },
            accordion: { class: 'collapse', init: this.initAccordion.bind(this) },
            tab: { class: 'tab-pane', init: this.initTab.bind(this) },
            tooltip: { selector: '[data-bs-toggle="tooltip"]', init: this.initTooltips.bind(this) },
            popover: { selector: '[data-bs-toggle="popover"]', init: this.initPopovers.bind(this) },
        };

        this.init();
    }

    init() {
        this.checkHash();
        this.setupAnchorListeners();

        // Initializing components based on configuration
        Object.keys(this.components).forEach(component => {
            if (this.config[component.charAt(0).toUpperCase() + component.slice(1)]) {
                const { init, selector, class: className } = this.components[component];
                if (selector) {
                    this.initDynamicComponent(selector, init);
                } else {
                    this.initDynamicComponentByClass(className, init);
                }
            }
        });
    }

    // Check hash in URL and perform appropriate actions
    checkHash() {
        if (window.location.hash) {
            const targetId = window.location.hash.slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                this.handleComponent(targetElement);
            }
        }
    }

    // Add event listeners for links with hashes
    setupAnchorListeners() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', () => {
                const targetId = anchor.getAttribute('href').slice(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    this.handleComponent(targetElement);
                }
            });
        });
    }

    // Initialize any component based on class name
    initDynamicComponentByClass(className, initFunction) {
        document.querySelectorAll(`.${className}`).forEach(element => {
            if (this.shouldEnable(element)) {
                initFunction(element);
            }
        });
    }

    // Initialize component based on selector
    initDynamicComponent(selector, initFunction) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            if (this.shouldEnable(element)) {
                initFunction(element);
            }
        });
    }

    // Handles initialization of the appropriate component
    handleComponent(targetElement) {
        Object.keys(this.components).forEach(component => {
            const { class: className, init } = this.components[component];
            if (targetElement.classList.contains(className)) {
                init(targetElement);
            }
        });
    }

    // Function to initialize modals
    initModal(targetElement) {
        const modal = new bootstrap.Modal(targetElement);
        modal.show();
    }

    // Function to initialize accordions
    initAccordion(targetElement) {
        const accordion = new bootstrap.Collapse(targetElement, { toggle: true });
    }

    // Function to initialize tabs
    initTab(targetElement) {
        const tabTrigger = document.querySelector(`[data-bs-target="#${targetElement.id}"], a[href="#${targetElement.id}"]`);
        if (tabTrigger) {
            const tab = new bootstrap.Tab(tabTrigger);
            tab.show();
        }
    }

    // Function to initialize tooltips
    initTooltips(targetElement) {
        new bootstrap.Tooltip(targetElement);
    }

    // Function to initialize popovers
    initPopovers(targetElement) {
        new bootstrap.Popover(targetElement);
    }

    // Function to check if an element should be enabled
    shouldEnable(element) {
        const dataStorage = element.getAttribute('data-linkable');
        return dataStorage !== 'false';
    }
}

// Initialize the plugin with configuration
document.addEventListener("DOMContentLoaded", () => {
    const pluginConfig = {
        Modals: true,
        Accordions: true,
        Tabs: true,
        Tooltips: true,
        Popovers: true, 
    };

    new BootstrapHashController(pluginConfig);
});
