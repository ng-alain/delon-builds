/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, QueryList, ContentChildren } from '@angular/core';
import { AvatarListItemComponent } from './avatar-list-item.component';
var AvatarListComponent = /** @class */ (function () {
    function AvatarListComponent() {
        this._size = '';
        this._avatarSize = '';
    }
    Object.defineProperty(AvatarListComponent.prototype, "size", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        },
        enumerable: true,
        configurable: true
    });
    AvatarListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'avatar-list',
                    template: "\n  <ul class=\"avatar-list__wrap\">\n    <li *ngFor=\"let i of _items\" class=\"avatar-list__item{{_size ? ' avatar-list__item-' + _size : ''}}\">\n      <nz-tooltip *ngIf=\"i.tips\" [nzTitle]=\"i.tips\">\n        <nz-avatar nz-tooltip [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"_avatarSize\"></nz-avatar>\n      </nz-tooltip>\n      <nz-avatar *ngIf=\"!i.tips\" [nzSrc]=\"i.src\" [nzText]=\"i.text\" [nzIcon]=\"i.icon\" [nzSize]=\"_avatarSize\"></nz-avatar>\n    </li>\n  </ul>\n  ",
                    host: { '[class.avatar-list]': 'true' },
                    preserveWhitespaces: false
                }] }
    ];
    AvatarListComponent.propDecorators = {
        size: [{ type: Input }],
        _items: [{ type: ContentChildren, args: [AvatarListItemComponent,] }]
    };
    return AvatarListComponent;
}());
export { AvatarListComponent };
if (false) {
    /** @type {?} */
    AvatarListComponent.prototype._size;
    /** @type {?} */
    AvatarListComponent.prototype._avatarSize;
    /** @type {?} */
    AvatarListComponent.prototype._items;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9hdmF0YXItbGlzdC8iLCJzb3VyY2VzIjpbImF2YXRhci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O3FCQWtCN0QsRUFBRTsyQkFFSSxFQUFFOztJQUVoQixzQkFDSSxxQ0FBSTs7Ozs7UUFEUixVQUNTLEtBQTZDO1lBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDOUMsUUFBUSxLQUFLLEVBQUU7Z0JBQ2IsS0FBSyxPQUFPLENBQUM7Z0JBQ2IsS0FBSyxPQUFPLENBQUM7Z0JBQ2IsS0FBSyxTQUFTO29CQUNaLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO29CQUN6QixNQUFNO2dCQUNSO29CQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO29CQUMzQixNQUFNO2FBQ1Q7U0FDRjs7O09BQUE7O2dCQWpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSwrZkFTVDtvQkFDRCxJQUFJLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLEVBQUU7b0JBQ3ZDLG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7dUJBTUUsS0FBSzt5QkFlTCxlQUFlLFNBQUMsdUJBQXVCOzs4QkF0QzFDOztTQWtCYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBRdWVyeUxpc3QsIENvbnRlbnRDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXZhdGFyTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2F2YXRhci1saXN0LWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXZhdGFyLWxpc3QnLFxuICB0ZW1wbGF0ZTogYFxuICA8dWwgY2xhc3M9XCJhdmF0YXItbGlzdF9fd3JhcFwiPlxuICAgIDxsaSAqbmdGb3I9XCJsZXQgaSBvZiBfaXRlbXNcIiBjbGFzcz1cImF2YXRhci1saXN0X19pdGVte3tfc2l6ZSA/ICcgYXZhdGFyLWxpc3RfX2l0ZW0tJyArIF9zaXplIDogJyd9fVwiPlxuICAgICAgPG56LXRvb2x0aXAgKm5nSWY9XCJpLnRpcHNcIiBbbnpUaXRsZV09XCJpLnRpcHNcIj5cbiAgICAgICAgPG56LWF2YXRhciBuei10b29sdGlwIFtuelNyY109XCJpLnNyY1wiIFtuelRleHRdPVwiaS50ZXh0XCIgW256SWNvbl09XCJpLmljb25cIiBbbnpTaXplXT1cIl9hdmF0YXJTaXplXCI+PC9uei1hdmF0YXI+XG4gICAgICA8L256LXRvb2x0aXA+XG4gICAgICA8bnotYXZhdGFyICpuZ0lmPVwiIWkudGlwc1wiIFtuelNyY109XCJpLnNyY1wiIFtuelRleHRdPVwiaS50ZXh0XCIgW256SWNvbl09XCJpLmljb25cIiBbbnpTaXplXT1cIl9hdmF0YXJTaXplXCI+PC9uei1hdmF0YXI+XG4gICAgPC9saT5cbiAgPC91bD5cbiAgYCxcbiAgaG9zdDogeyAnW2NsYXNzLmF2YXRhci1saXN0XSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgQXZhdGFyTGlzdENvbXBvbmVudCB7XG4gIF9zaXplID0gJyc7XG5cbiAgX2F2YXRhclNpemUgPSAnJztcblxuICBASW5wdXQoKVxuICBzZXQgc2l6ZSh2YWx1ZTogJ2xhcmdlJyB8ICdzbWFsbCcgfCAnbWluaScgfCAnZGVmYXVsdCcpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWUgPT09ICdkZWZhdWx0JyA/ICcnIDogdmFsdWU7XG4gICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHRoaXMuX2F2YXRhclNpemUgPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9hdmF0YXJTaXplID0gJ3NtYWxsJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgQENvbnRlbnRDaGlsZHJlbihBdmF0YXJMaXN0SXRlbUNvbXBvbmVudClcbiAgX2l0ZW1zOiBRdWVyeUxpc3Q8QXZhdGFyTGlzdEl0ZW1Db21wb25lbnQ+O1xufVxuIl19