/**
 * @fileoverview added by tsickle
 * Generated from: full-content.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
import * as i0 from "@angular/core";
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
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ FullContentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FullContentService_Factory() { return new FullContentService(); }, token: FullContentService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    FullContentService.prototype._change;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvZnVsbC1jb250ZW50L2Z1bGwtY29udGVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHdkMsTUFBTSxPQUFPLGtCQUFrQjtJQUQvQjtRQUVVLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBaUIsSUFBSSxDQUFDLENBQUM7S0FVN0Q7Ozs7O0lBUEMsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBWEYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs7Ozs7SUFFaEMscUNBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBGdWxsQ29udGVudFNlcnZpY2Uge1xuICBwcml2YXRlIF9jaGFuZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4gfCBudWxsPihudWxsKTtcblxuICAvKiog5YiH5o2i5YWo5bGP5bel5L2c5Yy654q25oCBICovXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLl9jaGFuZ2UubmV4dCh0cnVlKTtcbiAgfVxuXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLl9jaGFuZ2UucGlwZShzaGFyZSgpKTtcbiAgfVxufVxuIl19