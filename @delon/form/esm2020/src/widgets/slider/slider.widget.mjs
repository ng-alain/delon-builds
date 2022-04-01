import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "../../sf-item-wrap.component";
import * as i2 from "ng-zorro-antd/slider";
import * as i3 from "@angular/forms";
export class SliderWidget extends ControlUIWidget {
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
}
SliderWidget.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: SliderWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
SliderWidget.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.1", type: SliderWidget, selector: "sf-slider", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-slider\n    [ngModel]=\"value\"\n    (ngModelChange)=\"setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzRange]=\"ui.range\"\n    [nzMin]=\"min\"\n    [nzMax]=\"max\"\n    [nzStep]=\"step\"\n    [nzMarks]=\"marks\"\n    [nzDots]=\"ui.dots\"\n    [nzIncluded]=\"included\"\n    [nzVertical]=\"ui.vertical\"\n    [nzTipFormatter]=\"_formatter\"\n    (nzOnAfterChange)=\"_afterChange($event)\"\n  >\n  </nz-slider>\n</sf-item-wrap>\n", components: [{ type: i1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { type: i2.NzSliderComponent, selector: "nz-slider", inputs: ["nzDisabled", "nzDots", "nzIncluded", "nzRange", "nzVertical", "nzReverse", "nzDefaultValue", "nzMarks", "nzMax", "nzMin", "nzStep", "nzTooltipVisible", "nzTooltipPlacement", "nzTipFormatter"], outputs: ["nzOnAfterChange"], exportAs: ["nzSlider"] }], directives: [{ type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: SliderWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-slider', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-slider\n    [ngModel]=\"value\"\n    (ngModelChange)=\"setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzRange]=\"ui.range\"\n    [nzMin]=\"min\"\n    [nzMax]=\"max\"\n    [nzStep]=\"step\"\n    [nzMarks]=\"marks\"\n    [nzDots]=\"ui.dots\"\n    [nzIncluded]=\"included\"\n    [nzVertical]=\"ui.vertical\"\n    [nzTipFormatter]=\"_formatter\"\n    (nzOnAfterChange)=\"_afterChange($event)\"\n  >\n  </nz-slider>\n</sf-item-wrap>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvc2xpZGVyL3NsaWRlci53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3NsaWRlci9zbGlkZXIud2lkZ2V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7OztBQVMvQyxNQUFNLE9BQU8sWUFBYSxTQUFRLGVBQXFDO0lBTnZFOztRQVVFLFVBQUssR0FBbUIsSUFBSSxDQUFDO1FBYzdCLGVBQVUsR0FBRyxDQUFDLEtBQWEsRUFBVSxFQUFFO1lBQ3JDLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzlCLElBQUksU0FBUztnQkFBRSxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxPQUFPLEdBQUcsS0FBSyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDO0tBTUg7SUFyQkMsUUFBUTtRQUNOLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxJQUFJLEdBQUcsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFFNUIsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sUUFBUSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDcEUsQ0FBQztJQVFELFlBQVksQ0FBQyxLQUFvQjtRQUMvQixNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNoQyxJQUFJLFdBQVc7WUFBRSxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDOzt5R0EzQlUsWUFBWTs2RkFBWixZQUFZLHdFQ2J6Qixta0JBa0JBOzJGRExhLFlBQVk7a0JBTnhCLFNBQVM7K0JBQ0UsV0FBVyx1QkFFQSxLQUFLLGlCQUNYLGlCQUFpQixDQUFDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpNYXJrcywgTnpTbGlkZXJWYWx1ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2xpZGVyJztcblxuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGU2xpZGVyV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1zbGlkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2xpZGVyLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGU2xpZGVyV2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1pbiE6IG51bWJlcjtcbiAgbWF4ITogbnVtYmVyO1xuICBzdGVwITogbnVtYmVyO1xuICBtYXJrczogTnpNYXJrcyB8IG51bGwgPSBudWxsO1xuICBpbmNsdWRlZCE6IGJvb2xlYW47XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBtaW5pbXVtLCBtYXhpbXVtLCBtdWx0aXBsZU9mIH0gPSB0aGlzLnNjaGVtYTtcbiAgICB0aGlzLm1pbiA9IG1pbmltdW0gfHwgMDtcbiAgICB0aGlzLm1heCA9IG1heGltdW0gfHwgMTAwO1xuICAgIHRoaXMuc3RlcCA9IG11bHRpcGxlT2YgfHwgMTtcblxuICAgIGNvbnN0IHsgbWFya3MsIGluY2x1ZGVkIH0gPSB0aGlzLnVpO1xuICAgIHRoaXMubWFya3MgPSBtYXJrcyB8fCBudWxsO1xuICAgIHRoaXMuaW5jbHVkZWQgPSB0eXBlb2YgaW5jbHVkZWQgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGluY2x1ZGVkO1xuICB9XG5cbiAgX2Zvcm1hdHRlciA9ICh2YWx1ZTogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCB7IGZvcm1hdHRlciB9ID0gdGhpcy51aTtcbiAgICBpZiAoZm9ybWF0dGVyKSByZXR1cm4gZm9ybWF0dGVyKHZhbHVlKTtcbiAgICByZXR1cm4gYCR7dmFsdWV9YDtcbiAgfTtcblxuICBfYWZ0ZXJDaGFuZ2UodmFsdWU6IE56U2xpZGVyVmFsdWUpOiB2b2lkIHtcbiAgICBjb25zdCB7IGFmdGVyQ2hhbmdlIH0gPSB0aGlzLnVpO1xuICAgIGlmIChhZnRlckNoYW5nZSkgcmV0dXJuIGFmdGVyQ2hhbmdlKHZhbHVlKTtcbiAgfVxufVxuIiwiPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgPG56LXNsaWRlclxuICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgW256UmFuZ2VdPVwidWkucmFuZ2VcIlxuICAgIFtuek1pbl09XCJtaW5cIlxuICAgIFtuek1heF09XCJtYXhcIlxuICAgIFtuelN0ZXBdPVwic3RlcFwiXG4gICAgW256TWFya3NdPVwibWFya3NcIlxuICAgIFtuekRvdHNdPVwidWkuZG90c1wiXG4gICAgW256SW5jbHVkZWRdPVwiaW5jbHVkZWRcIlxuICAgIFtuelZlcnRpY2FsXT1cInVpLnZlcnRpY2FsXCJcbiAgICBbbnpUaXBGb3JtYXR0ZXJdPVwiX2Zvcm1hdHRlclwiXG4gICAgKG56T25BZnRlckNoYW5nZSk9XCJfYWZ0ZXJDaGFuZ2UoJGV2ZW50KVwiXG4gID5cbiAgPC9uei1zbGlkZXI+XG48L3NmLWl0ZW0td3JhcD5cbiJdfQ==