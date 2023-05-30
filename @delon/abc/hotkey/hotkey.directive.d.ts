import { Platform } from '@angular/cdk/platform';
import { ElementRef, NgZone, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class HotkeyDirective implements OnDestroy {
    private el;
    private ngZone;
    private platform;
    /**
     * Specify [hotkey format](https://github.com/github/hotkey#hotkey-string-format)
     *
     * 指定[热键格式](https://github.com/github/hotkey#hotkey-string-format)
     */
    set hotkey(key: string);
    constructor(el: ElementRef<HTMLElement>, ngZone: NgZone, platform: Platform);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HotkeyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HotkeyDirective, "[hotkey]", never, { "hotkey": { "alias": "hotkey"; "required": false; }; }, {}, never, never, false, never>;
}
