import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/input-number";
import * as i4 from "../../sf-item-wrap.component";
export class NumberWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.formatter = value => value;
        this.parser = value => value;
        this.width = '';
    }
    ngOnInit() {
        const { minimum, exclusiveMinimum, maximum, exclusiveMaximum, multipleOf, type } = this.schema;
        this.step = multipleOf || 1;
        if (typeof minimum !== 'undefined') {
            this.min = exclusiveMinimum ? minimum + this.step : minimum;
        }
        if (typeof maximum !== 'undefined') {
            this.max = exclusiveMaximum ? maximum - this.step : maximum;
        }
        if (type === 'integer') {
            this.min = Math.trunc(this.min);
            this.max = Math.trunc(this.max);
            this.step = Math.trunc(this.step);
        }
        const ui = this.ui;
        if (ui.prefix != null) {
            ui.formatter = value => (value == null ? '' : `${ui.prefix} ${value}`);
            ui.parser = value => value.replace(`${ui.prefix} `, '');
        }
        if (ui.unit != null) {
            ui.formatter = value => (value == null ? '' : `${value} ${ui.unit}`);
            ui.parser = value => value.replace(` ${ui.unit}`, '');
        }
        if (ui.formatter)
            this.formatter = ui.formatter;
        if (ui.parser)
            this.parser = ui.parser;
        this.width = typeof ui.widgetWidth === 'number' ? `${ui.widgetWidth}px` : ui.widgetWidth ?? '90px';
    }
    _setValue(val) {
        this.setValue(this.schema.type === 'integer' ? Math.floor(val) : val);
        if (this.ui.change)
            this.ui.change(this.value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: NumberWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.5", type: NumberWidget, selector: "sf-number", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-input-number
      [nzId]="id"
      [ngModel]="value"
      (ngModelChange)="_setValue($event)"
      [nzDisabled]="disabled"
      [nzSize]="ui.size!"
      [nzMin]="min"
      [nzMax]="max"
      [nzStep]="step"
      [nzFormatter]="formatter"
      [nzParser]="parser"
      [nzPrecision]="ui.precision"
      [nzPlaceHolder]="ui.placeholder || ''"
      [style.width]="width"
      [ngClass]="{ 'ant-input-number__hide-step': ui.hideStep }"
    />
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.NzInputNumberComponent, selector: "nz-input-number", inputs: ["nzSize", "nzMin", "nzMax", "nzParser", "nzPrecision", "nzPrecisionMode", "nzPlaceHolder", "nzStatus", "nzStep", "nzInputMode", "nzId", "nzDisabled", "nzReadOnly", "nzAutoFocus", "nzBorderless", "nzFormatter"], outputs: ["nzBlur", "nzFocus"], exportAs: ["nzInputNumber"] }, { kind: "component", type: i4.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: NumberWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-number',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-input-number
      [nzId]="id"
      [ngModel]="value"
      (ngModelChange)="_setValue($event)"
      [nzDisabled]="disabled"
      [nzSize]="ui.size!"
      [nzMin]="min"
      [nzMax]="max"
      [nzStep]="step"
      [nzFormatter]="formatter"
      [nzParser]="parser"
      [nzPrecision]="ui.precision"
      [nzPlaceHolder]="ui.placeholder || ''"
      [style.width]="width"
      [ngClass]="{ 'ant-input-number__hide-step': ui.hideStep }"
    />
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvbnVtYmVyL251bWJlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7QUFpQy9DLE1BQU0sT0FBTyxZQUFhLFNBQVEsZUFBcUM7SUE5QnZFOztRQWtDRSxjQUFTLEdBQXVDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQy9ELFdBQU0sR0FBOEIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDbkQsVUFBSyxHQUFHLEVBQUUsQ0FBQztLQW1DWjtJQWpDQyxRQUFRO1FBQ04sTUFBTSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0YsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUM5RCxDQUFDO1FBQ0QsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsR0FBRyxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQzlELENBQUM7UUFDRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBRUQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFLENBQUM7WUFDdEIsRUFBRSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN2RSxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMxRCxDQUFDO1FBQ0QsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3BCLEVBQUUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDckUsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUNELElBQUksRUFBRSxDQUFDLFNBQVM7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7UUFDaEQsSUFBSSxFQUFFLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sRUFBRSxDQUFDLFdBQVcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQztJQUNyRyxDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQVc7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7OEdBeENVLFlBQVk7a0dBQVosWUFBWSx3RUE1QmI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkF3Qk07OzJGQUlMLFlBQVk7a0JBOUJ4QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkF3Qk07b0JBQ2hCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZOdW1iZXJXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLW51bWJlcicsXG4gIHRlbXBsYXRlOiBgPHNmLWl0ZW0td3JhcFxuICAgIFtpZF09XCJpZFwiXG4gICAgW3NjaGVtYV09XCJzY2hlbWFcIlxuICAgIFt1aV09XCJ1aVwiXG4gICAgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIlxuICAgIFtlcnJvcl09XCJlcnJvclwiXG4gICAgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIlxuICA+XG4gICAgPG56LWlucHV0LW51bWJlclxuICAgICAgW256SWRdPVwiaWRcIlxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX3NldFZhbHVlKCRldmVudClcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCJ1aS5zaXplIVwiXG4gICAgICBbbnpNaW5dPVwibWluXCJcbiAgICAgIFtuek1heF09XCJtYXhcIlxuICAgICAgW256U3RlcF09XCJzdGVwXCJcbiAgICAgIFtuekZvcm1hdHRlcl09XCJmb3JtYXR0ZXJcIlxuICAgICAgW256UGFyc2VyXT1cInBhcnNlclwiXG4gICAgICBbbnpQcmVjaXNpb25dPVwidWkucHJlY2lzaW9uXCJcbiAgICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyIHx8ICcnXCJcbiAgICAgIFtzdHlsZS53aWR0aF09XCJ3aWR0aFwiXG4gICAgICBbbmdDbGFzc109XCJ7ICdhbnQtaW5wdXQtbnVtYmVyX19oaWRlLXN0ZXAnOiB1aS5oaWRlU3RlcCB9XCJcbiAgICAvPlxuICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZOdW1iZXJXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbWluITogbnVtYmVyO1xuICBtYXghOiBudW1iZXI7XG4gIHN0ZXAhOiBudW1iZXI7XG4gIGZvcm1hdHRlcjogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZyB8IG51bWJlciA9IHZhbHVlID0+IHZhbHVlO1xuICBwYXJzZXI6ICh2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmcgPSB2YWx1ZSA9PiB2YWx1ZTtcbiAgd2lkdGggPSAnJztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IG1pbmltdW0sIGV4Y2x1c2l2ZU1pbmltdW0sIG1heGltdW0sIGV4Y2x1c2l2ZU1heGltdW0sIG11bHRpcGxlT2YsIHR5cGUgfSA9IHRoaXMuc2NoZW1hO1xuICAgIHRoaXMuc3RlcCA9IG11bHRpcGxlT2YgfHwgMTtcbiAgICBpZiAodHlwZW9mIG1pbmltdW0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLm1pbiA9IGV4Y2x1c2l2ZU1pbmltdW0gPyBtaW5pbXVtICsgdGhpcy5zdGVwIDogbWluaW11bTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtYXhpbXVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5tYXggPSBleGNsdXNpdmVNYXhpbXVtID8gbWF4aW11bSAtIHRoaXMuc3RlcCA6IG1heGltdW07XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnaW50ZWdlcicpIHtcbiAgICAgIHRoaXMubWluID0gTWF0aC50cnVuYyh0aGlzLm1pbik7XG4gICAgICB0aGlzLm1heCA9IE1hdGgudHJ1bmModGhpcy5tYXgpO1xuICAgICAgdGhpcy5zdGVwID0gTWF0aC50cnVuYyh0aGlzLnN0ZXApO1xuICAgIH1cblxuICAgIGNvbnN0IHVpID0gdGhpcy51aTtcbiAgICBpZiAodWkucHJlZml4ICE9IG51bGwpIHtcbiAgICAgIHVpLmZvcm1hdHRlciA9IHZhbHVlID0+ICh2YWx1ZSA9PSBudWxsID8gJycgOiBgJHt1aS5wcmVmaXh9ICR7dmFsdWV9YCk7XG4gICAgICB1aS5wYXJzZXIgPSB2YWx1ZSA9PiB2YWx1ZS5yZXBsYWNlKGAke3VpLnByZWZpeH0gYCwgJycpO1xuICAgIH1cbiAgICBpZiAodWkudW5pdCAhPSBudWxsKSB7XG4gICAgICB1aS5mb3JtYXR0ZXIgPSB2YWx1ZSA9PiAodmFsdWUgPT0gbnVsbCA/ICcnIDogYCR7dmFsdWV9ICR7dWkudW5pdH1gKTtcbiAgICAgIHVpLnBhcnNlciA9IHZhbHVlID0+IHZhbHVlLnJlcGxhY2UoYCAke3VpLnVuaXR9YCwgJycpO1xuICAgIH1cbiAgICBpZiAodWkuZm9ybWF0dGVyKSB0aGlzLmZvcm1hdHRlciA9IHVpLmZvcm1hdHRlcjtcbiAgICBpZiAodWkucGFyc2VyKSB0aGlzLnBhcnNlciA9IHVpLnBhcnNlcjtcbiAgICB0aGlzLndpZHRoID0gdHlwZW9mIHVpLndpZGdldFdpZHRoID09PSAnbnVtYmVyJyA/IGAke3VpLndpZGdldFdpZHRofXB4YCA6IHVpLndpZGdldFdpZHRoID8/ICc5MHB4JztcbiAgfVxuXG4gIF9zZXRWYWx1ZSh2YWw6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInID8gTWF0aC5mbG9vcih2YWwpIDogdmFsKTtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG59XG4iXX0=