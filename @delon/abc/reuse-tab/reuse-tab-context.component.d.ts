import { EventEmitter } from '@angular/core';
import { ReuseContextCloseEvent, ReuseContextI18n } from './reuse-tab.interfaces';
import * as i0 from "@angular/core";
export declare class ReuseTabContextComponent {
    private readonly srv;
    set i18n(value: ReuseContextI18n | undefined);
    readonly change: EventEmitter<ReuseContextCloseEvent>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ReuseTabContextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReuseTabContextComponent, "reuse-tab-context", never, { "i18n": { "alias": "i18n"; "required": false; }; }, { "change": "change"; }, never, never, true, never>;
}
