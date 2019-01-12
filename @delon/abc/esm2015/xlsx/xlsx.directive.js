/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { XlsxService } from './xlsx.service';
export class XlsxDirective {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * @return {?}
     */
    _click() {
        this.srv.export(this.data);
    }
}
XlsxDirective.decorators = [
    { type: Directive, args: [{
                selector: '[xlsx]',
                exportAs: 'xlsxDirective',
            },] }
];
/** @nocollapse */
XlsxDirective.ctorParameters = () => [
    { type: XlsxService }
];
XlsxDirective.propDecorators = {
    data: [{ type: Input, args: ['xlsx',] }],
    _click: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    XlsxDirective.prototype.data;
    /** @type {?} */
    XlsxDirective.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3hsc3gvIiwic291cmNlcyI6WyJ4bHN4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU83QyxNQUFNLE9BQU8sYUFBYTs7OztJQUd4QixZQUFvQixHQUFnQjtRQUFoQixRQUFHLEdBQUgsR0FBRyxDQUFhO0lBQUcsQ0FBQzs7OztJQUd4QyxNQUFNO1FBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFLGVBQWU7YUFDMUI7Ozs7WUFOUSxXQUFXOzs7bUJBUWpCLEtBQUssU0FBQyxNQUFNO3FCQUlaLFlBQVksU0FBQyxPQUFPOzs7O0lBSnJCLDZCQUF1Qzs7SUFFM0IsNEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBYbHN4U2VydmljZSB9IGZyb20gJy4veGxzeC5zZXJ2aWNlJztcbmltcG9ydCB7IFhsc3hFeHBvcnRPcHRpb25zIH0gZnJvbSAnLi94bHN4LnR5cGVzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3hsc3hdJyxcbiAgZXhwb3J0QXM6ICd4bHN4RGlyZWN0aXZlJyxcbn0pXG5leHBvcnQgY2xhc3MgWGxzeERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgneGxzeCcpIGRhdGE6IFhsc3hFeHBvcnRPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBYbHN4U2VydmljZSkge31cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIF9jbGljaygpIHtcbiAgICB0aGlzLnNydi5leHBvcnQodGhpcy5kYXRhKTtcbiAgfVxufVxuIl19