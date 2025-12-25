import * as i0 from '@angular/core';
import { OnInit, OnChanges, TemplateRef, EventEmitter } from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from 'ng-zorro-antd/icon';
import * as i3 from 'ng-zorro-antd/core/outlet';

declare class QuickMenuComponent implements OnInit, OnChanges {
    private readonly cdr;
    private readonly el;
    private readonly render;
    ctrlStyle: Record<string, string | undefined>;
    icon: string | TemplateRef<void>;
    top: number;
    width: number;
    bgColor?: string;
    borderColor?: string;
    expand: boolean;
    readonly expandChange: EventEmitter<boolean>;
    private show;
    private initFlag;
    _click(): void;
    private setStyle;
    ngOnInit(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<QuickMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QuickMenuComponent, "quick-menu", ["quickMenu"], { "icon": { "alias": "icon"; "required": false; }; "top": { "alias": "top"; "required": false; }; "width": { "alias": "width"; "required": false; }; "bgColor": { "alias": "bgColor"; "required": false; }; "borderColor": { "alias": "borderColor"; "required": false; }; "expand": { "alias": "expand"; "required": false; }; }, { "expandChange": "expandChange"; }, never, ["*"], true, never>;
    static ngAcceptInputType_top: unknown;
    static ngAcceptInputType_width: unknown;
    static ngAcceptInputType_expand: unknown;
}

declare class QuickMenuModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<QuickMenuModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<QuickMenuModule, never, [typeof i1.CommonModule, typeof i2.NzIconModule, typeof i3.NzOutletModule, typeof QuickMenuComponent], [typeof QuickMenuComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<QuickMenuModule>;
}

export { QuickMenuComponent, QuickMenuModule };
