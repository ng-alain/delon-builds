import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class WidgetRegistry {
    constructor() {
        this._widgets = {};
    }
    get widgets() {
        return this._widgets;
    }
    setDefault(widget) {
        this.defaultWidget = widget;
    }
    register(type, widget) {
        this._widgets[type] = widget;
    }
    has(type) {
        return this._widgets.hasOwnProperty(type);
    }
    getType(type) {
        if (this.has(type)) {
            return this._widgets[type];
        }
        return this.defaultWidget;
    }
}
class WidgetFactory {
    constructor(registry) {
        this.registry = registry;
    }
    createWidget(container, type) {
        if (!this.registry.has(type)) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
                console.warn(`No widget for type "${type}"`);
            }
        }
        const componentClass = this.registry.getType(type);
        return container.createComponent(componentClass);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: WidgetFactory, deps: [{ token: WidgetRegistry }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: WidgetFactory }); }
}
export { WidgetFactory };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: WidgetFactory, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: WidgetRegistry }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXQuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLFVBQVUsRUFBb0IsTUFBTSxlQUFlLENBQUM7O0FBUTNFLE1BQU0sT0FBTyxjQUFjO0lBQTNCO1FBQ1UsYUFBUSxHQUE2RCxFQUFFLENBQUM7SUEwQmxGLENBQUM7SUF0QkMsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBaUI7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFZLEVBQUUsTUFBaUI7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVk7UUFDbEIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUFFRCxNQUNhLGFBQWE7SUFDeEIsWUFBb0IsUUFBd0I7UUFBeEIsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7SUFBRyxDQUFDO0lBRWhELFlBQVksQ0FBQyxTQUEyQixFQUFFLElBQVk7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVCLElBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxJQUFJLFNBQVMsRUFBRTtnQkFDakQsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsSUFBSSxHQUFHLENBQUMsQ0FBQzthQUM5QztTQUNGO1FBRUQsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFjLENBQUM7UUFDaEUsT0FBTyxTQUFTLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7OEdBWlUsYUFBYTtrSEFBYixhQUFhOztTQUFiLGFBQWE7MkZBQWIsYUFBYTtrQkFEekIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudFJlZiwgSW5qZWN0YWJsZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4vc2NoZW1hL3VpJztcbmltcG9ydCB0eXBlIHsgV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXQnO1xuXG5leHBvcnQgY2xhc3MgV2lkZ2V0UmVnaXN0cnkge1xuICBwcml2YXRlIF93aWRnZXRzOiB7IFt0eXBlOiBzdHJpbmddOiBXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT4gfSA9IHt9O1xuXG4gIHByaXZhdGUgZGVmYXVsdFdpZGdldCE6IFdpZGdldDxGb3JtUHJvcGVydHksIFNGVUlTY2hlbWFJdGVtPjtcblxuICBnZXQgd2lkZ2V0cygpOiB7IFt0eXBlOiBzdHJpbmddOiBXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT4gfSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZGdldHM7XG4gIH1cblxuICBzZXREZWZhdWx0KHdpZGdldDogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgdGhpcy5kZWZhdWx0V2lkZ2V0ID0gd2lkZ2V0O1xuICB9XG5cbiAgcmVnaXN0ZXIodHlwZTogc3RyaW5nLCB3aWRnZXQ6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIHRoaXMuX3dpZGdldHNbdHlwZV0gPSB3aWRnZXQ7XG4gIH1cblxuICBoYXModHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZGdldHMuaGFzT3duUHJvcGVydHkodHlwZSk7XG4gIH1cblxuICBnZXRUeXBlKHR5cGU6IHN0cmluZyk6IFdpZGdldDxGb3JtUHJvcGVydHksIFNGVUlTY2hlbWFJdGVtPiB7XG4gICAgaWYgKHRoaXMuaGFzKHR5cGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd2lkZ2V0c1t0eXBlXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFdpZGdldDtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2lkZ2V0RmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVnaXN0cnk6IFdpZGdldFJlZ2lzdHJ5KSB7fVxuXG4gIGNyZWF0ZVdpZGdldChjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHR5cGU6IHN0cmluZyk6IENvbXBvbmVudFJlZjxXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT4+IHtcbiAgICBpZiAoIXRoaXMucmVnaXN0cnkuaGFzKHR5cGUpKSB7XG4gICAgICBpZiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgTm8gd2lkZ2V0IGZvciB0eXBlIFwiJHt0eXBlfVwiYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29tcG9uZW50Q2xhc3MgPSB0aGlzLnJlZ2lzdHJ5LmdldFR5cGUodHlwZSkgYXMgTnpTYWZlQW55O1xuICAgIHJldHVybiBjb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudENsYXNzKTtcbiAgfVxufVxuIl19