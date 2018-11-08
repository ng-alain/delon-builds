import { Component, Input, ContentChildren, NgModule } from '@angular/core';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var AvatarListItemComponent = /** @class */ (function () {
    function AvatarListItemComponent() {
    }
    AvatarListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'avatar-list-item, [avatar-list-item]',
                    template: "<ng-content></ng-content>"
                }] }
    ];
    AvatarListItemComponent.propDecorators = {
        src: [{ type: Input }],
        text: [{ type: Input }],
        icon: [{ type: Input }],
        tips: [{ type: Input }]
    };
    return AvatarListItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [AvatarListComponent, AvatarListItemComponent];
var AvatarListModule = /** @class */ (function () {
    function AvatarListModule() {
    }
    /**
     * @return {?}
     */
    AvatarListModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: AvatarListModule, providers: [] };
    };
    AvatarListModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NgZorroAntdModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return AvatarListModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { AvatarListItemComponent, AvatarListComponent, AvatarListModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyTGlzdC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9hdmF0YXItbGlzdC9hdmF0YXItbGlzdC1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy9hdmF0YXItbGlzdC9hdmF0YXItbGlzdC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvYXZhdGFyLWxpc3QvYXZhdGFyLWxpc3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXZhdGFyLWxpc3QtaXRlbSwgW2F2YXRhci1saXN0LWl0ZW1dJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbn0pXG5leHBvcnQgY2xhc3MgQXZhdGFyTGlzdEl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKSBzcmM6IHN0cmluZztcbiAgQElucHV0KCkgdGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpcHM6IHN0cmluZztcbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFF1ZXJ5TGlzdCwgQ29udGVudENoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdmF0YXJMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vYXZhdGFyLWxpc3QtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdmF0YXItbGlzdCcsXG4gIHRlbXBsYXRlOiBgXG4gIDx1bCBjbGFzcz1cImF2YXRhci1saXN0X193cmFwXCI+XG4gICAgPGxpICpuZ0Zvcj1cImxldCBpIG9mIF9pdGVtc1wiIGNsYXNzPVwiYXZhdGFyLWxpc3RfX2l0ZW17e19zaXplID8gJyBhdmF0YXItbGlzdF9faXRlbS0nICsgX3NpemUgOiAnJ319XCI+XG4gICAgICA8bnotdG9vbHRpcCAqbmdJZj1cImkudGlwc1wiIFtuelRpdGxlXT1cImkudGlwc1wiPlxuICAgICAgICA8bnotYXZhdGFyIG56LXRvb2x0aXAgW256U3JjXT1cImkuc3JjXCIgW256VGV4dF09XCJpLnRleHRcIiBbbnpJY29uXT1cImkuaWNvblwiIFtuelNpemVdPVwiX2F2YXRhclNpemVcIj48L256LWF2YXRhcj5cbiAgICAgIDwvbnotdG9vbHRpcD5cbiAgICAgIDxuei1hdmF0YXIgKm5nSWY9XCIhaS50aXBzXCIgW256U3JjXT1cImkuc3JjXCIgW256VGV4dF09XCJpLnRleHRcIiBbbnpJY29uXT1cImkuaWNvblwiIFtuelNpemVdPVwiX2F2YXRhclNpemVcIj48L256LWF2YXRhcj5cbiAgICA8L2xpPlxuICA8L3VsPlxuICBgLFxuICBob3N0OiB7ICdbY2xhc3MuYXZhdGFyLWxpc3RdJzogJ3RydWUnIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBBdmF0YXJMaXN0Q29tcG9uZW50IHtcbiAgX3NpemUgPSAnJztcblxuICBfYXZhdGFyU2l6ZSA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBzaXplKHZhbHVlOiAnbGFyZ2UnIHwgJ3NtYWxsJyB8ICdtaW5pJyB8ICdkZWZhdWx0Jykge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZSA9PT0gJ2RlZmF1bHQnID8gJycgOiB2YWx1ZTtcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XG4gICAgICBjYXNlICdsYXJnZSc6XG4gICAgICBjYXNlICdzbWFsbCc6XG4gICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgdGhpcy5fYXZhdGFyU2l6ZSA9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuX2F2YXRhclNpemUgPSAnc21hbGwnO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBAQ29udGVudENoaWxkcmVuKEF2YXRhckxpc3RJdGVtQ29tcG9uZW50KVxuICBfaXRlbXM6IFF1ZXJ5TGlzdDxBdmF0YXJMaXN0SXRlbUNvbXBvbmVudD47XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5cbmltcG9ydCB7IEF2YXRhckxpc3RDb21wb25lbnQgfSBmcm9tICcuL2F2YXRhci1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdmF0YXJMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vYXZhdGFyLWxpc3QtaXRlbS5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW0F2YXRhckxpc3RDb21wb25lbnQsIEF2YXRhckxpc3RJdGVtQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBBdmF0YXJMaXN0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEF2YXRhckxpc3RNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0lBRUE7S0FTQzs7Z0JBVEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQ0FBc0M7b0JBQ2hELFFBQVEsRUFBRSwyQkFBMkI7aUJBQ3RDOzs7c0JBRUUsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7SUFDUiw4QkFBQztDQVREOzs7Ozs7QUNGQTtJQUdBO1FBZ0JFLFVBQUssR0FBRyxFQUFFLENBQUM7UUFFWCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztLQW1CbEI7SUFqQkMsc0JBQ0kscUNBQUk7Ozs7O1FBRFIsVUFDUyxLQUE2QztZQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssS0FBSyxTQUFTLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQztZQUM5QyxRQUFRLEtBQUs7Z0JBQ1gsS0FBSyxPQUFPLENBQUM7Z0JBQ2IsS0FBSyxPQUFPLENBQUM7Z0JBQ2IsS0FBSyxTQUFTO29CQUNaLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO29CQUN6QixNQUFNO2dCQUNSO29CQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO29CQUMzQixNQUFNO2FBQ1Q7U0FDRjs7O09BQUE7O2dCQWpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSwrZkFTVDtvQkFDRCxJQUFJLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLEVBQUU7b0JBQ3ZDLG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7dUJBTUUsS0FBSzt5QkFlTCxlQUFlLFNBQUMsdUJBQXVCOztJQUUxQywwQkFBQztDQXJDRDs7Ozs7OztJQ0lNLFVBQVUsR0FBRyxDQUFDLG1CQUFtQixFQUFFLHVCQUF1QixDQUFDO0FBRWpFO0lBQUE7S0FTQzs7OztJQUhRLHdCQUFPOzs7SUFBZDtRQUNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO0tBQ3REOztnQkFSRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDO29CQUMxQyxZQUFZLFdBQU0sVUFBVSxDQUFDO29CQUM3QixPQUFPLFdBQU0sVUFBVSxDQUFDO2lCQUN6Qjs7SUFLRCx1QkFBQztDQVREOzs7Ozs7Ozs7Ozs7OzsifQ==