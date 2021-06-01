import { __decorate, __metadata } from 'tslib';
import { Component, forwardRef, ChangeDetectionStrategy, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { toNumber, InputBoolean } from '@delon/util/decorator';
import { CommonModule } from '@angular/common';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

class PriceComponent {
    constructor() {
        this.onChange = () => { };
        this.onTouched = () => { };
        this.value = null;
        this.nzId = null;
        this.size = 'default';
        this.min = -Infinity;
        this.max = Infinity;
        this.placeHolder = '';
        this.step = 1;
        this.disabled = false;
        this.autoFocus = false;
    }
    handlValue(val) {
        this.onChange(val);
    }
    writeValue(value) {
        this.value = toNumber(value, null);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
PriceComponent.decorators = [
    { type: Component, args: [{
                selector: 'price',
                exportAs: 'price',
                template: `
    <nz-input-number
      [(ngModel)]="value"
      (ngModelChange)="handlValue($event)"
      [nzSize]="size"
      [nzMin]="min"
      [nzMax]="max"
      [nzPlaceHolder]="placeHolder"
      [nzStep]="step"
      [nzId]="nzId"
      [nzDisabled]="disabled"
      [nzAutoFocus]="autoFocus"
    ></nz-input-number>
  `,
                host: {
                    '[class.price]': `true`,
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => PriceComponent),
                        multi: true,
                    },
                ],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
PriceComponent.propDecorators = {
    nzId: [{ type: Input }],
    size: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    placeHolder: [{ type: Input }],
    step: [{ type: Input }],
    disabled: [{ type: Input }],
    autoFocus: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], PriceComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], PriceComponent.prototype, "autoFocus", void 0);

const COMPONENTS = [PriceComponent];
class PriceModule {
}
PriceModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, NzInputNumberModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { PriceComponent, PriceModule };
//# sourceMappingURL=price.js.map
