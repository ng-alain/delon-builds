import * as _angular_core from '@angular/core';
import { TemplateRef } from '@angular/core';
import { REP_TYPE } from '@delon/theme';
import { NzTSType } from 'ng-zorro-antd/core/types';
import * as i1 from '@angular/common';
import * as i2 from '@angular/cdk/observers';
import * as i3 from 'ng-zorro-antd/tooltip';
import * as i4 from 'ng-zorro-antd/icon';
import * as i5 from 'ng-zorro-antd/core/outlet';

declare class SVTitleComponent {
    private readonly parentComp;
    protected padding: _angular_core.Signal<{
        'padding-left': string;
        'padding-right': string;
    }>;
    constructor();
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SVTitleComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<SVTitleComponent, "sv-title, [sv-title]", ["svTitle"], {}, {}, never, ["*"], true, never>;
}
declare class SVContainerComponent {
    readonly colInCon: _angular_core.InputSignalWithTransform<REP_TYPE | null, unknown>;
    readonly title: _angular_core.InputSignal<string | TemplateRef<void> | undefined>;
    readonly size: _angular_core.InputSignal<"small" | "large" | "default">;
    /** 列表项间距，单位为 `px` */
    readonly gutter: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly layout: _angular_core.InputSignal<"horizontal" | "vertical">;
    readonly labelWidth: _angular_core.InputSignalWithTransform<number | undefined, unknown>;
    /** 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定 */
    readonly col: _angular_core.InputSignalWithTransform<number, unknown>;
    readonly default: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly noColon: _angular_core.InputSignalWithTransform<boolean, unknown>;
    readonly bordered: _angular_core.InputSignalWithTransform<boolean, unknown>;
    protected margin: _angular_core.Signal<{
        'margin-left'?: undefined;
        'margin-right'?: undefined;
    } | {
        'margin-left': string;
        'margin-right': string;
    }>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SVContainerComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<SVContainerComponent, "sv-container, [sv-container]", ["svContainer"], { "colInCon": { "alias": "sv-container"; "required": false; "isSignal": true; }; "title": { "alias": "title"; "required": false; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; "gutter": { "alias": "gutter"; "required": false; "isSignal": true; }; "layout": { "alias": "layout"; "required": false; "isSignal": true; }; "labelWidth": { "alias": "labelWidth"; "required": false; "isSignal": true; }; "col": { "alias": "col"; "required": false; "isSignal": true; }; "default": { "alias": "default"; "required": false; "isSignal": true; }; "noColon": { "alias": "noColon"; "required": false; "isSignal": true; }; "bordered": { "alias": "bordered"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class SVValueComponent {
    prefix?: string;
    unit?: string;
    tooltip?: NzTSType | null;
    size: 'large' | 'small' | 'default';
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SVValueComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<SVValueComponent, "sv-value, [sv-value]", ["svValue"], { "prefix": { "alias": "prefix"; "required": false; }; "unit": { "alias": "unit"; "required": false; }; "tooltip": { "alias": "tooltip"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], true, never>;
}

declare class SVComponent {
    private readonly parentComp;
    private readonly rep;
    private readonly conEl;
    protected _noColon: _angular_core.Signal<boolean>;
    readonly optional: _angular_core.InputSignal<string | TemplateRef<void> | null | undefined>;
    readonly optionalHelp: _angular_core.InputSignal<string | TemplateRef<void> | null | undefined>;
    readonly optionalHelpColor: _angular_core.InputSignal<string | undefined>;
    readonly label: _angular_core.InputSignal<string | TemplateRef<void> | null | undefined>;
    readonly unit: _angular_core.InputSignal<string | TemplateRef<void> | null | undefined>;
    readonly col: _angular_core.InputSignalWithTransform<number | null, unknown>;
    readonly default: _angular_core.InputSignalWithTransform<boolean | null, unknown>;
    readonly type: _angular_core.InputSignal<"primary" | "success" | "danger" | "warning" | null | undefined>;
    readonly noColon: _angular_core.InputSignalWithTransform<boolean | null, unknown>;
    readonly hideLabel: _angular_core.InputSignalWithTransform<boolean, unknown>;
    protected paddingValue: _angular_core.Signal<number | null>;
    protected labelWidth: _angular_core.Signal<number | null | undefined>;
    protected cls: _angular_core.Signal<string[]>;
    constructor();
    checkContent(): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SVComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<SVComponent, "sv, [sv]", ["sv"], { "optional": { "alias": "optional"; "required": false; "isSignal": true; }; "optionalHelp": { "alias": "optionalHelp"; "required": false; "isSignal": true; }; "optionalHelpColor": { "alias": "optionalHelpColor"; "required": false; "isSignal": true; }; "label": { "alias": "label"; "required": false; "isSignal": true; }; "unit": { "alias": "unit"; "required": false; "isSignal": true; }; "col": { "alias": "col"; "required": false; "isSignal": true; }; "default": { "alias": "default"; "required": false; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; "noColon": { "alias": "noColon"; "required": false; "isSignal": true; }; "hideLabel": { "alias": "hideLabel"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}

declare class SVModule {
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<SVModule, never>;
    static ɵmod: _angular_core.ɵɵNgModuleDeclaration<SVModule, never, [typeof i1.CommonModule, typeof i2.ObserversModule, typeof i3.NzTooltipModule, typeof i4.NzIconModule, typeof i5.NzOutletModule, typeof SVContainerComponent, typeof SVComponent, typeof SVTitleComponent, typeof SVValueComponent], [typeof SVContainerComponent, typeof SVComponent, typeof SVTitleComponent, typeof SVValueComponent]>;
    static ɵinj: _angular_core.ɵɵInjectorDeclaration<SVModule>;
}

export { SVComponent, SVContainerComponent, SVModule, SVTitleComponent, SVValueComponent };
