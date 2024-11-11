import { Injectable, inject } from '@angular/core';
import { of } from 'rxjs';
import { AlainConfigService } from '@delon/util/config';
import { ALAIN_I18N_TOKEN } from './i18n';
import * as i0 from "@angular/core";
export class AlainI18NGuardService {
    constructor() {
        this.i18nSrv = inject(ALAIN_I18N_TOKEN, { optional: true });
        this.cogSrv = inject(AlainConfigService);
    }
    process(route) {
        const lang = route.params && route.params[this.cogSrv.get('themeI18n')?.paramNameOfUrlGuard ?? 'i18n'];
        if (lang != null) {
            this.i18nSrv?.use(lang);
        }
        return of(true);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: AlainI18NGuardService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: AlainI18NGuardService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: AlainI18NGuardService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi11cmwuZ3VhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zcmMvc2VydmljZXMvaTE4bi9pMThuLXVybC5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXRDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFFBQVEsQ0FBQzs7QUFHMUMsTUFBTSxPQUFPLHFCQUFxQjtJQURsQztRQUVtQixZQUFPLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdkQsV0FBTSxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0tBU3REO0lBUEMsT0FBTyxDQUFDLEtBQTZCO1FBQ25DLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxtQkFBbUIsSUFBSSxNQUFNLENBQUMsQ0FBQztRQUN2RyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ0QsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQzsrR0FWVSxxQkFBcUI7bUhBQXJCLHFCQUFxQixjQURSLE1BQU07OzRGQUNuQixxQkFBcUI7a0JBRGpDLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOztBQWNsQzs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFrQixVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUVuSDs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUF1QixLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGVDaGlsZEZuLCBDYW5BY3RpdmF0ZUZuIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5cbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4gfSBmcm9tICcuL2kxOG4nO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFsYWluSTE4Tkd1YXJkU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgaTE4blNydiA9IGluamVjdChBTEFJTl9JMThOX1RPS0VOLCB7IG9wdGlvbmFsOiB0cnVlIH0pO1xuICBwcml2YXRlIHJlYWRvbmx5IGNvZ1NydiA9IGluamVjdChBbGFpbkNvbmZpZ1NlcnZpY2UpO1xuXG4gIHByb2Nlc3Mocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBsYW5nID0gcm91dGUucGFyYW1zICYmIHJvdXRlLnBhcmFtc1t0aGlzLmNvZ1Nydi5nZXQoJ3RoZW1lSTE4bicpPy5wYXJhbU5hbWVPZlVybEd1YXJkID8/ICdpMThuJ107XG4gICAgaWYgKGxhbmcgIT0gbnVsbCkge1xuICAgICAgdGhpcy5pMThuU3J2Py51c2UobGFuZyk7XG4gICAgfVxuICAgIHJldHVybiBvZih0cnVlKTtcbiAgfVxufVxuXG4vKipcbiAqIEludGVybmF0aW9uYWxpemF0aW9uIGd1YXJkLCBhdXRvbWF0aWNhbGx5IHJlY29nbml6ZXMgdGhlIGxhbmd1YWdlIGluIFVybCBhbmQgdHJpZ2dlcnMgdGhlIGBBTEFJTl9JMThOX1RPS0VOLnVzZWAgbWV0aG9kXG4gKlxuICog5Zu96ZmF5YyW5a6I5Y2r77yM6Ieq5Yqo6K+G5YirVXJs5Lit55qE6K+t6KiA77yM5bm26Kem5Y+RIGBBTEFJTl9JMThOX1RPS0VOLnVzZWAg5pa55rOVXG4gKlxuICogYGBgdHNcbiAqIGRhdGE6IHtcbiAqICBwYXRoOiAnaG9tZScsXG4gKiAgY2FuQWN0aXZhdGU6IFsgYWxhaW5JMThuQ2FuQWN0aXZhdGUgXVxuICogfVxuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBhbGFpbkkxOG5DYW5BY3RpdmF0ZTogQ2FuQWN0aXZhdGVGbiA9IGNoaWxkUm91dGUgPT4gaW5qZWN0KEFsYWluSTE4Tkd1YXJkU2VydmljZSkucHJvY2VzcyhjaGlsZFJvdXRlKTtcblxuLyoqXG4gKiBJbnRlcm5hdGlvbmFsaXphdGlvbiBndWFyZCwgYXV0b21hdGljYWxseSByZWNvZ25pemVzIHRoZSBsYW5ndWFnZSBpbiBVcmwgYW5kIHRyaWdnZXJzIHRoZSBgQUxBSU5fSTE4Tl9UT0tFTi51c2VgIG1ldGhvZFxuICpcbiAqIOWbvemZheWMluWuiOWNq++8jOiHquWKqOivhuWIq1VybOS4reeahOivreiogO+8jOW5tuinpuWPkSBgQUxBSU5fSTE4Tl9UT0tFTi51c2VgIOaWueazlVxuICpcbiAqIGBgYHRzXG4gKiBkYXRhOiB7XG4gKiAgcGF0aDogJ2hvbWUnLFxuICogIGNhbkFjdGl2YXRlQ2hpbGQ6IFsgYWxhaW5JMThuQ2FuQWN0aXZhdGVDaGlsZCBdXG4gKiB9XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGFsYWluSTE4bkNhbkFjdGl2YXRlQ2hpbGQ6IENhbkFjdGl2YXRlQ2hpbGRGbiA9IHJvdXRlID0+IGluamVjdChBbGFpbkkxOE5HdWFyZFNlcnZpY2UpLnByb2Nlc3Mocm91dGUpO1xuIl19