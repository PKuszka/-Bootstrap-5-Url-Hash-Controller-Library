
class BootstrapHashController {
    constructor() {
        this.handlers = new Map();

        this.defaultBootstrapHandlers();

        window.addEventListener("hashchange", () => this.processHash());
        document.addEventListener("DOMContentLoaded", () => this.processHash());
    }

    defaultBootstrapHandlers() {
        this.registerHandler("modal", this.handleModal);
        this.registerHandler("collapse", this.handleCollapse);
        this.registerHandler("alert", this.handleAlert);
        this.registerHandler("tooltip", this.handleTooltip);
        this.registerHandler("offcanvas", this.handleOffcanvas);
        this.registerHandler("popover", this.handlePopover);
        this.registerHandler("toast", this.handleToast);
        this.registerHandler("tab-pane", this.handleTab);
        this.registerHandler("dropdown", this.handleDropdown);
    }

   
    registerHandler(type, handler) {
        this.handlers.set(type, handler);
    }

    processHash() {
        const hash = window.location.hash; 
        if (!hash) return;

        const element = document.querySelector(hash); 
        if (!element) {
            console.warn(`The element with ID ${hash} was not found.`);
            return;
        }

       
        for (const [type, handler] of this.handlers) {
            if (element.classList.contains(type)) {
                this.handleAutoFadeout(handler,element);
                return;
            }
        }

        console.warn(`No handler for element with ID ${hash}.`);
    }

  
    handleAutoFadeout(handler,element) {
        if (element.hasAttribute('data-bs-fadeout')) {
            const fadeoutTime = parseInt(element.getAttribute('data-bs-fadeout')) || 3000; 
            handler(element, fadeoutTime);
        } else { 
			handler(element);
		}
    }

    handleModal(element, autohide = false) {
       
		const modal = new bootstrap.Modal(element);
		modal.show(); 
		
		if(autohide) { setTimeout(() => {
			modal.hide();
		}, autohide); }
			
    }

    handleCollapse(element, autohide = false) {
		const collapse = new bootstrap.Collapse(element, { toggle: true });

		
		if (autohide) {
			setTimeout(() => {
				alert(1);
				const collapse = new bootstrap.Collapse(element, { toggle: true });
			}, autohide);
		}
	}

    handleAlert(element, autohide = false) {
        element.classList.add("show");
    }

    handleTooltip(element, autohide = false) {
        const tooltip = new bootstrap.Tooltip(element);
        tooltip.show();
		
		if(autohide) { setTimeout(() => {
			tooltip.hide();
		}, autohide); }
    }

    handleOffcanvas(element, autohide = false) {
        const offcanvas = new bootstrap.Offcanvas(element);
        offcanvas.show();
		
		if(autohide) { setTimeout(() => {
			offcanvas.hide();
		}, autohide); }
    }

    handlePopover(element, autohide = false) {
        const popover = new bootstrap.Popover(element);
        popover.show();
		
		if(autohide) { setTimeout(() => {
			popover.hide();
		}, autohide); }
    }

    handleToast(element, autohide = false) {
        const toast = new bootstrap.Toast(element);
        toast.show();
		
		if(autohide) { setTimeout(() => {
			toast.hide();
		}, autohide); }
    }

    handleTab(element, autohide = false) {
        const triggerEl = document.querySelector(`[role="tab"][href="#${element.id}"], [role="tab"][data-bs-target="#${element.id}"]`);
        if (triggerEl) {
            const tabInstance = bootstrap.Tab.getOrCreateInstance(triggerEl);
            tabInstance.show();
			
			if(autohide) { setTimeout(() => {
				tabInstance.hide();
			}, autohide); }
        }
    }

    handleDropdown(element, autohide = false) {
        const dropdownToggleEl = element.querySelector('.dropdown-toggle');
        if (dropdownToggleEl) {
            const dropdownInstance = new bootstrap.Dropdown(dropdownToggleEl);
            dropdownInstance.show(); 
			
			if(autohide) { setTimeout(() => {
				dropdownInstance.hide();
			}, autohide); }
        }
    }
}


const hashController = new BootstrapHashController();

hashController.registerHandler("custom-type", (element) => {
    element.style.backgroundColor = "yellow";
});
