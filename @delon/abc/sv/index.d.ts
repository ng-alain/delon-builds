import * as i0 from '@angular/core';
import { OnInit, TemplateRef, AfterViewInit, OnChanges } from '@angular/core';
import { REP_TYPE } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { NzTSType } from 'ng-zorro-antd/core/types';
import * as i1 from '@angular/common';
import * as i2 from '@angular/cdk/observers';
import * as i3 from 'ng-zorro-antd/tooltip';
import * as i4 from 'ng-zorro-antd/icon';
import * as i5 from 'ng-zorro-antd/core/outlet';

declare class SVTitleComponent implements OnInit {
    private readonly el;
    private readonly parentComp;
    private readonly ren;
    constructor();
    private setClass;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SVTitleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SVTitleComponent, "sv-title, [sv-title]", ["svTitle"], {}, {}, never, ["*"], true, never>;
}
declare class SVContainerComponent {
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
    get margin(): Record<string, string>;
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

declare class SVValueComponent {
    prefix?: string;
    unit?: string;
    tooltip?: NzTSType | null;
    size: 'large' | 'small' | 'default';
    static ɵfac: i0.ɵɵFactoryDeclaration<SVValueComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SVValueComponent, "sv-value, [sv-value]", ["svValue"], { "prefix": { "alias": "prefix"; "required": false; }; "unit": { "alias": "unit"; "required": false; }; "tooltip": { "alias": "tooltip"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], true, never>;
}

declare class SVComponent implements AfterViewInit, OnChanges {
    private readonly el;
    private readonly parentComp;
    private readonly rep;
    private readonly ren;
    private readonly conEl;
    private clsMap;
    _noColon: boolean;
    optional?: string | TemplateRef<void> | null;
    optionalHelp?: string | TemplateRef<void> | null;
    optionalHelpColor?: string;
    label?: string | TemplateRef<void> | null;
    unit?: string | TemplateRef<void> | null;
    col?: number | null;
    default?: boolean | null;
    type?: 'primary' | 'success' | 'danger' | 'warning';
    noColon?: boolean | null;
    hideLabel: boolean;
    get paddingValue(): number | null;
    get labelWidth(): number | null | undefined;
    constructor();
    private setClass;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    checkContent(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SVComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SVComponent, "sv, [sv]", ["sv"], { "optional": { "alias": "optional"; "required": false; }; "optionalHelp": { "alias": "optionalHelp"; "required": false; }; "optionalHelpColor": { "alias": "optionalHelpColor"; "required": false; }; "label": { "alias": "label"; "required": false; }; "unit": { "alias": "unit"; "required": false; }; "col": { "alias": "col"; "required": false; }; "default": { "alias": "default"; "required": false; }; "type": { "alias": "type"; "required": false; }; "noColon": { "alias": "noColon"; "required": false; }; "hideLabel": { "alias": "hideLabel"; "required": false; }; }, {}, never, ["*"], true, never>;
    static ngAcceptInputType_col: unknown;
    static ngAcceptInputType_default: unknown;
    static ngAcceptInputType_noColon: unknown;
    static ngAcceptInputType_hideLabel: unknown;
}

declare class SVModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SVModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SVModule, never, [typeof i1.CommonModule, typeof i2.ObserversModule, typeof i3.NzToolTipModule, typeof i4.NzIconModule, typeof i5.NzOutletModule, typeof SVContainerComponent, typeof SVComponent, typeof SVTitleComponent, typeof SVValueComponent], [typeof SVContainerComponent, typeof SVComponent, typeof SVTitleComponent, typeof SVValueComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SVModule>;
}

export { SVComponent, SVContainerComponent, SVModule, SVTitleComponent, SVValueComponent };
