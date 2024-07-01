import { Platform } from '@angular/cdk/platform';
import * as i0 from '@angular/core';
import { inject, ElementRef, DestroyRef, booleanAttribute, numberAttribute, Directive, Input, NgModule } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { timer } from 'rxjs';

class AutoFocusDirective {
    constructor() {
        this.el = inject(ElementRef).nativeElement;
        this.platform = inject(Platform);
        this.destroy$ = inject(DestroyRef);
        this.enabled = true;
        this.delay = 300;
    }
    ngAfterViewInit() {
        const el = this.el;
        if (!this.platform.isBrowser || !(el instanceof HTMLElement) || !this.enabled) {
            return;
        }
        timer(this.delay)
            .pipe(takeUntilDestroyed(this.destroy$))
            .subscribe(() => el.focus({ preventScroll: false }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: AutoFocusDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "16.1.0", version: "18.0.5", type: AutoFocusDirective, isStandalone: true, selector: "[auto-focus], input[autofocus=\"autofocus\"], textarea[autofocus=\"autofocus\"]", inputs: { enabled: ["enabled", "enabled", booleanAttribute], delay: ["delay", "delay", numberAttribute] }, exportAs: ["autoFocus"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: AutoFocusDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[auto-focus], input[autofocus="autofocus"], textarea[autofocus="autofocus"]',
                    exportAs: 'autoFocus',
                    standalone: true
                }]
        }], propDecorators: { enabled: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], delay: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }] } });

const COMPONENTS = [AutoFocusDirective];
class AutoFocusModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: AutoFocusModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.5", ngImport: i0, type: AutoFocusModule, imports: [AutoFocusDirective], exports: [AutoFocusDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: AutoFocusModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: AutoFocusModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AutoFocusDirective, AutoFocusModule };
//# sourceMappingURL=auto-focus.mjs.map
