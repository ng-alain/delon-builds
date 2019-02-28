/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Injectable, } from '@angular/core';
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
    /**
     * @type {?}
     * @private
     */
    WidgetRegistry.prototype.widgets;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vZm9ybS8iLCJzb3VyY2VzIjpbInNyYy93aWRnZXQuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHdCQUF3QixFQUV4QixVQUFVLEdBRVgsTUFBTSxlQUFlLENBQUM7QUFJdkI7SUFBQTtRQUNVLFlBQU8sR0FBNkMsRUFBRSxDQUFDO0lBc0JqRSxDQUFDOzs7OztJQWxCQyxtQ0FBVTs7OztJQUFWLFVBQVcsTUFBVztRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCxpQ0FBUTs7Ozs7SUFBUixVQUFTLElBQVksRUFBRSxNQUFXO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsNEJBQUc7Ozs7SUFBSCxVQUFJLElBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7O0lBRUQsZ0NBQU87Ozs7SUFBUCxVQUFRLElBQVk7UUFDbEIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjtRQUNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDOzs7Ozs7O0lBdEJDLGlDQUErRDs7Ozs7SUFFL0QsdUNBQTRDOztBQXNCOUM7SUFFRSx1QkFBb0IsUUFBd0IsRUFBVSxRQUFrQztRQUFwRSxhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQTBCO0lBQUcsQ0FBQzs7Ozs7O0lBRTVGLG9DQUFZOzs7OztJQUFaLFVBQWEsU0FBMkIsRUFBRSxJQUFZO1FBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUF1QixJQUFJLE9BQUcsQ0FBQyxDQUFDO1NBQzlDOztZQUVLLGNBQWMsR0FBRyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBTzs7WUFDbkQsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FDNUQsY0FBYyxDQUNmO1FBQ0QsT0FBTyxTQUFTLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBZEYsVUFBVTs7OztnQkFFcUIsY0FBYztnQkFuQzVDLHdCQUF3Qjs7SUFnRDFCLG9CQUFDO0NBQUEsQUFmRCxJQWVDO1NBZFksYUFBYTs7Ozs7O0lBQ1osaUNBQWdDOzs7OztJQUFFLGlDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBJbmplY3RhYmxlLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuL3dpZGdldCc7XG5cbmV4cG9ydCBjbGFzcyBXaWRnZXRSZWdpc3RyeSB7XG4gIHByaXZhdGUgd2lkZ2V0czogeyBbdHlwZTogc3RyaW5nXTogV2lkZ2V0PEZvcm1Qcm9wZXJ0eT4gfSA9IHt9O1xuXG4gIHByaXZhdGUgZGVmYXVsdFdpZGdldDogV2lkZ2V0PEZvcm1Qcm9wZXJ0eT47XG5cbiAgc2V0RGVmYXVsdCh3aWRnZXQ6IGFueSkge1xuICAgIHRoaXMuZGVmYXVsdFdpZGdldCA9IHdpZGdldDtcbiAgfVxuXG4gIHJlZ2lzdGVyKHR5cGU6IHN0cmluZywgd2lkZ2V0OiBhbnkpIHtcbiAgICB0aGlzLndpZGdldHNbdHlwZV0gPSB3aWRnZXQ7XG4gIH1cblxuICBoYXModHlwZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkZ2V0cy5oYXNPd25Qcm9wZXJ0eSh0eXBlKTtcbiAgfVxuXG4gIGdldFR5cGUodHlwZTogc3RyaW5nKTogV2lkZ2V0PEZvcm1Qcm9wZXJ0eT4ge1xuICAgIGlmICh0aGlzLmhhcyh0eXBlKSkge1xuICAgICAgcmV0dXJuIHRoaXMud2lkZ2V0c1t0eXBlXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFdpZGdldDtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2lkZ2V0RmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVnaXN0cnk6IFdpZGdldFJlZ2lzdHJ5LCBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHt9XG5cbiAgY3JlYXRlV2lkZ2V0KGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZiwgdHlwZTogc3RyaW5nKTogQ29tcG9uZW50UmVmPFdpZGdldDxGb3JtUHJvcGVydHk+PiB7XG4gICAgaWYgKCF0aGlzLnJlZ2lzdHJ5Lmhhcyh0eXBlKSkge1xuICAgICAgY29uc29sZS53YXJuKGBObyB3aWRnZXQgZm9yIHR5cGUgXCIke3R5cGV9XCJgKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb25lbnRDbGFzcyA9IHRoaXMucmVnaXN0cnkuZ2V0VHlwZSh0eXBlKSBhcyBhbnk7XG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8V2lkZ2V0PEZvcm1Qcm9wZXJ0eT4+KFxuICAgICAgY29tcG9uZW50Q2xhc3MsXG4gICAgKTtcbiAgICByZXR1cm4gY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnRGYWN0b3J5KTtcbiAgfVxufVxuIl19