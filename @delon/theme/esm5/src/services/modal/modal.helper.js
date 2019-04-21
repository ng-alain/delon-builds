/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd";
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
var ModalHelper = /** @class */ (function () {
    function ModalHelper(srv) {
        this.srv = srv;
        this.zIndex = 500;
    }
    /**
     * 构建一个对话框
     *
     * @param comp 组件
     * @param params 组件参数
     * @param options 额外参数
     *
     * 示例：
    ```ts
  this.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());
  // 对于组件的成功&关闭的处理说明
  // 成功
  this.NzModalRef.close(data);
  this.NzModalRef.close();
  // 关闭
  this.NzModalRef.destroy();
  ```
     */
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
    ModalHelper.prototype.create = /**
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
    function (comp, params, options) {
        var _this = this;
        options = tslib_1.__assign({ size: 'lg', exact: true, includeTabs: false }, options);
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var cls = '';
            /** @type {?} */
            var width = '';
            if ((/** @type {?} */ (options)).size) {
                if (typeof (/** @type {?} */ (options)).size === 'number') {
                    width = (/** @type {?} */ (options)).size + "px";
                }
                else {
                    cls = "modal-" + (/** @type {?} */ (options)).size;
                }
            }
            if ((/** @type {?} */ (options)).includeTabs) {
                cls += ' modal-include-tabs';
            }
            /** @type {?} */
            var defaultOptions = {
                nzWrapClassName: cls,
                nzContent: comp,
                nzWidth: width ? width : undefined,
                nzFooter: null,
                nzComponentParams: params,
                nzZIndex: ++_this.zIndex,
            };
            /** @type {?} */
            var subject = _this.srv.create(tslib_1.__assign({}, defaultOptions, (/** @type {?} */ (options)).modalOptions));
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
     * 构建静态框，点击蒙层不允许关闭
     *
     * @param comp 组件
     * @param params 组件参数
     * @param options 额外参数
     *
     * 示例：
    ```ts
  this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
  // 对于组件的成功&关闭的处理说明
  // 成功
  this.NzModalRef.close(data);
  this.NzModalRef.close();
  // 关闭
  this.NzModalRef.destroy();
  ```
     */
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
    ModalHelper.prototype.createStatic = /**
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
    function (comp, params, options) {
        /** @type {?} */
        var modalOptions = tslib_1.__assign({ nzMaskClosable: false }, (options && options.modalOptions));
        return this.create(comp, params, tslib_1.__assign({}, options, { modalOptions: modalOptions }));
    };
    /**
     * 打开对话框
     * @param comp 组件
     * @param params 组件参数
     * @param size 大小；例如：lg、600，默认：lg
     * @param options 对话框 `ModalOptionsForService` 参数
     *
     * 示例：
    ```ts
  this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
  // 对于组件的成功&关闭的处理说明
  // 成功
  this.NzModalRef.close(data);
  this.NzModalRef.close();
  // 关闭
  this.NzModalRef.destroy();
  ```
     */
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
    ModalHelper.prototype.open = /**
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
    function (comp, params, size, options) {
        if (size === void 0) { size = 'lg'; }
        return this.create(comp, params, {
            size: size,
            modalOptions: options,
            exact: false,
        });
    };
    /**
     * 静态框，点击蒙层不允许关闭
     * @param comp 组件
     * @param params 组件参数
     * @param size 大小；例如：lg、600，默认：lg
     * @param options 对话框 `ModalOptionsForService` 参数
     *
     * 示例：
    ```ts
  this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
  // 对于组件的成功&关闭的处理说明
  // 成功
  this.NzModalRef.close(data);
  this.NzModalRef.close();
  // 关闭
  this.NzModalRef.destroy();
  ```
     */
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
    ModalHelper.prototype.static = /**
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
    function (comp, params, size, options) {
        if (size === void 0) { size = 'lg'; }
        return this.open(comp, params, size, tslib_1.__assign({ nzMaskClosable: false }, options));
    };
    ModalHelper.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ModalHelper.ctorParameters = function () { return [
        { type: NzModalService }
    ]; };
    /** @nocollapse */ ModalHelper.ngInjectableDef = i0.defineInjectable({ factory: function ModalHelper_Factory() { return new ModalHelper(i0.inject(i1.NzModalService)); }, token: ModalHelper, providedIn: "root" });
    return ModalHelper;
}());
export { ModalHelper };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalHelper.prototype.zIndex;
    /**
     * @type {?}
     * @private
     */
    ModalHelper.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL3RoZW1lLyIsInNvdXJjZXMiOlsic3JjL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUEwQixjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7Ozs7O0FBRTVDLHdDQVNDOzs7Ozs7SUFQQyxrQ0FBK0M7Ozs7O0lBRS9DLDBDQUFzQzs7Ozs7SUFFdEMsbUNBQWdCOzs7OztJQUVoQix5Q0FBc0I7Ozs7O0FBTXhCO0lBSUUscUJBQW9CLEdBQW1CO1FBQW5CLFFBQUcsR0FBSCxHQUFHLENBQWdCO1FBRi9CLFdBQU0sR0FBRyxHQUFHLENBQUM7SUFFc0IsQ0FBQztJQUU1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FpQkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ0gsNEJBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTixVQUFPLElBQVMsRUFBRSxNQUFZLEVBQUUsT0FBNEI7UUFBNUQsaUJBMENDO1FBekNDLE9BQU8sc0JBQ0wsSUFBSSxFQUFFLElBQUksRUFDVixLQUFLLEVBQUUsSUFBSSxFQUNYLFdBQVcsRUFBRSxLQUFLLElBQUssT0FBTyxDQUMvQixDQUFDO1FBQ0YsT0FBTyxJQUFJLFVBQVU7Ozs7UUFBQyxVQUFDLFFBQXVCOztnQkFDeEMsR0FBRyxHQUFHLEVBQUU7O2dCQUNSLEtBQUssR0FBRyxFQUFFO1lBQ2QsSUFBSSxtQkFBQSxPQUFPLEVBQUMsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLElBQUksT0FBTyxtQkFBQSxPQUFPLEVBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO29CQUNyQyxLQUFLLEdBQU0sbUJBQUEsT0FBTyxFQUFDLENBQUMsSUFBSSxPQUFJLENB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YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxPcHRpb25zRm9yU2VydmljZSwgTnpNb2RhbFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxIZWxwZXJPcHRpb25zIHtcbiAgLyoqIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yaYGxnYCAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyO1xuICAvKiog5a+56K+d5qGGIFtNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlXShodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9jb21wb25lbnRzL21vZGFsL256LW1vZGFsLnR5cGUudHMpIOWPguaVsCAqL1xuICBtb2RhbE9wdGlvbnM/OiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlO1xuICAvKiog5piv5ZCm57K+5YeG77yI6buY6K6k77yaYHRydWVg77yJ77yM6Iul6L+U5Zue5YC86Z2e56m65YC877yIYG51bGxg5oiWYHVuZGVmaW5lZGDvvInop4bkuLrmiJDlip/vvIzlkKbliJnop4bkuLrplJnor68gKi9cbiAgZXhhY3Q/OiBib29sZWFuO1xuICAvKiog5piv5ZCm5YyF6KO55qCH562+6aG177yM5L+u5aSN5qih5oCB5YyF5ZCr5qCH562+6Ze06Led6Zeu6aKYICovXG4gIGluY2x1ZGVUYWJzPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiDlr7nor53moYbovoXliqnnsbtcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBNb2RhbEhlbHBlciB7XG4gIHByaXZhdGUgekluZGV4ID0gNTAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBOek1vZGFsU2VydmljZSkgeyB9XG5cbiAgLyoqXG4gICAqIOaehOW7uuS4gOS4quWvueivneahhlxuICAgKlxuICAgKiBAcGFyYW0gY29tcCDnu4Tku7ZcbiAgICogQHBhcmFtIHBhcmFtcyDnu4Tku7blj4LmlbBcbiAgICogQHBhcmFtIG9wdGlvbnMg6aKd5aSW5Y+C5pWwXG4gICAqXG4gICAqIOekuuS+i++8mlxuICBgYGB0c1xudGhpcy5tb2RhbEhlbHBlci5jcmVhdGUoRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbi8vIOWvueS6jue7hOS7tueahOaIkOWKnyblhbPpl63nmoTlpITnkIbor7TmmI5cbi8vIOaIkOWKn1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XG4vLyDlhbPpl61cbnRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XG5gYGBcbiAgICovXG4gIGNyZWF0ZShjb21wOiBhbnksIHBhcmFtcz86IGFueSwgb3B0aW9ucz86IE1vZGFsSGVscGVyT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIHNpemU6ICdsZycsXG4gICAgICBleGFjdDogdHJ1ZSxcbiAgICAgIGluY2x1ZGVUYWJzOiBmYWxzZSwgLi4ub3B0aW9ucyxcbiAgICB9O1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcbiAgICAgIGxldCBjbHMgPSAnJztcbiAgICAgIGxldCB3aWR0aCA9ICcnO1xuICAgICAgaWYgKG9wdGlvbnMhLnNpemUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zIS5zaXplID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHdpZHRoID0gYCR7b3B0aW9ucyEuc2l6ZX1weGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xzID0gYG1vZGFsLSR7b3B0aW9ucyEuc2l6ZX1gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9ucyEuaW5jbHVkZVRhYnMpIHtcbiAgICAgICAgY2xzICs9ICcgbW9kYWwtaW5jbHVkZS10YWJzJztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zOiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlID0ge1xuICAgICAgICBueldyYXBDbGFzc05hbWU6IGNscyxcbiAgICAgICAgbnpDb250ZW50OiBjb21wLFxuICAgICAgICBueldpZHRoOiB3aWR0aCA/IHdpZHRoIDogdW5kZWZpbmVkLFxuICAgICAgICBuekZvb3RlcjogbnVsbCxcbiAgICAgICAgbnpDb21wb25lbnRQYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgbnpaSW5kZXg6ICsrdGhpcy56SW5kZXgsXG4gICAgICB9O1xuICAgICAgY29uc3Qgc3ViamVjdCA9IHRoaXMuc3J2LmNyZWF0ZShcbiAgICAgICAgeyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyEubW9kYWxPcHRpb25zIH0sXG4gICAgICApO1xuICAgICAgY29uc3QgYWZ0ZXJDbG9zZSQgPSBzdWJqZWN0LmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAob3B0aW9ucyEuZXhhY3QgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAocmVzICE9IG51bGwpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xuICAgICAgICB9XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIGFmdGVyQ2xvc2UkLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmnoTlu7rpnZnmgIHmoYbvvIzngrnlh7vokpnlsYLkuI3lhYHorrjlhbPpl61cbiAgICpcbiAgICogQHBhcmFtIGNvbXAg57uE5Lu2XG4gICAqIEBwYXJhbSBwYXJhbXMg57uE5Lu25Y+C5pWwXG4gICAqIEBwYXJhbSBvcHRpb25zIOmineWkluWPguaVsFxuICAgKlxuICAgKiDnpLrkvovvvJpcbiAgYGBgdHNcbnRoaXMubW9kYWxIZWxwZXIub3BlbihGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuLy8g5a+55LqO57uE5Lu255qE5oiQ5YqfJuWFs+mXreeahOWkhOeQhuivtOaYjlxuLy8g5oiQ5YqfXG50aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XG50aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcbi8vIOWFs+mXrVxudGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcbmBgYFxuICAgKi9cbiAgY3JlYXRlU3RhdGljKGNvbXA6IGFueSwgcGFyYW1zPzogYW55LCBvcHRpb25zPzogTW9kYWxIZWxwZXJPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBtb2RhbE9wdGlvbnMgPSB7XG4gICAgICBuek1hc2tDbG9zYWJsZTogZmFsc2UsXG4gICAgICAuLi4ob3B0aW9ucyAmJiBvcHRpb25zLm1vZGFsT3B0aW9ucyksXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoY29tcCwgcGFyYW1zLCB7IC4uLm9wdGlvbnMsIG1vZGFsT3B0aW9ucyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmiZPlvIDlr7nor53moYZcbiAgICogQHBhcmFtIGNvbXAg57uE5Lu2XG4gICAqIEBwYXJhbSBwYXJhbXMg57uE5Lu25Y+C5pWwXG4gICAqIEBwYXJhbSBzaXplIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yabGdcbiAgICogQHBhcmFtIG9wdGlvbnMg5a+56K+d5qGGIGBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlYCDlj4LmlbBcbiAgICpcbiAgICog56S65L6L77yaXG4gIGBgYHRzXG50aGlzLm1vZGFsSGVscGVyLm9wZW4oRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbi8vIOWvueS6jue7hOS7tueahOaIkOWKnyblhbPpl63nmoTlpITnkIbor7TmmI5cbi8vIOaIkOWKn1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xudGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XG4vLyDlhbPpl61cbnRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XG5gYGBcbiAgICovXG4gIG9wZW4oXG4gICAgY29tcDogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBzaXplOiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJycgfCBudW1iZXIgPSAnbGcnLFxuICAgIG9wdGlvbnM/OiBNb2RhbE9wdGlvbnNGb3JTZXJ2aWNlLFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZShjb21wLCBwYXJhbXMsIHtcbiAgICAgIHNpemUsXG4gICAgICBtb2RhbE9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICBleGFjdDogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog6Z2Z5oCB5qGG77yM54K55Ye76JKZ5bGC5LiN5YWB6K645YWz6ZetXG4gICAqIEBwYXJhbSBjb21wIOe7hOS7tlxuICAgKiBAcGFyYW0gcGFyYW1zIOe7hOS7tuWPguaVsFxuICAgKiBAcGFyYW0gc2l6ZSDlpKflsI/vvJvkvovlpoLvvJpsZ+OAgTYwMO+8jOm7mOiupO+8mmxnXG4gICAqIEBwYXJhbSBvcHRpb25zIOWvueivneahhiBgTW9kYWxPcHRpb25zRm9yU2VydmljZWAg5Y+C5pWwXG4gICAqXG4gICAqIOekuuS+i++8mlxuICBgYGB0c1xudGhpcy5tb2RhbEhlbHBlci5vcGVuKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4vLyDlr7nkuo7nu4Tku7bnmoTmiJDlip8m5YWz6Zet55qE5aSE55CG6K+05piOXG4vLyDmiJDlip9cbnRoaXMuTnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcbnRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xuLy8g5YWz6ZetXG50aGlzLk56TW9kYWxSZWYuZGVzdHJveSgpO1xuYGBgXG4gICAqL1xuICBzdGF0aWMoXG4gICAgY29tcDogYW55LFxuICAgIHBhcmFtcz86IGFueSxcbiAgICBzaXplOiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJycgfCBudW1iZXIgPSAnbGcnLFxuICAgIG9wdGlvbnM/OiBhbnksXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMub3BlbihcbiAgICAgIGNvbXAsXG4gICAgICBwYXJhbXMsXG4gICAgICBzaXplLFxuICAgICAge1xuICAgICAgICBuek1hc2tDbG9zYWJsZTogZmFsc2UsXG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICB9LFxuICAgICk7XG4gIH1cbn1cbiJdfQ==