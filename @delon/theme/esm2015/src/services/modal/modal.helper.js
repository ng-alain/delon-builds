import { Injectable } from '@angular/core';
import { deepMerge } from '@delon/util/other';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/modal";
/**
 * 对话框辅助类
 */
export class ModalHelper {
    constructor(srv) {
        this.srv = srv;
    }
    /**
     * 构建一个对话框
     *
     * @param comp 组件
     * @param params 组件参数
     * @param options 额外参数
     *
     * @example
     * this.modalHelper.create(FormEditComponent, { i }).subscribe(res => this.load());
     * // 对于组件的成功&关闭的处理说明
     * // 成功
     * this.NzModalRef.close(data);
     * this.NzModalRef.close();
     * // 关闭
     * this.NzModalRef.destroy();
     */
    create(comp, params, options) {
        options = deepMerge({
            size: 'lg',
            exact: true,
            includeTabs: false,
        }, options);
        return new Observable((observer) => {
            const { size, includeTabs, modalOptions } = options;
            let cls = '';
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
            const defaultOptions = {
                nzWrapClassName: cls,
                nzContent: comp,
                nzWidth: width ? width : undefined,
                nzFooter: null,
                nzComponentParams: params,
            };
            const subject = this.srv.create(Object.assign(Object.assign({}, defaultOptions), modalOptions));
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
     * @param comp 组件
     * @param params 组件参数
     * @param options 额外参数
     *
     * @example
     * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
     * // 对于组件的成功&关闭的处理说明
     * // 成功
     * this.NzModalRef.close(data);
     * this.NzModalRef.close();
     * // 关闭
     * this.NzModalRef.destroy();
     */
    createStatic(comp, params, options) {
        const modalOptions = Object.assign({ nzMaskClosable: false }, (options && options.modalOptions));
        return this.create(comp, params, Object.assign(Object.assign({}, options), { modalOptions }));
    }
    /**
     * @deprecated Will be removed in 12.0.0, Pls used `create` instead
     *
     * 打开对话框
     *
     * @example
     * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
     * // 对于组件的成功&关闭的处理说明
     * // 成功
     * this.NzModalRef.close(data);
     * this.NzModalRef.close();
     * // 关闭
     * this.NzModalRef.destroy();
     */
    open(comp, params, size = 'lg', options) {
        return this.create(comp, params, {
            size,
            modalOptions: options,
            exact: false,
        });
    }
    /**
     * @deprecated Will be removed in 12.0.0, Pls used `createStatic` instead
     *
     * 静态框，点击蒙层不允许关闭
     *
     * @example
     * this.modalHelper.open(FormEditComponent, { i }).subscribe(res => this.load());
     * // 对于组件的成功&关闭的处理说明
     * // 成功
     * this.NzModalRef.close(data);
     * this.NzModalRef.close();
     * // 关闭
     * this.NzModalRef.destroy();
     */
    static(comp, params, size = 'lg', options) {
        return this.open(comp, params, size, Object.assign({ nzMaskClosable: false }, options));
    }
}
/** @nocollapse */ ModalHelper.ɵfac = function ModalHelper_Factory(t) { return new (t || ModalHelper)(i0.ɵɵinject(i1.NzModalService)); };
/** @nocollapse */ ModalHelper.ɵprov = i0.ɵɵdefineInjectable({ token: ModalHelper, factory: ModalHelper.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalHelper, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.NzModalService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFOUMsT0FBTyxFQUFnQixjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDOzs7QUFhNUM7O0dBRUc7QUFFSCxNQUFNLE9BQU8sV0FBVztJQUN0QixZQUFvQixHQUFtQjtRQUFuQixRQUFHLEdBQUgsR0FBRyxDQUFnQjtJQUFHLENBQUM7SUFFM0M7Ozs7Ozs7Ozs7Ozs7OztPQWVHO0lBQ0gsTUFBTSxDQUFDLElBQThDLEVBQUUsTUFBa0IsRUFBRSxPQUE0QjtRQUNyRyxPQUFPLEdBQUcsU0FBUyxDQUNqQjtZQUNFLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsS0FBSztTQUNuQixFQUNELE9BQU8sQ0FDUixDQUFDO1FBQ0YsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLFFBQTZCLEVBQUUsRUFBRTtZQUN0RCxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsR0FBRyxPQUE2QixDQUFDO1lBQzFFLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNiLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO29CQUM1QixLQUFLLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQztpQkFDckI7cUJBQU07b0JBQ0wsR0FBRyxHQUFHLFNBQVMsSUFBSSxFQUFFLENBQUM7aUJBQ3ZCO2FBQ0Y7WUFDRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixHQUFHLElBQUkscUJBQXFCLENBQUM7YUFDOUI7WUFDRCxJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsZUFBZSxFQUFFO2dCQUNoRCxHQUFHLElBQUksSUFBSSxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQzFDLE9BQU8sWUFBWSxDQUFDLGVBQWUsQ0FBQzthQUNyQztZQUNELE1BQU0sY0FBYyxHQUFpQjtnQkFDbkMsZUFBZSxFQUFFLEdBQUc7Z0JBQ3BCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUztnQkFDbEMsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsaUJBQWlCLEVBQUUsTUFBTTthQUMxQixDQUFDO1lBQ0YsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLGlDQUFNLGNBQWMsR0FBSyxZQUFZLEVBQUcsQ0FBQztZQUN4RSxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO2dCQUM1RCxJQUFJLE9BQVEsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO29CQUMzQixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7d0JBQ2YsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDcEI7aUJBQ0Y7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEI7Z0JBQ0QsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwQixXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7O09BZUc7SUFDSCxZQUFZLENBQUMsSUFBOEMsRUFBRSxNQUFrQixFQUFFLE9BQTRCO1FBQzNHLE1BQU0sWUFBWSxtQkFDaEIsY0FBYyxFQUFFLEtBQUssSUFDbEIsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUNyQyxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLGtDQUFPLE9BQU8sS0FBRSxZQUFZLElBQUcsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNILElBQUksQ0FDRixJQUE4QyxFQUM5QyxNQUFrQixFQUNsQixPQUFnRCxJQUFJLEVBQ3BELE9BQXNCO1FBRXRCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFO1lBQy9CLElBQUk7WUFDSixZQUFZLEVBQUUsT0FBTztZQUNyQixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7OztPQWFHO0lBQ0gsTUFBTSxDQUNKLElBQThDLEVBQzlDLE1BQWtCLEVBQ2xCLE9BQWdELElBQUksRUFDcEQsT0FBc0I7UUFFdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxrQkFDakMsY0FBYyxFQUFFLEtBQUssSUFDbEIsT0FBTyxFQUNWLENBQUM7SUFDTCxDQUFDOzt5RkEvSVUsV0FBVztzRUFBWCxXQUFXLFdBQVgsV0FBVyxtQkFERSxNQUFNO3VGQUNuQixXQUFXO2NBRHZCLFVBQVU7ZUFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE1vZGFsT3B0aW9ucywgTnpNb2RhbFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL21vZGFsJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxIZWxwZXJPcHRpb25zIHtcbiAgLyoqIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yaYGxnYCAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyO1xuICAvKiog5a+56K+d5qGGIFtNb2RhbE9wdGlvbnNdKGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwtdHlwZXMudHMpIOWPguaVsCAqL1xuICBtb2RhbE9wdGlvbnM/OiBNb2RhbE9wdGlvbnM7XG4gIC8qKiDmmK/lkKbnsr7lh4bvvIjpu5jorqTvvJpgdHJ1ZWDvvInvvIzoi6Xov5Tlm57lgLzpnZ7nqbrlgLzvvIhgbnVsbGDmiJZgdW5kZWZpbmVkYO+8ieinhuS4uuaIkOWKn++8jOWQpuWImeinhuS4uumUmeivryAqL1xuICBleGFjdD86IGJvb2xlYW47XG4gIC8qKiDmmK/lkKbljIXoo7nmoIfnrb7pobXvvIzkv67lpI3mqKHmgIHljIXlkKvmoIfnrb7pl7Tot53pl67popggKi9cbiAgaW5jbHVkZVRhYnM/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIOWvueivneahhui+heWKqeexu1xuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE1vZGFsSGVscGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IE56TW9kYWxTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiDmnoTlu7rkuIDkuKrlr7nor53moYZcbiAgICpcbiAgICogQHBhcmFtIGNvbXAg57uE5Lu2XG4gICAqIEBwYXJhbSBwYXJhbXMg57uE5Lu25Y+C5pWwXG4gICAqIEBwYXJhbSBvcHRpb25zIOmineWkluWPguaVsFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB0aGlzLm1vZGFsSGVscGVyLmNyZWF0ZShGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuICAgKiAvLyDlr7nkuo7nu4Tku7bnmoTmiJDlip8m5YWz6Zet55qE5aSE55CG6K+05piOXG4gICAqIC8vIOaIkOWKn1xuICAgKiB0aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XG4gICAqIHRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xuICAgKiAvLyDlhbPpl61cbiAgICogdGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcbiAgICovXG4gIGNyZWF0ZShjb21wOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgVHlwZTxOelNhZmVBbnk+LCBwYXJhbXM/OiBOelNhZmVBbnksIG9wdGlvbnM/OiBNb2RhbEhlbHBlck9wdGlvbnMpOiBPYnNlcnZhYmxlPE56U2FmZUFueT4ge1xuICAgIG9wdGlvbnMgPSBkZWVwTWVyZ2UoXG4gICAgICB7XG4gICAgICAgIHNpemU6ICdsZycsXG4gICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICBpbmNsdWRlVGFiczogZmFsc2UsXG4gICAgICB9LFxuICAgICAgb3B0aW9ucyxcbiAgICApO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPE56U2FmZUFueT4pID0+IHtcbiAgICAgIGNvbnN0IHsgc2l6ZSwgaW5jbHVkZVRhYnMsIG1vZGFsT3B0aW9ucyB9ID0gb3B0aW9ucyBhcyBNb2RhbEhlbHBlck9wdGlvbnM7XG4gICAgICBsZXQgY2xzID0gJyc7XG4gICAgICBsZXQgd2lkdGggPSAnJztcbiAgICAgIGlmIChzaXplKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICB3aWR0aCA9IGAke3NpemV9cHhgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNscyA9IGBtb2RhbC0ke3NpemV9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGluY2x1ZGVUYWJzKSB7XG4gICAgICAgIGNscyArPSAnIG1vZGFsLWluY2x1ZGUtdGFicyc7XG4gICAgICB9XG4gICAgICBpZiAobW9kYWxPcHRpb25zICYmIG1vZGFsT3B0aW9ucy5ueldyYXBDbGFzc05hbWUpIHtcbiAgICAgICAgY2xzICs9IGAgJHttb2RhbE9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lfWA7XG4gICAgICAgIGRlbGV0ZSBtb2RhbE9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lO1xuICAgICAgfVxuICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE1vZGFsT3B0aW9ucyA9IHtcbiAgICAgICAgbnpXcmFwQ2xhc3NOYW1lOiBjbHMsXG4gICAgICAgIG56Q29udGVudDogY29tcCxcbiAgICAgICAgbnpXaWR0aDogd2lkdGggPyB3aWR0aCA6IHVuZGVmaW5lZCxcbiAgICAgICAgbnpGb290ZXI6IG51bGwsXG4gICAgICAgIG56Q29tcG9uZW50UGFyYW1zOiBwYXJhbXMsXG4gICAgICB9O1xuICAgICAgY29uc3Qgc3ViamVjdCA9IHRoaXMuc3J2LmNyZWF0ZSh7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5tb2RhbE9wdGlvbnMgfSk7XG4gICAgICBjb25zdCBhZnRlckNsb3NlJCA9IHN1YmplY3QuYWZ0ZXJDbG9zZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zIS5leGFjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlmIChyZXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgYWZ0ZXJDbG9zZSQudW5zdWJzY3JpYmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOaehOW7uumdmeaAgeahhu+8jOeCueWHu+iSmeWxguS4jeWFgeiuuOWFs+mXrVxuICAgKlxuICAgKiBAcGFyYW0gY29tcCDnu4Tku7ZcbiAgICogQHBhcmFtIHBhcmFtcyDnu4Tku7blj4LmlbBcbiAgICogQHBhcmFtIG9wdGlvbnMg6aKd5aSW5Y+C5pWwXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHRoaXMubW9kYWxIZWxwZXIub3BlbihGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuICAgKiAvLyDlr7nkuo7nu4Tku7bnmoTmiJDlip8m5YWz6Zet55qE5aSE55CG6K+05piOXG4gICAqIC8vIOaIkOWKn1xuICAgKiB0aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XG4gICAqIHRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xuICAgKiAvLyDlhbPpl61cbiAgICogdGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcbiAgICovXG4gIGNyZWF0ZVN0YXRpYyhjb21wOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgVHlwZTxOelNhZmVBbnk+LCBwYXJhbXM/OiBOelNhZmVBbnksIG9wdGlvbnM/OiBNb2RhbEhlbHBlck9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IG1vZGFsT3B0aW9ucyA9IHtcbiAgICAgIG56TWFza0Nsb3NhYmxlOiBmYWxzZSxcbiAgICAgIC4uLihvcHRpb25zICYmIG9wdGlvbnMubW9kYWxPcHRpb25zKSxcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZShjb21wLCBwYXJhbXMsIHsgLi4ub3B0aW9ucywgbW9kYWxPcHRpb25zIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFdpbGwgYmUgcmVtb3ZlZCBpbiAxMi4wLjAsIFBscyB1c2VkIGBjcmVhdGVgIGluc3RlYWRcbiAgICpcbiAgICog5omT5byA5a+56K+d5qGGXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHRoaXMubW9kYWxIZWxwZXIub3BlbihGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuICAgKiAvLyDlr7nkuo7nu4Tku7bnmoTmiJDlip8m5YWz6Zet55qE5aSE55CG6K+05piOXG4gICAqIC8vIOaIkOWKn1xuICAgKiB0aGlzLk56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XG4gICAqIHRoaXMuTnpNb2RhbFJlZi5jbG9zZSgpO1xuICAgKiAvLyDlhbPpl61cbiAgICogdGhpcy5Oek1vZGFsUmVmLmRlc3Ryb3koKTtcbiAgICovXG4gIG9wZW4oXG4gICAgY29tcDogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IFR5cGU8TnpTYWZlQW55PixcbiAgICBwYXJhbXM/OiBOelNhZmVBbnksXG4gICAgc2l6ZTogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyID0gJ2xnJyxcbiAgICBvcHRpb25zPzogTW9kYWxPcHRpb25zLFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZShjb21wLCBwYXJhbXMsIHtcbiAgICAgIHNpemUsXG4gICAgICBtb2RhbE9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICBleGFjdDogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgV2lsbCBiZSByZW1vdmVkIGluIDEyLjAuMCwgUGxzIHVzZWQgYGNyZWF0ZVN0YXRpY2AgaW5zdGVhZFxuICAgKlxuICAgKiDpnZnmgIHmoYbvvIzngrnlh7vokpnlsYLkuI3lhYHorrjlhbPpl61cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogdGhpcy5tb2RhbEhlbHBlci5vcGVuKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4gICAqIC8vIOWvueS6jue7hOS7tueahOaIkOWKnyblhbPpl63nmoTlpITnkIbor7TmmI5cbiAgICogLy8g5oiQ5YqfXG4gICAqIHRoaXMuTnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcbiAgICogdGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XG4gICAqIC8vIOWFs+mXrVxuICAgKiB0aGlzLk56TW9kYWxSZWYuZGVzdHJveSgpO1xuICAgKi9cbiAgc3RhdGljKFxuICAgIGNvbXA6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBUeXBlPE56U2FmZUFueT4sXG4gICAgcGFyYW1zPzogTnpTYWZlQW55LFxuICAgIHNpemU6ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAnJyB8IG51bWJlciA9ICdsZycsXG4gICAgb3B0aW9ucz86IE1vZGFsT3B0aW9ucyxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5vcGVuKGNvbXAsIHBhcmFtcywgc2l6ZSwge1xuICAgICAgbnpNYXNrQ2xvc2FibGU6IGZhbHNlLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9KTtcbiAgfVxufVxuIl19