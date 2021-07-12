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
ACLGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function ACLGuard_Factory() { return new ACLGuard(i0.ɵɵinject(i1.ACLService), i0.ɵɵinject(i2.Router)); }, token: ACLGuard, providedIn: "root" });
ACLGuard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ACLGuard.ctorParameters = () => [
    { type: ACLService },
    { type: Router }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWNsL3NyYy9hY2wtZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQStFLE1BQU0sRUFBdUIsTUFBTSxpQkFBaUIsQ0FBQztBQUMzSSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFHM0M7Ozs7Ozs7Ozs7R0FVRztBQUVILE1BQU0sT0FBTyxRQUFRO0lBQ25CLFlBQW9CLEdBQWUsRUFBVSxNQUFjO1FBQXZDLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUV2RCxPQUFPLENBQUMsSUFBVTtRQUN4QixJQUFJLG1CQUNGLEtBQUssRUFBRSxJQUFJLEVBQ1gsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUMxQixJQUFJLENBQ1IsQ0FBQztRQUNGLE1BQU0sS0FBSyxHQUF3QyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlELE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUUsS0FBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzNHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3pCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNOLElBQUksQ0FBQztnQkFBRSxPQUFPO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZTtJQUNmLE9BQU8sQ0FBQyxLQUFZO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELHFCQUFxQjtJQUNyQixnQkFBZ0IsQ0FBQyxVQUFrQyxFQUFFLEtBQTBCO1FBQzdFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELFFBQVE7SUFDUixXQUFXLENBQUMsS0FBNkIsRUFBRSxNQUFrQztRQUMzRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7WUEvQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O1lBZHpCLFVBQVU7WUFIbUUsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkLCBEYXRhLCBSb3V0ZSwgUm91dGVyLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcbmltcG9ydCB7IEFDTENhblR5cGUgfSBmcm9tICcuL2FjbC50eXBlJztcblxuLyoqXG4gKiBSb3V0aW5nIGd1YXJkIHByZXZlbnQgdW5hdXRob3JpemVkIHVzZXJzIHZpc2l0IHRoZSBwYWdlLCBbQUNMIERvY3VtZW50XShodHRwczovL25nLWFsYWluLmNvbS9hY2wpLlxuICpcbiAqIGBgYHRzXG4gKiBkYXRhOiB7XG4gKiAgcGF0aDogJ2hvbWUnLFxuICogIGNhbkFjdGl2YXRlOiBbIEFDTEd1YXJkIF0sXG4gKiAgZGF0YTogeyBndWFyZDogJ3VzZXIxJyB9XG4gKiB9XG4gKiBgYGBcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBQ0xHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IEFDTFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzKGRhdGE6IERhdGEpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBkYXRhID0ge1xuICAgICAgZ3VhcmQ6IG51bGwsXG4gICAgICBndWFyZF91cmw6IHRoaXMuc3J2Lmd1YXJkX3VybCxcbiAgICAgIC4uLmRhdGEsXG4gICAgfTtcbiAgICBjb25zdCBndWFyZDogQUNMQ2FuVHlwZSB8IE9ic2VydmFibGU8QUNMQ2FuVHlwZT4gPSBkYXRhLmd1YXJkO1xuICAgIHJldHVybiAoZ3VhcmQgJiYgZ3VhcmQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlID8gZ3VhcmQgOiBvZihndWFyZCAhPSBudWxsID8gKGd1YXJkIGFzIEFDTENhblR5cGUpIDogbnVsbCkpLnBpcGUoXG4gICAgICBtYXAodiA9PiB0aGlzLnNydi5jYW4odikpLFxuICAgICAgdGFwKHYgPT4ge1xuICAgICAgICBpZiAodikgcmV0dXJuO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGRhdGEuZ3VhcmRfdXJsKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvLyBsYXp5IGxvYWRpbmdcbiAgY2FuTG9hZChyb3V0ZTogUm91dGUpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKHJvdXRlLmRhdGEhKTtcbiAgfVxuICAvLyBhbGwgY2hpbGRyZW4gcm91dGVcbiAgY2FuQWN0aXZhdGVDaGlsZChjaGlsZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmNhbkFjdGl2YXRlKGNoaWxkUm91dGUsIHN0YXRlKTtcbiAgfVxuICAvLyByb3V0ZVxuICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgX3N0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90IHwgbnVsbCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3Mocm91dGUuZGF0YSk7XG4gIH1cbn1cbiJdfQ==