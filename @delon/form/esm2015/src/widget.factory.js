/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, ComponentFactoryResolver, } from '@angular/core';
export class WidgetRegistry {
    constructor() {
        this.widgets = {};
    }
    /**
     * @param {?} widget
     * @return {?}
     */
    setDefault(widget) {
        this.defaultWidget = widget;
    }
    /**
     * @param {?} type
     * @param {?} widget
     * @return {?}
     */
    register(type, widget) {
        this.widgets[type] = widget;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    has(type) {
        return this.widgets.hasOwnProperty(type);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getType(type) {
        if (this.has(type)) {
            return this.widgets[type];
        }
        return this.defaultWidget;
    }
}
if (false) {
    /** @type {?} */
    WidgetRegistry.prototype.widgets;
    /** @type {?} */
    WidgetRegistry.prototype.defaultWidget;
}
export class WidgetFactory {
    /**
     * @param {?} registry
     * @param {?} resolver
     */
    constructor(registry, resolver) {
        this.registry = registry;
        this.resolver = resolver;
    }
    /**
     * @param {?} container
     * @param {?} type
     * @return {?}
     */
    createWidget(container, type) {
        if (!this.registry.has(type)) {
            console.warn(`No widget for type "${type}"`);
        }
        /** @type {?} */
        const componentClass = this.registry.getType(type);
        /** @type {?} */
        const componentFactory = this.resolver.resolveComponentFactory(componentClass);
        return container.createComponent(componentFactory);
    }
}
WidgetFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
WidgetFactory.ctorParameters = () => [
    { type: WidgetRegistry },
    { type: ComponentFactoryResolver }
];
if (false) {
    /** @type {?} */
    WidgetFactory.prototype.registry;
    /** @type {?} */
    WidgetFactory.prototype.resolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXQuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFVBQVUsRUFDVix3QkFBd0IsR0FHekIsTUFBTSxlQUFlLENBQUM7QUFHdkIsTUFBTTs7dUJBQ3VDLEVBQUU7Ozs7OztJQUk3QyxVQUFVLENBQUMsTUFBVztRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztLQUM3Qjs7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQVksRUFBRSxNQUFXO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO0tBQzdCOzs7OztJQUVELEdBQUcsQ0FBQyxJQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNsQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0tBQzNCO0NBQ0Y7Ozs7Ozs7QUFHRCxNQUFNOzs7OztJQUNKLFlBQ1UsVUFDQTtRQURBLGFBQVEsR0FBUixRQUFRO1FBQ1IsYUFBUSxHQUFSLFFBQVE7S0FDZDs7Ozs7O0lBRUosWUFBWSxDQUNWLFNBQTJCLEVBQzNCLElBQVk7UUFFWixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUIsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUM5Qzs7UUFFRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7UUFDbkQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUM1RCxjQUFjLENBQ2YsQ0FBQztRQUNGLE9BQU8sU0FBUyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0tBQ3BEOzs7WUFwQkYsVUFBVTs7OztZQUdXLGNBQWM7WUFsQ2xDLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgSW5qZWN0YWJsZSxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBDb21wb25lbnRSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBXaWRnZXRSZWdpc3RyeSB7XHJcbiAgcHJpdmF0ZSB3aWRnZXRzOiB7IFt0eXBlOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGRlZmF1bHRXaWRnZXQ6IGFueTtcclxuXHJcbiAgc2V0RGVmYXVsdCh3aWRnZXQ6IGFueSkge1xyXG4gICAgdGhpcy5kZWZhdWx0V2lkZ2V0ID0gd2lkZ2V0O1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXIodHlwZTogc3RyaW5nLCB3aWRnZXQ6IGFueSkge1xyXG4gICAgdGhpcy53aWRnZXRzW3R5cGVdID0gd2lkZ2V0O1xyXG4gIH1cclxuXHJcbiAgaGFzKHR5cGU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0cy5oYXNPd25Qcm9wZXJ0eSh0eXBlKTtcclxuICB9XHJcblxyXG4gIGdldFR5cGUodHlwZTogc3RyaW5nKTogYW55IHtcclxuICAgIGlmICh0aGlzLmhhcyh0eXBlKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy53aWRnZXRzW3R5cGVdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFdpZGdldDtcclxuICB9XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdpZGdldEZhY3Rvcnkge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZWdpc3RyeTogV2lkZ2V0UmVnaXN0cnksXHJcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgKSB7fVxyXG5cclxuICBjcmVhdGVXaWRnZXQoXHJcbiAgICBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICB0eXBlOiBzdHJpbmcsXHJcbiAgKTogQ29tcG9uZW50UmVmPFdpZGdldDxhbnk+PiB7XHJcbiAgICBpZiAoIXRoaXMucmVnaXN0cnkuaGFzKHR5cGUpKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihgTm8gd2lkZ2V0IGZvciB0eXBlIFwiJHt0eXBlfVwiYCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29tcG9uZW50Q2xhc3MgPSB0aGlzLnJlZ2lzdHJ5LmdldFR5cGUodHlwZSk7XHJcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxXaWRnZXQ8YW55Pj4oXHJcbiAgICAgIGNvbXBvbmVudENsYXNzLFxyXG4gICAgKTtcclxuICAgIHJldHVybiBjb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xyXG4gIH1cclxufVxyXG4iXX0=