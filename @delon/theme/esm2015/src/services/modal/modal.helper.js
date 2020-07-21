/**
 * @fileoverview added by tsickle
 * Generated from: src/services/modal/modal.helper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * 对话框 [ModalOptions](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts) 参数
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
            const subject = this.srv.create(Object.assign(Object.assign({}, defaultOptions), modalOptions));
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
        return this.create(comp, params, Object.assign(Object.assign({}, options), { modalOptions }));
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
     *
     * @param {?=} options
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
     *
     * @param {?=} options
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
/** @nocollapse */ ModalHelper.ɵprov = i0.ɵɵdefineInjectable({ factory: function ModalHelper_Factory() { return new ModalHelper(i0.ɵɵinject(i1.NzModalService)); }, token: ModalHelper, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalHelper.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQWdCLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7Ozs7OztBQUU1Qyx3Q0FTQzs7Ozs7O0lBUEMsa0NBQStDOzs7OztJQUUvQywwQ0FBNEI7Ozs7O0lBRTVCLG1DQUFnQjs7Ozs7SUFFaEIseUNBQXNCOzs7OztBQU94QixNQUFNLE9BQU8sV0FBVzs7OztJQUN0QixZQUFvQixHQUFtQjtRQUFuQixRQUFHLEdBQUgsR0FBRyxDQUFnQjtJQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtCM0MsTUFBTSxDQUFDLElBQVMsRUFBRSxNQUFZLEVBQUUsT0FBNEI7UUFDMUQsT0FBTyxHQUFHLFNBQVMsQ0FDakI7WUFDRSxJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxJQUFJO1lBQ1gsV0FBVyxFQUFFLEtBQUs7U0FDbkIsRUFDRCxPQUFPLENBQ1IsQ0FBQztRQUNGLE9BQU8sSUFBSSxVQUFVOzs7O1FBQUMsQ0FBQyxRQUF1QixFQUFFLEVBQUU7a0JBQzFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsR0FBRyxtQkFBQSxPQUFPLEVBQXNCOztnQkFDckUsR0FBRyxHQUFHLEVBQUU7O2dCQUNSLEtBQUssR0FBRyxFQUFFO1lBQ2QsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7b0JBQzVCLEtBQUssR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDO2lCQUNyQjtxQkFBTTtvQkFDTCxHQUFHLEdBQUcsU0FBUyxJQUFJLEVBQUUsQ0FBQztpQkFDdkI7YUFDRjtZQUNELElBQUksV0FBVyxFQUFFO2dCQUNmLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQzthQUM5QjtZQUNELElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxlQUFlLEVBQUU7Z0JBQ2hELEdBQUcsSUFBSSxJQUFJLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDMUMsT0FBTyxZQUFZLENBQUMsZUFBZSxDQUFDO2FBQ3JDOztrQkFDSyxjQUFjLEdBQWlCO2dCQUNuQyxlQUFlLEVBQUUsR0FBRztnQkFDcEIsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTO2dCQUNsQyxRQUFRLEVBQUUsSUFBSTtnQkFDZCxpQkFBaUIsRUFBRSxNQUFNO2FBQzFCOztrQkFDSyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLGlDQUFNLGNBQWMsR0FBSyxZQUFZLEVBQUc7O2tCQUNqRSxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtnQkFDNUQsSUFBSSxtQkFBQSxPQUFPLEVBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO29CQUMzQixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7d0JBQ2YsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDcEI7aUJBQ0Y7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEI7Z0JBQ0QsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwQixXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUIsQ0FBQyxFQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkQsWUFBWSxDQUFDLElBQVMsRUFBRSxNQUFZLEVBQUUsT0FBNEI7O2NBQzFELFlBQVksbUJBQ2hCLGNBQWMsRUFBRSxLQUFLLElBQ2xCLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FDckM7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sa0NBQU8sT0FBTyxLQUFFLFlBQVksSUFBRyxDQUFDO0lBQ2pFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlCRCxJQUFJLENBQUMsSUFBUyxFQUFFLE1BQVksRUFBRSxPQUFnRCxJQUFJLEVBQUUsT0FBc0I7UUFDeEcsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUU7WUFDL0IsSUFBSTtZQUNKLFlBQVksRUFBRSxPQUFPO1lBQ3JCLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJELE1BQU0sQ0FBQyxJQUFTLEVBQUUsTUFBWSxFQUFFLE9BQWdELElBQUksRUFBRSxPQUFzQjtRQUMxRyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLGtCQUNqQyxjQUFjLEVBQUUsS0FBSyxJQUNsQixPQUFPLEVBQ1YsQ0FBQztJQUNMLENBQUM7OztZQXhJRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBakJYLGNBQWM7Ozs7Ozs7O0lBbUJ2QiwwQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBNb2RhbE9wdGlvbnMsIE56TW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tb2RhbCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsSGVscGVyT3B0aW9ucyB7XG4gIC8qKiDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmBsZ2AgKi9cbiAgc2l6ZT86ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnJyB8IG51bWJlcjtcbiAgLyoqIOWvueivneahhiBbTW9kYWxPcHRpb25zXShodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9jb21wb25lbnRzL21vZGFsL21vZGFsLXR5cGVzLnRzKSDlj4LmlbAgKi9cbiAgbW9kYWxPcHRpb25zPzogTW9kYWxPcHRpb25zO1xuICAvKiog5piv5ZCm57K+5YeG77yI6buY6K6k77yaYHRydWVg77yJ77yM6Iul6L+U5Zue5YC86Z2e56m65YC877yIYG51bGxg5oiWYHVuZGVmaW5lZGDvvInop4bkuLrmiJDlip/vvIzlkKbliJnop4bkuLrplJnor68gKi9cbiAgZXhhY3Q/OiBib29sZWFuO1xuICAvKiog5piv5ZCm5YyF6KO55qCH562+6aG177yM5L+u5aSN5qih5oCB5YyF5ZCr5qCH562+6Ze06Led6Zeu6aKYICovXG4gIGluY2x1ZGVUYWJzPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiDlr7nor53moYbovoXliqnnsbtcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBNb2RhbEhlbHBlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBOek1vZGFsU2VydmljZSkge31cblxuICAvKipcbiAgICog5p6E5bu65LiA5Liq5a+56K+d5qGGXG4gICAqXG4gICAqIEBwYXJhbSBjb21wIOe7hOS7tlxuICAgKiBAcGFyYW0gcGFyYW1zIOe7hOS7tuWPguaVsFxuICAgKiBAcGFyYW0gb3B0aW9ucyDpop3lpJblj4LmlbBcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogdGhpcy5tb2RhbEhlbHBlci5jcmVhdGUoRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbiAgICogLy8g5a+55LqO57uE5Lu255qE5oiQ5YqfJuWFs+mXreeahOWkhOeQhuivtOaYjlxuICAgKiAvLyDmiJDlip9cbiAgICogdGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xuICAgKiB0aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcbiAgICogLy8g5YWz6ZetXG4gICAqIHRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XG4gICAqL1xuICBjcmVhdGUoY29tcDogYW55LCBwYXJhbXM/OiBhbnksIG9wdGlvbnM/OiBNb2RhbEhlbHBlck9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIG9wdGlvbnMgPSBkZWVwTWVyZ2UoXG4gICAgICB7XG4gICAgICAgIHNpemU6ICdsZycsXG4gICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICBpbmNsdWRlVGFiczogZmFsc2UsXG4gICAgICB9LFxuICAgICAgb3B0aW9ucyxcbiAgICApO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcbiAgICAgIGNvbnN0IHsgc2l6ZSwgaW5jbHVkZVRhYnMsIG1vZGFsT3B0aW9ucyB9ID0gb3B0aW9ucyBhcyBNb2RhbEhlbHBlck9wdGlvbnM7XG4gICAgICBsZXQgY2xzID0gJyc7XG4gICAgICBsZXQgd2lkdGggPSAnJztcbiAgICAgIGlmIChzaXplKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICB3aWR0aCA9IGAke3NpemV9cHhgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNscyA9IGBtb2RhbC0ke3NpemV9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGluY2x1ZGVUYWJzKSB7XG4gICAgICAgIGNscyArPSAnIG1vZGFsLWluY2x1ZGUtdGFicyc7XG4gICAgICB9XG4gICAgICBpZiAobW9kYWxPcHRpb25zICYmIG1vZGFsT3B0aW9ucy5ueldyYXBDbGFzc05hbWUpIHtcbiAgICAgICAgY2xzICs9IGAgJHttb2RhbE9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lfWA7XG4gICAgICAgIGRlbGV0ZSBtb2RhbE9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lO1xuICAgICAgfVxuICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE1vZGFsT3B0aW9ucyA9IHtcbiAgICAgICAgbnpXcmFwQ2xhc3NOYW1lOiBjbHMsXG4gICAgICAgIG56Q29udGVudDogY29tcCxcbiAgICAgICAgbnpXaWR0aDogd2lkdGggPyB3aWR0aCA6IHVuZGVmaW5lZCxcbiAgICAgICAgbnpGb290ZXI6IG51bGwsXG4gICAgICAgIG56Q29tcG9uZW50UGFyYW1zOiBwYXJhbXMsXG4gICAgICB9O1xuICAgICAgY29uc3Qgc3ViamVjdCA9IHRoaXMuc3J2LmNyZWF0ZSh7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5tb2RhbE9wdGlvbnMgfSk7XG4gICAgICBjb25zdCBhZnRlckNsb3NlJCA9IHN1YmplY3QuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zIS5leGFjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlmIChyZXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgYWZ0ZXJDbG9zZSQudW5zdWJzY3JpYmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOaehOW7uumdmeaAgeahhu+8jOeCueWHu+iSmeWxguS4jeWFgeiuuOWFs+mXrVxuICAgKlxuICAgKiBAcGFyYW0gY29tcCDnu4Tku7ZcbiAgICogQHBhcmFtIHBhcmFtcyDnu4Tku7blj4LmlbBcbiAgICogQHBhcmFtIG9wdGlvbnMg6aKd5aSW5Y+C5pWwXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHRoaXMubW9kYWxIZWxwZXIub3BlbihGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuICAgKiAvLyDlr7nkuo7nu4Tku7bnmoTmiJDlip8m5YWz6Zet55qE5aSE55CG6K+05piOXG4gICAqIC8vIOaIkOWKn1xuICAgKiB0aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XG4gICAqIHRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xuICAgKiAvLyDlhbPpl61cbiAgICogdGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcbiAgICovXG4gIGNyZWF0ZVN0YXRpYyhjb21wOiBhbnksIHBhcmFtcz86IGFueSwgb3B0aW9ucz86IE1vZGFsSGVscGVyT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgbW9kYWxPcHRpb25zID0ge1xuICAgICAgbnpNYXNrQ2xvc2FibGU6IGZhbHNlLFxuICAgICAgLi4uKG9wdGlvbnMgJiYgb3B0aW9ucy5tb2RhbE9wdGlvbnMpLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKGNvbXAsIHBhcmFtcywgeyAuLi5vcHRpb25zLCBtb2RhbE9wdGlvbnMgfSk7XG4gIH1cblxuICAvKipcbiAgICog5omT5byA5a+56K+d5qGGXG4gICAqIEBwYXJhbSBjb21wIOe7hOS7tlxuICAgKiBAcGFyYW0gcGFyYW1zIOe7hOS7tuWPguaVsFxuICAgKiBAcGFyYW0gc2l6ZSDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmxnXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHRoaXMubW9kYWxIZWxwZXIub3BlbihGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuICAgKiAvLyDlr7nkuo7nu4Tku7bnmoTmiJDlip8m5YWz6Zet55qE5aSE55CG6K+05piOXG4gICAqIC8vIOaIkOWKn1xuICAgKiB0aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XG4gICAqIHRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xuICAgKiAvLyDlhbPpl61cbiAgICogdGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcbiAgICovXG4gIG9wZW4oY29tcDogYW55LCBwYXJhbXM/OiBhbnksIHNpemU6ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnJyB8IG51bWJlciA9ICdsZycsIG9wdGlvbnM/OiBNb2RhbE9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZShjb21wLCBwYXJhbXMsIHtcbiAgICAgIHNpemUsXG4gICAgICBtb2RhbE9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICBleGFjdDogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog6Z2Z5oCB5qGG77yM54K55Ye76JKZ5bGC5LiN5YWB6K645YWz6ZetXG4gICAqIEBwYXJhbSBjb21wIOe7hOS7tlxuICAgKiBAcGFyYW0gcGFyYW1zIOe7hOS7tuWPguaVsFxuICAgKiBAcGFyYW0gc2l6ZSDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmxnXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHRoaXMubW9kYWxIZWxwZXIub3BlbihGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuICAgKiAvLyDlr7nkuo7nu4Tku7bnmoTmiJDlip8m5YWz6Zet55qE5aSE55CG6K+05piOXG4gICAqIC8vIOaIkOWKn1xuICAgKiB0aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XG4gICAqIHRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xuICAgKiAvLyDlhbPpl61cbiAgICogdGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcbiAgICovXG4gIHN0YXRpYyhjb21wOiBhbnksIHBhcmFtcz86IGFueSwgc2l6ZTogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyID0gJ2xnJywgb3B0aW9ucz86IE1vZGFsT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMub3Blbihjb21wLCBwYXJhbXMsIHNpemUsIHtcbiAgICAgIG56TWFza0Nsb3NhYmxlOiBmYWxzZSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==