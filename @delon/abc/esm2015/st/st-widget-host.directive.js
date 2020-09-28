/**
 * @fileoverview added by tsickle
 * Generated from: st-widget-host.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Directive, Input, ViewContainerRef } from '@angular/core';
import { STWidgetRegistry } from './st-widget';
export class STWidgetHostDirective {
    /**
     * @param {?} stWidgetRegistry
     * @param {?} viewContainerRef
     * @param {?} componentFactoryResolver
     */
    constructor(stWidgetRegistry, viewContainerRef, componentFactoryResolver) {
        this.stWidgetRegistry = stWidgetRegistry;
        this.viewContainerRef = viewContainerRef;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const widget = (/** @type {?} */ (this.column.widget));
        /** @type {?} */
        const componentType = this.stWidgetRegistry.get(widget.type);
        /** @type {?} */
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory((/** @type {?} */ (componentType)));
        this.viewContainerRef.clear();
        /** @type {?} */
        const componentRef = this.viewContainerRef.createComponent(componentFactory);
        const { record, column } = this;
        /** @type {?} */
        const data = widget.params ? widget.params({ record, column }) : { record };
        Object.keys(data).forEach((/**
         * @param {?} key
         * @return {?}
         */
        key => {
            ((/** @type {?} */ (componentRef.instance)))[key] = data[key];
        }));
    }
}
STWidgetHostDirective.decorators = [
    { type: Directive, args: [{ selector: '[st-widget-host]' },] }
];
/** @nocollapse */
STWidgetHostDirective.ctorParameters = () => [
    { type: STWidgetRegistry },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver }
];
STWidgetHostDirective.propDecorators = {
    record: [{ type: Input }],
    column: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtd2lkZ2V0LWhvc3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3ZzdHMvd29yay8xL3MvcGFja2FnZXMvYWJjL3N0LyIsInNvdXJjZXMiOlsic3Qtd2lkZ2V0LWhvc3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSS9DLE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQUloQyxZQUNVLGdCQUFrQyxFQUNsQyxnQkFBa0MsRUFDbEMsd0JBQWtEO1FBRmxELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQ3pELENBQUM7Ozs7SUFFSixRQUFROztjQUNBLE1BQU0sR0FBRyxtQkFBQSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBQzs7Y0FDNUIsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzs7Y0FDdEQsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLG1CQUFBLGFBQWEsRUFBTyxDQUFDO1FBRXBHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Y0FDeEIsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUM7Y0FDdEUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSTs7Y0FDekIsSUFBSSxHQUEyQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFO1FBQ25HLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzlCLENBQUMsbUJBQUEsWUFBWSxDQUFDLFFBQVEsRUFBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBdkJGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRTs7OztZQUhsQyxnQkFBZ0I7WUFEb0MsZ0JBQWdCO1lBQXBFLHdCQUF3Qjs7O3FCQU05QixLQUFLO3FCQUNMLEtBQUs7Ozs7SUFETix1Q0FBd0I7O0lBQ3hCLHVDQUEwQjs7Ozs7SUFHeEIsaURBQTBDOzs7OztJQUMxQyxpREFBMEM7Ozs7O0lBQzFDLHlEQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTVFdpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnLi9zdC13aWRnZXQnO1xuaW1wb3J0IHsgU1RDb2x1bW4sIFNURGF0YSB9IGZyb20gJy4vc3QuaW50ZXJmYWNlcyc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tzdC13aWRnZXQtaG9zdF0nIH0pXG5leHBvcnQgY2xhc3MgU1RXaWRnZXRIb3N0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcmVjb3JkOiBTVERhdGE7XG4gIEBJbnB1dCgpIGNvbHVtbjogU1RDb2x1bW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdFdpZGdldFJlZ2lzdHJ5OiBTVFdpZGdldFJlZ2lzdHJ5LFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qgd2lkZ2V0ID0gdGhpcy5jb2x1bW4ud2lkZ2V0ITtcbiAgICBjb25zdCBjb21wb25lbnRUeXBlID0gdGhpcy5zdFdpZGdldFJlZ2lzdHJ5LmdldCh3aWRnZXQudHlwZSk7XG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudFR5cGUgYXMgYW55KTtcblxuICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG4gICAgY29uc3QgeyByZWNvcmQsIGNvbHVtbiB9ID0gdGhpcztcbiAgICBjb25zdCBkYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0gd2lkZ2V0LnBhcmFtcyA/IHdpZGdldC5wYXJhbXMoeyByZWNvcmQsIGNvbHVtbiB9KSA6IHsgcmVjb3JkIH07XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgKGNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBhbnkpW2tleV0gPSBkYXRhW2tleV07XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==