/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { ReuseTabContextService } from './reuse-tab-context.service';
export class ReuseTabContextDirective {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onContextMenu(event) {
        this.srv.show.next({
            event,
            item: this.item,
        });
        event.preventDefault();
        event.stopPropagation();
    }
}
ReuseTabContextDirective.decorators = [
    { type: Directive, args: [{
                selector: '[reuse-tab-context-menu]',
            },] }
];
/** @nocollapse */
ReuseTabContextDirective.ctorParameters = () => [
    { type: ReuseTabContextService }
];
ReuseTabContextDirective.propDecorators = {
    item: [{ type: Input, args: ['reuse-tab-context-menu',] }],
    onContextMenu: [{ type: HostListener, args: ['contextmenu', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    ReuseTabContextDirective.prototype.item;
    /** @type {?} */
    ReuseTabContextDirective.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9yZXVzZS10YWIvIiwic291cmNlcyI6WyJyZXVzZS10YWItY29udGV4dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQU1yRSxNQUFNLE9BQU8sd0JBQXdCOzs7O0lBR25DLFlBQW9CLEdBQTJCO1FBQTNCLFFBQUcsR0FBSCxHQUFHLENBQXdCO0lBQUcsQ0FBQzs7Ozs7SUFHbkQsYUFBYSxDQUFDLEtBQWlCO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNqQixLQUFLO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2hCLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2FBQ3JDOzs7O1lBTFEsc0JBQXNCOzs7bUJBTzVCLEtBQUssU0FBQyx3QkFBd0I7NEJBSTlCLFlBQVksU0FBQyxhQUFhLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFKdkMsd0NBQWlEOztJQUVyQyx1Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0U2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuc2VydmljZSc7XG5pbXBvcnQgeyBSZXVzZUl0ZW0gfSBmcm9tICcuL3JldXNlLXRhYi5pbnRlcmZhY2VzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3JldXNlLXRhYi1jb250ZXh0LW1lbnVdJyxcbn0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb250ZXh0RGlyZWN0aXZlIHtcbiAgQElucHV0KCdyZXVzZS10YWItY29udGV4dC1tZW51JykgaXRlbTogUmV1c2VJdGVtO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgWyckZXZlbnQnXSlcbiAgb25Db250ZXh0TWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuc3J2LnNob3cubmV4dCh7XG4gICAgICBldmVudCxcbiAgICAgIGl0ZW06IHRoaXMuaXRlbSxcbiAgICB9KTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iXX0=