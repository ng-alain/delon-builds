import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Directive, Input, NgModule } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import * as i1 from '@angular/cdk/platform';

class AutoFocusDirective {
    constructor(el, cdr, platform) {
        this.el = el;
        this.cdr = cdr;
        this.platform = platform;
        this.enabled = true;
        this.delay = 300;
    }
    ngAfterViewInit() {
        const el = this.el.nativeElement;
        if (!this.platform.isBrowser || !(el instanceof HTMLElement) || !this.enabled) {
            return;
        }
        this._focusoutTimeout = setTimeout(() => {
            el.focus({ preventScroll: false });
            this.cdr.markForCheck();
        }, this.delay);
    }
    ngOnDestroy() {
        if (this._focusoutTimeout) {
            clearTimeout(this._focusoutTimeout);
            this._focusoutTimeout = null;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutoFocusDirective, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.Platform }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.0.4", type: AutoFocusDirective, selector: "[auto-focus], input[autofocus=\"autofocus\"], textarea[autofocus=\"autofocus\"]", inputs: { enabled: "enabled", delay: "delay" }, exportAs: ["autoFocus"], ngImport: i0 }); }
}
__decorate([
    InputBoolean()
], AutoFocusDirective.prototype, "enabled", void 0);
__decorate([
    InputNumber()
], AutoFocusDirective.prototype, "delay", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutoFocusDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[auto-focus], input[autofocus="autofocus"], textarea[autofocus="autofocus"]',
                    exportAs: 'autoFocus'
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.Platform }], propDecorators: { enabled: [{
                type: Input
            }], delay: [{
                type: Input
            }] } });

const COMPONENTS = [AutoFocusDirective];
class AutoFocusModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutoFocusModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.4", ngImport: i0, type: AutoFocusModule, declarations: [AutoFocusDirective], exports: [AutoFocusDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutoFocusModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: AutoFocusModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AutoFocusDirective, AutoFocusModule };
//# sourceMappingURL=auto-focus.mjs.map
