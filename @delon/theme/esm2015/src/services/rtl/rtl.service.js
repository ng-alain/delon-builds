/**
 * @fileoverview added by tsickle
 * Generated from: src/services/rtl/rtl.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnRsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zcmMvc2VydmljZXMvcnRsL3J0bC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRTVELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7QUFFL0QsTUFBTSxPQUFPLFFBQVEsR0FBRyxLQUFLOztBQUM3QixNQUFNLE9BQU8sYUFBYSxHQUFHLFdBQVc7O0FBQ3hDLE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxPQUFPLENBQUM7O0FBQ3hGLE1BQU0sT0FBTyxvQkFBb0IsR0FBRyxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUM7O0FBQzdELE1BQU0sT0FBTyxHQUFHLEdBQUcsS0FBSzs7QUFDeEIsTUFBTSxPQUFPLEdBQUcsR0FBRyxLQUFLO0FBR3hCLE1BQU0sT0FBTyxVQUFVOzs7Ozs7Ozs7SUEyQ3JCLFlBQ1UsQ0FBaUIsRUFDakIsR0FBb0IsRUFDcEIsRUFBbUIsRUFDbkIsS0FBeUIsRUFDekIsUUFBa0IsRUFDQSxH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LENBQUMsT0FBTzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1CQUFBLElBQUksRUFBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBckZGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFqQmQsY0FBYztZQVF6QixlQUFlO1lBSGYsZUFBZTtZQURmLGtCQUFrQjtZQUhsQixRQUFROzRDQWtFWixNQUFNLFNBQUMsUUFBUTs7Ozs7Ozs7SUFoRGxCLDBCQUE4Qjs7Ozs7SUEyQzVCLHVCQUF5Qjs7Ozs7SUFDekIseUJBQTRCOzs7OztJQUM1Qix3QkFBMkI7Ozs7O0lBQzNCLDJCQUFpQzs7Ozs7SUFDakMsOEJBQTBCOzs7OztJQUMxQix5QkFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJy4uL3NldHRpbmdzL3NldHRpbmdzLnNlcnZpY2UnO1xuXG5leHBvcnQgY29uc3QgSFRNTF9ESVIgPSAnZGlyJztcbmV4cG9ydCBjb25zdCBSVExfRElSRUNUSU9OID0gJ2RpcmVjdGlvbic7XG5leHBvcnQgY29uc3QgUlRMX05aX0NPTVBPTkVOVFMgPSBbJ21vZGFsJywgJ2RyYXdlcicsICdtZXNzYWdlJywgJ25vdGlmaWNhdGlvbicsICdpbWFnZSddO1xuZXhwb3J0IGNvbnN0IFJUTF9ERUxPTl9DT01QT05FTlRTID0gWydsb2FkaW5nJywgJ29uYm9hcmRpbmcnXTtcbmV4cG9ydCBjb25zdCBMVFIgPSAnbHRyJztcbmV4cG9ydCBjb25zdCBSVEwgPSAncnRsJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBSVExTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfZGlyOiBEaXJlY3Rpb24gPSBMVFI7XG4gIC8qKlxuICAgKiBHZXQgb3IgU2V0IHRoZSBjdXJyZW50IHRleHQgZGlyZWN0aW9uXG4gICAqXG4gICAqIOiOt+WPluaIluiuvue9ruW9k+WJjeaWh+Wtl+aWueWQkVxuICAgKi9cbiAgZ2V0IGRpcigpOiBEaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLl9kaXI7XG4gIH1cbiAgc2V0IGRpcih2YWx1ZTogRGlyZWN0aW9uKSB7XG4gICAgdGhpcy5fZGlyID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVMaWJDb25maWcoKTtcbiAgICB0aGlzLnVwZGF0ZUh0bWwoKTtcbiAgICAvLyBTaG91bGQgYmUgd2FpdCBpbml0ZWRcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgICh0aGlzLmQgYXMgYW55KS52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5kLmNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICAgIHRoaXMuc3J2LnNldExheW91dChSVExfRElSRUNUSU9OLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBuZXh0IHRleHQgZGlyZWN0aW9uXG4gICAqXG4gICAqIOiOt+WPluS4i+S4gOasoeaWh+Wtl+aWueWQkVxuICAgKi9cbiAgZ2V0IG5leHREaXIoKTogRGlyZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5kaXIgPT09IExUUiA/IFJUTCA6IExUUjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gY2hhbmdlIG5vdGlmaWNhdGlvblxuICAgKlxuICAgKiDorqLpmIXlj5jmm7TpgJrnn6VcbiAgICovXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxEaXJlY3Rpb24+IHtcbiAgICByZXR1cm4gdGhpcy5zcnYubm90aWZ5LnBpcGUoXG4gICAgICBmaWx0ZXIodyA9PiB3Lm5hbWUgPT09IFJUTF9ESVJFQ1RJT04pLFxuICAgICAgbWFwKHYgPT4gdi52YWx1ZSksXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZDogRGlyZWN0aW9uYWxpdHksXG4gICAgcHJpdmF0ZSBzcnY6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIG56OiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBkZWxvbjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge1xuICAgIHRoaXMuZGlyID0gc3J2LmxheW91dC5kaXJlY3Rpb24gPT09IFJUTCA/IFJUTCA6IExUUjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGV4dCBkaXJlY3Rpb25cbiAgICpcbiAgICog5YiH5o2i5paH5a2X5pa55ZCRXG4gICAqL1xuICB0b2dnbGUoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLm5leHREaXI7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUh0bWwoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBodG1sRWwgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCdodG1sJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGh0bWxFbCkge1xuICAgICAgY29uc3QgZGlyID0gdGhpcy5kaXI7XG4gICAgICBodG1sRWwuc3R5bGUuZGlyZWN0aW9uID0gZGlyO1xuICAgICAgaHRtbEVsLmNsYXNzTGlzdC5yZW1vdmUoUlRMLCBMVFIpO1xuICAgICAgaHRtbEVsLmNsYXNzTGlzdC5hZGQoZGlyKTtcbiAgICAgIGh0bWxFbC5zZXRBdHRyaWJ1dGUoSFRNTF9ESVIsIGRpcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVMaWJDb25maWcoKTogdm9pZCB7XG4gICAgUlRMX05aX0NPTVBPTkVOVFMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXMubnouc2V0KG5hbWUgYXMgYW55LCB7IG56RGlyZWN0aW9uOiB0aGlzLmRpciB9KTtcbiAgICB9KTtcbiAgICBSVExfREVMT05fQ09NUE9ORU5UUy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpcy5kZWxvbi5zZXQobmFtZSBhcyBhbnksIHsgZGlyZWN0aW9uOiB0aGlzLmRpciB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19