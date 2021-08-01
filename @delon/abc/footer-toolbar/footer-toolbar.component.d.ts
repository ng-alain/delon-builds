import { ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { BooleanInput } from '@delon/util/decorator';
export declare class FooterToolbarComponent implements OnInit, OnDestroy {
    private el;
    private renderer;
    private doc;
    static ngAcceptInputType_errorCollect: BooleanInput;
    errorCollect: boolean;
    extra: string | TemplateRef<void>;
    constructor(el: ElementRef, renderer: Renderer2, doc: NzSafeAny);
    private get bodyCls();
    ngOnInit(): void;
    ngOnDestroy(): void;
}
