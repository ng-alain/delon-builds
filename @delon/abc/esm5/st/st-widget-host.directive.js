/**
 * @fileoverview added by tsickle
 * Generated from: st-widget-host.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Directive, Input, ViewContainerRef } from '@angular/core';
import { STWidgetRegistry } from './st-widget';
var STWidgetHostDirective = /** @class */ (function () {
    function STWidgetHostDirective(stWidgetRegistry, viewContainerRef, componentFactoryResolver) {
        this.stWidgetRegistry = stWidgetRegistry;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * @return {?}
     */
    STWidgetHostDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var widget = (/** @type {?} */ (this.column.widget));
        /** @type {?} */
        var componentType = this.stWidgetRegistry.get(widget.type);
        /** @type {?} */
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory((/** @type {?} */ (componentType)));
        this.viewContainerRef.clear();
        /** @type {?} */
        var componentRef = this.viewContainerRef.createComponent(componentFactory);
        var _a = this, record = _a.record, column = _a.column;
        /** @type {?} */
        var data = widget.params ? widget.params({ record: record, column: column }) : { record: record };
        Object.keys(data).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            ((/** @type {?} */ (componentRef.instance)))[key] = data[key];
        }));
    };
    STWidgetHostDirective.decorators = [
        { type: Directive, args: [{ selector: '[st-widget-host]' },] }
    ];
    /** @nocollapse */
    STWidgetHostDirective.ctorParameters = function () { return [
        { type: STWidgetRegistry },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver }
    ]; };
    STWidgetHostDirective.propDecorators = {
        record: [{ type: Input }],
        column: [{ type: Input }]
    };
    return STWidgetHostDirective;
}());
export { STWidgetHostDirective };
if (false) {
    /** @type {?} */
    STWidgetHostDirective.prototype.record;
    /** @type {?} */
    STWidgetHostDirective.prototype.column;
    /**
     * @type {?}
     * @private
     */
    STWidgetHostDirective.prototype.stWidgetRegistry;
    /**
     * @type {?}
     * @private
     */
    STWidgetHostDirective.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    STWidgetHostDirective.prototype.componentFactoryResolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtd2lkZ2V0LWhvc3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zdC8iLCJzb3VyY2VzIjpbInN0LXdpZGdldC1ob3N0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUcvQztJQUtFLCtCQUNVLGdCQUFrQyxFQUNsQyxnQkFBa0MsRUFDbEMsd0JBQWtEO1FBRmxELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQ3pELENBQUM7Ozs7SUFFSix3Q0FBUTs7O0lBQVI7O1lBQ1EsTUFBTSxHQUFHLG1CQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFDOztZQUM1QixhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDOztZQUN0RCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsbUJBQUEsYUFBYSxFQUFPLENBQUM7UUFFcEcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDOztZQUN4QixZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN0RSxJQUFBLFNBQXlCLEVBQXZCLGtCQUFNLEVBQUUsa0JBQWU7O1lBQ3pCLElBQUksR0FBMkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sUUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLFFBQUEsRUFBRTtRQUNuRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEdBQUc7WUFDM0IsQ0FBQyxtQkFBQSxZQUFZLENBQUMsUUFBUSxFQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkF2QkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFOzs7O2dCQUhsQyxnQkFBZ0I7Z0JBRG9DLGdCQUFnQjtnQkFBcEUsd0JBQXdCOzs7eUJBTTlCLEtBQUs7eUJBQ0wsS0FBSzs7SUFxQlIsNEJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXZCWSxxQkFBcUI7OztJQUNoQyx1Q0FBd0I7O0lBQ3hCLHVDQUEwQjs7Ozs7SUFHeEIsaURBQTBDOzs7OztJQUMxQyxpREFBMEM7Ozs7O0lBQzFDLHlEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTVFdpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnLi9zdC13aWRnZXQnO1xuaW1wb3J0IHsgU1RDb2x1bW4sIFNURGF0YSB9IGZyb20gJy4vc3QuaW50ZXJmYWNlcyc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tzdC13aWRnZXQtaG9zdF0nIH0pXG5leHBvcnQgY2xhc3MgU1RXaWRnZXRIb3N0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcmVjb3JkOiBTVERhdGE7XG4gIEBJbnB1dCgpIGNvbHVtbjogU1RDb2x1bW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdFdpZGdldFJlZ2lzdHJ5OiBTVFdpZGdldFJlZ2lzdHJ5LFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgd2lkZ2V0ID0gdGhpcy5jb2x1bW4ud2lkZ2V0ITtcbiAgICBjb25zdCBjb21wb25lbnRUeXBlID0gdGhpcy5zdFdpZGdldFJlZ2lzdHJ5LmdldCh3aWRnZXQudHlwZSk7XG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudFR5cGUgYXMgYW55KTtcblxuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG4gICAgY29uc3QgeyByZWNvcmQsIGNvbHVtbiB9ID0gdGhpcztcbiAgICBjb25zdCBkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0gd2lkZ2V0LnBhcmFtcyA/IHdpZGdldC5wYXJhbXMoeyByZWNvcmQsIGNvbHVtbiB9KSA6IHsgcmVjb3JkIH07XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgKGNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBhbnkpW2tleV0gPSBkYXRhW2tleV07XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==