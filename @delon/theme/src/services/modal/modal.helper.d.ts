import { TemplateRef, Type } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { ModalOptions, NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';
export interface ModalHelperOptions {
    /** 大小；例如：lg、600，默认：`lg` */
    size?: 'sm' | 'md' | 'lg' | 'xl' | '' | number;
    /** 对话框 [ModalOptions](https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/components/modal/modal-types.ts) 参数 */
    modalOptions?: ModalOptions;
    /** 是否精准（默认：`true`），若返回值非空值（`null`或`undefined`）视为成功，否则视为错误 */
    exact?: boolean;
    /** 是否包裹标签页，修复模态包含标签间距问题 */
    includeTabs?: boolean;
}
/**
 * 对话框辅助类
 */
export declare class ModalHelper {
    private srv;
    constructor(srv: NzModalService);
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
    create(comp: TemplateRef<NzSafeAny> | Type<NzSafeAny>, params?: NzSafeAny, options?: ModalHelperOptions): Observable<NzSafeAny>;
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
    createStatic(comp: TemplateRef<NzSafeAny> | Type<NzSafeAny>, params?: NzSafeAny, options?: ModalHelperOptions): Observable<any>;
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
    open(comp: TemplateRef<NzSafeAny> | Type<NzSafeAny>, params?: NzSafeAny, size?: 'sm' | 'md' | 'lg' | 'xl' | '' | number, options?: ModalOptions): Observable<any>;
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
    static(comp: TemplateRef<NzSafeAny> | Type<NzSafeAny>, params?: NzSafeAny, size?: 'sm' | 'md' | 'lg' | 'xl' | '' | number, options?: ModalOptions): Observable<any>;
}
