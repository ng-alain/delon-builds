import { Inject, Injectable, Injector } from '@angular/core';
import { CheckJwt, ToLogin } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
import { JWTTokenModel } from './jwt.model';
import * as i0 from "@angular/core";
import * as i1 from "../interface";
/**
 * JWT 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ JWTGuard ]
 * },
 * {
 *   path: 'my',
 *   canActivateChild: [JWTGuard],
 *   children: [
 *     { path: 'profile', component: MockComponent }
 *   ],
 * },
 * ```
 */
export class JWTGuard {
    constructor(srv, injector) {
        this.srv = srv;
        this.injector = injector;
    }
    get cog() {
        return this.srv.options;
    }
    process() {
        const res = CheckJwt(this.srv.get(JWTTokenModel), this.cog.token_exp_offset);
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
/** @nocollapse */ JWTGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function JWTGuard_Factory() { return new JWTGuard(i0.ɵɵinject(i1.DA_SERVICE_TOKEN), i0.ɵɵinject(i0.INJECTOR)); }, token: JWTGuard, providedIn: "root" });
JWTGuard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
JWTGuard.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
    { type: Injector }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvdG9rZW4vand0L2p3dC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHN0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFpQixNQUFNLGNBQWMsQ0FBQztBQUMvRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFFSCxNQUFNLE9BQU8sUUFBUTtJQU9uQixZQUE4QyxHQUFrQixFQUFVLFFBQWtCO1FBQTlDLFFBQUcsR0FBSCxHQUFHLENBQWU7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQztJQUpoRyxJQUFZLEdBQUc7UUFDYixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzFCLENBQUM7SUFJTyxPQUFPO1FBQ2IsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFnQixhQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFpQixDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsZUFBZTtJQUNmLE9BQU8sQ0FBQyxLQUFZLEVBQUUsU0FBdUI7UUFDM0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxxQkFBcUI7SUFDckIsZ0JBQWdCLENBQUMsV0FBbUMsRUFBRSxLQUEwQjtRQUM5RSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNELFFBQVE7SUFDUixXQUFXLENBQUMsTUFBOEIsRUFBRSxLQUEwQjtRQUNwRSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztZQWhDRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OzRDQVFuQixNQUFNLFNBQUMsZ0JBQWdCO1lBaENULFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgQ2FuQWN0aXZhdGVDaGlsZCwgQ2FuTG9hZCwgUm91dGUsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFNlZ21lbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWxhaW5BdXRoQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IENoZWNrSnd0LCBUb0xvZ2luIH0gZnJvbSAnLi4vaGVscGVyJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4sIElUb2tlblNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSldUVG9rZW5Nb2RlbCB9IGZyb20gJy4vand0Lm1vZGVsJztcblxuLyoqXG4gKiBKV1Qg6Lev55Sx5a6I5Y2rLCBbQUNMIERvY3VtZW50XShodHRwczovL25nLWFsYWluLmNvbS9hdXRoL2d1YXJkKS5cbiAqXG4gKiBgYGB0c1xuICogZGF0YToge1xuICogIHBhdGg6ICdob21lJyxcbiAqICBjYW5BY3RpdmF0ZTogWyBKV1RHdWFyZCBdXG4gKiB9LFxuICoge1xuICogICBwYXRoOiAnbXknLFxuICogICBjYW5BY3RpdmF0ZUNoaWxkOiBbSldUR3VhcmRdLFxuICogICBjaGlsZHJlbjogW1xuICogICAgIHsgcGF0aDogJ3Byb2ZpbGUnLCBjb21wb25lbnQ6IE1vY2tDb21wb25lbnQgfVxuICogICBdLFxuICogfSxcbiAqIGBgYFxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEpXVEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUsIENhbkFjdGl2YXRlQ2hpbGQsIENhbkxvYWQge1xuICBwcml2YXRlIHVybDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIHByaXZhdGUgZ2V0IGNvZygpOiBBbGFpbkF1dGhDb25maWcge1xuICAgIHJldHVybiB0aGlzLnNydi5vcHRpb25zO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChEQV9TRVJWSUNFX1RPS0VOKSBwcml2YXRlIHNydjogSVRva2VuU2VydmljZSwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlcyA9IENoZWNrSnd0KHRoaXMuc3J2LmdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKSwgdGhpcy5jb2cudG9rZW5fZXhwX29mZnNldCEpO1xuICAgIGlmICghcmVzKSB7XG4gICAgICBUb0xvZ2luKHRoaXMuY29nLCB0aGlzLmluamVjdG9yLCB0aGlzLnVybCk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvLyBsYXp5IGxvYWRpbmdcbiAgY2FuTG9hZChyb3V0ZTogUm91dGUsIF9zZWdtZW50czogVXJsU2VnbWVudFtdKTogYm9vbGVhbiB7XG4gICAgdGhpcy51cmwgPSByb3V0ZS5wYXRoO1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxuICAvLyBhbGwgY2hpbGRyZW4gcm91dGVcbiAgY2FuQWN0aXZhdGVDaGlsZChfY2hpbGRSb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuIHtcbiAgICB0aGlzLnVybCA9IHN0YXRlLnVybDtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzKCk7XG4gIH1cbiAgLy8gcm91dGVcbiAgY2FuQWN0aXZhdGUoX3JvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IGJvb2xlYW4ge1xuICAgIHRoaXMudXJsID0gc3RhdGUudXJsO1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3MoKTtcbiAgfVxufVxuIl19