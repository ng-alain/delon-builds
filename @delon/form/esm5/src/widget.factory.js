/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, ComponentFactoryResolver, } from '@angular/core';
var WidgetRegistry = /** @class */ (function () {
    function WidgetRegistry() {
        this.widgets = {};
    }
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
        this.widgets[type] = widget;
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
        return this.widgets.hasOwnProperty(type);
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
            return this.widgets[type];
        }
        return this.defaultWidget;
    };
    return WidgetRegistry;
}());
export { WidgetRegistry };
if (false) {
    /** @type {?} */
    WidgetRegistry.prototype.widgets;
    /** @type {?} */
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
        var componentClass = this.registry.getType(type);
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
    /** @type {?} */
    WidgetFactory.prototype.registry;
    /** @type {?} */
    WidgetFactory.prototype.resolver;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXQuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFVBQVUsRUFDVix3QkFBd0IsR0FHekIsTUFBTSxlQUFlLENBQUM7QUFHdkIsSUFBQTs7dUJBQzZDLEVBQUU7Ozs7OztJQUk3QyxtQ0FBVTs7OztJQUFWLFVBQVcsTUFBVztRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztLQUM3Qjs7Ozs7O0lBRUQsaUNBQVE7Ozs7O0lBQVIsVUFBUyxJQUFZLEVBQUUsTUFBVztRQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztLQUM3Qjs7Ozs7SUFFRCw0QkFBRzs7OztJQUFILFVBQUksSUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUM7Ozs7O0lBRUQsZ0NBQU87Ozs7SUFBUCxVQUFRLElBQVk7UUFDbEIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjtRQUNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUMzQjt5QkE5Qkg7SUErQkMsQ0FBQTtBQXZCRCwwQkF1QkM7Ozs7Ozs7O0lBSUMsdUJBQ1UsVUFDQTtRQURBLGFBQVEsR0FBUixRQUFRO1FBQ1IsYUFBUSxHQUFSLFFBQVE7S0FDZDs7Ozs7O0lBRUosb0NBQVk7Ozs7O0lBQVosVUFDRSxTQUEyQixFQUMzQixJQUFZO1FBRVosSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQXVCLElBQUksT0FBRyxDQUFDLENBQUM7U0FDOUM7O1FBRUQsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7O1FBQ25ELElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FDNUQsY0FBYyxDQUNmLENBQUM7UUFDRixPQUFPLFNBQVMsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztLQUNwRDs7Z0JBcEJGLFVBQVU7Ozs7Z0JBR1csY0FBYztnQkFsQ2xDLHdCQUF3Qjs7d0JBRjFCOztTQWtDYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBJbmplY3RhYmxlLFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIENvbXBvbmVudFJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdpZGdldFJlZ2lzdHJ5IHtcclxuICBwcml2YXRlIHdpZGdldHM6IHsgW3R5cGU6IHN0cmluZ106IGFueSB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgZGVmYXVsdFdpZGdldDogYW55O1xyXG5cclxuICBzZXREZWZhdWx0KHdpZGdldDogYW55KSB7XHJcbiAgICB0aGlzLmRlZmF1bHRXaWRnZXQgPSB3aWRnZXQ7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlcih0eXBlOiBzdHJpbmcsIHdpZGdldDogYW55KSB7XHJcbiAgICB0aGlzLndpZGdldHNbdHlwZV0gPSB3aWRnZXQ7XHJcbiAgfVxyXG5cclxuICBoYXModHlwZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpcy53aWRnZXRzLmhhc093blByb3BlcnR5KHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VHlwZSh0eXBlOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgaWYgKHRoaXMuaGFzKHR5cGUpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLndpZGdldHNbdHlwZV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5kZWZhdWx0V2lkZ2V0O1xyXG4gIH1cclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0RmFjdG9yeSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeSxcclxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICApIHt9XHJcblxyXG4gIGNyZWF0ZVdpZGdldChcclxuICAgIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHR5cGU6IHN0cmluZyxcclxuICApOiBDb21wb25lbnRSZWY8V2lkZ2V0PGFueT4+IHtcclxuICAgIGlmICghdGhpcy5yZWdpc3RyeS5oYXModHlwZSkpIHtcclxuICAgICAgY29uc29sZS53YXJuKGBObyB3aWRnZXQgZm9yIHR5cGUgXCIke3R5cGV9XCJgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb21wb25lbnRDbGFzcyA9IHRoaXMucmVnaXN0cnkuZ2V0VHlwZSh0eXBlKTtcclxuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PFdpZGdldDxhbnk+PihcclxuICAgICAgY29tcG9uZW50Q2xhc3MsXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==