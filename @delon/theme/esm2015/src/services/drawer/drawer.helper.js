/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9kcmF3ZXIvZHJhd2VyLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBbUIsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0FBRTVDLHlDQTBCQzs7Ozs7Ozs7Ozs7Ozs7O0lBYkMsbUNBQTBDOzs7OztJQUkxQyxxQ0FBaUI7Ozs7O0lBSWpCLDJDQUFzQjs7Ozs7SUFFdEIsb0NBQWdCOzs7OztJQUVoQiw0Q0FBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQmxDLE1BQU0sT0FBTyxZQUFZOzs7O0lBSXZCLFlBQW9CLEdBQW9CO1FBQXBCLFFBQUcsR0FBSCxHQUFHLENBQWlCOztRQUZoQyxXQUFNLEdBQUcsR0FBRyxDQUFDO0lBRXNCLENBQUM7Ozs7Ozs7OztJQUs1QyxNQUFNLENBQUMsS0FBYSxFQUFFLElBQVMsRUFBRSxNQUFZLEVBQUUsT0FBNkI7UUFDMUUsT0FBTyxHQUFHLFNBQVMsQ0FDakI7WUFDRSxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxJQUFJO1lBQ1osWUFBWSxFQUFFLEVBQUU7WUFDaEIsS0FBSyxFQUFFLElBQUk7WUFDWCxhQUFhLEVBQUU7Z0JBQ2IsV0FBVyxFQUFFLE9BQU87Z0JBQ3BCLGVBQWUsRUFBRSxFQUFFO2FBQ3BCO1NBQ0YsRUFDRCxPQUFPLENBQ1IsQ0FBQztRQUNGLE9BQU8sSUFBSSxVQUFVOzs7O1FBQUMsQ0FBQyxRQUF1QixFQUFFLEVBQUU7a0JBQzFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVB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YW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56RHJhd2VyT3B0aW9ucywgTnpEcmF3ZXJTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcmF3ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBEcmF3ZXJIZWxwZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIOWkp+Wwj++8jOiLpeWAvOS4uuaVsOWAvOexu+Wei++8jOWImeagueaNriBgbnpQbGFjZW1lbnRgIOiHquWKqOi9rOWMluS4uiBgbnpIZWlnaHRgIOaIliBgbnpXaWR0aGDvvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmBtZGBcbiAgICpcbiAgICogfCDnsbvlnosgfCDpu5jorqTlpKflsI8gfFxuICAgKiB8IC0tLSB8IC0tLS0tLSB8XG4gICAqIHwgYHNtYCB8IGAzMDBgIHxcbiAgICogfCBgbWRgIHwgYDYwMGAgfFxuICAgKiB8IGBsZ2AgfCBgOTAwYCB8XG4gICAqIHwgYHhsYCB8IGAxMjAwYCB8XG4gICAqXG4gICAqID4g5Lul5LiK5YC877yM5Y+v6YCa6L+H6KaG55uW55u45bqU55qETEVTU+WPguaVsOiHquihjOiwg+aVtFxuICAgKi9cbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCBudW1iZXI7XG4gIC8qKlxuICAgKiDmmK/lkKbljIXlkKvlupXpg6jlt6XlhbfmnaHvvIzpu5jorqTvvJpgdHJ1ZWBcbiAgICovXG4gIGZvb3Rlcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDlupXpg6jlt6XlhbfmnaHpq5jluqbvvIzpu5jorqTvvJpgNTVgXG4gICAqL1xuICBmb290ZXJIZWlnaHQ/OiBudW1iZXI7XG4gIC8qKiDmmK/lkKbnsr7lh4bvvIjpu5jorqTvvJpgdHJ1ZWDvvInvvIzoi6Xov5Tlm57lgLzpnZ7nqbrlgLzvvIhgbnVsbGDmiJZgdW5kZWZpbmVkYO+8ieinhuS4uuaIkOWKn++8jOWQpuWImeinhuS4uumUmeivryAqL1xuICBleGFjdD86IGJvb2xlYW47XG4gIC8qKiDmir3lsYkgW056RHJhd2VyT3B0aW9uc10oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZHJhd2VyL3poI256ZHJhd2Vyb3B0aW9ucykg5Y+C5pWwICovXG4gIGRyYXdlck9wdGlvbnM/OiBOekRyYXdlck9wdGlvbnM7XG59XG5cbi8qKlxuICog5oq95bGJ6L6F5Yqp57G7XG4gKlxuICogKirms6jmhI/vvJoqKiDmnoTlu7rnu5Pmnpzpg73lj6/ooqvorqLpmIXvvIzkvYbmsLjov5zpg73kuI3kvJrop6blj5EgYG9ic2VydmVyLmVycm9yYFxuICpcbiAqIOekuuS+i++8mlxuYGBgdHNcbnRoaXMuZHJhd2VySGVscGVyLmNyZWF0ZSgnRWRpdCcsIEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4vLyDlr7nkuo7nu4Tku7bnmoTmiJDlip8m5YWz6Zet55qE5aSE55CG6K+05piOXG4vLyDmiJDlip9cbnRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoZGF0YSk7XG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKHRydWUpO1xuLy8g5YWz6ZetXG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKCk7XG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKGZhbHNlKTtcbmBgYFxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIERyYXdlckhlbHBlciB7XG4gIC8vIOWkp+mDqOWIhuaDheWGteS4i+aKveWxieeahOWxgue6p+avlCBNb2RhbCDkvJrmm7TkvY7kuIDkuptcbiAgcHJpdmF0ZSB6SW5kZXggPSA0MDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IE56RHJhd2VyU2VydmljZSkge31cblxuICAvKipcbiAgICog5p6E5bu65LiA5Liq5oq95bGJXG4gICAqL1xuICBjcmVhdGUodGl0bGU6IHN0cmluZywgY29tcDogYW55LCBwYXJhbXM/OiBhbnksIG9wdGlvbnM/OiBEcmF3ZXJIZWxwZXJPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBvcHRpb25zID0gZGVlcE1lcmdlKFxuICAgICAge1xuICAgICAgICBzaXplOiAnbWQnLFxuICAgICAgICBmb290ZXI6IHRydWUsXG4gICAgICAgIGZvb3RlckhlaWdodDogNTUsXG4gICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICBkcmF3ZXJPcHRpb25zOiB7XG4gICAgICAgICAgbnpQbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgICAgICAgbnpXcmFwQ2xhc3NOYW1lOiAnJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBvcHRpb25zLFxuICAgICk7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xuICAgICAgY29uc3QgeyBzaXplLCBmb290ZXIsIGZvb3RlckhlaWdodCwgZHJhd2VyT3B0aW9ucyB9ID0gb3B0aW9ucyBhcyBEcmF3ZXJIZWxwZXJPcHRpb25zO1xuICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE56RHJhd2VyT3B0aW9ucyA9IHtcbiAgICAgICAgbnpDb250ZW50OiBjb21wLFxuICAgICAgICBuekNvbnRlbnRQYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgbnpaSW5kZXg6ICsrdGhpcy56SW5kZXgsXG4gICAgICAgIG56VGl0bGU6IHRpdGxlLFxuICAgICAgfTtcblxuICAgICAgaWYgKHR5cGVvZiBzaXplID09PSAnbnVtYmVyJykge1xuICAgICAgICBkZWZhdWx0T3B0aW9uc1tcbiAgICAgICAgICBkcmF3ZXJPcHRpb25zIS5uelBsYWNlbWVudCA9PT0gJ3RvcCcgfHwgZHJhd2VyT3B0aW9ucyEubnpQbGFjZW1lbnQgPT09ICdib3R0b20nID8gJ256SGVpZ2h0JyA6ICdueldpZHRoJ1xuICAgICAgICBdID0gb3B0aW9ucyEuc2l6ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zLm56V3JhcENsYXNzTmFtZSA9IChkcmF3ZXJPcHRpb25zIS5ueldyYXBDbGFzc05hbWUgKyBgIGRyYXdlci0ke29wdGlvbnMhLnNpemV9YCkudHJpbSgpO1xuICAgICAgICBkZWxldGUgZHJhd2VyT3B0aW9ucyEubnpXcmFwQ2xhc3NOYW1lO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm9vdGVyKSB7XG4gICAgICAgIGNvbnN0IHsgbnpQbGFjZW1lbnQsIG56SGVpZ2h0IH0gPSBkcmF3ZXJPcHRpb25zIGFzIE56RHJhd2VyT3B0aW9ucztcbiAgICAgICAgLy8gU2hvdWxkIGJlIGhlYWRlciAqIGZvb3RlciwgYmVjYXVzZSBvZiBpbmNsdWRlcyBoZWFkZXJcbiAgICAgICAgY29uc3QgcmVkdWNlSGVpZ2h0ID0gZm9vdGVySGVpZ2h0ISAqIDIgLSAyO1xuICAgICAgICBpZiAobnpQbGFjZW1lbnQgPT09ICdsZWZ0JyB8fCBuelBsYWNlbWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgIGRlZmF1bHRPcHRpb25zLm56Qm9keVN0eWxlID0ge1xuICAgICAgICAgICAgaGVpZ2h0OiBgY2FsYygxMDAlIC0gJHtyZWR1Y2VIZWlnaHR9cHgpYCxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWZhdWx0T3B0aW9ucy5uekJvZHlTdHlsZSA9IHtcbiAgICAgICAgICAgIGhlaWdodDogYCR7KyhuekhlaWdodCB8fCAyNTYpIC0gcmVkdWNlSGVpZ2h0fXB4YCxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzdWJqZWN0ID0gdGhpcy5zcnYuY3JlYXRlKHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLmRyYXdlck9wdGlvbnMgfSk7XG4gICAgICBjb25zdCBhZnRlckNsb3NlJCA9IHN1YmplY3QuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zIS5leGFjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlmIChyZXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgYWZ0ZXJDbG9zZSQudW5zdWJzY3JpYmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOaehOW7uuS4gOS4quaKveWxie+8jOeCueWHu+iSmeWxguS4jeWFgeiuuOWFs+mXrVxuICAgKi9cbiAgc3RhdGljKHRpdGxlOiBzdHJpbmcsIGNvbXA6IGFueSwgcGFyYW1zPzogYW55LCBvcHRpb25zPzogRHJhd2VySGVscGVyT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgZHJhd2VyT3B0aW9ucyA9IHtcbiAgICAgIG56TWFza0Nsb3NhYmxlOiBmYWxzZSxcbiAgICAgIC4uLihvcHRpb25zICYmIG9wdGlvbnMuZHJhd2VyT3B0aW9ucyksXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUodGl0bGUsIGNvbXAsIHBhcmFtcywgeyAuLi5vcHRpb25zLCBkcmF3ZXJPcHRpb25zIH0pO1xuICB9XG59XG4iXX0=