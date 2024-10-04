import { Injectable, Injector, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, map, tap } from 'rxjs';
import { ACLService } from './acl.service';
import * as i0 from "@angular/core";
export class ACLGuardService {
    constructor() {
        this.srv = inject(ACLService);
        this.router = inject(Router);
        this.injector = inject(Injector);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: ACLGuardService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: ACLGuardService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: ACLGuardService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWNsL3NyYy9hY2wtZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBaUQsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUkzQyxNQUFNLE9BQU8sZUFBZTtJQUQ1QjtRQUVtQixRQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pCLFdBQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEIsYUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztLQWtCOUM7SUFoQkMsT0FBTyxDQUFDLElBQW1CO1FBQ3pCLElBQUksR0FBRztZQUNMLEtBQUssRUFBRSxJQUFJO1lBQ1gsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUztZQUM3QixHQUFHLElBQUk7U0FDUixDQUFDO1FBQ0YsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2QixJQUFJLE9BQU8sS0FBSyxLQUFLLFVBQVU7WUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUUsS0FBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzNHLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3pCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNOLElBQUksQ0FBQztnQkFBRSxPQUFPO1lBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBTSxDQUFDLFNBQVcsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzhHQXBCVSxlQUFlO2tIQUFmLGVBQWUsY0FERixNQUFNOzsyRkFDbkIsZUFBZTtrQkFEM0IsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7O0FBd0JsQzs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFrQixLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWxHOzs7Ozs7Ozs7O0dBVUc7QUFDSCxNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBdUIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU1Rzs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFlLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZUNoaWxkRm4sIENhbkFjdGl2YXRlRm4sIENhbk1hdGNoRm4sIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgbWFwLCB0YXAgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJy4vYWNsLnNlcnZpY2UnO1xuaW1wb3J0IHR5cGUgeyBBQ0xDYW5UeXBlLCBBQ0xHdWFyZERhdGEgfSBmcm9tICcuL2FjbC50eXBlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBQ0xHdWFyZFNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IHNydiA9IGluamVjdChBQ0xTZXJ2aWNlKTtcbiAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXIgPSBpbmplY3QoUm91dGVyKTtcbiAgcHJpdmF0ZSByZWFkb25seSBpbmplY3RvciA9IGluamVjdChJbmplY3Rvcik7XG5cbiAgcHJvY2VzcyhkYXRhPzogQUNMR3VhcmREYXRhKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgZGF0YSA9IHtcbiAgICAgIGd1YXJkOiBudWxsLFxuICAgICAgZ3VhcmRfdXJsOiB0aGlzLnNydi5ndWFyZF91cmwsXG4gICAgICAuLi5kYXRhXG4gICAgfTtcbiAgICBsZXQgZ3VhcmQgPSBkYXRhLmd1YXJkO1xuICAgIGlmICh0eXBlb2YgZ3VhcmQgPT09ICdmdW5jdGlvbicpIGd1YXJkID0gZ3VhcmQodGhpcy5zcnYsIHRoaXMuaW5qZWN0b3IpO1xuICAgIHJldHVybiAoZ3VhcmQgJiYgZ3VhcmQgaW5zdGFuY2VvZiBPYnNlcnZhYmxlID8gZ3VhcmQgOiBvZihndWFyZCAhPSBudWxsID8gKGd1YXJkIGFzIEFDTENhblR5cGUpIDogbnVsbCkpLnBpcGUoXG4gICAgICBtYXAodiA9PiB0aGlzLnNydi5jYW4odikpLFxuICAgICAgdGFwKHYgPT4ge1xuICAgICAgICBpZiAodikgcmV0dXJuO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGRhdGEhIS5ndWFyZF91cmwhISk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cblxuLyoqXG4gKiBSb3V0aW5nIGd1YXJkIHByZXZlbnQgdW5hdXRob3JpemVkIHVzZXJzIHZpc2l0IHRoZSBwYWdlLCBbQUNMIERvY3VtZW50XShodHRwczovL25nLWFsYWluLmNvbS9hY2wpLlxuICpcbiAqIGBgYHRzXG4gKiBkYXRhOiB7XG4gKiAgcGF0aDogJ2hvbWUnLFxuICogIGNhbkFjdGl2YXRlOiBbIGFjbENhbkFjdGl2YXRlIF0sXG4gKiAgZGF0YTogeyBndWFyZDogJ3VzZXIxJyB9XG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGFjbENhbkFjdGl2YXRlOiBDYW5BY3RpdmF0ZUZuID0gcm91dGUgPT4gaW5qZWN0KEFDTEd1YXJkU2VydmljZSkucHJvY2Vzcyhyb3V0ZS5kYXRhKTtcblxuLyoqXG4gKiBSb3V0aW5nIGd1YXJkIHByZXZlbnQgdW5hdXRob3JpemVkIHVzZXJzIHZpc2l0IHRoZSBwYWdlLCBbQUNMIERvY3VtZW50XShodHRwczovL25nLWFsYWluLmNvbS9hY2wpLlxuICpcbiAqIGBgYHRzXG4gKiBkYXRhOiB7XG4gKiAgcGF0aDogJ2hvbWUnLFxuICogIGNhbkFjdGl2YXRlQ2hpbGQ6IFsgYWNsQ2FuQWN0aXZhdGVDaGlsZCBdLFxuICogIGRhdGE6IHsgZ3VhcmQ6ICd1c2VyMScgfVxuICogfVxuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBhY2xDYW5BY3RpdmF0ZUNoaWxkOiBDYW5BY3RpdmF0ZUNoaWxkRm4gPSByb3V0ZSA9PiBpbmplY3QoQUNMR3VhcmRTZXJ2aWNlKS5wcm9jZXNzKHJvdXRlLmRhdGEpO1xuXG4vKipcbiAqIFJvdXRpbmcgZ3VhcmQgcHJldmVudCB1bmF1dGhvcml6ZWQgdXNlcnMgdmlzaXQgdGhlIHBhZ2UsIFtBQ0wgRG9jdW1lbnRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2FjbCkuXG4gKlxuICogYGBgdHNcbiAqIGRhdGE6IHtcbiAqICBwYXRoOiAnaG9tZScsXG4gKiAgY2FuTWF0Y2g6IFsgYWNsQ2FuTWF0Y2ggXSxcbiAqICBkYXRhOiB7IGd1YXJkOiAndXNlcjEnIH1cbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgYWNsQ2FuTWF0Y2g6IENhbk1hdGNoRm4gPSByb3V0ZSA9PiBpbmplY3QoQUNMR3VhcmRTZXJ2aWNlKS5wcm9jZXNzKHJvdXRlLmRhdGEpO1xuIl19