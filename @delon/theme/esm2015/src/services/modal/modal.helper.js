/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd";
/**
 * @record
 */
export function ModalHelperOptions() { }
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
/**
 * 对话框辅助类
 */
export class ModalHelper {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
        this.zIndex = 500;
    }
    /**
     * 构建一个对话框
     *
     * @param {?} comp 组件
     * @param {?=} params 组件参数
     * @param {?=} options 额外参数
     *
     * 示例：
     * ```ts
     * this.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());
     * // 对于组件的成功&关闭的处理说明
     * // 成功
     * this.NzModalRef.close(data);
     * this.NzModalRef.close();
     * // 关闭
     * this.NzModalRef.destroy();
     * ```
     * @return {?}
     */
    create(comp, params, options) {
        options = Object.assign({
            size: 'lg',
            exact: true,
            includeTabs: false,
        }, options);
        return new Observable((observer) => {
            /** @type {?} */
            let cls = '';
            /** @type {?} */
            let width = '';
            if (options.size) {
                if (typeof options.size === 'number') {
                    width = `${options.size}px`;
                }
                else {
                    cls = `modal-${options.size}`;
                }
            }
            if (options.includeTabs) {
                cls += ' modal-include-tabs';
            }
            /** @type {?} */
            const defaultOptions = {
                nzWrapClassName: cls,
                nzContent: comp,
                nzWidth: width ? width : undefined,
                nzFooter: null,
                nzComponentParams: params,
                nzZIndex: ++this.zIndex,
            };
            /** @type {?} */
            const subject = this.srv.create(Object.assign(defaultOptions, options.modalOptions));
            /** @type {?} */
            const afterClose$ = subject.afterClose.subscribe((res) => {
                if (options.exact === true) {
                    if (res != null) {
                        observer.next(res);
                    }
                }
                else {
                    observer.next(res);
                }
                observer.complete();
                afterClose$.unsubscribe();
            });
        });
    }
    /**
     * 构建静态框，点击蒙层不允许关闭
     *
     * @param {?} comp 组件
     * @param {?=} params 组件参数
     * @param {?=} options 额外参数
     *
     * 示例：
     * ```ts
     * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
     * // 对于组件的成功&关闭的处理说明
     * // 成功
     * this.NzModalRef.close(data);
     * this.NzModalRef.close();
     * // 关闭
     * this.NzModalRef.destroy();
     * ```
     * @return {?}
     */
    createStatic(comp, params, options) {
        /** @type {?} */
        const modalOptions = Object.assign({ nzMaskClosable: false }, options && options.modalOptions);
        return this.create(comp, params, Object.assign({}, options, { modalOptions }));
    }
    /**
     * 打开对话框
     * @param {?} comp 组件
     * @param {?=} params 组件参数
     * @param {?=} size 大小；例如：lg、600，默认：lg
     * @param {?=} options 对话框 `ModalOptionsForService` 参数
     *
     * 示例：
     * ```ts
     * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
     * // 对于组件的成功&关闭的处理说明
     * // 成功
     * this.NzModalRef.close(data);
     * this.NzModalRef.close();
     * // 关闭
     * this.NzModalRef.destroy();
     * ```
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
     * @param {?} comp 组件
     * @param {?=} params 组件参数
     * @param {?=} size 大小；例如：lg、600，默认：lg
     * @param {?=} options 对话框 `ModalOptionsForService` 参数
     *
     * 示例：
     * ```ts
     * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
     * // 对于组件的成功&关闭的处理说明
     * // 成功
     * this.NzModalRef.close(data);
     * this.NzModalRef.close();
     * // 关闭
     * this.NzModalRef.destroy();
     * ```
     * @return {?}
     */
    static(comp, params, size = 'lg', options) {
        return this.open(comp, params, size, Object.assign({
            nzMaskClosable: false,
        }, options));
    }
}
ModalHelper.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ModalHelper.ctorParameters = () => [
    { type: NzModalService }
];
/** @nocollapse */ ModalHelper.ngInjectableDef = i0.defineInjectable({ factory: function ModalHelper_Factory() { return new ModalHelper(i0.inject(i1.NzModalService)); }, token: ModalHelper, providedIn: "root" });
if (false) {
    /** @type {?} */
    ModalHelper.prototype.zIndex;
    /** @type {?} */
    ModalHelper.prototype.srv;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxjQUFjLEVBQTBCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnZFLE1BQU07Ozs7SUFHSixZQUFvQixHQUFtQjtRQUFuQixRQUFHLEdBQUgsR0FBRyxDQUFnQjtzQkFGdEIsR0FBRztLQUV1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvQjNDLE1BQU0sQ0FDSixJQUFTLEVBQ1QsTUFBWSxFQUNaLE9BQTRCO1FBRTVCLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3RCLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsS0FBSztTQUNuQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ1osT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLFFBQXVCLEVBQUUsRUFBRTs7WUFDaEQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUNDOztZQURiLElBQ0UsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNiLElBQUksT0FBTyxDQUFDLElBQUksRUFBRTtnQkFDaEIsSUFBSSxPQUFPLE9BQU8sQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO29CQUNwQyxLQUFLLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUM7aUJBQzdCO3FCQUFNO29CQUNMLEdBQUcsR0FBRyxTQUFTLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDL0I7YUFDRjtZQUNELElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtnQkFDdkIsR0FBRyxJQUFJLHFCQUFxQixDQUFDO2FBQzlCOztZQUNELE1BQU0sY0FBYyxHQUEyQjtnQkFDN0MsZUFBZSxFQUFFLEdBQUc7Z0JBQ3BCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUztnQkFDbEMsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsaUJBQWlCLEVBQUUsTUFBTTtnQkFDekIsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDeEIsQ0FBQzs7WUFDRixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUNwRCxDQUFDOztZQUNGLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7Z0JBQzVELElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7b0JBQzFCLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTt3QkFDZixRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNwQjtpQkFDRjtxQkFBTTtvQkFDTCxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNwQjtnQkFDRCxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3BCLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUMzQixDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7S0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvQkQsWUFBWSxDQUNWLElBQVMsRUFDVCxNQUFZLEVBQ1osT0FBNEI7O1FBRTVCLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ2hDLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxFQUN6QixPQUFPLElBQUksT0FBTyxDQUFDLFlBQVksQ0FDaEMsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNoRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvQkQsSUFBSSxDQUNGLElBQVMsRUFDVCxNQUFZLEVBQ1osT0FBZ0QsSUFBSSxFQUNwRCxPQUFnQztRQUVoQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRTtZQUMvQixJQUFJO1lBQ0osWUFBWSxFQUFFLE9BQU87WUFDckIsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDLENBQUM7S0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvQkQsTUFBTSxDQUNKLElBQVMsRUFDVCxNQUFZLEVBQ1osT0FBZ0QsSUFBSSxFQUNwRCxPQUFhO1FBRWIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUNkLElBQUksRUFDSixNQUFNLEVBQ04sSUFBSSxFQUNKLE1BQU0sQ0FBQyxNQUFNLENBQ1g7WUFDRSxjQUFjLEVBQUUsS0FBSztTQUN0QixFQUNELE9BQU8sQ0FDUixDQUNGLENBQUM7S0FDSDs7O1lBeEtGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFoQnpCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56TW9kYWxTZXJ2aWNlLCBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsSGVscGVyT3B0aW9ucyB7XHJcbiAgLyoqIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yaYGxnYCAqL1xyXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJycgfCBudW1iZXI7XHJcbiAgLyoqIOWvueivneahhiBbTW9kYWxPcHRpb25zRm9yU2VydmljZV0oaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvY29tcG9uZW50cy9tb2RhbC9uei1tb2RhbC50eXBlLnRzKSDlj4LmlbAgKi9cclxuICBtb2RhbE9wdGlvbnM/OiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlO1xyXG4gIC8qKiDmmK/lkKbnsr7lh4bvvIjpu5jorqTvvJpgdHJ1ZWDvvInvvIzoi6Xov5Tlm57lgLzpnZ7nqbrlgLzvvIhgbnVsbGDmiJZgdW5kZWZpbmVkYO+8ieinhuS4uuaIkOWKn++8jOWQpuWImeinhuS4uumUmeivryAqL1xyXG4gIGV4YWN0PzogYm9vbGVhbjtcclxuICAvKiog5piv5ZCm5YyF6KO55qCH562+6aG177yM5L+u5aSN5qih5oCB5YyF5ZCr5qCH562+6Ze06Led6Zeu6aKYICovXHJcbiAgaW5jbHVkZVRhYnM/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICog5a+56K+d5qGG6L6F5Yqp57G7XHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxIZWxwZXIge1xyXG4gIHByaXZhdGUgekluZGV4ID0gNTAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogTnpNb2RhbFNlcnZpY2UpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaehOW7uuS4gOS4quWvueivneahhlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvbXAg57uE5Lu2XHJcbiAgICogQHBhcmFtIHBhcmFtcyDnu4Tku7blj4LmlbBcclxuICAgKiBAcGFyYW0gb3B0aW9ucyDpop3lpJblj4LmlbBcclxuICAgKlxyXG4gICAqIOekuuS+i++8mlxyXG4gIGBgYHRzXHJcbnRoaXMubW9kYWxIZWxwZXIuY3JlYXRlKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XHJcbi8vIOWvueS6jue7hOS7tueahOaIkOWKnyblhbPpl63nmoTlpITnkIbor7TmmI5cclxuLy8g5oiQ5YqfXHJcbnRoaXMuTnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcclxudGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XHJcbi8vIOWFs+mXrVxyXG50aGlzLk56TW9kYWxSZWYuZGVzdHJveSgpO1xyXG5gYGBcclxuICAgKi9cclxuICBjcmVhdGUoXHJcbiAgICBjb21wOiBhbnksXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzogTW9kYWxIZWxwZXJPcHRpb25zXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgc2l6ZTogJ2xnJyxcclxuICAgICAgZXhhY3Q6IHRydWUsXHJcbiAgICAgIGluY2x1ZGVUYWJzOiBmYWxzZSxcclxuICAgIH0sIG9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xyXG4gICAgICBsZXQgY2xzID0gJycsXHJcbiAgICAgICAgd2lkdGggPSAnJztcclxuICAgICAgaWYgKG9wdGlvbnMuc2l6ZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5zaXplID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgd2lkdGggPSBgJHtvcHRpb25zLnNpemV9cHhgO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjbHMgPSBgbW9kYWwtJHtvcHRpb25zLnNpemV9YDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG9wdGlvbnMuaW5jbHVkZVRhYnMpIHtcclxuICAgICAgICBjbHMgKz0gJyBtb2RhbC1pbmNsdWRlLXRhYnMnO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlID0ge1xyXG4gICAgICAgIG56V3JhcENsYXNzTmFtZTogY2xzLFxyXG4gICAgICAgIG56Q29udGVudDogY29tcCxcclxuICAgICAgICBueldpZHRoOiB3aWR0aCA/IHdpZHRoIDogdW5kZWZpbmVkLFxyXG4gICAgICAgIG56Rm9vdGVyOiBudWxsLFxyXG4gICAgICAgIG56Q29tcG9uZW50UGFyYW1zOiBwYXJhbXMsXHJcbiAgICAgICAgbnpaSW5kZXg6ICsrdGhpcy56SW5kZXgsXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHN1YmplY3QgPSB0aGlzLnNydi5jcmVhdGUoXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgb3B0aW9ucy5tb2RhbE9wdGlvbnMpLFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBhZnRlckNsb3NlJCA9IHN1YmplY3QuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuZXhhY3QgPT09IHRydWUpIHtcclxuICAgICAgICAgIGlmIChyZXMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICBhZnRlckNsb3NlJC51bnN1YnNjcmliZSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5p6E5bu66Z2Z5oCB5qGG77yM54K55Ye76JKZ5bGC5LiN5YWB6K645YWz6ZetXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29tcCDnu4Tku7ZcclxuICAgKiBAcGFyYW0gcGFyYW1zIOe7hOS7tuWPguaVsFxyXG4gICAqIEBwYXJhbSBvcHRpb25zIOmineWkluWPguaVsFxyXG4gICAqXHJcbiAgICog56S65L6L77yaXHJcbiAgYGBgdHNcclxudGhpcy5tb2RhbEhlbHBlci5vcGVuKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XHJcbi8vIOWvueS6jue7hOS7tueahOaIkOWKnyblhbPpl63nmoTlpITnkIbor7TmmI5cclxuLy8g5oiQ5YqfXHJcbnRoaXMuTnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcclxudGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XHJcbi8vIOWFs+mXrVxyXG50aGlzLk56TW9kYWxSZWYuZGVzdHJveSgpO1xyXG5gYGBcclxuICAgKi9cclxuICBjcmVhdGVTdGF0aWMoXHJcbiAgICBjb21wOiBhbnksXHJcbiAgICBwYXJhbXM/OiBhbnksXHJcbiAgICBvcHRpb25zPzogTW9kYWxIZWxwZXJPcHRpb25zXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IG1vZGFsT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIHsgbnpNYXNrQ2xvc2FibGU6IGZhbHNlIH0sXHJcbiAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5tb2RhbE9wdGlvbnMsXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKGNvbXAsIHBhcmFtcywgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgeyBtb2RhbE9wdGlvbnMgfSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5omT5byA5a+56K+d5qGGXHJcbiAgICogQHBhcmFtIGNvbXAg57uE5Lu2XHJcbiAgICogQHBhcmFtIHBhcmFtcyDnu4Tku7blj4LmlbBcclxuICAgKiBAcGFyYW0gc2l6ZSDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmxnXHJcbiAgICogQHBhcmFtIG9wdGlvbnMg5a+56K+d5qGGIGBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlYCDlj4LmlbBcclxuICAgKlxyXG4gICAqIOekuuS+i++8mlxyXG4gIGBgYHRzXHJcbnRoaXMubW9kYWxIZWxwZXIub3BlbihGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xyXG4vLyDlr7nkuo7nu4Tku7bnmoTmiJDlip8m5YWz6Zet55qE5aSE55CG6K+05piOXHJcbi8vIOaIkOWKn1xyXG50aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XHJcbnRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xyXG4vLyDlhbPpl61cclxudGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcclxuYGBgXHJcbiAgICovXHJcbiAgb3BlbihcclxuICAgIGNvbXA6IGFueSxcclxuICAgIHBhcmFtcz86IGFueSxcclxuICAgIHNpemU6ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnJyB8IG51bWJlciA9ICdsZycsXHJcbiAgICBvcHRpb25zPzogTW9kYWxPcHRpb25zRm9yU2VydmljZSxcclxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKGNvbXAsIHBhcmFtcywge1xyXG4gICAgICBzaXplLFxyXG4gICAgICBtb2RhbE9wdGlvbnM6IG9wdGlvbnMsXHJcbiAgICAgIGV4YWN0OiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6Z2Z5oCB5qGG77yM54K55Ye76JKZ5bGC5LiN5YWB6K645YWz6ZetXHJcbiAgICogQHBhcmFtIGNvbXAg57uE5Lu2XHJcbiAgICogQHBhcmFtIHBhcmFtcyDnu4Tku7blj4LmlbBcclxuICAgKiBAcGFyYW0gc2l6ZSDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmxnXHJcbiAgICogQHBhcmFtIG9wdGlvbnMg5a+56K+d5qGGIGBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlYCDlj4LmlbBcclxuICAgKlxyXG4gICAqIOekuuS+i++8mlxyXG4gIGBgYHRzXHJcbnRoaXMubW9kYWxIZWxwZXIub3BlbihGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xyXG4vLyDlr7nkuo7nu4Tku7bnmoTmiJDlip8m5YWz6Zet55qE5aSE55CG6K+05piOXHJcbi8vIOaIkOWKn1xyXG50aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XHJcbnRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xyXG4vLyDlhbPpl61cclxudGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcclxuYGBgXHJcbiAgICovXHJcbiAgc3RhdGljKFxyXG4gICAgY29tcDogYW55LFxyXG4gICAgcGFyYW1zPzogYW55LFxyXG4gICAgc2l6ZTogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyID0gJ2xnJyxcclxuICAgIG9wdGlvbnM/OiBhbnksXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLm9wZW4oXHJcbiAgICAgIGNvbXAsXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgc2l6ZSxcclxuICAgICAgT2JqZWN0LmFzc2lnbihcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuek1hc2tDbG9zYWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19