import { Inject, Injectable, Injector } from '@angular/core';
import { CheckSimple, ToLogin } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
import * as i0 from "@angular/core";
import * as i1 from "../interface";
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
/** @nocollapse */ SimpleGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function SimpleGuard_Factory() { return new SimpleGuard(i0.ɵɵinject(i1.DA_SERVICE_TOKEN), i0.ɵɵinject(i0.INJECTOR)); }, token: SimpleGuard, providedIn: "root" });
SimpleGuard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
SimpleGuard.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
    { type: Injector }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFpQixNQUFNLGNBQWMsQ0FBQzs7O0FBRy9EOzs7Ozs7Ozs7Ozs7Ozs7O0dBZ0JHO0FBRUgsTUFBTSxPQUFPLFdBQVc7SUFPdEIsWUFBOEMsR0FBa0IsRUFBVSxRQUFrQjtRQUE5QyxRQUFHLEdBQUgsR0FBRyxDQUFlO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFKaEcsSUFBWSxHQUFHO1FBQ2IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUMxQixDQUFDO0lBSU8sT0FBTztRQUNiLE1BQU0sR0FBRyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBc0IsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM1QztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELGVBQWU7SUFDZixPQUFPLENBQUMsS0FBWSxFQUFFLFNBQXVCO1FBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0QscUJBQXFCO0lBQ3JCLGdCQUFnQixDQUFDLFdBQW1DLEVBQUUsS0FBMEI7UUFDOUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxRQUFRO0lBQ1IsV0FBVyxDQUFDLE1BQThCLEVBQUUsS0FBMEI7UUFDcEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7WUFoQ0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs0Q0FRbkIsTUFBTSxTQUFDLGdCQUFnQjtZQWhDVCxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQsIFJvdXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBVcmxTZWdtZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFsYWluQXV0aENvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBDaGVja1NpbXBsZSwgVG9Mb2dpbiB9IGZyb20gJy4uL2hlbHBlcic7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNpbXBsZVRva2VuTW9kZWwgfSBmcm9tICcuL3NpbXBsZS5tb2RlbCc7XG5cbi8qKlxuICogU2ltcGxlIOi3r+eUseWuiOWNqywgW0FDTCBEb2N1bWVudF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYXV0aC9ndWFyZCkuXG4gKlxuICogYGBgdHNcbiAqIGRhdGE6IHtcbiAqICBwYXRoOiAnaG9tZScsXG4gKiAgY2FuQWN0aXZhdGU6IFsgU2ltcGxlR3VhcmQgXVxuICogfSxcbiAqIHtcbiAqICAgcGF0aDogJ215JyxcbiAqICAgY2FuQWN0aXZhdGVDaGlsZDogW1NpbXBsZUd1YXJkXSxcbiAqICAgY2hpbGRyZW46IFtcbiAqICAgICB7IHBhdGg6ICdwcm9maWxlJywgY29tcG9uZW50OiBNb2NrQ29tcG9uZW50IH1cbiAqICAgXSxcbiAqIH0sXG4gKiBgYGBcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlLCBDYW5BY3RpdmF0ZUNoaWxkLCBDYW5Mb2FkIHtcbiAgcHJpdmF0ZSB1cmw/OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBnZXQgY29nKCk6IEFsYWluQXV0aENvbmZpZyB7XG4gICAgcmV0dXJuIHRoaXMuc3J2Lm9wdGlvbnM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERBX1NFUlZJQ0VfVE9LRU4pIHByaXZhdGUgc3J2OiBJVG9rZW5TZXJ2aWNlLCBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge31cblxuICBwcml2YXRlIHByb2Nlc3MoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVzID0gQ2hlY2tTaW1wbGUodGhpcy5zcnYuZ2V0KCkgYXMgU2ltcGxlVG9rZW5Nb2RlbCk7XG4gICAgaWYgKCFyZXMpIHtcbiAgICAgIFRvTG9naW4odGhpcy5jb2csIHRoaXMuaW5qZWN0b3IsIHRoaXMudXJsKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8vIGxhenkgbG9hZGluZ1xuICBjYW5Mb2FkKHJvdXRlOiBSb3V0ZSwgX3NlZ21lbnRzOiBVcmxTZWdtZW50W10pOiBib29sZWFuIHtcbiAgICB0aGlzLnVybCA9IHJvdXRlLnBhdGg7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG4gIC8vIGFsbCBjaGlsZHJlbiByb3V0ZVxuICBjYW5BY3RpdmF0ZUNoaWxkKF9jaGlsZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIHRoaXMudXJsID0gc3RhdGUudXJsO1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxuICAvLyByb3V0ZVxuICBjYW5BY3RpdmF0ZShfcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgdGhpcy51cmwgPSBzdGF0ZS51cmw7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VzcygpO1xuICB9XG59XG4iXX0=