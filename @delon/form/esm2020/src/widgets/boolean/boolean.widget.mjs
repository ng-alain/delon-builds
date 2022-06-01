import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "../../sf-item-wrap.component";
import * as i2 from "ng-zorro-antd/switch";
import * as i3 from "@angular/forms";
export class BooleanWidget extends ControlUIWidget {
}
BooleanWidget.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: BooleanWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
BooleanWidget.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: BooleanWidget, selector: "sf-boolean", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-switch\n    [ngModel]=\"value\"\n    (ngModelChange)=\"setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"ui.size!\"\n    [nzCheckedChildren]=\"ui.checkedChildren!\"\n    [nzUnCheckedChildren]=\"ui.unCheckedChildren!\"\n  >\n  </nz-switch>\n</sf-item-wrap>\n", components: [{ type: i1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { type: i2.NzSwitchComponent, selector: "nz-switch", inputs: ["nzLoading", "nzDisabled", "nzControl", "nzCheckedChildren", "nzUnCheckedChildren", "nzSize"], exportAs: ["nzSwitch"] }], directives: [{ type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: BooleanWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-boolean', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-switch\n    [ngModel]=\"value\"\n    (ngModelChange)=\"setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"ui.size!\"\n    [nzCheckedChildren]=\"ui.checkedChildren!\"\n    [nzUnCheckedChildren]=\"ui.unCheckedChildren!\"\n  >\n  </nz-switch>\n</sf-item-wrap>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi53aWRnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL2Jvb2xlYW4vYm9vbGVhbi53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL2Jvb2xlYW4vYm9vbGVhbi53aWRnZXQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7O0FBUy9DLE1BQU0sT0FBTyxhQUFjLFNBQVEsZUFBc0M7OzJHQUE1RCxhQUFhOytGQUFiLGFBQWEseUVDWDFCLDhaQVdBOzRGREFhLGFBQWE7a0JBTnpCLFNBQVM7K0JBQ0UsWUFBWSx1QkFFRCxLQUFLLGlCQUNYLGlCQUFpQixDQUFDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRkJvb2xlYW5XaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWJvb2xlYW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vYm9vbGVhbi53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5XaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZCb29sZWFuV2lkZ2V0U2NoZW1hPiB7fVxuIiwiPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgPG56LXN3aXRjaFxuICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgW256U2l6ZV09XCJ1aS5zaXplIVwiXG4gICAgW256Q2hlY2tlZENoaWxkcmVuXT1cInVpLmNoZWNrZWRDaGlsZHJlbiFcIlxuICAgIFtuelVuQ2hlY2tlZENoaWxkcmVuXT1cInVpLnVuQ2hlY2tlZENoaWxkcmVuIVwiXG4gID5cbiAgPC9uei1zd2l0Y2g+XG48L3NmLWl0ZW0td3JhcD5cbiJdfQ==