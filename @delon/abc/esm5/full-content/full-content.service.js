/**
 * @fileoverview added by tsickle
 * Generated from: full-content.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
import * as i0 from "@angular/core";
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ FullContentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FullContentService_Factory() { return new FullContentService(); }, token: FullContentService, providedIn: "root" });
    return FullContentService;
}());
export { FullContentService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FullContentService.prototype._change;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2Z1bGwtY29udGVudC8iLCJzb3VyY2VzIjpbImZ1bGwtY29udGVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFdkM7SUFBQTtRQUVVLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBaUIsSUFBSSxDQUFDLENBQUM7S0FVN0Q7SUFSQyxnQkFBZ0I7Ozs7O0lBQ2hCLG1DQUFNOzs7O0lBQU47UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsc0JBQUksc0NBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTs7Z0JBWEYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OzZCQUpsQztDQWdCQyxBQVpELElBWUM7U0FYWSxrQkFBa0I7Ozs7OztJQUM3QixxQ0FBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEZ1bGxDb250ZW50U2VydmljZSB7XG4gIHByaXZhdGUgX2NoYW5nZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbiB8IG51bGw+KG51bGwpO1xuXG4gIC8qKiDliIfmjaLlhajlsY/lt6XkvZzljLrnirbmgIEgKi9cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuX2NoYW5nZS5uZXh0KHRydWUpO1xuICB9XG5cbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuX2NoYW5nZS5waXBlKHNoYXJlKCkpO1xuICB9XG59XG4iXX0=