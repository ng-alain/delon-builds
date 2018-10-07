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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9kcmF3ZXIvZHJhd2VyLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQW1CLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThDakUsTUFBTTs7OztJQUlKLFlBQW9CLEdBQW9CO1FBQXBCLFFBQUcsR0FBSCxHQUFHLENBQWlCO3NCQUZ2QixHQUFHO0tBRXlCOzs7Ozs7Ozs7SUFLN0MsTUFBTSxDQUNKLEtBQWEsRUFDYixJQUFTLEVBQ1QsTUFBWSxFQUNaLE9BQTZCO1FBRTdCLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxtQkFBc0I7WUFDM0MsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsSUFBSTtZQUNaLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGFBQWEsRUFBRTtnQkFDYixXQUFXLEVBQUUsT0FBTztnQkFDcEIsZUFBZSxFQUFFLEVBQUU7YUFDcEI7U0FDRixHQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ1osT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLFFBQXVCLEVBQUUsRUFBRTtZQUNoRCxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLEdBQUcsT0FBTyxDQUFDOztZQUM5RCxNQUFNLGNBQWMsR0FBb0I7Z0JBQ3RDLFNBQVMsRUFBRSxJQUFJO2dCQUNmLGVBQWUsRUFBRSxNQUFNO2dCQUN2QixRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDdkIsT0FBTyxFQUFFLEtBQUs7YUFDZixDQUFDO1lBRUYsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsY0FBYyxDQUFDLFdBQVcsR0FBRztvQkFDM0IsTUFBTSxFQUFFLGVBQWUsWUFBWSxLQUFLO29CQUN4QyxRQUFRLEVBQUUsTUFBTTtvQkFDaEIsZ0JBQWdCLEVBQUUsR0FBRyxZQUFZLEdBQUcsQ0FBQyxJQUFJO2lCQUMxQyxDQUFDO2FBQ0g7WUFFRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDNUIsY0FBYyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEtBQUssS0FBSyxJQUFJLGFBQWEsQ0FBQyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDdkk7aUJBQU07Z0JBQ0wsY0FBYyxDQUFDLGVBQWUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsV0FBVyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDcEcsT0FBTyxhQUFhLENBQUMsZUFBZSxDQUFDO2FBQ3RDOztZQUVELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUM3QixNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FDN0MsQ0FBQzs7WUFDRixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO2dCQUM1RCxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLEtBQUssRUFBRTtvQkFDaEMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEI7Z0JBQ0QsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwQixXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDM0IsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxDQUFDO0tBQ0o7Ozs7Ozs7OztJQUtELE1BQU0sQ0FDSixLQUFhLEVBQ2IsSUFBUyxFQUNULE1BQVksRUFDWixPQUE2Qjs7UUFFN0IsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDakMsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLEVBQ3pCLE9BQU8sSUFBSSxPQUFPLENBQUMsYUFBYSxDQUNqQyxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN4Rjs7O1lBNUVGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUE3Q3pCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTnpEcmF3ZXJTZXJ2aWNlLCBOekRyYXdlck9wdGlvbnMgfSBmcm9tICduZy16b3Jyby1hbnRkJztcblxuZXhwb3J0IGludGVyZmFjZSBEcmF3ZXJIZWxwZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yaYG1kYFxuICAgKlxuICAgKiB8IOexu+WeiyB8IOm7mOiupOWkp+WwjyB8XG4gICAqIHwgLS0tIHwgLS0tLS0tIHxcbiAgICogfCBgc21gIHwgYDMwMGAgfFxuICAgKiB8IGBtZGAgfCBgNjAwYCB8XG4gICAqIHwgYGxnYCB8IGA5MDBgIHxcbiAgICogfCBgeGxgIHwgYDEyMDBgIHxcbiAgICpcbiAgICogPiDku6XkuIrlgLzvvIzlj6/pgJrov4fopobnm5bnm7jlupTnmoRMRVNT5Y+C5pWw6Ieq6KGM6LCD5pW0XG4gICAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8IG51bWJlcjtcbiAgLyoqXG4gICAqIOaYr+WQpuWMheWQq+W6lemDqOW3peWFt+adoe+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgZm9vdGVyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOW6lemDqOW3peWFt+adoemrmOW6pu+8jOm7mOiupO+8mmA1NWBcbiAgICovXG4gIGZvb3RlckhlaWdodD86IG51bWJlcjtcbiAgLyoqIOaKveWxiSBbTnpEcmF3ZXJPcHRpb25zXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kcmF3ZXIvemgjbnpkcmF3ZXJvcHRpb25zKSDlj4LmlbAgKi9cbiAgZHJhd2VyT3B0aW9ucz86IE56RHJhd2VyT3B0aW9ucztcbn1cblxuLyoqXG4gKiDmir3lsYnovoXliqnnsbtcbiAqXG4gKiAqKuazqOaEj++8mioqIOaehOW7uue7k+aenOmDveWPr+iiq+iuoumYhe+8jOS9huawuOi/nOmDveS4jeS8muinpuWPkSBgb2JzZXJ2ZXIuZXJyb3JgXG4gKlxuICog56S65L6L77yaXG5gYGB0c1xudGhpcy5kcmF3ZXJIZWxwZXIuY3JlYXRlKCdFZGl0JywgRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbi8vIOWvueS6jue7hOS7tueahOaIkOWKnyblhbPpl63nmoTlpITnkIbor7TmmI5cbi8vIOaIkOWKn1xudGhpcy5OekRyYXdlclJlZi5jbG9zZShkYXRhKTtcbnRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UodHJ1ZSk7XG4vLyDlhbPpl61cbnRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoKTtcbnRoaXMuTnpEcmF3ZXJSZWYuY2xvc2UoZmFsc2UpO1xuYGBgXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgRHJhd2VySGVscGVyIHtcbiAgLy8g5aSn6YOo5YiG5oOF5Ya15LiL5oq95bGJ55qE5bGC57qn5q+UIE1vZGFsIOS8muabtOS9juS4gOS6m1xuICBwcml2YXRlIHpJbmRleCA9IDQwMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogTnpEcmF3ZXJTZXJ2aWNlKSB7IH1cblxuICAvKipcbiAgICog5p6E5bu65LiA5Liq5oq95bGJXG4gICAqL1xuICBjcmVhdGUoXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBjb21wOiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiBEcmF3ZXJIZWxwZXJPcHRpb25zXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oPERyYXdlckhlbHBlck9wdGlvbnM+e1xuICAgICAgc2l6ZTogJ21kJyxcbiAgICAgIGZvb3RlcjogdHJ1ZSxcbiAgICAgIGZvb3RlckhlaWdodDogNTUsXG4gICAgICBkcmF3ZXJPcHRpb25zOiB7XG4gICAgICAgIG56UGxhY2VtZW50OiAncmlnaHQnLFxuICAgICAgICBueldyYXBDbGFzc05hbWU6ICcnXG4gICAgICB9XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xuICAgICAgY29uc3QgeyBzaXplLCBmb290ZXIsIGZvb3RlckhlaWdodCwgZHJhd2VyT3B0aW9ucyB9ID0gb3B0aW9ucztcbiAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBOekRyYXdlck9wdGlvbnMgPSB7XG4gICAgICAgIG56Q29udGVudDogY29tcCxcbiAgICAgICAgbnpDb250ZW50UGFyYW1zOiBwYXJhbXMsXG4gICAgICAgIG56WkluZGV4OiArK3RoaXMuekluZGV4LFxuICAgICAgICBuelRpdGxlOiB0aXRsZVxuICAgICAgfTtcblxuICAgICAgaWYgKGZvb3Rlcikge1xuICAgICAgICBkZWZhdWx0T3B0aW9ucy5uekJvZHlTdHlsZSA9IHtcbiAgICAgICAgICBoZWlnaHQ6IGBjYWxjKDEwMCUgLSAke2Zvb3RlckhlaWdodH1weClgLFxuICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAgICAgJ3BhZGRpbmctYm90dG9tJzogYCR7Zm9vdGVySGVpZ2h0IC0gMn1weGBcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBzaXplID09PSAnbnVtYmVyJykge1xuICAgICAgICBkZWZhdWx0T3B0aW9uc1tkcmF3ZXJPcHRpb25zLm56UGxhY2VtZW50ID09PSAndG9wJyB8fCBkcmF3ZXJPcHRpb25zLm56UGxhY2VtZW50ID09PSAnYm90dG9tJyA/ICduekhlaWdodCcgOiAnbnpXaWR0aCddID0gb3B0aW9ucy5zaXplO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmYXVsdE9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lID0gKGRyYXdlck9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lICsgYCBkcmF3ZXItJHtvcHRpb25zLnNpemV9YCkudHJpbSgpO1xuICAgICAgICBkZWxldGUgZHJhd2VyT3B0aW9ucy5ueldyYXBDbGFzc05hbWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN1YmplY3QgPSB0aGlzLnNydi5jcmVhdGUoXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIGRyYXdlck9wdGlvbnMpLFxuICAgICAgKTtcbiAgICAgIGNvbnN0IGFmdGVyQ2xvc2UkID0gc3ViamVjdC5hZnRlckNsb3NlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlcyAhPSBudWxsICYmIHJlcyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgYWZ0ZXJDbG9zZSQudW5zdWJzY3JpYmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOaehOW7uuS4gOS4quaKveWxie+8jOeCueWHu+iSmeWxguS4jeWFgeiuuOWFs+mXrVxuICAgKi9cbiAgc3RhdGljKFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgY29tcDogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBvcHRpb25zPzogRHJhd2VySGVscGVyT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGRyYXdlck9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAgeyBuek1hc2tDbG9zYWJsZTogZmFsc2UgfSxcbiAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5kcmF3ZXJPcHRpb25zLFxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKHRpdGxlLCBjb21wLCBwYXJhbXMsIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHsgZHJhd2VyT3B0aW9ucyB9KSk7XG4gIH1cbn1cbiJdfQ==