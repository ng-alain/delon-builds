import { ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { BooleanInput } from '@delon/util/decorator';
import * as i0 from "@angular/core";
export declare class FooterToolbarComponent implements OnInit, OnDestroy {
    private el;
    private renderer;
    private doc;
    static ngAcceptInputType_errorCollect: BooleanInput;
    errorCollect: boolean;
    extra: string | TemplateRef<void>;
    constructor(el: ElementRef, renderer: Renderer2, doc: any);
    private get bodyCls();
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<FooterToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FooterToolbarComponent, "footer-toolbar", ["footerToolbar"], { "errorCollect": "errorCollect"; "extra": "extra"; }, {}, never, ["*"]>;
}
