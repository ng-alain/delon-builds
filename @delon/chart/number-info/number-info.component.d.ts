import { TemplateRef, ElementRef, Renderer2, OnChanges, ChangeDetectorRef } from '@angular/core';
export declare class NumberInfoComponent implements OnChanges {
    private el;
    private renderer;
    private cd;
    _title: string;
    _titleTpl: TemplateRef<any>;
    /** 标题 */
    title: string | TemplateRef<any>;
    _subTitle: string;
    _subTitleTpl: TemplateRef<any>;
    /** 子标题 */
    subTitle: string | TemplateRef<any>;
    _total: string;
    _totalTpl: TemplateRef<any>;
    /** 总量 */
    total: string | TemplateRef<any>;
    _isSubTotal: boolean;
    _subTotal: string;
    _subTotalTpl: TemplateRef<any>;
    /** 总量后缀 */
    subTotal: string | TemplateRef<any>;
    /** 子总量 */
    suffix: string;
    /** 增加状态 */
    status: 'up' | 'down';
    /** 状态样式 */
    theme: 'light' | 'default';
    /** 设置数字和描述直接的间距（像素） */
    gap: any;
    private _gap;
    constructor(el: ElementRef, renderer: Renderer2, cd: ChangeDetectorRef);
    _classMap: string[];
    setClass(): void;
    ngOnChanges(): void;
}
