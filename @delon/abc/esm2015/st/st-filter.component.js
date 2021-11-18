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
              [attr.placeholder]="f.menus![0]!.text"
              [(ngModel)]="f.menus![0]!.value"
              (ngModelChange)="n.emit($event)"
              (keyup.enter)="confirm()"
            />
          </div>
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
        <div class="ant-table-filter-dropdown-btns">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUErRW5ILE1BQU0sT0FBTyxpQkFBaUI7SUF4RTlCO1FBeUVFLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFUCxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBRWQsTUFBQyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDaEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUEwQjFELENBQUM7SUF6QkMsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQWMsQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFBSSxDQUFDLE1BQWtCO1FBQ3JCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsY0FBYzs7UUFDWixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFBLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSywwQ0FBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQXdCO1FBQ2xDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7WUF2R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTREVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osNENBQTRDLEVBQUUsTUFBTTtvQkFDcEQsb0JBQW9CLEVBQUUsTUFBTTtvQkFDNUIsaURBQWlELEVBQUUsU0FBUztpQkFDN0Q7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7a0JBR0UsS0FBSztxQkFDTCxLQUFLO2dCQUNMLEtBQUs7Z0JBQ0wsTUFBTTtxQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHsgX1NUQ29sdW1uIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBTVENvbHVtbkZpbHRlciwgU1RDb2x1bW5GaWx0ZXJNZW51LCBTVEljb24gfSBmcm9tICcuL3N0LmludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdC1maWx0ZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuXG4gICAgICBjbGFzcz1cImFudC10YWJsZS1maWx0ZXItdHJpZ2dlclwiXG4gICAgICBbY2xhc3MuYWN0aXZlXT1cInZpc2libGUgfHwgZi5kZWZhdWx0XCJcbiAgICAgIG56LWRyb3Bkb3duXG4gICAgICBbbnpEcm9wZG93bk1lbnVdPVwiZmlsdGVyTWVudVwiXG4gICAgICBuelRyaWdnZXI9XCJjbGlja1wiXG4gICAgICBbbnpDbGlja0hpZGVdPVwiZmFsc2VcIlxuICAgICAgWyhuelZpc2libGUpXT1cInZpc2libGVcIlxuICAgICAgbnpPdmVybGF5Q2xhc3NOYW1lPVwic3RfX2ZpbHRlci13cmFwXCJcbiAgICAgIChjbGljayk9XCJzaG93KCRldmVudClcIlxuICAgID5cbiAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJpY29uLnR5cGVcIiBbbnpUaGVtZV09XCJpY29uLnRoZW1lIVwiPjwvaT5cbiAgICA8L3NwYW4+XG4gICAgPG56LWRyb3Bkb3duLW1lbnUgI2ZpbHRlck1lbnU9XCJuekRyb3Bkb3duTWVudVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFudC10YWJsZS1maWx0ZXItZHJvcGRvd25cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZi50eXBlXCI+XG4gICAgICAgICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ2tleXdvcmQnXCIgY2xhc3M9XCJzdF9fZmlsdGVyLWtleXdvcmRcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG56LWlucHV0XG4gICAgICAgICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cImYubWVudXMhWzBdIS50ZXh0XCJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmLm1lbnVzIVswXSEudmFsdWVcIlxuICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJuLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIChrZXl1cC5lbnRlcik9XCJjb25maXJtKClcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInY3VzdG9tJ1wiIGNsYXNzPVwic3RfX2ZpbHRlci1jdXN0b21cIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJmLmN1c3RvbSFcIlxuICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGYsIGNvbDogY29sIH1cIlxuICAgICAgICAgICAgPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsICpuZ1N3aXRjaERlZmF1bHQgbnotbWVudT5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmLm11bHRpcGxlXCI+XG4gICAgICAgICAgICAgIDxsaSBuei1tZW51LWl0ZW0gKm5nRm9yPVwibGV0IGZpbHRlciBvZiBmLm1lbnVzXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIG56LWNoZWNrYm94IFsobmdNb2RlbCldPVwiZmlsdGVyLmNoZWNrZWRcIiAobmdNb2RlbENoYW5nZSk9XCJjaGVja2JveENoYW5nZSgpXCI+XG4gICAgICAgICAgICAgICAgICB7eyBmaWx0ZXIudGV4dCB9fVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZi5tdWx0aXBsZVwiPlxuICAgICAgICAgICAgICA8bGkgbnotbWVudS1pdGVtICpuZ0Zvcj1cImxldCBmaWx0ZXIgb2YgZi5tZW51c1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBuei1yYWRpbyBbbmdNb2RlbF09XCJmaWx0ZXIuY2hlY2tlZFwiIChuZ01vZGVsQ2hhbmdlKT1cInJhZGlvQ2hhbmdlKGZpbHRlcilcIj5cbiAgICAgICAgICAgICAgICAgIHt7IGZpbHRlci50ZXh0IH19XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRhYmxlLWZpbHRlci1kcm9wZG93bi1idG5zXCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJhbnQtdGFibGUtZmlsdGVyLWRyb3Bkb3duLWxpbmsgY29uZmlybVwiIChjbGljayk9XCJ2aXNpYmxlID0gZmFsc2VcIj5cbiAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJjb25maXJtKClcIj57eyBmLmNvbmZpcm1UZXh0IHx8IGxvY2FsZS5maWx0ZXJDb25maXJtIH19PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBjbGFzcz1cImFudC10YWJsZS1maWx0ZXItZHJvcGRvd24tbGluayBjbGVhclwiIChjbGljayk9XCJ2aXNpYmxlID0gZmFsc2VcIj5cbiAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJyZXNldCgpXCI+e3sgZi5jbGVhclRleHQgfHwgbG9jYWxlLmZpbHRlclJlc2V0IH19PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L256LWRyb3Bkb3duLW1lbnU+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10YWJsZS1maWx0ZXItdHJpZ2dlci1jb250YWluZXJdJzogYHRydWVgLFxuICAgICdbY2xhc3Muc3RfX2ZpbHRlcl0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtZmlsdGVyLXRyaWdnZXItY29udGFpbmVyLW9wZW5dJzogYHZpc2libGVgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTVEZpbHRlckNvbXBvbmVudCB7XG4gIHZpc2libGUgPSBmYWxzZTtcbiAgQElucHV0KCkgY29sOiBfU1RDb2x1bW47XG4gIEBJbnB1dCgpIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuICBASW5wdXQoKSBmOiBTVENvbHVtbkZpbHRlcjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG4gPSBuZXcgRXZlbnRFbWl0dGVyPHVua25vd24+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBoYW5kbGUgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIGdldCBpY29uKCk6IFNUSWNvbiB7XG4gICAgcmV0dXJuIHRoaXMuZi5pY29uIGFzIFNUSWNvbjtcbiAgfVxuXG4gIHNob3coJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgY2hlY2tib3hDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5uLmVtaXQodGhpcy5mLm1lbnVzPy5maWx0ZXIodyA9PiB3LmNoZWNrZWQpKTtcbiAgfVxuXG4gIHJhZGlvQ2hhbmdlKGl0ZW06IFNUQ29sdW1uRmlsdGVyTWVudSk6IHZvaWQge1xuICAgIHRoaXMuZi5tZW51cyEuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7XG4gICAgdGhpcy5uLmVtaXQoaXRlbSk7XG4gIH1cblxuICBjb25maXJtKCk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlLmVtaXQodHJ1ZSk7XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZS5lbWl0KGZhbHNlKTtcbiAgfVxufVxuIl19