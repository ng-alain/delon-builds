import { Injectable } from '@angular/core';
import { BaseInterceptor } from '../base.interceptor';
import { CheckSimple } from '../helper';
import { DA_SERVICE_TOKEN } from '../interface';
import * as i0 from "@angular/core";
/**
 * Simple 拦截器
 *
 * ```
 * // app.module.ts
 * { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true}
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
}
SimpleInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: SimpleInterceptor, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
SimpleInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: SimpleInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: SimpleInterceptor, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYXV0aC9zcmMvdG9rZW4vc2ltcGxlL3NpbXBsZS5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFHaEQ7Ozs7Ozs7R0FPRztBQUVILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxlQUFlO0lBQ3BELE1BQU0sQ0FBQyxRQUF5QjtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsR0FBRyxFQUFzQixDQUFDO1FBQzNFLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxLQUF5QixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUEyQixFQUFFLE9BQXdCO1FBQzFELE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsR0FBRyxPQUFPLENBQUM7UUFDeEQsTUFBTSxLQUFLLEdBQUcsbUJBQW9CLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlGLFFBQVEsT0FBTyxDQUFDLGdCQUFnQixFQUFFO1lBQ2hDLEtBQUssUUFBUTtnQkFDWCxNQUFNLEdBQUcsR0FBYyxFQUFFLENBQUM7Z0JBQzFCLEdBQUcsQ0FBQyxjQUFlLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO29CQUNkLFVBQVUsRUFBRSxHQUFHO2lCQUNoQixDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNSLEtBQUssTUFBTTtnQkFDVCxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDNUIsSUFBSSxDQUFDLGNBQWUsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDOUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7b0JBQ2QsSUFBSTtpQkFDTCxDQUFDLENBQUM7Z0JBQ0gsTUFBTTtZQUNSLEtBQUssS0FBSztnQkFDUixHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztvQkFDZCxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBZSxFQUFFLEtBQUssQ0FBQztpQkFDbEQsQ0FBQyxDQUFDO2dCQUNILE1BQU07U0FDVDtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7OEdBL0JVLGlCQUFpQjtrSEFBakIsaUJBQWlCOzJGQUFqQixpQkFBaUI7a0JBRDdCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWxhaW5BdXRoQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgQmFzZUludGVyY2VwdG9yIH0gZnJvbSAnLi4vYmFzZS5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBDaGVja1NpbXBsZSB9IGZyb20gJy4uL2hlbHBlcic7XG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNpbXBsZVRva2VuTW9kZWwgfSBmcm9tICcuL3NpbXBsZS5tb2RlbCc7XG5cbi8qKlxuICogU2ltcGxlIOaLpuaIquWZqFxuICpcbiAqIGBgYFxuICogLy8gYXBwLm1vZHVsZS50c1xuICogeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IFNpbXBsZUludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZX1cbiAqIGBgYFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2ltcGxlSW50ZXJjZXB0b3IgZXh0ZW5kcyBCYXNlSW50ZXJjZXB0b3Ige1xuICBpc0F1dGgoX29wdGlvbnM6IEFsYWluQXV0aENvbmZpZyk6IGJvb2xlYW4ge1xuICAgIHRoaXMubW9kZWwgPSB0aGlzLmluamVjdG9yLmdldChEQV9TRVJWSUNFX1RPS0VOKS5nZXQoKSBhcyBTaW1wbGVUb2tlbk1vZGVsO1xuICAgIHJldHVybiBDaGVja1NpbXBsZSh0aGlzLm1vZGVsIGFzIFNpbXBsZVRva2VuTW9kZWwpO1xuICB9XG5cbiAgc2V0UmVxKHJlcTogSHR0cFJlcXVlc3Q8TnpTYWZlQW55Piwgb3B0aW9uczogQWxhaW5BdXRoQ29uZmlnKTogSHR0cFJlcXVlc3Q8TnpTYWZlQW55PiB7XG4gICAgY29uc3QgeyB0b2tlbl9zZW5kX3RlbXBsYXRlLCB0b2tlbl9zZW5kX2tleSB9ID0gb3B0aW9ucztcbiAgICBjb25zdCB0b2tlbiA9IHRva2VuX3NlbmRfdGVtcGxhdGUhLnJlcGxhY2UoL1xcJFxceyhbXFx3XSspXFx9L2csIChfOiBzdHJpbmcsIGcpID0+IHRoaXMubW9kZWxbZ10pO1xuICAgIHN3aXRjaCAob3B0aW9ucy50b2tlbl9zZW5kX3BsYWNlKSB7XG4gICAgICBjYXNlICdoZWFkZXInOlxuICAgICAgICBjb25zdCBvYmo6IE56U2FmZUFueSA9IHt9O1xuICAgICAgICBvYmpbdG9rZW5fc2VuZF9rZXkhXSA9IHRva2VuO1xuICAgICAgICByZXEgPSByZXEuY2xvbmUoe1xuICAgICAgICAgIHNldEhlYWRlcnM6IG9ialxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib2R5JzpcbiAgICAgICAgY29uc3QgYm9keSA9IHJlcS5ib2R5IHx8IHt9O1xuICAgICAgICBib2R5W3Rva2VuX3NlbmRfa2V5IV0gPSB0b2tlbjtcbiAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcbiAgICAgICAgICBib2R5XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3VybCc6XG4gICAgICAgIHJlcSA9IHJlcS5jbG9uZSh7XG4gICAgICAgICAgcGFyYW1zOiByZXEucGFyYW1zLmFwcGVuZCh0b2tlbl9zZW5kX2tleSEsIHRva2VuKVxuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiByZXE7XG4gIH1cbn1cbiJdfQ==