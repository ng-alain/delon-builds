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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFeEMsT0FBTyxFQUFnQixjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDOzs7Ozs7QUFFNUMsd0NBU0M7Ozs7OztJQVBDLGtDQUErQzs7Ozs7SUFFL0MsMENBQTRCOzs7OztJQUU1QixtQ0FBZ0I7Ozs7O0lBRWhCLHlDQUFzQjs7Ozs7QUFPeEIsTUFBTSxPQUFPLFdBQVc7Ozs7SUFDdEIsWUFBb0IsR0FBbUI7UUFBbkIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7SUFBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQjNDLE1BQU0sQ0FBQyxJQUE4QyxFQUFFLE1BQWtCLEVBQUUsT0FBNEI7UUFDckcsT0FBTyxHQUFHLFNBQVMsQ0FDakI7WUFDRSxJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxJQUFJO1lBQ1gsV0FBVyxFQUFFLEtBQUs7U0FDbkIsRUFDRCxPQUFPLENBQ1IsQ0FBQztRQUNGLE9BQU8sSUFBSSxVQUFVOzs7O1FBQUMsQ0FBQyxRQUE2QixFQUFFLEVBQUU7a0JBQ2hELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsR0FBRyxtQkFBQSxPQUFPLEVBQXNCOztnQkFDckUsR0FBRyxHQUFHLEVBQUU7O2dCQUNSLEtBQUssR0FBRyxFQUFFO1lBQ2QsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7b0JBQzVCLEtBQUssR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDO2lCQUNyQjtxQkFBTTtvQkFDTCxHQUFHLEdBQUcsU0FBUyxJQUFJLEVBQUUsQ0FBQztpQkFDdkI7YUFDRjtZQUNELElBQUksV0FBVyxFQUFFO2dCQUNmLEdBQUcsSUFBSSxxQkFBcUIsQ0FBQzthQUM5QjtZQUNELElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxlQUFlLEVBQUU7Z0JBQ2hELEdBQUcsSUFBSSxJQUFJLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDMUMsT0FBTyxZQUFZLENBQUMsZUFBZSxDQUFDO2FBQ3JDOztrQkFDSyxjQUFjLEdBQWlCO2dCQUNuQyxlQUFlLEVBQUUsR0FBRztnQkFDcEIsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTO2dCQUNsQyxRQUFRLEVBQUUsSUFBSTtnQkFDZCxpQkFBaUIsRUFBRSxNQUFNO2FBQzFCOztrQkFDSyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLGlDQUFNLGNBQWMsR0FBSyxZQUFZLEVBQUc7O2tCQUNqRSxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtnQkFDNUQsSUFBSSxtQkFBQSxPQUFPLEVBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO29CQUMzQixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7d0JBQ2YsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDcEI7aUJBQ0Y7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEI7Z0JBQ0QsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwQixXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUIsQ0FBQyxFQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkQsWUFBWSxDQUFDLElBQThDLEVBQUUsTUFBa0IsRUFBRSxPQUE0Qjs7Y0FDckcsWUFBWSxtQkFDaEIsY0FBYyxFQUFFLEtBQUssSUFDbEIsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUNyQztRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxrQ0FBTyxPQUFPLEtBQUUsWUFBWSxJQUFHLENBQUM7SUFDakUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJELElBQUksQ0FDRixJQUE4QyxFQUM5QyxNQUFrQixFQUNsQixPQUFnRCxJQUFJLEVBQ3BELE9BQXNCO1FBRXRCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFO1lBQy9CLElBQUk7WUFDSixZQUFZLEVBQUUsT0FBTztZQUNyQixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlCRCxNQUFNLENBQ0osSUFBOEMsRUFDOUMsTUFBa0IsRUFDbEIsT0FBZ0QsSUFBSSxFQUNwRCxPQUFzQjtRQUV0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLGtCQUNqQyxjQUFjLEVBQUUsS0FBSyxJQUNsQixPQUFPLEVBQ1YsQ0FBQztJQUNMLENBQUM7OztZQWxKRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBakJYLGNBQWM7Ozs7Ozs7O0lBbUJ2QiwwQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE1vZGFsT3B0aW9ucywgTnpNb2RhbFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL21vZGFsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxIZWxwZXJPcHRpb25zIHtcbiAgLyoqIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yaYGxnYCAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyO1xuICAvKiog5a+56K+d5qGGIFtNb2RhbE9wdGlvbnNdKGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwtdHlwZXMudHMpIOWPguaVsCAqL1xuICBtb2RhbE9wdGlvbnM/OiBNb2RhbE9wdGlvbnM7XG4gIC8qKiDmmK/lkKbnsr7lh4bvvIjpu5jorqTvvJpgdHJ1ZWDvvInvvIzoi6Xov5Tlm57lgLzpnZ7nqbrlgLzvvIhgbnVsbGDmiJZgdW5kZWZpbmVkYO+8ieinhuS4uuaIkOWKn++8jOWQpuWImeinhuS4uumUmeivryAqL1xuICBleGFjdD86IGJvb2xlYW47XG4gIC8qKiDmmK/lkKbljIXoo7nmoIfnrb7pobXvvIzkv67lpI3mqKHmgIHljIXlkKvmoIfnrb7pl7Tot53pl67popggKi9cbiAgaW5jbHVkZVRhYnM/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIOWvueivneahhui+heWKqeexu1xuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE1vZGFsSGVscGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IE56TW9kYWxTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiDmnoTlu7rkuIDkuKrlr7nor53moYZcbiAgICpcbiAgICogQHBhcmFtIGNvbXAg57uE5Lu2XG4gICAqIEBwYXJhbSBwYXJhbXMg57uE5Lu25Y+C5pWwXG4gICAqIEBwYXJhbSBvcHRpb25zIOmineWkluWPguaVsFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB0aGlzLm1vZGFsSGVscGVyLmNyZWF0ZShGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuICAgKiAvLyDlr7nkuo7nu4Tku7bnmoTmiJDlip8m5YWz6Zet55qE5aSE55CG6K+05piOXG4gICAqIC8vIOaIkOWKn1xuICAgKiB0aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XG4gICAqIHRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xuICAgKiAvLyDlhbPpl61cbiAgICogdGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcbiAgICovXG4gIGNyZWF0ZShjb21wOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgVHlwZTxOelNhZmVBbnk+LCBwYXJhbXM/OiBOelNhZmVBbnksIG9wdGlvbnM/OiBNb2RhbEhlbHBlck9wdGlvbnMpOiBPYnNlcnZhYmxlPE56U2FmZUFueT4ge1xuICAgIG9wdGlvbnMgPSBkZWVwTWVyZ2UoXG4gICAgICB7XG4gICAgICAgIHNpemU6ICdsZycsXG4gICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICBpbmNsdWRlVGFiczogZmFsc2UsXG4gICAgICB9LFxuICAgICAgb3B0aW9ucyxcbiAgICApO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPE56U2FmZUFueT4pID0+IHtcbiAgICAgIGNvbnN0IHsgc2l6ZSwgaW5jbHVkZVRhYnMsIG1vZGFsT3B0aW9ucyB9ID0gb3B0aW9ucyBhcyBNb2RhbEhlbHBlck9wdGlvbnM7XG4gICAgICBsZXQgY2xzID0gJyc7XG4gICAgICBsZXQgd2lkdGggPSAnJztcbiAgICAgIGlmIChzaXplKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICB3aWR0aCA9IGAke3NpemV9cHhgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNscyA9IGBtb2RhbC0ke3NpemV9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGluY2x1ZGVUYWJzKSB7XG4gICAgICAgIGNscyArPSAnIG1vZGFsLWluY2x1ZGUtdGFicyc7XG4gICAgICB9XG4gICAgICBpZiAobW9kYWxPcHRpb25zICYmIG1vZGFsT3B0aW9ucy5ueldyYXBDbGFzc05hbWUpIHtcbiAgICAgICAgY2xzICs9IGAgJHttb2RhbE9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lfWA7XG4gICAgICAgIGRlbGV0ZSBtb2RhbE9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lO1xuICAgICAgfVxuICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE1vZGFsT3B0aW9ucyA9IHtcbiAgICAgICAgbnpXcmFwQ2xhc3NOYW1lOiBjbHMsXG4gICAgICAgIG56Q29udGVudDogY29tcCxcbiAgICAgICAgbnpXaWR0aDogd2lkdGggPyB3aWR0aCA6IHVuZGVmaW5lZCxcbiAgICAgICAgbnpGb290ZXI6IG51bGwsXG4gICAgICAgIG56Q29tcG9uZW50UGFyYW1zOiBwYXJhbXMsXG4gICAgICB9O1xuICAgICAgY29uc3Qgc3ViamVjdCA9IHRoaXMuc3J2LmNyZWF0ZSh7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5tb2RhbE9wdGlvbnMgfSk7XG4gICAgICBjb25zdCBhZnRlckNsb3NlJCA9IHN1YmplY3QuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zIS5leGFjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlmIChyZXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgYWZ0ZXJDbG9zZSQudW5zdWJzY3JpYmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOaehOW7uumdmeaAgeahhu+8jOeCueWHu+iSmeWxguS4jeWFgeiuuOWFs+mXrVxuICAgKlxuICAgKiBAcGFyYW0gY29tcCDnu4Tku7ZcbiAgICogQHBhcmFtIHBhcmFtcyDnu4Tku7blj4LmlbBcbiAgICogQHBhcmFtIG9wdGlvbnMg6aKd5aSW5Y+C5pWwXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHRoaXMubW9kYWxIZWxwZXIub3BlbihGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuICAgKiAvLyDlr7nkuo7nu4Tku7bnmoTmiJDlip8m5YWz6Zet55qE5aSE55CG6K+05piOXG4gICAqIC8vIOaIkOWKn1xuICAgKiB0aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XG4gICAqIHRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xuICAgKiAvLyDlhbPpl61cbiAgICogdGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcbiAgICovXG4gIGNyZWF0ZVN0YXRpYyhjb21wOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgVHlwZTxOelNhZmVBbnk+LCBwYXJhbXM/OiBOelNhZmVBbnksIG9wdGlvbnM/OiBNb2RhbEhlbHBlck9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IG1vZGFsT3B0aW9ucyA9IHtcbiAgICAgIG56TWFza0Nsb3NhYmxlOiBmYWxzZSxcbiAgICAgIC4uLihvcHRpb25zICYmIG9wdGlvbnMubW9kYWxPcHRpb25zKSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZShjb21wLCBwYXJhbXMsIHsgLi4ub3B0aW9ucywgbW9kYWxPcHRpb25zIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOaJk+W8gOWvueivneahhlxuICAgKiBAcGFyYW0gY29tcCDnu4Tku7ZcbiAgICogQHBhcmFtIHBhcmFtcyDnu4Tku7blj4LmlbBcbiAgICogQHBhcmFtIHNpemUg5aSn5bCP77yb5L6L5aaC77yabGfjgIE2MDDvvIzpu5jorqTvvJpsZ1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB0aGlzLm1vZGFsSGVscGVyLm9wZW4oRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbiAgICogLy8g5a+55LqO57uE5Lu255qE5oiQ5YqfJuWFs+mXreeahOWkhOeQhuivtOaYjlxuICAgKiAvLyDmiJDlip9cbiAgICogdGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xuICAgKiB0aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcbiAgICogLy8g5YWz6ZetXG4gICAqIHRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XG4gICAqL1xuICBvcGVuKFxuICAgIGNvbXA6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBUeXBlPE56U2FmZUFueT4sXG4gICAgcGFyYW1zPzogTnpTYWZlQW55LFxuICAgIHNpemU6ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnJyB8IG51bWJlciA9ICdsZycsXG4gICAgb3B0aW9ucz86IE1vZGFsT3B0aW9ucyxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoY29tcCwgcGFyYW1zLCB7XG4gICAgICBzaXplLFxuICAgICAgbW9kYWxPcHRpb25zOiBvcHRpb25zLFxuICAgICAgZXhhY3Q6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOmdmeaAgeahhu+8jOeCueWHu+iSmeWxguS4jeWFgeiuuOWFs+mXrVxuICAgKiBAcGFyYW0gY29tcCDnu4Tku7ZcbiAgICogQHBhcmFtIHBhcmFtcyDnu4Tku7blj4LmlbBcbiAgICogQHBhcmFtIHNpemUg5aSn5bCP77yb5L6L5aaC77yabGfjgIE2MDDvvIzpu5jorqTvvJpsZ1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB0aGlzLm1vZGFsSGVscGVyLm9wZW4oRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbiAgICogLy8g5a+55LqO57uE5Lu255qE5oiQ5YqfJuWFs+mXreeahOWkhOeQhuivtOaYjlxuICAgKiAvLyDmiJDlip9cbiAgICogdGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xuICAgKiB0aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcbiAgICogLy8g5YWz6ZetXG4gICAqIHRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XG4gICAqL1xuICBzdGF0aWMoXG4gICAgY29tcDogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IFR5cGU8TnpTYWZlQW55PixcbiAgICBwYXJhbXM/OiBOelNhZmVBbnksXG4gICAgc2l6ZTogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyID0gJ2xnJyxcbiAgICBvcHRpb25zPzogTW9kYWxPcHRpb25zLFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLm9wZW4oY29tcCwgcGFyYW1zLCBzaXplLCB7XG4gICAgICBuek1hc2tDbG9zYWJsZTogZmFsc2UsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0pO1xuICB9XG59XG4iXX0=