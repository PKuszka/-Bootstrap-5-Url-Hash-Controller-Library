class BootstrapHashController {
    constructor() {
	    
        this.handlers = new Map();
        this.autoHideTime = null;
	this.delayTime = null;
	    
        this.defaultHandlersConfig = [
            { type: "modal", handler: this.handleModal },
            { type: "collapse", handler: this.handleCollapse },
            { type: "fade", handler: this.handleFade },
            { type: "tooltip", handler: this.handleTooltip },
            { type: "offcanvas", handler: this.handleOffcanvas },
            { type: "popover", handler: this.handlePopover },
            { type: "toast", handler: this.handleToast },
            { type: "tab-pane", handler: this.handleTab },
            { type: "dropdown", handler: this.handleDropdown },
        ];

        this.setupEventListeners();
        this.registerDefaultHandlers();
    }

    setupEventListeners() {
        window.addEventListener("hashchange", () => this.processHash());
        document.addEventListener("DOMContentLoaded", () => this.processHash());
    }

    registerDefaultHandlers() {
        this.defaultHandlersConfig.forEach(({ type, handler }) => {
            this.registerHandler(type, handler.bind(this));
        });
    }

    registerHandler(type, handler) {
        this.handlers.set(type, handler);
    }

      processHash() {
        const hash = window.location.hash.slice(1); // Usunięcie znaku '#' z początku
        if (!hash) return;

        const ids = hash.split(','); // Podzielienie hash na wiele ID (oddzielonych przecinkami)

        ids.forEach(id => {
            const element = document.querySelector(`#${id}`);
            if (!element) {
                this.handleError(`The element with ID #${id} was not found.`);
                return;
            }
            this.executeHandler(element);
        });
    }

    executeHandler(element) {
        for (const [type, handler] of this.handlers) {
            if (element.classList.contains(type)) {
				this.handleScroll(element);
                this.handleAutoFadeout(handler, element);
                return;
            }
        }

        this.handleError(`No handler found for element with ID ${window.location.hash}.`);
    }

    handleAutoFadeout(handler, element) {
	
        this.autoHideTime = this.getAutoHideTime(element);
		this.delayTime = this.getDelayTime(element);
		
        handler(element);
    }

    getAutoHideTime(element) {
        const fadeoutTime = element.getAttribute('data-bs-fadeout');
        return fadeoutTime ? parseInt(fadeoutTime) : null; 
    }
	
	getDelayTime(element) {
        const delayTime = element.getAttribute('data-bs-delay');
        return delayTime ? parseInt(delayTime) : null; 
    }

    handleError(message) {
        console.warn(message);
    }

    handleModal(element) {
        const modal = new bootstrap.Modal(element);
        this.setupDelay(modal, element);
        this.setupAutoHide(modal, element);
    }

    handleCollapse(element) {
        const collapse = new bootstrap.Collapse(element);
		this.setupDelay(collapse, element);
        this.setupAutoHide(collapse, element);
    }

    handleFade(element) {
        this.setupDelay(element, element, 1);
		this.setupAutoHide(element, element, 1);
    }

    handleTooltip(element) {
        const tooltip = new bootstrap.Tooltip(element);
		this.setupDelay(tooltip, element);
        this.setupAutoHide(tooltip, element);
    }

    handleOffcanvas(element) {
        const offcanvas = new bootstrap.Offcanvas(element);
        this.setupDelay(offcanvas, element);
        this.setupAutoHide(offcanvas, element);
    }

    handlePopover(element) {
        const popover = new bootstrap.Popover(element);
        this.setupDelay(popover, element);
        this.setupAutoHide(popover, element);
    }

    handleToast(element) {
        const toast = new bootstrap.Toast(element);
		this.setupDelay(toast, element);
        this.setupAutoHide(toast, element);
    }

    handleTab(element) {
        const triggerEl = document.querySelector(`[role="tab"][href="#${element.id}"], [role="tab"][data-bs-target="#${element.id}"]`);
        if (triggerEl) {
            const tabInstance = bootstrap.Tab.getOrCreateInstance(triggerEl);
			this.setupDelay(tabInstance, element);
            this.setupAutoHide(tabInstance, element);
        }
    }

    handleDropdown(element) {
        const dropdownToggleEl = element.querySelector('.dropdown-toggle');
        if (dropdownToggleEl) {
            const dropdownInstance = new bootstrap.Dropdown(dropdownToggleEl);
			this.setupDelay(dropdownInstance, element);
            this.setupAutoHide(dropdownInstance, element);
        }
    }
	handleScroll(element) {
        const scrollValue = element.getAttribute('data-bs-scroll');
        if (scrollValue) {
            const scrollTime = parseInt(scrollValue);
            if (scrollTime) {
                // Scroll the page smoothly to the element
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'smooth',
                });
            }
        }
    }
    setupAutoHide(instance, element, type = null) {
        if (this.autoHideTime) {
            setTimeout(() => {
                if (instance && typeof instance.hide === 'function') {instance.hide(); }
				if(type) { element.classList.remove("show"); }
            }, this.autoHideTime);
        }
    }
	setupDelay(instance, element, type = null) {  
		if (this.delayTime) {
			setTimeout(() => {
				if (instance && typeof instance.hide === 'function') { instance.show();  }
				if(type) { element.classList.add("show"); }
			}, this.delayTime);
		} else { 
			if (instance && typeof instance.hide === 'function') { instance.show();  }
			if (type) { element.classList.add("show"); }
		}
	}
}

// Initialize the BootstrapHashController instance
const hashController = new BootstrapHashController();

// Example of registering a custom handler
hashController.registerHandler("custom-type", (element) => {
    element.style.backgroundColor = "yellow";
});
