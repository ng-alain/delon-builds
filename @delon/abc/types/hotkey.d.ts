import * as i0 from '@angular/core';
import { OnDestroy } from '@angular/core';

declare class HotkeyDirective implements OnDestroy {
    private readonly el;
    private readonly ngZone;
    private readonly platform;
    /**
     * Specify [hotkey format](https://github.com/github/hotkey#hotkey-string-format), you can get the code through [Hotkey Code](https://github.github.com/hotkey/hotkey_mapper.html)
     *
     * 指定[热键格式](https://github.com/github/hotkey#hotkey-string-format)，可以通过 [Hotkey Code](https://github.github.com/hotkey/hotkey_mapper.html) 来获取代码。
     */
    set hotkey(key: string);
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HotkeyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HotkeyDirective, "[hotkey]", never, { "hotkey": { "alias": "hotkey"; "required": false; }; }, {}, never, never, true, never>;
}

declare class HotkeyModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<HotkeyModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<HotkeyModule, never, [typeof HotkeyDirective], [typeof HotkeyDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<HotkeyModule>;
}

export { HotkeyDirective, HotkeyModule };
