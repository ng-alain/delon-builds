/**
 * @fileoverview added by tsickle
 * Generated from: g2.servicce.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AlainConfigService, LazyService } from '@delon/util';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util";
export class G2Service {
    /**
     * @param {?} cogSrv
     * @param {?} lazySrv
     */
    constructor(cogSrv, lazySrv) {
        this.cogSrv = cogSrv;
        this.lazySrv = lazySrv;
        this.loading = false;
        this.loaded = false;
        this.notify$ = new Subject();
        this.cog = { theme: '' };
    }
    /**
     * @return {?}
     */
    get cog() {
        return this._cog;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set cog(val) {
        this._cog = (/** @type {?} */ (this.cogSrv.merge('chart', (/** @type {?} */ ({
            theme: '',
            libs: [
                'https://gw.alipayobjects.com/os/lib/antv/g2/4.1.4/dist/g2.min.js',
                'https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.7/dist/data-set.js',
            ],
        })), val)));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    libLoad() {
        if ((/** @type {?} */ (this)).loading) {
            if ((/** @type {?} */ (this)).loaded) {
                (/** @type {?} */ (this)).notify$.next();
            }
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).loading = true;
        (/** @type {?} */ (this)).lazySrv.load((/** @type {?} */ ((/** @type {?} */ (this)).cog.libs))).then((/**
         * @return {?}
         */
        () => {
            (/** @type {?} */ (this)).loaded = true;
            (/** @type {?} */ (this)).notify$.next();
        }));
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    get notify() {
        return this.notify$.asObservable();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.notify$.unsubscribe();
    }
}
G2Service.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
G2Service.ctorParameters = () => [
    { type: AlainConfigService },
    { type: LazyService }
];
/** @nocollapse */ G2Service.ɵprov = i0.ɵɵdefineInjectable({ factory: function G2Service_Factory() { return new G2Service(i0.ɵɵinject(i1.AlainConfigService), i0.ɵɵinject(i1.LazyService)); }, token: G2Service, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    G2Service.prototype._cog;
    /**
     * @type {?}
     * @private
     */
    G2Service.prototype.loading;
    /**
     * @type {?}
     * @private
     */
    G2Service.prototype.loaded;
    /**
     * @type {?}
     * @private
     */
    G2Service.prototype.notify$;
    /**
     * @type {?}
     * @private
     */
    G2Service.prototype.cogSrv;
    /**
     * @type {?}
     * @private
     */
    G2Service.prototype.lazySrv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuc2VydmljY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvY29yZS8iLCJzb3VyY2VzIjpbImcyLnNlcnZpY2NlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQW9CLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRixPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFHM0MsTUFBTSxPQUFPLFNBQVM7Ozs7O0lBdUJwQixZQUFvQixNQUEwQixFQUFVLE9BQW9CO1FBQXhELFdBQU0sR0FBTixNQUFNLENBQW9CO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQXJCcEUsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFvQnBDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQW5CRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFDRCxJQUFJLEdBQUcsQ0FBQyxHQUFxQjtRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUMzQixPQUFPLEVBQ1AsbUJBQUE7WUFDRSxLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRTtnQkFDSixrRUFBa0U7Z0JBQ2xFLDJFQUEyRTthQUM1RTtTQUNGLEVBQW9CLEVBQ3JCLEdBQUcsQ0FDSixFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFNRCxPQUFPO1FBQ0wsSUFBSSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JCO1lBQ0QsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztTQUNiO1FBQ0QsbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFBLG1CQUFBLElBQUksRUFBQSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLElBQUk7OztRQUFDLEdBQUcsRUFBRTtZQUMxQyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLG1CQUFBLElBQUksRUFBQSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7WUFqREYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQUhQLGtCQUFrQjtZQUFFLFdBQVc7Ozs7Ozs7O0lBS3hELHlCQUErQjs7Ozs7SUFDL0IsNEJBQXdCOzs7OztJQUN4QiwyQkFBdUI7Ozs7O0lBQ3ZCLDRCQUFzQzs7Ozs7SUFtQjFCLDJCQUFrQzs7Ozs7SUFBRSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ2hhcnRDb25maWcsIEFsYWluQ29uZmlnU2VydmljZSwgTGF6eVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgRzJTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfY29nOiBBbGFpbkNoYXJ0Q29uZmlnO1xuICBwcml2YXRlIGxvYWRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBsb2FkZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBub3RpZnkkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBnZXQgY29nKCk6IEFsYWluQ2hhcnRDb25maWcge1xuICAgIHJldHVybiB0aGlzLl9jb2c7XG4gIH1cbiAgc2V0IGNvZyh2YWw6IEFsYWluQ2hhcnRDb25maWcpIHtcbiAgICB0aGlzLl9jb2cgPSB0aGlzLmNvZ1Nydi5tZXJnZShcbiAgICAgICdjaGFydCcsXG4gICAgICB7XG4gICAgICAgIHRoZW1lOiAnJyxcbiAgICAgICAgbGliczogW1xuICAgICAgICAgICdodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL29zL2xpYi9hbnR2L2cyLzQuMS40L2Rpc3QvZzIubWluLmpzJyxcbiAgICAgICAgICAnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS9vcy9saWIvYW50di9kYXRhLXNldC8wLjExLjcvZGlzdC9kYXRhLXNldC5qcycsXG4gICAgICAgIF0sXG4gICAgICB9IGFzIEFsYWluQ2hhcnRDb25maWcsXG4gICAgICB2YWwsXG4gICAgKSE7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLCBwcml2YXRlIGxhenlTcnY6IExhenlTZXJ2aWNlKSB7XG4gICAgdGhpcy5jb2cgPSB7IHRoZW1lOiAnJyB9O1xuICB9XG5cbiAgbGliTG9hZCgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5sb2FkaW5nKSB7XG4gICAgICBpZiAodGhpcy5sb2FkZWQpIHtcbiAgICAgICAgdGhpcy5ub3RpZnkkLm5leHQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMubGF6eVNydi5sb2FkKHRoaXMuY29nLmxpYnMhKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMubm90aWZ5JC5uZXh0KCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXQgbm90aWZ5KCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm5vdGlmeSQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19