/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseInterceptor } from '../base.interceptor';
import { CheckSimple } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
import * as i0 from "@angular/core";
export function withAuthSimple() {
    return [{ provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true }];
}
/**
 * Simple 拦截器
 *
 * ```
 * // app.config.ts
 * withAuthSimple(),
 * ```
 */
export class SimpleInterceptor extends BaseInterceptor {
    isAuth(_options) {
        this.model = this.injector.get(DA_SERVICE_TOKEN).get();
        return CheckSimple(this.model);
    }
    setReq(req, options) {
        const { token_send_template, token_send_key } = options;
        const token = token_send_template.replace(/\$\{([\w]+)\}/g, (_, g) => this.model[g]);
        switch (options.token_send_place) {
            case 'header':
                const obj = {};
                obj[token_send_key] = token;
                req = req.clone({
                    setHeaders: obj
                });
                break;
            case 'body':
                const body = req.body || {};
                body[token_send_key] = token;
                req = req.clone({
                    body
                });
                break;
            case 'url':
                req = req.clone({
                    params: req.params.append(token_send_key, token)
                });
                break;
        }
        return req;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SimpleInterceptor, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SimpleInterceptor }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SimpleInterceptor, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUtyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRWhELE1BQU0sVUFBVSxjQUFjO0lBQzVCLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDcEYsQ0FBQztBQUVEOzs7Ozs7O0dBT0c7QUFFSCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsZUFBZTtJQUNwRCxNQUFNLENBQUMsUUFBeUI7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsRUFBc0IsQ0FBQztRQUMzRSxPQUFPLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBeUIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxNQUFNLENBQUMsR0FBcUIsRUFBRSxPQUF3QjtRQUNwRCxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQ3hELE1BQU0sS0FBSyxHQUFHLG1CQUFvQixDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RixRQUFRLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtZQUNoQyxLQUFLLFFBQVE7Z0JBQ1gsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO2dCQUNwQixHQUFHLENBQUMsY0FBZSxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztvQkFDZCxVQUFVLEVBQUUsR0FBRztpQkFDaEIsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDUixLQUFLLE1BQU07Z0JBQ1QsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxjQUFlLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQzlCLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO29CQUNkLElBQUk7aUJBQ0wsQ0FBQyxDQUFDO2dCQUNILE1BQU07WUFDUixLQUFLLEtBQUs7Z0JBQ1IsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7b0JBQ2QsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWUsRUFBRSxLQUFLLENBQUM7aUJBQ2xELENBQUMsQ0FBQztnQkFDSCxNQUFNO1NBQ1Q7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7OEdBL0JVLGlCQUFpQjtrSEFBakIsaUJBQWlCOzsyRkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWxhaW5BdXRoQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcblxuaW1wb3J0IHsgU2ltcGxlVG9rZW5Nb2RlbCB9IGZyb20gJy4vc2ltcGxlLm1vZGVsJztcbmltcG9ydCB7IEJhc2VJbnRlcmNlcHRvciB9IGZyb20gJy4uL2Jhc2UuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgQ2hlY2tTaW1wbGUgfSBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoQXV0aFNpbXBsZSgpOiBQcm92aWRlcltdIHtcbiAgcmV0dXJuIFt7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogU2ltcGxlSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH1dO1xufVxuXG4vKipcbiAqIFNpbXBsZSDmi6bmiKrlmahcbiAqXG4gKiBgYGBcbiAqIC8vIGFwcC5jb25maWcudHNcbiAqIHdpdGhBdXRoU2ltcGxlKCksXG4gKiBgYGBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpbXBsZUludGVyY2VwdG9yIGV4dGVuZHMgQmFzZUludGVyY2VwdG9yIHtcbiAgaXNBdXRoKF9vcHRpb25zOiBBbGFpbkF1dGhDb25maWcpOiBib29sZWFuIHtcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5pbmplY3Rvci5nZXQoREFfU0VSVklDRV9UT0tFTikuZ2V0KCkgYXMgU2ltcGxlVG9rZW5Nb2RlbDtcbiAgICByZXR1cm4gQ2hlY2tTaW1wbGUodGhpcy5tb2RlbCBhcyBTaW1wbGVUb2tlbk1vZGVsKTtcbiAgfVxuXG4gIHNldFJlcShyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIG9wdGlvbnM6IEFsYWluQXV0aENvbmZpZyk6IEh0dHBSZXF1ZXN0PGFueT4ge1xuICAgIGNvbnN0IHsgdG9rZW5fc2VuZF90ZW1wbGF0ZSwgdG9rZW5fc2VuZF9rZXkgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgdG9rZW4gPSB0b2tlbl9zZW5kX3RlbXBsYXRlIS5yZXBsYWNlKC9cXCRcXHsoW1xcd10rKVxcfS9nLCAoXzogc3RyaW5nLCBnKSA9PiB0aGlzLm1vZGVsW2ddKTtcbiAgICBzd2l0Y2ggKG9wdGlvbnMudG9rZW5fc2VuZF9wbGFjZSkge1xuICAgICAgY2FzZSAnaGVhZGVyJzpcbiAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICAgICAgb2JqW3Rva2VuX3NlbmRfa2V5IV0gPSB0b2tlbjtcbiAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcbiAgICAgICAgICBzZXRIZWFkZXJzOiBvYmpcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm9keSc6XG4gICAgICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keSB8fCB7fTtcbiAgICAgICAgYm9keVt0b2tlbl9zZW5kX2tleSFdID0gdG9rZW47XG4gICAgICAgIHJlcSA9IHJlcS5jbG9uZSh7XG4gICAgICAgICAgYm9keVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd1cmwnOlxuICAgICAgICByZXEgPSByZXEuY2xvbmUoe1xuICAgICAgICAgIHBhcmFtczogcmVxLnBhcmFtcy5hcHBlbmQodG9rZW5fc2VuZF9rZXkhLCB0b2tlbilcbiAgICAgICAgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmVxO1xuICB9XG59XG4iXX0=