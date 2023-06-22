import { Injectable } from '@angular/core';
import { Observable, of, map, tap } from 'rxjs';
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
class ACLGuard {
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
    // lazy loading
    canMatch(route) {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: ACLGuard, deps: [{ token: i1.ACLService }, { token: i2.Router }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: ACLGuard, providedIn: 'root' }); }
}
export { ACLGuard };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: ACLGuard, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.ACLService }, { type: i2.Router }, { type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWNsL3NyYy9hY2wtZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQVdyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBS2hEOzs7Ozs7Ozs7O0dBVUc7QUFDSCxNQUNhLFFBQVE7SUFDbkIsWUFBb0IsR0FBZSxFQUFVLE1BQWMsRUFBVSxRQUFrQjtRQUFuRSxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDO0lBRW5GLE9BQU8sQ0FBQyxJQUFVO1FBQ3hCLElBQUksR0FBRztZQUNMLEtBQUssRUFBRSxJQUFJO1lBQ1gsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUztZQUM3QixHQUFHLElBQUk7U0FDUixDQUFDO1FBQ0YsSUFBSSxLQUFLLEdBQWlCLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBSSxPQUFPLEtBQUssS0FBSyxVQUFVO1lBQUUsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RSxPQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssWUFBWSxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFFLEtBQW9CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUMzRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN6QixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDTixJQUFJLENBQUM7Z0JBQUUsT0FBTztZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWU7SUFDZixRQUFRLENBQUMsS0FBWTtRQUNuQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCxxQkFBcUI7SUFDckIsZ0JBQWdCLENBQUMsVUFBa0MsRUFBRSxLQUEwQjtRQUM3RSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxRQUFRO0lBQ1IsV0FBVyxDQUFDLEtBQTZCLEVBQUUsTUFBa0M7UUFDM0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzhHQS9CVSxRQUFRO2tIQUFSLFFBQVEsY0FESyxNQUFNOztTQUNuQixRQUFROzJGQUFSLFFBQVE7a0JBRHBCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIENhbkFjdGl2YXRlLFxuICBDYW5BY3RpdmF0ZUNoaWxkLFxuICBDYW5NYXRjaCxcbiAgRGF0YSxcbiAgUm91dGUsXG4gIFJvdXRlcixcbiAgUm91dGVyU3RhdGVTbmFwc2hvdFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIG1hcCwgdGFwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcbmltcG9ydCB7IEFDTENhblR5cGUsIEFDTEd1YXJkVHlwZSB9IGZyb20gJy4vYWNsLnR5cGUnO1xuXG4vKipcbiAqIFJvdXRpbmcgZ3VhcmQgcHJldmVudCB1bmF1dGhvcml6ZWQgdXNlcnMgdmlzaXQgdGhlIHBhZ2UsIFtBQ0wgRG9jdW1lbnRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2FjbCkuXG4gKlxuICogYGBgdHNcbiAqIGRhdGE6IHtcbiAqICBwYXRoOiAnaG9tZScsXG4gKiAgY2FuQWN0aXZhdGU6IFsgQUNMR3VhcmQgXSxcbiAqICBkYXRhOiB7IGd1YXJkOiAndXNlcjEnIH1cbiAqIH1cbiAqIGBgYFxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFDTEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbk1hdGNoIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IEFDTFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gIHByaXZhdGUgcHJvY2VzcyhkYXRhOiBEYXRhKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgZGF0YSA9IHtcbiAgICAgIGd1YXJkOiBudWxsLFxuICAgICAgZ3VhcmRfdXJsOiB0aGlzLnNydi5ndWFyZF91cmwsXG4gICAgICAuLi5kYXRhXG4gICAgfTtcbiAgICBsZXQgZ3VhcmQ6IEFDTEd1YXJkVHlwZSA9IGRhdGEuZ3VhcmQ7XG4gICAgaWYgKHR5cGVvZiBndWFyZCA9PT0gJ2Z1bmN0aW9uJykgZ3VhcmQgPSBndWFyZCh0aGlzLnNydiwgdGhpcy5pbmplY3Rvcik7XG4gICAgcmV0dXJuIChndWFyZCAmJiBndWFyZCBpbnN0YW5jZW9mIE9ic2VydmFibGUgPyBndWFyZCA6IG9mKGd1YXJkICE9IG51bGwgPyAoZ3VhcmQgYXMgQUNMQ2FuVHlwZSkgOiBudWxsKSkucGlwZShcbiAgICAgIG1hcCh2ID0+IHRoaXMuc3J2LmNhbih2KSksXG4gICAgICB0YXAodiA9PiB7XG4gICAgICAgIGlmICh2KSByZXR1cm47XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoZGF0YS5ndWFyZF91cmwpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gbGF6eSBsb2FkaW5nXG4gIGNhbk1hdGNoKHJvdXRlOiBSb3V0ZSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3Mocm91dGUuZGF0YSEpO1xuICB9XG4gIC8vIGFsbCBjaGlsZHJlbiByb3V0ZVxuICBjYW5BY3RpdmF0ZUNoaWxkKGNoaWxkUm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FuQWN0aXZhdGUoY2hpbGRSb3V0ZSwgc3RhdGUpO1xuICB9XG4gIC8vIHJvdXRlXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBfc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QgfCBudWxsKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzcyhyb3V0ZS5kYXRhKTtcbiAgfVxufVxuIl19