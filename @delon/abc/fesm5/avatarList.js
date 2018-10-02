import { Component, Input, ContentChildren, NgModule } from '@angular/core';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { AvatarListItemComponent, AvatarListComponent, AvatarListModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyTGlzdC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9hdmF0YXItbGlzdC9hdmF0YXItbGlzdC1pdGVtLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2FiYy9hdmF0YXItbGlzdC9hdmF0YXItbGlzdC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvYXZhdGFyLWxpc3QvYXZhdGFyLWxpc3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXZhdGFyLWxpc3QtaXRlbSwgW2F2YXRhci1saXN0LWl0ZW1dJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXZhdGFyTGlzdEl0ZW1Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGlwczogc3RyaW5nO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFF1ZXJ5TGlzdCwgQ29udGVudENoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF2YXRhckxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9hdmF0YXItbGlzdC1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2F2YXRhci1saXN0JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDx1bCBjbGFzcz1cImF2YXRhci1saXN0X193cmFwXCI+XHJcbiAgICA8bGkgKm5nRm9yPVwibGV0IGkgb2YgX2l0ZW1zXCIgY2xhc3M9XCJhdmF0YXItbGlzdF9faXRlbXt7X3NpemUgPyAnIGF2YXRhci1saXN0X19pdGVtLScgKyBfc2l6ZSA6ICcnfX1cIj5cclxuICAgICAgPG56LXRvb2x0aXAgKm5nSWY9XCJpLnRpcHNcIiBbbnpUaXRsZV09XCJpLnRpcHNcIj5cclxuICAgICAgICA8bnotYXZhdGFyIG56LXRvb2x0aXAgW256U3JjXT1cImkuc3JjXCIgW256VGV4dF09XCJpLnRleHRcIiBbbnpJY29uXT1cImkuaWNvblwiIFtuelNpemVdPVwiX2F2YXRhclNpemVcIj48L256LWF2YXRhcj5cclxuICAgICAgPC9uei10b29sdGlwPlxyXG4gICAgICA8bnotYXZhdGFyICpuZ0lmPVwiIWkudGlwc1wiIFtuelNyY109XCJpLnNyY1wiIFtuelRleHRdPVwiaS50ZXh0XCIgW256SWNvbl09XCJpLmljb25cIiBbbnpTaXplXT1cIl9hdmF0YXJTaXplXCI+PC9uei1hdmF0YXI+XHJcbiAgICA8L2xpPlxyXG4gIDwvdWw+XHJcbiAgYCxcclxuICBob3N0OiB7ICdbY2xhc3MuYXZhdGFyLWxpc3RdJzogJ3RydWUnIH0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdmF0YXJMaXN0Q29tcG9uZW50IHtcclxuICBfc2l6ZSA9ICcnO1xyXG5cclxuICBfYXZhdGFyU2l6ZSA9ICcnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzaXplKHZhbHVlOiAnbGFyZ2UnIHwgJ3NtYWxsJyB8ICdtaW5pJyB8ICdkZWZhdWx0Jykge1xyXG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlID09PSAnZGVmYXVsdCcgPyAnJyA6IHZhbHVlO1xyXG4gICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICBjYXNlICdsYXJnZSc6XHJcbiAgICAgIGNhc2UgJ3NtYWxsJzpcclxuICAgICAgY2FzZSAnZGVmYXVsdCc6XHJcbiAgICAgICAgdGhpcy5fYXZhdGFyU2l6ZSA9IHZhbHVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRoaXMuX2F2YXRhclNpemUgPSAnc21hbGwnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihBdmF0YXJMaXN0SXRlbUNvbXBvbmVudClcclxuICBfaXRlbXM6IFF1ZXJ5TGlzdDxBdmF0YXJMaXN0SXRlbUNvbXBvbmVudD47XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuXHJcbmltcG9ydCB7IEF2YXRhckxpc3RDb21wb25lbnQgfSBmcm9tICcuL2F2YXRhci1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF2YXRhckxpc3RJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9hdmF0YXItbGlzdC1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW0F2YXRhckxpc3RDb21wb25lbnQsIEF2YXRhckxpc3RJdGVtQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxyXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEF2YXRhckxpc3RNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEF2YXRhckxpc3RNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O2dCQUVDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0NBQXNDO29CQUNoRCxRQUFRLEVBQUUsMkJBQTJCO2lCQUN0Qzs7O3NCQUVFLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7O2tDQVZSOzs7Ozs7O0FDQUE7O3FCQW1CVSxFQUFFOzJCQUVJLEVBQUU7O0lBRWhCLHNCQUNJLHFDQUFJOzs7OztRQURSLFVBQ1MsS0FBNkM7WUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEtBQUssU0FBUyxHQUFHLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDOUMsUUFBUSxLQUFLO2dCQUNYLEtBQUssT0FBTyxDQUFDO2dCQUNiLEtBQUssT0FBTyxDQUFDO2dCQUNiLEtBQUssU0FBUztvQkFDWixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztvQkFDekIsTUFBTTtnQkFDUjtvQkFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztvQkFDM0IsTUFBTTthQUNUO1NBQ0Y7OztPQUFBOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsK2ZBU1Q7b0JBQ0QsSUFBSSxFQUFFLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxFQUFFO29CQUN2QyxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7O3VCQU1FLEtBQUs7eUJBZUwsZUFBZSxTQUFDLHVCQUF1Qjs7OEJBdEMxQzs7Ozs7Ozs7QUNPQSxJQUFNLFVBQVUsR0FBRyxDQUFDLG1CQUFtQixFQUFFLHVCQUF1QixDQUFDLENBQUM7Ozs7Ozs7SUFRekQsd0JBQU87OztJQUFkO1FBQ0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDdEQ7O2dCQVJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUM7b0JBQzFDLFlBQVksV0FBTSxVQUFVLENBQUM7b0JBQzdCLE9BQU8sV0FBTSxVQUFVLENBQUM7aUJBQ3pCOzsyQkFiRDs7Ozs7Ozs7Ozs7Ozs7OyJ9