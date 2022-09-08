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
    constructor() {
        this.visible = false;
        this.locale = {};
        this.n = new EventEmitter();
        this.handle = new EventEmitter();
    }
    get icon() {
        return this.f.icon;
    }
    show($event) {
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
    confirm() {
        this.handle.emit(true);
    }
    reset() {
        this.handle.emit(false);
    }
}
STFilterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: STFilterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
STFilterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.1", type: STFilterComponent, selector: "st-filter", inputs: { col: "col", locale: "locale", f: "f" }, outputs: { n: "n", handle: "handle" }, host: { properties: { "class.ant-table-filter-trigger-container": "true", "class.st__filter": "true", "class.ant-table-filter-trigger-container-open": "visible" } }, ngImport: i0, template: `
    <span
      class="ant-table-filter-trigger"
      [class.active]="visible || f.default"
      nz-dropdown
      [nzDropdownMenu]="filterMenu"
      nzTrigger="click"
      [nzClickHide]="false"
      [(nzVisible)]="visible"
      nzOverlayClassName="st__filter-wrap"
      (click)="show($event)"
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
              [ngTemplateOutletContext]="{ $implicit: f, col: col }"
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
          <a class="ant-table-filter-dropdown-link confirm" (click)="visible = false">
            <span (click)="confirm()">{{ f.confirmText || locale.filterConfirm }}</span>
          </a>
          <a class="ant-table-filter-dropdown-link clear" (click)="visible = false">
            <span (click)="reset()">{{ f.clearText || locale.filterReset }}</span>
          </a>
        </div>
      </div>
    </nz-dropdown-menu>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i4.NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "directive", type: i5.NzMenuDirective, selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { kind: "directive", type: i5.NzMenuItemDirective, selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }, { kind: "directive", type: i6.NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "component", type: i6.NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "component", type: i7.NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus"], exportAs: ["nzRadio"] }, { kind: "directive", type: i8.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "component", type: i9.NzInputNumberComponent, selector: "nz-input-number", inputs: ["nzSize", "nzMin", "nzMax", "nzParser", "nzPrecision", "nzPrecisionMode", "nzPlaceHolder", "nzStatus", "nzStep", "nzInputMode", "nzId", "nzDisabled", "nzReadOnly", "nzAutoFocus", "nzBorderless", "nzFormatter"], outputs: ["nzBlur", "nzFocus"], exportAs: ["nzInputNumber"] }, { kind: "component", type: i10.NzDatePickerComponent, selector: "nz-date-picker,nz-week-picker,nz-month-picker,nz-year-picker,nz-range-picker", inputs: ["nzAllowClear", "nzAutoFocus", "nzDisabled", "nzBorderless", "nzInputReadOnly", "nzInline", "nzOpen", "nzDisabledDate", "nzLocale", "nzPlaceHolder", "nzPopupStyle", "nzDropdownClassName", "nzSize", "nzStatus", "nzFormat", "nzDateRender", "nzDisabledTime", "nzRenderExtraFooter", "nzShowToday", "nzMode", "nzShowNow", "nzRanges", "nzDefaultPickerValue", "nzSeparator", "nzSuffixIcon", "nzBackdrop", "nzId", "nzPlacement", "nzShowTime"], outputs: ["nzOnPanelChange", "nzOnCalendarChange", "nzOnOk", "nzOnOpenChange"], exportAs: ["nzDatePicker"] }, { kind: "directive", type: i10.NzRangePickerComponent, selector: "nz-range-picker", exportAs: ["nzRangePicker"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.1", ngImport: i0, type: STFilterComponent, decorators: [{
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
      (click)="show($event)"
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
              [ngTemplateOutletContext]="{ $implicit: f, col: col }"
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
          <a class="ant-table-filter-dropdown-link confirm" (click)="visible = false">
            <span (click)="confirm()">{{ f.confirmText || locale.filterConfirm }}</span>
          </a>
          <a class="ant-table-filter-dropdown-link clear" (click)="visible = false">
            <span (click)="reset()">{{ f.clearText || locale.filterReset }}</span>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQW9IbkgsTUFBTSxPQUFPLGlCQUFpQjtJQTdHOUI7UUE4R0UsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVQLFdBQU0sR0FBZSxFQUFFLENBQUM7UUFFZCxNQUFDLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNoQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztLQTBCekQ7SUF6QkMsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQWMsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxDQUFDLE1BQWtCO1FBQ3JCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxXQUFXLENBQUMsSUFBd0I7UUFDbEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7OzhHQS9CVSxpQkFBaUI7a0dBQWpCLGlCQUFpQixnVEEzR2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUdUOzJGQVVVLGlCQUFpQjtrQkE3RzdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlHVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osNENBQTRDLEVBQUUsTUFBTTt3QkFDcEQsb0JBQW9CLEVBQUUsTUFBTTt3QkFDNUIsaURBQWlELEVBQUUsU0FBUztxQkFDN0Q7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs4QkFHVSxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLENBQUM7c0JBQVQsS0FBSztnQkFDYSxDQUFDO3NCQUFuQixNQUFNO2dCQUNZLE1BQU07c0JBQXhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5pbXBvcnQgeyBTVENvbHVtbkZpbHRlciwgU1RDb2x1bW5GaWx0ZXJNZW51LCBTVEljb24gfSBmcm9tICcuL3N0LmludGVyZmFjZXMnO1xuaW1wb3J0IHsgX1NUQ29sdW1uIH0gZnJvbSAnLi9zdC50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0LWZpbHRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW5cbiAgICAgIGNsYXNzPVwiYW50LXRhYmxlLWZpbHRlci10cmlnZ2VyXCJcbiAgICAgIFtjbGFzcy5hY3RpdmVdPVwidmlzaWJsZSB8fCBmLmRlZmF1bHRcIlxuICAgICAgbnotZHJvcGRvd25cbiAgICAgIFtuekRyb3Bkb3duTWVudV09XCJmaWx0ZXJNZW51XCJcbiAgICAgIG56VHJpZ2dlcj1cImNsaWNrXCJcbiAgICAgIFtuekNsaWNrSGlkZV09XCJmYWxzZVwiXG4gICAgICBbKG56VmlzaWJsZSldPVwidmlzaWJsZVwiXG4gICAgICBuek92ZXJsYXlDbGFzc05hbWU9XCJzdF9fZmlsdGVyLXdyYXBcIlxuICAgICAgKGNsaWNrKT1cInNob3coJGV2ZW50KVwiXG4gICAgPlxuICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cImljb24udHlwZVwiIFtuelRoZW1lXT1cImljb24udGhlbWUhXCI+PC9pPlxuICAgIDwvc3Bhbj5cbiAgICA8bnotZHJvcGRvd24tbWVudSAjZmlsdGVyTWVudT1cIm56RHJvcGRvd25NZW51XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LXRhYmxlLWZpbHRlci1kcm9wZG93blwiPlxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJmLnR5cGVcIj5cbiAgICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIna2V5d29yZCdcIiBjbGFzcz1cInN0X19maWx0ZXIta2V5d29yZFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbnotaW5wdXRcbiAgICAgICAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwiZi5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZi5tZW51cyFbMF0hLnZhbHVlXCJcbiAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwibi5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAoa2V5dXAuZW50ZXIpPVwiY29uZmlybSgpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ251bWJlcidcIiBjbGFzcz1cInAtc20gc3RfX2ZpbHRlci1udW1iZXJcIj5cbiAgICAgICAgICAgIDxuei1pbnB1dC1udW1iZXJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmLm1lbnVzIVswXSEudmFsdWVcIlxuICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJuLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIFtuek1pbl09XCJmLm51bWJlciEubWluIVwiXG4gICAgICAgICAgICAgIFtuek1heF09XCJmLm51bWJlciEubWF4IVwiXG4gICAgICAgICAgICAgIFtuelN0ZXBdPVwiZi5udW1iZXIhLnN0ZXAhXCJcbiAgICAgICAgICAgICAgW256UHJlY2lzaW9uXT1cImYubnVtYmVyIS5wcmVjaXNpb25cIlxuICAgICAgICAgICAgICBbbnpQbGFjZUhvbGRlcl09XCJmLnBsYWNlaG9sZGVyIVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwid2lkdGgtMTAwXCJcbiAgICAgICAgICAgID48L256LWlucHV0LW51bWJlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInZGF0ZSdcIiBjbGFzcz1cInAtc20gc3RfX2ZpbHRlci1kYXRlXCI+XG4gICAgICAgICAgICA8bnotZGF0ZS1waWNrZXJcbiAgICAgICAgICAgICAgKm5nSWY9XCIhZi5kYXRlIS5yYW5nZVwiXG4gICAgICAgICAgICAgIG56SW5saW5lXG4gICAgICAgICAgICAgIFtuek1vZGVdPVwiZi5kYXRlIS5tb2RlXCJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmLm1lbnVzIVswXSEudmFsdWVcIlxuICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJuLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIFtuelNob3dOb3ddPVwiZi5kYXRlIS5zaG93Tm93XCJcbiAgICAgICAgICAgICAgW256U2hvd1RvZGF5XT1cImYuZGF0ZSEuc2hvd1RvZGF5XCJcbiAgICAgICAgICAgICAgW256RGlzYWJsZWREYXRlXT1cImYuZGF0ZSEuZGlzYWJsZWREYXRlXCJcbiAgICAgICAgICAgICAgW256RGlzYWJsZWRUaW1lXT1cImYuZGF0ZSEuZGlzYWJsZWRUaW1lXCJcbiAgICAgICAgICAgID48L256LWRhdGUtcGlja2VyPlxuICAgICAgICAgICAgPG56LXJhbmdlLXBpY2tlclxuICAgICAgICAgICAgICAqbmdJZj1cImYuZGF0ZSEucmFuZ2VcIlxuICAgICAgICAgICAgICBueklubGluZVxuICAgICAgICAgICAgICBbbnpNb2RlXT1cImYuZGF0ZSEubW9kZVwiXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZi5tZW51cyFbMF0hLnZhbHVlXCJcbiAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwibi5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICBbbnpTaG93Tm93XT1cImYuZGF0ZSEuc2hvd05vd1wiXG4gICAgICAgICAgICAgIFtuelNob3dUb2RheV09XCJmLmRhdGUhLnNob3dUb2RheVwiXG4gICAgICAgICAgICAgIFtuekRpc2FibGVkRGF0ZV09XCJmLmRhdGUhLmRpc2FibGVkRGF0ZVwiXG4gICAgICAgICAgICAgIFtuekRpc2FibGVkVGltZV09XCJmLmRhdGUhLmRpc2FibGVkVGltZVwiXG4gICAgICAgICAgICA+PC9uei1yYW5nZS1waWNrZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3RpbWUnXCIgY2xhc3M9XCJwLXNtIHN0X19maWx0ZXItdGltZVwiPiA8L2Rpdj5cbiAgICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInY3VzdG9tJ1wiIGNsYXNzPVwic3RfX2ZpbHRlci1jdXN0b21cIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJmLmN1c3RvbSFcIlxuICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGYsIGNvbDogY29sIH1cIlxuICAgICAgICAgICAgPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsICpuZ1N3aXRjaERlZmF1bHQgbnotbWVudT5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmLm11bHRpcGxlXCI+XG4gICAgICAgICAgICAgIDxsaSBuei1tZW51LWl0ZW0gKm5nRm9yPVwibGV0IGZpbHRlciBvZiBmLm1lbnVzXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIG56LWNoZWNrYm94IFsobmdNb2RlbCldPVwiZmlsdGVyLmNoZWNrZWRcIiAobmdNb2RlbENoYW5nZSk9XCJjaGVja2JveENoYW5nZSgpXCI+XG4gICAgICAgICAgICAgICAgICB7eyBmaWx0ZXIudGV4dCB9fVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZi5tdWx0aXBsZVwiPlxuICAgICAgICAgICAgICA8bGkgbnotbWVudS1pdGVtICpuZ0Zvcj1cImxldCBmaWx0ZXIgb2YgZi5tZW51c1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBuei1yYWRpbyBbbmdNb2RlbF09XCJmaWx0ZXIuY2hlY2tlZFwiIChuZ01vZGVsQ2hhbmdlKT1cInJhZGlvQ2hhbmdlKGZpbHRlcilcIj5cbiAgICAgICAgICAgICAgICAgIHt7IGZpbHRlci50ZXh0IH19XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZi5zaG93T1BBcmVhXCIgY2xhc3M9XCJhbnQtdGFibGUtZmlsdGVyLWRyb3Bkb3duLWJ0bnNcIj5cbiAgICAgICAgICA8YSBjbGFzcz1cImFudC10YWJsZS1maWx0ZXItZHJvcGRvd24tbGluayBjb25maXJtXCIgKGNsaWNrKT1cInZpc2libGUgPSBmYWxzZVwiPlxuICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImNvbmZpcm0oKVwiPnt7IGYuY29uZmlybVRleHQgfHwgbG9jYWxlLmZpbHRlckNvbmZpcm0gfX08L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGNsYXNzPVwiYW50LXRhYmxlLWZpbHRlci1kcm9wZG93bi1saW5rIGNsZWFyXCIgKGNsaWNrKT1cInZpc2libGUgPSBmYWxzZVwiPlxuICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cInJlc2V0KClcIj57eyBmLmNsZWFyVGV4dCB8fCBsb2NhbGUuZmlsdGVyUmVzZXQgfX08L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbnotZHJvcGRvd24tbWVudT5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXRhYmxlLWZpbHRlci10cmlnZ2VyLWNvbnRhaW5lcl0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5zdF9fZmlsdGVyXSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLmFudC10YWJsZS1maWx0ZXItdHJpZ2dlci1jb250YWluZXItb3Blbl0nOiBgdmlzaWJsZWBcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNURmlsdGVyQ29tcG9uZW50IHtcbiAgdmlzaWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBjb2whOiBfU1RDb2x1bW47XG4gIEBJbnB1dCgpIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuICBASW5wdXQoKSBmITogU1RDb2x1bW5GaWx0ZXI7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuID0gbmV3IEV2ZW50RW1pdHRlcjx1bmtub3duPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgaGFuZGxlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBnZXQgaWNvbigpOiBTVEljb24ge1xuICAgIHJldHVybiB0aGlzLmYuaWNvbiBhcyBTVEljb247XG4gIH1cblxuICBzaG93KCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGNoZWNrYm94Q2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMubi5lbWl0KHRoaXMuZi5tZW51cz8uZmlsdGVyKHcgPT4gdy5jaGVja2VkKSk7XG4gIH1cblxuICByYWRpb0NoYW5nZShpdGVtOiBTVENvbHVtbkZpbHRlck1lbnUpOiB2b2lkIHtcbiAgICB0aGlzLmYubWVudXMhLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICBpdGVtLmNoZWNrZWQgPSAhaXRlbS5jaGVja2VkO1xuICAgIHRoaXMubi5lbWl0KGl0ZW0pO1xuICB9XG5cbiAgY29uZmlybSgpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZS5lbWl0KHRydWUpO1xuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGUuZW1pdChmYWxzZSk7XG4gIH1cbn1cbiJdfQ==