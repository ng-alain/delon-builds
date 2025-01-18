import { Platform } from '@angular/cdk/platform';
import * as i0 from '@angular/core';
import { inject, ElementRef, DestroyRef, input, booleanAttribute, numberAttribute, Directive, NgModule } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { timer, take } from 'rxjs';

class AutoFocusDirective {
    constructor() {
        this.el = inject(ElementRef).nativeElement;
        this.platform = inject(Platform);
        this.destroy$ = inject(DestroyRef);
        this.enabled = input(true, { transform: booleanAttribute });
        this.delay = input(300, { transform: numberAttribute });
    }
    ngAfterViewInit() {
        const el = this.el;
        if (!this.platform.isBrowser || !(el instanceof HTMLElement) || !this.enabled()) {
            return;
        }
        timer(this.delay())
            .pipe(takeUntilDestroyed(this.destroy$), take(1))
            .subscribe(() => el.focus({ preventScroll: false }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: AutoFocusDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "17.1.0", version: "19.1.1", type: AutoFocusDirective, isStandalone: true, selector: "[auto-focus], input[autofocus=\"autofocus\"], textarea[autofocus=\"autofocus\"]", inputs: { enabled: { classPropertyName: "enabled", publicName: "enabled", isSignal: true, isRequired: false, transformFunction: null }, delay: { classPropertyName: "delay", publicName: "delay", isSignal: true, isRequired: false, transformFunction: null } }, exportAs: ["autoFocus"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: AutoFocusDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[auto-focus], input[autofocus="autofocus"], textarea[autofocus="autofocus"]',
                    exportAs: 'autoFocus'
                }]
        }] });

const COMPONENTS = [AutoFocusDirective];
class AutoFocusModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: AutoFocusModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.1.1", ngImport: i0, type: AutoFocusModule, imports: [AutoFocusDirective], exports: [AutoFocusDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: AutoFocusModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: AutoFocusModule, decorators: [{
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
