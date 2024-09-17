import { DragDrop } from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Observable, delay, filter, take, tap } from 'rxjs';
import { deepMerge } from '@delon/util/other';
import { NzModalService } from 'ng-zorro-antd/modal';
import * as i0 from "@angular/core";
const CLS_DRAG = 'MODAL-DRAG';
/**
 * 对话框辅助类
 */
export class ModalHelper {
    constructor() {
        this.srv = inject(NzModalService);
        this.drag = inject(DragDrop);
        this.doc = inject(DOCUMENT);
    }
    createDragRef(options, wrapCls) {
        const wrapEl = this.doc.querySelector(wrapCls);
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
        const isBuildIn = typeof comp === 'string';
        options = deepMerge({
            size: 'lg',
            exact: true,
            includeTabs: false
        }, isBuildIn && arguments.length === 2 ? params : options);
        return new Observable((observer) => {
            const { size, includeTabs, modalOptions, drag, useNzData, focus } = options;
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
            const mth = isBuildIn ? this.srv[comp] : this.srv.create;
            const subject = mth.call(this.srv, {
                nzWrapClassName: cls.join(' '),
                nzContent: isBuildIn ? undefined : comp,
                nzWidth: width ? width : undefined,
                nzFooter: null,
                nzData: params,
                ...modalOptions
            });
            // 保留 nzComponentParams 原有风格，但依然可以通过 @Inject(NZ_MODAL_DATA) 获取
            if (subject.componentInstance != null && useNzData !== true) {
                Object.assign(subject.componentInstance, params);
            }
            subject.afterOpen
                .pipe(take(1), tap(() => {
                if (dragOptions != null) {
                    dragRef = this.createDragRef(dragOptions, `.${dragWrapCls}`);
                }
            }), filter(() => focus != null), delay(modalOptions?.nzNoAnimation ? 10 : 241))
                .subscribe(() => {
                const btns = subject
                    .getElement()
                    .querySelector('.ant-modal-confirm-btns, .modal-footer')
                    ?.querySelectorAll('.ant-btn');
                const btnSize = btns?.length ?? 0;
                let el = null;
                if (btnSize === 1) {
                    el = btns[0];
                }
                else if (btnSize > 1) {
                    el = btns[focus === 'ok' ? 1 : 0];
                }
                if (el != null) {
                    el.focus();
                    el.dataset.focused = focus;
                }
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: ModalHelper, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: ModalHelper, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: ModalHelper, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFXLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQUUsVUFBVSxFQUFZLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFOUMsT0FBTyxFQUE0QixjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFL0UsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDO0FBaUM5Qjs7R0FFRztBQUVILE1BQU0sT0FBTyxXQUFXO0lBRHhCO1FBRW1CLFFBQUcsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDN0IsU0FBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QixRQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBK0p6QztJQTdKUyxhQUFhLENBQUMsT0FBK0IsRUFBRSxPQUFlO1FBQ3BFLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBbUIsQ0FBQztRQUNqRSxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBNEIsQ0FBQztRQUNwRCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFpQixPQUFPLENBQUMsU0FBUyxDQUFD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QUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7O09BZUc7SUFDSCxZQUFZLENBQ1YsSUFBOEMsRUFDOUMsTUFBa0IsRUFDbEIsT0FBNEI7UUFFNUIsTUFBTSxZQUFZLEdBQUc7WUFDbkIsY0FBYyxFQUFFLEtBQUs7WUFDckIsR0FBRyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDO1NBQ3JDLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUcsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDakUsQ0FBQzs4R0FqS1UsV0FBVztrSEFBWCxXQUFXLGNBREUsTUFBTTs7MkZBQ25CLFdBQVc7a0JBRHZCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJhZ0Ryb3AsIERyYWdSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdGFibGUsIFRlbXBsYXRlUmVmLCBUeXBlLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBkZWxheSwgZmlsdGVyLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTW9kYWxPcHRpb25zLCBOek1vZGFsUmVmLCBOek1vZGFsU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbW9kYWwnO1xuXG5jb25zdCBDTFNfRFJBRyA9ICdNT0RBTC1EUkFHJztcblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbEhlbHBlck9wdGlvbnMge1xuICAvKiog5aSn5bCP77yb5L6L5aaC77yabGfjgIE2MDDjgIE4MCXvvIzpu5jorqTvvJpgbGdgICovXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJycgfCBudW1iZXIgfCBzdHJpbmc7XG4gIC8qKiDlr7nor53moYYgW01vZGFsT3B0aW9uc10oaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvY29tcG9uZW50cy9tb2RhbC9tb2RhbC10eXBlcy50cykg5Y+C5pWwICovXG4gIG1vZGFsT3B0aW9ucz86IE1vZGFsT3B0aW9ucztcbiAgLyoqIOaYr+WQpueyvuWHhu+8iOm7mOiupO+8mmB0cnVlYO+8ie+8jOiLpei/lOWbnuWAvOmdnuepuuWAvO+8iGBudWxsYOaIlmB1bmRlZmluZWRg77yJ6KeG5Li65oiQ5Yqf77yM5ZCm5YiZ6KeG5Li66ZSZ6K+vICovXG4gIGV4YWN0PzogYm9vbGVhbjtcbiAgLyoqIOaYr+WQpuWMheijueagh+etvumhte+8jOS/ruWkjeaooeaAgeWMheWQq+agh+etvumXtOi3nemXrumimCAqL1xuICBpbmNsdWRlVGFicz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIHmi5bliqjvvIzpu5jorqTmmK/pgJrov4fmoIfpopjmnaXop6blj5FcbiAgICovXG4gIGRyYWc/OiBNb2RhbEhlbHBlckRyYWdPcHRpb25zIHwgYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuW8uuWItuS9v+eUqCBgbnpEYXRhYCDkvKDpgJLlj4LmlbDvvIzoi6XkuLogYGZhbHNlYCDooajnpLrlj4LmlbDkvJrnm7TmjqXmmKDlsITliLDnu4Tku7blrp7kvovkuK3vvIzlhbbku5blgLzlj6rog73pgJrov4cgYE5aX01PREFMX0RBVEFgIOeahOaWueW8j+adpeiOt+WPluWPguaVsO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHVzZU56RGF0YT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOiuvue9rueEpueCueaMiemSrlxuICAgKi9cbiAgZm9jdXM/OiAnb2snIHwgJ2NhbmNlbCc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxIZWxwZXJEcmFnT3B0aW9ucyB7XG4gIC8qKlxuICAgKiDmjIflrprmi5blnLDljLrln5/nmoTnsbvlkI3vvIzoi6XmjIflrprkuLogYG51bGxgIOaXtuihqOekuuaVtOS4quWvueivneahhu+8jOm7mOiupO+8mmAubW9kYWwtaGVhZGVyLCAuYW50LW1vZGFsLXRpdGxlYFxuICAgKi9cbiAgaGFuZGxlQ2xzPzogc3RyaW5nIHwgbnVsbDtcbn1cblxuLyoqXG4gKiDlr7nor53moYbovoXliqnnsbtcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBNb2RhbEhlbHBlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc3J2ID0gaW5qZWN0KE56TW9kYWxTZXJ2aWNlKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkcmFnID0gaW5qZWN0KERyYWdEcm9wKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkb2MgPSBpbmplY3QoRE9DVU1FTlQpO1xuXG4gIHByaXZhdGUgY3JlYXRlRHJhZ1JlZihvcHRpb25zOiBNb2RhbEhlbHBlckRyYWdPcHRpb25zLCB3cmFwQ2xzOiBzdHJpbmcpOiBEcmFnUmVmIHtcbiAgICBjb25zdCB3cmFwRWwgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKHdyYXBDbHMpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGNvbnN0IG1vZGFsRWwgPSB3cmFwRWwuZmlyc3RDaGlsZCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBjb25zdCBoYW5kZWxFbCA9IG9wdGlvbnMuaGFuZGxlQ2xzID8gd3JhcEVsLnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KG9wdGlvbnMuaGFuZGxlQ2xzKSA6IG51bGw7XG4gICAgaWYgKGhhbmRlbEVsKSB7XG4gICAgICBoYW5kZWxFbC5jbGFzc0xpc3QuYWRkKGAke0NMU19EUkFHfS1IQU5ETEVgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kcmFnXG4gICAgICAuY3JlYXRlRHJhZyhoYW5kZWxFbCA/PyBtb2RhbEVsKVxuICAgICAgLndpdGhIYW5kbGVzKFtoYW5kZWxFbCA/PyBtb2RhbEVsXSlcbiAgICAgIC53aXRoQm91bmRhcnlFbGVtZW50KHdyYXBFbClcbiAgICAgIC53aXRoUm9vdEVsZW1lbnQobW9kYWxFbCk7XG4gIH1cblxuICAvKipcbiAgICog5p6E5bu65LiA5Liq5a+56K+d5qGGXG4gICAqXG4gICAqIEBwYXJhbSBjb21wIOe7hOS7tlxuICAgKiBAcGFyYW0gcGFyYW1zIOe7hOS7tuWPguaVsFxuICAgKiBAcGFyYW0gb3B0aW9ucyDpop3lpJblj4LmlbBcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogdGhpcy5tb2RhbEhlbHBlci5jcmVhdGUoRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbiAgICogLy8g5a+55LqO57uE5Lu255qE5oiQ5YqfJuWFs+mXreeahOWkhOeQhuivtOaYjlxuICAgKiAvLyDmiJDlip/vvIzlhbbkuK0gYG56TW9kYWxSZWZgIOaMh+ebruagh+e7hOS7tuWcqOaehOmAoOWHveaVsCBgTnpNb2RhbFJlZmAg5Y+Y6YeP5ZCNXG4gICAqIHRoaXMubnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcbiAgICogdGhpcy5uek1vZGFsUmVmLmNsb3NlKCk7XG4gICAqIC8vIOWFs+mXrVxuICAgKiB0aGlzLm56TW9kYWxSZWYuZGVzdHJveSgpO1xuICAgKi9cbiAgY3JlYXRlKFxuICAgIGNvbXA/OiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgVHlwZTxOelNhZmVBbnk+IHwgJ2NvbmZpcm0nIHwgJ2luZm8nIHwgJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICd3YXJuaW5nJyxcbiAgICBwYXJhbXM/OiBOelNhZmVBbnkgfCBNb2RhbEhlbHBlck9wdGlvbnMgfCBudWxsLFxuICAgIG9wdGlvbnM/OiBNb2RhbEhlbHBlck9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxOelNhZmVBbnk+IHtcbiAgICBjb25zdCBpc0J1aWxkSW4gPSB0eXBlb2YgY29tcCA9PT0gJ3N0cmluZyc7XG4gICAgb3B0aW9ucyA9IGRlZXBNZXJnZShcbiAgICAgIHtcbiAgICAgICAgc2l6ZTogJ2xnJyxcbiAgICAgICAgZXhhY3Q6IHRydWUsXG4gICAgICAgIGluY2x1ZGVUYWJzOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGlzQnVpbGRJbiAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAyID8gcGFyYW1zIDogb3B0aW9uc1xuICAgICk7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8TnpTYWZlQW55PikgPT4ge1xuICAgICAgY29uc3QgeyBzaXplLCBpbmNsdWRlVGFicywgbW9kYWxPcHRpb25zLCBkcmFnLCB1c2VOekRhdGEsIGZvY3VzIH0gPSBvcHRpb25zIGFzIE1vZGFsSGVscGVyT3B0aW9ucztcbiAgICAgIGxldCBjbHM6IHN0cmluZ1tdID0gW107XG4gICAgICBsZXQgd2lkdGggPSAnJztcbiAgICAgIGlmIChzaXplKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICB3aWR0aCA9IGAke3NpemV9cHhgO1xuICAgICAgICB9IGVsc2UgaWYgKFsnc20nLCAnbWQnLCAnbGcnLCAneGwnXS5pbmNsdWRlcyhzaXplKSkge1xuICAgICAgICAgIGNscy5wdXNoKGBtb2RhbC0ke3NpemV9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2lkdGggPSBzaXplO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaW5jbHVkZVRhYnMpIHtcbiAgICAgICAgY2xzLnB1c2goYG1vZGFsLWluY2x1ZGUtdGFic2ApO1xuICAgICAgfVxuICAgICAgaWYgKG1vZGFsT3B0aW9ucyAmJiBtb2RhbE9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lKSB7XG4gICAgICAgIGNscy5wdXNoKG1vZGFsT3B0aW9ucy5ueldyYXBDbGFzc05hbWUpO1xuICAgICAgICBkZWxldGUgbW9kYWxPcHRpb25zLm56V3JhcENsYXNzTmFtZTtcbiAgICAgIH1cbiAgICAgIGxldCBkcmFnT3B0aW9uczogTW9kYWxIZWxwZXJEcmFnT3B0aW9ucyB8IG51bGw7XG4gICAgICBsZXQgZHJhZ1dyYXBDbHMgPSBgJHtDTFNfRFJBR30tJHsrbmV3IERhdGUoKX1gO1xuICAgICAgbGV0IGRyYWdSZWY6IERyYWdSZWYgfCBudWxsO1xuICAgICAgaWYgKGRyYWcgIT0gbnVsbCAmJiBkcmFnICE9PSBmYWxzZSkge1xuICAgICAgICBkcmFnT3B0aW9ucyA9IHtcbiAgICAgICAgICBoYW5kbGVDbHM6IGAubW9kYWwtaGVhZGVyLCAuYW50LW1vZGFsLXRpdGxlYCxcbiAgICAgICAgICAuLi4odHlwZW9mIGRyYWcgPT09ICdvYmplY3QnID8gZHJhZyA6IHt9KVxuICAgICAgICB9O1xuICAgICAgICBjbHMucHVzaChDTFNfRFJBRywgZHJhZ1dyYXBDbHMpO1xuICAgICAgfVxuICAgICAgY29uc3QgbXRoID0gaXNCdWlsZEluID8gdGhpcy5zcnZbY29tcF0gOiB0aGlzLnNydi5jcmVhdGU7XG4gICAgICBjb25zdCBzdWJqZWN0OiBOek1vZGFsUmVmPE56U2FmZUFueSwgTnpTYWZlQW55PiA9IG10aC5jYWxsKHRoaXMuc3J2LCB7XG4gICAgICAgIG56V3JhcENsYXNzTmFtZTogY2xzLmpvaW4oJyAnKSxcbiAgICAgICAgbnpDb250ZW50OiBpc0J1aWxkSW4gPyB1bmRlZmluZWQgOiBjb21wLFxuICAgICAgICBueldpZHRoOiB3aWR0aCA/IHdpZHRoIDogdW5kZWZpbmVkLFxuICAgICAgICBuekZvb3RlcjogbnVsbCxcbiAgICAgICAgbnpEYXRhOiBwYXJhbXMsXG4gICAgICAgIC4uLm1vZGFsT3B0aW9uc1xuICAgICAgfSBhcyBNb2RhbE9wdGlvbnMpO1xuICAgICAgLy8g5L+d55WZIG56Q29tcG9uZW50UGFyYW1zIOWOn+aciemjjuagvO+8jOS9huS+neeEtuWPr+S7pemAmui/hyBASW5qZWN0KE5aX01PREFMX0RBVEEpIOiOt+WPllxuICAgICAgaWYgKHN1YmplY3QuY29tcG9uZW50SW5zdGFuY2UgIT0gbnVsbCAmJiB1c2VOekRhdGEgIT09IHRydWUpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihzdWJqZWN0LmNvbXBvbmVudEluc3RhbmNlLCBwYXJhbXMpO1xuICAgICAgfVxuICAgICAgc3ViamVjdC5hZnRlck9wZW5cbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRyYWdPcHRpb25zICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgZHJhZ1JlZiA9IHRoaXMuY3JlYXRlRHJhZ1JlZihkcmFnT3B0aW9ucywgYC4ke2RyYWdXcmFwQ2xzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGZpbHRlcigoKSA9PiBmb2N1cyAhPSBudWxsKSxcbiAgICAgICAgICBkZWxheShtb2RhbE9wdGlvbnM/Lm56Tm9BbmltYXRpb24gPyAxMCA6IDI0MSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBidG5zID0gc3ViamVjdFxuICAgICAgICAgICAgLmdldEVsZW1lbnQoKVxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KCcuYW50LW1vZGFsLWNvbmZpcm0tYnRucywgLm1vZGFsLWZvb3RlcicpXG4gICAgICAgICAgICA/LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEJ1dHRvbkVsZW1lbnQ+KCcuYW50LWJ0bicpO1xuICAgICAgICAgIGNvbnN0IGJ0blNpemUgPSBidG5zPy5sZW5ndGggPz8gMDtcbiAgICAgICAgICBsZXQgZWw6IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gICAgICAgICAgaWYgKGJ0blNpemUgPT09IDEpIHtcbiAgICAgICAgICAgIGVsID0gYnRucyFbMF07XG4gICAgICAgICAgfSBlbHNlIGlmIChidG5TaXplID4gMSkge1xuICAgICAgICAgICAgZWwgPSBidG5zIVtmb2N1cyA9PT0gJ29rJyA/IDEgOiAwXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGVsICE9IG51bGwpIHtcbiAgICAgICAgICAgIGVsLmZvY3VzKCk7XG4gICAgICAgICAgICBlbC5kYXRhc2V0LmZvY3VzZWQgPSBmb2N1cztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgc3ViamVjdC5hZnRlckNsb3NlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKChyZXM6IE56U2FmZUFueSkgPT4ge1xuICAgICAgICBpZiAob3B0aW9ucyEuZXhhY3QgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAocmVzICE9IG51bGwpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQocmVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xuICAgICAgICB9XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIGRyYWdSZWY/LmRpc3Bvc2UoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOaehOW7uumdmeaAgeahhu+8jOeCueWHu+iSmeWxguS4jeWFgeiuuOWFs+mXrVxuICAgKlxuICAgKiBAcGFyYW0gY29tcCDnu4Tku7ZcbiAgICogQHBhcmFtIHBhcmFtcyDnu4Tku7blj4LmlbBcbiAgICogQHBhcmFtIG9wdGlvbnMg6aKd5aSW5Y+C5pWwXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHRoaXMubW9kYWxIZWxwZXIub3BlbihGb3JtRWRpdENvbXBvbmVudCwgeyBpIH0pLnN1YnNjcmliZShyZXMgPT4gdGhpcy5sb2FkKCkpO1xuICAgKiAvLyDlr7nkuo7nu4Tku7bnmoTmiJDlip8m5YWz6Zet55qE5aSE55CG6K+05piOXG4gICAqIC8vIOaIkOWKn++8jOWFtuS4rSBgbnpNb2RhbFJlZmAg5oyH55uu5qCH57uE5Lu25Zyo5p6E6YCg5Ye95pWwIGBOek1vZGFsUmVmYCDlj5jph4/lkI1cbiAgICogdGhpcy5uek1vZGFsUmVmLmNsb3NlKGRhdGEpO1xuICAgKiB0aGlzLm56TW9kYWxSZWYuY2xvc2UoKTtcbiAgICogLy8g5YWz6ZetXG4gICAqIHRoaXMubnpNb2RhbFJlZi5kZXN0cm95KCk7XG4gICAqL1xuICBjcmVhdGVTdGF0aWMoXG4gICAgY29tcDogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IFR5cGU8TnpTYWZlQW55PixcbiAgICBwYXJhbXM/OiBOelNhZmVBbnksXG4gICAgb3B0aW9ucz86IE1vZGFsSGVscGVyT3B0aW9uc1xuICApOiBPYnNlcnZhYmxlPE56U2FmZUFueT4ge1xuICAgIGNvbnN0IG1vZGFsT3B0aW9ucyA9IHtcbiAgICAgIG56TWFza0Nsb3NhYmxlOiBmYWxzZSxcbiAgICAgIC4uLihvcHRpb25zICYmIG9wdGlvbnMubW9kYWxPcHRpb25zKVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKGNvbXAsIHBhcmFtcywgeyAuLi5vcHRpb25zLCBtb2RhbE9wdGlvbnMgfSk7XG4gIH1cbn1cbiJdfQ==