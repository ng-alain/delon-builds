/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2Z1bGwtY29udGVudC8iLCJzb3VyY2VzIjpbImZ1bGwtY29udGVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUV2QztJQUFBO1FBRVUsWUFBTyxHQUFHLElBQUksZUFBZSxDQUFpQixJQUFJLENBQUMsQ0FBQztLQVU3RDtJQVJDLGdCQUFnQjs7Ozs7SUFDaEIsbUNBQU07Ozs7SUFBTjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxzQkFBSSxzQ0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7OztPQUFBOztnQkFYRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7NkJBSmxDO0NBZ0JDLEFBWkQsSUFZQztTQVhZLGtCQUFrQjs7Ozs7O0lBQzdCLHFDQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgRnVsbENvbnRlbnRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuIHwgbnVsbD4obnVsbCk7XG5cbiAgLyoqIOWIh+aNouWFqOWxj+W3peS9nOWMuueKtuaAgSAqL1xuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5fY2hhbmdlLm5leHQodHJ1ZSk7XG4gIH1cblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlLnBpcGUoc2hhcmUoKSk7XG4gIH1cbn1cbiJdfQ==