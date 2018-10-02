/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9hdmF0YXItbGlzdC8iLCJzb3VyY2VzIjpbImF2YXRhci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQWlCdkUsTUFBTTs7cUJBQ0ksRUFBRTsyQkFFSSxFQUFFOzs7Ozs7SUFFaEIsSUFDSSxJQUFJLENBQUMsS0FBNkM7UUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM5QyxRQUFRLEtBQUssRUFBRTtZQUNiLEtBQUssT0FBTyxDQUFDO1lBQ2IsS0FBSyxPQUFPLENBQUM7WUFDYixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLE1BQU07WUFDUjtnQkFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztnQkFDM0IsTUFBTTtTQUNUO0tBQ0Y7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7Z0JBQ0QsSUFBSSxFQUFFLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxFQUFFO2dCQUN2QyxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCOzs7bUJBTUUsS0FBSztxQkFlTCxlQUFlLFNBQUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgUXVlcnlMaXN0LCBDb250ZW50Q2hpbGRyZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXZhdGFyTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2F2YXRhci1saXN0LWl0ZW0uY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXZhdGFyLWxpc3QnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPHVsIGNsYXNzPVwiYXZhdGFyLWxpc3RfX3dyYXBcIj5cclxuICAgIDxsaSAqbmdGb3I9XCJsZXQgaSBvZiBfaXRlbXNcIiBjbGFzcz1cImF2YXRhci1saXN0X19pdGVte3tfc2l6ZSA/ICcgYXZhdGFyLWxpc3RfX2l0ZW0tJyArIF9zaXplIDogJyd9fVwiPlxyXG4gICAgICA8bnotdG9vbHRpcCAqbmdJZj1cImkudGlwc1wiIFtuelRpdGxlXT1cImkudGlwc1wiPlxyXG4gICAgICAgIDxuei1hdmF0YXIgbnotdG9vbHRpcCBbbnpTcmNdPVwiaS5zcmNcIiBbbnpUZXh0XT1cImkudGV4dFwiIFtuekljb25dPVwiaS5pY29uXCIgW256U2l6ZV09XCJfYXZhdGFyU2l6ZVwiPjwvbnotYXZhdGFyPlxyXG4gICAgICA8L256LXRvb2x0aXA+XHJcbiAgICAgIDxuei1hdmF0YXIgKm5nSWY9XCIhaS50aXBzXCIgW256U3JjXT1cImkuc3JjXCIgW256VGV4dF09XCJpLnRleHRcIiBbbnpJY29uXT1cImkuaWNvblwiIFtuelNpemVdPVwiX2F2YXRhclNpemVcIj48L256LWF2YXRhcj5cclxuICAgIDwvbGk+XHJcbiAgPC91bD5cclxuICBgLFxyXG4gIGhvc3Q6IHsgJ1tjbGFzcy5hdmF0YXItbGlzdF0nOiAndHJ1ZScgfSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEF2YXRhckxpc3RDb21wb25lbnQge1xyXG4gIF9zaXplID0gJyc7XHJcblxyXG4gIF9hdmF0YXJTaXplID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNpemUodmFsdWU6ICdsYXJnZScgfCAnc21hbGwnIHwgJ21pbmknIHwgJ2RlZmF1bHQnKSB7XHJcbiAgICB0aGlzLl9zaXplID0gdmFsdWUgPT09ICdkZWZhdWx0JyA/ICcnIDogdmFsdWU7XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgIGNhc2UgJ2xhcmdlJzpcclxuICAgICAgY2FzZSAnc21hbGwnOlxyXG4gICAgICBjYXNlICdkZWZhdWx0JzpcclxuICAgICAgICB0aGlzLl9hdmF0YXJTaXplID0gdmFsdWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhpcy5fYXZhdGFyU2l6ZSA9ICdzbWFsbCc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAQ29udGVudENoaWxkcmVuKEF2YXRhckxpc3RJdGVtQ29tcG9uZW50KVxyXG4gIF9pdGVtczogUXVlcnlMaXN0PEF2YXRhckxpc3RJdGVtQ29tcG9uZW50PjtcclxufVxyXG4iXX0=