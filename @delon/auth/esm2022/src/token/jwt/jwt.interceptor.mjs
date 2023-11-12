import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JWTTokenModel } from './jwt.model';
import { BaseInterceptor } from '../base.interceptor';
import { CheckJwt } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
import * as i0 from "@angular/core";
export function withAuthJWT() {
    return [{ provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true }];
}
/**
 * JWT 拦截器
 *
 * ```
 * // app.config.ts
 * withAuthSimple(),
 * ```
 */
export class JWTInterceptor extends BaseInterceptor {
    isAuth(options) {
        this.model = this.injector.get(DA_SERVICE_TOKEN).get(JWTTokenModel);
        return CheckJwt(this.model, options.token_exp_offset);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setReq(req, _options) {
        return req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.model.token}`
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: JWTInterceptor, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: JWTInterceptor }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: JWTInterceptor, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvdG9rZW4vand0L2p3dC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQWUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBSXJELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUVoRCxNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNqRixDQUFDO0FBRUQ7Ozs7Ozs7R0FPRztBQUVILE1BQU0sT0FBTyxjQUFlLFNBQVEsZUFBZTtJQUNqRCxNQUFNLENBQUMsT0FBd0I7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBZ0IsYUFBYSxDQUFDLENBQUM7UUFDbkYsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQXNCLEVBQUUsT0FBTyxDQUFDLGdCQUFpQixDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELDhEQUE4RDtJQUM5RCxNQUFNLENBQUMsR0FBcUIsRUFBRSxRQUF5QjtRQUNyRCxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDZixVQUFVLEVBQUU7Z0JBQ1YsYUFBYSxFQUFFLFVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7YUFDNUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzhHQWJVLGNBQWM7a0hBQWQsY0FBYzs7MkZBQWQsY0FBYztrQkFEMUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFsYWluQXV0aENvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5cbmltcG9ydCB7IEpXVFRva2VuTW9kZWwgfSBmcm9tICcuL2p3dC5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlSW50ZXJjZXB0b3IgfSBmcm9tICcuLi9iYXNlLmludGVyY2VwdG9yJztcbmltcG9ydCB7IENoZWNrSnd0IH0gZnJvbSAnLi4vaGVscGVyJztcbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4gfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gd2l0aEF1dGhKV1QoKTogUHJvdmlkZXJbXSB7XG4gIHJldHVybiBbeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEpXVEludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9XTtcbn1cblxuLyoqXG4gKiBKV1Qg5oum5oiq5ZmoXG4gKlxuICogYGBgXG4gKiAvLyBhcHAuY29uZmlnLnRzXG4gKiB3aXRoQXV0aFNpbXBsZSgpLFxuICogYGBgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKV1RJbnRlcmNlcHRvciBleHRlbmRzIEJhc2VJbnRlcmNlcHRvciB7XG4gIGlzQXV0aChvcHRpb25zOiBBbGFpbkF1dGhDb25maWcpOiBib29sZWFuIHtcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5pbmplY3Rvci5nZXQoREFfU0VSVklDRV9UT0tFTikuZ2V0PEpXVFRva2VuTW9kZWw+KEpXVFRva2VuTW9kZWwpO1xuICAgIHJldHVybiBDaGVja0p3dCh0aGlzLm1vZGVsIGFzIEpXVFRva2VuTW9kZWwsIG9wdGlvbnMudG9rZW5fZXhwX29mZnNldCEpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgc2V0UmVxKHJlcTogSHR0cFJlcXVlc3Q8YW55PiwgX29wdGlvbnM6IEFsYWluQXV0aENvbmZpZyk6IEh0dHBSZXF1ZXN0PGFueT4ge1xuICAgIHJldHVybiByZXEuY2xvbmUoe1xuICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dGhpcy5tb2RlbC50b2tlbn1gXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==