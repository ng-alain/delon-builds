import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/icon";
import * as i4 from "ng-zorro-antd/checkbox";
import * as i5 from "ng-zorro-antd/menu";
import * as i6 from "ng-zorro-antd/dropdown";
import * as i7 from "ng-zorro-antd/radio";
import * as i8 from "ng-zorro-antd/input";
import * as i9 from "ng-zorro-antd/input-number";
import * as i10 from "ng-zorro-antd/date-picker";
export class STFilterComponent {
    get icon() {
        return this.f.icon;
    }
    constructor(cdr) {
        this.cdr = cdr;
        this.visible = false;
        this.locale = {};
        this.n = new EventEmitter();
        this.handle = new EventEmitter();
    }
    stopPropagation($event) {
        $event.stopPropagation();
    }
    checkboxChange() {
        this.n.emit(this.f.menus?.filter(w => w.checked));
    }
    radioChange(item) {
        this.f.menus.forEach(i => (i.checked = false));
        item.checked = !item.checked;
        this.n.emit(item);
    }
    close(result) {
        if (result != null)
            this.handle.emit(result);
        this.visible = false;
        this.cdr.detectChanges();
    }
    confirm() {
        this.handle.emit(true);
        return this;
    }
    reset() {
        this.handle.emit(false);
        return this;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: STFilterComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.6", type: STFilterComponent, selector: "st-filter", inputs: { col: "col", locale: "locale", f: "f" }, outputs: { n: "n", handle: "handle" }, host: { properties: { "class.ant-table-filter-trigger-container": "true", "class.st__filter": "true", "class.ant-table-filter-trigger-container-open": "visible" } }, ngImport: i0, template: `
    <span
      class="ant-table-filter-trigger"
      [class.active]="visible || f.default"
      nz-dropdown
      [nzDropdownMenu]="filterMenu"
      nzTrigger="click"
      [nzClickHide]="false"
      [(nzVisible)]="visible"
      nzOverlayClassName="st__filter-wrap"
      (click)="stopPropagation($event)"
    >
      <i nz-icon [nzType]="icon.type" [nzTheme]="icon.theme!"></i>
    </span>
    <nz-dropdown-menu #filterMenu="nzDropdownMenu">
      <div class="ant-table-filter-dropdown">
        @switch (f.type) {
          @case ('keyword') {
            <div class="st__filter-keyword">
              <input
                type="text"
                nz-input
                [attr.placeholder]="f.placeholder"
                [(ngModel)]="f.menus![0]!.value"
                (ngModelChange)="n.emit($event)"
                (keyup.enter)="confirm()"
              />
            </div>
          }
          @case ('number') {
            <div class="p-sm st__filter-number">
              <nz-input-number
                [(ngModel)]="f.menus![0]!.value"
                (ngModelChange)="n.emit($event)"
                [nzMin]="f.number!.min!"
                [nzMax]="f.number!.max!"
                [nzStep]="f.number!.step!"
                [nzPrecision]="f.number!.precision"
                [nzPlaceHolder]="f.placeholder!"
                class="width-100"
              />
            </div>
          }
          @case ('date') {
            <div class="p-sm st__filter-date">
              @if (f.date!.range) {
                <nz-range-picker
                  nzInline
                  [nzMode]="f.date!.mode"
                  [(ngModel)]="f.menus![0]!.value"
                  (ngModelChange)="n.emit($event)"
                  [nzShowNow]="f.date!.showNow"
                  [nzShowToday]="f.date!.showToday"
                  [nzDisabledDate]="f.date!.disabledDate"
                  [nzDisabledTime]="f.date!.disabledTime"
                />
              } @else {
                <nz-date-picker
                  nzInline
                  [nzMode]="f.date!.mode"
                  [(ngModel)]="f.menus![0]!.value"
                  (ngModelChange)="n.emit($event)"
                  [nzShowNow]="f.date!.showNow"
                  [nzShowToday]="f.date!.showToday"
                  [nzDisabledDate]="f.date!.disabledDate"
                  [nzDisabledTime]="f.date!.disabledTime"
                />
              }
            </div>
          }
          @case ('custom') {
            <div class="st__filter-custom">
              <ng-template
                [ngTemplateOutlet]="f.custom!"
                [ngTemplateOutletContext]="{ $implicit: f, col: col, handle: this }"
              />
            </div>
          }
          @default {
            <ul nz-menu>
              @for (filter of f.menus; track $index) {
                <li nz-menu-item>
                  @if (f.multiple) {
                    <label nz-checkbox [(ngModel)]="filter.checked" (ngModelChange)="checkboxChange()">
                      {{ filter.text }}
                    </label>
                  } @else {
                    <label nz-radio [ngModel]="filter.checked" (ngModelChange)="radioChange(filter)">
                      {{ filter.text }}
                    </label>
                  }
                </li>
              }
            </ul>
          }
        }
        @if (f.showOPArea) {
          <div class="ant-table-filter-dropdown-btns">
            <a class="ant-table-filter-dropdown-link confirm" (click)="confirm()">
              <span>{{ f.confirmText || locale.filterConfirm }}</span>
            </a>
            <a class="ant-table-filter-dropdown-link clear" (click)="reset()">
              <span>{{ f.clearText || locale.filterReset }}</span>
            </a>
          </div>
        }
      </div>
    </nz-dropdown-menu>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i4.NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "directive", type: i5.NzMenuDirective, selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { kind: "component", type: i5.NzMenuItemComponent, selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }, { kind: "directive", type: i6.NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "component", type: i6.NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "component", type: i7.NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus"], exportAs: ["nzRadio"] }, { kind: "directive", type: i8.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStepperless", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "component", type: i9.NzInputNumberComponent, selector: "nz-input-number", inputs: ["nzSize", "nzMin", "nzMax", "nzParser", "nzPrecision", "nzPrecisionMode", "nzPlaceHolder", "nzStatus", "nzStep", "nzInputMode", "nzId", "nzDisabled", "nzReadOnly", "nzAutoFocus", "nzBorderless", "nzFormatter"], outputs: ["nzBlur", "nzFocus"], exportAs: ["nzInputNumber"] }, { kind: "component", type: i10.NzDatePickerComponent, selector: "nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker", inputs: ["nzAllowClear", "nzAutoFocus", "nzDisabled", "nzBorderless", "nzInputReadOnly", "nzInline", "nzOpen", "nzDisabledDate", "nzLocale", "nzPlaceHolder", "nzPopupStyle", "nzDropdownClassName", "nzSize", "nzStatus", "nzFormat", "nzDateRender", "nzDisabledTime", "nzRenderExtraFooter", "nzShowToday", "nzMode", "nzShowNow", "nzRanges", "nzDefaultPickerValue", "nzSeparator", "nzSuffixIcon", "nzBackdrop", "nzId", "nzPlacement", "nzShowWeekNumber", "nzShowTime"], outputs: ["nzOnPanelChange", "nzOnCalendarChange", "nzOnOk", "nzOnOpenChange"], exportAs: ["nzDatePicker"] }, { kind: "directive", type: i10.NzRangePickerComponent, selector: "nz-range-picker", exportAs: ["nzRangePicker"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: STFilterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'st-filter',
                    template: `
    <span
      class="ant-table-filter-trigger"
      [class.active]="visible || f.default"
      nz-dropdown
      [nzDropdownMenu]="filterMenu"
      nzTrigger="click"
      [nzClickHide]="false"
      [(nzVisible)]="visible"
      nzOverlayClassName="st__filter-wrap"
      (click)="stopPropagation($event)"
    >
      <i nz-icon [nzType]="icon.type" [nzTheme]="icon.theme!"></i>
    </span>
    <nz-dropdown-menu #filterMenu="nzDropdownMenu">
      <div class="ant-table-filter-dropdown">
        @switch (f.type) {
          @case ('keyword') {
            <div class="st__filter-keyword">
              <input
                type="text"
                nz-input
                [attr.placeholder]="f.placeholder"
                [(ngModel)]="f.menus![0]!.value"
                (ngModelChange)="n.emit($event)"
                (keyup.enter)="confirm()"
              />
            </div>
          }
          @case ('number') {
            <div class="p-sm st__filter-number">
              <nz-input-number
                [(ngModel)]="f.menus![0]!.value"
                (ngModelChange)="n.emit($event)"
                [nzMin]="f.number!.min!"
                [nzMax]="f.number!.max!"
                [nzStep]="f.number!.step!"
                [nzPrecision]="f.number!.precision"
                [nzPlaceHolder]="f.placeholder!"
                class="width-100"
              />
            </div>
          }
          @case ('date') {
            <div class="p-sm st__filter-date">
              @if (f.date!.range) {
                <nz-range-picker
                  nzInline
                  [nzMode]="f.date!.mode"
                  [(ngModel)]="f.menus![0]!.value"
                  (ngModelChange)="n.emit($event)"
                  [nzShowNow]="f.date!.showNow"
                  [nzShowToday]="f.date!.showToday"
                  [nzDisabledDate]="f.date!.disabledDate"
                  [nzDisabledTime]="f.date!.disabledTime"
                />
              } @else {
                <nz-date-picker
                  nzInline
                  [nzMode]="f.date!.mode"
                  [(ngModel)]="f.menus![0]!.value"
                  (ngModelChange)="n.emit($event)"
                  [nzShowNow]="f.date!.showNow"
                  [nzShowToday]="f.date!.showToday"
                  [nzDisabledDate]="f.date!.disabledDate"
                  [nzDisabledTime]="f.date!.disabledTime"
                />
              }
            </div>
          }
          @case ('custom') {
            <div class="st__filter-custom">
              <ng-template
                [ngTemplateOutlet]="f.custom!"
                [ngTemplateOutletContext]="{ $implicit: f, col: col, handle: this }"
              />
            </div>
          }
          @default {
            <ul nz-menu>
              @for (filter of f.menus; track $index) {
                <li nz-menu-item>
                  @if (f.multiple) {
                    <label nz-checkbox [(ngModel)]="filter.checked" (ngModelChange)="checkboxChange()">
                      {{ filter.text }}
                    </label>
                  } @else {
                    <label nz-radio [ngModel]="filter.checked" (ngModelChange)="radioChange(filter)">
                      {{ filter.text }}
                    </label>
                  }
                </li>
              }
            </ul>
          }
        }
        @if (f.showOPArea) {
          <div class="ant-table-filter-dropdown-btns">
            <a class="ant-table-filter-dropdown-link confirm" (click)="confirm()">
              <span>{{ f.confirmText || locale.filterConfirm }}</span>
            </a>
            <a class="ant-table-filter-dropdown-link clear" (click)="reset()">
              <span>{{ f.clearText || locale.filterReset }}</span>
            </a>
          </div>
        }
      </div>
    </nz-dropdown-menu>
  `,
                    host: {
                        '[class.ant-table-filter-trigger-container]': `true`,
                        '[class.st__filter]': `true`,
                        '[class.ant-table-filter-trigger-container-open]': `visible`
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { col: [{
                type: Input
            }], locale: [{
                type: Input
            }], f: [{
                type: Input
            }], n: [{
                type: Output
            }], handle: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBK0h2QixNQUFNLE9BQU8saUJBQWlCO0lBTzVCLElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFjLENBQUM7SUFDL0IsQ0FBQztJQUVELFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBVjFDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFUCxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBRWQsTUFBQyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDaEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFLWCxDQUFDO0lBRTlDLGVBQWUsQ0FBQyxNQUFrQjtRQUNoQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQXdCO1FBQ2xDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxLQUFLLENBQUMsTUFBZ0I7UUFDcEIsSUFBSSxNQUFNLElBQUksSUFBSTtZQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzhHQTFDVSxpQkFBaUI7a0dBQWpCLGlCQUFpQixnVEF0SGxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0R1Q7OzJGQVVVLGlCQUFpQjtrQkF4SDdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEdUO29CQUNELElBQUksRUFBRTt3QkFDSiw0Q0FBNEMsRUFBRSxNQUFNO3dCQUNwRCxvQkFBb0IsRUFBRSxNQUFNO3dCQUM1QixpREFBaUQsRUFBRSxTQUFTO3FCQUM3RDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDO3NGQUdVLEdBQUc7c0JBQVgsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csQ0FBQztzQkFBVCxLQUFLO2dCQUNhLENBQUM7c0JBQW5CLE1BQU07Z0JBQ1ksTUFBTTtzQkFBeEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHsgU1RDb2x1bW5GaWx0ZXIsIFNUQ29sdW1uRmlsdGVyTWVudSwgU1RJY29uIH0gZnJvbSAnLi9zdC5pbnRlcmZhY2VzJztcbmltcG9ydCB7IF9TVENvbHVtbiB9IGZyb20gJy4vc3QudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdC1maWx0ZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuXG4gICAgICBjbGFzcz1cImFudC10YWJsZS1maWx0ZXItdHJpZ2dlclwiXG4gICAgICBbY2xhc3MuYWN0aXZlXT1cInZpc2libGUgfHwgZi5kZWZhdWx0XCJcbiAgICAgIG56LWRyb3Bkb3duXG4gICAgICBbbnpEcm9wZG93bk1lbnVdPVwiZmlsdGVyTWVudVwiXG4gICAgICBuelRyaWdnZXI9XCJjbGlja1wiXG4gICAgICBbbnpDbGlja0hpZGVdPVwiZmFsc2VcIlxuICAgICAgWyhuelZpc2libGUpXT1cInZpc2libGVcIlxuICAgICAgbnpPdmVybGF5Q2xhc3NOYW1lPVwic3RfX2ZpbHRlci13cmFwXCJcbiAgICAgIChjbGljayk9XCJzdG9wUHJvcGFnYXRpb24oJGV2ZW50KVwiXG4gICAgPlxuICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cImljb24udHlwZVwiIFtuelRoZW1lXT1cImljb24udGhlbWUhXCI+PC9pPlxuICAgIDwvc3Bhbj5cbiAgICA8bnotZHJvcGRvd24tbWVudSAjZmlsdGVyTWVudT1cIm56RHJvcGRvd25NZW51XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXRhYmxlLWZpbHRlci1kcm9wZG93blwiPlxuICAgICAgICBAc3dpdGNoIChmLnR5cGUpIHtcbiAgICAgICAgICBAY2FzZSAoJ2tleXdvcmQnKSB7XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RfX2ZpbHRlci1rZXl3b3JkXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuei1pbnB1dFxuICAgICAgICAgICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cImYucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZi5tZW51cyFbMF0hLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJuLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGtleXVwLmVudGVyKT1cImNvbmZpcm0oKVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgQGNhc2UgKCdudW1iZXInKSB7XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1zbSBzdF9fZmlsdGVyLW51bWJlclwiPlxuICAgICAgICAgICAgICA8bnotaW5wdXQtbnVtYmVyXG4gICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmLm1lbnVzIVswXSEudmFsdWVcIlxuICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm4uZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBbbnpNaW5dPVwiZi5udW1iZXIhLm1pbiFcIlxuICAgICAgICAgICAgICAgIFtuek1heF09XCJmLm51bWJlciEubWF4IVwiXG4gICAgICAgICAgICAgICAgW256U3RlcF09XCJmLm51bWJlciEuc3RlcCFcIlxuICAgICAgICAgICAgICAgIFtuelByZWNpc2lvbl09XCJmLm51bWJlciEucHJlY2lzaW9uXCJcbiAgICAgICAgICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJmLnBsYWNlaG9sZGVyIVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ3aWR0aC0xMDBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgIEBjYXNlICgnZGF0ZScpIHtcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLXNtIHN0X19maWx0ZXItZGF0ZVwiPlxuICAgICAgICAgICAgICBAaWYgKGYuZGF0ZSEucmFuZ2UpIHtcbiAgICAgICAgICAgICAgICA8bnotcmFuZ2UtcGlja2VyXG4gICAgICAgICAgICAgICAgICBueklubGluZVxuICAgICAgICAgICAgICAgICAgW256TW9kZV09XCJmLmRhdGUhLm1vZGVcIlxuICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmLm1lbnVzIVswXSEudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwibi5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgW256U2hvd05vd109XCJmLmRhdGUhLnNob3dOb3dcIlxuICAgICAgICAgICAgICAgICAgW256U2hvd1RvZGF5XT1cImYuZGF0ZSEuc2hvd1RvZGF5XCJcbiAgICAgICAgICAgICAgICAgIFtuekRpc2FibGVkRGF0ZV09XCJmLmRhdGUhLmRpc2FibGVkRGF0ZVwiXG4gICAgICAgICAgICAgICAgICBbbnpEaXNhYmxlZFRpbWVdPVwiZi5kYXRlIS5kaXNhYmxlZFRpbWVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgICAgIDxuei1kYXRlLXBpY2tlclxuICAgICAgICAgICAgICAgICAgbnpJbmxpbmVcbiAgICAgICAgICAgICAgICAgIFtuek1vZGVdPVwiZi5kYXRlIS5tb2RlXCJcbiAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZi5tZW51cyFbMF0hLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm4uZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIFtuelNob3dOb3ddPVwiZi5kYXRlIS5zaG93Tm93XCJcbiAgICAgICAgICAgICAgICAgIFtuelNob3dUb2RheV09XCJmLmRhdGUhLnNob3dUb2RheVwiXG4gICAgICAgICAgICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwiZi5kYXRlIS5kaXNhYmxlZERhdGVcIlxuICAgICAgICAgICAgICAgICAgW256RGlzYWJsZWRUaW1lXT1cImYuZGF0ZSEuZGlzYWJsZWRUaW1lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgQGNhc2UgKCdjdXN0b20nKSB7XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RfX2ZpbHRlci1jdXN0b21cIj5cbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiZi5jdXN0b20hXCJcbiAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGYsIGNvbDogY29sLCBoYW5kbGU6IHRoaXMgfVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgQGRlZmF1bHQge1xuICAgICAgICAgICAgPHVsIG56LW1lbnU+XG4gICAgICAgICAgICAgIEBmb3IgKGZpbHRlciBvZiBmLm1lbnVzOyB0cmFjayAkaW5kZXgpIHtcbiAgICAgICAgICAgICAgICA8bGkgbnotbWVudS1pdGVtPlxuICAgICAgICAgICAgICAgICAgQGlmIChmLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBuei1jaGVja2JveCBbKG5nTW9kZWwpXT1cImZpbHRlci5jaGVja2VkXCIgKG5nTW9kZWxDaGFuZ2UpPVwiY2hlY2tib3hDaGFuZ2UoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IGZpbHRlci50ZXh0IH19XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIG56LXJhZGlvIFtuZ01vZGVsXT1cImZpbHRlci5jaGVja2VkXCIgKG5nTW9kZWxDaGFuZ2UpPVwicmFkaW9DaGFuZ2UoZmlsdGVyKVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IGZpbHRlci50ZXh0IH19XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQGlmIChmLnNob3dPUEFyZWEpIHtcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRhYmxlLWZpbHRlci1kcm9wZG93bi1idG5zXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImFudC10YWJsZS1maWx0ZXItZHJvcGRvd24tbGluayBjb25maXJtXCIgKGNsaWNrKT1cImNvbmZpcm0oKVwiPlxuICAgICAgICAgICAgICA8c3Bhbj57eyBmLmNvbmZpcm1UZXh0IHx8IGxvY2FsZS5maWx0ZXJDb25maXJtIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJhbnQtdGFibGUtZmlsdGVyLWRyb3Bkb3duLWxpbmsgY2xlYXJcIiAoY2xpY2spPVwicmVzZXQoKVwiPlxuICAgICAgICAgICAgICA8c3Bhbj57eyBmLmNsZWFyVGV4dCB8fCBsb2NhbGUuZmlsdGVyUmVzZXQgfX08L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvbnotZHJvcGRvd24tbWVudT5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXRhYmxlLWZpbHRlci10cmlnZ2VyLWNvbnRhaW5lcl0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5zdF9fZmlsdGVyXSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLmFudC10YWJsZS1maWx0ZXItdHJpZ2dlci1jb250YWluZXItb3Blbl0nOiBgdmlzaWJsZWBcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNURmlsdGVyQ29tcG9uZW50IHtcbiAgdmlzaWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBjb2whOiBfU1RDb2x1bW47XG4gIEBJbnB1dCgpIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuICBASW5wdXQoKSBmITogU1RDb2x1bW5GaWx0ZXI7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuID0gbmV3IEV2ZW50RW1pdHRlcjx1bmtub3duPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgaGFuZGxlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBnZXQgaWNvbigpOiBTVEljb24ge1xuICAgIHJldHVybiB0aGlzLmYuaWNvbiBhcyBTVEljb247XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgc3RvcFByb3BhZ2F0aW9uKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGNoZWNrYm94Q2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMubi5lbWl0KHRoaXMuZi5tZW51cz8uZmlsdGVyKHcgPT4gdy5jaGVja2VkKSk7XG4gIH1cblxuICByYWRpb0NoYW5nZShpdGVtOiBTVENvbHVtbkZpbHRlck1lbnUpOiB2b2lkIHtcbiAgICB0aGlzLmYubWVudXMhLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICBpdGVtLmNoZWNrZWQgPSAhaXRlbS5jaGVja2VkO1xuICAgIHRoaXMubi5lbWl0KGl0ZW0pO1xuICB9XG5cbiAgY2xvc2UocmVzdWx0PzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmIChyZXN1bHQgIT0gbnVsbCkgdGhpcy5oYW5kbGUuZW1pdChyZXN1bHQpO1xuXG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgY29uZmlybSgpOiB0aGlzIHtcbiAgICB0aGlzLmhhbmRsZS5lbWl0KHRydWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVzZXQoKTogdGhpcyB7XG4gICAgdGhpcy5oYW5kbGUuZW1pdChmYWxzZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiJdfQ==