import { Inject, Injectable, Optional, inject } from '@angular/core';
import { of } from 'rxjs';
import { ALAIN_I18N_TOKEN } from './i18n';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export class AlainI18NGuardService {
    constructor(i18nSrv, cogSrv) {
        this.i18nSrv = i18nSrv;
        this.cogSrv = cogSrv;
    }
    process(route) {
        const lang = route.params && route.params[this.cogSrv.get('themeI18n')?.paramNameOfUrlGuard ?? 'i18n'];
        if (lang != null) {
            this.i18nSrv.use(lang);
        }
        return of(true);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlainI18NGuardService, deps: [{ token: ALAIN_I18N_TOKEN, optional: true }, { token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlainI18NGuardService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: AlainI18NGuardService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ALAIN_I18N_TOKEN]
                }] }, { type: i1.AlainConfigService }]; } });
/**
 * Simple 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivate: [ alainI18nCanActivate ]
 * }
 * ```
 */
export const alainI18nCanActivate = childRoute => inject(AlainI18NGuardService).process(childRoute);
/**
 * Simple 路由守卫, [ACL Document](https://ng-alain.com/auth/guard).
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivateChild: [ alainI18nCanActivateChild ]
 * }
 * ```
 */
export const alainI18nCanActivateChild = route => inject(AlainI18NGuardService).process(route);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi11cmwuZ3VhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zcmMvc2VydmljZXMvaTE4bi9pMThuLXVybC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJdEMsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7O0FBRzVELE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsWUFHVSxPQUF5QixFQUN6QixNQUEwQjtRQUQxQixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUN6QixXQUFNLEdBQU4sTUFBTSxDQUFvQjtJQUNqQyxDQUFDO0lBRUosT0FBTyxDQUFDLEtBQTZCO1FBQ25DLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxtQkFBbUIsSUFBSSxNQUFNLENBQUMsQ0FBQztRQUN2RyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7UUFDRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDOzhHQWRVLHFCQUFxQixrQkFHdEIsZ0JBQWdCO2tIQUhmLHFCQUFxQixjQURSLE1BQU07OzJGQUNuQixxQkFBcUI7a0JBRGpDLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzswQkFHN0IsUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQyxnQkFBZ0I7O0FBYzVCOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFrQixVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUVuSDs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBdUIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlQ2hpbGRGbiwgQ2FuQWN0aXZhdGVGbiB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuXG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOIH0gZnJvbSAnLi9pMThuJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbGFpbkkxOE5HdWFyZFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcbiAgICBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb2dTcnY6IEFsYWluQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgcHJvY2Vzcyhyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGxhbmcgPSByb3V0ZS5wYXJhbXMgJiYgcm91dGUucGFyYW1zW3RoaXMuY29nU3J2LmdldCgndGhlbWVJMThuJyk/LnBhcmFtTmFtZU9mVXJsR3VhcmQgPz8gJ2kxOG4nXTtcbiAgICBpZiAobGFuZyAhPSBudWxsKSB7XG4gICAgICB0aGlzLmkxOG5TcnYudXNlKGxhbmcpO1xuICAgIH1cbiAgICByZXR1cm4gb2YodHJ1ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBTaW1wbGUg6Lev55Sx5a6I5Y2rLCBbQUNMIERvY3VtZW50XShodHRwczovL25nLWFsYWluLmNvbS9hdXRoL2d1YXJkKS5cbiAqXG4gKiBgYGB0c1xuICogZGF0YToge1xuICogIHBhdGg6ICdob21lJyxcbiAqICBjYW5BY3RpdmF0ZTogWyBhbGFpbkkxOG5DYW5BY3RpdmF0ZSBdXG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGFsYWluSTE4bkNhbkFjdGl2YXRlOiBDYW5BY3RpdmF0ZUZuID0gY2hpbGRSb3V0ZSA9PiBpbmplY3QoQWxhaW5JMThOR3VhcmRTZXJ2aWNlKS5wcm9jZXNzKGNoaWxkUm91dGUpO1xuXG4vKipcbiAqIFNpbXBsZSDot6/nlLHlrojljassIFtBQ0wgRG9jdW1lbnRdKGh0dHBzOi8vbmctYWxhaW4uY29tL2F1dGgvZ3VhcmQpLlxuICpcbiAqIGBgYHRzXG4gKiBkYXRhOiB7XG4gKiAgcGF0aDogJ2hvbWUnLFxuICogIGNhbkFjdGl2YXRlQ2hpbGQ6IFsgYWxhaW5JMThuQ2FuQWN0aXZhdGVDaGlsZCBdXG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGFsYWluSTE4bkNhbkFjdGl2YXRlQ2hpbGQ6IENhbkFjdGl2YXRlQ2hpbGRGbiA9IHJvdXRlID0+IGluamVjdChBbGFpbkkxOE5HdWFyZFNlcnZpY2UpLnByb2Nlc3Mocm91dGUpO1xuIl19