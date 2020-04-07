/**
 * @fileoverview added by tsickle
 * Generated from: src/widget.factory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Injectable } from '@angular/core';
var WidgetRegistry = /** @class */ (function () {
    function WidgetRegistry() {
        this._widgets = {};
    }
    Object.defineProperty(WidgetRegistry.prototype, "widgets", {
        get: /**
         * @return {?}
         */
        function () {
            return this._widgets;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} widget
     * @return {?}
     */
    WidgetRegistry.prototype.setDefault = /**
     * @param {?} widget
     * @return {?}
     */
    function (widget) {
        this.defaultWidget = widget;
    };
    /**
     * @param {?} type
     * @param {?} widget
     * @return {?}
     */
    WidgetRegistry.prototype.register = /**
     * @param {?} type
     * @param {?} widget
     * @return {?}
     */
    function (type, widget) {
        this._widgets[type] = widget;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    WidgetRegistry.prototype.has = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return this._widgets.hasOwnProperty(type);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    WidgetRegistry.prototype.getType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (this.has(type)) {
            return this._widgets[type];
        }
        return this.defaultWidget;
    };
    return WidgetRegistry;
}());
export { WidgetRegistry };
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
var WidgetFactory = /** @class */ (function () {
    function WidgetFactory(registry, resolver) {
        this.registry = registry;
        this.resolver = resolver;
    }
    /**
     * @param {?} container
     * @param {?} type
     * @return {?}
     */
    WidgetFactory.prototype.createWidget = /**
     * @param {?} container
     * @param {?} type
     * @return {?}
     */
    function (container, type) {
        if (!this.registry.has(type)) {
            console.warn("No widget for type \"" + type + "\"");
        }
        /** @type {?} */
        var componentClass = (/** @type {?} */ (this.registry.getType(type)));
        /** @type {?} */
        var componentFactory = this.resolver.resolveComponentFactory(componentClass);
        return container.createComponent(componentFactory);
    };
    WidgetFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    WidgetFactory.ctorParameters = function () { return [
        { type: WidgetRegistry },
        { type: ComponentFactoryResolver }
    ]; };
    return WidgetFactory;
}());
export { WidgetFactory };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXQuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBZ0IsVUFBVSxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUtyRztJQUFBO1FBQ1UsYUFBUSxHQUE2RCxFQUFFLENBQUM7SUEwQmxGLENBQUM7SUF0QkMsc0JBQUksbUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTs7Ozs7SUFFRCxtQ0FBVTs7OztJQUFWLFVBQVcsTUFBVztRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCxpQ0FBUTs7Ozs7SUFBUixVQUFTLElBQVksRUFBRSxNQUFXO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsNEJBQUc7Ozs7SUFBSCxVQUFJLElBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsZ0NBQU87Ozs7SUFBUCxVQUFRLElBQVk7UUFDbEIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDOzs7Ozs7O0lBMUJDLGtDQUFnRjs7Ozs7SUFFaEYsdUNBQTREOztBQTBCOUQ7SUFFRSx1QkFBb0IsUUFBd0IsRUFBVSxRQUFrQztRQUFwRSxhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQTBCO0lBQUcsQ0FBQzs7Ozs7O0lBRTVGLG9DQUFZOzs7OztJQUFaLFVBQWEsU0FBMkIsRUFBRSxJQUFZO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUF1QixJQUFJLE9BQUcsQ0FBQyxDQUFDO1NBQzlDOztZQUVLLGNBQWMsR0FBRyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBTzs7WUFDbkQsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBdUMsY0FBYyxDQUFDO1FBQ3BILE9BQU8sU0FBUyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O2dCQVpGLFVBQVU7Ozs7Z0JBRXFCLGNBQWM7Z0JBcENyQyx3QkFBd0I7O0lBK0NqQyxvQkFBQztDQUFBLEFBYkQsSUFhQztTQVpZLGFBQWE7Ozs7OztJQUNaLGlDQUFnQzs7Ozs7SUFBRSxpQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5qZWN0YWJsZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuXG5leHBvcnQgY2xhc3MgV2lkZ2V0UmVnaXN0cnkge1xuICBwcml2YXRlIF93aWRnZXRzOiB7IFt0eXBlOiBzdHJpbmddOiBXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT4gfSA9IHt9O1xuXG4gIHByaXZhdGUgZGVmYXVsdFdpZGdldDogV2lkZ2V0PEZvcm1Qcm9wZXJ0eSwgU0ZVSVNjaGVtYUl0ZW0+O1xuXG4gIGdldCB3aWRnZXRzKCkge1xuICAgIHJldHVybiB0aGlzLl93aWRnZXRzO1xuICB9XG5cbiAgc2V0RGVmYXVsdCh3aWRnZXQ6IGFueSkge1xuICAgIHRoaXMuZGVmYXVsdFdpZGdldCA9IHdpZGdldDtcbiAgfVxuXG4gIHJlZ2lzdGVyKHR5cGU6IHN0cmluZywgd2lkZ2V0OiBhbnkpIHtcbiAgICB0aGlzLl93aWRnZXRzW3R5cGVdID0gd2lkZ2V0O1xuICB9XG5cbiAgaGFzKHR5cGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLl93aWRnZXRzLmhhc093blByb3BlcnR5KHR5cGUpO1xuICB9XG5cbiAgZ2V0VHlwZSh0eXBlOiBzdHJpbmcpOiBXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT4ge1xuICAgIGlmICh0aGlzLmhhcyh0eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dpZGdldHNbdHlwZV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRlZmF1bHRXaWRnZXQ7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdpZGdldEZhY3Rvcnkge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeSwgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7fVxuXG4gIGNyZWF0ZVdpZGdldChjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHR5cGU6IHN0cmluZyk6IENvbXBvbmVudFJlZjxXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT4+IHtcbiAgICBpZiAoIXRoaXMucmVnaXN0cnkuaGFzKHR5cGUpKSB7XG4gICAgICBjb25zb2xlLndhcm4oYE5vIHdpZGdldCBmb3IgdHlwZSBcIiR7dHlwZX1cImApO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvbmVudENsYXNzID0gdGhpcy5yZWdpc3RyeS5nZXRUeXBlKHR5cGUpIGFzIGFueTtcbiAgICBjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT4+KGNvbXBvbmVudENsYXNzKTtcbiAgICByZXR1cm4gY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcbiAgfVxufVxuIl19