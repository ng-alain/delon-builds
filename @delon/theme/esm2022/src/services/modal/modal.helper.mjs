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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ModalHelper, deps: [{ token: i1.NzModalService }, { token: i2.DragDrop }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ModalHelper, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: ModalHelper, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1.NzModalService }, { type: i2.DragDrop }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvc3JjL3NlcnZpY2VzL21vZGFsL21vZGFsLmhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFJOUMsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDO0FBNEI5Qjs7R0FFRztBQUVILE1BQU0sT0FBTyxXQUFXO0lBR3RCLFlBQ1UsR0FBbUIsRUFDbkIsSUFBYyxFQUNKLEdBQWM7UUFGeEIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBVTtRQUd0QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUN0QixDQUFDO0lBRU8sYUFBYSxDQUFDLE9BQStCLEVBQUUsT0FBZTtRQUNwRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQW1CLENBQUM7UUFDdEUsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQTRCLENBQUM7UUFDcEQsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBaUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDcEcsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUNiLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxTQUFTLENB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QUFDLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRSxHQUFHLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7OEdBakpVLFdBQVcsd0VBTVosUUFBUTtrSEFOUCxXQUFXLGNBREUsTUFBTTs7MkZBQ25CLFdBQVc7a0JBRHZCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzswQkFPN0IsTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJhZ0Ryb3AsIERyYWdSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBmaWx0ZXIsIHRha2UgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTW9kYWxPcHRpb25zLCBOek1vZGFsU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbW9kYWwnO1xuXG5jb25zdCBDTFNfRFJBRyA9ICdNT0RBTC1EUkFHJztcblxuZXhwb3J0IGludGVyZmFjZSBNb2RhbEhlbHBlck9wdGlvbnMge1xuICAvKiog5aSn5bCP77yb5L6L5aaC77yabGfjgIE2MDDjgIE4MCXvvIzpu5jorqTvvJpgbGdgICovXG4gIHNpemU/OiAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJycgfCBudW1iZXIgfCBzdHJpbmc7XG4gIC8qKiDlr7nor53moYYgW01vZGFsT3B0aW9uc10oaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvY29tcG9uZW50cy9tb2RhbC9tb2RhbC10eXBlcy50cykg5Y+C5pWwICovXG4gIG1vZGFsT3B0aW9ucz86IE1vZGFsT3B0aW9ucztcbiAgLyoqIOaYr+WQpueyvuWHhu+8iOm7mOiupO+8mmB0cnVlYO+8ie+8jOiLpei/lOWbnuWAvOmdnuepuuWAvO+8iGBudWxsYOaIlmB1bmRlZmluZWRg77yJ6KeG5Li65oiQ5Yqf77yM5ZCm5YiZ6KeG5Li66ZSZ6K+vICovXG4gIGV4YWN0PzogYm9vbGVhbjtcbiAgLyoqIOaYr+WQpuWMheijueagh+etvumhte+8jOS/ruWkjeaooeaAgeWMheWQq+agh+etvumXtOi3nemXrumimCAqL1xuICBpbmNsdWRlVGFicz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiDmmK/lkKbmlK/mjIHmi5bliqjvvIzpu5jorqTmmK/pgJrov4fmoIfpopjmnaXop6blj5FcbiAgICovXG4gIGRyYWc/OiBNb2RhbEhlbHBlckRyYWdPcHRpb25zIHwgYm9vbGVhbjtcbiAgLyoqXG4gICAqIOaYr+WQpuW8uuWItuS9v+eUqCBgbnpEYXRhYCDkvKDpgJLlj4LmlbDvvIzoi6XkuLogYGZhbHNlYCDooajnpLrlj4LmlbDkvJrnm7TmjqXmmKDlsITliLDnu4Tku7blrp7kvovkuK3vvIzlhbbku5blgLzlj6rog73pgJrov4cgYE5aX01PREFMX0RBVEFgIOeahOaWueW8j+adpeiOt+WPluWPguaVsO+8jOm7mOiupO+8mmBmYWxzZWBcbiAgICovXG4gIHVzZU56RGF0YT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kYWxIZWxwZXJEcmFnT3B0aW9ucyB7XG4gIC8qKlxuICAgKiDmjIflrprmi5blnLDljLrln5/nmoTnsbvlkI3vvIzoi6XmjIflrprkuLogYG51bGxgIOaXtuihqOekuuaVtOS4quWvueivneahhu+8jOm7mOiupO+8mmAubW9kYWwtaGVhZGVyLCAuYW50LW1vZGFsLXRpdGxlYFxuICAgKi9cbiAgaGFuZGxlQ2xzPzogc3RyaW5nIHwgbnVsbDtcbn1cblxuLyoqXG4gKiDlr7nor53moYbovoXliqnnsbtcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBNb2RhbEhlbHBlciB7XG4gIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3J2OiBOek1vZGFsU2VydmljZSxcbiAgICBwcml2YXRlIGRyYWc6IERyYWdEcm9wLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIGRvYzogTnpTYWZlQW55XG4gICkge1xuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2M7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZURyYWdSZWYob3B0aW9uczogTW9kYWxIZWxwZXJEcmFnT3B0aW9ucywgd3JhcENsczogc3RyaW5nKTogRHJhZ1JlZiB7XG4gICAgY29uc3Qgd3JhcEVsID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHdyYXBDbHMpIGFzIEhUTUxEaXZFbGVtZW50O1xuICAgIGNvbnN0IG1vZGFsRWwgPSB3cmFwRWwuZmlyc3RDaGlsZCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICBjb25zdCBoYW5kZWxFbCA9IG9wdGlvbnMuaGFuZGxlQ2xzID8gd3JhcEVsLnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KG9wdGlvbnMuaGFuZGxlQ2xzKSA6IG51bGw7XG4gICAgaWYgKGhhbmRlbEVsKSB7XG4gICAgICBoYW5kZWxFbC5jbGFzc0xpc3QuYWRkKGAke0NMU19EUkFHfS1IQU5ETEVgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5kcmFnXG4gICAgICAuY3JlYXRlRHJhZyhoYW5kZWxFbCA/PyBtb2RhbEVsKVxuICAgICAgLndpdGhIYW5kbGVzKFtoYW5kZWxFbCA/PyBtb2RhbEVsXSlcbiAgICAgIC53aXRoQm91bmRhcnlFbGVtZW50KHdyYXBFbClcbiAgICAgIC53aXRoUm9vdEVsZW1lbnQobW9kYWxFbCk7XG4gIH1cblxuICAvKipcbiAgICog5p6E5bu65LiA5Liq5a+56K+d5qGGXG4gICAqXG4gICAqIEBwYXJhbSBjb21wIOe7hOS7tlxuICAgKiBAcGFyYW0gcGFyYW1zIOe7hOS7tuWPguaVsFxuICAgKiBAcGFyYW0gb3B0aW9ucyDpop3lpJblj4LmlbBcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogdGhpcy5tb2RhbEhlbHBlci5jcmVhdGUoRm9ybUVkaXRDb21wb25lbnQsIHsgaSB9KS5zdWJzY3JpYmUocmVzID0+IHRoaXMubG9hZCgpKTtcbiAgICogLy8g5a+55LqO57uE5Lu255qE5oiQ5YqfJuWFs+mXreeahOWkhOeQhuivtOaYjlxuICAgKiAvLyDmiJDlip/vvIzlhbbkuK0gYG56TW9kYWxSZWZgIOaMh+ebruagh+e7hOS7tuWcqOaehOmAoOWHveaVsCBgTnpNb2RhbFJlZmAg5Y+Y6YeP5ZCNXG4gICAqIHRoaXMubnpNb2RhbFJlZi5jbG9zZShkYXRhKTtcbiAgICogdGhpcy5uek1vZGFsUmVmLmNsb3NlKCk7XG4gICAqIC8vIOWFs+mXrVxuICAgKiB0aGlzLm56TW9kYWxSZWYuZGVzdHJveSgpO1xuICAgKi9cbiAgY3JlYXRlKFxuICAgIGNvbXA6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBUeXBlPE56U2FmZUFueT4sXG4gICAgcGFyYW1zPzogTnpTYWZlQW55LFxuICAgIG9wdGlvbnM/OiBNb2RhbEhlbHBlck9wdGlvbnNcbiAgKTogT2JzZXJ2YWJsZTxOelNhZmVBbnk+IHtcbiAgICBvcHRpb25zID0gZGVlcE1lcmdlKFxuICAgICAge1xuICAgICAgICBzaXplOiAnbGcnLFxuICAgICAgICBleGFjdDogdHJ1ZSxcbiAgICAgICAgaW5jbHVkZVRhYnM6IGZhbHNlXG4gICAgICB9LFxuICAgICAgb3B0aW9uc1xuICAgICk7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8TnpTYWZlQW55PikgPT4ge1xuICAgICAgY29uc3QgeyBzaXplLCBpbmNsdWRlVGFicywgbW9kYWxPcHRpb25zLCBkcmFnLCB1c2VOekRhdGEgfSA9IG9wdGlvbnMgYXMgTW9kYWxIZWxwZXJPcHRpb25zO1xuICAgICAgbGV0IGNsczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGxldCB3aWR0aCA9ICcnO1xuICAgICAgaWYgKHNpemUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzaXplID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHdpZHRoID0gYCR7c2l6ZX1weGA7XG4gICAgICAgIH0gZWxzZSBpZiAoWydzbScsICdtZCcsICdsZycsICd4bCddLmluY2x1ZGVzKHNpemUpKSB7XG4gICAgICAgICAgY2xzLnB1c2goYG1vZGFsLSR7c2l6ZX1gKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aWR0aCA9IHNpemU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpbmNsdWRlVGFicykge1xuICAgICAgICBjbHMucHVzaChgbW9kYWwtaW5jbHVkZS10YWJzYCk7XG4gICAgICB9XG4gICAgICBpZiAobW9kYWxPcHRpb25zICYmIG1vZGFsT3B0aW9ucy5ueldyYXBDbGFzc05hbWUpIHtcbiAgICAgICAgY2xzLnB1c2gobW9kYWxPcHRpb25zLm56V3JhcENsYXNzTmFtZSk7XG4gICAgICAgIGRlbGV0ZSBtb2RhbE9wdGlvbnMubnpXcmFwQ2xhc3NOYW1lO1xuICAgICAgfVxuICAgICAgbGV0IGRyYWdPcHRpb25zOiBNb2RhbEhlbHBlckRyYWdPcHRpb25zIHwgbnVsbDtcbiAgICAgIGxldCBkcmFnV3JhcENscyA9IGAke0NMU19EUkFHfS0keytuZXcgRGF0ZSgpfWA7XG4gICAgICBsZXQgZHJhZ1JlZjogRHJhZ1JlZiB8IG51bGw7XG4gICAgICBpZiAoZHJhZyAhPSBudWxsICYmIGRyYWcgIT09IGZhbHNlKSB7XG4gICAgICAgIGRyYWdPcHRpb25zID0ge1xuICAgICAgICAgIGhhbmRsZUNsczogYC5tb2RhbC1oZWFkZXIsIC5hbnQtbW9kYWwtdGl0bGVgLFxuICAgICAgICAgIC4uLih0eXBlb2YgZHJhZyA9PT0gJ29iamVjdCcgPyBkcmFnIDoge30pXG4gICAgICAgIH07XG4gICAgICAgIGNscy5wdXNoKENMU19EUkFHLCBkcmFnV3JhcENscyk7XG4gICAgICB9XG4gICAgICBjb25zdCBzdWJqZWN0ID0gdGhpcy5zcnYuY3JlYXRlKHtcbiAgICAgICAgbnpXcmFwQ2xhc3NOYW1lOiBjbHMuam9pbignICcpLFxuICAgICAgICBuekNvbnRlbnQ6IGNvbXAsXG4gICAgICAgIG56V2lkdGg6IHdpZHRoID8gd2lkdGggOiB1bmRlZmluZWQsXG4gICAgICAgIG56Rm9vdGVyOiBudWxsLFxuICAgICAgICBuekRhdGE6IHBhcmFtcyxcbiAgICAgICAgLi4ubW9kYWxPcHRpb25zXG4gICAgICB9KTtcbiAgICAgIC8vIOS/neeVmSBuekNvbXBvbmVudFBhcmFtcyDljp/mnInpo47moLzvvIzkvYbkvp3nhLblj6/ku6XpgJrov4cgQEluamVjdChOWl9NT0RBTF9EQVRBKSDojrflj5ZcbiAgICAgIGlmICh1c2VOekRhdGEgIT09IHRydWUpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihzdWJqZWN0LmNvbXBvbmVudEluc3RhbmNlLCBwYXJhbXMpO1xuICAgICAgfVxuICAgICAgc3ViamVjdC5hZnRlck9wZW5cbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gZHJhZ09wdGlvbnMgIT0gbnVsbClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICBkcmFnUmVmID0gdGhpcy5jcmVhdGVEcmFnUmVmKGRyYWdPcHRpb25zISEsIGAuJHtkcmFnV3JhcENsc31gKTtcbiAgICAgICAgfSk7XG4gICAgICBzdWJqZWN0LmFmdGVyQ2xvc2UucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKHJlczogTnpTYWZlQW55KSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zIS5leGFjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlmIChyZXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgZHJhZ1JlZj8uZGlzcG9zZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5p6E5bu66Z2Z5oCB5qGG77yM54K55Ye76JKZ5bGC5LiN5YWB6K645YWz6ZetXG4gICAqXG4gICAqIEBwYXJhbSBjb21wIOe7hOS7tlxuICAgKiBAcGFyYW0gcGFyYW1zIOe7hOS7tuWPguaVsFxuICAgKiBAcGFyYW0gb3B0aW9ucyDpop3lpJblj4LmlbBcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogdGhpcy5tb2RhbEhlbHBlci5vcGVuKEZvcm1FZGl0Q29tcG9uZW50LCB7IGkgfSkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxvYWQoKSk7XG4gICAqIC8vIOWvueS6jue7hOS7tueahOaIkOWKnyblhbPpl63nmoTlpITnkIbor7TmmI5cbiAgICogLy8g5oiQ5Yqf77yM5YW25LitIGBuek1vZGFsUmVmYCDmjIfnm67moIfnu4Tku7blnKjmnoTpgKDlh73mlbAgYE56TW9kYWxSZWZgIOWPmOmHj+WQjVxuICAgKiB0aGlzLm56TW9kYWxSZWYuY2xvc2UoZGF0YSk7XG4gICAqIHRoaXMubnpNb2RhbFJlZi5jbG9zZSgpO1xuICAgKiAvLyDlhbPpl61cbiAgICogdGhpcy5uek1vZGFsUmVmLmRlc3Ryb3koKTtcbiAgICovXG4gIGNyZWF0ZVN0YXRpYyhcbiAgICBjb21wOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgVHlwZTxOelNhZmVBbnk+LFxuICAgIHBhcmFtcz86IE56U2FmZUFueSxcbiAgICBvcHRpb25zPzogTW9kYWxIZWxwZXJPcHRpb25zXG4gICk6IE9ic2VydmFibGU8TnpTYWZlQW55PiB7XG4gICAgY29uc3QgbW9kYWxPcHRpb25zID0ge1xuICAgICAgbnpNYXNrQ2xvc2FibGU6IGZhbHNlLFxuICAgICAgLi4uKG9wdGlvbnMgJiYgb3B0aW9ucy5tb2RhbE9wdGlvbnMpXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoY29tcCwgcGFyYW1zLCB7IC4uLm9wdGlvbnMsIG1vZGFsT3B0aW9ucyB9KTtcbiAgfVxufVxuIl19