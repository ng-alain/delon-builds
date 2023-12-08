import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { toNumber, InputNumber } from '@delon/util/decorator';
import * as i1 from '@delon/theme';
import { DelonLocaleModule } from '@delon/theme';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from 'ng-zorro-antd/tooltip';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: G2MiniProgressComponent, deps: [{ token: i1.DelonLocaleService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.6", type: G2MiniProgressComponent, selector: "g2-mini-progress", inputs: { color: "color", target: "target", percent: "percent", strokeWidth: "strokeWidth" }, host: { properties: { "class.g2-mini-progress": "true" } }, exportAs: ["g2MiniProgress"], usesOnChanges: true, ngImport: i0, template: "<div\n  nz-tooltip\n  [nzTooltipTitle]=\"i18n.getData('miniProgress').target + target + '%'\"\n  class=\"g2-mini-progress__target\"\n  [ngStyle]=\"{ 'left.%': target }\"\n>\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n</div>\n<div class=\"g2-mini-progress__wrap\">\n  <div\n    class=\"g2-mini-progress__value\"\n    [ngStyle]=\"{ 'background-color': color, 'width.%': percent, 'height.px': strokeWidth }\"\n  ></div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i3.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputNumber()
], G2MiniProgressComponent.prototype, "target", void 0);
__decorate([
    InputNumber()
], G2MiniProgressComponent.prototype, "percent", void 0);
__decorate([
    InputNumber()
], G2MiniProgressComponent.prototype, "strokeWidth", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: G2MiniProgressComponent, decorators: [{
            type: Component,
            args: [{ selector: 'g2-mini-progress', exportAs: 'g2MiniProgress', host: { '[class.g2-mini-progress]': 'true' }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div\n  nz-tooltip\n  [nzTooltipTitle]=\"i18n.getData('miniProgress').target + target + '%'\"\n  class=\"g2-mini-progress__target\"\n  [ngStyle]=\"{ 'left.%': target }\"\n>\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n</div>\n<div class=\"g2-mini-progress__wrap\">\n  <div\n    class=\"g2-mini-progress__value\"\n    [ngStyle]=\"{ 'background-color': color, 'width.%': percent, 'height.px': strokeWidth }\"\n  ></div>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1.DelonLocaleService }, { type: i0.ChangeDetectorRef }], propDecorators: { color: [{
                type: Input
            }], target: [{
                type: Input
            }], percent: [{
                type: Input
            }], strokeWidth: [{
                type: Input
            }] } });

const COMPONENTS = [G2MiniProgressComponent];
class G2MiniProgressModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: G2MiniProgressModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.6", ngImport: i0, type: G2MiniProgressModule, declarations: [G2MiniProgressComponent], imports: [CommonModule, DelonLocaleModule, NzToolTipModule], exports: [G2MiniProgressComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: G2MiniProgressModule, imports: [CommonModule, DelonLocaleModule, NzToolTipModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: G2MiniProgressModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, DelonLocaleModule, NzToolTipModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { G2MiniProgressComponent, G2MiniProgressModule };
//# sourceMappingURL=mini-progress.mjs.map
