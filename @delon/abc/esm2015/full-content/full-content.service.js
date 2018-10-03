/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
export class FullContentService {
    constructor() {
        this._change = new BehaviorSubject(null);
    }
    /**
     * 切换全屏工作区状态
     * @return {?}
     */
    toggle() {
        this._change.next(true);
    }
    /**
     * @return {?}
     */
    get change() {
        return this._change.pipe(share());
    }
}
FullContentService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    FullContentService.prototype._change;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2Z1bGwtY29udGVudC8iLCJzb3VyY2VzIjpbImZ1bGwtY29udGVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3ZDLE1BQU07O3VCQUNvQyxJQUFJLGVBQWUsQ0FBTSxJQUFJLENBQUM7Ozs7OztJQUd0RSxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDbkM7OztZQVhGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRnVsbENvbnRlbnRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcblxuICAvKiog5YiH5o2i5YWo5bGP5bel5L2c5Yy654q25oCBICovXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLl9jaGFuZ2UubmV4dCh0cnVlKTtcbiAgfVxuXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZS5waXBlKHNoYXJlKCkpO1xuICB9XG59XG4iXX0=