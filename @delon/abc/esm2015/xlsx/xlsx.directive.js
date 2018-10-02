/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    { type: Directive, args: [{ selector: '[xlsx]' },] }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGxzeC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3hsc3gvIiwic291cmNlcyI6WyJ4bHN4LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUk3QyxNQUFNOzs7O0lBR0osWUFBb0IsR0FBZ0I7UUFBaEIsUUFBRyxHQUFILEdBQUcsQ0FBYTtLQUFJOzs7O0lBR3hDLE1BQU07UUFDSixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDNUI7OztZQVRGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7Ozs7WUFIeEIsV0FBVzs7O21CQUtqQixLQUFLLFNBQUMsTUFBTTtxQkFJWixZQUFZLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBYbHN4U2VydmljZSB9IGZyb20gJy4veGxzeC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgWGxzeEV4cG9ydE9wdGlvbnMgfSBmcm9tICcuL3hsc3gudHlwZXMnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW3hsc3hdJyB9KVxyXG5leHBvcnQgY2xhc3MgWGxzeERpcmVjdGl2ZSB7XHJcbiAgQElucHV0KCd4bHN4JykgZGF0YTogWGxzeEV4cG9ydE9wdGlvbnM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBYbHN4U2VydmljZSkge31cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIF9jbGljaygpIHtcclxuICAgIHRoaXMuc3J2LmV4cG9ydCh0aGlzLmRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=