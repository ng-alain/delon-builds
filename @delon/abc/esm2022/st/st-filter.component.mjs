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
class STFilterComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: STFilterComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.4", type: STFilterComponent, selector: "st-filter", inputs: { col: "col", locale: "locale", f: "f" }, outputs: { n: "n", handle: "handle" }, host: { properties: { "class.ant-table-filter-trigger-container": "true", "class.st__filter": "true", "class.ant-table-filter-trigger-container-open": "visible" } }, ngImport: i0, template: `
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
        <ng-container [ngSwitch]="f.type">
          <div *ngSwitchCase="'keyword'" class="st__filter-keyword">
            <input
              type="text"
              nz-input
              [attr.placeholder]="f.placeholder"
              [(ngModel)]="f.menus![0]!.value"
              (ngModelChange)="n.emit($event)"
              (keyup.enter)="confirm()"
            />
          </div>
          <div *ngSwitchCase="'number'" class="p-sm st__filter-number">
            <nz-input-number
              [(ngModel)]="f.menus![0]!.value"
              (ngModelChange)="n.emit($event)"
              [nzMin]="f.number!.min!"
              [nzMax]="f.number!.max!"
              [nzStep]="f.number!.step!"
              [nzPrecision]="f.number!.precision"
              [nzPlaceHolder]="f.placeholder!"
              class="width-100"
            ></nz-input-number>
          </div>
          <div *ngSwitchCase="'date'" class="p-sm st__filter-date">
            <nz-date-picker
              *ngIf="!f.date!.range"
              nzInline
              [nzMode]="f.date!.mode"
              [(ngModel)]="f.menus![0]!.value"
              (ngModelChange)="n.emit($event)"
              [nzShowNow]="f.date!.showNow"
              [nzShowToday]="f.date!.showToday"
              [nzDisabledDate]="f.date!.disabledDate"
              [nzDisabledTime]="f.date!.disabledTime"
            ></nz-date-picker>
            <nz-range-picker
              *ngIf="f.date!.range"
              nzInline
              [nzMode]="f.date!.mode"
              [(ngModel)]="f.menus![0]!.value"
              (ngModelChange)="n.emit($event)"
              [nzShowNow]="f.date!.showNow"
              [nzShowToday]="f.date!.showToday"
              [nzDisabledDate]="f.date!.disabledDate"
              [nzDisabledTime]="f.date!.disabledTime"
            ></nz-range-picker>
          </div>
          <div *ngSwitchCase="'time'" class="p-sm st__filter-time"> </div>
          <div *ngSwitchCase="'custom'" class="st__filter-custom">
            <ng-template
              [ngTemplateOutlet]="f.custom!"
              [ngTemplateOutletContext]="{ $implicit: f, col: col, handle: this }"
            ></ng-template>
          </div>
          <ul *ngSwitchDefault nz-menu>
            <ng-container *ngIf="f.multiple">
              <li nz-menu-item *ngFor="let filter of f.menus">
                <label nz-checkbox [(ngModel)]="filter.checked" (ngModelChange)="checkboxChange()">
                  {{ filter.text }}
                </label>
              </li>
            </ng-container>
            <ng-container *ngIf="!f.multiple">
              <li nz-menu-item *ngFor="let filter of f.menus">
                <label nz-radio [ngModel]="filter.checked" (ngModelChange)="radioChange(filter)">
                  {{ filter.text }}
                </label>
              </li>
            </ng-container>
          </ul>
        </ng-container>
        <div *ngIf="f.showOPArea" class="ant-table-filter-dropdown-btns">
          <a class="ant-table-filter-dropdown-link confirm" (click)="confirm()">
            <span>{{ f.confirmText || locale.filterConfirm }}</span>
          </a>
          <a class="ant-table-filter-dropdown-link clear" (click)="reset()">
            <span>{{ f.clearText || locale.filterReset }}</span>
          </a>
        </div>
      </div>
    </nz-dropdown-menu>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i4.NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "directive", type: i5.NzMenuDirective, selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { kind: "directive", type: i5.NzMenuItemDirective, selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }, { kind: "directive", type: i6.NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "component", type: i6.NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "component", type: i7.NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus"], exportAs: ["nzRadio"] }, { kind: "directive", type: i8.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "component", type: i9.NzInputNumberComponent, selector: "nz-input-number", inputs: ["nzSize", "nzMin", "nzMax", "nzParser", "nzPrecision", "nzPrecisionMode", "nzPlaceHolder", "nzStatus", "nzStep", "nzInputMode", "nzId", "nzDisabled", "nzReadOnly", "nzAutoFocus", "nzBorderless", "nzFormatter"], outputs: ["nzBlur", "nzFocus"], exportAs: ["nzInputNumber"] }, { kind: "component", type: i10.NzDatePickerComponent, selector: "nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker", inputs: ["nzAllowClear", "nzAutoFocus", "nzDisabled", "nzBorderless", "nzInputReadOnly", "nzInline", "nzOpen", "nzDisabledDate", "nzLocale", "nzPlaceHolder", "nzPopupStyle", "nzDropdownClassName", "nzSize", "nzStatus", "nzFormat", "nzDateRender", "nzDisabledTime", "nzRenderExtraFooter", "nzShowToday", "nzMode", "nzShowNow", "nzRanges", "nzDefaultPickerValue", "nzSeparator", "nzSuffixIcon", "nzBackdrop", "nzId", "nzPlacement", "nzShowWeekNumber", "nzShowTime"], outputs: ["nzOnPanelChange", "nzOnCalendarChange", "nzOnOk", "nzOnOpenChange"], exportAs: ["nzDatePicker"] }, { kind: "directive", type: i10.NzRangePickerComponent, selector: "nz-range-picker", exportAs: ["nzRangePicker"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
export { STFilterComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: STFilterComponent, decorators: [{
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
        <ng-container [ngSwitch]="f.type">
          <div *ngSwitchCase="'keyword'" class="st__filter-keyword">
            <input
              type="text"
              nz-input
              [attr.placeholder]="f.placeholder"
              [(ngModel)]="f.menus![0]!.value"
              (ngModelChange)="n.emit($event)"
              (keyup.enter)="confirm()"
            />
          </div>
          <div *ngSwitchCase="'number'" class="p-sm st__filter-number">
            <nz-input-number
              [(ngModel)]="f.menus![0]!.value"
              (ngModelChange)="n.emit($event)"
              [nzMin]="f.number!.min!"
              [nzMax]="f.number!.max!"
              [nzStep]="f.number!.step!"
              [nzPrecision]="f.number!.precision"
              [nzPlaceHolder]="f.placeholder!"
              class="width-100"
            ></nz-input-number>
          </div>
          <div *ngSwitchCase="'date'" class="p-sm st__filter-date">
            <nz-date-picker
              *ngIf="!f.date!.range"
              nzInline
              [nzMode]="f.date!.mode"
              [(ngModel)]="f.menus![0]!.value"
              (ngModelChange)="n.emit($event)"
              [nzShowNow]="f.date!.showNow"
              [nzShowToday]="f.date!.showToday"
              [nzDisabledDate]="f.date!.disabledDate"
              [nzDisabledTime]="f.date!.disabledTime"
            ></nz-date-picker>
            <nz-range-picker
              *ngIf="f.date!.range"
              nzInline
              [nzMode]="f.date!.mode"
              [(ngModel)]="f.menus![0]!.value"
              (ngModelChange)="n.emit($event)"
              [nzShowNow]="f.date!.showNow"
              [nzShowToday]="f.date!.showToday"
              [nzDisabledDate]="f.date!.disabledDate"
              [nzDisabledTime]="f.date!.disabledTime"
            ></nz-range-picker>
          </div>
          <div *ngSwitchCase="'time'" class="p-sm st__filter-time"> </div>
          <div *ngSwitchCase="'custom'" class="st__filter-custom">
            <ng-template
              [ngTemplateOutlet]="f.custom!"
              [ngTemplateOutletContext]="{ $implicit: f, col: col, handle: this }"
            ></ng-template>
          </div>
          <ul *ngSwitchDefault nz-menu>
            <ng-container *ngIf="f.multiple">
              <li nz-menu-item *ngFor="let filter of f.menus">
                <label nz-checkbox [(ngModel)]="filter.checked" (ngModelChange)="checkboxChange()">
                  {{ filter.text }}
                </label>
              </li>
            </ng-container>
            <ng-container *ngIf="!f.multiple">
              <li nz-menu-item *ngFor="let filter of f.menus">
                <label nz-radio [ngModel]="filter.checked" (ngModelChange)="radioChange(filter)">
                  {{ filter.text }}
                </label>
              </li>
            </ng-container>
          </ul>
        </ng-container>
        <div *ngIf="f.showOPArea" class="ant-table-filter-dropdown-btns">
          <a class="ant-table-filter-dropdown-link confirm" (click)="confirm()">
            <span>{{ f.confirmText || locale.filterConfirm }}</span>
          </a>
          <a class="ant-table-filter-dropdown-link clear" (click)="reset()">
            <span>{{ f.clearText || locale.filterReset }}</span>
          </a>
        </div>
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
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { col: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0FBT3ZCLE1BNkdhLGlCQUFpQjtJQU81QixJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBYyxDQUFDO0lBQy9CLENBQUM7SUFFRCxZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVYxQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRVAsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUVkLE1BQUMsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ2hDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBS1gsQ0FBQztJQUU5QyxlQUFlLENBQUMsTUFBa0I7UUFDaEMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUF3QjtRQUNsQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQWdCO1FBQ3BCLElBQUksTUFBTSxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs4R0ExQ1UsaUJBQWlCO2tHQUFqQixpQkFBaUIsZ1RBM0dsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlHVDs7U0FVVSxpQkFBaUI7MkZBQWpCLGlCQUFpQjtrQkE3RzdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlHVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osNENBQTRDLEVBQUUsTUFBTTt3QkFDcEQsb0JBQW9CLEVBQUUsTUFBTTt3QkFDNUIsaURBQWlELEVBQUUsU0FBUztxQkFDN0Q7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzt3R0FHVSxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLENBQUM7c0JBQVQsS0FBSztnQkFDYSxDQUFDO3NCQUFuQixNQUFNO2dCQUNZLE1BQU07c0JBQXhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7IFNUQ29sdW1uRmlsdGVyLCBTVENvbHVtbkZpbHRlck1lbnUsIFNUSWNvbiB9IGZyb20gJy4vc3QuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBfU1RDb2x1bW4gfSBmcm9tICcuL3N0LnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3QtZmlsdGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhblxuICAgICAgY2xhc3M9XCJhbnQtdGFibGUtZmlsdGVyLXRyaWdnZXJcIlxuICAgICAgW2NsYXNzLmFjdGl2ZV09XCJ2aXNpYmxlIHx8IGYuZGVmYXVsdFwiXG4gICAgICBuei1kcm9wZG93blxuICAgICAgW256RHJvcGRvd25NZW51XT1cImZpbHRlck1lbnVcIlxuICAgICAgbnpUcmlnZ2VyPVwiY2xpY2tcIlxuICAgICAgW256Q2xpY2tIaWRlXT1cImZhbHNlXCJcbiAgICAgIFsobnpWaXNpYmxlKV09XCJ2aXNpYmxlXCJcbiAgICAgIG56T3ZlcmxheUNsYXNzTmFtZT1cInN0X19maWx0ZXItd3JhcFwiXG4gICAgICAoY2xpY2spPVwic3RvcFByb3BhZ2F0aW9uKCRldmVudClcIlxuICAgID5cbiAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJpY29uLnR5cGVcIiBbbnpUaGVtZV09XCJpY29uLnRoZW1lIVwiPjwvaT5cbiAgICA8L3NwYW4+XG4gICAgPG56LWRyb3Bkb3duLW1lbnUgI2ZpbHRlck1lbnU9XCJuekRyb3Bkb3duTWVudVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC10YWJsZS1maWx0ZXItZHJvcGRvd25cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZi50eXBlXCI+XG4gICAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2tleXdvcmQnXCIgY2xhc3M9XCJzdF9fZmlsdGVyLWtleXdvcmRcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG56LWlucHV0XG4gICAgICAgICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cImYucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImYubWVudXMhWzBdIS52YWx1ZVwiXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm4uZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgKGtleXVwLmVudGVyKT1cImNvbmZpcm0oKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidudW1iZXInXCIgY2xhc3M9XCJwLXNtIHN0X19maWx0ZXItbnVtYmVyXCI+XG4gICAgICAgICAgICA8bnotaW5wdXQtbnVtYmVyXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZi5tZW51cyFbMF0hLnZhbHVlXCJcbiAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwibi5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICBbbnpNaW5dPVwiZi5udW1iZXIhLm1pbiFcIlxuICAgICAgICAgICAgICBbbnpNYXhdPVwiZi5udW1iZXIhLm1heCFcIlxuICAgICAgICAgICAgICBbbnpTdGVwXT1cImYubnVtYmVyIS5zdGVwIVwiXG4gICAgICAgICAgICAgIFtuelByZWNpc2lvbl09XCJmLm51bWJlciEucHJlY2lzaW9uXCJcbiAgICAgICAgICAgICAgW256UGxhY2VIb2xkZXJdPVwiZi5wbGFjZWhvbGRlciFcIlxuICAgICAgICAgICAgICBjbGFzcz1cIndpZHRoLTEwMFwiXG4gICAgICAgICAgICA+PC9uei1pbnB1dC1udW1iZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGUnXCIgY2xhc3M9XCJwLXNtIHN0X19maWx0ZXItZGF0ZVwiPlxuICAgICAgICAgICAgPG56LWRhdGUtcGlja2VyXG4gICAgICAgICAgICAgICpuZ0lmPVwiIWYuZGF0ZSEucmFuZ2VcIlxuICAgICAgICAgICAgICBueklubGluZVxuICAgICAgICAgICAgICBbbnpNb2RlXT1cImYuZGF0ZSEubW9kZVwiXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZi5tZW51cyFbMF0hLnZhbHVlXCJcbiAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwibi5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICBbbnpTaG93Tm93XT1cImYuZGF0ZSEuc2hvd05vd1wiXG4gICAgICAgICAgICAgIFtuelNob3dUb2RheV09XCJmLmRhdGUhLnNob3dUb2RheVwiXG4gICAgICAgICAgICAgIFtuekRpc2FibGVkRGF0ZV09XCJmLmRhdGUhLmRpc2FibGVkRGF0ZVwiXG4gICAgICAgICAgICAgIFtuekRpc2FibGVkVGltZV09XCJmLmRhdGUhLmRpc2FibGVkVGltZVwiXG4gICAgICAgICAgICA+PC9uei1kYXRlLXBpY2tlcj5cbiAgICAgICAgICAgIDxuei1yYW5nZS1waWNrZXJcbiAgICAgICAgICAgICAgKm5nSWY9XCJmLmRhdGUhLnJhbmdlXCJcbiAgICAgICAgICAgICAgbnpJbmxpbmVcbiAgICAgICAgICAgICAgW256TW9kZV09XCJmLmRhdGUhLm1vZGVcIlxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImYubWVudXMhWzBdIS52YWx1ZVwiXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm4uZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgW256U2hvd05vd109XCJmLmRhdGUhLnNob3dOb3dcIlxuICAgICAgICAgICAgICBbbnpTaG93VG9kYXldPVwiZi5kYXRlIS5zaG93VG9kYXlcIlxuICAgICAgICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwiZi5kYXRlIS5kaXNhYmxlZERhdGVcIlxuICAgICAgICAgICAgICBbbnpEaXNhYmxlZFRpbWVdPVwiZi5kYXRlIS5kaXNhYmxlZFRpbWVcIlxuICAgICAgICAgICAgPjwvbnotcmFuZ2UtcGlja2VyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIid0aW1lJ1wiIGNsYXNzPVwicC1zbSBzdF9fZmlsdGVyLXRpbWVcIj4gPC9kaXY+XG4gICAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbSdcIiBjbGFzcz1cInN0X19maWx0ZXItY3VzdG9tXCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGVcbiAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiZi5jdXN0b20hXCJcbiAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBmLCBjb2w6IGNvbCwgaGFuZGxlOiB0aGlzIH1cIlxuICAgICAgICAgICAgPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsICpuZ1N3aXRjaERlZmF1bHQgbnotbWVudT5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmLm11bHRpcGxlXCI+XG4gICAgICAgICAgICAgIDxsaSBuei1tZW51LWl0ZW0gKm5nRm9yPVwibGV0IGZpbHRlciBvZiBmLm1lbnVzXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIG56LWNoZWNrYm94IFsobmdNb2RlbCldPVwiZmlsdGVyLmNoZWNrZWRcIiAobmdNb2RlbENoYW5nZSk9XCJjaGVja2JveENoYW5nZSgpXCI+XG4gICAgICAgICAgICAgICAgICB7eyBmaWx0ZXIudGV4dCB9fVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZi5tdWx0aXBsZVwiPlxuICAgICAgICAgICAgICA8bGkgbnotbWVudS1pdGVtICpuZ0Zvcj1cImxldCBmaWx0ZXIgb2YgZi5tZW51c1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBuei1yYWRpbyBbbmdNb2RlbF09XCJmaWx0ZXIuY2hlY2tlZFwiIChuZ01vZGVsQ2hhbmdlKT1cInJhZGlvQ2hhbmdlKGZpbHRlcilcIj5cbiAgICAgICAgICAgICAgICAgIHt7IGZpbHRlci50ZXh0IH19XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZi5zaG93T1BBcmVhXCIgY2xhc3M9XCJhbnQtdGFibGUtZmlsdGVyLWRyb3Bkb3duLWJ0bnNcIj5cbiAgICAgICAgICA8YSBjbGFzcz1cImFudC10YWJsZS1maWx0ZXItZHJvcGRvd24tbGluayBjb25maXJtXCIgKGNsaWNrKT1cImNvbmZpcm0oKVwiPlxuICAgICAgICAgICAgPHNwYW4+e3sgZi5jb25maXJtVGV4dCB8fCBsb2NhbGUuZmlsdGVyQ29uZmlybSB9fTwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgY2xhc3M9XCJhbnQtdGFibGUtZmlsdGVyLWRyb3Bkb3duLWxpbmsgY2xlYXJcIiAoY2xpY2spPVwicmVzZXQoKVwiPlxuICAgICAgICAgICAgPHNwYW4+e3sgZi5jbGVhclRleHQgfHwgbG9jYWxlLmZpbHRlclJlc2V0IH19PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L256LWRyb3Bkb3duLW1lbnU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10YWJsZS1maWx0ZXItdHJpZ2dlci1jb250YWluZXJdJzogYHRydWVgLFxuICAgICdbY2xhc3Muc3RfX2ZpbHRlcl0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtZmlsdGVyLXRyaWdnZXItY29udGFpbmVyLW9wZW5dJzogYHZpc2libGVgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTVEZpbHRlckNvbXBvbmVudCB7XG4gIHZpc2libGUgPSBmYWxzZTtcbiAgQElucHV0KCkgY29sITogX1NUQ29sdW1uO1xuICBASW5wdXQoKSBsb2NhbGU6IExvY2FsZURhdGEgPSB7fTtcbiAgQElucHV0KCkgZiE6IFNUQ29sdW1uRmlsdGVyO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbiA9IG5ldyBFdmVudEVtaXR0ZXI8dW5rbm93bj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGhhbmRsZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgZ2V0IGljb24oKTogU1RJY29uIHtcbiAgICByZXR1cm4gdGhpcy5mLmljb24gYXMgU1RJY29uO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIHN0b3BQcm9wYWdhdGlvbigkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBjaGVja2JveENoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLm4uZW1pdCh0aGlzLmYubWVudXM/LmZpbHRlcih3ID0+IHcuY2hlY2tlZCkpO1xuICB9XG5cbiAgcmFkaW9DaGFuZ2UoaXRlbTogU1RDb2x1bW5GaWx0ZXJNZW51KTogdm9pZCB7XG4gICAgdGhpcy5mLm1lbnVzIS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgaXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZDtcbiAgICB0aGlzLm4uZW1pdChpdGVtKTtcbiAgfVxuXG4gIGNsb3NlKHJlc3VsdD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAocmVzdWx0ICE9IG51bGwpIHRoaXMuaGFuZGxlLmVtaXQocmVzdWx0KTtcblxuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGNvbmZpcm0oKTogdGhpcyB7XG4gICAgdGhpcy5oYW5kbGUuZW1pdCh0cnVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlc2V0KCk6IHRoaXMge1xuICAgIHRoaXMuaGFuZGxlLmVtaXQoZmFsc2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXX0=