import { Component } from '@angular/core';
import { ControlUIWidget } from '@delon/form';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@delon/form";
import * as i3 from "@ng-util/monaco-editor";
export class MonacoEditorWidget extends ControlUIWidget {
    static { this.KEY = 'monaco-editor'; }
    _change(value) {
        this.setValue(value);
        if (this.ui.change)
            this.ui.change(value);
    }
    _event(ev) {
        if (this.ui.event)
            this.ui.event(ev);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: MonacoEditorWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: MonacoEditorWidget, selector: "sf-widget-monaco-editor", usesInheritance: true, ngImport: i0, template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <nu-monaco-editor
        [ngModel]="value"
        (ngModelChange)="_change($event)"
        [options]="ui.options ?? {}"
        [disabled]="disabled"
        [model]="ui.model"
        [autoFormat]="ui.autoFormat ?? true"
        [height]="ui.height ?? '200px'"
        [delay]="ui.delay ?? 0"
        (event)="_event($event)"
      />
    </sf-item-wrap>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i2.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "component", type: i3.NuMonacoEditorComponent, selector: "nu-monaco-editor", inputs: ["model", "autoFormat"], exportAs: ["nuMonacoEditor"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: MonacoEditorWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-widget-monaco-editor',
                    template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <nu-monaco-editor
        [ngModel]="value"
        (ngModelChange)="_change($event)"
        [options]="ui.options ?? {}"
        [disabled]="disabled"
        [model]="ui.model"
        [autoFormat]="ui.autoFormat ?? true"
        [height]="ui.height ?? '200px'"
        [delay]="ui.delay ?? 0"
        (event)="_event($event)"
      />
    </sf-item-wrap>
  `
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzLXRoaXJkL21vbmFjby1lZGl0b3Ivd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7Ozs7QUE2QjlDLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxlQUF5QzthQUMvRCxRQUFHLEdBQUcsZUFBZSxBQUFsQixDQUFtQjtJQUV0QyxPQUFPLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELE1BQU0sQ0FBQyxFQUF1QjtRQUM1QixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSztZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7K0dBVlUsa0JBQWtCO21HQUFsQixrQkFBa0Isc0ZBdkJuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJUOzs0RkFFVSxrQkFBa0I7a0JBekI5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJUO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB0eXBlIHsgTnVNb25hY29FZGl0b3JFdmVudCB9IGZyb20gJ0BuZy11dGlsL21vbmFjby1lZGl0b3InO1xuXG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICdAZGVsb24vZm9ybSc7XG5cbmltcG9ydCB0eXBlIHsgTW9uYWNvRWRpdG9yV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi13aWRnZXQtbW9uYWNvLWVkaXRvcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNmLWl0ZW0td3JhcFxuICAgICAgW2lkXT1cImlkXCJcbiAgICAgIFtzY2hlbWFdPVwic2NoZW1hXCJcbiAgICAgIFt1aV09XCJ1aVwiXG4gICAgICBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiXG4gICAgICBbZXJyb3JdPVwiZXJyb3JcIlxuICAgICAgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIlxuICAgID5cbiAgICAgIDxudS1tb25hY28tZWRpdG9yXG4gICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW29wdGlvbnNdPVwidWkub3B0aW9ucyA/PyB7fVwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFttb2RlbF09XCJ1aS5tb2RlbFwiXG4gICAgICAgIFthdXRvRm9ybWF0XT1cInVpLmF1dG9Gb3JtYXQgPz8gdHJ1ZVwiXG4gICAgICAgIFtoZWlnaHRdPVwidWkuaGVpZ2h0ID8/ICcyMDBweCdcIlxuICAgICAgICBbZGVsYXldPVwidWkuZGVsYXkgPz8gMFwiXG4gICAgICAgIChldmVudCk9XCJfZXZlbnQoJGV2ZW50KVwiXG4gICAgICAvPlxuICAgIDwvc2YtaXRlbS13cmFwPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE1vbmFjb0VkaXRvcldpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxNb25hY29FZGl0b3JXaWRnZXRTY2hlbWE+IHtcbiAgc3RhdGljIHJlYWRvbmx5IEtFWSA9ICdtb25hY28tZWRpdG9yJztcblxuICBfY2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHZhbHVlKTtcbiAgfVxuXG4gIF9ldmVudChldjogTnVNb25hY29FZGl0b3JFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmV2ZW50KSB0aGlzLnVpLmV2ZW50KGV2KTtcbiAgfVxufVxuIl19