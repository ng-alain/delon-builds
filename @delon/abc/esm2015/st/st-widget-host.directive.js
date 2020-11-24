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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Qtd2lkZ2V0LWhvc3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC8iLCJzb3VyY2VzIjpbInN0LXdpZGdldC1ob3N0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUkvQyxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUFJaEMsWUFDVSxnQkFBa0MsRUFDbEMsZ0JBQWtDLEVBQ2xDLHdCQUFrRDtRQUZsRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUN6RCxDQUFDOzs7O0lBRUosUUFBUTs7Y0FDQSxNQUFNLEdBQUcsbUJBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUM7O2NBQzVCLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7O2NBQ3RELGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxtQkFBQSxhQUFhLEVBQU8sQ0FBQztRQUVwRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7O2NBQ3hCLFlBQVksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDO2NBQ3RFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUk7O2NBQ3pCLElBQUksR0FBMkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRTtRQUNuRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxHQUFHLENBQUMsRUFBRTtZQUM5QixDQUFDLG1CQUFBLFlBQVksQ0FBQyxRQUFRLEVBQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQXZCRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUU7Ozs7WUFIbEMsZ0JBQWdCO1lBRG9DLGdCQUFnQjtZQUFwRSx3QkFBd0I7OztxQkFNOUIsS0FBSztxQkFDTCxLQUFLOzs7O0lBRE4sdUNBQXdCOztJQUN4Qix1Q0FBMEI7Ozs7O0lBR3hCLGlEQUEwQzs7Ozs7SUFDMUMsaURBQTBDOzs7OztJQUMxQyx5REFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU1RXaWRnZXRSZWdpc3RyeSB9IGZyb20gJy4vc3Qtd2lkZ2V0JztcbmltcG9ydCB7IFNUQ29sdW1uLCBTVERhdGEgfSBmcm9tICcuL3N0LmludGVyZmFjZXMnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbc3Qtd2lkZ2V0LWhvc3RdJyB9KVxuZXhwb3J0IGNsYXNzIFNUV2lkZ2V0SG9zdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHJlY29yZDogU1REYXRhO1xuICBASW5wdXQoKSBjb2x1bW46IFNUQ29sdW1uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RXaWRnZXRSZWdpc3RyeTogU1RXaWRnZXRSZWdpc3RyeSxcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHdpZGdldCA9IHRoaXMuY29sdW1uLndpZGdldCE7XG4gICAgY29uc3QgY29tcG9uZW50VHlwZSA9IHRoaXMuc3RXaWRnZXRSZWdpc3RyeS5nZXQod2lkZ2V0LnR5cGUpO1xuICAgIGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShjb21wb25lbnRUeXBlIGFzIGFueSk7XG5cbiAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICAgIGNvbnN0IHsgcmVjb3JkLCBjb2x1bW4gfSA9IHRoaXM7XG4gICAgY29uc3QgZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHdpZGdldC5wYXJhbXMgPyB3aWRnZXQucGFyYW1zKHsgcmVjb3JkLCBjb2x1bW4gfSkgOiB7IHJlY29yZCB9O1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIChjb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgYW55KVtrZXldID0gZGF0YVtrZXldO1xuICAgIH0pO1xuICB9XG59XG4iXX0=