import { Inject, Injectable, inject } from '@angular/core';
import { JWTTokenModel } from './jwt.model';
import { CheckJwt, ToLogin } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
import * as i0 from "@angular/core";
export class AuthJWTGuardService {
    constructor(srv) {
        this.srv = srv;
    }
    process(url) {
        const cog = this.srv.options;
        const res = CheckJwt(this.srv.get(JWTTokenModel), cog.token_exp_offset);
        if (!res) {
            ToLogin(cog, url);
        }
        return res;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: AuthJWTGuardService, deps: [{ token: DA_SERVICE_TOKEN }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: AuthJWTGuardService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: AuthJWTGuardService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DA_SERVICE_TOKEN]
                }] }] });
/**
 * JWT 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ authJWTCanActivate ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export const authJWTCanActivate = (_, state) => inject(AuthJWTGuardService).process(state.url);
/**
 * JWT 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivateChild: [ authJWTCanActivateChild ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export const authJWTCanActivateChild = (_, state) => inject(AuthJWTGuardService).process(state.url);
/**
 * JWT 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canMatch: [ authJWTCanMatch ],
 *  data: { guard: 'user1' }
 * }
 * ```
 */
export const authJWTCanMatch = route => inject(AuthJWTGuardService).process(route.path);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvdG9rZW4vand0L2p3dC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQWlCLE1BQU0sY0FBYyxDQUFDOztBQUcvRCxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFlBQThDLEdBQWtCO1FBQWxCLFFBQUcsR0FBSCxHQUFHLENBQWU7SUFBRyxDQUFDO0lBRXBFLE9BQU8sQ0FBQyxHQUFZO1FBQ2xCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQzdCLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBZ0IsYUFBYSxDQUFDLEVBQUUsR0FBRyxDQUFDLGdCQUFpQixDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbkI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7OEdBVlUsbUJBQW1CLGtCQUNWLGdCQUFnQjtrSEFEekIsbUJBQW1CLGNBRE4sTUFBTTs7MkZBQ25CLG1CQUFtQjtrQkFEL0IsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzBCQUVuQixNQUFNOzJCQUFDLGdCQUFnQjs7QUFZdEM7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFrQixDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFOUc7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUF1QixDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFeEg7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBZSxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGVDaGlsZEZuLCBDYW5BY3RpdmF0ZUZuLCBDYW5NYXRjaEZuIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSldUVG9rZW5Nb2RlbCB9IGZyb20gJy4vand0Lm1vZGVsJztcbmltcG9ydCB7IENoZWNrSnd0LCBUb0xvZ2luIH0gZnJvbSAnLi4vaGVscGVyJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4sIElUb2tlblNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEF1dGhKV1RHdWFyZFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERBX1NFUlZJQ0VfVE9LRU4pIHByaXZhdGUgc3J2OiBJVG9rZW5TZXJ2aWNlKSB7fVxuXG4gIHByb2Nlc3ModXJsPzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgY29nID0gdGhpcy5zcnYub3B0aW9ucztcbiAgICBjb25zdCByZXMgPSBDaGVja0p3dCh0aGlzLnNydi5nZXQ8SldUVG9rZW5Nb2RlbD4oSldUVG9rZW5Nb2RlbCksIGNvZy50b2tlbl9leHBfb2Zmc2V0ISk7XG4gICAgaWYgKCFyZXMpIHtcbiAgICAgIFRvTG9naW4oY29nLCB1cmwpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG59XG5cbi8qKlxuICogSldUIOi3r+eUseWuiOWNqywgW0FDTCBEb2N1bWVudF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYXV0aC9ndWFyZCkuXG4gKlxuICogYGBgdHNcbiAqIGRhdGE6IHtcbiAqICBwYXRoOiAnaG9tZScsXG4gKiAgY2FuQWN0aXZhdGU6IFsgYXV0aEpXVENhbkFjdGl2YXRlIF0sXG4gKiAgZGF0YTogeyBndWFyZDogJ3VzZXIxJyB9XG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGF1dGhKV1RDYW5BY3RpdmF0ZTogQ2FuQWN0aXZhdGVGbiA9IChfLCBzdGF0ZSkgPT4gaW5qZWN0KEF1dGhKV1RHdWFyZFNlcnZpY2UpLnByb2Nlc3Moc3RhdGUudXJsKTtcblxuLyoqXG4gKiBKV1Qg6Lev55Sx5a6I5Y2rLCBbQUNMIERvY3VtZW50XShodHRwczovL25nLWFsYWluLmNvbS9hdXRoL2d1YXJkKS5cbiAqXG4gKiBgYGB0c1xuICogZGF0YToge1xuICogIHBhdGg6ICdob21lJyxcbiAqICBjYW5BY3RpdmF0ZUNoaWxkOiBbIGF1dGhKV1RDYW5BY3RpdmF0ZUNoaWxkIF0sXG4gKiAgZGF0YTogeyBndWFyZDogJ3VzZXIxJyB9XG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGF1dGhKV1RDYW5BY3RpdmF0ZUNoaWxkOiBDYW5BY3RpdmF0ZUNoaWxkRm4gPSAoXywgc3RhdGUpID0+IGluamVjdChBdXRoSldUR3VhcmRTZXJ2aWNlKS5wcm9jZXNzKHN0YXRlLnVybCk7XG5cbi8qKlxuICogSldUIOi3r+eUseWuiOWNqywgW0FDTCBEb2N1bWVudF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYXV0aC9ndWFyZCkuXG4gKlxuICogYGBgdHNcbiAqIGRhdGE6IHtcbiAqICBwYXRoOiAnaG9tZScsXG4gKiAgY2FuTWF0Y2g6IFsgYXV0aEpXVENhbk1hdGNoIF0sXG4gKiAgZGF0YTogeyBndWFyZDogJ3VzZXIxJyB9XG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGF1dGhKV1RDYW5NYXRjaDogQ2FuTWF0Y2hGbiA9IHJvdXRlID0+IGluamVjdChBdXRoSldUR3VhcmRTZXJ2aWNlKS5wcm9jZXNzKHJvdXRlLnBhdGgpO1xuIl19