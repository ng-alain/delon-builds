import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TinymceComponent } from 'ngx-tinymce';
import { ControlUIWidget, DelonFormModule } from '@delon/form';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@delon/form";
export class TinymceWidget extends ControlUIWidget {
    static { this.KEY = 'tinymce'; }
    change(value) {
        this.setValue(value);
        if (this.ui.change)
            this.ui.change(value);
    }
    _ready(instance) {
        if (this.ui.ready)
            this.ui.ready(instance);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: TinymceWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0", type: TinymceWidget, isStandalone: true, selector: "sf-widget-tinymce", usesInheritance: true, ngImport: i0, template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <tinymce
        [ngModel]="value"
        (ngModelChange)="change($event)"
        [config]="ui.config"
        [inline]="ui.inline ?? false"
        [delay]="ui.delay ?? 0"
        [loading]="ui.loading ?? 'Loading...'"
        (ready)="_ready($event)"
      />
    </sf-item-wrap>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i2.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "component", type: TinymceComponent, selector: "tinymce", inputs: ["config", "placeholder", "inline", "disabled", "loading", "delay"], outputs: ["ready"], exportAs: ["tinymce"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: TinymceWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-widget-tinymce',
                    template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <tinymce
        [ngModel]="value"
        (ngModelChange)="change($event)"
        [config]="ui.config"
        [inline]="ui.inline ?? false"
        [delay]="ui.delay ?? 0"
        [loading]="ui.loading ?? 'Loading...'"
        (ready)="_ready($event)"
      />
    </sf-item-wrap>
  `,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [FormsModule, DelonFormModule, TinymceComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzLXRoaXJkL3RpbnltY2Uvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQWdDL0QsTUFBTSxPQUFPLGFBQWMsU0FBUSxlQUFvQzthQUNyRCxRQUFHLEdBQUcsU0FBUyxBQUFaLENBQWE7SUFFaEMsTUFBTSxDQUFDLEtBQWE7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBbUI7UUFDeEIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDOzhHQVZVLGFBQWE7a0dBQWIsYUFBYSxvR0F6QmQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlQsMkRBSVMsV0FBVyw4VkFBRSxlQUFlLDBMQUFFLGdCQUFnQjs7MkZBRTdDLGFBQWE7a0JBM0J6QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CVDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7aUJBQzFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFRpbnltY2VDb21wb25lbnQgfSBmcm9tICduZ3gtdGlueW1jZSc7XG5cbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCwgRGVsb25Gb3JtTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2Zvcm0nO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgdHlwZSB7IFRpbnltY2VXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXdpZGdldC10aW55bWNlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2YtaXRlbS13cmFwXG4gICAgICBbaWRdPVwiaWRcIlxuICAgICAgW3NjaGVtYV09XCJzY2hlbWFcIlxuICAgICAgW3VpXT1cInVpXCJcbiAgICAgIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCJcbiAgICAgIFtlcnJvcl09XCJlcnJvclwiXG4gICAgICBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiXG4gICAgPlxuICAgICAgPHRpbnltY2VcbiAgICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtjb25maWddPVwidWkuY29uZmlnXCJcbiAgICAgICAgW2lubGluZV09XCJ1aS5pbmxpbmUgPz8gZmFsc2VcIlxuICAgICAgICBbZGVsYXldPVwidWkuZGVsYXkgPz8gMFwiXG4gICAgICAgIFtsb2FkaW5nXT1cInVpLmxvYWRpbmcgPz8gJ0xvYWRpbmcuLi4nXCJcbiAgICAgICAgKHJlYWR5KT1cIl9yZWFkeSgkZXZlbnQpXCJcbiAgICAgIC8+XG4gICAgPC9zZi1pdGVtLXdyYXA+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIERlbG9uRm9ybU1vZHVsZSwgVGlueW1jZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVGlueW1jZVdpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxUaW55bWNlV2lkZ2V0U2NoZW1hPiB7XG4gIHN0YXRpYyByZWFkb25seSBLRVkgPSAndGlueW1jZSc7XG5cbiAgY2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIF9yZWFkeShpbnN0YW5jZTogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkucmVhZHkpIHRoaXMudWkucmVhZHkoaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=