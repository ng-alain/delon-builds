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
/** @nocollapse */ ModalHelper.ɵprov = i0.ɵɵdefineInjectable({ factory: function ModalHelper_Factory() { return new ModalHelper(i0.ɵɵinject(i1.NzModalService)); }, token: ModalHelper, providedIn: "root" });
ModalHelper.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ModalHelper.ctorParameters = () => [
    { type: NzModalService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFOUMsT0FBTyxFQUFnQixjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDOzs7QUFhNUM7O0dBRUc7QUFFSCxNQUFNLE9BQU8sV0FBVztJQUN0QixZQUFvQixHQUFtQjtRQUFuQixRQUFHLEdBQUgsR0FBRyxDQUFnQjtJQUFHLENBQUM7SUFFM0M7Ozs7Ozs7Ozs7Ozs7OztPQWVHO0lBQ0gsTUFBTSxDQUFDLElBQThDLEVBQUUsTUFBa0IsRUFBRSxPQUE0QjtRQUNyRyxPQUFPLEdBQUcsU0FBUyxDQUNqQjtZQUNFLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLElBQUk7WUFDWCxXQUFXLEVBQUUsS0FBSztTQUNuQixFQUNELE9BQU8sQ0FDUixDQUFDO1FBQ0YsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLFFBQTZCLEVBQUUsRUFBRTtZQUN0RCxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsR0FBRyxPQUE2QixDQUFDO1lBQzFFLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNiLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO29CQUM1QixLQUFLLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQztpQkFDckI7cUJBQU07b0JBQ0wsR0FBRyxHQUFHLFNBQVMsSUFBSSxFQUFFLENBQUM7aUJBQ3ZCO2FBQ0Y7WUFDRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixHQUFHLElBQUkscUJBQXFCLENBQUM7YUFDOUI7WUFDRCxJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsZUFBZSxFQUFFO2dCQUNoRCxHQUFHLElBQUksSUFBSSxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQzFDLE9BQU8sWUFBWSxDQUFDLGVBQWUsQ0FBQzthQUNyQztZQUNELE1BQU0sY0FBYyxHQUFpQjtnQkFDbkMsZUFBZSxFQUFFLEdBQUc7Z0JBQ3BCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUztnQkFDbEMsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsaUJBQWlCLEVBQUUsTUFBTTthQUMxQixDQUFDO1lBQ0YsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLGlDQUFNLGNBQWMsR0FBSyxZQUFZLEVBQUcsQ0FBQztZQUN4RSxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO2dCQUM1RCxJQUFJLE9BQVEsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO29CQUMzQixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7d0JBQ2YsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDcEI7aUJBQ0Y7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEI7Z0JBQ0QsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwQixXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7O09BZUc7SUFDSCxZQUFZLENBQUMsSUFBOEMsRUFBRSxNQUFrQixFQUFFLE9BQTRCO1FBQzNHLE1BQU0sWUFBWSxtQkFDaEIsY0FBYyxFQUFFLEtBQUssSUFDbEIsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUNyQyxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLGtDQUFPLE9BQU8sS0FBRSxZQUFZLElBQUcsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNILElBQUksQ0FDRixJQUE4QyxFQUM5QyxNQUFrQixFQUNsQixPQUFnRCxJQUFJLEVBQ3BELE9BQXNCO1FBRXRCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFO1lBQy9CLElBQUk7WUFDSixZQUFZLEVBQUUsT0FBTztZQUNyQixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7OztPQWFHO0lBQ0gsTUFBTSxDQUNKLElBQThDLEVBQzlDLE1BQWtCLEVBQ2xCLE9BQWdELElBQUksRUFDcEQsT0FBc0I7UUFFdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxrQkFDakMsY0FBYyxFQUFFLEtBQUssSUFDbEIsT0FBTyxFQUNWLENBQUM7SUFDTCxDQUFDOzs7O1lBaEpGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFqQlgsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTW9kYWxPcHRpb25zLCBOek1vZGFsU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbW9kYWwnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbEhlbHBlck9wdGlvbnMge1xuICAvKiog5aSn5bCP77yb5L6L5aaC77yabGfjgIE2MDDvvIzpu5jorqTvvJpgbGdgICovXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJycgfCBudW1iZXI7XG4gIC8qKiDlr7nor53moYYgW01vZGFsT3B0aW9uc10oaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvY29tcG9uZW50cy9tb2RhbC9tb2RhbC10eXBlcy50cykg5Y+C5pWwICovXG4gIG1vZGFsT3B0aW9ucz86IE1vZGFsT3B0aW9ucztcbiAgLyoqIOaYr+WQpueyvuWHhu+8iOm7mOiupO+8mmB0cnVlYO+8ie+8jOiLpei/lOWbnuWAvOmdnuepuuWAvO+8iGBudWxsYOaIlmB1bmRlZmluZWRg77yJ6KeG5Li65oiQ5Yqf77yM5ZCm5YiZ6KeG5Li66ZSZ6K+vICovXG4gIGV4YWN0PzogYm9vbGVhbjtcbiAgLyoqIOaYr+WQpuWMheijueagh+etvumhte+8jOS/ruWkjeaooeaAgeWMheWQq+agh+etvumXtOi3nemXrumimCAqL1xuICBpbmNsdWRlVGFicz86IGJvb2xlYW47XG59XG5cbi8qKlxuICog5a+56K+d5qGG6L6F5Yqp57G7XG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTW9kYWxIZWxwZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNydjogTnpNb2RhbFNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIOaehOW7uuS4gOS4quWvueivneahhlxuICAgKlxuICAgKiBAcGFyYW0gY29tcCDnu4Tku7ZcbiAgICogQHBhcmFtIHBhcmFtcyDnu4Tku7blj4LmlbBcbiAgICogQHBhcmFtIG9wdGlvbnMg6aKd5aSW5Y+C5pWwXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHRoaXMubW9kYWxIZWxwZXIuY3JlYXRlKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4gICAqIC8vIOWvueS6jue7hOS7tueahOaIkOWKnyblhbPpl63nmoTlpITnkIbor7TmmI5cbiAgICogLy8g5oiQ5YqfXG4gICAqIHRoaXMuTnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcbiAgICogdGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XG4gICAqIC8vIOWFs+mXrVxuICAgKiB0aGlzLk56TW9kYWxSZWYuZGVzdHJveSgpO1xuICAgKi9cbiAgY3JlYXRlKGNvbXA6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBUeXBlPE56U2FmZUFueT4sIHBhcmFtcz86IE56U2FmZUFueSwgb3B0aW9ucz86IE1vZGFsSGVscGVyT3B0aW9ucyk6IE9ic2VydmFibGU8TnpTYWZlQW55PiB7XG4gICAgb3B0aW9ucyA9IGRlZXBNZXJnZShcbiAgICAgIHtcbiAgICAgICAgc2l6ZTogJ2xnJyxcbiAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgIGluY2x1ZGVUYWJzOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBvcHRpb25zLFxuICAgICk7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8TnpTYWZlQW55PikgPT4ge1xuICAgICAgY29uc3QgeyBzaXplLCBpbmNsdWRlVGFicywgbW9kYWxPcHRpb25zIH0gPSBvcHRpb25zIGFzIE1vZGFsSGVscGVyT3B0aW9ucztcbiAgICAgIGxldCBjbHMgPSAnJztcbiAgICAgIGxldCB3aWR0aCA9ICcnO1xuICAgICAgaWYgKHNpemUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzaXplID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHdpZHRoID0gYCR7c2l6ZX1weGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2xzID0gYG1vZGFsLSR7c2l6ZX1gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaW5jbHVkZVRhYnMpIHtcbiAgICAgICAgY2xzICs9ICcgbW9kYWwtaW5jbHVkZS10YWJzJztcbiAgICAgIH1cbiAgICAgIGlmIChtb2RhbE9wdGlvbnMgJiYgbW9kYWxPcHRpb25zLm56V3JhcENsYXNzTmFtZSkge1xuICAgICAgICBjbHMgKz0gYCAke21vZGFsT3B0aW9ucy5ueldyYXBDbGFzc05hbWV9YDtcbiAgICAgICAgZGVsZXRlIG1vZGFsT3B0aW9ucy5ueldyYXBDbGFzc05hbWU7XG4gICAgICB9XG4gICAgICBjb25zdCBkZWZhdWx0T3B0aW9uczogTW9kYWxPcHRpb25zID0ge1xuICAgICAgICBueldyYXBDbGFzc05hbWU6IGNscyxcbiAgICAgICAgbnpDb250ZW50OiBjb21wLFxuICAgICAgICBueldpZHRoOiB3aWR0aCA/IHdpZHRoIDogdW5kZWZpbmVkLFxuICAgICAgICBuekZvb3RlcjogbnVsbCxcbiAgICAgICAgbnpDb21wb25lbnRQYXJhbXM6IHBhcmFtcyxcbiAgICAgIH07XG4gICAgICBjb25zdCBzdWJqZWN0ID0gdGhpcy5zcnYuY3JlYXRlKHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm1vZGFsT3B0aW9ucyB9KTtcbiAgICAgIGNvbnN0IGFmdGVyQ2xvc2UkID0gc3ViamVjdC5hZnRlckNsb3NlLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKG9wdGlvbnMhLmV4YWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHJlcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgfVxuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICBhZnRlckNsb3NlJC51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5p6E5bu66Z2Z5oCB5qGG77yM54K55Ye76JKZ5bGC5LiN5YWB6K645YWz6ZetXG4gICAqXG4gICAqIEBwYXJhbSBjb21wIOe7hOS7tlxuICAgKiBAcGFyYW0gcGFyYW1zIOe7hOS7tuWPguaVsFxuICAgKiBAcGFyYW0gb3B0aW9ucyDpop3lpJblj4LmlbBcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogdGhpcy5tb2RhbEhlbHBlci5vcGVuKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4gICAqIC8vIOWvueS6jue7hOS7tueahOaIkOWKnyblhbPpl63nmoTlpITnkIbor7TmmI5cbiAgICogLy8g5oiQ5YqfXG4gICAqIHRoaXMuTnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcbiAgICogdGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XG4gICAqIC8vIOWFs+mXrVxuICAgKiB0aGlzLk56TW9kYWxSZWYuZGVzdHJveSgpO1xuICAgKi9cbiAgY3JlYXRlU3RhdGljKGNvbXA6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBUeXBlPE56U2FmZUFueT4sIHBhcmFtcz86IE56U2FmZUFueSwgb3B0aW9ucz86IE1vZGFsSGVscGVyT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgbW9kYWxPcHRpb25zID0ge1xuICAgICAgbnpNYXNrQ2xvc2FibGU6IGZhbHNlLFxuICAgICAgLi4uKG9wdGlvbnMgJiYgb3B0aW9ucy5tb2RhbE9wdGlvbnMpLFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKGNvbXAsIHBhcmFtcywgeyAuLi5vcHRpb25zLCBtb2RhbE9wdGlvbnMgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgV2lsbCBiZSByZW1vdmVkIGluIDEyLjAuMCwgUGxzIHVzZWQgYGNyZWF0ZWAgaW5zdGVhZFxuICAgKlxuICAgKiDmiZPlvIDlr7nor53moYZcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogdGhpcy5tb2RhbEhlbHBlci5vcGVuKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4gICAqIC8vIOWvueS6jue7hOS7tueahOaIkOWKnyblhbPpl63nmoTlpITnkIbor7TmmI5cbiAgICogLy8g5oiQ5YqfXG4gICAqIHRoaXMuTnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcbiAgICogdGhpcy5Oek1vZGFsUmVmLmNsb3NlKCk7XG4gICAqIC8vIOWFs+mXrVxuICAgKiB0aGlzLk56TW9kYWxSZWYuZGVzdHJveSgpO1xuICAgKi9cbiAgb3BlbihcbiAgICBjb21wOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgVHlwZTxOelNhZmVBbnk+LFxuICAgIHBhcmFtcz86IE56U2FmZUFueSxcbiAgICBzaXplOiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJycgfCBudW1iZXIgPSAnbGcnLFxuICAgIG9wdGlvbnM/OiBNb2RhbE9wdGlvbnMsXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKGNvbXAsIHBhcmFtcywge1xuICAgICAgc2l6ZSxcbiAgICAgIG1vZGFsT3B0aW9uczogb3B0aW9ucyxcbiAgICAgIGV4YWN0OiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBXaWxsIGJlIHJlbW92ZWQgaW4gMTIuMC4wLCBQbHMgdXNlZCBgY3JlYXRlU3RhdGljYCBpbnN0ZWFkXG4gICAqXG4gICAqIOmdmeaAgeahhu+8jOeCueWHu+iSmeWxguS4jeWFgeiuuOWFs+mXrVxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB0aGlzLm1vZGFsSGVscGVyLm9wZW4oRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbiAgICogLy8g5a+55LqO57uE5Lu255qE5oiQ5YqfJuWFs+mXreeahOWkhOeQhuivtOaYjlxuICAgKiAvLyDmiJDlip9cbiAgICogdGhpcy5Oek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xuICAgKiB0aGlzLk56TW9kYWxSZWYuY2xvc2UoKTtcbiAgICogLy8g5YWz6ZetXG4gICAqIHRoaXMuTnpNb2RhbFJlZi5kZXN0cm95KCk7XG4gICAqL1xuICBzdGF0aWMoXG4gICAgY29tcDogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IFR5cGU8TnpTYWZlQW55PixcbiAgICBwYXJhbXM/OiBOelNhZmVBbnksXG4gICAgc2l6ZTogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyID0gJ2xnJyxcbiAgICBvcHRpb25zPzogTW9kYWxPcHRpb25zLFxuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLm9wZW4oY29tcCwgcGFyYW1zLCBzaXplLCB7XG4gICAgICBuek1hc2tDbG9zYWJsZTogZmFsc2UsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0pO1xuICB9XG59XG4iXX0=