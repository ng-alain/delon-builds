/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { deepMerge } from '@delon/util';
import { NzDrawerService } from 'ng-zorro-antd';
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
 * 示例：
 * ```ts
 * this.drawerHelper.create('Edit', FormEditComponent, { i }).subscribe(res => this.load());
 * // 对于组件的成功&关闭的处理说明
 * // 成功
 * this.NzDrawerRef.close(data);
 * this.NzDrawerRef.close(true);
 * // 关闭
 * this.NzDrawerRef.close();
 * this.NzDrawerRef.close(false);
 * ```
 */
export class DrawerHelper {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
        // 大部分情况下抽屉的层级比 Modal 会更低一些
        this.zIndex = 400;
    }
    /**
     * 构建一个抽屉
     * @param {?} title
     * @param {?} comp
     * @param {?=} params
     * @param {?=} options
     * @return {?}
     */
    create(title, comp, params, options) {
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
        (observer) => {
            const { size, footer, footerHeight, drawerOptions } = (/** @type {?} */ (options));
            /** @type {?} */
            const defaultOptions = {
                nzContent: comp,
                nzContentParams: params,
                nzZIndex: ++this.zIndex,
                nzTitle: title,
            };
            if (typeof size === 'number') {
                defaultOptions[(/** @type {?} */ (drawerOptions)).nzPlacement === 'top' || (/** @type {?} */ (drawerOptions)).nzPlacement === 'bottom' ? 'nzHeight' : 'nzWidth'] = (/** @type {?} */ (options)).size;
            }
            else {
                defaultOptions.nzWrapClassName = ((/** @type {?} */ (drawerOptions)).nzWrapClassName + ` drawer-${(/** @type {?} */ (options)).size}`).trim();
                delete (/** @type {?} */ (drawerOptions)).nzWrapClassName;
            }
            if (footer) {
                const { nzPlacement, nzHeight } = (/** @type {?} */ (drawerOptions));
                // Should be header * footer, because of includes header
                /** @type {?} */
                const reduceHeight = (/** @type {?} */ (footerHeight)) * 2 - 2;
                if (nzPlacement === 'left' || nzPlacement === 'right') {
                    defaultOptions.nzBodyStyle = {
                        height: `calc(100% - ${reduceHeight}px)`,
                        overflow: 'auto',
                    };
                }
                else {
                    defaultOptions.nzBodyStyle = {
                        height: `${+(nzHeight || 256) - reduceHeight}px`,
                        overflow: 'auto',
                    };
                }
            }
            /** @type {?} */
            const subject = this.srv.create(Object.assign({}, defaultOptions, drawerOptions));
            /** @type {?} */
            const afterClose$ = subject.afterClose.subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
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
    }
    /**
     * 构建一个抽屉，点击蒙层不允许关闭
     * @param {?} title
     * @param {?} comp
     * @param {?=} params
     * @param {?=} options
     * @return {?}
     */
    static(title, comp, params, options) {
        /** @type {?} */
        const drawerOptions = Object.assign({ nzMaskClosable: false }, (options && options.drawerOptions));
        return this.create(title, comp, params, Object.assign({}, options, { drawerOptions }));
    }
}
DrawerHelper.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
DrawerHelper.ctorParameters = () => [
    { type: NzDrawerService }
];
/** @nocollapse */ DrawerHelper.ngInjectableDef = i0.defineInjectable({ factory: function DrawerHelper_Factory() { return new DrawerHelper(i0.inject(i1.NzDrawerService)); }, token: DrawerHelper, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DrawerHelper.prototype.zIndex;
    /**
     * @type {?}
     * @private
     */
    DrawerHelper.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9kcmF3ZXIvZHJhd2VyLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBbUIsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7Ozs7OztBQUU1Qyx5Q0EwQkM7Ozs7Ozs7Ozs7Ozs7OztJQWJDLG1DQUEwQzs7Ozs7SUFJMUMscUNBQWlCOzs7OztJQUlqQiwyQ0FBc0I7Ozs7O0lBRXRCLG9DQUFnQjs7Ozs7SUFFaEIsNENBQWdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJsQyxNQUFNLE9BQU8sWUFBWTs7OztJQUl2QixZQUFvQixHQUFvQjtRQUFwQixRQUFHLEdBQUgsR0FBRyxDQUFpQjs7UUFGaEMsV0FBTSxHQUFHLEdBQUcsQ0FBQztJQUVzQixDQUFDOzs7Ozs7Ozs7SUFLNUMsTUFBTSxDQUFDLEtBQWEsRUFBRSxJQUFTLEVBQUUsTUFBWSxFQUFFLE9BQTZCO1FBQzFFLE9BQU8sR0FBRyxTQUFTLENBQUM7WUFDbEIsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsSUFBSTtZQUNaLFlBQVksRUFBRSxFQUFFO1lBQ2hCLEtBQUssRUFBRSxJQUFJO1lBQ1gsYUFBYSxFQUFFO2dCQUNiLFdBQVcsRUFBRSxPQUFPO2dCQUNwQixlQUFlLEVBQUUsRUFBRTthQUNwQjtTQUNGLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDWixPQUFPLElBQUksVUFBVTs7OztRQUFDLENBQUMsUUFBdUIsRUFBRSxFQUFFO2tCQUMxQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLGFBQWEsRUFBRSxHQUFHLG1CQUFBLE9BQU8sRUFBdUI7O2tCQUM5RSxjQUFjLEdBQW9CO2dCQUN0QyxTQUFTLEVBQUUsSUFBSTtnQkFDZixlQUFlLEVBQUUsTUFBTTtnQkFDdkIsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ3ZCLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7WUFFRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDNUIsY0FBYyxDQUNaLG1CQUFBLGFBQWEsRUFBQyxDQUFDLFdBQVcsS0FBSyxLQUFLLElBQUksbUJBQUEsYUFBYSxFQUFDLENBQUMsV0FBVyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQ3pHLEdBQUcsbUJBQUEsT0FBTyxFQUFDLENBQUMsSUFBSSxDQUFDO2FBQ25CO2lCQUFNO2dCQUNMLGNBQWMsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxtQkFBQSxhQUFhLEVBQUMsQ0FBQyxlQUFlLEdBQUcsV0FBVyxtQkFBQSxPQUFPLEVBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN0RyxPQUFPLG1CQUFBLGFBQWEsRUFBQyxDQUFDLGVBQWUsQ0FBQzthQUN2QztZQUVELElBQUksTUFBTSxFQUFFO3NCQUNKLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxHQUFHLG1CQUFBLGFBQWEsRUFBbUI7OztzQkFFNUQsWUFBWSxHQUFHLG1CQUFBLFlBQVksRUFBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2dCQUMxQyxJQUFJLFdBQVcsS0FBSyxNQUFNLElBQUksV0FBVyxLQUFLLE9BQU8sRUFBRTtvQkFDckQsY0FBYyxDQUFDLFdBQVcsR0FBRzt3QkFDM0IsTUFBTSxFQUFFLGVBQWUsWUFBWSxLQUFLO3dCQUN4QyxRQUFRLEVBQUUsTUFBTTtxQkFDakIsQ0FBQztpQkFDSDtxQkFBTTtvQkFDTCxjQUFjLENBQUMsV0FBVyxHQUFHO3dCQUMzQixNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxHQUFHLFlBQVksSUFBSTt3QkFDaEQsUUFBUSxFQUFFLE1BQU07cUJBQ2pCLENBQUM7aUJBQ0g7YUFDRjs7a0JBRUssT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxtQkFBTSxjQUFjLEVBQUssYUFBYSxFQUFHOztrQkFDbEUsV0FBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUzs7OztZQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7Z0JBQzVELElBQUksbUJBQUEsT0FBTyxFQUFDLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtvQkFDM0IsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO3dCQUNmLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3BCO2lCQUNGO3FCQUFNO29CQUNMLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3BCO2dCQUNELFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDcEIsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLENBQUMsRUFBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7O0lBS0QsTUFBTSxDQUFDLEtBQWEsRUFBRSxJQUFTLEVBQUUsTUFBWSxFQUFFLE9BQTZCOztjQUNwRSxhQUFhLG1CQUNqQixjQUFjLEVBQUUsS0FBSyxJQUNsQixDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQ3RDO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxvQkFBTyxPQUFPLElBQUUsYUFBYSxJQUFHLENBQUM7SUFDekUsQ0FBQzs7O1lBaEZGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFoRFIsZUFBZTs7Ozs7Ozs7SUFtRHZDLDhCQUFxQjs7Ozs7SUFFVCwyQkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOekRyYXdlck9wdGlvbnMsIE56RHJhd2VyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBEcmF3ZXJIZWxwZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIOWkp+Wwj++8jOiLpeWAvOS4uuaVsOWAvOexu+Wei++8jOWImeagueaNriBgbnpQbGFjZW1lbnRgIOiHquWKqOi9rOWMluS4uiBgbnpIZWlnaHRgIOaIliBgbnpXaWR0aGDvvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmBtZGBcbiAgICpcbiAgICogfCDnsbvlnosgfCDpu5jorqTlpKflsI8gfFxuICAgKiB8IC0tLSB8IC0tLS0tLSB8XG4gICAqIHwgYHNtYCB8IGAzMDBgIHxcbiAgICogfCBgbWRgIHwgYDYwMGAgfFxuICAgKiB8IGBsZ2AgfCBgOTAwYCB8XG4gICAqIHwgYHhsYCB8IGAxMjAwYCB8XG4gICAqXG4gICAqID4g5Lul5LiK5YC877yM5Y+v6YCa6L+H6KaG55uW55u45bqU55qETEVTU+WPguaVsOiHquihjOiwg+aVtFxuICAgKi9cbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCBudW1iZXI7XG4gIC8qKlxuICAgKiDmmK/lkKbljIXlkKvlupXpg6jlt6XlhbfmnaHvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGZvb3Rlcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDlupXpg6jlt6XlhbfmnaHpq5jluqbvvIzpu5jorqTvvJpgNTVgXG4gICAqL1xuICBmb290ZXJIZWlnaHQ/OiBudW1iZXI7XG4gIC8qKiDmmK/lkKbnsr7lh4bvvIjpu5jorqTvvJpgdHJ1ZWDvvInvvIzoi6Xov5Tlm57lgLzpnZ7nqbrlgLzvvIhgbnVsbGDmiJZgdW5kZWZpbmVkYO+8ieinhuS4uuaIkOWKn++8jOWQpuWImeinhuS4uumUmeivryAqL1xuICBleGFjdD86IGJvb2xlYW47XG4gIC8qKiDmir3lsYkgW056RHJhd2VyT3B0aW9uc10oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZHJhd2VyL3poI256ZHJhd2Vyb3B0aW9ucykg5Y+C5pWwICovXG4gIGRyYXdlck9wdGlvbnM/OiBOekRyYXdlck9wdGlvbnM7XG59XG5cbi8qKlxuICog5oq95bGJ6L6F5Yqp57G7XG4gKlxuICogKirms6jmhI/vvJoqKiDmnoTlu7rnu5Pmnpzpg73lj6/ooqvorqLpmIXvvIzkvYbmsLjov5zpg73kuI3kvJrop6blj5EgYG9ic2VydmVyLmVycm9yYFxuICpcbiAqIOekuuS+i++8mlxuYGBgdHNcbnRoaXMuZHJhd2VySGVscGVyLmNyZWF0ZSgnRWRpdCcsIEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4vLyDlr7nkuo7nu4Tku7bnmoTmiJDlip8m5YWz6Zet55qE5aSE55CG6K+05piOXG4vLyDmiJDlip9cbnRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoZGF0YSk7XG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKHRydWUpO1xuLy8g5YWz6ZetXG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKCk7XG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKGZhbHNlKTtcbmBgYFxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIERyYXdlckhlbHBlciB7XG4gIC8vIOWkp+mDqOWIhuaDheWGteS4i+aKveWxieeahOWxgue6p+avlCBNb2RhbCDkvJrmm7TkvY7kuIDkuptcbiAgcHJpdmF0ZSB6SW5kZXggPSA0MDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IE56RHJhd2VyU2VydmljZSkge31cblxuICAvKipcbiAgICog5p6E5bu65LiA5Liq5oq95bGJXG4gICAqL1xuICBjcmVhdGUodGl0bGU6IHN0cmluZywgY29tcDogYW55LCBwYXJhbXM/OiBhbnksIG9wdGlvbnM/OiBEcmF3ZXJIZWxwZXJPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBvcHRpb25zID0gZGVlcE1lcmdlKHtcbiAgICAgIHNpemU6ICdtZCcsXG4gICAgICBmb290ZXI6IHRydWUsXG4gICAgICBmb290ZXJIZWlnaHQ6IDU1LFxuICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICBkcmF3ZXJPcHRpb25zOiB7XG4gICAgICAgIG56UGxhY2VtZW50OiAncmlnaHQnLFxuICAgICAgICBueldyYXBDbGFzc05hbWU6ICcnLFxuICAgICAgfSxcbiAgICB9LCBvcHRpb25zKTtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG4gICAgICBjb25zdCB7IHNpemUsIGZvb3RlciwgZm9vdGVySGVpZ2h0LCBkcmF3ZXJPcHRpb25zIH0gPSBvcHRpb25zIGFzIERyYXdlckhlbHBlck9wdGlvbnM7XG4gICAgICBjb25zdCBkZWZhdWx0T3B0aW9uczogTnpEcmF3ZXJPcHRpb25zID0ge1xuICAgICAgICBuekNvbnRlbnQ6IGNvbXAsXG4gICAgICAgIG56Q29udGVudFBhcmFtczogcGFyYW1zLFxuICAgICAgICBuelpJbmRleDogKyt0aGlzLnpJbmRleCxcbiAgICAgICAgbnpUaXRsZTogdGl0bGUsXG4gICAgICB9O1xuXG4gICAgICBpZiAodHlwZW9mIHNpemUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zW1xuICAgICAgICAgIGRyYXdlck9wdGlvbnMhLm56UGxhY2VtZW50ID09PSAndG9wJyB8fCBkcmF3ZXJPcHRpb25zIS5uelBsYWNlbWVudCA9PT0gJ2JvdHRvbScgPyAnbnpIZWlnaHQnIDogJ256V2lkdGgnXG4gICAgICAgIF0gPSBvcHRpb25zIS5zaXplO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmYXVsdE9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lID0gKGRyYXdlck9wdGlvbnMhLm56V3JhcENsYXNzTmFtZSArIGAgZHJhd2VyLSR7b3B0aW9ucyEuc2l6ZX1gKS50cmltKCk7XG4gICAgICAgIGRlbGV0ZSBkcmF3ZXJPcHRpb25zIS5ueldyYXBDbGFzc05hbWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChmb290ZXIpIHtcbiAgICAgICAgY29uc3QgeyBuelBsYWNlbWVudCwgbnpIZWlnaHQgfSA9IGRyYXdlck9wdGlvbnMgYXMgTnpEcmF3ZXJPcHRpb25zO1xuICAgICAgICAvLyBTaG91bGQgYmUgaGVhZGVyICogZm9vdGVyLCBiZWNhdXNlIG9mIGluY2x1ZGVzIGhlYWRlclxuICAgICAgICBjb25zdCByZWR1Y2VIZWlnaHQgPSBmb290ZXJIZWlnaHQhICogMiAtIDI7XG4gICAgICAgIGlmIChuelBsYWNlbWVudCA9PT0gJ2xlZnQnIHx8IG56UGxhY2VtZW50ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgZGVmYXVsdE9wdGlvbnMubnpCb2R5U3R5bGUgPSB7XG4gICAgICAgICAgICBoZWlnaHQ6IGBjYWxjKDEwMCUgLSAke3JlZHVjZUhlaWdodH1weClgLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlZmF1bHRPcHRpb25zLm56Qm9keVN0eWxlID0ge1xuICAgICAgICAgICAgaGVpZ2h0OiBgJHsrKG56SGVpZ2h0IHx8IDI1NikgLSByZWR1Y2VIZWlnaHR9cHhgLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN1YmplY3QgPSB0aGlzLnNydi5jcmVhdGUoeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4uZHJhd2VyT3B0aW9ucyB9KTtcbiAgICAgIGNvbnN0IGFmdGVyQ2xvc2UkID0gc3ViamVjdC5hZnRlckNsb3NlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMhLmV4YWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHJlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICBhZnRlckNsb3NlJC51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5p6E5bu65LiA5Liq5oq95bGJ77yM54K55Ye76JKZ5bGC5LiN5YWB6K645YWz6ZetXG4gICAqL1xuICBzdGF0aWModGl0bGU6IHN0cmluZywgY29tcDogYW55LCBwYXJhbXM/OiBhbnksIG9wdGlvbnM/OiBEcmF3ZXJIZWxwZXJPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBkcmF3ZXJPcHRpb25zID0ge1xuICAgICAgbnpNYXNrQ2xvc2FibGU6IGZhbHNlLFxuICAgICAgLi4uKG9wdGlvbnMgJiYgb3B0aW9ucy5kcmF3ZXJPcHRpb25zKSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZSh0aXRsZSwgY29tcCwgcGFyYW1zLCB7IC4uLm9wdGlvbnMsIGRyYXdlck9wdGlvbnMgfSk7XG4gIH1cbn1cbiJdfQ==