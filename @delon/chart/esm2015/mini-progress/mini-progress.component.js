import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { InputNumber, toNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "ng-zorro-antd/tooltip";
import * as i3 from "@angular/common";
export class G2MiniProgressComponent {
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
/** @nocollapse */ G2MiniProgressComponent.ɵfac = function G2MiniProgressComponent_Factory(t) { return new (t || G2MiniProgressComponent)(i0.ɵɵdirectiveInject(i1.DelonLocaleService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
/** @nocollapse */ G2MiniProgressComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: G2MiniProgressComponent, selector: "g2-mini-progress", inputs: { color: "color", target: "target", percent: "percent", strokeWidth: "strokeWidth" }, host: { properties: { "class.g2-mini-progress": "true" } }, exportAs: ["g2MiniProgress"], usesOnChanges: true, ngImport: i0, template: "<div nz-tooltip [nzTooltipTitle]=\"i18n.getData('miniProgress').target + target + '%'\" class=\"g2-mini-progress__target\" [ngStyle]=\"{ 'left.%': target }\">\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n</div>\n<div class=\"g2-mini-progress__wrap\">\n  <div class=\"g2-mini-progress__value\" [ngStyle]=\"{ 'background-color': color, 'width.%': percent, 'height.px': strokeWidth }\"></div>\n</div>\n", directives: [{ type: i2.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipTitle", "nz-tooltip", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { type: i3.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(G2MiniProgressComponent, [{
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
    }], function () { return [{ type: i1.DelonLocaleService }, { type: i0.ChangeDetectorRef }]; }, { color: [{
            type: Input
        }], target: [{
            type: Input
        }], percent: [{
            type: Input
        }], strokeWidth: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1wcm9ncmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9taW5pLXByb2dyZXNzL21pbmktcHJvZ3Jlc3MuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvbWluaS1wcm9ncmVzcy9taW5pLXByb2dyZXNzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzSCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBZSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFXM0UsTUFBTSxPQUFPLHVCQUF1QjtJQVVsQyxZQUFtQixJQUF3QixFQUFVLEdBQXNCO1FBQXhELFNBQUksR0FBSixJQUFJLENBQW9CO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFMbEUsVUFBSyxHQUFHLFNBQVMsQ0FBQztJQUttRCxDQUFDO0lBRXZFLE1BQU0sQ0FBQyxLQUFhO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7O2lIQXBCVSx1QkFBdUI7cUdBQXZCLHVCQUF1QixxUUNicEMsK2lCQU9BO0FEWTBCO0lBQWQsV0FBVyxFQUFFOzt1REFBZ0I7QUFDZjtJQUFkLFdBQVcsRUFBRTs7d0RBQWlCO0FBQ2hCO0lBQWQsV0FBVyxFQUFFOzs0REFBcUI7dUZBUmpDLHVCQUF1QjtjQVRuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsSUFBSSxFQUFFLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFO2dCQUM1QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7cUdBTVUsS0FBSztrQkFBYixLQUFLO1lBQ2tCLE1BQU07a0JBQTdCLEtBQUs7WUFDa0IsT0FBTztrQkFBOUIsS0FBSztZQUNrQixXQUFXO2tCQUFsQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIE51bWJlcklucHV0LCB0b051bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLW1pbmktcHJvZ3Jlc3MnLFxuICBleHBvcnRBczogJ2cyTWluaVByb2dyZXNzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21pbmktcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7ICdbY2xhc3MuZzItbWluaS1wcm9ncmVzc10nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBHMk1pbmlQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV90YXJnZXQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcGVyY2VudDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdHJva2VXaWR0aDogTnVtYmVySW5wdXQ7XG5cbiAgQElucHV0KCkgY29sb3IgPSAnIzE4OTBGRic7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHRhcmdldDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwZXJjZW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHN0cm9rZVdpZHRoOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIHByaXZhdGUgZml4TnVtKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh0b051bWJlcih2YWx1ZSksIDApLCAxMDApO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy50YXJnZXQgPSB0aGlzLmZpeE51bSh0aGlzLnRhcmdldCk7XG4gICAgdGhpcy5wZXJjZW50ID0gdGhpcy5maXhOdW0odGhpcy5wZXJjZW50KTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbn1cbiIsIjxkaXYgbnotdG9vbHRpcCBbbnpUb29sdGlwVGl0bGVdPVwiaTE4bi5nZXREYXRhKCdtaW5pUHJvZ3Jlc3MnKS50YXJnZXQgKyB0YXJnZXQgKyAnJSdcIiBjbGFzcz1cImcyLW1pbmktcHJvZ3Jlc3NfX3RhcmdldFwiIFtuZ1N0eWxlXT1cInsgJ2xlZnQuJSc6IHRhcmdldCB9XCI+XG4gIDxzcGFuIGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fdGFyZ2V0LWl0ZW1cIiBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogY29sb3IgfVwiPjwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJnMi1taW5pLXByb2dyZXNzX190YXJnZXQtaXRlbVwiIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQtY29sb3InOiBjb2xvciB9XCI+PC9zcGFuPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fd3JhcFwiPlxuICA8ZGl2IGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fdmFsdWVcIiBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogY29sb3IsICd3aWR0aC4lJzogcGVyY2VudCwgJ2hlaWdodC5weCc6IHN0cm9rZVdpZHRoIH1cIj48L2Rpdj5cbjwvZGl2PlxuIl19