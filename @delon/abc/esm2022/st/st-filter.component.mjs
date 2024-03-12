import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation, inject } from '@angular/core';
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
    constructor() {
        this.cdr = inject(ChangeDetectorRef);
        this.visible = false;
        this.locale = {};
        this.n = new EventEmitter();
        this.handle = new EventEmitter();
    }
    get icon() {
        return this.f.icon;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.4", ngImport: i0, type: STFilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.4", type: STFilterComponent, selector: "st-filter", inputs: { col: "col", locale: "locale", f: "f" }, outputs: { n: "n", handle: "handle" }, host: { properties: { "class.ant-table-filter-trigger-container": "true", "class.st__filter": "true", "class.ant-table-filter-trigger-container-open": "visible" } }, ngImport: i0, template: `
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
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i4.NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "directive", type: i5.NzMenuDirective, selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { kind: "component", type: i5.NzMenuItemComponent, selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }, { kind: "directive", type: i6.NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "component", type: i6.NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "component", type: i7.NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus", "nz-radio-button"], exportAs: ["nzRadio"] }, { kind: "directive", type: i8.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStepperless", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "component", type: i9.NzInputNumberComponent, selector: "nz-input-number", inputs: ["nzSize", "nzMin", "nzMax", "nzParser", "nzPrecision", "nzPrecisionMode", "nzPlaceHolder", "nzStatus", "nzStep", "nzInputMode", "nzId", "nzDisabled", "nzReadOnly", "nzAutoFocus", "nzBorderless", "nzFormatter"], outputs: ["nzBlur", "nzFocus"], exportAs: ["nzInputNumber"] }, { kind: "component", type: i10.NzDatePickerComponent, selector: "nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker", inputs: ["nzAllowClear", "nzAutoFocus", "nzDisabled", "nzBorderless", "nzInputReadOnly", "nzInline", "nzOpen", "nzDisabledDate", "nzLocale", "nzPlaceHolder", "nzPopupStyle", "nzDropdownClassName", "nzSize", "nzStatus", "nzFormat", "nzDateRender", "nzDisabledTime", "nzRenderExtraFooter", "nzShowToday", "nzMode", "nzShowNow", "nzRanges", "nzDefaultPickerValue", "nzSeparator", "nzSuffixIcon", "nzBackdrop", "nzId", "nzPlacement", "nzShowWeekNumber", "nzShowTime"], outputs: ["nzOnPanelChange", "nzOnCalendarChange", "nzOnOk", "nzOnOpenChange"], exportAs: ["nzDatePicker"] }, { kind: "directive", type: i10.NzRangePickerComponent, selector: "nz-range-picker", exportAs: ["nzRangePicker"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.4", ngImport: i0, type: STFilterComponent, decorators: [{
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
        }], propDecorators: { col: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixpQkFBaUIsRUFDakIsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7QUErSHZCLE1BQU0sT0FBTyxpQkFBaUI7SUF4SDlCO1FBeUhtQixRQUFHLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFakQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVQLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFFZCxNQUFDLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNoQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztLQW1DekQ7SUFsQ0MsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQWMsQ0FBQztJQUMvQixDQUFDO0lBRUQsZUFBZSxDQUFDLE1BQWtCO1FBQ2hDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxXQUFXLENBQUMsSUFBd0I7UUFDbEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFnQjtRQUNwQixJQUFJLE1BQU0sSUFBSSxJQUFJO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OEdBMUNVLGlCQUFpQjtrR0FBakIsaUJBQWlCLGdUQXRIbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRHVDs7MkZBVVUsaUJBQWlCO2tCQXhIN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0R1Q7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLDRDQUE0QyxFQUFFLE1BQU07d0JBQ3BELG9CQUFvQixFQUFFLE1BQU07d0JBQzVCLGlEQUFpRCxFQUFFLFNBQVM7cUJBQzdEO29CQUNELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7OEJBS1UsR0FBRztzQkFBWCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxDQUFDO3NCQUFULEtBQUs7Z0JBQ2EsQ0FBQztzQkFBbkIsTUFBTTtnQkFDWSxNQUFNO3NCQUF4QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIGluamVjdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7IFNUQ29sdW1uRmlsdGVyLCBTVENvbHVtbkZpbHRlck1lbnUsIFNUSWNvbiB9IGZyb20gJy4vc3QuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBfU1RDb2x1bW4gfSBmcm9tICcuL3N0LnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3QtZmlsdGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhblxuICAgICAgY2xhc3M9XCJhbnQtdGFibGUtZmlsdGVyLXRyaWdnZXJcIlxuICAgICAgW2NsYXNzLmFjdGl2ZV09XCJ2aXNpYmxlIHx8IGYuZGVmYXVsdFwiXG4gICAgICBuei1kcm9wZG93blxuICAgICAgW256RHJvcGRvd25NZW51XT1cImZpbHRlck1lbnVcIlxuICAgICAgbnpUcmlnZ2VyPVwiY2xpY2tcIlxuICAgICAgW256Q2xpY2tIaWRlXT1cImZhbHNlXCJcbiAgICAgIFsobnpWaXNpYmxlKV09XCJ2aXNpYmxlXCJcbiAgICAgIG56T3ZlcmxheUNsYXNzTmFtZT1cInN0X19maWx0ZXItd3JhcFwiXG4gICAgICAoY2xpY2spPVwic3RvcFByb3BhZ2F0aW9uKCRldmVudClcIlxuICAgID5cbiAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJpY29uLnR5cGVcIiBbbnpUaGVtZV09XCJpY29uLnRoZW1lIVwiPjwvaT5cbiAgICA8L3NwYW4+XG4gICAgPG56LWRyb3Bkb3duLW1lbnUgI2ZpbHRlck1lbnU9XCJuekRyb3Bkb3duTWVudVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC10YWJsZS1maWx0ZXItZHJvcGRvd25cIj5cbiAgICAgICAgQHN3aXRjaCAoZi50eXBlKSB7XG4gICAgICAgICAgQGNhc2UgKCdrZXl3b3JkJykge1xuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0X19maWx0ZXIta2V5d29yZFwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbnotaW5wdXRcbiAgICAgICAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJmLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImYubWVudXMhWzBdIS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwibi5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAgIChrZXl1cC5lbnRlcik9XCJjb25maXJtKClcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgIEBjYXNlICgnbnVtYmVyJykge1xuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtc20gc3RfX2ZpbHRlci1udW1iZXJcIj5cbiAgICAgICAgICAgICAgPG56LWlucHV0LW51bWJlclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZi5tZW51cyFbMF0hLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJuLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgW256TWluXT1cImYubnVtYmVyIS5taW4hXCJcbiAgICAgICAgICAgICAgICBbbnpNYXhdPVwiZi5udW1iZXIhLm1heCFcIlxuICAgICAgICAgICAgICAgIFtuelN0ZXBdPVwiZi5udW1iZXIhLnN0ZXAhXCJcbiAgICAgICAgICAgICAgICBbbnpQcmVjaXNpb25dPVwiZi5udW1iZXIhLnByZWNpc2lvblwiXG4gICAgICAgICAgICAgICAgW256UGxhY2VIb2xkZXJdPVwiZi5wbGFjZWhvbGRlciFcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwid2lkdGgtMTAwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgICBAY2FzZSAoJ2RhdGUnKSB7XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC1zbSBzdF9fZmlsdGVyLWRhdGVcIj5cbiAgICAgICAgICAgICAgQGlmIChmLmRhdGUhLnJhbmdlKSB7XG4gICAgICAgICAgICAgICAgPG56LXJhbmdlLXBpY2tlclxuICAgICAgICAgICAgICAgICAgbnpJbmxpbmVcbiAgICAgICAgICAgICAgICAgIFtuek1vZGVdPVwiZi5kYXRlIS5tb2RlXCJcbiAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZi5tZW51cyFbMF0hLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm4uZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIFtuelNob3dOb3ddPVwiZi5kYXRlIS5zaG93Tm93XCJcbiAgICAgICAgICAgICAgICAgIFtuelNob3dUb2RheV09XCJmLmRhdGUhLnNob3dUb2RheVwiXG4gICAgICAgICAgICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwiZi5kYXRlIS5kaXNhYmxlZERhdGVcIlxuICAgICAgICAgICAgICAgICAgW256RGlzYWJsZWRUaW1lXT1cImYuZGF0ZSEuZGlzYWJsZWRUaW1lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICAgICA8bnotZGF0ZS1waWNrZXJcbiAgICAgICAgICAgICAgICAgIG56SW5saW5lXG4gICAgICAgICAgICAgICAgICBbbnpNb2RlXT1cImYuZGF0ZSEubW9kZVwiXG4gICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImYubWVudXMhWzBdIS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJuLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICBbbnpTaG93Tm93XT1cImYuZGF0ZSEuc2hvd05vd1wiXG4gICAgICAgICAgICAgICAgICBbbnpTaG93VG9kYXldPVwiZi5kYXRlIS5zaG93VG9kYXlcIlxuICAgICAgICAgICAgICAgICAgW256RGlzYWJsZWREYXRlXT1cImYuZGF0ZSEuZGlzYWJsZWREYXRlXCJcbiAgICAgICAgICAgICAgICAgIFtuekRpc2FibGVkVGltZV09XCJmLmRhdGUhLmRpc2FibGVkVGltZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgIEBjYXNlICgnY3VzdG9tJykge1xuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0X19maWx0ZXItY3VzdG9tXCI+XG4gICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImYuY3VzdG9tIVwiXG4gICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBmLCBjb2w6IGNvbCwgaGFuZGxlOiB0aGlzIH1cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgIEBkZWZhdWx0IHtcbiAgICAgICAgICAgIDx1bCBuei1tZW51PlxuICAgICAgICAgICAgICBAZm9yIChmaWx0ZXIgb2YgZi5tZW51czsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgICAgICAgICAgPGxpIG56LW1lbnUtaXRlbT5cbiAgICAgICAgICAgICAgICAgIEBpZiAoZi5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgbnotY2hlY2tib3ggWyhuZ01vZGVsKV09XCJmaWx0ZXIuY2hlY2tlZFwiIChuZ01vZGVsQ2hhbmdlKT1cImNoZWNrYm94Q2hhbmdlKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyBmaWx0ZXIudGV4dCB9fVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBuei1yYWRpbyBbbmdNb2RlbF09XCJmaWx0ZXIuY2hlY2tlZFwiIChuZ01vZGVsQ2hhbmdlKT1cInJhZGlvQ2hhbmdlKGZpbHRlcilcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyBmaWx0ZXIudGV4dCB9fVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBpZiAoZi5zaG93T1BBcmVhKSB7XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFudC10YWJsZS1maWx0ZXItZHJvcGRvd24tYnRuc1wiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJhbnQtdGFibGUtZmlsdGVyLWRyb3Bkb3duLWxpbmsgY29uZmlybVwiIChjbGljayk9XCJjb25maXJtKClcIj5cbiAgICAgICAgICAgICAgPHNwYW4+e3sgZi5jb25maXJtVGV4dCB8fCBsb2NhbGUuZmlsdGVyQ29uZmlybSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiYW50LXRhYmxlLWZpbHRlci1kcm9wZG93bi1saW5rIGNsZWFyXCIgKGNsaWNrKT1cInJlc2V0KClcIj5cbiAgICAgICAgICAgICAgPHNwYW4+e3sgZi5jbGVhclRleHQgfHwgbG9jYWxlLmZpbHRlclJlc2V0IH19PC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L256LWRyb3Bkb3duLW1lbnU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10YWJsZS1maWx0ZXItdHJpZ2dlci1jb250YWluZXJdJzogYHRydWVgLFxuICAgICdbY2xhc3Muc3RfX2ZpbHRlcl0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtZmlsdGVyLXRyaWdnZXItY29udGFpbmVyLW9wZW5dJzogYHZpc2libGVgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTVEZpbHRlckNvbXBvbmVudCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgY2RyID0gaW5qZWN0KENoYW5nZURldGVjdG9yUmVmKTtcblxuICB2aXNpYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbCE6IF9TVENvbHVtbjtcbiAgQElucHV0KCkgbG9jYWxlOiBMb2NhbGVEYXRhID0ge307XG4gIEBJbnB1dCgpIGYhOiBTVENvbHVtbkZpbHRlcjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG4gPSBuZXcgRXZlbnRFbWl0dGVyPHVua25vd24+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBoYW5kbGUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIGdldCBpY29uKCk6IFNUSWNvbiB7XG4gICAgcmV0dXJuIHRoaXMuZi5pY29uIGFzIFNUSWNvbjtcbiAgfVxuXG4gIHN0b3BQcm9wYWdhdGlvbigkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBjaGVja2JveENoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLm4uZW1pdCh0aGlzLmYubWVudXM/LmZpbHRlcih3ID0+IHcuY2hlY2tlZCkpO1xuICB9XG5cbiAgcmFkaW9DaGFuZ2UoaXRlbTogU1RDb2x1bW5GaWx0ZXJNZW51KTogdm9pZCB7XG4gICAgdGhpcy5mLm1lbnVzIS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgaXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZDtcbiAgICB0aGlzLm4uZW1pdChpdGVtKTtcbiAgfVxuXG4gIGNsb3NlKHJlc3VsdD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAocmVzdWx0ICE9IG51bGwpIHRoaXMuaGFuZGxlLmVtaXQocmVzdWx0KTtcblxuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGNvbmZpcm0oKTogdGhpcyB7XG4gICAgdGhpcy5oYW5kbGUuZW1pdCh0cnVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlc2V0KCk6IHRoaXMge1xuICAgIHRoaXMuaGFuZGxlLmVtaXQoZmFsc2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXX0=