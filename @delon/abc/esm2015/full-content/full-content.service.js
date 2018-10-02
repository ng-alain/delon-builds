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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2Z1bGwtY29udGVudC8iLCJzb3VyY2VzIjpbImZ1bGwtY29udGVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3ZDLE1BQU07O3VCQUNvQyxJQUFJLGVBQWUsQ0FBTSxJQUFJLENBQUM7Ozs7OztJQUd0RSxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDbkM7OztZQVhGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZ1bGxDb250ZW50U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfY2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcclxuXHJcbiAgLyoqIOWIh+aNouWFqOWxj+W3peS9nOWMuueKtuaAgSAqL1xyXG4gIHRvZ2dsZSgpIHtcclxuICAgIHRoaXMuX2NoYW5nZS5uZXh0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UucGlwZShzaGFyZSgpKTtcclxuICB9XHJcbn1cclxuIl19