import * as i0 from '@angular/core';
import { ViewEncapsulation, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { format } from 'date-fns';
import * as i1$1 from '@delon/form';
import { ControlUIWidget, toBool, DelonFormModule } from '@delon/form';
import * as i3 from 'ng-zorro-antd/time-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

class TimeWidget extends ControlUIWidget {
    static KEY = 'time';
    valueFormat;
    displayValue = null;
    i;
    ngOnInit() {
        const ui = this.ui;
        this.valueFormat = ui._format;
        const opt = {
            displayFormat: ui.displayFormat ?? 'HH:mm:ss',
            allowEmpty: toBool(ui.allowEmpty, true),
            clearText: ui.clearText ?? '清除',
            defaultOpenValue: ui.defaultOpenValue ?? new Date(),
            hideDisabledOptions: toBool(ui.hideDisabledOptions, false),
            use12Hours: toBool(ui.use12Hours, false),
            hourStep: ui.hourStep ?? 1,
            minuteStep: ui.minuteStep ?? 1,
            secondStep: ui.secondStep ?? 1
        };
        if (opt.use12Hours && !ui.displayFormat) {
            opt.displayFormat = `h:mm:ss a`;
        }
        this.i = opt;
    }
    reset(value) {
        if (value instanceof Date) {
            this.displayValue = value;
            this.detectChanges();
            return;
        }
        let v = value != null && value.toString().length ? new Date(value) : null;
        // trying restore full Date format
        if (v != null && v.toString() === 'Invalid Date') {
            if (value.toString().split(':').length <= 1) {
                value += ':00';
            }
            v = new Date(`1970-1-1 ${value}`);
        }
        this.displayValue = v;
        this.detectChanges();
    }
    _change(value) {
        if (this.ui.change) {
            this.ui.change(value);
        }
        if (value == null) {
            this.setValue(null);
            return;
        }
        if (this.ui.utcEpoch === true) {
            this.setValue(Date.UTC(1970, 0, 1, value.getHours(), value.getMinutes(), value.getSeconds()));
            return;
        }
        this.setValue(format(value, this.valueFormat));
    }
    _openChange(status) {
        if (this.ui.openChange) {
            this.ui.openChange(status);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: TimeWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.1.2", type: TimeWidget, isStandalone: true, selector: "sf-time", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-time-picker
      [nzId]="id"
      [(ngModel)]="displayValue"
      (ngModelChange)="_change($event)"
      [nzDisabled]="disabled"
      [nzSize]="$any(ui.size)"
      [nzFormat]="i.displayFormat"
      [nzAllowEmpty]="i.allowEmpty"
      [nzClearText]="i.clearText"
      [nzDefaultOpenValue]="i.defaultOpenValue"
      [nzDisabledHours]="ui.disabledHours"
      [nzDisabledMinutes]="ui.disabledMinutes"
      [nzDisabledSeconds]="ui.disabledSeconds"
      [nzHideDisabledOptions]="i.hideDisabledOptions"
      [nzUse12Hours]="i.use12Hours"
      [nzHourStep]="i.hourStep"
      [nzMinuteStep]="i.minuteStep"
      [nzSecondStep]="i.secondStep"
      [nzPopupClassName]="ui.popupClassName!"
      [nzPlaceHolder]="ui.placeholder!"
      [nzNowText]="ui.nowText!"
      [nzOkText]="ui.okText!"
      (nzOpenChange)="_openChange($event)"
    />
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i1$1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "ngmodule", type: NzTimePickerModule }, { kind: "component", type: i3.NzTimePickerComponent, selector: "nz-time-picker", inputs: ["nzId", "nzSize", "nzStatus", "nzVariant", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzClearText", "nzNowText", "nzOkText", "nzPopupClassName", "nzPlaceHolder", "nzAddOn", "nzDefaultOpenValue", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzFormat", "nzOpen", "nzUse12Hours", "nzSuffixIcon", "nzHideDisabledOptions", "nzAllowEmpty", "nzDisabled", "nzAutoFocus", "nzBackdrop", "nzInputReadOnly"], outputs: ["nzOpenChange"], exportAs: ["nzTimePicker"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: TimeWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-time',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-time-picker
      [nzId]="id"
      [(ngModel)]="displayValue"
      (ngModelChange)="_change($event)"
      [nzDisabled]="disabled"
      [nzSize]="$any(ui.size)"
      [nzFormat]="i.displayFormat"
      [nzAllowEmpty]="i.allowEmpty"
      [nzClearText]="i.clearText"
      [nzDefaultOpenValue]="i.defaultOpenValue"
      [nzDisabledHours]="ui.disabledHours"
      [nzDisabledMinutes]="ui.disabledMinutes"
      [nzDisabledSeconds]="ui.disabledSeconds"
      [nzHideDisabledOptions]="i.hideDisabledOptions"
      [nzUse12Hours]="i.use12Hours"
      [nzHourStep]="i.hourStep"
      [nzMinuteStep]="i.minuteStep"
      [nzSecondStep]="i.secondStep"
      [nzPopupClassName]="ui.popupClassName!"
      [nzPlaceHolder]="ui.placeholder!"
      [nzNowText]="ui.nowText!"
      [nzOkText]="ui.okText!"
      (nzOpenChange)="_openChange($event)"
    />
  </sf-item-wrap>`,
                    encapsulation: ViewEncapsulation.None,
                    imports: [FormsModule, DelonFormModule, NzTimePickerModule]
                }]
        }] });

class TimeWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(TimeWidget.KEY, TimeWidget);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: TimeWidgetModule, deps: [{ token: i1$1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.1.2", ngImport: i0, type: TimeWidgetModule, imports: [FormsModule, DelonFormModule, NzTimePickerModule, TimeWidget] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: TimeWidgetModule, imports: [FormsModule, DelonFormModule, NzTimePickerModule, TimeWidget] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: TimeWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzTimePickerModule, TimeWidget]
                }]
        }], ctorParameters: () => [{ type: i1$1.WidgetRegistry }] });

function withTimeWidget() {
    return { KEY: TimeWidget.KEY, type: TimeWidget };
}

/**
 * Generated bundle index. Do not edit.
 */

export { TimeWidget, TimeWidgetModule, withTimeWidget };
//# sourceMappingURL=widgets-time.mjs.map
