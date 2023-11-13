import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlUIWidget, DelonFormModule, toBool } from '@delon/form';
import { NzRateModule } from 'ng-zorro-antd/rate';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@delon/form";
import * as i3 from "ng-zorro-antd/rate";
export class RateWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.hasText = false;
    }
    static { this.KEY = 'rate'; }
    get text() {
        return this.ui.text.replace('{{value}}', this.formProperty.value);
    }
    ngOnInit() {
        const { schema, ui } = this;
        this.count = schema.maximum || 5;
        this.allowHalf = (schema.multipleOf || 0.5) === 0.5;
        this.allowClear = toBool(ui.allowClear, true);
        this.autoFocus = toBool(ui.autoFocus, false);
        this.hasText = !!ui.text;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: RateWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.2", type: RateWidget, isStandalone: true, selector: "sf-rate", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-rate
      [nzDisabled]="disabled"
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzAllowClear]="allowClear"
      [nzAllowHalf]="allowHalf"
      [nzTooltips]="ui.tooltips || []"
      [nzAutoFocus]="autoFocus"
      [nzCount]="$any(count)"
    />
    @if (hasText && formProperty.value) {
    <span class="ant-rate-text">{{ text }}</span>
    }
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i2.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "ngmodule", type: NzRateModule }, { kind: "component", type: i3.NzRateComponent, selector: "nz-rate", inputs: ["nzAllowClear", "nzAllowHalf", "nzDisabled", "nzAutoFocus", "nzCharacter", "nzCount", "nzTooltips"], outputs: ["nzOnBlur", "nzOnFocus", "nzOnHoverChange", "nzOnKeyDown"], exportAs: ["nzRate"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: RateWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-rate',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-rate
      [nzDisabled]="disabled"
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzAllowClear]="allowClear"
      [nzAllowHalf]="allowHalf"
      [nzTooltips]="ui.tooltips || []"
      [nzAutoFocus]="autoFocus"
      [nzCount]="$any(count)"
    />
    @if (hasText && formProperty.value) {
    <span class="ant-rate-text">{{ text }}</span>
    }
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [FormsModule, DelonFormModule, NzRateModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL3JhdGUvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBaUNsRCxNQUFNLE9BQU8sVUFBVyxTQUFRLGVBQW1DO0lBN0JuRTs7UUFvQ0UsWUFBTyxHQUFHLEtBQUssQ0FBQztLQWNqQjthQXBCaUIsUUFBRyxHQUFHLE1BQU0sQUFBVCxDQUFVO0lBUTdCLElBQUksSUFBSTtRQUNOLE9BQVEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFlLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDM0IsQ0FBQzs4R0FwQlUsVUFBVTtrR0FBVixVQUFVLDBGQTNCWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQXFCTSwyREFJTixXQUFXLDhWQUFFLGVBQWUseUxBQUUsWUFBWTs7MkZBRXpDLFVBQVU7a0JBN0J0QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFxQk07b0JBQ2hCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxZQUFZLENBQUM7aUJBQ3REIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0LCBEZWxvbkZvcm1Nb2R1bGUsIHRvQm9vbCB9IGZyb20gJ0BkZWxvbi9mb3JtJztcbmltcG9ydCB7IE56UmF0ZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmF0ZSc7XG5cbmltcG9ydCB0eXBlIHsgU0ZSYXRlV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1yYXRlJyxcbiAgdGVtcGxhdGU6IGA8c2YtaXRlbS13cmFwXG4gICAgW2lkXT1cImlkXCJcbiAgICBbc2NoZW1hXT1cInNjaGVtYVwiXG4gICAgW3VpXT1cInVpXCJcbiAgICBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiXG4gICAgW2Vycm9yXT1cImVycm9yXCJcbiAgICBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiXG4gID5cbiAgICA8bnotcmF0ZVxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICBbbnpBbGxvd0NsZWFyXT1cImFsbG93Q2xlYXJcIlxuICAgICAgW256QWxsb3dIYWxmXT1cImFsbG93SGFsZlwiXG4gICAgICBbbnpUb29sdGlwc109XCJ1aS50b29sdGlwcyB8fCBbXVwiXG4gICAgICBbbnpBdXRvRm9jdXNdPVwiYXV0b0ZvY3VzXCJcbiAgICAgIFtuekNvdW50XT1cIiRhbnkoY291bnQpXCJcbiAgICAvPlxuICAgIEBpZiAoaGFzVGV4dCAmJiBmb3JtUHJvcGVydHkudmFsdWUpIHtcbiAgICA8c3BhbiBjbGFzcz1cImFudC1yYXRlLXRleHRcIj57eyB0ZXh0IH19PC9zcGFuPlxuICAgIH1cbiAgPC9zZi1pdGVtLXdyYXA+YCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgRGVsb25Gb3JtTW9kdWxlLCBOelJhdGVNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFJhdGVXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZSYXRlV2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHN0YXRpYyByZWFkb25seSBLRVkgPSAncmF0ZSc7XG5cbiAgY291bnQhOiBudW1iZXI7XG4gIGFsbG93SGFsZiE6IGJvb2xlYW47XG4gIGFsbG93Q2xlYXIhOiBib29sZWFuO1xuICBhdXRvRm9jdXMhOiBib29sZWFuO1xuICBoYXNUZXh0ID0gZmFsc2U7XG5cbiAgZ2V0IHRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKHRoaXMudWkudGV4dCBhcyBzdHJpbmcpLnJlcGxhY2UoJ3t7dmFsdWV9fScsIHRoaXMuZm9ybVByb3BlcnR5LnZhbHVlKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgc2NoZW1hLCB1aSB9ID0gdGhpcztcbiAgICB0aGlzLmNvdW50ID0gc2NoZW1hLm1heGltdW0gfHwgNTtcbiAgICB0aGlzLmFsbG93SGFsZiA9IChzY2hlbWEubXVsdGlwbGVPZiB8fCAwLjUpID09PSAwLjU7XG4gICAgdGhpcy5hbGxvd0NsZWFyID0gdG9Cb29sKHVpLmFsbG93Q2xlYXIsIHRydWUpO1xuICAgIHRoaXMuYXV0b0ZvY3VzID0gdG9Cb29sKHVpLmF1dG9Gb2N1cywgZmFsc2UpO1xuICAgIHRoaXMuaGFzVGV4dCA9ICEhdWkudGV4dDtcbiAgfVxufVxuIl19