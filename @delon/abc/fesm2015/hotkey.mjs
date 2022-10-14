import * as i0 from '@angular/core';
import { Directive, Input, NgModule } from '@angular/core';
import { install, uninstall } from '@github/hotkey';
import * as i1 from '@angular/cdk/platform';

class HotkeyDirective {
    constructor(el, ngZone, platform) {
        this.el = el;
        this.ngZone = ngZone;
        this.platform = platform;
    }
    /**
     * Specify [hotkey format](https://github.com/github/hotkey#hotkey-string-format)
     *
     * 指定[热键格式](https://github.com/github/hotkey#hotkey-string-format)
     */
    set hotkey(key) {
        if (!this.platform.isBrowser)
            return;
        this.ngZone.runOutsideAngular(() => install(this.el.nativeElement, key));
    }
    ngOnDestroy() {
        this.ngZone.runOutsideAngular(() => uninstall(this.el.nativeElement));
    }
}
HotkeyDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: HotkeyDirective, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: i1.Platform }], target: i0.ɵɵFactoryTarget.Directive });
HotkeyDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.6", type: HotkeyDirective, selector: "[hotkey]", inputs: { hotkey: "hotkey" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: HotkeyDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[hotkey]' }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i1.Platform }]; }, propDecorators: { hotkey: [{
                type: Input,
                args: ['hotkey']
            }] } });

const DIRECTIVES = [HotkeyDirective];
class HotkeyModule {
}
HotkeyModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: HotkeyModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HotkeyModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.6", ngImport: i0, type: HotkeyModule, declarations: [HotkeyDirective], exports: [HotkeyDirective] });
HotkeyModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: HotkeyModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: HotkeyModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: DIRECTIVES,
                    exports: DIRECTIVES
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { HotkeyDirective, HotkeyModule };
//# sourceMappingURL=hotkey.mjs.map
