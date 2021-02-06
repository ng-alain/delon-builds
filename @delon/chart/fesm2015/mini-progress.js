import { __decorate, __metadata } from 'tslib';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ChangeDetectorRef, Input, NgModule } from '@angular/core';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { toNumber, InputNumber } from '@delon/util/decorator';
import { CommonModule } from '@angular/common';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

class G2MiniProgressComponent {
    constructor(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.color = '#1890FF';
    }
    fixNum(value) {
        return Math.min(Math.max(toNumber(value), 0), 100);
    }
    ngOnChanges() {
        this.target = this.fixNum(this.target);
        this.percent = this.fixNum(this.percent);
        this.cdr.detectChanges();
    }
}
G2MiniProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-mini-progress',
                exportAs: 'g2MiniProgress',
                template: "<div nz-tooltip [nzTooltipTitle]=\"i18n.getData('miniProgress').target + target + '%'\" class=\"g2-mini-progress__target\" [ngStyle]=\"{ 'left.%': target }\">\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n</div>\n<div class=\"g2-mini-progress__wrap\">\n  <div class=\"g2-mini-progress__value\" [ngStyle]=\"{ 'background-color': color, 'width.%': percent, 'height.px': strokeWidth }\"></div>\n</div>\n",
                host: { '[class.g2-mini-progress]': 'true' },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
/** @nocollapse */
G2MiniProgressComponent.ctorParameters = () => [
    { type: DelonLocaleService },
    { type: ChangeDetectorRef }
];
G2MiniProgressComponent.propDecorators = {
    color: [{ type: Input }],
    target: [{ type: Input }],
    percent: [{ type: Input }],
    strokeWidth: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], G2MiniProgressComponent.prototype, "target", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], G2MiniProgressComponent.prototype, "percent", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], G2MiniProgressComponent.prototype, "strokeWidth", void 0);

const COMPONENTS = [G2MiniProgressComponent];
class G2MiniProgressModule {
}
G2MiniProgressModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonLocaleModule, NzToolTipModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { G2MiniProgressComponent, G2MiniProgressModule };
//# sourceMappingURL=mini-progress.js.map
