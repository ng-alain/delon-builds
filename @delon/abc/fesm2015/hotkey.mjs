import * as i0 from '@angular/core';
import { Directive, NgModule, Injectable } from '@angular/core';

class HotkeyDirective {
}
HotkeyDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: HotkeyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
HotkeyDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.6", type: HotkeyDirective, selector: "[hotkey]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: HotkeyDirective, decorators: [{
            type: Directive,
            args: [{ selector: '[hotkey]' }]
        }] });

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

class HotkeyService {
}
HotkeyService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: HotkeyService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
HotkeyService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: HotkeyService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: HotkeyService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });

function Hotkey() {
    return 1;
}

/**
 * Generated bundle index. Do not edit.
 */

export { Hotkey, HotkeyDirective, HotkeyModule, HotkeyService };
//# sourceMappingURL=hotkey.mjs.map
