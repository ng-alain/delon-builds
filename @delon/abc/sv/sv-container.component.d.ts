import { TemplateRef } from '@angular/core';
import { AlainConfigService, NumberInput } from '@delon/util';
import * as i0 from "@angular/core";
export declare class SVContainerComponent {
    static ngAcceptInputType_gutter: NumberInput;
    static ngAcceptInputType_labelWidth: NumberInput;
    static ngAcceptInputType_col: NumberInput;
    title: string | TemplateRef<void>;
    size: 'small' | 'large';
    /** 列表项间距，单位为 `px` */
    gutter: number;
    layout: 'horizontal' | 'vertical';
    labelWidth: number;
    /** 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定 */
    col: number;
    default: boolean;
    constructor(configSrv: AlainConfigService);
    static ɵfac: i0.ɵɵFactoryDef<SVContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SVContainerComponent, "sv-container, [sv-container]", ["svContainer"], { "title": "title"; "size": "size"; "gutter": "gutter"; "layout": "layout"; "labelWidth": "labelWidth"; "col": "col"; "default": "default"; }, {}, never, ["*"]>;
}
