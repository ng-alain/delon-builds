import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { filter, map } from 'rxjs/operators';
import { SettingsService } from '../settings/settings.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/bidi";
import * as i2 from "../settings/settings.service";
import * as i3 from "ng-zorro-antd/core/config";
import * as i4 from "@delon/util/config";
import * as i5 from "@angular/cdk/platform";
export const HTML_DIR = 'dir';
export const RTL_DIRECTION = 'direction';
export const RTL_NZ_COMPONENTS = ['modal', 'drawer', 'message', 'notification', 'image'];
export const RTL_DELON_COMPONENTS = ['loading', 'onboarding'];
export const LTR = 'ltr';
export const RTL = 'rtl';
export class RTLService {
    constructor(d, srv, nz, delon, platform, doc) {
        this.d = d;
        this.srv = srv;
        this.nz = nz;
        this.delon = delon;
        this.platform = platform;
        this.doc = doc;
        this._dir = LTR;
        this.dir = srv.layout.direction === RTL ? RTL : LTR;
    }
    /**
     * Get or Set the current text direction
     *
     * 获取或设置当前文字方向
     */
    get dir() {
        return this._dir;
    }
    set dir(value) {
        this._dir = value;
        this.updateLibConfig();
        this.updateHtml();
        // Should be wait inited
        Promise.resolve().then(() => {
            this.d.value = value;
            this.d.change.emit(value);
            this.srv.setLayout(RTL_DIRECTION, value);
        });
    }
    /**
     * Get the next text direction
     *
     * 获取下一次文字方向
     */
    get nextDir() {
        return this.dir === LTR ? RTL : LTR;
    }
    /**
     * Subscription change notification
     *
     * 订阅变更通知
     */
    get change() {
        return this.srv.notify.pipe(filter(w => w.name === RTL_DIRECTION), map(v => v.value));
    }
    /**
     * Toggle text direction
     *
     * 切换文字方向
     */
    toggle() {
        this.dir = this.nextDir;
    }
    updateHtml() {
        if (!this.platform.isBrowser) {
            return;
        }
        const htmlEl = this.doc.querySelector('html');
        if (htmlEl) {
            const dir = this.dir;
            htmlEl.style.direction = dir;
            htmlEl.classList.remove(RTL, LTR);
            htmlEl.classList.add(dir);
            htmlEl.setAttribute(HTML_DIR, dir);
        }
    }
    updateLibConfig() {
        RTL_NZ_COMPONENTS.forEach(name => {
            this.nz.set(name, { nzDirection: this.dir });
        });
        RTL_DELON_COMPONENTS.forEach(name => {
            this.delon.set(name, { direction: this.dir });
        });
    }
}
/** @nocollapse */ RTLService.ɵfac = function RTLService_Factory(t) { return new (t || RTLService)(i0.ɵɵinject(i1.Directionality), i0.ɵɵinject(i2.SettingsService), i0.ɵɵinject(i3.NzConfigService), i0.ɵɵinject(i4.AlainConfigService), i0.ɵɵinject(i5.Platform), i0.ɵɵinject(DOCUMENT)); };
/** @nocollapse */ RTLService.ɵprov = i0.ɵɵdefineInjectable({ token: RTLService, factory: RTLService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RTLService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.Directionality }, { type: i2.SettingsService }, { type: i3.NzConfigService }, { type: i4.AlainConfigService }, { type: i5.Platform }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnRsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zcmMvc2VydmljZXMvcnRsL3J0bC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7OztBQUUvRCxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzlCLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxXQUFXLENBQUM7QUFDekMsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekYsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDOUQsTUFBTSxDQUFDLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQztBQUN6QixNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBR3pCLE1BQU0sT0FBTyxVQUFVO0lBMkNyQixZQUNVLENBQWlCLEVBQ2pCLEdBQW9CLEVB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QUMsQ0FBQztRQUNILG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFXLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzt1RkFwRlUsVUFBVSw4S0FpRFgsUUFBUTtxRUFqRFAsVUFBVSxXQUFWLFVBQVUsbUJBREcsTUFBTTt1RkFDbkIsVUFBVTtjQUR0QixVQUFVO2VBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOztzQkFrRDdCLE1BQU07dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBOekNvbmZpZ1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnLi4vc2V0dGluZ3Mvc2V0dGluZ3Muc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBIVE1MX0RJUiA9ICdkaXInO1xuZXhwb3J0IGNvbnN0IFJUTF9ESVJFQ1RJT04gPSAnZGlyZWN0aW9uJztcbmV4cG9ydCBjb25zdCBSVExfTlpfQ09NUE9ORU5UUyA9IFsnbW9kYWwnLCAnZHJhd2VyJywgJ21lc3NhZ2UnLCAnbm90aWZpY2F0aW9uJywgJ2ltYWdlJ107XG5leHBvcnQgY29uc3QgUlRMX0RFTE9OX0NPTVBPTkVOVFMgPSBbJ2xvYWRpbmcnLCAnb25ib2FyZGluZyddO1xuZXhwb3J0IGNvbnN0IExUUiA9ICdsdHInO1xuZXhwb3J0IGNvbnN0IFJUTCA9ICdydGwnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFJUTFNlcnZpY2Uge1xuICBwcml2YXRlIF9kaXI6IERpcmVjdGlvbiA9IExUUjtcbiAgLyoqXG4gICAqIEdldCBvciBTZXQgdGhlIGN1cnJlbnQgdGV4dCBkaXJlY3Rpb25cbiAgICpcbiAgICog6I635Y+W5oiW6K6+572u5b2T5YmN5paH5a2X5pa55ZCRXG4gICAqL1xuICBnZXQgZGlyKCk6IERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcjtcbiAgfVxuICBzZXQgZGlyKHZhbHVlOiBEaXJlY3Rpb24pIHtcbiAgICB0aGlzLl9kaXIgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUxpYkNvbmZpZygpO1xuICAgIHRoaXMudXBkYXRlSHRtbCgpO1xuICAgIC8vIFNob3VsZCBiZSB3YWl0IGluaXRlZFxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgKHRoaXMuZCBhcyBhbnkpLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLmQuY2hhbmdlLmVtaXQodmFsdWUpO1xuICAgICAgdGhpcy5zcnYuc2V0TGF5b3V0KFJUTF9ESVJFQ1RJT04sIHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5leHQgdGV4dCBkaXJlY3Rpb25cbiAgICpcbiAgICog6I635Y+W5LiL5LiA5qyh5paH5a2X5pa55ZCRXG4gICAqL1xuICBnZXQgbmV4dERpcigpOiBEaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLmRpciA9PT0gTFRSID8gUlRMIDogTFRSO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiBjaGFuZ2Ugbm90aWZpY2F0aW9uXG4gICAqXG4gICAqIOiuoumYheWPmOabtOmAmuefpVxuICAgKi9cbiAgZ2V0IGNoYW5nZSgpOiBPYnNlcnZhYmxlPERpcmVjdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLnNydi5ub3RpZnkucGlwZShcbiAgICAgIGZpbHRlcih3ID0+IHcubmFtZSA9PT0gUlRMX0RJUkVDVElPTiksXG4gICAgICBtYXAodiA9PiB2LnZhbHVlKSxcbiAgICApO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkOiBEaXJlY3Rpb25hbGl0eSxcbiAgICBwcml2YXRlIHNydjogU2V0dGluZ3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgbno6IE56Q29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGRlbG9uOiBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgKSB7XG4gICAgdGhpcy5kaXIgPSBzcnYubGF5b3V0LmRpcmVjdGlvbiA9PT0gUlRMID8gUlRMIDogTFRSO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0ZXh0IGRpcmVjdGlvblxuICAgKlxuICAgKiDliIfmjaLmloflrZfmlrnlkJFcbiAgICovXG4gIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRpciA9IHRoaXMubmV4dERpcjtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSHRtbCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGh0bWxFbCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoaHRtbEVsKSB7XG4gICAgICBjb25zdCBkaXIgPSB0aGlzLmRpcjtcbiAgICAgIGh0bWxFbC5zdHlsZS5kaXJlY3Rpb24gPSBkaXI7XG4gICAgICBodG1sRWwuY2xhc3NMaXN0LnJlbW92ZShSVEwsIExUUik7XG4gICAgICBodG1sRWwuY2xhc3NMaXN0LmFkZChkaXIpO1xuICAgICAgaHRtbEVsLnNldEF0dHJpYnV0ZShIVE1MX0RJUiwgZGlyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUxpYkNvbmZpZygpOiB2b2lkIHtcbiAgICBSVExfTlpfQ09NUE9ORU5UUy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpcy5uei5zZXQobmFtZSBhcyBhbnksIHsgbnpEaXJlY3Rpb246IHRoaXMuZGlyIH0pO1xuICAgIH0pO1xuICAgIFJUTF9ERUxPTl9DT01QT05FTlRTLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICB0aGlzLmRlbG9uLnNldChuYW1lIGFzIGFueSwgeyBkaXJlY3Rpb246IHRoaXMuZGlyIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=