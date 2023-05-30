import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "ng-zorro-antd/slider";
import * as i3 from "../../sf-item-wrap.component";
class SliderWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.marks = null;
        this._formatter = (value) => {
            const { formatter } = this.ui;
            if (formatter)
                return formatter(value);
            return `${value}`;
        };
    }
    ngOnInit() {
        const { minimum, maximum, multipleOf } = this.schema;
        this.min = minimum || 0;
        this.max = maximum || 100;
        this.step = multipleOf || 1;
        const { marks, included } = this.ui;
        this.marks = marks || null;
        this.included = typeof included === 'undefined' ? true : included;
    }
    _afterChange(value) {
        const { afterChange } = this.ui;
        if (afterChange)
            return afterChange(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: SliderWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.3", type: SliderWidget, selector: "sf-slider", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-slider\n    [ngModel]=\"value\"\n    (ngModelChange)=\"setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzRange]=\"ui.range\"\n    [nzMin]=\"min\"\n    [nzMax]=\"max\"\n    [nzStep]=\"step\"\n    [nzMarks]=\"marks\"\n    [nzDots]=\"ui.dots\"\n    [nzIncluded]=\"included\"\n    [nzVertical]=\"ui.vertical\"\n    [nzTipFormatter]=\"_formatter\"\n    (nzOnAfterChange)=\"_afterChange($event)\"\n  >\n  </nz-slider>\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i2.NzSliderComponent, selector: "nz-slider", inputs: ["nzDisabled", "nzDots", "nzIncluded", "nzRange", "nzVertical", "nzReverse", "nzDefaultValue", "nzMarks", "nzMax", "nzMin", "nzStep", "nzTooltipVisible", "nzTooltipPlacement", "nzTipFormatter"], outputs: ["nzOnAfterChange"], exportAs: ["nzSlider"] }, { kind: "component", type: i3.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
export { SliderWidget };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: SliderWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-slider', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-slider\n    [ngModel]=\"value\"\n    (ngModelChange)=\"setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzRange]=\"ui.range\"\n    [nzMin]=\"min\"\n    [nzMax]=\"max\"\n    [nzStep]=\"step\"\n    [nzMarks]=\"marks\"\n    [nzDots]=\"ui.dots\"\n    [nzIncluded]=\"included\"\n    [nzVertical]=\"ui.vertical\"\n    [nzTipFormatter]=\"_formatter\"\n    (nzOnAfterChange)=\"_afterChange($event)\"\n  >\n  </nz-slider>\n</sf-item-wrap>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvc2xpZGVyL3NsaWRlci53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3NsaWRlci9zbGlkZXIud2lkZ2V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7OztBQUcvQyxNQU1hLFlBQWEsU0FBUSxlQUFxQztJQU52RTs7UUFVRSxVQUFLLEdBQW1CLElBQUksQ0FBQztRQWM3QixlQUFVLEdBQUcsQ0FBQyxLQUFhLEVBQVUsRUFBRTtZQUNyQyxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUM5QixJQUFJLFNBQVM7Z0JBQUUsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsT0FBTyxHQUFHLEtBQUssRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQztLQU1IO0lBckJDLFFBQVE7UUFDTixNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sSUFBSSxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBRTVCLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ3BFLENBQUM7SUFRRCxZQUFZLENBQUMsS0FBb0I7UUFDL0IsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDaEMsSUFBSSxXQUFXO1lBQUUsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs4R0EzQlUsWUFBWTtrR0FBWixZQUFZLHdFQ2J6Qixta0JBa0JBOztTRExhLFlBQVk7MkZBQVosWUFBWTtrQkFOeEIsU0FBUzsrQkFDRSxXQUFXLHVCQUVBLEtBQUssaUJBQ1gsaUJBQWlCLENBQUMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOek1hcmtzLCBOelNsaWRlclZhbHVlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zbGlkZXInO1xuXG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTbGlkZXJXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXNsaWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGlkZXIud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZTbGlkZXJXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbWluITogbnVtYmVyO1xuICBtYXghOiBudW1iZXI7XG4gIHN0ZXAhOiBudW1iZXI7XG4gIG1hcmtzOiBOek1hcmtzIHwgbnVsbCA9IG51bGw7XG4gIGluY2x1ZGVkITogYm9vbGVhbjtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IG1pbmltdW0sIG1heGltdW0sIG11bHRpcGxlT2YgfSA9IHRoaXMuc2NoZW1hO1xuICAgIHRoaXMubWluID0gbWluaW11bSB8fCAwO1xuICAgIHRoaXMubWF4ID0gbWF4aW11bSB8fCAxMDA7XG4gICAgdGhpcy5zdGVwID0gbXVsdGlwbGVPZiB8fCAxO1xuXG4gICAgY29uc3QgeyBtYXJrcywgaW5jbHVkZWQgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5tYXJrcyA9IG1hcmtzIHx8IG51bGw7XG4gICAgdGhpcy5pbmNsdWRlZCA9IHR5cGVvZiBpbmNsdWRlZCA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogaW5jbHVkZWQ7XG4gIH1cblxuICBfZm9ybWF0dGVyID0gKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IHsgZm9ybWF0dGVyIH0gPSB0aGlzLnVpO1xuICAgIGlmIChmb3JtYXR0ZXIpIHJldHVybiBmb3JtYXR0ZXIodmFsdWUpO1xuICAgIHJldHVybiBgJHt2YWx1ZX1gO1xuICB9O1xuXG4gIF9hZnRlckNoYW5nZSh2YWx1ZTogTnpTbGlkZXJWYWx1ZSk6IHZvaWQge1xuICAgIGNvbnN0IHsgYWZ0ZXJDaGFuZ2UgfSA9IHRoaXMudWk7XG4gICAgaWYgKGFmdGVyQ2hhbmdlKSByZXR1cm4gYWZ0ZXJDaGFuZ2UodmFsdWUpO1xuICB9XG59XG4iLCI8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuICA8bnotc2xpZGVyXG4gICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICBbbnpSYW5nZV09XCJ1aS5yYW5nZVwiXG4gICAgW256TWluXT1cIm1pblwiXG4gICAgW256TWF4XT1cIm1heFwiXG4gICAgW256U3RlcF09XCJzdGVwXCJcbiAgICBbbnpNYXJrc109XCJtYXJrc1wiXG4gICAgW256RG90c109XCJ1aS5kb3RzXCJcbiAgICBbbnpJbmNsdWRlZF09XCJpbmNsdWRlZFwiXG4gICAgW256VmVydGljYWxdPVwidWkudmVydGljYWxcIlxuICAgIFtuelRpcEZvcm1hdHRlcl09XCJfZm9ybWF0dGVyXCJcbiAgICAobnpPbkFmdGVyQ2hhbmdlKT1cIl9hZnRlckNoYW5nZSgkZXZlbnQpXCJcbiAgPlxuICA8L256LXNsaWRlcj5cbjwvc2YtaXRlbS13cmFwPlxuIl19