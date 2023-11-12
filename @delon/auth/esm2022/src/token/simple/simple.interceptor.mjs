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
 * providers: [
 *  withAuthSimple(),
 * ]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUtyRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBRWhELE1BQU0sVUFBVSxjQUFjO0lBQzVCLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDcEYsQ0FBQztBQUVEOzs7Ozs7Ozs7R0FTRztBQUVILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxlQUFlO0lBQ3BELE1BQU0sQ0FBQyxRQUF5QjtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsR0FBRyxFQUFzQixDQUFDO1FBQzNFLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxLQUF5QixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFxQixFQUFFLE9BQXdCO1FBQ3BELE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDeEQsTUFBTSxLQUFLLEdBQUcsbUJBQW9CLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlGLFFBQVEsT0FBTyxDQUFDLGdCQUFnQixFQUFFO1lBQ2hDLEtBQUssUUFBUTtnQkFDWCxNQUFNLEdBQUcsR0FBUSxFQUFFLENBQUM7Z0JBQ3BCLEdBQUcsQ0FBQyxjQUFlLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO29CQUNkLFVBQVUsRUFBRSxHQUFHO2lCQUNoQixDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLGNBQWUsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDOUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7b0JBQ2QsSUFBSTtpQkFDTCxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNSLEtBQUssS0FBSztnQkFDUixHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztvQkFDZCxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBZSxFQUFFLEtBQUssQ0FBQztpQkFDbEQsQ0FBQyxDQUFDO2dCQUNILE1BQU07U0FDVDtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs4R0EvQlUsaUJBQWlCO2tIQUFqQixpQkFBaUI7OzJGQUFqQixpQkFBaUI7a0JBRDdCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUywgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbGFpbkF1dGhDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuXG5pbXBvcnQgeyBTaW1wbGVUb2tlbk1vZGVsIH0gZnJvbSAnLi9zaW1wbGUubW9kZWwnO1xuaW1wb3J0IHsgQmFzZUludGVyY2VwdG9yIH0gZnJvbSAnLi4vYmFzZS5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBDaGVja1NpbXBsZSB9IGZyb20gJy4uL2hlbHBlcic7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhBdXRoU2ltcGxlKCk6IFByb3ZpZGVyW10ge1xuICByZXR1cm4gW3sgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBTaW1wbGVJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfV07XG59XG5cbi8qKlxuICogU2ltcGxlIOaLpuaIquWZqFxuICpcbiAqIGBgYFxuICogLy8gYXBwLmNvbmZpZy50c1xuICogcHJvdmlkZXJzOiBbXG4gKiAgd2l0aEF1dGhTaW1wbGUoKSxcbiAqIF1cbiAqIGBgYFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2ltcGxlSW50ZXJjZXB0b3IgZXh0ZW5kcyBCYXNlSW50ZXJjZXB0b3Ige1xuICBpc0F1dGgoX29wdGlvbnM6IEFsYWluQXV0aENvbmZpZyk6IGJvb2xlYW4ge1xuICAgIHRoaXMubW9kZWwgPSB0aGlzLmluamVjdG9yLmdldChEQV9TRVJWSUNFX1RPS0VOKS5nZXQoKSBhcyBTaW1wbGVUb2tlbk1vZGVsO1xuICAgIHJldHVybiBDaGVja1NpbXBsZSh0aGlzLm1vZGVsIGFzIFNpbXBsZVRva2VuTW9kZWwpO1xuICB9XG5cbiAgc2V0UmVxKHJlcTogSHR0cFJlcXVlc3Q8YW55Piwgb3B0aW9uczogQWxhaW5BdXRoQ29uZmlnKTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgY29uc3QgeyB0b2tlbl9zZW5kX3RlbXBsYXRlLCB0b2tlbl9zZW5kX2tleSB9ID0gb3B0aW9ucztcbiAgICBjb25zdCB0b2tlbiA9IHRva2VuX3NlbmRfdGVtcGxhdGUhLnJlcGxhY2UoL1xcJFxceyhbXFx3XSspXFx9L2csIChfOiBzdHJpbmcsIGcpID0+IHRoaXMubW9kZWxbZ10pO1xuICAgIHN3aXRjaCAob3B0aW9ucy50b2tlbl9zZW5kX3BsYWNlKSB7XG4gICAgICBjYXNlICdoZWFkZXInOlxuICAgICAgICBjb25zdCBvYmo6IGFueSA9IHt9O1xuICAgICAgICBvYmpbdG9rZW5fc2VuZF9rZXkhXSA9IHRva2VuO1xuICAgICAgICByZXEgPSByZXEuY2xvbmUoe1xuICAgICAgICAgIHNldEhlYWRlcnM6IG9ialxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib2R5JzpcbiAgICAgICAgY29uc3QgYm9keSA9IHJlcS5ib2R5IHx8IHt9O1xuICAgICAgICBib2R5W3Rva2VuX3NlbmRfa2V5IV0gPSB0b2tlbjtcbiAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcbiAgICAgICAgICBib2R5XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3VybCc6XG4gICAgICAgIHJlcSA9IHJlcS5jbG9uZSh7XG4gICAgICAgICAgcGFyYW1zOiByZXEucGFyYW1zLmFwcGVuZCh0b2tlbl9zZW5kX2tleSEsIHRva2VuKVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXE7XG4gIH1cbn1cbiJdfQ==