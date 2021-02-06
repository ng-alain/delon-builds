import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ACLService } from './acl.service';
import * as i0 from "@angular/core";
import * as i1 from "./acl.service";
import * as i2 from "@angular/router";
/**
 * Routing guard prevent unauthorized users visit the page, [ACL Document](https://ng-alain.com/acl).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ ACLGuard ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export class ACLGuard {
    constructor(srv, router) {
        this.srv = srv;
        this.router = router;
    }
    process(data) {
        data = Object.assign({ guard: null, guard_url: this.srv.guard_url }, data);
        const guard = data.guard;
        return (guard && guard instanceof Observable ? guard : of(guard != null ? guard : null)).pipe(map(v => this.srv.can(v)), tap(v => {
            if (v)
                return;
            this.router.navigateByUrl(data.guard_url);
        }));
    }
    // lazy loading
    canLoad(route) {
        return this.process(route.data);
    }
    // all children route
    canActivateChild(childRoute, state) {
        return this.canActivate(childRoute, state);
    }
    // route
    canActivate(route, _state) {
        return this.process(route.data);
    }
}
/** @nocollapse */ ACLGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function ACLGuard_Factory() { return new ACLGuard(i0.ɵɵinject(i1.ACLService), i0.ɵɵinject(i2.Router)); }, token: ACLGuard, providedIn: "root" });
ACLGuard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ACLGuard.ctorParameters = () => [
    { type: ACLService },
    { type: Router }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWNsL3NyYy9hY2wtZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQStFLE1BQU0sRUFBdUIsTUFBTSxpQkFBaUIsQ0FBQztBQUMzSSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFHM0M7Ozs7Ozs7Ozs7R0FVRztBQUVILE1BQU0sT0FBTyxRQUFRO0lBQ25CLFlBQW9CLEdBQWUsRUFBVSxNQUFjO1FBQXZDLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUV2RCxPQUFPLENBQUMsSUFBVTtRQUN4QixJQUFJLG1CQUNGLEtBQUssRUFBRSxJQUFJLEVBQ1gsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUMxQixJQUFJLENBQ1IsQ0FBQztRQUNGLE1BQU0sS0FBSyxHQUF3QyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlELE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUUsS0FBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzNHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3pCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNOLElBQUksQ0FBQztnQkFBRSxPQUFPO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZTtJQUNmLE9BQU8sQ0FBQyxLQUFZO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELHFCQUFxQjtJQUNyQixnQkFBZ0IsQ0FBQyxVQUFrQyxFQUFFLEtBQTBCO1FBQzdFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELFFBQVE7SUFDUixXQUFXLENBQUMsS0FBNkIsRUFBRSxNQUFrQztRQUMzRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7WUEvQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQWR6QixVQUFVO1lBSG1FLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCwgRGF0YSwgUm91dGUsIFJvdXRlciwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnLi9hY2wuc2VydmljZSc7XG5pbXBvcnQgeyBBQ0xDYW5UeXBlIH0gZnJvbSAnLi9hY2wudHlwZSc7XG5cbi8qKlxuICogUm91dGluZyBndWFyZCBwcmV2ZW50IHVuYXV0aG9yaXplZCB1c2VycyB2aXNpdCB0aGUgcGFnZSwgW0FDTCBEb2N1bWVudF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYWNsKS5cbiAqXG4gKiBgYGB0c1xuICogZGF0YToge1xuICogIHBhdGg6ICdob21lJyxcbiAqICBjYW5BY3RpdmF0ZTogWyBBQ0xHdWFyZCBdLFxuICogIGRhdGE6IHsgZ3VhcmQ6ICd1c2VyMScgfVxuICogfVxuICogYGBgXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQUNMR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBBQ0xTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIHByaXZhdGUgcHJvY2VzcyhkYXRhOiBEYXRhKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgZGF0YSA9IHtcbiAgICAgIGd1YXJkOiBudWxsLFxuICAgICAgZ3VhcmRfdXJsOiB0aGlzLnNydi5ndWFyZF91cmwsXG4gICAgICAuLi5kYXRhLFxuICAgIH07XG4gICAgY29uc3QgZ3VhcmQ6IEFDTENhblR5cGUgfCBPYnNlcnZhYmxlPEFDTENhblR5cGU+ID0gZGF0YS5ndWFyZDtcbiAgICByZXR1cm4gKGd1YXJkICYmIGd1YXJkIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSA/IGd1YXJkIDogb2YoZ3VhcmQgIT0gbnVsbCA/IChndWFyZCBhcyBBQ0xDYW5UeXBlKSA6IG51bGwpKS5waXBlKFxuICAgICAgbWFwKHYgPT4gdGhpcy5zcnYuY2FuKHYpKSxcbiAgICAgIHRhcCh2ID0+IHtcbiAgICAgICAgaWYgKHYpIHJldHVybjtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChkYXRhLmd1YXJkX3VybCk7XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLy8gbGF6eSBsb2FkaW5nXG4gIGNhbkxvYWQocm91dGU6IFJvdXRlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzcyhyb3V0ZS5kYXRhISk7XG4gIH1cbiAgLy8gYWxsIGNoaWxkcmVuIHJvdXRlXG4gIGNhbkFjdGl2YXRlQ2hpbGQoY2hpbGRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5jYW5BY3RpdmF0ZShjaGlsZFJvdXRlLCBzdGF0ZSk7XG4gIH1cbiAgLy8gcm91dGVcbiAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIF9zdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCB8IG51bGwpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKHJvdXRlLmRhdGEpO1xuICB9XG59XG4iXX0=