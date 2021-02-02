import { Inject, Injectable, Injector } from '@angular/core';
import { CheckSimple, ToLogin } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
import * as i0 from "@angular/core";
/**
 * Simple 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ SimpleGuard ]
 * },
 * {
 *   path: 'my',
 *   canActivateChild: [SimpleGuard],
 *   children: [
 *     { path: 'profile', component: MockComponent }
 *   ],
 * },
 * ```
 */
export class SimpleGuard {
    constructor(srv, injector) {
        this.srv = srv;
        this.injector = injector;
    }
    get cog() {
        return this.srv.options;
    }
    process() {
        const res = CheckSimple(this.srv.get());
        if (!res) {
            ToLogin(this.cog, this.injector, this.url);
        }
        return res;
    }
    // lazy loading
    canLoad(route, _segments) {
        this.url = route.path;
        return this.process();
    }
    // all children route
    canActivateChild(_childRoute, state) {
        this.url = state.url;
        return this.process();
    }
    // route
    canActivate(_route, state) {
        this.url = state.url;
        return this.process();
    }
}
/** @nocollapse */ SimpleGuard.ɵfac = function SimpleGuard_Factory(t) { return new (t || SimpleGuard)(i0.ɵɵinject(DA_SERVICE_TOKEN), i0.ɵɵinject(i0.Injector)); };
/** @nocollapse */ SimpleGuard.ɵprov = i0.ɵɵdefineInjectable({ token: SimpleGuard, factory: SimpleGuard.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SimpleGuard, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DA_SERVICE_TOKEN]
            }] }, { type: i0.Injector }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFpQixNQUFNLGNBQWMsQ0FBQzs7QUFHL0Q7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFFSCxNQUFNLE9BQU8sV0FBVztJQU90QixZQUE4QyxHQUFrQixFQUFVLFFBQWtCO1FBQTlDLFFBQUcsR0FBSCxHQUFHLENBQWU7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQztJQUpoRyxJQUFZLEdBQUc7UUFDYixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzFCLENBQUM7SUFJTyxPQUFPO1FBQ2IsTUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFzQixDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsZUFBZTtJQUNmLE9BQU8sQ0FBQyxLQUFZLEVBQUUsU0FBdUI7UUFDM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxxQkFBcUI7SUFDckIsZ0JBQWdCLENBQUMsV0FBbUMsRUFBRSxLQUEwQjtRQUM5RSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNELFFBQVE7SUFDUixXQUFXLENBQUMsTUFBOEIsRUFBRSxLQUEwQjtRQUNwRSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7eUZBL0JVLFdBQVcsY0FPRixnQkFBZ0I7c0VBUHpCLFdBQVcsV0FBWCxXQUFXLG1CQURFLE1BQU07dUZBQ25CLFdBQVc7Y0FEdkIsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7c0JBUW5CLE1BQU07dUJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQsIFJvdXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxTZWdtZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFsYWluQXV0aENvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBDaGVja1NpbXBsZSwgVG9Mb2dpbiB9IGZyb20gJy4uL2hlbHBlcic7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNpbXBsZVRva2VuTW9kZWwgfSBmcm9tICcuL3NpbXBsZS5tb2RlbCc7XG5cbi8qKlxuICogU2ltcGxlIOi3r+eUseWuiOWNqywgW0FDTCBEb2N1bWVudF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYXV0aC9ndWFyZCkuXG4gKlxuICogYGBgdHNcbiAqIGRhdGE6IHtcbiAqICBwYXRoOiAnaG9tZScsXG4gKiAgY2FuQWN0aXZhdGU6IFsgU2ltcGxlR3VhcmQgXVxuICogfSxcbiAqIHtcbiAqICAgcGF0aDogJ215JyxcbiAqICAgY2FuQWN0aXZhdGVDaGlsZDogW1NpbXBsZUd1YXJkXSxcbiAqICAgY2hpbGRyZW46IFtcbiAqICAgICB7IHBhdGg6ICdwcm9maWxlJywgY29tcG9uZW50OiBNb2NrQ29tcG9uZW50IH1cbiAqICAgXSxcbiAqIH0sXG4gKiBgYGBcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIHtcbiAgcHJpdmF0ZSB1cmw/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBnZXQgY29nKCk6IEFsYWluQXV0aENvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuc3J2Lm9wdGlvbnM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERBX1NFUlZJQ0VfVE9LRU4pIHByaXZhdGUgc3J2OiBJVG9rZW5TZXJ2aWNlLCBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBwcml2YXRlIHByb2Nlc3MoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVzID0gQ2hlY2tTaW1wbGUodGhpcy5zcnYuZ2V0KCkgYXMgU2ltcGxlVG9rZW5Nb2RlbCk7XG4gICAgaWYgKCFyZXMpIHtcbiAgICAgIFRvTG9naW4odGhpcy5jb2csIHRoaXMuaW5qZWN0b3IsIHRoaXMudXJsKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8vIGxhenkgbG9hZGluZ1xuICBjYW5Mb2FkKHJvdXRlOiBSb3V0ZSwgX3NlZ21lbnRzOiBVcmxTZWdtZW50W10pOiBib29sZWFuIHtcbiAgICB0aGlzLnVybCA9IHJvdXRlLnBhdGg7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG4gIC8vIGFsbCBjaGlsZHJlbiByb3V0ZVxuICBjYW5BY3RpdmF0ZUNoaWxkKF9jaGlsZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIHRoaXMudXJsID0gc3RhdGUudXJsO1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxuICAvLyByb3V0ZVxuICBjYW5BY3RpdmF0ZShfcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgdGhpcy51cmwgPSBzdGF0ZS51cmw7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG59XG4iXX0=