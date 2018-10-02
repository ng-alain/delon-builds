import { ElementRef, Renderer2, OnInit, OnChanges, TemplateRef } from '@angular/core';
import { SVConfig } from './view.config';
export declare class SVContainerComponent implements OnInit, OnChanges {
    private ren;
    private el;
    _title: string;
    _titleTpl: TemplateRef<any>;
    title: string | TemplateRef<any>;
    size: 'small' | 'large';
    /** 列表项间距，单位为 `px` */
    gutter: number;
    layout: 'horizontal' | 'vertical';
    labelWidth: number;
    /** 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定 */
    col: number;
    default: boolean;
    constructor(el: ElementRef, ren: Renderer2, cog: SVConfig);
    private setClass;
    ngOnInit(): void;
    ngOnChanges(): void;
}
