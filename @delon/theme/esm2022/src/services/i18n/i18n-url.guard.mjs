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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: AlainI18NGuardService, deps: [{ token: ALAIN_I18N_TOKEN, optional: true }, { token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: AlainI18NGuardService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: AlainI18NGuardService, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi11cmwuZ3VhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zcmMvc2VydmljZXMvaTE4bi9pMThuLXVybC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJdEMsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7O0FBRzVELE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsWUFHVSxPQUF5QixFQUN6QixNQUEwQjtRQUQxQixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUN6QixXQUFNLEdBQU4sTUFBTSxDQUFvQjtJQUNqQyxDQUFDO0lBRUosT0FBTyxDQUFDLEtBQTZCO1FBQ25DLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxtQkFBbUIsSUFBSSxNQUFNLENBQUMsQ0FBQztRQUN2RyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7UUFDRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDOzhHQWRVLHFCQUFxQixrQkFHdEIsZ0JBQWdCO2tIQUhmLHFCQUFxQixjQURSLE1BQU07OzJGQUNuQixxQkFBcUI7a0JBRGpDLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzswQkFHN0IsUUFBUTs7MEJBQ1IsTUFBTTsyQkFBQyxnQkFBZ0I7O0FBYzVCOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQWtCLFVBQVUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRW5IOzs7Ozs7Ozs7OztHQVdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQXVCLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZUNoaWxkRm4sIENhbkFjdGl2YXRlRm4gfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcblxuaW1wb3J0IHsgQWxhaW5JMThOU2VydmljZSwgQUxBSU5fSTE4Tl9UT0tFTiB9IGZyb20gJy4vaTE4bic7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQWxhaW5JMThOR3VhcmRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXG4gICAgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIHByb2Nlc3Mocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBsYW5nID0gcm91dGUucGFyYW1zICYmIHJvdXRlLnBhcmFtc1t0aGlzLmNvZ1Nydi5nZXQoJ3RoZW1lSTE4bicpPy5wYXJhbU5hbWVPZlVybEd1YXJkID8/ICdpMThuJ107XG4gICAgaWYgKGxhbmcgIT0gbnVsbCkge1xuICAgICAgdGhpcy5pMThuU3J2LnVzZShsYW5nKTtcbiAgICB9XG4gICAgcmV0dXJuIG9mKHRydWUpO1xuICB9XG59XG5cbi8qKlxuICogSW50ZXJuYXRpb25hbGl6YXRpb24gZ3VhcmQsIGF1dG9tYXRpY2FsbHkgcmVjb2duaXplcyB0aGUgbGFuZ3VhZ2UgaW4gVXJsIGFuZCB0cmlnZ2VycyB0aGUgYEFMQUlOX0kxOE5fVE9LRU4udXNlYCBtZXRob2RcbiAqXG4gKiDlm73pmYXljJblrojljavvvIzoh6rliqjor4bliKtVcmzkuK3nmoTor63oqIDvvIzlubbop6blj5EgYEFMQUlOX0kxOE5fVE9LRU4udXNlYCDmlrnms5VcbiAqXG4gKiBgYGB0c1xuICogZGF0YToge1xuICogIHBhdGg6ICdob21lJyxcbiAqICBjYW5BY3RpdmF0ZTogWyBhbGFpbkkxOG5DYW5BY3RpdmF0ZSBdXG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGFsYWluSTE4bkNhbkFjdGl2YXRlOiBDYW5BY3RpdmF0ZUZuID0gY2hpbGRSb3V0ZSA9PiBpbmplY3QoQWxhaW5JMThOR3VhcmRTZXJ2aWNlKS5wcm9jZXNzKGNoaWxkUm91dGUpO1xuXG4vKipcbiAqIEludGVybmF0aW9uYWxpemF0aW9uIGd1YXJkLCBhdXRvbWF0aWNhbGx5IHJlY29nbml6ZXMgdGhlIGxhbmd1YWdlIGluIFVybCBhbmQgdHJpZ2dlcnMgdGhlIGBBTEFJTl9JMThOX1RPS0VOLnVzZWAgbWV0aG9kXG4gKlxuICog5Zu96ZmF5YyW5a6I5Y2r77yM6Ieq5Yqo6K+G5YirVXJs5Lit55qE6K+t6KiA77yM5bm26Kem5Y+RIGBBTEFJTl9JMThOX1RPS0VOLnVzZWAg5pa55rOVXG4gKlxuICogYGBgdHNcbiAqIGRhdGE6IHtcbiAqICBwYXRoOiAnaG9tZScsXG4gKiAgY2FuQWN0aXZhdGVDaGlsZDogWyBhbGFpbkkxOG5DYW5BY3RpdmF0ZUNoaWxkIF1cbiAqIH1cbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgYWxhaW5JMThuQ2FuQWN0aXZhdGVDaGlsZDogQ2FuQWN0aXZhdGVDaGlsZEZuID0gcm91dGUgPT4gaW5qZWN0KEFsYWluSTE4Tkd1YXJkU2VydmljZSkucHJvY2Vzcyhyb3V0ZSk7XG4iXX0=