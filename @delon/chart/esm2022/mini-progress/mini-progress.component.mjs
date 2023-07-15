import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputNumber, toNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/tooltip";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: G2MiniProgressComponent, deps: [{ token: i1.DelonLocaleService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.5", type: G2MiniProgressComponent, selector: "g2-mini-progress", inputs: { color: "color", target: "target", percent: "percent", strokeWidth: "strokeWidth" }, host: { properties: { "class.g2-mini-progress": "true" } }, exportAs: ["g2MiniProgress"], usesOnChanges: true, ngImport: i0, template: "<div\n  nz-tooltip\n  [nzTooltipTitle]=\"i18n.getData('miniProgress').target + target + '%'\"\n  class=\"g2-mini-progress__target\"\n  [ngStyle]=\"{ 'left.%': target }\"\n>\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n  <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{ 'background-color': color }\"></span>\n</div>\n<div class=\"g2-mini-progress__wrap\">\n  <div\n    class=\"g2-mini-progress__value\"\n    [ngStyle]=\"{ 'background-color': color, 'width.%': percent, 'height.px': strokeWidth }\"\n  ></div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i3.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
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
export { G2MiniProgressComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: G2MiniProgressComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1wcm9ncmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9taW5pLXByb2dyZXNzL21pbmktcHJvZ3Jlc3MuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvbWluaS1wcm9ncmVzcy9taW5pLXByb2dyZXNzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxLQUFLLEVBRUwsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBRTNFLE1BU2EsdUJBQXVCO0lBVWxDLFlBQW1CLElBQXdCLEVBQVUsR0FBc0I7UUFBeEQsU0FBSSxHQUFKLElBQUksQ0FBb0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUxsRSxVQUFLLEdBQUcsU0FBUyxDQUFDO0lBS21ELENBQUM7SUFFdkUsTUFBTSxDQUFDLEtBQWdDO1FBQzdDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OEdBcEJVLHVCQUF1QjtrR0FBdkIsdUJBQXVCLHFRQ3JCcEMsMmtCQWVBOztBRFkwQjtJQUFkLFdBQVcsRUFBRTt1REFBd0I7QUFDdkI7SUFBZCxXQUFXLEVBQUU7d0RBQXlCO0FBQ3hCO0lBQWQsV0FBVyxFQUFFOzREQUE2QjtTQVJ6Qyx1QkFBdUI7MkZBQXZCLHVCQUF1QjtrQkFUbkMsU0FBUzsrQkFDRSxrQkFBa0IsWUFDbEIsZ0JBQWdCLFFBRXBCLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxFQUFFLHVCQUN2QixLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7eUlBTzVCLEtBQUs7c0JBQWIsS0FBSztnQkFDa0IsTUFBTTtzQkFBN0IsS0FBSztnQkFDa0IsT0FBTztzQkFBOUIsS0FBSztnQkFDa0IsV0FBVztzQkFBbEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCwgdG9OdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1taW5pLXByb2dyZXNzJyxcbiAgZXhwb3J0QXM6ICdnMk1pbmlQcm9ncmVzcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9taW5pLXByb2dyZXNzLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDogeyAnW2NsYXNzLmcyLW1pbmktcHJvZ3Jlc3NdJzogJ3RydWUnIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBHMk1pbmlQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV90YXJnZXQ6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcGVyY2VudDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zdHJva2VXaWR0aDogTnVtYmVySW5wdXQ7XG5cbiAgQElucHV0KCkgY29sb3IgPSAnIzE4OTBGRic7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHRhcmdldD86IG51bWJlciB8IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBlcmNlbnQ/OiBudW1iZXIgfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBzdHJva2VXaWR0aD86IG51bWJlciB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIHByaXZhdGUgZml4TnVtKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQgfCBudWxsKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodG9OdW1iZXIodmFsdWUpLCAwKSwgMTAwKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5maXhOdW0odGhpcy50YXJnZXQpO1xuICAgIHRoaXMucGVyY2VudCA9IHRoaXMuZml4TnVtKHRoaXMucGVyY2VudCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iLCI8ZGl2XG4gIG56LXRvb2x0aXBcbiAgW256VG9vbHRpcFRpdGxlXT1cImkxOG4uZ2V0RGF0YSgnbWluaVByb2dyZXNzJykudGFyZ2V0ICsgdGFyZ2V0ICsgJyUnXCJcbiAgY2xhc3M9XCJnMi1taW5pLXByb2dyZXNzX190YXJnZXRcIlxuICBbbmdTdHlsZV09XCJ7ICdsZWZ0LiUnOiB0YXJnZXQgfVwiXG4+XG4gIDxzcGFuIGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fdGFyZ2V0LWl0ZW1cIiBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogY29sb3IgfVwiPjwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJnMi1taW5pLXByb2dyZXNzX190YXJnZXQtaXRlbVwiIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQtY29sb3InOiBjb2xvciB9XCI+PC9zcGFuPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fd3JhcFwiPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJnMi1taW5pLXByb2dyZXNzX192YWx1ZVwiXG4gICAgW25nU3R5bGVdPVwieyAnYmFja2dyb3VuZC1jb2xvcic6IGNvbG9yLCAnd2lkdGguJSc6IHBlcmNlbnQsICdoZWlnaHQucHgnOiBzdHJva2VXaWR0aCB9XCJcbiAgPjwvZGl2PlxuPC9kaXY+XG4iXX0=