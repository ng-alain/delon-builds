/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NzDrawerService } from 'ng-zorro-antd';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd";
/**
 * @record
 */
export function DrawerHelperOptions() { }
/**
 * 大小；例如：lg、600，默认：`md`
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
 * 抽屉 [NzDrawerOptions](https://ng.ant.design/components/drawer/zh#nzdraweroptions) 参数
 * @type {?|undefined}
 */
DrawerHelperOptions.prototype.drawerOptions;
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
        options = Object.assign(/** @type {?} */ ({
            size: 'md',
            footer: true,
            footerHeight: 55,
            drawerOptions: {
                nzPlacement: 'right',
                nzWrapClassName: ''
            }
        }), options);
        return new Observable((observer) => {
            const { size, footer, footerHeight, drawerOptions } = options;
            /** @type {?} */
            const defaultOptions = {
                nzContent: comp,
                nzContentParams: params,
                nzZIndex: ++this.zIndex,
                nzTitle: title
            };
            if (footer) {
                defaultOptions.nzBodyStyle = {
                    height: `calc(100% - ${footerHeight}px)`,
                    overflow: 'auto',
                    'padding-bottom': `${footerHeight - 2}px`
                };
            }
            if (typeof size === 'number') {
                defaultOptions[drawerOptions.nzPlacement === 'top' || drawerOptions.nzPlacement === 'bottom' ? 'nzHeight' : 'nzWidth'] = options.size;
            }
            else {
                defaultOptions.nzWrapClassName = (drawerOptions.nzWrapClassName + ` drawer-${options.size}`).trim();
                delete drawerOptions.nzWrapClassName;
            }
            /** @type {?} */
            const subject = this.srv.create(Object.assign(defaultOptions, drawerOptions));
            /** @type {?} */
            const afterClose$ = subject.afterClose.subscribe((res) => {
                if (res != null && res !== false) {
                    observer.next(res);
                }
                observer.complete();
                afterClose$.unsubscribe();
            });
        });
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
        const drawerOptions = Object.assign({ nzMaskClosable: false }, options && options.drawerOptions);
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
    /** @type {?} */
    DrawerHelper.prototype.zIndex;
    /** @type {?} */
    DrawerHelper.prototype.srv;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9kcmF3ZXIvZHJhd2VyLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQXNDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThDcEYsTUFBTTs7OztJQUlKLFlBQW9CLEdBQW9CO1FBQXBCLFFBQUcsR0FBSCxHQUFHLENBQWlCO3NCQUZ2QixHQUFHO0tBRXlCOzs7Ozs7Ozs7SUFLN0MsTUFBTSxDQUNKLEtBQWEsRUFDYixJQUFTLEVBQ1QsTUFBWSxFQUNaLE9BQTZCO1FBRTdCLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxtQkFBc0I7WUFDM0MsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsSUFBSTtZQUNaLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGFBQWEsRUFBRTtnQkFDYixXQUFXLEVBQUUsT0FBTztnQkFDcEIsZUFBZSxFQUFFLEVBQUU7YUFDcEI7U0FDRixHQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ1osT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLFFBQXVCLEVBQUUsRUFBRTtZQUNoRCxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLEdBQUcsT0FBTyxDQUFDOztZQUM5RCxNQUFNLGNBQWMsR0FBb0I7Z0JBQ3RDLFNBQVMsRUFBRSxJQUFJO2dCQUNmLGVBQWUsRUFBRSxNQUFNO2dCQUN2QixRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDdkIsT0FBTyxFQUFFLEtBQUs7YUFDZixDQUFDO1lBRUYsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsY0FBYyxDQUFDLFdBQVcsR0FBRztvQkFDM0IsTUFBTSxFQUFFLGVBQWUsWUFBWSxLQUFLO29CQUN4QyxRQUFRLEVBQUUsTUFBTTtvQkFDaEIsZ0JBQWdCLEVBQUUsR0FBRyxZQUFZLEdBQUcsQ0FBQyxJQUFJO2lCQUMxQyxDQUFDO2FBQ0g7WUFFRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDNUIsY0FBYyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEtBQUssS0FBSyxJQUFJLGFBQWEsQ0FBQyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDdkk7aUJBQU07Z0JBQ0wsY0FBYyxDQUFDLGVBQWUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsV0FBVyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDcEcsT0FBTyxhQUFhLENBQUMsZUFBZSxDQUFDO2FBQ3RDOztZQUVELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUM3QixNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FDN0MsQ0FBQzs7WUFDRixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO2dCQUM1RCxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLEtBQUssRUFBRTtvQkFDaEMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEI7Z0JBQ0QsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwQixXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDM0IsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxDQUFDO0tBQ0o7Ozs7Ozs7OztJQUtELE1BQU0sQ0FDSixLQUFhLEVBQ2IsSUFBUyxFQUNULE1BQVksRUFDWixPQUE2Qjs7UUFFN0IsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDakMsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLEVBQ3pCLE9BQU8sSUFBSSxPQUFPLENBQUMsYUFBYSxDQUNqQyxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN4Rjs7O1lBNUVGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUE3Q3pCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56RHJhd2VyU2VydmljZSwgTnpEcmF3ZXJQbGFjZW1lbnQsIE56RHJhd2VyT3B0aW9ucyB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEcmF3ZXJIZWxwZXJPcHRpb25zIHtcclxuICAvKipcclxuICAgKiDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmBtZGBcclxuICAgKiBcclxuICAgKiB8IOexu+WeiyB8IOm7mOiupOWkp+WwjyB8XHJcbiAgICogfCAtLS0gfCAtLS0tLS0gfFxyXG4gICAqIHwgYHNtYCB8IGAzMDBgIHxcclxuICAgKiB8IGBtZGAgfCBgNjAwYCB8XHJcbiAgICogfCBgbGdgIHwgYDkwMGAgfFxyXG4gICAqIHwgYHhsYCB8IGAxMjAwYCB8XHJcbiAgICogXHJcbiAgICogPiDku6XkuIrlgLzvvIzlj6/pgJrov4fopobnm5bnm7jlupTnmoRMRVNT5Y+C5pWw6Ieq6KGM6LCD5pW0XHJcbiAgICovXHJcbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICog5piv5ZCm5YyF5ZCr5bqV6YOo5bel5YW35p2h77yM6buY6K6k77yaYHRydWVgXHJcbiAgICovXHJcbiAgZm9vdGVyPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiDlupXpg6jlt6XlhbfmnaHpq5jluqbvvIzpu5jorqTvvJpgNTVgXHJcbiAgICovXHJcbiAgZm9vdGVySGVpZ2h0PzogbnVtYmVyO1xyXG4gIC8qKiDmir3lsYkgW056RHJhd2VyT3B0aW9uc10oaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZHJhd2VyL3poI256ZHJhd2Vyb3B0aW9ucykg5Y+C5pWwICovXHJcbiAgZHJhd2VyT3B0aW9ucz86IE56RHJhd2VyT3B0aW9ucztcclxufVxyXG5cclxuLyoqXHJcbiAqIOaKveWxiei+heWKqeexu1xyXG4gKiBcclxuICogKirms6jmhI/vvJoqKiDmnoTlu7rnu5Pmnpzpg73lj6/ooqvorqLpmIXvvIzkvYbmsLjov5zpg73kuI3kvJrop6blj5EgYG9ic2VydmVyLmVycm9yYFxyXG4gKiBcclxuICog56S65L6L77yaXHJcbmBgYHRzXHJcbnRoaXMuZHJhd2VySGVscGVyLmNyZWF0ZSgnRWRpdCcsIEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XHJcbi8vIOWvueS6jue7hOS7tueahOaIkOWKnyblhbPpl63nmoTlpITnkIbor7TmmI5cclxuLy8g5oiQ5YqfXHJcbnRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoZGF0YSk7XHJcbnRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UodHJ1ZSk7XHJcbi8vIOWFs+mXrVxyXG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKCk7XHJcbnRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoZmFsc2UpO1xyXG5gYGBcclxuICovXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBEcmF3ZXJIZWxwZXIge1xyXG4gIC8vIOWkp+mDqOWIhuaDheWGteS4i+aKveWxieeahOWxgue6p+avlCBNb2RhbCDkvJrmm7TkvY7kuIDkuptcclxuICBwcml2YXRlIHpJbmRleCA9IDQwMDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IE56RHJhd2VyU2VydmljZSkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaehOW7uuS4gOS4quaKveWxiVxyXG4gICAqL1xyXG4gIGNyZWF0ZShcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBjb21wOiBhbnksXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzogRHJhd2VySGVscGVyT3B0aW9uc1xyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbig8RHJhd2VySGVscGVyT3B0aW9ucz57XHJcbiAgICAgIHNpemU6ICdtZCcsXHJcbiAgICAgIGZvb3RlcjogdHJ1ZSxcclxuICAgICAgZm9vdGVySGVpZ2h0OiA1NSxcclxuICAgICAgZHJhd2VyT3B0aW9uczoge1xyXG4gICAgICAgIG56UGxhY2VtZW50OiAncmlnaHQnLFxyXG4gICAgICAgIG56V3JhcENsYXNzTmFtZTogJydcclxuICAgICAgfVxyXG4gICAgfSwgb3B0aW9ucyk7XHJcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgc2l6ZSwgZm9vdGVyLCBmb290ZXJIZWlnaHQsIGRyYXdlck9wdGlvbnMgfSA9IG9wdGlvbnM7XHJcbiAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBOekRyYXdlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgbnpDb250ZW50OiBjb21wLFxyXG4gICAgICAgIG56Q29udGVudFBhcmFtczogcGFyYW1zLFxyXG4gICAgICAgIG56WkluZGV4OiArK3RoaXMuekluZGV4LFxyXG4gICAgICAgIG56VGl0bGU6IHRpdGxlXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoZm9vdGVyKSB7XHJcbiAgICAgICAgZGVmYXVsdE9wdGlvbnMubnpCb2R5U3R5bGUgPSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IGBjYWxjKDEwMCUgLSAke2Zvb3RlckhlaWdodH1weClgLFxyXG4gICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgICdwYWRkaW5nLWJvdHRvbSc6IGAke2Zvb3RlckhlaWdodCAtIDJ9cHhgXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiBzaXplID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgIGRlZmF1bHRPcHRpb25zW2RyYXdlck9wdGlvbnMubnpQbGFjZW1lbnQgPT09ICd0b3AnIHx8IGRyYXdlck9wdGlvbnMubnpQbGFjZW1lbnQgPT09ICdib3R0b20nID8gJ256SGVpZ2h0JyA6ICdueldpZHRoJ10gPSBvcHRpb25zLnNpemU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVmYXVsdE9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lID0gKGRyYXdlck9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lICsgYCBkcmF3ZXItJHtvcHRpb25zLnNpemV9YCkudHJpbSgpO1xyXG4gICAgICAgIGRlbGV0ZSBkcmF3ZXJPcHRpb25zLm56V3JhcENsYXNzTmFtZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc3ViamVjdCA9IHRoaXMuc3J2LmNyZWF0ZShcclxuICAgICAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLCBkcmF3ZXJPcHRpb25zKSxcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgYWZ0ZXJDbG9zZSQgPSBzdWJqZWN0LmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXMgIT0gbnVsbCAmJiByZXMgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgYWZ0ZXJDbG9zZSQudW5zdWJzY3JpYmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaehOW7uuS4gOS4quaKveWxie+8jOeCueWHu+iSmeWxguS4jeWFgeiuuOWFs+mXrVxyXG4gICAqL1xyXG4gIHN0YXRpYyhcclxuICAgIHRpdGxlOiBzdHJpbmcsXHJcbiAgICBjb21wOiBhbnksXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzogRHJhd2VySGVscGVyT3B0aW9uc1xyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICBjb25zdCBkcmF3ZXJPcHRpb25zID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgeyBuek1hc2tDbG9zYWJsZTogZmFsc2UgfSxcclxuICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLmRyYXdlck9wdGlvbnMsXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKHRpdGxlLCBjb21wLCBwYXJhbXMsIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHsgZHJhd2VyT3B0aW9ucyB9KSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==