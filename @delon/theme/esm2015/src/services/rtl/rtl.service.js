/**
 * @fileoverview added by tsickle
 * Generated from: src/services/rtl/rtl.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util';
import { NzConfigService } from 'ng-zorro-antd/core/config';
import { SettingsService } from '../settings/settings.service';
import * as i0 from "@angular/core";
import * as i1 from "../settings/settings.service";
import * as i2 from "ng-zorro-antd/core/config";
import * as i3 from "@delon/util";
import * as i4 from "@angular/cdk/platform";
import * as i5 from "@angular/common";
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
     * @param {?} srv
     * @param {?} nz
     * @param {?} delon
     * @param {?} platform
     * @param {?} doc
     */
    constructor(srv, nz, delon, platform, doc) {
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
        this.srv.setLayout(RTL_DIRECTION, value);
        this._dir = value;
        this.updateLibConfig();
        this.updateHtml();
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
            htmlEl.setAttribute(HTML_DIR, this.dir);
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
    { type: SettingsService },
    { type: NzConfigService },
    { type: AlainConfigService },
    { type: Platform },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ RTLService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RTLService_Factory() { return new RTLService(i0.ɵɵinject(i1.SettingsService), i0.ɵɵinject(i2.NzConfigService), i0.ɵɵinject(i3.AlainConfigService), i0.ɵɵinject(i4.Platform), i0.ɵɵinject(i5.DOCUMENT)); }, token: RTLService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnRsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvcnRsL3J0bC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7Ozs7QUFFL0QsTUFBTSxPQUFPLFFBQVEsR0FBRyxLQUFLOztBQUM3QixNQUFNLE9BQU8sYUFBYSxHQUFHLFdBQVc7O0FBQ3hDLE1BQU0sT0FBTyxpQkFBaUIsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxPQUFPLENBQUM7O0FBQ3hGLE1BQU0sT0FBTyxvQkFBb0IsR0FBRyxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUM7O0FBQzdELE1BQU0sT0FBTyxHQUFHLEdBQUcsS0FBSzs7QUFDeEIsTUFBTSxPQUFPLEdBQUcsR0FBRyxLQUFLO0FBR3hCLE1BQU0sT0FBTyxVQUFVOzs7Ozs7OztJQTBCckIsWUFDVSxHQUFvQixFQUNwQixFQUFtQixFQUNuQixLQUF5QixFQUN6QixRQUFrQixFQUNBLEdBQVE7UUFKMUIsUUFBRyxHQUFILEdBQUcsQ0FBaUI7UUFDcEIsT0FBRSxHQUFGLEVBQUUsQ0FBaUI7UUFDbkIsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFDekIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNBLFFBQUcsR0FBSCxHQUFHLENBQUs7UUE5QjVCLFNBQUksR0FBYyxHQUFHLENBQUM7UUFnQzVCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7O0lBM0JELElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7OztJQUNELElBQUksR0FBRyxDQUFDLEtBQWdCO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7Ozs7SUFPRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN0QyxDQUFDOzs7OztJQVlPLFVBQVU7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUjs7Y0FDSyxNQUFNLEdBQUcsbUJBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQWU7UUFDNUQsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7OztJQUVPLGVBQWU7UUFDckIsaUJBQWlCLENBQUMsT0FBTzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9CLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFBLElBQUksRUFBTyxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELENBQUMsRUFBQyxDQUFDO1FBQ0gsb0JBQW9CLENBQUMsT0FBTzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1CQUFBLElBQUksRUFBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBdERGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFUekIsZUFBZTtZQURmLGVBQWU7WUFEZixrQkFBa0I7WUFIbEIsUUFBUTs0Q0E4Q1osTUFBTSxTQUFDLFFBQVE7Ozs7Ozs7O0lBOUJsQiwwQkFBOEI7Ozs7O0lBMEI1Qix5QkFBNEI7Ozs7O0lBQzVCLHdCQUEyQjs7Ozs7SUFDM0IsMkJBQWlDOzs7OztJQUNqQyw4QkFBMEI7Ozs7O0lBQzFCLHlCQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpDb25maWdTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICcuLi9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlJztcblxuZXhwb3J0IGNvbnN0IEhUTUxfRElSID0gJ2Rpcic7XG5leHBvcnQgY29uc3QgUlRMX0RJUkVDVElPTiA9ICdkaXJlY3Rpb24nO1xuZXhwb3J0IGNvbnN0IFJUTF9OWl9DT01QT05FTlRTID0gWydtb2RhbCcsICdkcmF3ZXInLCAnbWVzc2FnZScsICdub3RpZmljYXRpb24nLCAnaW1hZ2UnXTtcbmV4cG9ydCBjb25zdCBSVExfREVMT05fQ09NUE9ORU5UUyA9IFsnbG9hZGluZycsICdvbmJvYXJkaW5nJ107XG5leHBvcnQgY29uc3QgTFRSID0gJ2x0cic7XG5leHBvcnQgY29uc3QgUlRMID0gJ3J0bCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUlRMU2VydmljZSB7XG4gIHByaXZhdGUgX2RpcjogRGlyZWN0aW9uID0gTFRSO1xuICAvKipcbiAgICogR2V0IG9yIFNldCB0aGUgY3VycmVudCB0ZXh0IGRpcmVjdGlvblxuICAgKlxuICAgKiDojrflj5bmiJborr7nva7lvZPliY3mloflrZfmlrnlkJFcbiAgICovXG4gIGdldCBkaXIoKTogRGlyZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5fZGlyO1xuICB9XG4gIHNldCBkaXIodmFsdWU6IERpcmVjdGlvbikge1xuICAgIHRoaXMuc3J2LnNldExheW91dChSVExfRElSRUNUSU9OLCB2YWx1ZSk7XG4gICAgdGhpcy5fZGlyID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVMaWJDb25maWcoKTtcbiAgICB0aGlzLnVwZGF0ZUh0bWwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5leHQgdGV4dCBkaXJlY3Rpb25cbiAgICpcbiAgICog6I635Y+W5LiL5LiA5qyh5paH5a2X5pa55ZCRXG4gICAqL1xuICBnZXQgbmV4dERpcigpOiBEaXJlY3Rpb24ge1xuICAgIHJldHVybiB0aGlzLmRpciA9PT0gTFRSID8gUlRMIDogTFRSO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzcnY6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIG56OiBOekNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBkZWxvbjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge1xuICAgIHRoaXMuZGlyID0gc3J2LmxheW91dC5kaXJlY3Rpb24gPT09IFJUTCA/IFJUTCA6IExUUjtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlSHRtbCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGh0bWxFbCA9IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoaHRtbEVsKSB7XG4gICAgICBodG1sRWwuc2V0QXR0cmlidXRlKEhUTUxfRElSLCB0aGlzLmRpcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVMaWJDb25maWcoKTogdm9pZCB7XG4gICAgUlRMX05aX0NPTVBPTkVOVFMuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXMubnouc2V0KG5hbWUgYXMgYW55LCB7IG56RGlyZWN0aW9uOiB0aGlzLmRpciB9KTtcbiAgICB9KTtcbiAgICBSVExfREVMT05fQ09NUE9ORU5UUy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgdGhpcy5kZWxvbi5zZXQobmFtZSBhcyBhbnksIHsgZGlyZWN0aW9uOiB0aGlzLmRpciB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19