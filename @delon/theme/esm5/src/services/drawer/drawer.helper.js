/**
 * @fileoverview added by tsickle
 * Generated from: src/services/drawer/drawer.helper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /** @nocollapse */ DrawerHelper.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DrawerHelper_Factory() { return new DrawerHelper(i0.ɵɵinject(i1.NzDrawerService)); }, token: DrawerHelper, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9kcmF3ZXIvZHJhd2VyLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFtQixlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDOzs7Ozs7QUFFNUMseUNBMEJDOzs7Ozs7Ozs7Ozs7Ozs7SUFiQyxtQ0FBMEM7Ozs7O0lBSTFDLHFDQUFpQjs7Ozs7SUFJakIsMkNBQXNCOzs7OztJQUV0QixvQ0FBZ0I7Ozs7O0lBRWhCLDRDQUFnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmxDO0lBRUUsc0JBQW9CLEdBQW9CO1FBQXBCLFFBQUcsR0FBSCxHQUFHLENBQWlCO0lBQUcsQ0FBQztJQUU1Qzs7T0FFRzs7Ozs7Ozs7O0lBQ0gsNkJBQU07Ozs7Ozs7O0lBQU4sVUFBTyxLQUFhLEVBQUUsSUFBUyxFQUFFLE1BQVksRUFBRSxPQUE2QjtRQUE1RSxpQkE2REM7UUE1REMsT0FBTyxHQUFHLFNBQVMsQ0FDakI7WUFDRSxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxJQUFJO1lBQ1osWUFBWSxFQUFFLEVBQUU7WUFDaEIsS0FBSyxFQUFFLElBQUk7WUFDWCxhQUFhLEVBQUU7Z0JBQ2IsV0FBVyxFQUFFLE9BQU87Z0JBQ3BCLGVBQWUsRUFBRSxFQUFFO2FBQ3BCO1NBQ0YsRUFDRCxPQUFPLENBQ1IsQ0FBQztRQUNGLE9BQU8sSUFBSSxVQUFVOzs7O1FBQUMsVUFBQyxRQUF1QjtZQUN0QyxJQUFBLGlDQUE4RSxFQUE1RSxjQUFJLEVBQUUsa0JBQU0sRUFBRSw4QkFBWSxFQUFFLGdDQUFnRDs7Z0JBQzlFLGNBQWMsR0FBb0I7Z0JBQ3RDLFNBQVMsRUFBRSxJQUFJO2dCQUNmLGVBQWUsRUFBRSxNQUFNO2dCQUN2QixPQUFPLEVBQUUsS0FBSzthQUNmO1lBRUQsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQzVCLGNBQWMsQ0FDWixtQkFBQSxhQUFhLEVBQUMsQ0FBQyxXQUFXLEtBQUssS0FBSyxJQUFJLG1CQUFBLGFBQWEsRUFBQyxDQUFDLFdBQVcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUN6RyxHQUFHLG1CQUFBLE9BQU8sRUFBQyxDQUFDLElBQUksQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxjQUFjLENBQUMsZUFBZSxHQUFHLENBQUMsbUJBQUEsYUFBYSxFQUFDLENBQUMsZUFBZSxJQUFHLGFBQVcsbUJBQUEsT0FBTyxFQUFDLENBQUMsSUFBTSxDQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEcsT0FBTyxtQkFBQSxhQUFhLEVBQUMsQ0FBQyxlQUFlLENBQUM7YUFDdkM7WUFFRCxJQUFJLE1BQU0sRUFBRTtnQkFDSixJQUFBLHVDQUE0RCxFQUExRCw0QkFBVyxFQUFFLHNCQUE2Qzs7O29CQUU1RCxZQUFZLEdBQUcsbUJBQUEsWUFBWSxFQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQzFDLElBQUksV0FBVyxLQUFLLE1BQU0sSUFBSSxXQUFXLEtBQUssT0FBTyxFQUFFO29CQUNyRCxjQUFjLENBQUMsV0FBVyxHQUFHO3dCQUMzQixNQUFNLEVBQUUsaUJBQWUsWUFBWSxRQUFLO3dCQUN4QyxRQUFRLEVBQUUsTUFBTTtxQkFDakIsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxjQUFjLENBQUMsV0FBVyxHQUFHO3dCQUMzQixNQUFNLEVBQUssQ0FBQyxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsR0FBRyxZQUFZLE9BQUk7d0JBQ2hELFFBQVEsRUFBRSxNQUFNO3FCQUNqQixDQUFDO2lCQUNIO2FBQ0Y7O2dCQUVLLE9BQU8sR0FBRyxLQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sc0JBQU0sY0FBYyxFQUFLLGFBQWEsRUFBRzs7Z0JBQ2xFLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFDLEdBQVE7Z0JBQ3hELElBQUksbUJBQUEsT0FBTyxFQUFDLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtvQkFDM0IsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO3dCQUNmLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3BCO2lCQUNGO3FCQUFNO29CQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3BCO2dCQUNELFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDcEIsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLENBQUMsRUFBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHOzs7Ozs7Ozs7SUFDSCw2QkFBTTs7Ozs7Ozs7SUFBTixVQUFPLEtBQWEsRUFBRSxJQUFTLEVBQUUsTUFBWSxFQUFFLE9BQTZCOztZQUNwRSxhQUFhLHNCQUNqQixjQUFjLEVBQUUsS0FBSyxJQUNsQixDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQ3RDO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBTyxPQUFPLElBQUUsYUFBYSxlQUFBLElBQUcsQ0FBQztJQUN6RSxDQUFDOztnQkEvRUYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkE5Q1IsZUFBZTs7O3VCQUZ6QztDQWdJQyxBQWhGRCxJQWdGQztTQS9FWSxZQUFZOzs7Ozs7SUFDWCwyQkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOekRyYXdlck9wdGlvbnMsIE56RHJhd2VyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJhd2VyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhd2VySGVscGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiDlpKflsI/vvIzoi6XlgLzkuLrmlbDlgLznsbvlnovvvIzliJnmoLnmja4gYG56UGxhY2VtZW50YCDoh6rliqjovazljJbkuLogYG56SGVpZ2h0YCDmiJYgYG56V2lkdGhg77yb5L6L5aaC77yabGfjgIE2MDDvvIzpu5jorqTvvJpgbWRgXG4gICAqXG4gICAqIHwg57G75Z6LIHwg6buY6K6k5aSn5bCPIHxcbiAgICogfCAtLS0gfCAtLS0tLS0gfFxuICAgKiB8IGBzbWAgfCBgMzAwYCB8XG4gICAqIHwgYG1kYCB8IGA2MDBgIHxcbiAgICogfCBgbGdgIHwgYDkwMGAgfFxuICAgKiB8IGB4bGAgfCBgMTIwMGAgfFxuICAgKlxuICAgKiA+IOS7peS4iuWAvO+8jOWPr+mAmui/h+imhuebluebuOW6lOeahExFU1Plj4LmlbDoh6rooYzosIPmlbRcbiAgICovXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgbnVtYmVyO1xuICAvKipcbiAgICog5piv5ZCm5YyF5ZCr5bqV6YOo5bel5YW35p2h77yM6buY6K6k77yaYHRydWVgXG4gICAqL1xuICBmb290ZXI/OiBib29sZWFuO1xuICAvKipcbiAgICog5bqV6YOo5bel5YW35p2h6auY5bqm77yM6buY6K6k77yaYDU1YFxuICAgKi9cbiAgZm9vdGVySGVpZ2h0PzogbnVtYmVyO1xuICAvKiog5piv5ZCm57K+5YeG77yI6buY6K6k77yaYHRydWVg77yJ77yM6Iul6L+U5Zue5YC86Z2e56m65YC877yIYG51bGxg5oiWYHVuZGVmaW5lZGDvvInop4bkuLrmiJDlip/vvIzlkKbliJnop4bkuLrplJnor68gKi9cbiAgZXhhY3Q/OiBib29sZWFuO1xuICAvKiog5oq95bGJIFtOekRyYXdlck9wdGlvbnNdKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2RyYXdlci96aCNuemRyYXdlcm9wdGlvbnMpIOWPguaVsCAqL1xuICBkcmF3ZXJPcHRpb25zPzogTnpEcmF3ZXJPcHRpb25zO1xufVxuXG4vKipcbiAqIOaKveWxiei+heWKqeexu1xuICpcbiAqICoq5rOo5oSP77yaKiog5p6E5bu657uT5p6c6YO95Y+v6KKr6K6i6ZiF77yM5L2G5rC46L+c6YO95LiN5Lya6Kem5Y+RIGBvYnNlcnZlci5lcnJvcmBcbiAqXG4gKiBAZXhhbXBsZVxuICogdGhpcy5kcmF3ZXJIZWxwZXIuY3JlYXRlKCdFZGl0JywgRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbiAqIC8vIOWvueS6jue7hOS7tueahOaIkOWKnyblhbPpl63nmoTlpITnkIbor7TmmI5cbiAqIC8vIOaIkOWKn1xuICogdGhpcy5OekRyYXdlclJlZi5jbG9zZShkYXRhKTtcbiAqIHRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UodHJ1ZSk7XG4gKiAvLyDlhbPpl61cbiAqIHRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoKTtcbiAqIHRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoZmFsc2UpO1xuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIERyYXdlckhlbHBlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBOekRyYXdlclNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIOaehOW7uuS4gOS4quaKveWxiVxuICAgKi9cbiAgY3JlYXRlKHRpdGxlOiBzdHJpbmcsIGNvbXA6IGFueSwgcGFyYW1zPzogYW55LCBvcHRpb25zPzogRHJhd2VySGVscGVyT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgb3B0aW9ucyA9IGRlZXBNZXJnZShcbiAgICAgIHtcbiAgICAgICAgc2l6ZTogJ21kJyxcbiAgICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgICBmb290ZXJIZWlnaHQ6IDU1LFxuICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgZHJhd2VyT3B0aW9uczoge1xuICAgICAgICAgIG56UGxhY2VtZW50OiAncmlnaHQnLFxuICAgICAgICAgIG56V3JhcENsYXNzTmFtZTogJycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgb3B0aW9ucyxcbiAgICApO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcbiAgICAgIGNvbnN0IHsgc2l6ZSwgZm9vdGVyLCBmb290ZXJIZWlnaHQsIGRyYXdlck9wdGlvbnMgfSA9IG9wdGlvbnMgYXMgRHJhd2VySGVscGVyT3B0aW9ucztcbiAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBOekRyYXdlck9wdGlvbnMgPSB7XG4gICAgICAgIG56Q29udGVudDogY29tcCxcbiAgICAgICAgbnpDb250ZW50UGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIG56VGl0bGU6IHRpdGxlLFxuICAgICAgfTtcblxuICAgICAgaWYgKHR5cGVvZiBzaXplID09PSAnbnVtYmVyJykge1xuICAgICAgICBkZWZhdWx0T3B0aW9uc1tcbiAgICAgICAgICBkcmF3ZXJPcHRpb25zIS5uelBsYWNlbWVudCA9PT0gJ3RvcCcgfHwgZHJhd2VyT3B0aW9ucyEubnpQbGFjZW1lbnQgPT09ICdib3R0b20nID8gJ256SGVpZ2h0JyA6ICdueldpZHRoJ1xuICAgICAgICBdID0gb3B0aW9ucyEuc2l6ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zLm56V3JhcENsYXNzTmFtZSA9IChkcmF3ZXJPcHRpb25zIS5ueldyYXBDbGFzc05hbWUgKyBgIGRyYXdlci0ke29wdGlvbnMhLnNpemV9YCkudHJpbSgpO1xuICAgICAgICBkZWxldGUgZHJhd2VyT3B0aW9ucyEubnpXcmFwQ2xhc3NOYW1lO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm9vdGVyKSB7XG4gICAgICAgIGNvbnN0IHsgbnpQbGFjZW1lbnQsIG56SGVpZ2h0IH0gPSBkcmF3ZXJPcHRpb25zIGFzIE56RHJhd2VyT3B0aW9ucztcbiAgICAgICAgLy8gU2hvdWxkIGJlIGhlYWRlciAqIGZvb3RlciwgYmVjYXVzZSBvZiBpbmNsdWRlcyBoZWFkZXJcbiAgICAgICAgY29uc3QgcmVkdWNlSGVpZ2h0ID0gZm9vdGVySGVpZ2h0ISAqIDIgLSAyO1xuICAgICAgICBpZiAobnpQbGFjZW1lbnQgPT09ICdsZWZ0JyB8fCBuelBsYWNlbWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgIGRlZmF1bHRPcHRpb25zLm56Qm9keVN0eWxlID0ge1xuICAgICAgICAgICAgaGVpZ2h0OiBgY2FsYygxMDAlIC0gJHtyZWR1Y2VIZWlnaHR9cHgpYCxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWZhdWx0T3B0aW9ucy5uekJvZHlTdHlsZSA9IHtcbiAgICAgICAgICAgIGhlaWdodDogYCR7KyhuekhlaWdodCB8fCAyNTYpIC0gcmVkdWNlSGVpZ2h0fXB4YCxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzdWJqZWN0ID0gdGhpcy5zcnYuY3JlYXRlKHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLmRyYXdlck9wdGlvbnMgfSk7XG4gICAgICBjb25zdCBhZnRlckNsb3NlJCA9IHN1YmplY3QuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zIS5leGFjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlmIChyZXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgYWZ0ZXJDbG9zZSQudW5zdWJzY3JpYmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOaehOW7uuS4gOS4quaKveWxie+8jOeCueWHu+iSmeWxguS4jeWFgeiuuOWFs+mXrVxuICAgKi9cbiAgc3RhdGljKHRpdGxlOiBzdHJpbmcsIGNvbXA6IGFueSwgcGFyYW1zPzogYW55LCBvcHRpb25zPzogRHJhd2VySGVscGVyT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgZHJhd2VyT3B0aW9ucyA9IHtcbiAgICAgIG56TWFza0Nsb3NhYmxlOiBmYWxzZSxcbiAgICAgIC4uLihvcHRpb25zICYmIG9wdGlvbnMuZHJhd2VyT3B0aW9ucyksXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUodGl0bGUsIGNvbXAsIHBhcmFtcywgeyAuLi5vcHRpb25zLCBkcmF3ZXJPcHRpb25zIH0pO1xuICB9XG59XG4iXX0=