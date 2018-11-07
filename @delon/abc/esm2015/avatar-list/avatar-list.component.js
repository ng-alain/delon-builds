/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, QueryList, ContentChildren } from '@angular/core';
import { AvatarListItemComponent } from './avatar-list-item.component';
export class AvatarListComponent {
    constructor() {
        this._size = '';
        this._avatarSize = '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set size(value) {
        this._size = value === 'default' ? '' : value;
        switch (value) {
            case 'large':
            case 'small':
            case 'default':
                this._avatarSize = value;
                break;
            default:
                this._avatarSize = 'small';
                break;
        }
    }
}
AvatarListComponent.decorators = [
    { type: Component, args: [{
                selector: 'avatar-list',
                template: `
  <ul class="avatar-list__wrap">
    <li *ngFor="let i of _items" class="avatar-list__item{{_size ? ' avatar-list__item-' + _size : ''}}">
      <nz-tooltip *ngIf="i.tips" [nzTitle]="i.tips">
        <nz-avatar nz-tooltip [nzSrc]="i.src" [nzText]="i.text" [nzIcon]="i.icon" [nzSize]="_avatarSize"></nz-avatar>
      </nz-tooltip>
      <nz-avatar *ngIf="!i.tips" [nzSrc]="i.src" [nzText]="i.text" [nzIcon]="i.icon" [nzSize]="_avatarSize"></nz-avatar>
    </li>
  </ul>
  `,
                host: { '[class.avatar-list]': 'true' },
                preserveWhitespaces: false
            }] }
];
AvatarListComponent.propDecorators = {
    size: [{ type: Input }],
    _items: [{ type: ContentChildren, args: [AvatarListItemComponent,] }]
};
if (false) {
    /** @type {?} */
    AvatarListComponent.prototype._size;
    /** @type {?} */
    AvatarListComponent.prototype._avatarSize;
    /** @type {?} */
    AvatarListComponent.prototype._items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9hdmF0YXItbGlzdC8iLCJzb3VyY2VzIjpbImF2YXRhci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQWlCdkUsTUFBTSxPQUFPLG1CQUFtQjtJQWZoQztRQWdCRSxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBRVgsZ0JBQVcsR0FBRyxFQUFFLENBQUM7SUFtQm5CLENBQUM7Ozs7O0lBakJDLElBQ0ksSUFBSSxDQUFDLEtBQTZDO1FBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDOUMsUUFBUSxLQUFLLEVBQUU7WUFDYixLQUFLLE9BQU8sQ0FBQztZQUNiLEtBQUssT0FBTyxDQUFDO1lBQ2IsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixNQUFNO1lBQ1I7Z0JBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7Z0JBQzNCLE1BQU07U0FDVDtJQUNILENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7Z0JBQ0QsSUFBSSxFQUFFLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxFQUFFO2dCQUN2QyxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCOzs7bUJBTUUsS0FBSztxQkFlTCxlQUFlLFNBQUMsdUJBQXVCOzs7O0lBbkJ4QyxvQ0FBVzs7SUFFWCwwQ0FBaUI7O0lBaUJqQixxQ0FDMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBRdWVyeUxpc3QsIENvbnRlbnRDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXZhdGFyTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2F2YXRhci1saXN0LWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXZhdGFyLWxpc3QnLFxuICB0ZW1wbGF0ZTogYFxuICA8dWwgY2xhc3M9XCJhdmF0YXItbGlzdF9fd3JhcFwiPlxuICAgIDxsaSAqbmdGb3I9XCJsZXQgaSBvZiBfaXRlbXNcIiBjbGFzcz1cImF2YXRhci1saXN0X19pdGVte3tfc2l6ZSA/ICcgYXZhdGFyLWxpc3RfX2l0ZW0tJyArIF9zaXplIDogJyd9fVwiPlxuICAgICAgPG56LXRvb2x0aXAgKm5nSWY9XCJpLnRpcHNcIiBbbnpUaXRsZV09XCJpLnRpcHNcIj5cbiAgICAgICAgPG56LWF2YXRhciBuei10b29sdGlwIFtuelNyY109XCJpLnNyY1wiIFtuelRleHRdPVwiaS50ZXh0XCIgW256SWNvbl09XCJpLmljb25cIiBbbnpTaXplXT1cIl9hdmF0YXJTaXplXCI+PC9uei1hdmF0YXI+XG4gICAgICA8L256LXRvb2x0aXA+XG4gICAgICA8bnotYXZhdGFyICpuZ0lmPVwiIWkudGlwc1wiIFtuelNyY109XCJpLnNyY1wiIFtuelRleHRdPVwiaS50ZXh0XCIgW256SWNvbl09XCJpLmljb25cIiBbbnpTaXplXT1cIl9hdmF0YXJTaXplXCI+PC9uei1hdmF0YXI+XG4gICAgPC9saT5cbiAgPC91bD5cbiAgYCxcbiAgaG9zdDogeyAnW2NsYXNzLmF2YXRhci1saXN0XSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgQXZhdGFyTGlzdENvbXBvbmVudCB7XG4gIF9zaXplID0gJyc7XG5cbiAgX2F2YXRhclNpemUgPSAnJztcblxuICBASW5wdXQoKVxuICBzZXQgc2l6ZSh2YWx1ZTogJ2xhcmdlJyB8ICdzbWFsbCcgfCAnbWluaScgfCAnZGVmYXVsdCcpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWUgPT09ICdkZWZhdWx0JyA/ICcnIDogdmFsdWU7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHRoaXMuX2F2YXRhclNpemUgPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9hdmF0YXJTaXplID0gJ3NtYWxsJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgQENvbnRlbnRDaGlsZHJlbihBdmF0YXJMaXN0SXRlbUNvbXBvbmVudClcbiAgX2l0ZW1zOiBRdWVyeUxpc3Q8QXZhdGFyTGlzdEl0ZW1Db21wb25lbnQ+O1xufVxuIl19