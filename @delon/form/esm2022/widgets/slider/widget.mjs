import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlUIWidget, DelonFormModule } from '@delon/form';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@delon/form";
import * as i3 from "ng-zorro-antd/slider";
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
    static { this.KEY = 'slider'; }
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: SliderWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.9", type: SliderWidget, isStandalone: true, selector: "sf-slider", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-slider
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzRange]="ui.range"
      [nzMin]="min"
      [nzMax]="max"
      [nzStep]="step"
      [nzMarks]="marks"
      [nzDots]="ui.dots"
      [nzIncluded]="included"
      [nzVertical]="ui.vertical"
      [nzTipFormatter]="_formatter"
      (nzOnAfterChange)="_afterChange($event)"
    />
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i2.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "ngmodule", type: NzSliderModule }, { kind: "component", type: i3.NzSliderComponent, selector: "nz-slider", inputs: ["nzDisabled", "nzDots", "nzIncluded", "nzRange", "nzVertical", "nzReverse", "nzDefaultValue", "nzMarks", "nzMax", "nzMin", "nzStep", "nzTooltipVisible", "nzTooltipPlacement", "nzTipFormatter"], outputs: ["nzOnAfterChange"], exportAs: ["nzSlider"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: SliderWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-slider',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-slider
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzRange]="ui.range"
      [nzMin]="min"
      [nzMax]="max"
      [nzStep]="step"
      [nzMarks]="marks"
      [nzDots]="ui.dots"
      [nzIncluded]="included"
      [nzVertical]="ui.vertical"
      [nzTipFormatter]="_formatter"
      (nzOnAfterChange)="_afterChange($event)"
    />
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [FormsModule, DelonFormModule, NzSliderModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL3NsaWRlci93aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0QsT0FBTyxFQUFXLGNBQWMsRUFBaUIsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFtQzlFLE1BQU0sT0FBTyxZQUFhLFNBQVEsZUFBcUM7SUEvQnZFOztRQXFDRSxVQUFLLEdBQW1CLElBQUksQ0FBQztRQWM3QixlQUFVLEdBQUcsQ0FBQyxLQUFhLEVBQVUsRUFBRTtZQUNyQyxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUM5QixJQUFJLFNBQVM7Z0JBQUUsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsT0FBTyxHQUFHLEtBQUssRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQztLQU1IO2FBN0JpQixRQUFHLEdBQUcsUUFBUSxBQUFYLENBQVk7SUFRL0IsUUFBUTtRQUNOLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxJQUFJLEdBQUcsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFFNUIsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sUUFBUSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDcEUsQ0FBQztJQVFELFlBQVksQ0FBQyxLQUFvQjtRQUMvQixNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNoQyxJQUFJLFdBQVc7WUFBRSxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDOzhHQTdCVSxZQUFZO2tHQUFaLFlBQVksNEZBN0JiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkF1Qk0sMkRBSU4sV0FBVyw4VkFBRSxlQUFlLHlMQUFFLGNBQWM7OzJGQUUzQyxZQUFZO2tCQS9CeEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkF1Qk07b0JBQ2hCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxjQUFjLENBQUM7aUJBQ3hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0LCBEZWxvbkZvcm1Nb2R1bGUgfSBmcm9tICdAZGVsb24vZm9ybSc7XG5pbXBvcnQgeyBOek1hcmtzLCBOelNsaWRlck1vZHVsZSwgTnpTbGlkZXJWYWx1ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2xpZGVyJztcblxuaW1wb3J0IHR5cGUgeyBTRlNsaWRlcldpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc2xpZGVyJyxcbiAgdGVtcGxhdGU6IGA8c2YtaXRlbS13cmFwXG4gICAgW2lkXT1cImlkXCJcbiAgICBbc2NoZW1hXT1cInNjaGVtYVwiXG4gICAgW3VpXT1cInVpXCJcbiAgICBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiXG4gICAgW2Vycm9yXT1cImVycm9yXCJcbiAgICBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiXG4gID5cbiAgICA8bnotc2xpZGVyXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelJhbmdlXT1cInVpLnJhbmdlXCJcbiAgICAgIFtuek1pbl09XCJtaW5cIlxuICAgICAgW256TWF4XT1cIm1heFwiXG4gICAgICBbbnpTdGVwXT1cInN0ZXBcIlxuICAgICAgW256TWFya3NdPVwibWFya3NcIlxuICAgICAgW256RG90c109XCJ1aS5kb3RzXCJcbiAgICAgIFtuekluY2x1ZGVkXT1cImluY2x1ZGVkXCJcbiAgICAgIFtuelZlcnRpY2FsXT1cInVpLnZlcnRpY2FsXCJcbiAgICAgIFtuelRpcEZvcm1hdHRlcl09XCJfZm9ybWF0dGVyXCJcbiAgICAgIChuek9uQWZ0ZXJDaGFuZ2UpPVwiX2FmdGVyQ2hhbmdlKCRldmVudClcIlxuICAgIC8+XG4gIDwvc2YtaXRlbS13cmFwPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIERlbG9uRm9ybU1vZHVsZSwgTnpTbGlkZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlcldpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRlNsaWRlcldpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0aWMgcmVhZG9ubHkgS0VZID0gJ3NsaWRlcic7XG5cbiAgbWluITogbnVtYmVyO1xuICBtYXghOiBudW1iZXI7XG4gIHN0ZXAhOiBudW1iZXI7XG4gIG1hcmtzOiBOek1hcmtzIHwgbnVsbCA9IG51bGw7XG4gIGluY2x1ZGVkITogYm9vbGVhbjtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IG1pbmltdW0sIG1heGltdW0sIG11bHRpcGxlT2YgfSA9IHRoaXMuc2NoZW1hO1xuICAgIHRoaXMubWluID0gbWluaW11bSB8fCAwO1xuICAgIHRoaXMubWF4ID0gbWF4aW11bSB8fCAxMDA7XG4gICAgdGhpcy5zdGVwID0gbXVsdGlwbGVPZiB8fCAxO1xuXG4gICAgY29uc3QgeyBtYXJrcywgaW5jbHVkZWQgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5tYXJrcyA9IG1hcmtzIHx8IG51bGw7XG4gICAgdGhpcy5pbmNsdWRlZCA9IHR5cGVvZiBpbmNsdWRlZCA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogaW5jbHVkZWQ7XG4gIH1cblxuICBfZm9ybWF0dGVyID0gKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IHsgZm9ybWF0dGVyIH0gPSB0aGlzLnVpO1xuICAgIGlmIChmb3JtYXR0ZXIpIHJldHVybiBmb3JtYXR0ZXIodmFsdWUpO1xuICAgIHJldHVybiBgJHt2YWx1ZX1gO1xuICB9O1xuXG4gIF9hZnRlckNoYW5nZSh2YWx1ZTogTnpTbGlkZXJWYWx1ZSk6IHZvaWQge1xuICAgIGNvbnN0IHsgYWZ0ZXJDaGFuZ2UgfSA9IHRoaXMudWk7XG4gICAgaWYgKGFmdGVyQ2hhbmdlKSByZXR1cm4gYWZ0ZXJDaGFuZ2UodmFsdWUpO1xuICB9XG59XG4iXX0=