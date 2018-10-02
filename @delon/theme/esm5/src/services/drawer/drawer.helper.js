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
var DrawerHelper = /** @class */ (function () {
    function DrawerHelper(srv) {
        this.srv = srv;
        this.zIndex = 400;
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
        options = Object.assign(/** @type {?} */ ({
            size: 'md',
            footer: true,
            footerHeight: 55,
            drawerOptions: {
                nzPlacement: 'right',
                nzWrapClassName: ''
            }
        }), options);
        return new Observable(function (observer) {
            var size = options.size, footer = options.footer, footerHeight = options.footerHeight, drawerOptions = options.drawerOptions;
            /** @type {?} */
            var defaultOptions = {
                nzContent: comp,
                nzContentParams: params,
                nzZIndex: ++_this.zIndex,
                nzTitle: title
            };
            if (footer) {
                defaultOptions.nzBodyStyle = {
                    height: "calc(100% - " + footerHeight + "px)",
                    overflow: 'auto',
                    'padding-bottom': footerHeight - 2 + "px"
                };
            }
            if (typeof size === 'number') {
                defaultOptions[drawerOptions.nzPlacement === 'top' || drawerOptions.nzPlacement === 'bottom' ? 'nzHeight' : 'nzWidth'] = options.size;
            }
            else {
                defaultOptions.nzWrapClassName = (drawerOptions.nzWrapClassName + (" drawer-" + options.size)).trim();
                delete drawerOptions.nzWrapClassName;
            }
            /** @type {?} */
            var subject = _this.srv.create(Object.assign(defaultOptions, drawerOptions));
            /** @type {?} */
            var afterClose$ = subject.afterClose.subscribe(function (res) {
                if (res != null && res !== false) {
                    observer.next(res);
                }
                observer.complete();
                afterClose$.unsubscribe();
            });
        });
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
        var drawerOptions = Object.assign({ nzMaskClosable: false }, options && options.drawerOptions);
        return this.create(title, comp, params, Object.assign({}, options, { drawerOptions: drawerOptions }));
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
    /** @type {?} */
    DrawerHelper.prototype.zIndex;
    /** @type {?} */
    DrawerHelper.prototype.srv;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9kcmF3ZXIvZHJhd2VyLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQXNDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrRGxGLHNCQUFvQixHQUFvQjtRQUFwQixRQUFHLEdBQUgsR0FBRyxDQUFpQjtzQkFGdkIsR0FBRztLQUV5QjtJQUU3Qzs7T0FFRzs7Ozs7Ozs7O0lBQ0gsNkJBQU07Ozs7Ozs7O0lBQU4sVUFDRSxLQUFhLEVBQ2IsSUFBUyxFQUNULE1BQVksRUFDWixPQUE2QjtRQUovQixpQkFrREM7UUE1Q0MsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLG1CQUFzQjtZQUMzQyxJQUFJLEVBQUUsSUFBSTtZQUNWLE1BQU0sRUFBRSxJQUFJO1lBQ1osWUFBWSxFQUFFLEVBQUU7WUFDaEIsYUFBYSxFQUFFO2dCQUNiLFdBQVcsRUFBRSxPQUFPO2dCQUNwQixlQUFlLEVBQUUsRUFBRTthQUNwQjtTQUNGLEdBQUUsT0FBTyxDQUFDLENBQUM7UUFDWixPQUFPLElBQUksVUFBVSxDQUFDLFVBQUMsUUFBdUI7WUFDcEMsSUFBQSxtQkFBSSxFQUFFLHVCQUFNLEVBQUUsbUNBQVksRUFBRSxxQ0FBYSxDQUFhOztZQUM5RCxJQUFNLGNBQWMsR0FBb0I7Z0JBQ3RDLFNBQVMsRUFBRSxJQUFJO2dCQUNmLGVBQWUsRUFBRSxNQUFNO2dCQUN2QixRQUFRLEVBQUUsRUFBRSxLQUFJLENBQUMsTUFBTTtnQkFDdkIsT0FBTyxFQUFFLEtBQUs7YUFDZixDQUFDO1lBRUYsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsY0FBYyxDQUFDLFdBQVcsR0FBRztvQkFDM0IsTUFBTSxFQUFFLGlCQUFlLFlBQVksUUFBSztvQkFDeEMsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLGdCQUFnQixFQUFLLFlBQVksR0FBRyxDQUFDLE9BQUk7aUJBQzFDLENBQUM7YUFDSDtZQUVELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUM1QixjQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsS0FBSyxLQUFLLElBQUksYUFBYSxDQUFDLFdBQVcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQzthQUN2STtpQkFBTTtnQkFDTCxjQUFjLENBQUMsZUFBZSxHQUFHLENBQUMsYUFBYSxDQUFDLGVBQWUsSUFBRyxhQUFXLE9BQU8sQ0FBQyxJQUFNLENBQUEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNwRyxPQUFPLGFBQWEsQ0FBQyxlQUFlLENBQUM7YUFDdEM7O1lBRUQsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGFBQWEsQ0FBQyxDQUM3QyxDQUFDOztZQUNGLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBUTtnQkFDeEQsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxLQUFLLEVBQUU7b0JBQ2hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3BCO2dCQUNELFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDcEIsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzNCLENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQztLQUNKO0lBRUQ7O09BRUc7Ozs7Ozs7OztJQUNILDZCQUFNOzs7Ozs7OztJQUFOLFVBQ0UsS0FBYSxFQUNiLElBQVMsRUFDVCxNQUFZLEVBQ1osT0FBNkI7O1FBRTdCLElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ2pDLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxFQUN6QixPQUFPLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FDakMsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxhQUFhLGVBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN4Rjs7Z0JBNUVGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBN0N6QixlQUFlOzs7dUJBRnhCOztTQWdEYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOekRyYXdlclNlcnZpY2UsIE56RHJhd2VyUGxhY2VtZW50LCBOekRyYXdlck9wdGlvbnMgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRHJhd2VySGVscGVyT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICog5aSn5bCP77yb5L6L5aaC77yabGfjgIE2MDDvvIzpu5jorqTvvJpgbWRgXHJcbiAgICogXHJcbiAgICogfCDnsbvlnosgfCDpu5jorqTlpKflsI8gfFxyXG4gICAqIHwgLS0tIHwgLS0tLS0tIHxcclxuICAgKiB8IGBzbWAgfCBgMzAwYCB8XHJcbiAgICogfCBgbWRgIHwgYDYwMGAgfFxyXG4gICAqIHwgYGxnYCB8IGA5MDBgIHxcclxuICAgKiB8IGB4bGAgfCBgMTIwMGAgfFxyXG4gICAqIFxyXG4gICAqID4g5Lul5LiK5YC877yM5Y+v6YCa6L+H6KaG55uW55u45bqU55qETEVTU+WPguaVsOiHquihjOiwg+aVtFxyXG4gICAqL1xyXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIOaYr+WQpuWMheWQq+W6lemDqOW3peWFt+adoe+8jOm7mOiupO+8mmB0cnVlYFxyXG4gICAqL1xyXG4gIGZvb3Rlcj86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICog5bqV6YOo5bel5YW35p2h6auY5bqm77yM6buY6K6k77yaYDU1YFxyXG4gICAqL1xyXG4gIGZvb3RlckhlaWdodD86IG51bWJlcjtcclxuICAvKiog5oq95bGJIFtOekRyYXdlck9wdGlvbnNdKGh0dHBzOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2RyYXdlci96aCNuemRyYXdlcm9wdGlvbnMpIOWPguaVsCAqL1xyXG4gIGRyYXdlck9wdGlvbnM/OiBOekRyYXdlck9wdGlvbnM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmir3lsYnovoXliqnnsbtcclxuICogXHJcbiAqICoq5rOo5oSP77yaKiog5p6E5bu657uT5p6c6YO95Y+v6KKr6K6i6ZiF77yM5L2G5rC46L+c6YO95LiN5Lya6Kem5Y+RIGBvYnNlcnZlci5lcnJvcmBcclxuICogXHJcbiAqIOekuuS+i++8mlxyXG5gYGB0c1xyXG50aGlzLmRyYXdlckhlbHBlci5jcmVhdGUoJ0VkaXQnLCBGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xyXG4vLyDlr7nkuo7nu4Tku7bnmoTmiJDlip8m5YWz6Zet55qE5aSE55CG6K+05piOXHJcbi8vIOaIkOWKn1xyXG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKGRhdGEpO1xyXG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKHRydWUpO1xyXG4vLyDlhbPpl61cclxudGhpcy5OekRyYXdlclJlZi5jbG9zZSgpO1xyXG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKGZhbHNlKTtcclxuYGBgXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgRHJhd2VySGVscGVyIHtcclxuICAvLyDlpKfpg6jliIbmg4XlhrXkuIvmir3lsYnnmoTlsYLnuqfmr5QgTW9kYWwg5Lya5pu05L2O5LiA5LqbXHJcbiAgcHJpdmF0ZSB6SW5kZXggPSA0MDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBOekRyYXdlclNlcnZpY2UpIHsgfVxyXG5cclxuICAvKipcclxuICAgKiDmnoTlu7rkuIDkuKrmir3lsYlcclxuICAgKi9cclxuICBjcmVhdGUoXHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgY29tcDogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IERyYXdlckhlbHBlck9wdGlvbnNcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oPERyYXdlckhlbHBlck9wdGlvbnM+e1xyXG4gICAgICBzaXplOiAnbWQnLFxyXG4gICAgICBmb290ZXI6IHRydWUsXHJcbiAgICAgIGZvb3RlckhlaWdodDogNTUsXHJcbiAgICAgIGRyYXdlck9wdGlvbnM6IHtcclxuICAgICAgICBuelBsYWNlbWVudDogJ3JpZ2h0JyxcclxuICAgICAgICBueldyYXBDbGFzc05hbWU6ICcnXHJcbiAgICAgIH1cclxuICAgIH0sIG9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xyXG4gICAgICBjb25zdCB7IHNpemUsIGZvb3RlciwgZm9vdGVySGVpZ2h0LCBkcmF3ZXJPcHRpb25zIH0gPSBvcHRpb25zO1xyXG4gICAgICBjb25zdCBkZWZhdWx0T3B0aW9uczogTnpEcmF3ZXJPcHRpb25zID0ge1xyXG4gICAgICAgIG56Q29udGVudDogY29tcCxcclxuICAgICAgICBuekNvbnRlbnRQYXJhbXM6IHBhcmFtcyxcclxuICAgICAgICBuelpJbmRleDogKyt0aGlzLnpJbmRleCxcclxuICAgICAgICBuelRpdGxlOiB0aXRsZVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgaWYgKGZvb3Rlcikge1xyXG4gICAgICAgIGRlZmF1bHRPcHRpb25zLm56Qm9keVN0eWxlID0ge1xyXG4gICAgICAgICAgaGVpZ2h0OiBgY2FsYygxMDAlIC0gJHtmb290ZXJIZWlnaHR9cHgpYCxcclxuICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICAncGFkZGluZy1ib3R0b20nOiBgJHtmb290ZXJIZWlnaHQgLSAyfXB4YFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICBkZWZhdWx0T3B0aW9uc1tkcmF3ZXJPcHRpb25zLm56UGxhY2VtZW50ID09PSAndG9wJyB8fCBkcmF3ZXJPcHRpb25zLm56UGxhY2VtZW50ID09PSAnYm90dG9tJyA/ICduekhlaWdodCcgOiAnbnpXaWR0aCddID0gb3B0aW9ucy5zaXplO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlZmF1bHRPcHRpb25zLm56V3JhcENsYXNzTmFtZSA9IChkcmF3ZXJPcHRpb25zLm56V3JhcENsYXNzTmFtZSArIGAgZHJhd2VyLSR7b3B0aW9ucy5zaXplfWApLnRyaW0oKTtcclxuICAgICAgICBkZWxldGUgZHJhd2VyT3B0aW9ucy5ueldyYXBDbGFzc05hbWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHN1YmplY3QgPSB0aGlzLnNydi5jcmVhdGUoXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgZHJhd2VyT3B0aW9ucyksXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGFmdGVyQ2xvc2UkID0gc3ViamVjdC5hZnRlckNsb3NlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzICE9IG51bGwgJiYgcmVzICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgIGFmdGVyQ2xvc2UkLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmnoTlu7rkuIDkuKrmir3lsYnvvIzngrnlh7vokpnlsYLkuI3lhYHorrjlhbPpl61cclxuICAgKi9cclxuICBzdGF0aWMoXHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgY29tcDogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgb3B0aW9ucz86IERyYXdlckhlbHBlck9wdGlvbnNcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgY29uc3QgZHJhd2VyT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHsgbnpNYXNrQ2xvc2FibGU6IGZhbHNlIH0sXHJcbiAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5kcmF3ZXJPcHRpb25zLFxyXG4gICAgKTtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZSh0aXRsZSwgY29tcCwgcGFyYW1zLCBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7IGRyYXdlck9wdGlvbnMgfSkpO1xyXG4gIH1cclxufVxyXG4iXX0=