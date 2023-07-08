import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Observable, filter, take } from 'rxjs';
import { deepMerge } from '@delon/util/other';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/modal";
import * as i2 from "@angular/cdk/drag-drop";
/**
 * 对话框辅助类
 */
class ModalHelper {
    constructor(srv, drag, doc) {
        this.srv = srv;
        this.drag = drag;
        this.dragClsPrefix = 'MODAL-DRAG';
        this.document = doc;
    }
    createDragRef(options, wrapCls) {
        const wrapEl = this.document.querySelector(wrapCls);
        const modalEl = wrapEl.firstChild;
        const handelEl = options.handleCls ? wrapEl.querySelector(options.handleCls) : null;
        if (handelEl) {
            handelEl.classList.add(`${this.dragClsPrefix}-HANDLE`);
        }
        return this.drag
            .createDrag(handelEl ?? modalEl)
            .withHandles([handelEl ?? modalEl])
            .withBoundaryElement(wrapEl)
            .withRootElement(modalEl);
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
     * // 成功，其中 `nzModalRef` 指目标组件在构造函数 `NzModalRef` 变量名
     * this.nzModalRef.close(data);
     * this.nzModalRef.close();
     * // 关闭
     * this.nzModalRef.destroy();
     */
    create(comp, params, options) {
        options = deepMerge({
            size: 'lg',
            exact: true,
            includeTabs: false
        }, options);
        return new Observable((observer) => {
            const { size, includeTabs, modalOptions, drag } = options;
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
            let dragOptions;
            let dragWrapCls = `${this.dragClsPrefix}-${+new Date()}`;
            let dragRef;
            if (drag != null && drag !== false) {
                dragOptions = {
                    handleCls: `.modal-header, .ant-modal-title`,
                    ...(typeof drag === 'object' ? drag : {})
                };
                cls += ` ${this.dragClsPrefix} ${dragWrapCls}`;
            }
            const defaultOptions = {
                nzWrapClassName: cls,
                nzContent: comp,
                nzWidth: width ? width : undefined,
                nzFooter: null,
                nzComponentParams: params
            };
            const subject = this.srv.create({ ...defaultOptions, ...modalOptions });
            subject.afterOpen
                .pipe(take(1), filter(() => dragOptions != null))
                .subscribe(() => {
                dragRef = this.createDragRef(dragOptions, `.${dragWrapCls}`);
            });
            subject.afterClose.pipe(take(1)).subscribe((res) => {
                if (options.exact === true) {
                    if (res != null) {
                        observer.next(res);
                    }
                }
                else {
                    observer.next(res);
                }
                observer.complete();
                dragRef?.dispose();
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
     * // 成功，其中 `nzModalRef` 指目标组件在构造函数 `NzModalRef` 变量名
     * this.nzModalRef.close(data);
     * this.nzModalRef.close();
     * // 关闭
     * this.nzModalRef.destroy();
     */
    createStatic(comp, params, options) {
        const modalOptions = {
            nzMaskClosable: false,
            ...(options && options.modalOptions)
        };
        return this.create(comp, params, { ...options, modalOptions });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: ModalHelper, deps: [{ token: i1.NzModalService }, { token: i2.DragDrop }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: ModalHelper, providedIn: 'root' }); }
}
export { ModalHelper };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: ModalHelper, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.NzModalService }, { type: i2.DragDrop }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUEwQjlDOztHQUVHO0FBQ0gsTUFDYSxXQUFXO0lBSXRCLFlBQW9CLEdBQW1CLEVBQVUsSUFBYyxFQUFvQixHQUFjO1FBQTdFLFFBQUcsR0FBSCxHQUFHLENBQWdCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUZ2RCxrQkFBYSxHQUFHLFlBQVksQ0FBQztRQUduQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUN0QixDQUFDO0lBRU8sYUFBYSxDQUFDLE9BQStCLEVBQUUsT0FBZTtRQUNwRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQW1CLENBQUM7UUFDdEUsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQTRCLENBQUM7UUFDcEQsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBaUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDcEcsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLFNBQVMsQ0FBQyxD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QUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQWMsRUFBRSxFQUFFO2dCQUM1RCxJQUFJLE9BQVEsQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO29CQUMzQixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7d0JBQ2YsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDcEI7aUJBQ0Y7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEI7Z0JBQ0QsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNwQixPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7O09BZUc7SUFDSCxZQUFZLENBQ1YsSUFBOEMsRUFDOUMsTUFBa0IsRUFDbEIsT0FBNEI7UUFFNUIsTUFBTSxZQUFZLEdBQUc7WUFDbkIsY0FBYyxFQUFFLEtBQUs7WUFDckIsR0FBRyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDO1NBQ3JDLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUcsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQzs4R0F4SVUsV0FBVyx3RUFJbUQsUUFBUTtrSEFKdEUsV0FBVyxjQURFLE1BQU07O1NBQ25CLFdBQVc7MkZBQVgsV0FBVztrQkFEdkIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzBCQUtrQyxNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEcmFnRHJvcCwgRHJhZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIGZpbHRlciwgdGFrZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBNb2RhbE9wdGlvbnMsIE56TW9kYWxTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tb2RhbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxIZWxwZXJPcHRpb25zIHtcbiAgLyoqIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw77yM6buY6K6k77yaYGxnYCAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyO1xuICAvKiog5a+56K+d5qGGIFtNb2RhbE9wdGlvbnNdKGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwtdHlwZXMudHMpIOWPguaVsCAqL1xuICBtb2RhbE9wdGlvbnM/OiBNb2RhbE9wdGlvbnM7XG4gIC8qKiDmmK/lkKbnsr7lh4bvvIjpu5jorqTvvJpgdHJ1ZWDvvInvvIzoi6Xov5Tlm57lgLzpnZ7nqbrlgLzvvIhgbnVsbGDmiJZgdW5kZWZpbmVkYO+8ieinhuS4uuaIkOWKn++8jOWQpuWImeinhuS4uumUmeivryAqL1xuICBleGFjdD86IGJvb2xlYW47XG4gIC8qKiDmmK/lkKbljIXoo7nmoIfnrb7pobXvvIzkv67lpI3mqKHmgIHljIXlkKvmoIfnrb7pl7Tot53pl67popggKi9cbiAgaW5jbHVkZVRhYnM/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5pSv5oyB5ouW5Yqo77yM6buY6K6k5piv6YCa6L+H5qCH6aKY5p2l6Kem5Y+RXG4gICAqL1xuICBkcmFnPzogTW9kYWxIZWxwZXJEcmFnT3B0aW9ucyB8IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxIZWxwZXJEcmFnT3B0aW9ucyB7XG4gIC8qKlxuICAgKiDmjIflrprmi5blnLDljLrln5/nmoTnsbvlkI3vvIzoi6XmjIflrprkuLogYG51bGxgIOaXtuihqOekuuaVtOS4quWvueivneahhu+8jOm7mOiupO+8mmAubW9kYWwtaGVhZGVyLCAuYW50LW1vZGFsLXRpdGxlYFxuICAgKi9cbiAgaGFuZGxlQ2xzPzogc3RyaW5nIHwgbnVsbDtcbn1cblxuLyoqXG4gKiDlr7nor53moYbovoXliqnnsbtcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBNb2RhbEhlbHBlciB7XG4gIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50O1xuICBwcml2YXRlIGRyYWdDbHNQcmVmaXggPSAnTU9EQUwtRFJBRyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IE56TW9kYWxTZXJ2aWNlLCBwcml2YXRlIGRyYWc6IERyYWdEcm9wLCBASW5qZWN0KERPQ1VNRU5UKSBkb2M6IE56U2FmZUFueSkge1xuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2M7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZURyYWdSZWYob3B0aW9uczogTW9kYWxIZWxwZXJEcmFnT3B0aW9ucywgd3JhcENsczogc3RyaW5nKTogRHJhZ1JlZiB7XG4gICAgY29uc3Qgd3JhcEVsID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHdyYXBDbHMpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGNvbnN0IG1vZGFsRWwgPSB3cmFwRWwuZmlyc3RDaGlsZCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBjb25zdCBoYW5kZWxFbCA9IG9wdGlvbnMuaGFuZGxlQ2xzID8gd3JhcEVsLnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KG9wdGlvbnMuaGFuZGxlQ2xzKSA6IG51bGw7XG4gICAgaWYgKGhhbmRlbEVsKSB7XG4gICAgICBoYW5kZWxFbC5jbGFzc0xpc3QuYWRkKGAke3RoaXMuZHJhZ0Nsc1ByZWZpeH0tSEFORExFYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZHJhZ1xuICAgICAgLmNyZWF0ZURyYWcoaGFuZGVsRWwgPz8gbW9kYWxFbClcbiAgICAgIC53aXRoSGFuZGxlcyhbaGFuZGVsRWwgPz8gbW9kYWxFbF0pXG4gICAgICAud2l0aEJvdW5kYXJ5RWxlbWVudCh3cmFwRWwpXG4gICAgICAud2l0aFJvb3RFbGVtZW50KG1vZGFsRWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIOaehOW7uuS4gOS4quWvueivneahhlxuICAgKlxuICAgKiBAcGFyYW0gY29tcCDnu4Tku7ZcbiAgICogQHBhcmFtIHBhcmFtcyDnu4Tku7blj4LmlbBcbiAgICogQHBhcmFtIG9wdGlvbnMg6aKd5aSW5Y+C5pWwXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHRoaXMubW9kYWxIZWxwZXIuY3JlYXRlKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4gICAqIC8vIOWvueS6jue7hOS7tueahOaIkOWKnyblhbPpl63nmoTlpITnkIbor7TmmI5cbiAgICogLy8g5oiQ5Yqf77yM5YW25LitIGBuek1vZGFsUmVmYCDmjIfnm67moIfnu4Tku7blnKjmnoTpgKDlh73mlbAgYE56TW9kYWxSZWZgIOWPmOmHj+WQjVxuICAgKiB0aGlzLm56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XG4gICAqIHRoaXMubnpNb2RhbFJlZi5jbG9zZSgpO1xuICAgKiAvLyDlhbPpl61cbiAgICogdGhpcy5uek1vZGFsUmVmLmRlc3Ryb3koKTtcbiAgICovXG4gIGNyZWF0ZShcbiAgICBjb21wOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgVHlwZTxOelNhZmVBbnk+LFxuICAgIHBhcmFtcz86IE56U2FmZUFueSxcbiAgICBvcHRpb25zPzogTW9kYWxIZWxwZXJPcHRpb25zXG4gICk6IE9ic2VydmFibGU8TnpTYWZlQW55PiB7XG4gICAgb3B0aW9ucyA9IGRlZXBNZXJnZShcbiAgICAgIHtcbiAgICAgICAgc2l6ZTogJ2xnJyxcbiAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgIGluY2x1ZGVUYWJzOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPE56U2FmZUFueT4pID0+IHtcbiAgICAgIGNvbnN0IHsgc2l6ZSwgaW5jbHVkZVRhYnMsIG1vZGFsT3B0aW9ucywgZHJhZyB9ID0gb3B0aW9ucyBhcyBNb2RhbEhlbHBlck9wdGlvbnM7XG4gICAgICBsZXQgY2xzID0gJyc7XG4gICAgICBsZXQgd2lkdGggPSAnJztcbiAgICAgIGlmIChzaXplKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICB3aWR0aCA9IGAke3NpemV9cHhgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNscyA9IGBtb2RhbC0ke3NpemV9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGluY2x1ZGVUYWJzKSB7XG4gICAgICAgIGNscyArPSAnIG1vZGFsLWluY2x1ZGUtdGFicyc7XG4gICAgICB9XG4gICAgICBpZiAobW9kYWxPcHRpb25zICYmIG1vZGFsT3B0aW9ucy5ueldyYXBDbGFzc05hbWUpIHtcbiAgICAgICAgY2xzICs9IGAgJHttb2RhbE9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lfWA7XG4gICAgICAgIGRlbGV0ZSBtb2RhbE9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lO1xuICAgICAgfVxuICAgICAgbGV0IGRyYWdPcHRpb25zOiBNb2RhbEhlbHBlckRyYWdPcHRpb25zIHwgbnVsbDtcbiAgICAgIGxldCBkcmFnV3JhcENscyA9IGAke3RoaXMuZHJhZ0Nsc1ByZWZpeH0tJHsrbmV3IERhdGUoKX1gO1xuICAgICAgbGV0IGRyYWdSZWY6IERyYWdSZWYgfCBudWxsO1xuICAgICAgaWYgKGRyYWcgIT0gbnVsbCAmJiBkcmFnICE9PSBmYWxzZSkge1xuICAgICAgICBkcmFnT3B0aW9ucyA9IHtcbiAgICAgICAgICBoYW5kbGVDbHM6IGAubW9kYWwtaGVhZGVyLCAuYW50LW1vZGFsLXRpdGxlYCxcbiAgICAgICAgICAuLi4odHlwZW9mIGRyYWcgPT09ICdvYmplY3QnID8gZHJhZyA6IHt9KVxuICAgICAgICB9O1xuICAgICAgICBjbHMgKz0gYCAke3RoaXMuZHJhZ0Nsc1ByZWZpeH0gJHtkcmFnV3JhcENsc31gO1xuICAgICAgfVxuICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE1vZGFsT3B0aW9ucyA9IHtcbiAgICAgICAgbnpXcmFwQ2xhc3NOYW1lOiBjbHMsXG4gICAgICAgIG56Q29udGVudDogY29tcCxcbiAgICAgICAgbnpXaWR0aDogd2lkdGggPyB3aWR0aCA6IHVuZGVmaW5lZCxcbiAgICAgICAgbnpGb290ZXI6IG51bGwsXG4gICAgICAgIG56Q29tcG9uZW50UGFyYW1zOiBwYXJhbXNcbiAgICAgIH07XG4gICAgICBjb25zdCBzdWJqZWN0ID0gdGhpcy5zcnYuY3JlYXRlKHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm1vZGFsT3B0aW9ucyB9KTtcbiAgICAgIHN1YmplY3QuYWZ0ZXJPcGVuXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgZmlsdGVyKCgpID0+IGRyYWdPcHRpb25zICE9IG51bGwpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgZHJhZ1JlZiA9IHRoaXMuY3JlYXRlRHJhZ1JlZihkcmFnT3B0aW9ucyEhLCBgLiR7ZHJhZ1dyYXBDbHN9YCk7XG4gICAgICAgIH0pO1xuICAgICAgc3ViamVjdC5hZnRlckNsb3NlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKChyZXM6IE56U2FmZUFueSkgPT4ge1xuICAgICAgICBpZiAob3B0aW9ucyEuZXhhY3QgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAocmVzICE9IG51bGwpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xuICAgICAgICB9XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIGRyYWdSZWY/LmRpc3Bvc2UoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOaehOW7uumdmeaAgeahhu+8jOeCueWHu+iSmeWxguS4jeWFgeiuuOWFs+mXrVxuICAgKlxuICAgKiBAcGFyYW0gY29tcCDnu4Tku7ZcbiAgICogQHBhcmFtIHBhcmFtcyDnu4Tku7blj4LmlbBcbiAgICogQHBhcmFtIG9wdGlvbnMg6aKd5aSW5Y+C5pWwXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHRoaXMubW9kYWxIZWxwZXIub3BlbihGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuICAgKiAvLyDlr7nkuo7nu4Tku7bnmoTmiJDlip8m5YWz6Zet55qE5aSE55CG6K+05piOXG4gICAqIC8vIOaIkOWKn++8jOWFtuS4rSBgbnpNb2RhbFJlZmAg5oyH55uu5qCH57uE5Lu25Zyo5p6E6YCg5Ye95pWwIGBOek1vZGFsUmVmYCDlj5jph4/lkI1cbiAgICogdGhpcy5uek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xuICAgKiB0aGlzLm56TW9kYWxSZWYuY2xvc2UoKTtcbiAgICogLy8g5YWz6ZetXG4gICAqIHRoaXMubnpNb2RhbFJlZi5kZXN0cm95KCk7XG4gICAqL1xuICBjcmVhdGVTdGF0aWMoXG4gICAgY29tcDogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IFR5cGU8TnpTYWZlQW55PixcbiAgICBwYXJhbXM/OiBOelNhZmVBbnksXG4gICAgb3B0aW9ucz86IE1vZGFsSGVscGVyT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPE56U2FmZUFueT4ge1xuICAgIGNvbnN0IG1vZGFsT3B0aW9ucyA9IHtcbiAgICAgIG56TWFza0Nsb3NhYmxlOiBmYWxzZSxcbiAgICAgIC4uLihvcHRpb25zICYmIG9wdGlvbnMubW9kYWxPcHRpb25zKVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKGNvbXAsIHBhcmFtcywgeyAuLi5vcHRpb25zLCBtb2RhbE9wdGlvbnMgfSk7XG4gIH1cbn1cbiJdfQ==