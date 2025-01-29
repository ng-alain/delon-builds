import { EventEmitter, OnChanges, OnInit, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class QuickMenuComponent implements OnInit, OnChanges {
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
