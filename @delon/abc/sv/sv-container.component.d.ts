import { OnInit, TemplateRef } from '@angular/core';
import type { REP_TYPE } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import * as i0 from "@angular/core";
export declare class SVTitleComponent implements OnInit {
    private readonly el;
    private readonly parent;
    private readonly ren;
    constructor();
    private setClass;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SVTitleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SVTitleComponent, "sv-title, [sv-title]", ["svTitle"], {}, {}, never, ["*"], true, never>;
}
export declare class SVContainerComponent {
    colInCon?: REP_TYPE;
    title?: string | TemplateRef<void>;
    size?: 'small' | 'large' | 'default';
    /** 列表项间距，单位为 `px` */
    gutter: number;
    layout: 'horizontal' | 'vertical';
    labelWidth?: number;
    /** 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定 */
    col: number;
    default: boolean;
    noColon: boolean;
    bordered: boolean;
    get margin(): {
        [k: string]: number;
    };
    constructor(configSrv: AlainConfigService);
    static ɵfac: i0.ɵɵFactoryDeclaration<SVContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SVContainerComponent, "sv-container, [sv-container]", ["svContainer"], { "colInCon": { "alias": "sv-container"; "required": false; }; "title": { "alias": "title"; "required": false; }; "size": { "alias": "size"; "required": false; }; "gutter": { "alias": "gutter"; "required": false; }; "layout": { "alias": "layout"; "required": false; }; "labelWidth": { "alias": "labelWidth"; "required": false; }; "col": { "alias": "col"; "required": false; }; "default": { "alias": "default"; "required": false; }; "noColon": { "alias": "noColon"; "required": false; }; "bordered": { "alias": "bordered"; "required": false; }; }, {}, never, ["*"], true, never>;
    static ngAcceptInputType_colInCon: unknown;
    static ngAcceptInputType_gutter: unknown;
    static ngAcceptInputType_labelWidth: unknown;
    static ngAcceptInputType_col: unknown;
    static ngAcceptInputType_default: unknown;
    static ngAcceptInputType_noColon: unknown;
    static ngAcceptInputType_bordered: unknown;
}
