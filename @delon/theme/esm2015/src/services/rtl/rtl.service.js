/**
 * @fileoverview added by tsickle
 * Generated from: src/services/rtl/rtl.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { filter, map } from 'rxjs/operators';
import { SettingsService } from '../settings/settings.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/bidi";
import * as i2 from "../settings/settings.service";
import * as i3 from "ng-zorro-antd/core/config";
import * as i4 from "@delon/util";
import * as i5 from "@angular/cdk/platform";
import * as i6 from "@angular/common";
/** @type {?} */
export const HTML_DIR = 'dir';
/** @type {?} */
export const RTL_DIRECTION = 'direction';
/** @type {?} */
export const RTL_NZ_COMPONENTS = ['modal', 'drawer', 'message', 'notification', 'image'];
/** @type {?} */
export const RTL_DELON_COMPONENTS = ['loading', 'onboarding'];
/** @type {?} */
export const LTR = 'ltr';
/** @type {?} */
export const RTL = 'rtl';
export class RTLService {
    /**
     * @param {?} d
     * @param {?} srv
     * @param {?} nz
     * @param {?} delon
     * @param {?} platform
     * @param {?} doc
     */
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
     * @return {?}
     */
    get dir() {
        return this._dir;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dir(value) {
        this._dir = value;
        this.updateLibConfig();
        this.updateHtml();
        // Should be wait inited
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            ((/** @type {?} */ (this.d))).value = value;
            this.d.change.emit(value);
            this.srv.setLayout(RTL_DIRECTION, value);
        }));
    }
    /**
     * Get the next text direction
     *
     * 获取下一次文字方向
     * @return {?}
     */
    get nextDir() {
        return this.dir === LTR ? RTL : LTR;
    }
    /**
     * Subscription change notification
     *
     * 订阅变更通知
     * @return {?}
     */
    get change() {
        return this.srv.notify.pipe(filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w.name === RTL_DIRECTION)), map((/**
         * @param {?} v
         * @return {?}
         */
        v => v.value)));
    }
    /**
     * Toggle text direction
     *
     * 切换文字方向
     * @return {?}
     */
    toggle() {
        this.dir = this.nextDir;
    }
    /**
     * @private
     * @return {?}
     */
    updateHtml() {
        if (!this.platform.isBrowser) {
            return;
        }
        /** @type {?} */
        const htmlEl = (/** @type {?} */ (this.doc.querySelector('html')));
        if (htmlEl) {
            /** @type {?} */
            const dir = this.dir;
            htmlEl.style.direction = dir;
            htmlEl.classList.remove(RTL, LTR);
            htmlEl.classList.add(dir);
            htmlEl.setAttribute(HTML_DIR, dir);
        }
    }
    /**
     * @private
     * @return {?}
     */
    updateLibConfig() {
        RTL_NZ_COMPONENTS.forEach((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            this.nz.set((/** @type {?} */ (name)), { nzDirection: this.dir });
        }));
        RTL_DELON_COMPONENTS.forEach((/**
         * @param {?} name
         * @return {?}
         */
        name => {
            this.delon.set((/** @type {?} */ (name)), { direction: this.dir });
        }));
    }
}
RTLService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
RTLService.ctorParameters = () => [
    { type: Directionality },
    { type: SettingsService },
    { type: NzConfigService },
    { type: AlainConfigService },
    { type: Platform },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ RTLService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RTLService_Factory() { return new RTLService(i0.ɵɵinject(i1.Directionality), i0.ɵɵinject(i2.SettingsService), i0.ɵɵinject(i3.NzConfigService), i0.ɵɵinject(i4.AlainConfigService), i0.ɵɵinject(i5.Platform), i0.ɵɵinject(i6.DOCUMENT)); }, token: RTLService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    RTLService.prototype._dir;
    /**
     * @type {?}
     * @private
     */
    RTLService.prototype.d;
    /**
     * @type {?}
     * @private
     */
    RTLService.prototype.srv;
    /**
     * @type {?}
     * @private
     */
    RTLService.prototype.nz;
    /**
     * @type {?}
     * @private
     */
    RTLService.prototype.delon;
    /**
     * @type {?}
     * @private
     */
    RTLService.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    RTLService.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnRsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zcmMvc2VydmljZXMvcnRsL3J0bC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7O0FBRS9ELE1BQU0sT0FBTyxRQUFRLEdBQUcsS0FBSzs7QUFDN0IsTUFBTSxPQUFPLGFBQWEsR0FBRyxXQUFXOztBQUN4QyxNQUFNLE9BQU8saUJBQWlCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsT0FBTyxDQUFDOztBQUN4RixNQUFNLE9BQU8sb0JBQW9CLEdBQUcsQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDOztBQUM3RCxNQUFNLE9BQU8sR0FBRyxHQUFHLEtBQUs7O0FBQ3hCLE1BQU0sT0FBTyxHQUFHLEdBQUcsS0FBSztBQUd4QixNQUFNLE9BQU8sVUFBVTs7Ozs7Ozs7O0lBMkNyQixZQUNVLENBQWlCLEVBQ2pCLEdBQW9CLEVBQ3BCLEVBQW1CLEVBQ25CLEtBQXlCLEVBQ3pCLFFBQWtCLEVBQ0EsR0FB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QUFDLE9BQU87Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLEVBQU8sRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN2RCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQXJGRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBakJkLGNBQWM7WUFRekIsZUFBZTtZQUhmLGVBQWU7WUFEZixrQkFBa0I7WUFIbEIsUUFBUTs0Q0FrRVosTUFBTSxTQUFDLFFBQVE7Ozs7Ozs7O0lBaERsQiwwQkFBOEI7Ozs7O0lBMkM1Qix1QkFBeUI7Ozs7O0lBQ3pCLHlCQUE0Qjs7Ozs7SUFDNUIsd0JBQTJCOzs7OztJQUMzQiwyQkFBaUM7Ozs7O0lBQ2pDLDhCQUEwQjs7Ozs7SUFDMUIseUJBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJy4uL3NldHRpbmdzL3NldHRpbmdzLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgSFRNTF9ESVIgPSAnZGlyJztcbmV4cG9ydCBjb25zdCBSVExfRElSRUNUSU9OID0gJ2RpcmVjdGlvbic7XG5leHBvcnQgY29uc3QgUlRMX05aX0NPTVBPTkVOVFMgPSBbJ21vZGFsJywgJ2RyYXdlcicsICdtZXNzYWdlJywgJ25vdGlmaWNhdGlvbicsICdpbWFnZSddO1xuZXhwb3J0IGNvbnN0IFJUTF9ERUxPTl9DT01QT05FTlRTID0gWydsb2FkaW5nJywgJ29uYm9hcmRpbmcnXTtcbmV4cG9ydCBjb25zdCBMVFIgPSAnbHRyJztcbmV4cG9ydCBjb25zdCBSVEwgPSAncnRsJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBSVExTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfZGlyOiBEaXJlY3Rpb24gPSBMVFI7XG4gIC8qKlxuICAgKiBHZXQgb3IgU2V0IHRoZSBjdXJyZW50IHRleHQgZGlyZWN0aW9uXG4gICAqXG4gICAqIOiOt+WPluaIluiuvue9ruW9k+WJjeaWh+Wtl+aWueWQkVxuICAgKi9cbiAgZ2V0IGRpcigpOiBEaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9kaXI7XG4gIH1cbiAgc2V0IGRpcih2YWx1ZTogRGlyZWN0aW9uKSB7XG4gICAgdGhpcy5fZGlyID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVMaWJDb25maWcoKTtcbiAgICB0aGlzLnVwZGF0ZUh0bWwoKTtcbiAgICAvLyBTaG91bGQgYmUgd2FpdCBpbml0ZWRcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICh0aGlzLmQgYXMgYW55KS52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5kLmNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICAgIHRoaXMuc3J2LnNldExheW91dChSVExfRElSRUNUSU9OLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBuZXh0IHRleHQgZGlyZWN0aW9uXG4gICAqXG4gICAqIOiOt+WPluS4i+S4gOasoeaWh+Wtl+aWueWQkVxuICAgKi9cbiAgZ2V0IG5leHREaXIoKTogRGlyZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5kaXIgPT09IExUUiA/IFJUTCA6IExUUjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gY2hhbmdlIG5vdGlmaWNhdGlvblxuICAgKlxuICAgKiDorqLpmIXlj5jmm7TpgJrnn6VcbiAgICovXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxEaXJlY3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy5zcnYubm90aWZ5LnBpcGUoXG4gICAgICBmaWx0ZXIodyA9PiB3Lm5hbWUgPT09IFJUTF9ESVJFQ1RJT04pLFxuICAgICAgbWFwKHYgPT4gdi52YWx1ZSksXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZDogRGlyZWN0aW9uYWxpdHksXG4gICAgcHJpdmF0ZSBzcnY6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIG56OiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBkZWxvbjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge1xuICAgIHRoaXMuZGlyID0gc3J2LmxheW91dC5kaXJlY3Rpb24gPT09IFJUTCA/IFJUTCA6IExUUjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGV4dCBkaXJlY3Rpb25cbiAgICpcbiAgICog5YiH5o2i5paH5a2X5pa55ZCRXG4gICAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLm5leHREaXI7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUh0bWwoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBodG1sRWwgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCdodG1sJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGh0bWxFbCkge1xuICAgICAgY29uc3QgZGlyID0gdGhpcy5kaXI7XG4gICAgICBodG1sRWwuc3R5bGUuZGlyZWN0aW9uID0gZGlyO1xuICAgICAgaHRtbEVsLmNsYXNzTGlzdC5yZW1vdmUoUlRMLCBMVFIpO1xuICAgICAgaHRtbEVsLmNsYXNzTGlzdC5hZGQoZGlyKTtcbiAgICAgIGh0bWxFbC5zZXRBdHRyaWJ1dGUoSFRNTF9ESVIsIGRpcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVMaWJDb25maWcoKTogdm9pZCB7XG4gICAgUlRMX05aX0NPTVBPTkVOVFMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXMubnouc2V0KG5hbWUgYXMgYW55LCB7IG56RGlyZWN0aW9uOiB0aGlzLmRpciB9KTtcbiAgICB9KTtcbiAgICBSVExfREVMT05fQ09NUE9ORU5UUy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpcy5kZWxvbi5zZXQobmFtZSBhcyBhbnksIHsgZGlyZWN0aW9uOiB0aGlzLmRpciB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19