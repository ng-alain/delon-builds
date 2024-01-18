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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: AlainI18NGuardService, deps: [{ token: ALAIN_I18N_TOKEN, optional: true }, { token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: AlainI18NGuardService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: AlainI18NGuardService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ALAIN_I18N_TOKEN]
                }] }, { type: i1.AlainConfigService }] });
/**
 * Internationalization guard, automatically recognizes the language in Url and triggers the `ALAIN_I18N_TOKEN.use` method
 *
 * 国际化守卫，自动识别Url中的语言，并触发 `ALAIN_I18N_TOKEN.use` 方法
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
 * Internationalization guard, automatically recognizes the language in Url and triggers the `ALAIN_I18N_TOKEN.use` method
 *
 * 国际化守卫，自动识别Url中的语言，并触发 `ALAIN_I18N_TOKEN.use` 方法
 *
 * ```ts
 * data: {
 *  path: 'home',
 *  canActivateChild: [ alainI18nCanActivateChild ]
 * }
 * ```
 */
export const alainI18nCanActivateChild = route => inject(AlainI18NGuardService).process(route);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi11cmwuZ3VhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zcmMvc2VydmljZXMvaTE4bi9pMThuLXVybC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJdEMsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7O0FBRzVELE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsWUFHVSxPQUF5QixFQUN6QixNQUEwQjtRQUQxQixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUN6QixXQUFNLEdBQU4sTUFBTSxDQUFvQjtJQUNqQyxDQUFDO0lBRUosT0FBTyxDQUFDLEtBQTZCO1FBQ25DLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxtQkFBbUIsSUFBSSxNQUFNLENBQUMsQ0FBQztRQUN2RyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDO1FBQ0QsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQzs4R0FkVSxxQkFBcUIsa0JBR3RCLGdCQUFnQjtrSEFIZixxQkFBcUIsY0FEUixNQUFNOzsyRkFDbkIscUJBQXFCO2tCQURqQyxVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7MEJBRzdCLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMsZ0JBQWdCOztBQWM1Qjs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFrQixVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUVuSDs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUF1QixLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGVDaGlsZEZuLCBDYW5BY3RpdmF0ZUZuIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5cbmltcG9ydCB7IEFsYWluSTE4TlNlcnZpY2UsIEFMQUlOX0kxOE5fVE9LRU4gfSBmcm9tICcuL2kxOG4nO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFsYWluSTE4Tkd1YXJkU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBwcml2YXRlIGNvZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlXG4gICkge31cblxuICBwcm9jZXNzKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgY29uc3QgbGFuZyA9IHJvdXRlLnBhcmFtcyAmJiByb3V0ZS5wYXJhbXNbdGhpcy5jb2dTcnYuZ2V0KCd0aGVtZUkxOG4nKT8ucGFyYW1OYW1lT2ZVcmxHdWFyZCA/PyAnaTE4biddO1xuICAgIGlmIChsYW5nICE9IG51bGwpIHtcbiAgICAgIHRoaXMuaTE4blNydi51c2UobGFuZyk7XG4gICAgfVxuICAgIHJldHVybiBvZih0cnVlKTtcbiAgfVxufVxuXG4vKipcbiAqIEludGVybmF0aW9uYWxpemF0aW9uIGd1YXJkLCBhdXRvbWF0aWNhbGx5IHJlY29nbml6ZXMgdGhlIGxhbmd1YWdlIGluIFVybCBhbmQgdHJpZ2dlcnMgdGhlIGBBTEFJTl9JMThOX1RPS0VOLnVzZWAgbWV0aG9kXG4gKlxuICog5Zu96ZmF5YyW5a6I5Y2r77yM6Ieq5Yqo6K+G5YirVXJs5Lit55qE6K+t6KiA77yM5bm26Kem5Y+RIGBBTEFJTl9JMThOX1RPS0VOLnVzZWAg5pa55rOVXG4gKlxuICogYGBgdHNcbiAqIGRhdGE6IHtcbiAqICBwYXRoOiAnaG9tZScsXG4gKiAgY2FuQWN0aXZhdGU6IFsgYWxhaW5JMThuQ2FuQWN0aXZhdGUgXVxuICogfVxuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBhbGFpbkkxOG5DYW5BY3RpdmF0ZTogQ2FuQWN0aXZhdGVGbiA9IGNoaWxkUm91dGUgPT4gaW5qZWN0KEFsYWluSTE4Tkd1YXJkU2VydmljZSkucHJvY2VzcyhjaGlsZFJvdXRlKTtcblxuLyoqXG4gKiBJbnRlcm5hdGlvbmFsaXphdGlvbiBndWFyZCwgYXV0b21hdGljYWxseSByZWNvZ25pemVzIHRoZSBsYW5ndWFnZSBpbiBVcmwgYW5kIHRyaWdnZXJzIHRoZSBgQUxBSU5fSTE4Tl9UT0tFTi51c2VgIG1ldGhvZFxuICpcbiAqIOWbvemZheWMluWuiOWNq++8jOiHquWKqOivhuWIq1VybOS4reeahOivreiogO+8jOW5tuinpuWPkSBgQUxBSU5fSTE4Tl9UT0tFTi51c2VgIOaWueazlVxuICpcbiAqIGBgYHRzXG4gKiBkYXRhOiB7XG4gKiAgcGF0aDogJ2hvbWUnLFxuICogIGNhbkFjdGl2YXRlQ2hpbGQ6IFsgYWxhaW5JMThuQ2FuQWN0aXZhdGVDaGlsZCBdXG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGFsYWluSTE4bkNhbkFjdGl2YXRlQ2hpbGQ6IENhbkFjdGl2YXRlQ2hpbGRGbiA9IHJvdXRlID0+IGluamVjdChBbGFpbkkxOE5HdWFyZFNlcnZpY2UpLnByb2Nlc3Mocm91dGUpO1xuIl19