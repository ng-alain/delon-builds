import { __decorate, __metadata } from 'tslib';
import * as i0 from '@angular/core';
import { ɵɵdirectiveInject, ChangeDetectorRef, ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵsetClassMetadata, Component, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { toNumber, InputNumber, DelonUtilModule } from '@delon/util';
import { NzTooltipDirective, NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NgStyle, CommonModule } from '@angular/common';

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
/** @nocollapse */ G2MiniProgressComponent.ɵfac = function G2MiniProgressComponent_Factory(t) { return new (t || G2MiniProgressComponent)(ɵɵdirectiveInject(DelonLocaleService), ɵɵdirectiveInject(ChangeDetectorRef)); };
/** @nocollapse */ G2MiniProgressComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: G2MiniProgressComponent, selector: "g2-mini-progress", inputs: { color: "color", target: "target", percent: "percent", strokeWidth: "strokeWidth" }, host: { properties: { "class.g2-mini-progress": "true" } }, exportAs: ["g2MiniProgress"], usesOnChanges: true, ngImport: i0, template: "<div nz-tooltip [nzTooltipTitle]=\"i18n.getData('miniProgress').target + target + '%'\" class=\"g2-mini-progress__target\" [ngStyle]=\"{ 'left.%': target }\">\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n</div>\n<div class=\"g2-mini-progress__wrap\">\n  <div class=\"g2-mini-progress__value\" [ngStyle]=\"{ 'background-color': color, 'width.%': percent, 'height.px': strokeWidth }\"></div>\n</div>\n", directives: [{ type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipTitle", "nz-tooltip", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(G2MiniProgressComponent, [{
        type: Component,
        args: [{
                selector: 'g2-mini-progress',
                exportAs: 'g2MiniProgress',
                templateUrl: './mini-progress.component.html',
                host: { '[class.g2-mini-progress]': 'true' },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: DelonLocaleService }, { type: ChangeDetectorRef }]; }, { color: [{
            type: Input
        }], target: [{
            type: Input
        }], percent: [{
            type: Input
        }], strokeWidth: [{
            type: Input
        }] }); })();

const COMPONENTS = [G2MiniProgressComponent];
class G2MiniProgressModule {
}
/** @nocollapse */ G2MiniProgressModule.ɵmod = ɵɵdefineNgModule({ type: G2MiniProgressModule });
/** @nocollapse */ G2MiniProgressModule.ɵinj = ɵɵdefineInjector({ factory: function G2MiniProgressModule_Factory(t) { return new (t || G2MiniProgressModule)(); }, imports: [[CommonModule, DelonUtilModule, DelonLocaleModule, NzToolTipModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(G2MiniProgressModule, { declarations: [G2MiniProgressComponent], imports: [CommonModule, DelonUtilModule, DelonLocaleModule, NzToolTipModule], exports: [G2MiniProgressComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(G2MiniProgressModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, DelonUtilModule, DelonLocaleModule, NzToolTipModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { G2MiniProgressComponent, G2MiniProgressModule };
//# sourceMappingURL=mini-progress.js.map
