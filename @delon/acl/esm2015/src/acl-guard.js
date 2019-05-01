/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, } from '@angular/router';
import { of, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DelonACLConfig } from './acl.config';
import { ACLService } from './acl.service';
import * as i0 from "@angular/core";
import * as i1 from "./acl.service";
import * as i2 from "@angular/router";
import * as i3 from "./acl.config";
export class ACLGuard {
    /**
     * @param {?} srv
     * @param {?} router
     * @param {?} options
     */
    constructor(srv, router, options) {
        this.srv = srv;
        this.router = router;
        this.options = options;
    }
    /**
     * @private
     * @param {?} guard
     * @return {?}
     */
    process(guard) {
        return (guard && guard instanceof Observable
            ? guard
            : of(typeof guard !== 'undefined' && guard !== null ? ((/** @type {?} */ (guard))) : null)).pipe(map((/**
         * @param {?} v
         * @return {?}
         */
        v => this.srv.can(v))), tap((/**
         * @param {?} v
         * @return {?}
         */
        v => {
            if (v)
                return;
            this.router.navigateByUrl((/** @type {?} */ (this.options.guard_url)));
        })));
    }
    // lazy loading
    /**
     * @param {?} route
     * @return {?}
     */
    canLoad(route) {
        return this.process((route.data && route.data.guard) || null);
    }
    // all children route
    /**
     * @param {?} childRoute
     * @param {?} state
     * @return {?}
     */
    canActivateChild(childRoute, state) {
        return this.canActivate(childRoute, state);
    }
    // route
    /**
     * @param {?} route
     * @param {?} _state
     * @return {?}
     */
    canActivate(route, _state) {
        return this.process((route.data && route.data.guard) || null);
    }
}
ACLGuard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ACLGuard.ctorParameters = () => [
    { type: ACLService },
    { type: Router },
    { type: DelonACLConfig }
];
/** @nocollapse */ ACLGuard.ngInjectableDef = i0.defineInjectable({ factory: function ACLGuard_Factory() { return new ACLGuard(i0.inject(i1.ACLService), i0.inject(i2.Router), i0.inject(i3.DelonACLConfig)); }, token: ACLGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ACLGuard.prototype.srv;
    /**
     * @type {?}
     * @private
     */
    ACLGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    ACLGuard.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FjbC8iLCJzb3VyY2VzIjpbInNyYy9hY2wtZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQU1MLE1BQU0sR0FFUCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQUkzQyxNQUFNLE9BQU8sUUFBUTs7Ozs7O0lBQ25CLFlBQW9CLEdBQWUsRUFBVSxNQUFjLEVBQVUsT0FBdUI7UUFBeEUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtJQUFHLENBQUM7Ozs7OztJQUV4RixPQUFPLENBQUMsS0FBMEM7UUFDeEQsT0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLFlBQVksVUFBVTtZQUMxQyxDQUFDLENBQUMsS0FBSztZQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxLQUFLLEtBQUssV0FBVyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsS0FBSyxFQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQ3BGLENBQUMsSUFBSSxDQUNKLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQ3pCLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUNOLElBQUksQ0FBQztnQkFBRSxPQUFPO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsbUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFHRCxPQUFPLENBQUMsS0FBWTtRQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7OztJQUVELGdCQUFnQixDQUFDLFVBQWtDLEVBQUUsS0FBMEI7UUFDN0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQTZCLEVBQUUsTUFBa0M7UUFDM0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7OztZQTVCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBSHpCLFVBQVU7WUFQakIsTUFBTTtZQU1DLGNBQWM7Ozs7Ozs7O0lBTVQsdUJBQXVCOzs7OztJQUFFLDBCQUFzQjs7Ozs7SUFBRSwyQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBDYW5BY3RpdmF0ZSxcbiAgQ2FuQWN0aXZhdGVDaGlsZCxcbiAgQ2FuTG9hZCxcbiAgUm91dGUsXG4gIFJvdXRlcixcbiAgUm91dGVyU3RhdGVTbmFwc2hvdCxcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGVsb25BQ0xDb25maWcgfSBmcm9tICcuL2FjbC5jb25maWcnO1xuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJy4vYWNsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQUNMQ2FuVHlwZSB9IGZyb20gJy4vYWNsLnR5cGUnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFDTEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogQUNMU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBvcHRpb25zOiBEZWxvbkFDTENvbmZpZykge31cblxuICBwcml2YXRlIHByb2Nlc3MoZ3VhcmQ6IEFDTENhblR5cGUgfCBPYnNlcnZhYmxlPEFDTENhblR5cGU+KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIChndWFyZCAmJiBndWFyZCBpbnN0YW5jZW9mIE9ic2VydmFibGVcbiAgICAgID8gZ3VhcmRcbiAgICAgIDogb2YodHlwZW9mIGd1YXJkICE9PSAndW5kZWZpbmVkJyAmJiBndWFyZCAhPT0gbnVsbCA/IChndWFyZCBhcyBBQ0xDYW5UeXBlKSA6IG51bGwpXG4gICAgKS5waXBlKFxuICAgICAgbWFwKHYgPT4gdGhpcy5zcnYuY2FuKHYpKSxcbiAgICAgIHRhcCh2ID0+IHtcbiAgICAgICAgaWYgKHYpIHJldHVybjtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLm9wdGlvbnMuZ3VhcmRfdXJsISk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLy8gbGF6eSBsb2FkaW5nXG4gIGNhbkxvYWQocm91dGU6IFJvdXRlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzcygocm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhLmd1YXJkKSB8fCBudWxsKTtcbiAgfVxuICAvLyBhbGwgY2hpbGRyZW4gcm91dGVcbiAgY2FuQWN0aXZhdGVDaGlsZChjaGlsZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmNhbkFjdGl2YXRlKGNoaWxkUm91dGUsIHN0YXRlKTtcbiAgfVxuICAvLyByb3V0ZVxuICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgX3N0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90IHwgbnVsbCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKHJvdXRlLmRhdGEgJiYgcm91dGUuZGF0YS5ndWFyZCkgfHwgbnVsbCk7XG4gIH1cbn1cbiJdfQ==