import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
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
        var _a;
        this.n.emit((_a = this.f.menus) === null || _a === void 0 ? void 0 : _a.filter(w => w.checked));
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
STFilterComponent.decorators = [
    { type: Component, args: [{
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
            },] }
];
STFilterComponent.propDecorators = {
    col: [{ type: Input }],
    locale: [{ type: Input }],
    f: [{ type: Input }],
    n: [{ type: Output }],
    handle: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFvSG5ILE1BQU0sT0FBTyxpQkFBaUI7SUE3RzlCO1FBOEdFLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFUCxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBRWQsTUFBQyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDaEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUEwQjFELENBQUM7SUF6QkMsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQWMsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxDQUFDLE1BQWtCO1FBQ3JCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsY0FBYzs7UUFDWixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFBLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSywwQ0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQXdCO1FBQ2xDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7WUE1SUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpR1Q7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLDRDQUE0QyxFQUFFLE1BQU07b0JBQ3BELG9CQUFvQixFQUFFLE1BQU07b0JBQzVCLGlEQUFpRCxFQUFFLFNBQVM7aUJBQzdEO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7O2tCQUdFLEtBQUs7cUJBQ0wsS0FBSztnQkFDTCxLQUFLO2dCQUNMLE1BQU07cUJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7IFNUQ29sdW1uRmlsdGVyLCBTVENvbHVtbkZpbHRlck1lbnUsIFNUSWNvbiB9IGZyb20gJy4vc3QuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBfU1RDb2x1bW4gfSBmcm9tICcuL3N0LnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3QtZmlsdGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhblxuICAgICAgY2xhc3M9XCJhbnQtdGFibGUtZmlsdGVyLXRyaWdnZXJcIlxuICAgICAgW2NsYXNzLmFjdGl2ZV09XCJ2aXNpYmxlIHx8IGYuZGVmYXVsdFwiXG4gICAgICBuei1kcm9wZG93blxuICAgICAgW256RHJvcGRvd25NZW51XT1cImZpbHRlck1lbnVcIlxuICAgICAgbnpUcmlnZ2VyPVwiY2xpY2tcIlxuICAgICAgW256Q2xpY2tIaWRlXT1cImZhbHNlXCJcbiAgICAgIFsobnpWaXNpYmxlKV09XCJ2aXNpYmxlXCJcbiAgICAgIG56T3ZlcmxheUNsYXNzTmFtZT1cInN0X19maWx0ZXItd3JhcFwiXG4gICAgICAoY2xpY2spPVwic2hvdygkZXZlbnQpXCJcbiAgICA+XG4gICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiaWNvbi50eXBlXCIgW256VGhlbWVdPVwiaWNvbi50aGVtZSFcIj48L2k+XG4gICAgPC9zcGFuPlxuICAgIDxuei1kcm9wZG93bi1tZW51ICNmaWx0ZXJNZW51PVwibnpEcm9wZG93bk1lbnVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdGFibGUtZmlsdGVyLWRyb3Bkb3duXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImYudHlwZVwiPlxuICAgICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidrZXl3b3JkJ1wiIGNsYXNzPVwic3RfX2ZpbHRlci1rZXl3b3JkXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuei1pbnB1dFxuICAgICAgICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJmLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmLm1lbnVzIVswXSEudmFsdWVcIlxuICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJuLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIChrZXl1cC5lbnRlcik9XCJjb25maXJtKClcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInbnVtYmVyJ1wiIGNsYXNzPVwicC1zbSBzdF9fZmlsdGVyLW51bWJlclwiPlxuICAgICAgICAgICAgPG56LWlucHV0LW51bWJlclxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImYubWVudXMhWzBdIS52YWx1ZVwiXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm4uZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgW256TWluXT1cImYubnVtYmVyIS5taW4hXCJcbiAgICAgICAgICAgICAgW256TWF4XT1cImYubnVtYmVyIS5tYXghXCJcbiAgICAgICAgICAgICAgW256U3RlcF09XCJmLm51bWJlciEuc3RlcCFcIlxuICAgICAgICAgICAgICBbbnpQcmVjaXNpb25dPVwiZi5udW1iZXIhLnByZWNpc2lvblwiXG4gICAgICAgICAgICAgIFtuelBsYWNlSG9sZGVyXT1cImYucGxhY2Vob2xkZXIhXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJ3aWR0aC0xMDBcIlxuICAgICAgICAgICAgPjwvbnotaW5wdXQtbnVtYmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidkYXRlJ1wiIGNsYXNzPVwicC1zbSBzdF9fZmlsdGVyLWRhdGVcIj5cbiAgICAgICAgICAgIDxuei1kYXRlLXBpY2tlclxuICAgICAgICAgICAgICAqbmdJZj1cIiFmLmRhdGUhLnJhbmdlXCJcbiAgICAgICAgICAgICAgbnpJbmxpbmVcbiAgICAgICAgICAgICAgW256TW9kZV09XCJmLmRhdGUhLm1vZGVcIlxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImYubWVudXMhWzBdIS52YWx1ZVwiXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm4uZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgW256U2hvd05vd109XCJmLmRhdGUhLnNob3dOb3dcIlxuICAgICAgICAgICAgICBbbnpTaG93VG9kYXldPVwiZi5kYXRlIS5zaG93VG9kYXlcIlxuICAgICAgICAgICAgICBbbnpEaXNhYmxlZERhdGVdPVwiZi5kYXRlIS5kaXNhYmxlZERhdGVcIlxuICAgICAgICAgICAgICBbbnpEaXNhYmxlZFRpbWVdPVwiZi5kYXRlIS5kaXNhYmxlZFRpbWVcIlxuICAgICAgICAgICAgPjwvbnotZGF0ZS1waWNrZXI+XG4gICAgICAgICAgICA8bnotcmFuZ2UtcGlja2VyXG4gICAgICAgICAgICAgICpuZ0lmPVwiZi5kYXRlIS5yYW5nZVwiXG4gICAgICAgICAgICAgIG56SW5saW5lXG4gICAgICAgICAgICAgIFtuek1vZGVdPVwiZi5kYXRlIS5tb2RlXCJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmLm1lbnVzIVswXSEudmFsdWVcIlxuICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJuLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIFtuelNob3dOb3ddPVwiZi5kYXRlIS5zaG93Tm93XCJcbiAgICAgICAgICAgICAgW256U2hvd1RvZGF5XT1cImYuZGF0ZSEuc2hvd1RvZGF5XCJcbiAgICAgICAgICAgICAgW256RGlzYWJsZWREYXRlXT1cImYuZGF0ZSEuZGlzYWJsZWREYXRlXCJcbiAgICAgICAgICAgICAgW256RGlzYWJsZWRUaW1lXT1cImYuZGF0ZSEuZGlzYWJsZWRUaW1lXCJcbiAgICAgICAgICAgID48L256LXJhbmdlLXBpY2tlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIndGltZSdcIiBjbGFzcz1cInAtc20gc3RfX2ZpbHRlci10aW1lXCI+IDwvZGl2PlxuICAgICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidjdXN0b20nXCIgY2xhc3M9XCJzdF9fZmlsdGVyLWN1c3RvbVwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImYuY3VzdG9tIVwiXG4gICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogZiwgY29sOiBjb2wgfVwiXG4gICAgICAgICAgICA+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dWwgKm5nU3dpdGNoRGVmYXVsdCBuei1tZW51PlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImYubXVsdGlwbGVcIj5cbiAgICAgICAgICAgICAgPGxpIG56LW1lbnUtaXRlbSAqbmdGb3I9XCJsZXQgZmlsdGVyIG9mIGYubWVudXNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgbnotY2hlY2tib3ggWyhuZ01vZGVsKV09XCJmaWx0ZXIuY2hlY2tlZFwiIChuZ01vZGVsQ2hhbmdlKT1cImNoZWNrYm94Q2hhbmdlKClcIj5cbiAgICAgICAgICAgICAgICAgIHt7IGZpbHRlci50ZXh0IH19XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFmLm11bHRpcGxlXCI+XG4gICAgICAgICAgICAgIDxsaSBuei1tZW51LWl0ZW0gKm5nRm9yPVwibGV0IGZpbHRlciBvZiBmLm1lbnVzXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIG56LXJhZGlvIFtuZ01vZGVsXT1cImZpbHRlci5jaGVja2VkXCIgKG5nTW9kZWxDaGFuZ2UpPVwicmFkaW9DaGFuZ2UoZmlsdGVyKVwiPlxuICAgICAgICAgICAgICAgICAge3sgZmlsdGVyLnRleHQgfX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJmLnNob3dPUEFyZWFcIiBjbGFzcz1cImFudC10YWJsZS1maWx0ZXItZHJvcGRvd24tYnRuc1wiPlxuICAgICAgICAgIDxhIGNsYXNzPVwiYW50LXRhYmxlLWZpbHRlci1kcm9wZG93bi1saW5rIGNvbmZpcm1cIiAoY2xpY2spPVwidmlzaWJsZSA9IGZhbHNlXCI+XG4gICAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiY29uZmlybSgpXCI+e3sgZi5jb25maXJtVGV4dCB8fCBsb2NhbGUuZmlsdGVyQ29uZmlybSB9fTwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgY2xhc3M9XCJhbnQtdGFibGUtZmlsdGVyLWRyb3Bkb3duLWxpbmsgY2xlYXJcIiAoY2xpY2spPVwidmlzaWJsZSA9IGZhbHNlXCI+XG4gICAgICAgICAgICA8c3BhbiAoY2xpY2spPVwicmVzZXQoKVwiPnt7IGYuY2xlYXJUZXh0IHx8IGxvY2FsZS5maWx0ZXJSZXNldCB9fTwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uei1kcm9wZG93bi1tZW51PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtZmlsdGVyLXRyaWdnZXItY29udGFpbmVyXSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLnN0X19maWx0ZXJdJzogYHRydWVgLFxuICAgICdbY2xhc3MuYW50LXRhYmxlLWZpbHRlci10cmlnZ2VyLWNvbnRhaW5lci1vcGVuXSc6IGB2aXNpYmxlYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU1RGaWx0ZXJDb21wb25lbnQge1xuICB2aXNpYmxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNvbDogX1NUQ29sdW1uO1xuICBASW5wdXQoKSBsb2NhbGU6IExvY2FsZURhdGEgPSB7fTtcbiAgQElucHV0KCkgZjogU1RDb2x1bW5GaWx0ZXI7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuID0gbmV3IEV2ZW50RW1pdHRlcjx1bmtub3duPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgaGFuZGxlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBnZXQgaWNvbigpOiBTVEljb24ge1xuICAgIHJldHVybiB0aGlzLmYuaWNvbiBhcyBTVEljb247XG4gIH1cblxuICBzaG93KCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGNoZWNrYm94Q2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMubi5lbWl0KHRoaXMuZi5tZW51cz8uZmlsdGVyKHcgPT4gdy5jaGVja2VkKSk7XG4gIH1cblxuICByYWRpb0NoYW5nZShpdGVtOiBTVENvbHVtbkZpbHRlck1lbnUpOiB2b2lkIHtcbiAgICB0aGlzLmYubWVudXMhLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICBpdGVtLmNoZWNrZWQgPSAhaXRlbS5jaGVja2VkO1xuICAgIHRoaXMubi5lbWl0KGl0ZW0pO1xuICB9XG5cbiAgY29uZmlybSgpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZS5lbWl0KHRydWUpO1xuICB9XG5cbiAgcmVzZXQoKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGUuZW1pdChmYWxzZSk7XG4gIH1cbn1cbiJdfQ==