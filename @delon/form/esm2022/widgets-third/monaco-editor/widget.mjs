import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NuMonacoEditorComponent } from '@ng-util/monaco-editor';
import { ControlUIWidget, DelonFormModule } from '@delon/form';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@delon/form";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: MonacoEditorWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.9", type: MonacoEditorWidget, isStandalone: true, selector: "sf-widget-monaco-editor", usesInheritance: true, ngImport: i0, template: `
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
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i2.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "component", type: NuMonacoEditorComponent, selector: "nu-monaco-editor", inputs: ["model", "autoFormat"], exportAs: ["nuMonacoEditor"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: MonacoEditorWidget, decorators: [{
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
  `,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [FormsModule, DelonFormModule, NuMonacoEditorComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzLXRoaXJkL21vbmFjby1lZGl0b3Ivd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSx1QkFBdUIsRUFBNEIsTUFBTSx3QkFBd0IsQ0FBQztBQUUzRixPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQWlDL0QsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGVBQXlDO2FBQy9ELFFBQUcsR0FBRyxlQUFlLEFBQWxCLENBQW1CO0lBRXRDLE9BQU8sQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQXVCO1FBQzVCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs4R0FWVSxrQkFBa0I7a0dBQWxCLGtCQUFrQiwwR0EzQm5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQlQsMkRBSVMsV0FBVyw4VkFBRSxlQUFlLDBMQUFFLHVCQUF1Qjs7MkZBRXBELGtCQUFrQjtrQkE3QjlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQlQ7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFVBQVUsRUFBRSxJQUFJO29CQUNoQixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixDQUFDO2lCQUNqRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBOdU1vbmFjb0VkaXRvckNvbXBvbmVudCwgdHlwZSBOdU1vbmFjb0VkaXRvckV2ZW50IH0gZnJvbSAnQG5nLXV0aWwvbW9uYWNvLWVkaXRvcic7XG5cbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCwgRGVsb25Gb3JtTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2Zvcm0nO1xuXG5pbXBvcnQgdHlwZSB7IE1vbmFjb0VkaXRvcldpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytd2lkZ2V0LW1vbmFjby1lZGl0b3InLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzZi1pdGVtLXdyYXBcbiAgICAgIFtpZF09XCJpZFwiXG4gICAgICBbc2NoZW1hXT1cInNjaGVtYVwiXG4gICAgICBbdWldPVwidWlcIlxuICAgICAgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIlxuICAgICAgW2Vycm9yXT1cImVycm9yXCJcbiAgICAgIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCJcbiAgICA+XG4gICAgICA8bnUtbW9uYWNvLWVkaXRvclxuICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtvcHRpb25zXT1cInVpLm9wdGlvbnMgPz8ge31cIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbbW9kZWxdPVwidWkubW9kZWxcIlxuICAgICAgICBbYXV0b0Zvcm1hdF09XCJ1aS5hdXRvRm9ybWF0ID8/IHRydWVcIlxuICAgICAgICBbaGVpZ2h0XT1cInVpLmhlaWdodCA/PyAnMjAwcHgnXCJcbiAgICAgICAgW2RlbGF5XT1cInVpLmRlbGF5ID8/IDBcIlxuICAgICAgICAoZXZlbnQpPVwiX2V2ZW50KCRldmVudClcIlxuICAgICAgLz5cbiAgICA8L3NmLWl0ZW0td3JhcD5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgRGVsb25Gb3JtTW9kdWxlLCBOdU1vbmFjb0VkaXRvckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTW9uYWNvRWRpdG9yV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PE1vbmFjb0VkaXRvcldpZGdldFNjaGVtYT4ge1xuICBzdGF0aWMgcmVhZG9ubHkgS0VZID0gJ21vbmFjby1lZGl0b3InO1xuXG4gIF9jaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UodmFsdWUpO1xuICB9XG5cbiAgX2V2ZW50KGV2OiBOdU1vbmFjb0VkaXRvckV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuZXZlbnQpIHRoaXMudWkuZXZlbnQoZXYpO1xuICB9XG59XG4iXX0=