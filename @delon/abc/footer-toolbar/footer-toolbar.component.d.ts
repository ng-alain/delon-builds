import { OnDestroy, OnInit, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FooterToolbarComponent implements OnInit, OnDestroy {
    private readonly el;
    private readonly renderer;
    private readonly bodyCls;
    errorCollect: boolean;
    extra?: string | TemplateRef<void>;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FooterToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FooterToolbarComponent, "footer-toolbar", ["footerToolbar"], { "errorCollect": { "alias": "errorCollect"; "required": false; }; "extra": { "alias": "extra"; "required": false; }; }, {}, never, ["*"], true, never>;
    static ngAcceptInputType_errorCollect: unknown;
}
