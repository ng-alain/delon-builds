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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9hdmF0YXItbGlzdC8iLCJzb3VyY2VzIjpbImF2YXRhci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7O3FCQWtCN0QsRUFBRTsyQkFFSSxFQUFFOztJQUVoQixzQkFDSSxxQ0FBSTs7Ozs7UUFEUixVQUNTLEtBQTZDO1lBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDOUMsUUFBUSxLQUFLLEVBQUU7Z0JBQ2IsS0FBSyxPQUFPLENBQUM7Z0JBQ2IsS0FBSyxPQUFPLENBQUM7Z0JBQ2IsS0FBSyxTQUFTO29CQUNaLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO29CQUN6QixNQUFNO2dCQUNSO29CQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO29CQUMzQixNQUFNO2FBQ1Q7U0FDRjs7O09BQUE7O2dCQWpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSwrZkFTVDtvQkFDRCxJQUFJLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLEVBQUU7b0JBQ3ZDLG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7dUJBTUUsS0FBSzt5QkFlTCxlQUFlLFNBQUMsdUJBQXVCOzs4QkF0QzFDOztTQWtCYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBRdWVyeUxpc3QsIENvbnRlbnRDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBdmF0YXJMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vYXZhdGFyLWxpc3QtaXRlbS5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhdmF0YXItbGlzdCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8dWwgY2xhc3M9XCJhdmF0YXItbGlzdF9fd3JhcFwiPlxyXG4gICAgPGxpICpuZ0Zvcj1cImxldCBpIG9mIF9pdGVtc1wiIGNsYXNzPVwiYXZhdGFyLWxpc3RfX2l0ZW17e19zaXplID8gJyBhdmF0YXItbGlzdF9faXRlbS0nICsgX3NpemUgOiAnJ319XCI+XHJcbiAgICAgIDxuei10b29sdGlwICpuZ0lmPVwiaS50aXBzXCIgW256VGl0bGVdPVwiaS50aXBzXCI+XHJcbiAgICAgICAgPG56LWF2YXRhciBuei10b29sdGlwIFtuelNyY109XCJpLnNyY1wiIFtuelRleHRdPVwiaS50ZXh0XCIgW256SWNvbl09XCJpLmljb25cIiBbbnpTaXplXT1cIl9hdmF0YXJTaXplXCI+PC9uei1hdmF0YXI+XHJcbiAgICAgIDwvbnotdG9vbHRpcD5cclxuICAgICAgPG56LWF2YXRhciAqbmdJZj1cIiFpLnRpcHNcIiBbbnpTcmNdPVwiaS5zcmNcIiBbbnpUZXh0XT1cImkudGV4dFwiIFtuekljb25dPVwiaS5pY29uXCIgW256U2l6ZV09XCJfYXZhdGFyU2l6ZVwiPjwvbnotYXZhdGFyPlxyXG4gICAgPC9saT5cclxuICA8L3VsPlxyXG4gIGAsXHJcbiAgaG9zdDogeyAnW2NsYXNzLmF2YXRhci1saXN0XSc6ICd0cnVlJyB9LFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXZhdGFyTGlzdENvbXBvbmVudCB7XHJcbiAgX3NpemUgPSAnJztcclxuXHJcbiAgX2F2YXRhclNpemUgPSAnJztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2l6ZSh2YWx1ZTogJ2xhcmdlJyB8ICdzbWFsbCcgfCAnbWluaScgfCAnZGVmYXVsdCcpIHtcclxuICAgIHRoaXMuX3NpemUgPSB2YWx1ZSA9PT0gJ2RlZmF1bHQnID8gJycgOiB2YWx1ZTtcclxuICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgY2FzZSAnbGFyZ2UnOlxyXG4gICAgICBjYXNlICdzbWFsbCc6XHJcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxyXG4gICAgICAgIHRoaXMuX2F2YXRhclNpemUgPSB2YWx1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aGlzLl9hdmF0YXJTaXplID0gJ3NtYWxsJztcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQXZhdGFyTGlzdEl0ZW1Db21wb25lbnQpXHJcbiAgX2l0ZW1zOiBRdWVyeUxpc3Q8QXZhdGFyTGlzdEl0ZW1Db21wb25lbnQ+O1xyXG59XHJcbiJdfQ==