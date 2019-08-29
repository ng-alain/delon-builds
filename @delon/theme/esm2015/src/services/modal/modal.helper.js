/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { deepMerge } from '@delon/util';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/modal";
/**
 * @record
 */
export function ModalHelperOptions() { }
if (false) {
    /**
     * 大小；例如：lg、600，默认：`lg`
     * @type {?|undefined}
     */
    ModalHelperOptions.prototype.size;
    /**
     * 对话框 [ModalOptionsForService](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/nz-modal.type.ts) 参数
     * @type {?|undefined}
     */
    ModalHelperOptions.prototype.modalOptions;
    /**
     * 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误
     * @type {?|undefined}
     */
    ModalHelperOptions.prototype.exact;
    /**
     * 是否包裹标签页，修复模态包含标签间距问题
     * @type {?|undefined}
     */
    ModalHelperOptions.prototype.includeTabs;
}
/**
 * 对话框辅助类
 */
export class ModalHelper {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * 构建一个对话框
     *
     * \@example
     * this.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());
     * // 对于组件的成功&关闭的处理说明
     * // 成功
     * this.NzModalRef.close(data);
     * this.NzModalRef.close();
     * // 关闭
     * this.NzModalRef.destroy();
     * @param {?} comp 组件
     * @param {?=} params 组件参数
     * @param {?=} options 额外参数
     *
     * @return {?}
     */
    create(comp, params, options) {
        options = deepMerge({
            size: 'lg',
            exact: true,
            includeTabs: false,
        }, options);
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => {
            const { size, includeTabs, modalOptions } = (/** @type {?} */ (options));
            /** @type {?} */
            let cls = '';
            /** @type {?} */
            let width = '';
            if (size) {
                if (typeof size === 'number') {
                    width = `${size}px`;
                }
                else {
                    cls = `modal-${size}`;
                }
            }
            if (includeTabs) {
                cls += ' modal-include-tabs';
            }
            if (modalOptions && modalOptions.nzWrapClassName) {
                cls += ` ${modalOptions.nzWrapClassName}`;
                delete modalOptions.nzWrapClassName;
            }
            /** @type {?} */
            const defaultOptions = {
                nzWrapClassName: cls,
                nzContent: comp,
                nzWidth: width ? width : undefined,
                nzFooter: null,
                nzComponentParams: params,
            };
            /** @type {?} */
            const subject = this.srv.create(Object.assign({}, defaultOptions, modalOptions));
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
     * 构建静态框，点击蒙层不允许关闭
     *
     * \@example
     * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
     * // 对于组件的成功&关闭的处理说明
     * // 成功
     * this.NzModalRef.close(data);
     * this.NzModalRef.close();
     * // 关闭
     * this.NzModalRef.destroy();
     * @param {?} comp 组件
     * @param {?=} params 组件参数
     * @param {?=} options 额外参数
     *
     * @return {?}
     */
    createStatic(comp, params, options) {
        /** @type {?} */
        const modalOptions = Object.assign({ nzMaskClosable: false }, (options && options.modalOptions));
        return this.create(comp, params, Object.assign({}, options, { modalOptions }));
    }
    /**
     * 打开对话框
     * \@example
     * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
     * // 对于组件的成功&关闭的处理说明
     * // 成功
     * this.NzModalRef.close(data);
     * this.NzModalRef.close();
     * // 关闭
     * this.NzModalRef.destroy();
     * @param {?} comp 组件
     * @param {?=} params 组件参数
     * @param {?=} size 大小；例如：lg、600，默认：lg
     * @param {?=} options 对话框 `ModalOptionsForService` 参数
     *
     * @return {?}
     */
    open(comp, params, size = 'lg', options) {
        return this.create(comp, params, {
            size,
            modalOptions: options,
            exact: false,
        });
    }
    /**
     * 静态框，点击蒙层不允许关闭
     * \@example
     * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
     * // 对于组件的成功&关闭的处理说明
     * // 成功
     * this.NzModalRef.close(data);
     * this.NzModalRef.close();
     * // 关闭
     * this.NzModalRef.destroy();
     * @param {?} comp 组件
     * @param {?=} params 组件参数
     * @param {?=} size 大小；例如：lg、600，默认：lg
     * @param {?=} options 对话框 `ModalOptionsForService` 参数
     *
     * @return {?}
     */
    static(comp, params, size = 'lg', options) {
        return this.open(comp, params, size, Object.assign({ nzMaskClosable: false }, options));
    }
}
ModalHelper.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ModalHelper.ctorParameters = () => [
    { type: NzModalService }
];
/** @nocollapse */ ModalHelper.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ModalHelper_Factory() { return new ModalHelper(i0.ɵɵinject(i1.NzModalService)); }, token: ModalHelper, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalHelper.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBMEIsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDN0UsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0FBRTVDLHdDQVNDOzs7Ozs7SUFQQyxrQ0FBK0M7Ozs7O0lBRS9DLDBDQUFzQzs7Ozs7SUFFdEMsbUNBQWdCOzs7OztJQUVoQix5Q0FBc0I7Ozs7O0FBT3hCLE1BQU0sT0FBTyxXQUFXOzs7O0lBQ3RCLFlBQW9CLEdBQW1CO1FBQW5CLFFBQUcsR0FBSCxHQUFHLENBQWdCO0lBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBa0IzQyxNQUFNLENBQUMsSUFBUyxFQUFFLE1BQVksRUFBRSxPQUE0QjtRQUMxRCxPQUFPLEdBQUcsU0FBUyxDQUNqQjtZQUNFLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsS0FBSztTQUNuQixFQUNELE9BQU8sQ0FDUixDQUFDO1FBQ0YsT0FBTyxJQUFJLFVBQVU7Ozs7UUFBQyxDQUFDLFFBQXVCLEVBQUUsRUFBRTtrQkFDMUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxHQUFHLG1CQUFBLE9BQU8sRUFBc0I7O2dCQUNyRSxHQUFHLEdBQUcsRUFBRTs7Z0JBQ1IsS0FBSyxHQUFHLEVBQUU7WUFDZCxJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtvQkFDNUIsS0FBSyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUM7aUJBQ3JCO3FCQUFNO29CQUNMLEdBQUcsR0FBRyxTQUFTLElBQUksRUFBRSxDQUFDO2lCQUN2QjthQUNGO1lBQ0QsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsR0FBRyxJQUFJLHFCQUFxQixDQUFDO2FBQzlCO1lBQ0QsSUFBSSxZQUFZLElBQUksWUFBWSxDQUFDLGVBQWUsRUFBRTtnQkFDaEQsR0FBRyxJQUFJLElBQUksWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMxQyxPQUFPLFlBQVksQ0FBQyxlQUFlLENBQUM7YUFDckM7O2tCQUNLLGNBQWMsR0FBMkI7Z0JBQzdDLGVBQWUsRUFBRSxHQUFHO2dCQUNwQixTQUFTLEVBQUUsSUFBSTtnQkFDZixPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVM7Z0JBQ2xDLFFBQVEsRUFBRSxJQUFJO2dCQUNkLGlCQUFpQixFQUFFLE1BQU07YUFDMUI7O2tCQUNLLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sbUJBQU0sY0FBYyxFQUFLLFlBQVksRUFBRzs7a0JBQ2pFLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO2dCQUM1RCxJQUFJLG1CQUFBLE9BQU8sRUFBQyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7b0JBQzNCLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTt3QkFDZixRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNwQjtpQkFDRjtxQkFBTTtvQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNwQjtnQkFDRCxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3BCLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QixDQUFDLEVBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtCRCxZQUFZLENBQUMsSUFBUyxFQUFFLE1BQVksRUFBRSxPQUE0Qjs7Y0FDMUQsWUFBWSxtQkFDaEIsY0FBYyxFQUFFLEtBQUssSUFDbEIsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUNyQztRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxvQkFBTyxPQUFPLElBQUUsWUFBWSxJQUFHLENBQUM7SUFDakUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBa0JELElBQUksQ0FBQyxJQUFTLEVBQUUsTUFBWSxFQUFFLE9BQWdELElBQUksRUFBRSxPQUFnQztRQUNsSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRTtZQUMvQixJQUFJO1lBQ0osWUFBWSxFQUFFLE9BQU87WUFDckIsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkQsTUFBTSxDQUFDLElBQVMsRUFBRSxNQUFZLEVBQUUsT0FBZ0QsSUFBSSxFQUFFLE9BQWE7UUFDakcsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxrQkFDakMsY0FBYyxFQUFFLEtBQUssSUFDbEIsT0FBTyxFQUNWLENBQUM7SUFDTCxDQUFDOzs7WUExSUYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQWpCRCxjQUFjOzs7Ozs7OztJQW1CakMsMEJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTW9kYWxPcHRpb25zRm9yU2VydmljZSwgTnpNb2RhbFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL21vZGFsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxIZWxwZXJPcHRpb25zIHtcbiAgLyoqIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yaYGxnYCAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyO1xuICAvKiog5a+56K+d5qGGIFtNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlXShodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9jb21wb25lbnRzL21vZGFsL256LW1vZGFsLnR5cGUudHMpIOWPguaVsCAqL1xuICBtb2RhbE9wdGlvbnM/OiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlO1xuICAvKiog5piv5ZCm57K+5YeG77yI6buY6K6k77yaYHRydWVg77yJ77yM6Iul6L+U5Zue5YC86Z2e56m65YC877yIYG51bGxg5oiWYHVuZGVmaW5lZGDvvInop4bkuLrmiJDlip/vvIzlkKbliJnop4bkuLrplJnor68gKi9cbiAgZXhhY3Q/OiBib29sZWFuO1xuICAvKiog5piv5ZCm5YyF6KO55qCH562+6aG177yM5L+u5aSN5qih5oCB5YyF5ZCr5qCH562+6Ze06Led6Zeu6aKYICovXG4gIGluY2x1ZGVUYWJzPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiDlr7nor53moYbovoXliqnnsbtcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBNb2RhbEhlbHBlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBOek1vZGFsU2VydmljZSkge31cblxuICAvKipcbiAgICog5p6E5bu65LiA5Liq5a+56K+d5qGGXG4gICAqXG4gICAqIEBwYXJhbSBjb21wIOe7hOS7tlxuICAgKiBAcGFyYW0gcGFyYW1zIOe7hOS7tuWPguaVsFxuICAgKiBAcGFyYW0gb3B0aW9ucyDpop3lpJblj4LmlbBcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogdGhpcy5tb2RhbEhlbHBlci5jcmVhdGUoRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbiAgICogLy8g5a+55LqO57uE5Lu255qE5oiQ5YqfJuWFs+mXreeahOWkhOeQhuivtOaYjlxuICAgKiAvLyDmiJDlip9cbiAgICogdGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xuICAgKiB0aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcbiAgICogLy8g5YWz6ZetXG4gICAqIHRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XG4gICAqL1xuICBjcmVhdGUoY29tcDogYW55LCBwYXJhbXM/OiBhbnksIG9wdGlvbnM/OiBNb2RhbEhlbHBlck9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIG9wdGlvbnMgPSBkZWVwTWVyZ2UoXG4gICAgICB7XG4gICAgICAgIHNpemU6ICdsZycsXG4gICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICBpbmNsdWRlVGFiczogZmFsc2UsXG4gICAgICB9LFxuICAgICAgb3B0aW9ucyxcbiAgICApO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcbiAgICAgIGNvbnN0IHsgc2l6ZSwgaW5jbHVkZVRhYnMsIG1vZGFsT3B0aW9ucyB9ID0gb3B0aW9ucyBhcyBNb2RhbEhlbHBlck9wdGlvbnM7XG4gICAgICBsZXQgY2xzID0gJyc7XG4gICAgICBsZXQgd2lkdGggPSAnJztcbiAgICAgIGlmIChzaXplKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICB3aWR0aCA9IGAke3NpemV9cHhgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNscyA9IGBtb2RhbC0ke3NpemV9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGluY2x1ZGVUYWJzKSB7XG4gICAgICAgIGNscyArPSAnIG1vZGFsLWluY2x1ZGUtdGFicyc7XG4gICAgICB9XG4gICAgICBpZiAobW9kYWxPcHRpb25zICYmIG1vZGFsT3B0aW9ucy5ueldyYXBDbGFzc05hbWUpIHtcbiAgICAgICAgY2xzICs9IGAgJHttb2RhbE9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lfWA7XG4gICAgICAgIGRlbGV0ZSBtb2RhbE9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lO1xuICAgICAgfVxuICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE1vZGFsT3B0aW9uc0ZvclNlcnZpY2UgPSB7XG4gICAgICAgIG56V3JhcENsYXNzTmFtZTogY2xzLFxuICAgICAgICBuekNvbnRlbnQ6IGNvbXAsXG4gICAgICAgIG56V2lkdGg6IHdpZHRoID8gd2lkdGggOiB1bmRlZmluZWQsXG4gICAgICAgIG56Rm9vdGVyOiBudWxsLFxuICAgICAgICBuekNvbXBvbmVudFBhcmFtczogcGFyYW1zLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHN1YmplY3QgPSB0aGlzLnNydi5jcmVhdGUoeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ubW9kYWxPcHRpb25zIH0pO1xuICAgICAgY29uc3QgYWZ0ZXJDbG9zZSQgPSBzdWJqZWN0LmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAob3B0aW9ucyEuZXhhY3QgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAocmVzICE9IG51bGwpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xuICAgICAgICB9XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIGFmdGVyQ2xvc2UkLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmnoTlu7rpnZnmgIHmoYbvvIzngrnlh7vokpnlsYLkuI3lhYHorrjlhbPpl61cbiAgICpcbiAgICogQHBhcmFtIGNvbXAg57uE5Lu2XG4gICAqIEBwYXJhbSBwYXJhbXMg57uE5Lu25Y+C5pWwXG4gICAqIEBwYXJhbSBvcHRpb25zIOmineWkluWPguaVsFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB0aGlzLm1vZGFsSGVscGVyLm9wZW4oRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbiAgICogLy8g5a+55LqO57uE5Lu255qE5oiQ5YqfJuWFs+mXreeahOWkhOeQhuivtOaYjlxuICAgKiAvLyDmiJDlip9cbiAgICogdGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xuICAgKiB0aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcbiAgICogLy8g5YWz6ZetXG4gICAqIHRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XG4gICAqL1xuICBjcmVhdGVTdGF0aWMoY29tcDogYW55LCBwYXJhbXM/OiBhbnksIG9wdGlvbnM/OiBNb2RhbEhlbHBlck9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IG1vZGFsT3B0aW9ucyA9IHtcbiAgICAgIG56TWFza0Nsb3NhYmxlOiBmYWxzZSxcbiAgICAgIC4uLihvcHRpb25zICYmIG9wdGlvbnMubW9kYWxPcHRpb25zKSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZShjb21wLCBwYXJhbXMsIHsgLi4ub3B0aW9ucywgbW9kYWxPcHRpb25zIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOaJk+W8gOWvueivneahhlxuICAgKiBAcGFyYW0gY29tcCDnu4Tku7ZcbiAgICogQHBhcmFtIHBhcmFtcyDnu4Tku7blj4LmlbBcbiAgICogQHBhcmFtIHNpemUg5aSn5bCP77yb5L6L5aaC77yabGfjgIE2MDDvvIzpu5jorqTvvJpsZ1xuICAgKiBAcGFyYW0gb3B0aW9ucyDlr7nor53moYYgYE1vZGFsT3B0aW9uc0ZvclNlcnZpY2VgIOWPguaVsFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB0aGlzLm1vZGFsSGVscGVyLm9wZW4oRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbiAgICogLy8g5a+55LqO57uE5Lu255qE5oiQ5YqfJuWFs+mXreeahOWkhOeQhuivtOaYjlxuICAgKiAvLyDmiJDlip9cbiAgICogdGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xuICAgKiB0aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcbiAgICogLy8g5YWz6ZetXG4gICAqIHRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XG4gICAqL1xuICBvcGVuKGNvbXA6IGFueSwgcGFyYW1zPzogYW55LCBzaXplOiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJycgfCBudW1iZXIgPSAnbGcnLCBvcHRpb25zPzogTW9kYWxPcHRpb25zRm9yU2VydmljZSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKGNvbXAsIHBhcmFtcywge1xuICAgICAgc2l6ZSxcbiAgICAgIG1vZGFsT3B0aW9uczogb3B0aW9ucyxcbiAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDpnZnmgIHmoYbvvIzngrnlh7vokpnlsYLkuI3lhYHorrjlhbPpl61cbiAgICogQHBhcmFtIGNvbXAg57uE5Lu2XG4gICAqIEBwYXJhbSBwYXJhbXMg57uE5Lu25Y+C5pWwXG4gICAqIEBwYXJhbSBzaXplIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yabGdcbiAgICogQHBhcmFtIG9wdGlvbnMg5a+56K+d5qGGIGBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlYCDlj4LmlbBcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogdGhpcy5tb2RhbEhlbHBlci5vcGVuKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4gICAqIC8vIOWvueS6jue7hOS7tueahOaIkOWKnyblhbPpl63nmoTlpITnkIbor7TmmI5cbiAgICogLy8g5oiQ5YqfXG4gICAqIHRoaXMuTnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcbiAgICogdGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XG4gICAqIC8vIOWFs+mXrVxuICAgKiB0aGlzLk56TW9kYWxSZWYuZGVzdHJveSgpO1xuICAgKi9cbiAgc3RhdGljKGNvbXA6IGFueSwgcGFyYW1zPzogYW55LCBzaXplOiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJycgfCBudW1iZXIgPSAnbGcnLCBvcHRpb25zPzogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5vcGVuKGNvbXAsIHBhcmFtcywgc2l6ZSwge1xuICAgICAgbnpNYXNrQ2xvc2FibGU6IGZhbHNlLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9KTtcbiAgfVxufVxuIl19