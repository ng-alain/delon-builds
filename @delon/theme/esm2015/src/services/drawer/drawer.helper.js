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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9kcmF3ZXIvZHJhd2VyLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQXNDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThDcEYsTUFBTTs7OztJQUlKLFlBQW9CLEdBQW9CO1FBQXBCLFFBQUcsR0FBSCxHQUFHLENBQWlCO3NCQUZ2QixHQUFHO0tBRXlCOzs7Ozs7Ozs7SUFLN0MsTUFBTSxDQUNKLEtBQWEsRUFDYixJQUFTLEVBQ1QsTUFBWSxFQUNaLE9BQTZCO1FBRTdCLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxtQkFBc0I7WUFDM0MsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsSUFBSTtZQUNaLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGFBQWEsRUFBRTtnQkFDYixXQUFXLEVBQUUsT0FBTztnQkFDcEIsZUFBZSxFQUFFLEVBQUU7YUFDcEI7U0FDRixHQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ1osT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLFFBQXVCLEVBQUUsRUFBRTtZQUNoRCxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLEdBQUcsT0FBTyxDQUFDOztZQUM5RCxNQUFNLGNBQWMsR0FBb0I7Z0JBQ3RDLFNBQVMsRUFBRSxJQUFJO2dCQUNmLGVBQWUsRUFBRSxNQUFNO2dCQUN2QixRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDdkIsT0FBTyxFQUFFLEtBQUs7YUFDZixDQUFDO1lBRUYsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsY0FBYyxDQUFDLFdBQVcsR0FBRztvQkFDM0IsTUFBTSxFQUFFLGVBQWUsWUFBWSxLQUFLO29CQUN4QyxRQUFRLEVBQUUsTUFBTTtvQkFDaEIsZ0JBQWdCLEVBQUUsR0FBRyxZQUFZLEdBQUcsQ0FBQyxJQUFJO2lCQUMxQyxDQUFDO2FBQ0g7WUFFRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDNUIsY0FBYyxDQUFDLGFBQWEsQ0FBQyxXQUFXLEtBQUssS0FBSyxJQUFJLGFBQWEsQ0FBQyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7YUFDdkk7aUJBQU07Z0JBQ0wsY0FBYyxDQUFDLGVBQWUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxlQUFlLEdBQUcsV0FBVyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDcEcsT0FBTyxhQUFhLENBQUMsZUFBZSxDQUFDO2FBQ3RDOztZQUVELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUM3QixNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsQ0FDN0MsQ0FBQzs7WUFDRixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO2dCQUM1RCxJQUFJLEdBQUcsSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLEtBQUssRUFBRTtvQkFDaEMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEI7Z0JBQ0QsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwQixXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDM0IsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxDQUFDO0tBQ0o7Ozs7Ozs7OztJQUtELE1BQU0sQ0FDSixLQUFhLEVBQ2IsSUFBUyxFQUNULE1BQVksRUFDWixPQUE2Qjs7UUFFN0IsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDakMsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLEVBQ3pCLE9BQU8sSUFBSSxPQUFPLENBQUMsYUFBYSxDQUNqQyxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN4Rjs7O1lBNUVGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUE3Q3pCLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTnpEcmF3ZXJTZXJ2aWNlLCBOekRyYXdlclBsYWNlbWVudCwgTnpEcmF3ZXJPcHRpb25zIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhd2VySGVscGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmBtZGBcbiAgICogXG4gICAqIHwg57G75Z6LIHwg6buY6K6k5aSn5bCPIHxcbiAgICogfCAtLS0gfCAtLS0tLS0gfFxuICAgKiB8IGBzbWAgfCBgMzAwYCB8XG4gICAqIHwgYG1kYCB8IGA2MDBgIHxcbiAgICogfCBgbGdgIHwgYDkwMGAgfFxuICAgKiB8IGB4bGAgfCBgMTIwMGAgfFxuICAgKiBcbiAgICogPiDku6XkuIrlgLzvvIzlj6/pgJrov4fopobnm5bnm7jlupTnmoRMRVNT5Y+C5pWw6Ieq6KGM6LCD5pW0XG4gICAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8IG51bWJlcjtcbiAgLyoqXG4gICAqIOaYr+WQpuWMheWQq+W6lemDqOW3peWFt+adoe+8jOm7mOiupO+8mmB0cnVlYFxuICAgKi9cbiAgZm9vdGVyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIOW6lemDqOW3peWFt+adoemrmOW6pu+8jOm7mOiupO+8mmA1NWBcbiAgICovXG4gIGZvb3RlckhlaWdodD86IG51bWJlcjtcbiAgLyoqIOaKveWxiSBbTnpEcmF3ZXJPcHRpb25zXShodHRwczovL25nLmFudC5kZXNpZ24vY29tcG9uZW50cy9kcmF3ZXIvemgjbnpkcmF3ZXJvcHRpb25zKSDlj4LmlbAgKi9cbiAgZHJhd2VyT3B0aW9ucz86IE56RHJhd2VyT3B0aW9ucztcbn1cblxuLyoqXG4gKiDmir3lsYnovoXliqnnsbtcbiAqIFxuICogKirms6jmhI/vvJoqKiDmnoTlu7rnu5Pmnpzpg73lj6/ooqvorqLpmIXvvIzkvYbmsLjov5zpg73kuI3kvJrop6blj5EgYG9ic2VydmVyLmVycm9yYFxuICogXG4gKiDnpLrkvovvvJpcbmBgYHRzXG50aGlzLmRyYXdlckhlbHBlci5jcmVhdGUoJ0VkaXQnLCBGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuLy8g5a+55LqO57uE5Lu255qE5oiQ5YqfJuWFs+mXreeahOWkhOeQhuivtOaYjlxuLy8g5oiQ5YqfXG50aGlzLk56RHJhd2VyUmVmLmNsb3NlKGRhdGEpO1xudGhpcy5OekRyYXdlclJlZi5jbG9zZSh0cnVlKTtcbi8vIOWFs+mXrVxudGhpcy5OekRyYXdlclJlZi5jbG9zZSgpO1xudGhpcy5OekRyYXdlclJlZi5jbG9zZShmYWxzZSk7XG5gYGBcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBEcmF3ZXJIZWxwZXIge1xuICAvLyDlpKfpg6jliIbmg4XlhrXkuIvmir3lsYnnmoTlsYLnuqfmr5QgTW9kYWwg5Lya5pu05L2O5LiA5LqbXG4gIHByaXZhdGUgekluZGV4ID0gNDAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBOekRyYXdlclNlcnZpY2UpIHsgfVxuXG4gIC8qKlxuICAgKiDmnoTlu7rkuIDkuKrmir3lsYlcbiAgICovXG4gIGNyZWF0ZShcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGNvbXA6IGFueSxcbiAgICBwYXJhbXM/OiBhbnksXG4gICAgb3B0aW9ucz86IERyYXdlckhlbHBlck9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbig8RHJhd2VySGVscGVyT3B0aW9ucz57XG4gICAgICBzaXplOiAnbWQnLFxuICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgZm9vdGVySGVpZ2h0OiA1NSxcbiAgICAgIGRyYXdlck9wdGlvbnM6IHtcbiAgICAgICAgbnpQbGFjZW1lbnQ6ICdyaWdodCcsXG4gICAgICAgIG56V3JhcENsYXNzTmFtZTogJydcbiAgICAgIH1cbiAgICB9LCBvcHRpb25zKTtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XG4gICAgICBjb25zdCB7IHNpemUsIGZvb3RlciwgZm9vdGVySGVpZ2h0LCBkcmF3ZXJPcHRpb25zIH0gPSBvcHRpb25zO1xuICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE56RHJhd2VyT3B0aW9ucyA9IHtcbiAgICAgICAgbnpDb250ZW50OiBjb21wLFxuICAgICAgICBuekNvbnRlbnRQYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgbnpaSW5kZXg6ICsrdGhpcy56SW5kZXgsXG4gICAgICAgIG56VGl0bGU6IHRpdGxlXG4gICAgICB9O1xuXG4gICAgICBpZiAoZm9vdGVyKSB7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zLm56Qm9keVN0eWxlID0ge1xuICAgICAgICAgIGhlaWdodDogYGNhbGMoMTAwJSAtICR7Zm9vdGVySGVpZ2h0fXB4KWAsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgICAncGFkZGluZy1ib3R0b20nOiBgJHtmb290ZXJIZWlnaHQgLSAyfXB4YFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHNpemUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zW2RyYXdlck9wdGlvbnMubnpQbGFjZW1lbnQgPT09ICd0b3AnIHx8IGRyYXdlck9wdGlvbnMubnpQbGFjZW1lbnQgPT09ICdib3R0b20nID8gJ256SGVpZ2h0JyA6ICdueldpZHRoJ10gPSBvcHRpb25zLnNpemU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWZhdWx0T3B0aW9ucy5ueldyYXBDbGFzc05hbWUgPSAoZHJhd2VyT3B0aW9ucy5ueldyYXBDbGFzc05hbWUgKyBgIGRyYXdlci0ke29wdGlvbnMuc2l6ZX1gKS50cmltKCk7XG4gICAgICAgIGRlbGV0ZSBkcmF3ZXJPcHRpb25zLm56V3JhcENsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3ViamVjdCA9IHRoaXMuc3J2LmNyZWF0ZShcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgZHJhd2VyT3B0aW9ucyksXG4gICAgICApO1xuICAgICAgY29uc3QgYWZ0ZXJDbG9zZSQgPSBzdWJqZWN0LmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzICE9IG51bGwgJiYgcmVzICE9PSBmYWxzZSkge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICBhZnRlckNsb3NlJC51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5p6E5bu65LiA5Liq5oq95bGJ77yM54K55Ye76JKZ5bGC5LiN5YWB6K645YWz6ZetXG4gICAqL1xuICBzdGF0aWMoXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBjb21wOiBhbnksXG4gICAgcGFyYW1zPzogYW55LFxuICAgIG9wdGlvbnM/OiBEcmF3ZXJIZWxwZXJPcHRpb25zXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgZHJhd2VyT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7IG56TWFza0Nsb3NhYmxlOiBmYWxzZSB9LFxuICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLmRyYXdlck9wdGlvbnMsXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUodGl0bGUsIGNvbXAsIHBhcmFtcywgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgeyBkcmF3ZXJPcHRpb25zIH0pKTtcbiAgfVxufVxuIl19