import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Observable, filter, take } from 'rxjs';
import { deepMerge } from '@delon/util/other';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/modal";
import * as i2 from "@angular/cdk/drag-drop";
const CLS_DRAG = 'MODAL-DRAG';
/**
 * 对话框辅助类
 */
export class ModalHelper {
    constructor(srv, drag, doc) {
        this.srv = srv;
        this.drag = drag;
        this.document = doc;
    }
    createDragRef(options, wrapCls) {
        const wrapEl = this.document.querySelector(wrapCls);
        const modalEl = wrapEl.firstChild;
        const handelEl = options.handleCls ? wrapEl.querySelector(options.handleCls) : null;
        if (handelEl) {
            handelEl.classList.add(`${CLS_DRAG}-HANDLE`);
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
            const { size, includeTabs, modalOptions, drag, useNzData } = options;
            let cls = [];
            let width = '';
            if (size) {
                if (typeof size === 'number') {
                    width = `${size}px`;
                }
                else if (['sm', 'md', 'lg', 'xl'].includes(size)) {
                    cls.push(`modal-${size}`);
                }
                else {
                    width = size;
                }
            }
            if (includeTabs) {
                cls.push(`modal-include-tabs`);
            }
            if (modalOptions && modalOptions.nzWrapClassName) {
                cls.push(modalOptions.nzWrapClassName);
                delete modalOptions.nzWrapClassName;
            }
            let dragOptions;
            let dragWrapCls = `${CLS_DRAG}-${+new Date()}`;
            let dragRef;
            if (drag != null && drag !== false) {
                dragOptions = {
                    handleCls: `.modal-header, .ant-modal-title`,
                    ...(typeof drag === 'object' ? drag : {})
                };
                cls.push(CLS_DRAG, dragWrapCls);
            }
            const subject = this.srv.create({
                nzWrapClassName: cls.join(' '),
                nzContent: comp,
                nzWidth: width ? width : undefined,
                nzFooter: null,
                nzData: params,
                ...modalOptions
            });
            // 保留 nzComponentParams 原有风格，但依然可以通过 @Inject(NZ_MODAL_DATA) 获取
            if (useNzData !== true) {
                Object.assign(subject.componentInstance, params);
            }
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: ModalHelper, deps: [{ token: i1.NzModalService }, { token: i2.DragDrop }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: ModalHelper, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: ModalHelper, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1.NzModalService }, { type: i2.DragDrop }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFJOUMsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDO0FBNEI5Qjs7R0FFRztBQUVILE1BQU0sT0FBTyxXQUFXO0lBR3RCLFlBQ1UsR0FBbUIsRUFDbkIsSUFBYyxFQUNKLEdBQWM7UUFGeEIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUd0QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUN0QixDQUFDO0lBRU8sYUFBYSxDQUFDLE9BQStCLEVBQUUsT0FBZTtRQUNwRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQW1CLENBQUM7UUFDdEUsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQTRCLENBQUM7UUFDcEQsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBaUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDcEcsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsU0FBUyxDQUFDLENB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QUNuQixXQUFXO2tCQUR2QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7MEJBTzdCLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERyYWdEcm9wLCBEcmFnUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFRlbXBsYXRlUmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciwgZmlsdGVyLCB0YWtlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE1vZGFsT3B0aW9ucywgTnpNb2RhbFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL21vZGFsJztcblxuY29uc3QgQ0xTX0RSQUcgPSAnTU9EQUwtRFJBRyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxIZWxwZXJPcHRpb25zIHtcbiAgLyoqIOWkp+Wwj++8m+S+i+Wmgu+8mmxn44CBNjAw44CBODAl77yM6buY6K6k77yaYGxnYCAqL1xuICBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICcnIHwgbnVtYmVyIHwgc3RyaW5nO1xuICAvKiog5a+56K+d5qGGIFtNb2RhbE9wdGlvbnNdKGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwtdHlwZXMudHMpIOWPguaVsCAqL1xuICBtb2RhbE9wdGlvbnM/OiBNb2RhbE9wdGlvbnM7XG4gIC8qKiDmmK/lkKbnsr7lh4bvvIjpu5jorqTvvJpgdHJ1ZWDvvInvvIzoi6Xov5Tlm57lgLzpnZ7nqbrlgLzvvIhgbnVsbGDmiJZgdW5kZWZpbmVkYO+8ieinhuS4uuaIkOWKn++8jOWQpuWImeinhuS4uumUmeivryAqL1xuICBleGFjdD86IGJvb2xlYW47XG4gIC8qKiDmmK/lkKbljIXoo7nmoIfnrb7pobXvvIzkv67lpI3mqKHmgIHljIXlkKvmoIfnrb7pl7Tot53pl67popggKi9cbiAgaW5jbHVkZVRhYnM/OiBib29sZWFuO1xuICAvKipcbiAgICog5piv5ZCm5pSv5oyB5ouW5Yqo77yM6buY6K6k5piv6YCa6L+H5qCH6aKY5p2l6Kem5Y+RXG4gICAqL1xuICBkcmFnPzogTW9kYWxIZWxwZXJEcmFnT3B0aW9ucyB8IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKblvLrliLbkvb/nlKggYG56RGF0YWAg5Lyg6YCS5Y+C5pWw77yM6Iul5Li6IGBmYWxzZWAg6KGo56S65Y+C5pWw5Lya55u05o6l5pig5bCE5Yiw57uE5Lu25a6e5L6L5Lit77yM5YW25LuW5YC85Y+q6IO96YCa6L+HIGBOWl9NT0RBTF9EQVRBYCDnmoTmlrnlvI/mnaXojrflj5blj4LmlbDvvIzpu5jorqTvvJpgZmFsc2VgXG4gICAqL1xuICB1c2VOekRhdGE/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGFsSGVscGVyRHJhZ09wdGlvbnMge1xuICAvKipcbiAgICog5oyH5a6a5ouW5Zyw5Yy65Z+f55qE57G75ZCN77yM6Iul5oyH5a6a5Li6IGBudWxsYCDml7booajnpLrmlbTkuKrlr7nor53moYbvvIzpu5jorqTvvJpgLm1vZGFsLWhlYWRlciwgLmFudC1tb2RhbC10aXRsZWBcbiAgICovXG4gIGhhbmRsZUNscz86IHN0cmluZyB8IG51bGw7XG59XG5cbi8qKlxuICog5a+56K+d5qGG6L6F5Yqp57G7XG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTW9kYWxIZWxwZXIge1xuICBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNydjogTnpNb2RhbFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkcmFnOiBEcmFnRHJvcCxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBkb2M6IE56U2FmZUFueVxuICApIHtcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVEcmFnUmVmKG9wdGlvbnM6IE1vZGFsSGVscGVyRHJhZ09wdGlvbnMsIHdyYXBDbHM6IHN0cmluZyk6IERyYWdSZWYge1xuICAgIGNvbnN0IHdyYXBFbCA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih3cmFwQ2xzKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBjb25zdCBtb2RhbEVsID0gd3JhcEVsLmZpcnN0Q2hpbGQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgY29uc3QgaGFuZGVsRWwgPSBvcHRpb25zLmhhbmRsZUNscyA/IHdyYXBFbC5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PihvcHRpb25zLmhhbmRsZUNscykgOiBudWxsO1xuICAgIGlmIChoYW5kZWxFbCkge1xuICAgICAgaGFuZGVsRWwuY2xhc3NMaXN0LmFkZChgJHtDTFNfRFJBR30tSEFORExFYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZHJhZ1xuICAgICAgLmNyZWF0ZURyYWcoaGFuZGVsRWwgPz8gbW9kYWxFbClcbiAgICAgIC53aXRoSGFuZGxlcyhbaGFuZGVsRWwgPz8gbW9kYWxFbF0pXG4gICAgICAud2l0aEJvdW5kYXJ5RWxlbWVudCh3cmFwRWwpXG4gICAgICAud2l0aFJvb3RFbGVtZW50KG1vZGFsRWwpO1xuICB9XG5cbiAgLyoqXG4gICAqIOaehOW7uuS4gOS4quWvueivneahhlxuICAgKlxuICAgKiBAcGFyYW0gY29tcCDnu4Tku7ZcbiAgICogQHBhcmFtIHBhcmFtcyDnu4Tku7blj4LmlbBcbiAgICogQHBhcmFtIG9wdGlvbnMg6aKd5aSW5Y+C5pWwXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHRoaXMubW9kYWxIZWxwZXIuY3JlYXRlKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4gICAqIC8vIOWvueS6jue7hOS7tueahOaIkOWKnyblhbPpl63nmoTlpITnkIbor7TmmI5cbiAgICogLy8g5oiQ5Yqf77yM5YW25LitIGBuek1vZGFsUmVmYCDmjIfnm67moIfnu4Tku7blnKjmnoTpgKDlh73mlbAgYE56TW9kYWxSZWZgIOWPmOmHj+WQjVxuICAgKiB0aGlzLm56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XG4gICAqIHRoaXMubnpNb2RhbFJlZi5jbG9zZSgpO1xuICAgKiAvLyDlhbPpl61cbiAgICogdGhpcy5uek1vZGFsUmVmLmRlc3Ryb3koKTtcbiAgICovXG4gIGNyZWF0ZShcbiAgICBjb21wOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgVHlwZTxOelNhZmVBbnk+LFxuICAgIHBhcmFtcz86IE56U2FmZUFueSxcbiAgICBvcHRpb25zPzogTW9kYWxIZWxwZXJPcHRpb25zXG4gICk6IE9ic2VydmFibGU8TnpTYWZlQW55PiB7XG4gICAgb3B0aW9ucyA9IGRlZXBNZXJnZShcbiAgICAgIHtcbiAgICAgICAgc2l6ZTogJ2xnJyxcbiAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgIGluY2x1ZGVUYWJzOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPE56U2FmZUFueT4pID0+IHtcbiAgICAgIGNvbnN0IHsgc2l6ZSwgaW5jbHVkZVRhYnMsIG1vZGFsT3B0aW9ucywgZHJhZywgdXNlTnpEYXRhIH0gPSBvcHRpb25zIGFzIE1vZGFsSGVscGVyT3B0aW9ucztcbiAgICAgIGxldCBjbHM6IHN0cmluZ1tdID0gW107XG4gICAgICBsZXQgd2lkdGggPSAnJztcbiAgICAgIGlmIChzaXplKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICB3aWR0aCA9IGAke3NpemV9cHhgO1xuICAgICAgICB9IGVsc2UgaWYgKFsnc20nLCAnbWQnLCAnbGcnLCAneGwnXS5pbmNsdWRlcyhzaXplKSkge1xuICAgICAgICAgIGNscy5wdXNoKGBtb2RhbC0ke3NpemV9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2lkdGggPSBzaXplO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaW5jbHVkZVRhYnMpIHtcbiAgICAgICAgY2xzLnB1c2goYG1vZGFsLWluY2x1ZGUtdGFic2ApO1xuICAgICAgfVxuICAgICAgaWYgKG1vZGFsT3B0aW9ucyAmJiBtb2RhbE9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lKSB7XG4gICAgICAgIGNscy5wdXNoKG1vZGFsT3B0aW9ucy5ueldyYXBDbGFzc05hbWUpO1xuICAgICAgICBkZWxldGUgbW9kYWxPcHRpb25zLm56V3JhcENsYXNzTmFtZTtcbiAgICAgIH1cbiAgICAgIGxldCBkcmFnT3B0aW9uczogTW9kYWxIZWxwZXJEcmFnT3B0aW9ucyB8IG51bGw7XG4gICAgICBsZXQgZHJhZ1dyYXBDbHMgPSBgJHtDTFNfRFJBR30tJHsrbmV3IERhdGUoKX1gO1xuICAgICAgbGV0IGRyYWdSZWY6IERyYWdSZWYgfCBudWxsO1xuICAgICAgaWYgKGRyYWcgIT0gbnVsbCAmJiBkcmFnICE9PSBmYWxzZSkge1xuICAgICAgICBkcmFnT3B0aW9ucyA9IHtcbiAgICAgICAgICBoYW5kbGVDbHM6IGAubW9kYWwtaGVhZGVyLCAuYW50LW1vZGFsLXRpdGxlYCxcbiAgICAgICAgICAuLi4odHlwZW9mIGRyYWcgPT09ICdvYmplY3QnID8gZHJhZyA6IHt9KVxuICAgICAgICB9O1xuICAgICAgICBjbHMucHVzaChDTFNfRFJBRywgZHJhZ1dyYXBDbHMpO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3ViamVjdCA9IHRoaXMuc3J2LmNyZWF0ZSh7XG4gICAgICAgIG56V3JhcENsYXNzTmFtZTogY2xzLmpvaW4oJyAnKSxcbiAgICAgICAgbnpDb250ZW50OiBjb21wLFxuICAgICAgICBueldpZHRoOiB3aWR0aCA/IHdpZHRoIDogdW5kZWZpbmVkLFxuICAgICAgICBuekZvb3RlcjogbnVsbCxcbiAgICAgICAgbnpEYXRhOiBwYXJhbXMsXG4gICAgICAgIC4uLm1vZGFsT3B0aW9uc1xuICAgICAgfSk7XG4gICAgICAvLyDkv53nlZkgbnpDb21wb25lbnRQYXJhbXMg5Y6f5pyJ6aOO5qC877yM5L2G5L6d54S25Y+v5Lul6YCa6L+HIEBJbmplY3QoTlpfTU9EQUxfREFUQSkg6I635Y+WXG4gICAgICBpZiAodXNlTnpEYXRhICE9PSB0cnVlKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oc3ViamVjdC5jb21wb25lbnRJbnN0YW5jZSwgcGFyYW1zKTtcbiAgICAgIH1cbiAgICAgIHN1YmplY3QuYWZ0ZXJPcGVuXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgZmlsdGVyKCgpID0+IGRyYWdPcHRpb25zICE9IG51bGwpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgZHJhZ1JlZiA9IHRoaXMuY3JlYXRlRHJhZ1JlZihkcmFnT3B0aW9ucyEhLCBgLiR7ZHJhZ1dyYXBDbHN9YCk7XG4gICAgICAgIH0pO1xuICAgICAgc3ViamVjdC5hZnRlckNsb3NlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKChyZXM6IE56U2FmZUFueSkgPT4ge1xuICAgICAgICBpZiAob3B0aW9ucyEuZXhhY3QgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAocmVzICE9IG51bGwpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xuICAgICAgICB9XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIGRyYWdSZWY/LmRpc3Bvc2UoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOaehOW7uumdmeaAgeahhu+8jOeCueWHu+iSmeWxguS4jeWFgeiuuOWFs+mXrVxuICAgKlxuICAgKiBAcGFyYW0gY29tcCDnu4Tku7ZcbiAgICogQHBhcmFtIHBhcmFtcyDnu4Tku7blj4LmlbBcbiAgICogQHBhcmFtIG9wdGlvbnMg6aKd5aSW5Y+C5pWwXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHRoaXMubW9kYWxIZWxwZXIub3BlbihGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuICAgKiAvLyDlr7nkuo7nu4Tku7bnmoTmiJDlip8m5YWz6Zet55qE5aSE55CG6K+05piOXG4gICAqIC8vIOaIkOWKn++8jOWFtuS4rSBgbnpNb2RhbFJlZmAg5oyH55uu5qCH57uE5Lu25Zyo5p6E6YCg5Ye95pWwIGBOek1vZGFsUmVmYCDlj5jph4/lkI1cbiAgICogdGhpcy5uek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xuICAgKiB0aGlzLm56TW9kYWxSZWYuY2xvc2UoKTtcbiAgICogLy8g5YWz6ZetXG4gICAqIHRoaXMubnpNb2RhbFJlZi5kZXN0cm95KCk7XG4gICAqL1xuICBjcmVhdGVTdGF0aWMoXG4gICAgY29tcDogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IFR5cGU8TnpTYWZlQW55PixcbiAgICBwYXJhbXM/OiBOelNhZmVBbnksXG4gICAgb3B0aW9ucz86IE1vZGFsSGVscGVyT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPE56U2FmZUFueT4ge1xuICAgIGNvbnN0IG1vZGFsT3B0aW9ucyA9IHtcbiAgICAgIG56TWFza0Nsb3NhYmxlOiBmYWxzZSxcbiAgICAgIC4uLihvcHRpb25zICYmIG9wdGlvbnMubW9kYWxPcHRpb25zKVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKGNvbXAsIHBhcmFtcywgeyAuLi5vcHRpb25zLCBtb2RhbE9wdGlvbnMgfSk7XG4gIH1cbn1cbiJdfQ==