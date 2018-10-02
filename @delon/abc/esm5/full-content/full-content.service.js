/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
var FullContentService = /** @class */ (function () {
    function FullContentService() {
        this._change = new BehaviorSubject(null);
    }
    /** 切换全屏工作区状态 */
    /**
     * 切换全屏工作区状态
     * @return {?}
     */
    FullContentService.prototype.toggle = /**
     * 切换全屏工作区状态
     * @return {?}
     */
    function () {
        this._change.next(true);
    };
    Object.defineProperty(FullContentService.prototype, "change", {
        get: /**
         * @return {?}
         */
        function () {
            return this._change.pipe(share());
        },
        enumerable: true,
        configurable: true
    });
    FullContentService.decorators = [
        { type: Injectable }
    ];
    return FullContentService;
}());
export { FullContentService };
if (false) {
    /** @type {?} */
    FullContentService.prototype._change;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2Z1bGwtY29udGVudC8iLCJzb3VyY2VzIjpbImZ1bGwtY29udGVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7dUJBSUcsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDOztJQUV0RSxnQkFBZ0I7Ozs7O0lBQ2hCLG1DQUFNOzs7O0lBQU47UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6QjtJQUVELHNCQUFJLHNDQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDbkM7OztPQUFBOztnQkFYRixVQUFVOzs2QkFKWDs7U0FLYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZ1bGxDb250ZW50U2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfY2hhbmdlOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcclxuXHJcbiAgLyoqIOWIh+aNouWFqOWxj+W3peS9nOWMuueKtuaAgSAqL1xyXG4gIHRvZ2dsZSgpIHtcclxuICAgIHRoaXMuX2NoYW5nZS5uZXh0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UucGlwZShzaGFyZSgpKTtcclxuICB9XHJcbn1cclxuIl19