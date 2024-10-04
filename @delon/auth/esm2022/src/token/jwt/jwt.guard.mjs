import { Injectable, inject } from '@angular/core';
import { CheckJwt, ToLogin } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
import { JWTTokenModel } from './jwt.model';
import * as i0 from "@angular/core";
export class AuthJWTGuardService {
    constructor() {
        this.srv = inject(DA_SERVICE_TOKEN);
    }
    process(url) {
        const cog = this.srv.options;
        const res = CheckJwt(this.srv.get(JWTTokenModel), cog.token_exp_offset);
        if (!res) {
            ToLogin(cog, url);
        }
        return res;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: AuthJWTGuardService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: AuthJWTGuardService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: AuthJWTGuardService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lmd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvdG9rZW4vand0L2p3dC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFHNUMsTUFBTSxPQUFPLG1CQUFtQjtJQURoQztRQUVtQixRQUFHLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FVakQ7SUFSQyxPQUFPLENBQUMsR0FBWTtRQUNsQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUM3QixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQWdCLGFBQWEsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxnQkFBaUIsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNULE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs4R0FWVSxtQkFBbUI7a0hBQW5CLG1CQUFtQixjQUROLE1BQU07OzJGQUNuQixtQkFBbUI7a0JBRC9CLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOztBQWNsQzs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQWtCLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUU5Rzs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQXVCLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUV4SDs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFlLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGVDaGlsZEZuLCBDYW5BY3RpdmF0ZUZuLCBDYW5NYXRjaEZuIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ2hlY2tKd3QsIFRvTG9naW4gfSBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBKV1RUb2tlbk1vZGVsIH0gZnJvbSAnLi9qd3QubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEF1dGhKV1RHdWFyZFNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IHNydiA9IGluamVjdChEQV9TRVJWSUNFX1RPS0VOKTtcblxuICBwcm9jZXNzKHVybD86IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvZyA9IHRoaXMuc3J2Lm9wdGlvbnM7XG4gICAgY29uc3QgcmVzID0gQ2hlY2tKd3QodGhpcy5zcnYuZ2V0PEpXVFRva2VuTW9kZWw+KEpXVFRva2VuTW9kZWwpLCBjb2cudG9rZW5fZXhwX29mZnNldCEpO1xuICAgIGlmICghcmVzKSB7XG4gICAgICBUb0xvZ2luKGNvZywgdXJsKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxufVxuXG4vKipcbiAqIEpXVCDot6/nlLHlrojljassIFtBQ0wgRG9jdW1lbnRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2F1dGgvZ3VhcmQpLlxuICpcbiAqIGBgYHRzXG4gKiBkYXRhOiB7XG4gKiAgcGF0aDogJ2hvbWUnLFxuICogIGNhbkFjdGl2YXRlOiBbIGF1dGhKV1RDYW5BY3RpdmF0ZSBdLFxuICogIGRhdGE6IHsgZ3VhcmQ6ICd1c2VyMScgfVxuICogfVxuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBhdXRoSldUQ2FuQWN0aXZhdGU6IENhbkFjdGl2YXRlRm4gPSAoXywgc3RhdGUpID0+IGluamVjdChBdXRoSldUR3VhcmRTZXJ2aWNlKS5wcm9jZXNzKHN0YXRlLnVybCk7XG5cbi8qKlxuICogSldUIOi3r+eUseWuiOWNqywgW0FDTCBEb2N1bWVudF0oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYXV0aC9ndWFyZCkuXG4gKlxuICogYGBgdHNcbiAqIGRhdGE6IHtcbiAqICBwYXRoOiAnaG9tZScsXG4gKiAgY2FuQWN0aXZhdGVDaGlsZDogWyBhdXRoSldUQ2FuQWN0aXZhdGVDaGlsZCBdLFxuICogIGRhdGE6IHsgZ3VhcmQ6ICd1c2VyMScgfVxuICogfVxuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBhdXRoSldUQ2FuQWN0aXZhdGVDaGlsZDogQ2FuQWN0aXZhdGVDaGlsZEZuID0gKF8sIHN0YXRlKSA9PiBpbmplY3QoQXV0aEpXVEd1YXJkU2VydmljZSkucHJvY2VzcyhzdGF0ZS51cmwpO1xuXG4vKipcbiAqIEpXVCDot6/nlLHlrojljassIFtBQ0wgRG9jdW1lbnRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2F1dGgvZ3VhcmQpLlxuICpcbiAqIGBgYHRzXG4gKiBkYXRhOiB7XG4gKiAgcGF0aDogJ2hvbWUnLFxuICogIGNhbk1hdGNoOiBbIGF1dGhKV1RDYW5NYXRjaCBdLFxuICogIGRhdGE6IHsgZ3VhcmQ6ICd1c2VyMScgfVxuICogfVxuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBhdXRoSldUQ2FuTWF0Y2g6IENhbk1hdGNoRm4gPSByb3V0ZSA9PiBpbmplY3QoQXV0aEpXVEd1YXJkU2VydmljZSkucHJvY2Vzcyhyb3V0ZS5wYXRoKTtcbiJdfQ==