import { Injectable, inject } from '@angular/core';
import { Observable, of, map, tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./acl.service";
import * as i2 from "@angular/router";
export class ACLGuardService {
    constructor(srv, router, injector) {
        this.srv = srv;
        this.router = router;
        this.injector = injector;
    }
    process(data) {
        data = {
            guard: null,
            guard_url: this.srv.guard_url,
            ...data
        };
        let guard = data.guard;
        if (typeof guard === 'function')
            guard = guard(this.srv, this.injector);
        return (guard && guard instanceof Observable ? guard : of(guard != null ? guard : null)).pipe(map(v => this.srv.can(v)), tap(v => {
            if (v)
                return;
            this.router.navigateByUrl(data.guard_url);
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: ACLGuardService, deps: [{ token: i1.ACLService }, { token: i2.Router }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: ACLGuardService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: ACLGuardService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.ACLService }, { type: i2.Router }, { type: i0.Injector }]; } });
/**
 * Routing guard prevent unauthorized users visit the page, [ACL Document](https://ng-alain.com/acl).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ aclCanActivate ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export const aclCanActivate = route => inject(ACLGuardService).process(route.data);
/**
 * Routing guard prevent unauthorized users visit the page, [ACL Document](https://ng-alain.com/acl).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivateChild: [ aclCanActivateChild ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export const aclCanActivateChild = route => inject(ACLGuardService).process(route.data);
/**
 * Routing guard prevent unauthorized users visit the page, [ACL Document](https://ng-alain.com/acl).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canMatch: [ aclCanMatch ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export const aclCanMatch = route => inject(ACLGuardService).process(route.data);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWNsL3NyYy9hY2wtZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQU1oRCxNQUFNLE9BQU8sZUFBZTtJQUMxQixZQUNVLEdBQWUsRUFDZixNQUFjLEVBQ2QsUUFBa0I7UUFGbEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3pCLENBQUM7SUFFSixPQUFPLENBQUMsSUFBbUI7UUFDekIsSUFBSSxHQUFHO1lBQ0wsS0FBSyxFQUFFLElBQUk7WUFDWCxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTO1lBQzdCLEdBQUcsSUFBSTtTQUNSLENBQUM7UUFDRixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLElBQUksT0FBTyxLQUFLLEtBQUssVUFBVTtZQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEUsT0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLFlBQVksVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBRSxLQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDM0csR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDekIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ04sSUFBSSxDQUFDO2dCQUFFLE9BQU87WUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFNLENBQUMsU0FBVyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7OEdBdEJVLGVBQWU7a0hBQWYsZUFBZTs7MkZBQWYsZUFBZTtrQkFEM0IsVUFBVTs7QUEwQlg7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBa0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVsRzs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQXVCLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFNUc7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBZSxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGVDaGlsZEZuLCBDYW5BY3RpdmF0ZUZuLCBDYW5NYXRjaEZuLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIG1hcCwgdGFwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcbmltcG9ydCB0eXBlIHsgQUNMQ2FuVHlwZSwgQUNMR3VhcmREYXRhIH0gZnJvbSAnLi9hY2wudHlwZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBQ0xHdWFyZFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNydjogQUNMU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cblxuICBwcm9jZXNzKGRhdGE/OiBBQ0xHdWFyZERhdGEpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBkYXRhID0ge1xuICAgICAgZ3VhcmQ6IG51bGwsXG4gICAgICBndWFyZF91cmw6IHRoaXMuc3J2Lmd1YXJkX3VybCxcbiAgICAgIC4uLmRhdGFcbiAgICB9O1xuICAgIGxldCBndWFyZCA9IGRhdGEuZ3VhcmQ7XG4gICAgaWYgKHR5cGVvZiBndWFyZCA9PT0gJ2Z1bmN0aW9uJykgZ3VhcmQgPSBndWFyZCh0aGlzLnNydiwgdGhpcy5pbmplY3Rvcik7XG4gICAgcmV0dXJuIChndWFyZCAmJiBndWFyZCBpbnN0YW5jZW9mIE9ic2VydmFibGUgPyBndWFyZCA6IG9mKGd1YXJkICE9IG51bGwgPyAoZ3VhcmQgYXMgQUNMQ2FuVHlwZSkgOiBudWxsKSkucGlwZShcbiAgICAgIG1hcCh2ID0+IHRoaXMuc3J2LmNhbih2KSksXG4gICAgICB0YXAodiA9PiB7XG4gICAgICAgIGlmICh2KSByZXR1cm47XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoZGF0YSEhLmd1YXJkX3VybCEhKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIFJvdXRpbmcgZ3VhcmQgcHJldmVudCB1bmF1dGhvcml6ZWQgdXNlcnMgdmlzaXQgdGhlIHBhZ2UsIFtBQ0wgRG9jdW1lbnRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2FjbCkuXG4gKlxuICogYGBgdHNcbiAqIGRhdGE6IHtcbiAqICBwYXRoOiAnaG9tZScsXG4gKiAgY2FuQWN0aXZhdGU6IFsgYWNsQ2FuQWN0aXZhdGUgXSxcbiAqICBkYXRhOiB7IGd1YXJkOiAndXNlcjEnIH1cbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgYWNsQ2FuQWN0aXZhdGU6IENhbkFjdGl2YXRlRm4gPSByb3V0ZSA9PiBpbmplY3QoQUNMR3VhcmRTZXJ2aWNlKS5wcm9jZXNzKHJvdXRlLmRhdGEpO1xuXG4vKipcbiAqIFJvdXRpbmcgZ3VhcmQgcHJldmVudCB1bmF1dGhvcml6ZWQgdXNlcnMgdmlzaXQgdGhlIHBhZ2UsIFtBQ0wgRG9jdW1lbnRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2FjbCkuXG4gKlxuICogYGBgdHNcbiAqIGRhdGE6IHtcbiAqICBwYXRoOiAnaG9tZScsXG4gKiAgY2FuQWN0aXZhdGVDaGlsZDogWyBhY2xDYW5BY3RpdmF0ZUNoaWxkIF0sXG4gKiAgZGF0YTogeyBndWFyZDogJ3VzZXIxJyB9XG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGFjbENhbkFjdGl2YXRlQ2hpbGQ6IENhbkFjdGl2YXRlQ2hpbGRGbiA9IHJvdXRlID0+IGluamVjdChBQ0xHdWFyZFNlcnZpY2UpLnByb2Nlc3Mocm91dGUuZGF0YSk7XG5cbi8qKlxuICogUm91dGluZyBndWFyZCBwcmV2ZW50IHVuYXV0aG9yaXplZCB1c2VycyB2aXNpdCB0aGUgcGFnZSwgW0FDTCBEb2N1bWVudF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYWNsKS5cbiAqXG4gKiBgYGB0c1xuICogZGF0YToge1xuICogIHBhdGg6ICdob21lJyxcbiAqICBjYW5NYXRjaDogWyBhY2xDYW5NYXRjaCBdLFxuICogIGRhdGE6IHsgZ3VhcmQ6ICd1c2VyMScgfVxuICogfVxuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBhY2xDYW5NYXRjaDogQ2FuTWF0Y2hGbiA9IHJvdXRlID0+IGluamVjdChBQ0xHdWFyZFNlcnZpY2UpLnByb2Nlc3Mocm91dGUuZGF0YSk7XG4iXX0=