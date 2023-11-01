import { Component } from '@angular/core';
import { ControlUIWidget } from '@delon/form';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@delon/form";
import * as i3 from "ngx-tinymce";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TinymceWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: TinymceWidget, selector: "sf-widget-tinymce", usesInheritance: true, ngImport: i0, template: `
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
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i2.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "component", type: i3.TinymceComponent, selector: "tinymce", inputs: ["config", "placeholder", "inline", "disabled", "loading", "delay"], outputs: ["ready"], exportAs: ["tinymce"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TinymceWidget, decorators: [{
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
  `
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzLXRoaXJkL3RpbnltY2Uvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7QUE0QjlDLE1BQU0sT0FBTyxhQUFjLFNBQVEsZUFBb0M7YUFDckQsUUFBRyxHQUFHLFNBQVMsQUFBWixDQUFhO0lBRWhDLE1BQU0sQ0FBQyxLQUFhO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQW1CO1FBQ3hCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQzsrR0FWVSxhQUFhO21HQUFiLGFBQWEsZ0ZBckJkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJUOzs0RkFFVSxhQUFhO2tCQXZCekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlQ7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnQGRlbG9uL2Zvcm0nO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgdHlwZSB7IFRpbnltY2VXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXdpZGdldC10aW55bWNlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2YtaXRlbS13cmFwXG4gICAgICBbaWRdPVwiaWRcIlxuICAgICAgW3NjaGVtYV09XCJzY2hlbWFcIlxuICAgICAgW3VpXT1cInVpXCJcbiAgICAgIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCJcbiAgICAgIFtlcnJvcl09XCJlcnJvclwiXG4gICAgICBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiXG4gICAgPlxuICAgICAgPHRpbnltY2VcbiAgICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtjb25maWddPVwidWkuY29uZmlnXCJcbiAgICAgICAgW2lubGluZV09XCJ1aS5pbmxpbmUgPz8gZmFsc2VcIlxuICAgICAgICBbZGVsYXldPVwidWkuZGVsYXkgPz8gMFwiXG4gICAgICAgIFtsb2FkaW5nXT1cInVpLmxvYWRpbmcgPz8gJ0xvYWRpbmcuLi4nXCJcbiAgICAgICAgKHJlYWR5KT1cIl9yZWFkeSgkZXZlbnQpXCJcbiAgICAgIC8+XG4gICAgPC9zZi1pdGVtLXdyYXA+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgVGlueW1jZVdpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxUaW55bWNlV2lkZ2V0U2NoZW1hPiB7XG4gIHN0YXRpYyByZWFkb25seSBLRVkgPSAndGlueW1jZSc7XG5cbiAgY2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIF9yZWFkeShpbnN0YW5jZTogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkucmVhZHkpIHRoaXMudWkucmVhZHkoaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=