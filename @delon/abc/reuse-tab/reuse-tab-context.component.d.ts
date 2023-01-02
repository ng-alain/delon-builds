import { EventEmitter, OnDestroy } from '@angular/core';
import { ReuseTabContextService } from './reuse-tab-context.service';
import { ReuseContextCloseEvent, ReuseContextI18n } from './reuse-tab.interfaces';
import * as i0 from "@angular/core";
export declare class ReuseTabContextComponent implements OnDestroy {
    private srv;
    private sub$;
    set i18n(value: ReuseContextI18n | undefined);
    readonly change: EventEmitter<ReuseContextCloseEvent>;
    constructor(srv: ReuseTabContextService);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReuseTabContextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReuseTabContextComponent, "reuse-tab-context", never, { "i18n": "i18n"; }, { "change": "change"; }, never, never, false, never>;
}
