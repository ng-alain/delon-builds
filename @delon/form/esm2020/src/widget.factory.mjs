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
export class WidgetFactory {
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
}
WidgetFactory.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.4", ngImport: i0, type: WidgetFactory, deps: [{ token: WidgetRegistry }], target: i0.ɵɵFactoryTarget.Injectable });
WidgetFactory.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.4", ngImport: i0, type: WidgetFactory });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.4", ngImport: i0, type: WidgetFactory, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: WidgetRegistry }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXQuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLFVBQVUsRUFBb0IsTUFBTSxlQUFlLENBQUM7O0FBUTNFLE1BQU0sT0FBTyxjQUFjO0lBQTNCO1FBQ1UsYUFBUSxHQUE2RCxFQUFFLENBQUM7SUEwQmxGLENBQUM7SUF0QkMsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBaUI7UUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFZLEVBQUUsTUFBaUI7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVk7UUFDbEIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUFHRCxNQUFNLE9BQU8sYUFBYTtJQUN4QixZQUFvQixRQUF3QjtRQUF4QixhQUFRLEdBQVIsUUFBUSxDQUFnQjtJQUFHLENBQUM7SUFFaEQsWUFBWSxDQUFDLFNBQTJCLEVBQUUsSUFBWTtRQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUIsSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLElBQUksU0FBUyxFQUFFO2dCQUNqRCxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixJQUFJLEdBQUcsQ0FBQyxDQUFDO2FBQzlDO1NBQ0Y7UUFFRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQWMsQ0FBQztRQUNoRSxPQUFPLFNBQVMsQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7MEdBWlUsYUFBYSxrQkFDTSxjQUFjOzhHQURqQyxhQUFhOzJGQUFiLGFBQWE7a0JBRHpCLFVBQVU7MERBRXFCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRSZWYsIEluamVjdGFibGUsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5pbXBvcnQgdHlwZSB7IFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcblxuZXhwb3J0IGNsYXNzIFdpZGdldFJlZ2lzdHJ5IHtcbiAgcHJpdmF0ZSBfd2lkZ2V0czogeyBbdHlwZTogc3RyaW5nXTogV2lkZ2V0PEZvcm1Qcm9wZXJ0eSwgU0ZVSVNjaGVtYUl0ZW0+IH0gPSB7fTtcblxuICBwcml2YXRlIGRlZmF1bHRXaWRnZXQhOiBXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT47XG5cbiAgZ2V0IHdpZGdldHMoKTogeyBbdHlwZTogc3RyaW5nXTogV2lkZ2V0PEZvcm1Qcm9wZXJ0eSwgU0ZVSVNjaGVtYUl0ZW0+IH0ge1xuICAgIHJldHVybiB0aGlzLl93aWRnZXRzO1xuICB9XG5cbiAgc2V0RGVmYXVsdCh3aWRnZXQ6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIHRoaXMuZGVmYXVsdFdpZGdldCA9IHdpZGdldDtcbiAgfVxuXG4gIHJlZ2lzdGVyKHR5cGU6IHN0cmluZywgd2lkZ2V0OiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICB0aGlzLl93aWRnZXRzW3R5cGVdID0gd2lkZ2V0O1xuICB9XG5cbiAgaGFzKHR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl93aWRnZXRzLmhhc093blByb3BlcnR5KHR5cGUpO1xuICB9XG5cbiAgZ2V0VHlwZSh0eXBlOiBzdHJpbmcpOiBXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT4ge1xuICAgIGlmICh0aGlzLmhhcyh0eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dpZGdldHNbdHlwZV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRlZmF1bHRXaWRnZXQ7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdpZGdldEZhY3Rvcnkge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeSkge31cblxuICBjcmVhdGVXaWRnZXQoY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCB0eXBlOiBzdHJpbmcpOiBDb21wb25lbnRSZWY8V2lkZ2V0PEZvcm1Qcm9wZXJ0eSwgU0ZVSVNjaGVtYUl0ZW0+PiB7XG4gICAgaWYgKCF0aGlzLnJlZ2lzdHJ5Lmhhcyh0eXBlKSkge1xuICAgICAgaWYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYE5vIHdpZGdldCBmb3IgdHlwZSBcIiR7dHlwZX1cImApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvbmVudENsYXNzID0gdGhpcy5yZWdpc3RyeS5nZXRUeXBlKHR5cGUpIGFzIE56U2FmZUFueTtcbiAgICByZXR1cm4gY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRDbGFzcyk7XG4gIH1cbn1cbiJdfQ==