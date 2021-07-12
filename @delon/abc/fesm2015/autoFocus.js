import { __decorate } from 'tslib';
import { Directive, ElementRef, ChangeDetectorRef, Input, NgModule } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';

class AutoFocusDirective {
    constructor(el, cdr) {
        this.el = el;
        this.cdr = cdr;
        this.enabled = true;
        this.delay = 300;
    }
    ngAfterViewInit() {
        const el = this.el.nativeElement;
        if (!(el instanceof HTMLElement) || !this.enabled) {
            return;
        }
        setTimeout(() => {
            el.focus({ preventScroll: false });
            this.cdr.markForCheck();
        }, this.delay);
    }
}
AutoFocusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[auto-focus], input[autofocus="autofocus"], textarea[autofocus="autofocus"]',
                exportAs: 'autoFocus',
            },] }
];
AutoFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
AutoFocusDirective.propDecorators = {
    enabled: [{ type: Input }],
    delay: [{ type: Input }]
};
__decorate([
    InputBoolean()
], AutoFocusDirective.prototype, "enabled", void 0);
__decorate([
    InputNumber()
], AutoFocusDirective.prototype, "delay", void 0);

const COMPONENTS = [AutoFocusDirective];
class AutoFocusModule {
}
AutoFocusModule.decorators = [
    { type: NgModule, args: [{
                declarations: COMPONENTS,
                exports: COMPONENTS,
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { AutoFocusDirective, AutoFocusModule };
//# sourceMappingURL=autoFocus.js.map
