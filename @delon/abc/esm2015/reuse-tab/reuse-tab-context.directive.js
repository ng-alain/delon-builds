/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9yZXVzZS10YWIvIiwic291cmNlcyI6WyJyZXVzZS10YWItY29udGV4dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQU1yRSxNQUFNOzs7O0lBR0osWUFBb0IsR0FBMkI7UUFBM0IsUUFBRyxHQUFILEdBQUcsQ0FBd0I7S0FBSTs7Ozs7SUFHbkQsYUFBYSxDQUFDLEtBQWlCO1FBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNqQixLQUFLO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2hCLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDekI7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjthQUNyQzs7OztZQUxRLHNCQUFzQjs7O21CQU81QixLQUFLLFNBQUMsd0JBQXdCOzRCQUk5QixZQUFZLFNBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmV1c2VJdGVtIH0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tyZXVzZS10YWItY29udGV4dC1tZW51XScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbnRleHREaXJlY3RpdmUge1xyXG4gIEBJbnB1dCgncmV1c2UtdGFiLWNvbnRleHQtbWVudScpIGl0ZW06IFJldXNlSXRlbTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IFJldXNlVGFiQ29udGV4dFNlcnZpY2UpIHt9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgWyckZXZlbnQnXSlcclxuICBvbkNvbnRleHRNZW51KGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnNydi5zaG93Lm5leHQoe1xyXG4gICAgICBldmVudCxcclxuICAgICAgaXRlbTogdGhpcy5pdGVtLFxyXG4gICAgfSk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==