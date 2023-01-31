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
}
NumberWidget.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NumberWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
NumberWidget.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.2", type: NumberWidget, selector: "sf-number", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-input-number\n    [nzId]=\"id\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"_setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"ui.size!\"\n    [nzMin]=\"min\"\n    [nzMax]=\"max\"\n    [nzStep]=\"step\"\n    [nzFormatter]=\"formatter\"\n    [nzParser]=\"parser\"\n    [nzPrecision]=\"ui.precision\"\n    [nzPlaceHolder]=\"ui.placeholder || ''\"\n    [style.width]=\"width\"\n    [ngClass]=\"{ 'ant-input-number__hide-step': ui.hideStep }\"\n  >\n  </nz-input-number>\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.NzInputNumberComponent, selector: "nz-input-number", inputs: ["nzSize", "nzMin", "nzMax", "nzParser", "nzPrecision", "nzPrecisionMode", "nzPlaceHolder", "nzStatus", "nzStep", "nzInputMode", "nzId", "nzDisabled", "nzReadOnly", "nzAutoFocus", "nzBorderless", "nzFormatter"], outputs: ["nzBlur", "nzFocus"], exportAs: ["nzInputNumber"] }, { kind: "component", type: i4.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.2", ngImport: i0, type: NumberWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-number', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-input-number\n    [nzId]=\"id\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"_setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"ui.size!\"\n    [nzMin]=\"min\"\n    [nzMax]=\"max\"\n    [nzStep]=\"step\"\n    [nzFormatter]=\"formatter\"\n    [nzParser]=\"parser\"\n    [nzPrecision]=\"ui.precision\"\n    [nzPlaceHolder]=\"ui.placeholder || ''\"\n    [style.width]=\"width\"\n    [ngClass]=\"{ 'ant-input-number__hide-step': ui.hideStep }\"\n  >\n  </nz-input-number>\n</sf-item-wrap>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvbnVtYmVyL251bWJlci53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL251bWJlci9udW1iZXIud2lkZ2V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7QUFTL0MsTUFBTSxPQUFPLFlBQWEsU0FBUSxlQUFxQztJQU52RTs7UUFVRSxjQUFTLEdBQXVDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1FBQy9ELFdBQU0sR0FBOEIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDbkQsVUFBSyxHQUFHLEVBQUUsQ0FBQztLQW1DWjtJQWpDQyxRQUFRO1FBQ04sTUFBTSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDL0YsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDN0Q7UUFDRCxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQzdEO1FBQ0QsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25DO1FBRUQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ3JCLEVBQUUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDdkUsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDekQ7UUFDRCxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ25CLEVBQUUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDckUsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDdkQ7UUFDRCxJQUFJLEVBQUUsQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO1FBQ2hELElBQUksRUFBRSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUM7SUFDckcsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFXO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0RSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDOzt5R0F4Q1UsWUFBWTs2RkFBWixZQUFZLHdFQ1h6Qixzb0JBbUJBOzJGRFJhLFlBQVk7a0JBTnhCLFNBQVM7K0JBQ0UsV0FBVyx1QkFFQSxLQUFLLGlCQUNYLGlCQUFpQixDQUFDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGTnVtYmVyV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1udW1iZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbnVtYmVyLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGTnVtYmVyV2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1pbiE6IG51bWJlcjtcbiAgbWF4ITogbnVtYmVyO1xuICBzdGVwITogbnVtYmVyO1xuICBmb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmcgfCBudW1iZXIgPSB2YWx1ZSA9PiB2YWx1ZTtcbiAgcGFyc2VyOiAodmFsdWU6IHN0cmluZykgPT4gc3RyaW5nID0gdmFsdWUgPT4gdmFsdWU7XG4gIHdpZHRoID0gJyc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBtaW5pbXVtLCBleGNsdXNpdmVNaW5pbXVtLCBtYXhpbXVtLCBleGNsdXNpdmVNYXhpbXVtLCBtdWx0aXBsZU9mLCB0eXBlIH0gPSB0aGlzLnNjaGVtYTtcbiAgICB0aGlzLnN0ZXAgPSBtdWx0aXBsZU9mIHx8IDE7XG4gICAgaWYgKHR5cGVvZiBtaW5pbXVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5taW4gPSBleGNsdXNpdmVNaW5pbXVtID8gbWluaW11bSArIHRoaXMuc3RlcCA6IG1pbmltdW07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbWF4aW11bSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMubWF4ID0gZXhjbHVzaXZlTWF4aW11bSA/IG1heGltdW0gLSB0aGlzLnN0ZXAgOiBtYXhpbXVtO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ2ludGVnZXInKSB7XG4gICAgICB0aGlzLm1pbiA9IE1hdGgudHJ1bmModGhpcy5taW4pO1xuICAgICAgdGhpcy5tYXggPSBNYXRoLnRydW5jKHRoaXMubWF4KTtcbiAgICAgIHRoaXMuc3RlcCA9IE1hdGgudHJ1bmModGhpcy5zdGVwKTtcbiAgICB9XG5cbiAgICBjb25zdCB1aSA9IHRoaXMudWk7XG4gICAgaWYgKHVpLnByZWZpeCAhPSBudWxsKSB7XG4gICAgICB1aS5mb3JtYXR0ZXIgPSB2YWx1ZSA9PiAodmFsdWUgPT0gbnVsbCA/ICcnIDogYCR7dWkucHJlZml4fSAke3ZhbHVlfWApO1xuICAgICAgdWkucGFyc2VyID0gdmFsdWUgPT4gdmFsdWUucmVwbGFjZShgJHt1aS5wcmVmaXh9IGAsICcnKTtcbiAgICB9XG4gICAgaWYgKHVpLnVuaXQgIT0gbnVsbCkge1xuICAgICAgdWkuZm9ybWF0dGVyID0gdmFsdWUgPT4gKHZhbHVlID09IG51bGwgPyAnJyA6IGAke3ZhbHVlfSAke3VpLnVuaXR9YCk7XG4gICAgICB1aS5wYXJzZXIgPSB2YWx1ZSA9PiB2YWx1ZS5yZXBsYWNlKGAgJHt1aS51bml0fWAsICcnKTtcbiAgICB9XG4gICAgaWYgKHVpLmZvcm1hdHRlcikgdGhpcy5mb3JtYXR0ZXIgPSB1aS5mb3JtYXR0ZXI7XG4gICAgaWYgKHVpLnBhcnNlcikgdGhpcy5wYXJzZXIgPSB1aS5wYXJzZXI7XG4gICAgdGhpcy53aWR0aCA9IHR5cGVvZiB1aS53aWRnZXRXaWR0aCA9PT0gJ251bWJlcicgPyBgJHt1aS53aWRnZXRXaWR0aH1weGAgOiB1aS53aWRnZXRXaWR0aCA/PyAnOTBweCc7XG4gIH1cblxuICBfc2V0VmFsdWUodmFsOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJyA/IE1hdGguZmxvb3IodmFsKSA6IHZhbCk7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxufVxuIiwiPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgPG56LWlucHV0LW51bWJlclxuICAgIFtueklkXT1cImlkXCJcbiAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwiX3NldFZhbHVlKCRldmVudClcIlxuICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICBbbnpTaXplXT1cInVpLnNpemUhXCJcbiAgICBbbnpNaW5dPVwibWluXCJcbiAgICBbbnpNYXhdPVwibWF4XCJcbiAgICBbbnpTdGVwXT1cInN0ZXBcIlxuICAgIFtuekZvcm1hdHRlcl09XCJmb3JtYXR0ZXJcIlxuICAgIFtuelBhcnNlcl09XCJwYXJzZXJcIlxuICAgIFtuelByZWNpc2lvbl09XCJ1aS5wcmVjaXNpb25cIlxuICAgIFtuelBsYWNlSG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyIHx8ICcnXCJcbiAgICBbc3R5bGUud2lkdGhdPVwid2lkdGhcIlxuICAgIFtuZ0NsYXNzXT1cInsgJ2FudC1pbnB1dC1udW1iZXJfX2hpZGUtc3RlcCc6IHVpLmhpZGVTdGVwIH1cIlxuICA+XG4gIDwvbnotaW5wdXQtbnVtYmVyPlxuPC9zZi1pdGVtLXdyYXA+XG4iXX0=