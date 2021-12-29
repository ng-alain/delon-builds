import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
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
G2MiniProgressComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: G2MiniProgressComponent, deps: [{ token: i1.DelonLocaleService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
G2MiniProgressComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.1", type: G2MiniProgressComponent, selector: "g2-mini-progress", inputs: { color: "color", target: "target", percent: "percent", strokeWidth: "strokeWidth" }, host: { properties: { "class.g2-mini-progress": "true" } }, exportAs: ["g2MiniProgress"], usesOnChanges: true, ngImport: i0, template: "<div\n  nz-tooltip\n  [nzTooltipTitle]=\"i18n.getData('miniProgress').target + target + '%'\"\n  class=\"g2-mini-progress__target\"\n  [ngStyle]=\"{ 'left.%': target }\"\n>\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n</div>\n<div class=\"g2-mini-progress__wrap\">\n  <div\n    class=\"g2-mini-progress__value\"\n    [ngStyle]=\"{ 'background-color': color, 'width.%': percent, 'height.px': strokeWidth }\"\n  ></div>\n</div>\n", directives: [{ type: i2.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { type: i3.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber()
], G2MiniProgressComponent.prototype, "target", void 0);
__decorate([
    InputNumber()
], G2MiniProgressComponent.prototype, "percent", void 0);
__decorate([
    InputNumber()
], G2MiniProgressComponent.prototype, "strokeWidth", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: G2MiniProgressComponent, decorators: [{
            type: Component,
            args: [{ selector: 'g2-mini-progress', exportAs: 'g2MiniProgress', host: { '[class.g2-mini-progress]': 'true' }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div\n  nz-tooltip\n  [nzTooltipTitle]=\"i18n.getData('miniProgress').target + target + '%'\"\n  class=\"g2-mini-progress__target\"\n  [ngStyle]=\"{ 'left.%': target }\"\n>\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n</div>\n<div class=\"g2-mini-progress__wrap\">\n  <div\n    class=\"g2-mini-progress__value\"\n    [ngStyle]=\"{ 'background-color': color, 'width.%': percent, 'height.px': strokeWidth }\"\n  ></div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.DelonLocaleService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { color: [{
                type: Input
            }], target: [{
                type: Input
            }], percent: [{
                type: Input
            }], strokeWidth: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1wcm9ncmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9taW5pLXByb2dyZXNzL21pbmktcHJvZ3Jlc3MuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvbWluaS1wcm9ncmVzcy9taW5pLXByb2dyZXNzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBVzNFLE1BQU0sT0FBTyx1QkFBdUI7SUFVbEMsWUFBbUIsSUFBd0IsRUFBVSxHQUFzQjtRQUF4RCxTQUFJLEdBQUosSUFBSSxDQUFvQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBTGxFLFVBQUssR0FBRyxTQUFTLENBQUM7SUFLbUQsQ0FBQztJQUV2RSxNQUFNLENBQUMsS0FBYTtRQUMxQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOztvSEFwQlUsdUJBQXVCO3dHQUF2Qix1QkFBdUIscVFDckJwQywya0JBZUE7QURZMEI7SUFBZCxXQUFXLEVBQUU7dURBQWdCO0FBQ2Y7SUFBZCxXQUFXLEVBQUU7d0RBQWlCO0FBQ2hCO0lBQWQsV0FBVyxFQUFFOzREQUFxQjsyRkFSakMsdUJBQXVCO2tCQVRuQyxTQUFTOytCQUNFLGtCQUFrQixZQUNsQixnQkFBZ0IsUUFFcEIsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUUsdUJBQ3ZCLEtBQUssbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTt5SUFPNUIsS0FBSztzQkFBYixLQUFLO2dCQUNrQixNQUFNO3NCQUE3QixLQUFLO2dCQUNrQixPQUFPO3NCQUE5QixLQUFLO2dCQUNrQixXQUFXO3NCQUFsQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEZWxvbkxvY2FsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIsIE51bWJlcklucHV0LCB0b051bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLW1pbmktcHJvZ3Jlc3MnLFxuICBleHBvcnRBczogJ2cyTWluaVByb2dyZXNzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21pbmktcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7ICdbY2xhc3MuZzItbWluaS1wcm9ncmVzc10nOiAndHJ1ZScgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEcyTWluaVByb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3RhcmdldDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9wZXJjZW50OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3N0cm9rZVdpZHRoOiBOdW1iZXJJbnB1dDtcblxuICBASW5wdXQoKSBjb2xvciA9ICcjMTg5MEZGJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdGFyZ2V0OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBlcmNlbnQ6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc3Ryb2tlV2lkdGg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgcHJpdmF0ZSBmaXhOdW0odmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHRvTnVtYmVyKHZhbHVlKSwgMCksIDEwMCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnRhcmdldCA9IHRoaXMuZml4TnVtKHRoaXMudGFyZ2V0KTtcbiAgICB0aGlzLnBlcmNlbnQgPSB0aGlzLmZpeE51bSh0aGlzLnBlcmNlbnQpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIiwiPGRpdlxuICBuei10b29sdGlwXG4gIFtuelRvb2x0aXBUaXRsZV09XCJpMThuLmdldERhdGEoJ21pbmlQcm9ncmVzcycpLnRhcmdldCArIHRhcmdldCArICclJ1wiXG4gIGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fdGFyZ2V0XCJcbiAgW25nU3R5bGVdPVwieyAnbGVmdC4lJzogdGFyZ2V0IH1cIlxuPlxuICA8c3BhbiBjbGFzcz1cImcyLW1pbmktcHJvZ3Jlc3NfX3RhcmdldC1pdGVtXCIgW25nU3R5bGVdPVwieyAnYmFja2dyb3VuZC1jb2xvcic6IGNvbG9yIH1cIj48L3NwYW4+XG4gIDxzcGFuIGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fdGFyZ2V0LWl0ZW1cIiBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogY29sb3IgfVwiPjwvc3Bhbj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImcyLW1pbmktcHJvZ3Jlc3NfX3dyYXBcIj5cbiAgPGRpdlxuICAgIGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fdmFsdWVcIlxuICAgIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQtY29sb3InOiBjb2xvciwgJ3dpZHRoLiUnOiBwZXJjZW50LCAnaGVpZ2h0LnB4Jzogc3Ryb2tlV2lkdGggfVwiXG4gID48L2Rpdj5cbjwvZGl2PlxuIl19