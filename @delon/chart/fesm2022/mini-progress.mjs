import * as i0 from '@angular/core';
import { inject, ChangeDetectorRef, numberAttribute, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { NzTooltipDirective, NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CommonModule } from '@angular/common';

class G2MiniProgressComponent {
    targetSuffix = inject(DelonLocaleService).getData('miniProgress').target;
    cdr = inject(ChangeDetectorRef);
    color = '#1890FF';
    target;
    percent;
    strokeWidth;
    fixNum(value) {
        return Math.min(Math.max(numberAttribute(value), 0), 100);
    }
    ngOnChanges() {
        this.target = this.fixNum(this.target);
        this.percent = this.fixNum(this.percent);
        this.cdr.detectChanges();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: G2MiniProgressComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "19.2.6", type: G2MiniProgressComponent, isStandalone: true, selector: "g2-mini-progress", inputs: { color: "color", target: ["target", "target", numberAttribute], percent: ["percent", "percent", numberAttribute], strokeWidth: ["strokeWidth", "strokeWidth", numberAttribute] }, host: { properties: { "class.g2-mini-progress": "true" } }, exportAs: ["g2MiniProgress"], usesOnChanges: true, ngImport: i0, template: `
    <div
      nz-tooltip
      [nzTooltipTitle]="targetSuffix + target + '%'"
      class="g2-mini-progress__target"
      [style]="{ left: target + '%' }"
    >
      <span class="g2-mini-progress__target-item" [style]="{ 'background-color': color }"></span>
      <span class="g2-mini-progress__target-item" [style]="{ 'background-color': color }"></span>
    </div>
    <div class="g2-mini-progress__wrap">
      <div
        class="g2-mini-progress__value"
        [style]="{ 'background-color': color, width: percent + '%', height: strokeWidth + 'px' }"
      ></div>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: G2MiniProgressComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'g2-mini-progress',
                    exportAs: 'g2MiniProgress',
                    template: `
    <div
      nz-tooltip
      [nzTooltipTitle]="targetSuffix + target + '%'"
      class="g2-mini-progress__target"
      [style]="{ left: target + '%' }"
    >
      <span class="g2-mini-progress__target-item" [style]="{ 'background-color': color }"></span>
      <span class="g2-mini-progress__target-item" [style]="{ 'background-color': color }"></span>
    </div>
    <div class="g2-mini-progress__wrap">
      <div
        class="g2-mini-progress__value"
        [style]="{ 'background-color': color, width: percent + '%', height: strokeWidth + 'px' }"
      ></div>
    </div>
  `,
                    host: { '[class.g2-mini-progress]': 'true' },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [NzTooltipDirective]
                }]
        }], propDecorators: { color: [{
                type: Input
            }], target: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], percent: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], strokeWidth: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }] } });

const COMPONENTS = [G2MiniProgressComponent];
class G2MiniProgressModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: G2MiniProgressModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.6", ngImport: i0, type: G2MiniProgressModule, imports: [CommonModule, DelonLocaleModule, NzToolTipModule, G2MiniProgressComponent], exports: [G2MiniProgressComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: G2MiniProgressModule, imports: [CommonModule, DelonLocaleModule, NzToolTipModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: G2MiniProgressModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, DelonLocaleModule, NzToolTipModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { G2MiniProgressComponent, G2MiniProgressModule };
//# sourceMappingURL=mini-progress.mjs.map
