/**
 * @fileoverview added by tsickle
 * Generated from: src/widget.factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Injectable } from '@angular/core';
export class WidgetRegistry {
    constructor() {
        this._widgets = {};
    }
    /**
     * @return {?}
     */
    get widgets() {
        return this._widgets;
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
        this._widgets[type] = widget;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    has(type) {
        return this._widgets.hasOwnProperty(type);
    }
    /**
     * @param {?} type
     * @return {?}
     */
    getType(type) {
        if (this.has(type)) {
            return this._widgets[type];
        }
        return this.defaultWidget;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    WidgetRegistry.prototype._widgets;
    /**
     * @type {?}
     * @private
     */
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
        const componentClass = (/** @type {?} */ (this.registry.getType(type)));
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
    /**
     * @type {?}
     * @private
     */
    WidgetFactory.prototype.registry;
    /**
     * @type {?}
     * @private
     */
    WidgetFactory.prototype.resolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXQuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBZ0IsVUFBVSxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUtyRyxNQUFNLE9BQU8sY0FBYztJQUEzQjtRQUNVLGFBQVEsR0FBNkQsRUFBRSxDQUFDO0lBMEJsRixDQUFDOzs7O0lBdEJDLElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxNQUFXO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxJQUFZLEVBQUUsTUFBVztRQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELEdBQUcsQ0FBQyxJQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxJQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUI7UUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztDQUNGOzs7Ozs7SUExQkMsa0NBQWdGOzs7OztJQUVoRix1Q0FBNEQ7O0FBMkI5RCxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFDeEIsWUFBb0IsUUFBd0IsRUFBVSxRQUFrQztRQUFwRSxhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQTBCO0lBQUcsQ0FBQzs7Ozs7O0lBRTVGLFlBQVksQ0FBQyxTQUEyQixFQUFFLElBQVk7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLElBQUksR0FBRyxDQUFDLENBQUM7U0FDOUM7O2NBRUssY0FBYyxHQUFHLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFPOztjQUNuRCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUF1QyxjQUFjLENBQUM7UUFDcEgsT0FBTyxTQUFTLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBWkYsVUFBVTs7OztZQUVxQixjQUFjO1lBcENyQyx3QkFBd0I7Ozs7Ozs7SUFvQ25CLGlDQUFnQzs7Ozs7SUFBRSxpQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5qZWN0YWJsZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuXG5leHBvcnQgY2xhc3MgV2lkZ2V0UmVnaXN0cnkge1xuICBwcml2YXRlIF93aWRnZXRzOiB7IFt0eXBlOiBzdHJpbmddOiBXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT4gfSA9IHt9O1xuXG4gIHByaXZhdGUgZGVmYXVsdFdpZGdldDogV2lkZ2V0PEZvcm1Qcm9wZXJ0eSwgU0ZVSVNjaGVtYUl0ZW0+O1xuXG4gIGdldCB3aWRnZXRzKCkge1xuICAgIHJldHVybiB0aGlzLl93aWRnZXRzO1xuICB9XG5cbiAgc2V0RGVmYXVsdCh3aWRnZXQ6IGFueSkge1xuICAgIHRoaXMuZGVmYXVsdFdpZGdldCA9IHdpZGdldDtcbiAgfVxuXG4gIHJlZ2lzdGVyKHR5cGU6IHN0cmluZywgd2lkZ2V0OiBhbnkpIHtcbiAgICB0aGlzLl93aWRnZXRzW3R5cGVdID0gd2lkZ2V0O1xuICB9XG5cbiAgaGFzKHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl93aWRnZXRzLmhhc093blByb3BlcnR5KHR5cGUpO1xuICB9XG5cbiAgZ2V0VHlwZSh0eXBlOiBzdHJpbmcpOiBXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT4ge1xuICAgIGlmICh0aGlzLmhhcyh0eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dpZGdldHNbdHlwZV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRlZmF1bHRXaWRnZXQ7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdpZGdldEZhY3Rvcnkge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeSwgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7fVxuXG4gIGNyZWF0ZVdpZGdldChjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHR5cGU6IHN0cmluZyk6IENvbXBvbmVudFJlZjxXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT4+IHtcbiAgICBpZiAoIXRoaXMucmVnaXN0cnkuaGFzKHR5cGUpKSB7XG4gICAgICBjb25zb2xlLndhcm4oYE5vIHdpZGdldCBmb3IgdHlwZSBcIiR7dHlwZX1cImApO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvbmVudENsYXNzID0gdGhpcy5yZWdpc3RyeS5nZXRUeXBlKHR5cGUpIGFzIGFueTtcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT4+KGNvbXBvbmVudENsYXNzKTtcbiAgICByZXR1cm4gY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcbiAgfVxufVxuIl19