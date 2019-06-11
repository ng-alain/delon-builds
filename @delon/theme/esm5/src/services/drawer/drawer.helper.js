/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { deepMerge } from '@delon/util';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/drawer";
/**
 * @record
 */
export function DrawerHelperOptions() { }
if (false) {
    /**
     * 大小，若值为数值类型，则根据 `nzPlacement` 自动转化为 `nzHeight` 或 `nzWidth`；例如：lg、600，默认：`md`
     *
     * | 类型 | 默认大小 |
     * | --- | ------ |
     * | `sm` | `300` |
     * | `md` | `600` |
     * | `lg` | `900` |
     * | `xl` | `1200` |
     *
     * > 以上值，可通过覆盖相应的LESS参数自行调整
     * @type {?|undefined}
     */
    DrawerHelperOptions.prototype.size;
    /**
     * 是否包含底部工具条，默认：`true`
     * @type {?|undefined}
     */
    DrawerHelperOptions.prototype.footer;
    /**
     * 底部工具条高度，默认：`55`
     * @type {?|undefined}
     */
    DrawerHelperOptions.prototype.footerHeight;
    /**
     * 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误
     * @type {?|undefined}
     */
    DrawerHelperOptions.prototype.exact;
    /**
     * 抽屉 [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) 参数
     * @type {?|undefined}
     */
    DrawerHelperOptions.prototype.drawerOptions;
}
/**
 * 抽屉辅助类
 *
 * **注意：** 构建结果都可被订阅，但永远都不会触发 `observer.error`
 *
 * \@example
 * this.drawerHelper.create('Edit', FormEditComponent, { i }).subscribe(res => this.load());
 * // 对于组件的成功&关闭的处理说明
 * // 成功
 * this.NzDrawerRef.close(data);
 * this.NzDrawerRef.close(true);
 * // 关闭
 * this.NzDrawerRef.close();
 * this.NzDrawerRef.close(false);
 */
var DrawerHelper = /** @class */ (function () {
    function DrawerHelper(srv) {
        this.srv = srv;
    }
    /**
     * 构建一个抽屉
     */
    /**
     * 构建一个抽屉
     * @param {?} title
     * @param {?} comp
     * @param {?=} params
     * @param {?=} options
     * @return {?}
     */
    DrawerHelper.prototype.create = /**
     * 构建一个抽屉
     * @param {?} title
     * @param {?} comp
     * @param {?=} params
     * @param {?=} options
     * @return {?}
     */
    function (title, comp, params, options) {
        var _this = this;
        options = deepMerge({
            size: 'md',
            footer: true,
            footerHeight: 55,
            exact: true,
            drawerOptions: {
                nzPlacement: 'right',
                nzWrapClassName: '',
            },
        }, options);
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            var _a = (/** @type {?} */ (options)), size = _a.size, footer = _a.footer, footerHeight = _a.footerHeight, drawerOptions = _a.drawerOptions;
            /** @type {?} */
            var defaultOptions = {
                nzContent: comp,
                nzContentParams: params,
                nzTitle: title,
            };
            if (typeof size === 'number') {
                defaultOptions[(/** @type {?} */ (drawerOptions)).nzPlacement === 'top' || (/** @type {?} */ (drawerOptions)).nzPlacement === 'bottom' ? 'nzHeight' : 'nzWidth'] = (/** @type {?} */ (options)).size;
            }
            else {
                defaultOptions.nzWrapClassName = ((/** @type {?} */ (drawerOptions)).nzWrapClassName + (" drawer-" + (/** @type {?} */ (options)).size)).trim();
                delete (/** @type {?} */ (drawerOptions)).nzWrapClassName;
            }
            if (footer) {
                var _b = (/** @type {?} */ (drawerOptions)), nzPlacement = _b.nzPlacement, nzHeight = _b.nzHeight;
                // Should be header * footer, because of includes header
                /** @type {?} */
                var reduceHeight = (/** @type {?} */ (footerHeight)) * 2 - 2;
                if (nzPlacement === 'left' || nzPlacement === 'right') {
                    defaultOptions.nzBodyStyle = {
                        height: "calc(100% - " + reduceHeight + "px)",
                        overflow: 'auto',
                    };
                }
                else {
                    defaultOptions.nzBodyStyle = {
                        height: +(nzHeight || 256) - reduceHeight + "px",
                        overflow: 'auto',
                    };
                }
            }
            /** @type {?} */
            var subject = _this.srv.create(tslib_1.__assign({}, defaultOptions, drawerOptions));
            /** @type {?} */
            var afterClose$ = subject.afterClose.subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                if ((/** @type {?} */ (options)).exact === true) {
                    if (res != null) {
                        observer.next(res);
                    }
                }
                else {
                    observer.next(res);
                }
                observer.complete();
                afterClose$.unsubscribe();
            }));
        }));
    };
    /**
     * 构建一个抽屉，点击蒙层不允许关闭
     */
    /**
     * 构建一个抽屉，点击蒙层不允许关闭
     * @param {?} title
     * @param {?} comp
     * @param {?=} params
     * @param {?=} options
     * @return {?}
     */
    DrawerHelper.prototype.static = /**
     * 构建一个抽屉，点击蒙层不允许关闭
     * @param {?} title
     * @param {?} comp
     * @param {?=} params
     * @param {?=} options
     * @return {?}
     */
    function (title, comp, params, options) {
        /** @type {?} */
        var drawerOptions = tslib_1.__assign({ nzMaskClosable: false }, (options && options.drawerOptions));
        return this.create(title, comp, params, tslib_1.__assign({}, options, { drawerOptions: drawerOptions }));
    };
    DrawerHelper.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    DrawerHelper.ctorParameters = function () { return [
        { type: NzDrawerService }
    ]; };
    /** @nocollapse */ DrawerHelper.ngInjectableDef = i0.defineInjectable({ factory: function DrawerHelper_Factory() { return new DrawerHelper(i0.inject(i1.NzDrawerService)); }, token: DrawerHelper, providedIn: "root" });
    return DrawerHelper;
}());
export { DrawerHelper };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DrawerHelper.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9kcmF3ZXIvZHJhd2VyLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQW1CLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7Ozs7OztBQUU1Qyx5Q0EwQkM7Ozs7Ozs7Ozs7Ozs7OztJQWJDLG1DQUEwQzs7Ozs7SUFJMUMscUNBQWlCOzs7OztJQUlqQiwyQ0FBc0I7Ozs7O0lBRXRCLG9DQUFnQjs7Ozs7SUFFaEIsNENBQWdDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWtCbEM7SUFFRSxzQkFBb0IsR0FBb0I7UUFBcEIsUUFBRyxHQUFILEdBQUcsQ0FBaUI7SUFBRyxDQUFDO0lBRTVDOztPQUVHOzs7Ozs7Ozs7SUFDSCw2QkFBTTs7Ozs7Ozs7SUFBTixVQUFPLEtBQWEsRUFBRSxJQUFTLEVBQUUsTUFBWSxFQUFFLE9BQTZCO1FBQTVFLGlCQTZEQztRQTVEQyxPQUFPLEdBQUcsU0FBUyxDQUNqQjtZQUNFLElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTSxFQUFFLElBQUk7WUFDWixZQUFZLEVBQUUsRUFBRTtZQUNoQixLQUFLLEVBQUUsSUFBSTtZQUNYLGFBQWEsRUFBRTtnQkFDYixXQUFXLEVBQUUsT0FBTztnQkFDcEIsZUFBZSxFQUFFLEVBQUU7YUFDcEI7U0FDRixFQUNELE9BQU8sQ0FDUixDQUFDO1FBQ0YsT0FBTyxJQUFJLFVBQVU7Ozs7UUFBQyxVQUFDLFFBQXVCO1lBQ3RDLElBQUEsaUNBQThFLEVBQTVFLGNBQUksRUFBRSxrQkFBTSxFQUFFLDhCQUFZLEVBQUUsZ0NBQWdEOztnQkFDOUUsY0FBYyxHQUFvQjtnQkFDdEMsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsZUFBZSxFQUFFLE1BQU07Z0JBQ3ZCLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7WUFFRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDNUIsY0FBYyxDQUNaLG1CQUFBLGFBQWEsRUFBQyxDQUFDLFdBQVcsS0FBSyxLQUFLLElBQUksbUJBQUEsYUFBYSxFQUFDLENBQUMsV0FBVyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQ3pHLEdBQUcsbUJBQUEsT0FBTyxFQUFDLENBQUMsSUFBSSxDQUFDO2FBQ25CO2lCQUFNO2dCQUNMLGNBQWMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxtQkFBQSxhQUFhLEVBQUMsQ0FBQyxlQUFlLElBQUcsYUFBVyxtQkFBQSxPQUFPLEVBQUMsQ0FBQyxJQUFNLENBQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN0RyxPQUFPLG1CQUFBLGFBQWEsRUFBQyxDQUFDLGVBQWUsQ0FBQzthQUN2QztZQUVELElBQUksTUFBTSxFQUFFO2dCQUNKLElBQUEsdUNBQTRELEVBQTFELDRCQUFXLEVBQUUsc0JBQTZDOzs7b0JBRTVELFlBQVksR0FBRyxtQkFBQSxZQUFZLEVBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFDMUMsSUFBSSxXQUFXLEtBQUssTUFBTSxJQUFJLFdBQVcsS0FBSyxPQUFPLEVBQUU7b0JBQ3JELGNBQWMsQ0FBQyxXQUFXLEdBQUc7d0JBQzNCLE1BQU0sRUFBRSxpQkFBZSxZQUFZLFFBQUs7d0JBQ3hDLFFBQVEsRUFBRSxNQUFNO3FCQUNqQixDQUFDO2lCQUNIO3FCQUFNO29CQUNMLGNBQWMsQ0FBQyxXQUFXLEdBQUc7d0JBQzNCLE1BQU0sRUFBSyxDQUFDLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxHQUFHLFlBQVksT0FBSTt3QkFDaEQsUUFBUSxFQUFFLE1BQU07cUJBQ2pCLENBQUM7aUJBQ0g7YUFDRjs7Z0JBRUssT0FBTyxHQUFHLEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxzQkFBTSxjQUFjLEVBQUssYUFBYSxFQUFHOztnQkFDbEUsV0FBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsR0FBUTtnQkFDeEQsSUFBSSxtQkFBQSxPQUFPLEVBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO29CQUMzQixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7d0JBQ2YsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDcEI7aUJBQ0Y7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEI7Z0JBQ0QsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwQixXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUIsQ0FBQyxFQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7OztJQUNILDZCQUFNOzs7Ozs7OztJQUFOLFVBQU8sS0FBYSxFQUFFLElBQVMsRUFBRSxNQUFZLEVBQUUsT0FBNkI7O1lBQ3BFLGFBQWEsc0JBQ2pCLGNBQWMsRUFBRSxLQUFLLElBQ2xCLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FDdEM7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLHVCQUFPLE9BQU8sSUFBRSxhQUFhLGVBQUEsSUFBRyxDQUFDO0lBQ3pFLENBQUM7O2dCQS9FRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQTlDUixlQUFlOzs7dUJBRnpDO0NBZ0lDLEFBaEZELElBZ0ZDO1NBL0VZLFlBQVk7Ozs7OztJQUNYLDJCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56RHJhd2VyT3B0aW9ucywgTnpEcmF3ZXJTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcmF3ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBEcmF3ZXJIZWxwZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIOWkp+Wwj++8jOiLpeWAvOS4uuaVsOWAvOexu+Wei++8jOWImeagueaNriBgbnpQbGFjZW1lbnRgIOiHquWKqOi9rOWMluS4uiBgbnpIZWlnaHRgIOaIliBgbnpXaWR0aGDvvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmBtZGBcbiAgICpcbiAgICogfCDnsbvlnosgfCDpu5jorqTlpKflsI8gfFxuICAgKiB8IC0tLSB8IC0tLS0tLSB8XG4gICAqIHwgYHNtYCB8IGAzMDBgIHxcbiAgICogfCBgbWRgIHwgYDYwMGAgfFxuICAgKiB8IGBsZ2AgfCBgOTAwYCB8XG4gICAqIHwgYHhsYCB8IGAxMjAwYCB8XG4gICAqXG4gICAqID4g5Lul5LiK5YC877yM5Y+v6YCa6L+H6KaG55uW55u45bqU55qETEVTU+WPguaVsOiHquihjOiwg+aVtFxuICAgKi9cbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCBudW1iZXI7XG4gIC8qKlxuICAgKiDmmK/lkKbljIXlkKvlupXpg6jlt6XlhbfmnaHvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGZvb3Rlcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDlupXpg6jlt6XlhbfmnaHpq5jluqbvvIzpu5jorqTvvJpgNTVgXG4gICAqL1xuICBmb290ZXJIZWlnaHQ/OiBudW1iZXI7XG4gIC8qKiDmmK/lkKbnsr7lh4bvvIjpu5jorqTvvJpgdHJ1ZWDvvInvvIzoi6Xov5Tlm57lgLzpnZ7nqbrlgLzvvIhgbnVsbGDmiJZgdW5kZWZpbmVkYO+8ieinhuS4uuaIkOWKn++8jOWQpuWImeinhuS4uumUmeivryAqL1xuICBleGFjdD86IGJvb2xlYW47XG4gIC8qKiDmir3lsYkgW056RHJhd2VyT3B0aW9uc10oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZHJhd2VyL3poI256ZHJhd2Vyb3B0aW9ucykg5Y+C5pWwICovXG4gIGRyYXdlck9wdGlvbnM/OiBOekRyYXdlck9wdGlvbnM7XG59XG5cbi8qKlxuICog5oq95bGJ6L6F5Yqp57G7XG4gKlxuICogKirms6jmhI/vvJoqKiDmnoTlu7rnu5Pmnpzpg73lj6/ooqvorqLpmIXvvIzkvYbmsLjov5zpg73kuI3kvJrop6blj5EgYG9ic2VydmVyLmVycm9yYFxuICpcbiAqIEBleGFtcGxlXG4gKiB0aGlzLmRyYXdlckhlbHBlci5jcmVhdGUoJ0VkaXQnLCBGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuICogLy8g5a+55LqO57uE5Lu255qE5oiQ5YqfJuWFs+mXreeahOWkhOeQhuivtOaYjlxuICogLy8g5oiQ5YqfXG4gKiB0aGlzLk56RHJhd2VyUmVmLmNsb3NlKGRhdGEpO1xuICogdGhpcy5OekRyYXdlclJlZi5jbG9zZSh0cnVlKTtcbiAqIC8vIOWFs+mXrVxuICogdGhpcy5OekRyYXdlclJlZi5jbG9zZSgpO1xuICogdGhpcy5OekRyYXdlclJlZi5jbG9zZShmYWxzZSk7XG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgRHJhd2VySGVscGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IE56RHJhd2VyU2VydmljZSkge31cblxuICAvKipcbiAgICog5p6E5bu65LiA5Liq5oq95bGJXG4gICAqL1xuICBjcmVhdGUodGl0bGU6IHN0cmluZywgY29tcDogYW55LCBwYXJhbXM/OiBhbnksIG9wdGlvbnM/OiBEcmF3ZXJIZWxwZXJPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBvcHRpb25zID0gZGVlcE1lcmdlKFxuICAgICAge1xuICAgICAgICBzaXplOiAnbWQnLFxuICAgICAgICBmb290ZXI6IHRydWUsXG4gICAgICAgIGZvb3RlckhlaWdodDogNTUsXG4gICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICBkcmF3ZXJPcHRpb25zOiB7XG4gICAgICAgICAgbnpQbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgICAgICAgbnpXcmFwQ2xhc3NOYW1lOiAnJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBvcHRpb25zLFxuICAgICk7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xuICAgICAgY29uc3QgeyBzaXplLCBmb290ZXIsIGZvb3RlckhlaWdodCwgZHJhd2VyT3B0aW9ucyB9ID0gb3B0aW9ucyBhcyBEcmF3ZXJIZWxwZXJPcHRpb25zO1xuICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE56RHJhd2VyT3B0aW9ucyA9IHtcbiAgICAgICAgbnpDb250ZW50OiBjb21wLFxuICAgICAgICBuekNvbnRlbnRQYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgbnpUaXRsZTogdGl0bGUsXG4gICAgICB9O1xuXG4gICAgICBpZiAodHlwZW9mIHNpemUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zW1xuICAgICAgICAgIGRyYXdlck9wdGlvbnMhLm56UGxhY2VtZW50ID09PSAndG9wJyB8fCBkcmF3ZXJPcHRpb25zIS5uelBsYWNlbWVudCA9PT0gJ2JvdHRvbScgPyAnbnpIZWlnaHQnIDogJ256V2lkdGgnXG4gICAgICAgIF0gPSBvcHRpb25zIS5zaXplO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmYXVsdE9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lID0gKGRyYXdlck9wdGlvbnMhLm56V3JhcENsYXNzTmFtZSArIGAgZHJhd2VyLSR7b3B0aW9ucyEuc2l6ZX1gKS50cmltKCk7XG4gICAgICAgIGRlbGV0ZSBkcmF3ZXJPcHRpb25zIS5ueldyYXBDbGFzc05hbWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChmb290ZXIpIHtcbiAgICAgICAgY29uc3QgeyBuelBsYWNlbWVudCwgbnpIZWlnaHQgfSA9IGRyYXdlck9wdGlvbnMgYXMgTnpEcmF3ZXJPcHRpb25zO1xuICAgICAgICAvLyBTaG91bGQgYmUgaGVhZGVyICogZm9vdGVyLCBiZWNhdXNlIG9mIGluY2x1ZGVzIGhlYWRlclxuICAgICAgICBjb25zdCByZWR1Y2VIZWlnaHQgPSBmb290ZXJIZWlnaHQhICogMiAtIDI7XG4gICAgICAgIGlmIChuelBsYWNlbWVudCA9PT0gJ2xlZnQnIHx8IG56UGxhY2VtZW50ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgZGVmYXVsdE9wdGlvbnMubnpCb2R5U3R5bGUgPSB7XG4gICAgICAgICAgICBoZWlnaHQ6IGBjYWxjKDEwMCUgLSAke3JlZHVjZUhlaWdodH1weClgLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlZmF1bHRPcHRpb25zLm56Qm9keVN0eWxlID0ge1xuICAgICAgICAgICAgaGVpZ2h0OiBgJHsrKG56SGVpZ2h0IHx8IDI1NikgLSByZWR1Y2VIZWlnaHR9cHhgLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN1YmplY3QgPSB0aGlzLnNydi5jcmVhdGUoeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4uZHJhd2VyT3B0aW9ucyB9KTtcbiAgICAgIGNvbnN0IGFmdGVyQ2xvc2UkID0gc3ViamVjdC5hZnRlckNsb3NlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMhLmV4YWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHJlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICBhZnRlckNsb3NlJC51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5p6E5bu65LiA5Liq5oq95bGJ77yM54K55Ye76JKZ5bGC5LiN5YWB6K645YWz6ZetXG4gICAqL1xuICBzdGF0aWModGl0bGU6IHN0cmluZywgY29tcDogYW55LCBwYXJhbXM/OiBhbnksIG9wdGlvbnM/OiBEcmF3ZXJIZWxwZXJPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBkcmF3ZXJPcHRpb25zID0ge1xuICAgICAgbnpNYXNrQ2xvc2FibGU6IGZhbHNlLFxuICAgICAgLi4uKG9wdGlvbnMgJiYgb3B0aW9ucy5kcmF3ZXJPcHRpb25zKSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZSh0aXRsZSwgY29tcCwgcGFyYW1zLCB7IC4uLm9wdGlvbnMsIGRyYXdlck9wdGlvbnMgfSk7XG4gIH1cbn1cbiJdfQ==